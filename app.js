const WHATSAPP_NUMBER = "5359208138";

const categories = [
    { id: 'all', name: 'Todos' },            
    { id: 'carnes', name: '🥩 Cárnicos' },
    { id: 'despensa', name: '🌾 Despensa & Granos' },
    { id: 'aseo', name: '🧼 Aseo e Higiene' },
    { id: 'bebidas', name: '🥤 Bebidas' },
    { id: 'combos', name: '🔥 Combos de Oferta' }
];
// Configuración del cliente Supabase
const SUPABASE_URL = "https://omvgderozucdkctjivgx.supabase.co"; // Reemplaza con tu URL
const SUPABASE_KEY = "sb_publishable_DZGpJPCufNaB7PBCRwZtpg_4op3Srsx";             // Reemplaza con tu clave anon
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Arreglo de productos (se llenará desde la base de datos)
let products = [];

async function fetchProductsFromSupabase() {
    try {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .order('id', { ascending: true });

        if (error) throw error;

        if (data) {
            // Mapeamos los datos para adaptarlos al formato exacto de tu tienda
            products = data.map(p => ({
                id: p.id,
                name: p.name,
                category: p.category,
                price: parseFloat(p.price),
                currency: p.currency || 'CUP',
                badge: p.badge,
                badgeColor: p.badge_color,
                image: p.image,
                description: p.description
            }));

            // Dibujamos las tarjetas en pantalla con los datos recién obtenidos
            renderProducts();
        }
    } catch (err) {
        console.error("Error cargando productos desde Supabase:", err.message);
    }
}



// Cargar el carrito guardado en localStorage al iniciar la aplicación
let cart = JSON.parse(localStorage.getItem('bazar_cart')) || [];
let currentCategory = 'all';
let searchQuery = '';

// Guardar los datos del carrito en el navegador del usuario
function saveCart() {
    localStorage.setItem('bazar_cart', JSON.stringify(cart));
}

function normalizeText(text) {
    return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

function formatPrice(price, currency = 'CUP') {
    return currency === 'USD' ? `$${price.toFixed(2)} USD` : `$${price.toLocaleString()} CUP`;
}

window.addEventListener('DOMContentLoaded', () => {
    fetchProductsFromSupabase(); // <--- Carga los productos desde la nube
    renderCategories();
    renderProducts();
    updateCartUI();
    if (window.lucide) lucide.createIcons();

    const searchInput = document.getElementById('searchInput');
    const searchInputMobile = document.getElementById('searchInputMobile');
    const clearSearchBtn = document.getElementById('clearSearch');

    const handleSearch = (e) => {
        searchQuery = normalizeText(e.target.value);
        if (clearSearchBtn) {
            if (searchQuery.length > 0) {
                clearSearchBtn.classList.remove('hidden');
            } else {
                clearSearchBtn.classList.add('hidden');
            }
        }
        renderProducts();
    };

    if (searchInput) searchInput.addEventListener('input', handleSearch);
    if (searchInputMobile) searchInputMobile.addEventListener('input', handleSearch);

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            if (searchInputMobile) searchInputMobile.value = '';
            searchQuery = '';
            clearSearchBtn.classList.add('hidden');
            renderProducts();
        });
    }
});

function renderCategories() {
    const container = document.getElementById('categoryChips');
    if (!container) return;

    container.innerHTML = categories.map(cat => `
        <button onclick="selectCategory('${cat.id}')" 
            class="px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                currentCategory === cat.id 
                ? 'bg-emerald-600 text-white shadow-md font-semibold' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }">
            ${cat.name}
        </button>
    `).join('');
}

function selectCategory(catId) {
    currentCategory = catId;
    renderCategories();
    renderProducts();

    const catObj = categories.find(c => c.id === catId);
    const titleElem = document.getElementById('currentCategoryTitle');
    if (titleElem) titleElem.innerText = catObj ? catObj.name : 'Productos';
}

// Función para renderizar los productos en la tienda
function renderProducts(productsToRender = products) {
    const grid = document.getElementById('productGrid');
    
    if (!grid) {
        console.error("No se encontró el contenedor 'productGrid' en el DOM.");
        return;
    }

    if (!productsToRender || productsToRender.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-12 text-slate-400">
                <p class="text-lg font-medium">No hay productos disponibles en esta categoría.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = productsToRender.map(product => {
        // 1. Manejo dinámico de rutas de imágenes (GitHub Pages + Supabase Storage)
        let imageUrl = product.image;
        
        if (!imageUrl) {
            imageUrl = 'https://via.placeholder.com/300?text=Sin+Imagen';
        } else if (!imageUrl.startsWith('http://') && !imageUrl.startsWith('https://')) {
            // Si es una ruta relativa de GitHub (ej: "imagen/Combo.jpg"), asegura que no falte la barra si aplica
            imageUrl = imageUrl.startsWith('/') ? imageUrl.slice(1) : imageUrl;
        }

        // 2. Manejo de estado "Agotado" u otras etiquetas
        const isAgotado = product.badge && product.badge.toLowerCase() === 'agotado';
        const badgeColor = product.badge_color || (isAgotado ? 'bg-red-500' : 'bg-emerald-600');

        return `
            <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
                <div class="relative">
                    <!-- Imagen con respaldo si falla la carga -->
                    <img 
                        src="${imageUrl}" 
                        alt="${product.name}" 
                        class="w-full h-48 object-cover ${isAgotado ? 'grayscale opacity-75' : ''}"
                        onerror="this.onerror=null; this.src='https://via.placeholder.com/300?text=Imagen+No+Disponible';"
                    >
                    
                    <!-- Insignia / Badge (Oferta, Agotado, Más Vendido, etc.) -->
                    ${product.badge ? `
                        <span class="absolute top-3 right-3 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm ${badgeColor}">
                            ${product.badge}
                        </span>
                    ` : ''}
                </div>

                <div class="p-4 flex-1 flex flex-col justify-between">
                    <div>
                        <h3 class="font-bold text-slate-800 text-sm sm:text-base leading-snug mb-1">
                            ${product.name}
                        </h3>
                        <p class="text-xs text-slate-500 line-clamp-2 mb-3">
                            ${product.description || 'Sin descripción disponible.'}
                        </p>
                    </div>

                    <div class="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                        <div>
                            <span class="text-xs text-slate-400 block font-medium">Precio</span>
                            <span class="text-lg font-black text-slate-900">
                                $${product.price} <span class="text-xs font-bold text-emerald-600">${product.currency || 'CUP'}</span>
                            </span>
                        </div>

                        <!-- Botón Pedir por WhatsApp -->
                        <button 
                            onclick="sendWhatsAppOrder('${product.name}', ${product.price}, '${product.currency || 'CUP'}')"
                            class="bg-emerald-600 hover:bg-emerald-700 text-white p-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-sm transition-colors ${isAgotado ? 'opacity-50 cursor-not-allowed' : ''}"
                            ${isAgotado ? 'disabled' : ''}
                        >
                            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                            </svg>
                            <span class="hidden sm:inline">Pedir</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || (product.badge && product.badge.toLowerCase() === 'agotado')) return;

    const existingIndex = cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    renderProducts();
}

function updateQuantity(productId, change) {
    const index = cart.findIndex(item => item.id === productId);
    if (index > -1) {
        cart[index].quantity += change;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
    }
    saveCart();
    updateCartUI();
    renderProducts();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const totalCUP = cart.filter(i => i.currency === 'CUP').reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalUSD = cart.filter(i => i.currency === 'USD').reduce((sum, item) => sum + (item.price * item.quantity), 0);

    let displayTotal = '';
    if (totalCUP > 0 && totalUSD > 0) {
        displayTotal = `$${totalCUP.toLocaleString()} CUP + $${totalUSD.toFixed(2)} USD`;
    } else if (totalUSD > 0) {
        displayTotal = `$${totalUSD.toFixed(2)} USD`;
    } else {
        displayTotal = `$${totalCUP.toLocaleString()} CUP`;
    }

    const badgeElem = document.getElementById('cartBadge');
    if (badgeElem) badgeElem.innerText = totalItems;

    const totalHeader = document.getElementById('cartTotalHeader');
    if (totalHeader) totalHeader.innerText = displayTotal;

    const subtotalElem = document.getElementById('cartSubtotal');
    if (subtotalElem) subtotalElem.innerText = displayTotal;

    const totalElem = document.getElementById('cartTotal');
    if (totalElem) totalElem.innerText = displayTotal;

    const cartItemsContainer = document.getElementById('cartItemsContainer');

    if (cartItemsContainer) {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="text-center py-12">
                    <i data-lucide="shopping-bag" class="w-12 h-12 text-slate-300 mx-auto mb-3"></i>
                    <p class="text-sm font-semibold text-slate-700">Tu carrito está vacío</p>
                    <p class="text-xs text-slate-400 mt-1">Explora nuestro catálogo y agrega productos para realizar tu pedido.</p>
                </div>
            `;
        } else {
            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="pt-3 first:pt-0 flex items-center justify-between gap-3 border-b pb-3 last:border-b-0">
                    <div class="flex items-center gap-3">
                        <img src="${item.image}" alt="${item.name}" class="w-12 h-12 rounded-lg object-cover bg-slate-100 flex-shrink-0" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80';">
                        <div>
                            <h4 class="text-xs font-bold text-slate-800 line-clamp-1">${item.name}</h4>
                            <p class="text-xs text-slate-500">${formatPrice(item.price, item.currency)} c/u</p>
                        </div>
                    </div>

                    <div class="flex items-center gap-2">
                        <div class="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200">
                            <button onclick="updateQuantity(${item.id}, -1)" class="w-6 h-6 rounded bg-white text-slate-700 shadow-sm font-bold flex items-center justify-center text-xs hover:bg-slate-200 transition">-</button>
                            <span class="px-2 text-xs font-bold text-slate-800">${item.quantity}</span>
                            <button onclick="updateQuantity(${item.id}, 1)" class="w-6 h-6 rounded bg-emerald-600 text-white shadow-sm font-bold flex items-center justify-center text-xs hover:bg-emerald-700 transition">+</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    if (window.lucide) lucide.createIcons();
}

function toggleCartModal(open) {
    const modal = document.getElementById('cartModal');
    if (modal) {
        if (open) {
            modal.classList.remove('hidden');
        } else {
            modal.classList.add('hidden');
        }
    }
}

function sendOrderWhatsApp() {
    if (cart.length === 0) {
        alert("Por favor, agrega al menos un producto al pedido antes de continuar.");
        return;
    }

    const nameElem = document.getElementById('clientName');
    const phoneElem = document.getElementById('clientPhone');
    const locationElem = document.getElementById('clientLocation');
    const addressElem = document.getElementById('clientAddress');
    const notesElem = document.getElementById('clientNotes');

    const name = nameElem ? nameElem.value.trim() : '';
    const phone = phoneElem ? phoneElem.value.trim() : '';
    const location = locationElem ? locationElem.value.trim() : '';
    const address = addressElem ? addressElem.value.trim() : '';
    const notes = notesElem ? notesElem.value.trim() : '';

    if (!name || !phone || !location || !address) {
        alert("Por favor completa los campos obligatorios del formulario (Nombre, Teléfono, Municipio y Dirección).");
        return;
    }

    let message = `🛒 *NUEVO PEDIDO - BAZAR DREAM BIG*\n`;
    message += `-----------------------------------\n`;
    message += `👤 *Cliente:* ${name}\n`;
    message += `📞 *Teléfono:* ${phone}\n`;
    message += `📍 *Municipio / Zona:* ${location}\n`;
    message += `🏠 *Dirección:* ${address}\n`;
    if (notes) {
        message += `📝 *Notas:* ${notes}\n`;
    }
    message += `-----------------------------------\n`;
    message += `📋 *DETALLE DEL PEDIDO:*\n\n`;

    cart.forEach((item, index) => {
        message += `${index + 1}. *${item.name}*\n   ${item.quantity}x @ ${formatPrice(item.price, item.currency)} = *${formatPrice(item.price * item.quantity, item.currency)}*\n`;
    });

    const totalCUP = cart.filter(i => i.currency === 'CUP').reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalUSD = cart.filter(i => i.currency === 'USD').reduce((sum, item) => sum + (item.price * item.quantity), 0);

    message += `\n-----------------------------------\n`;
    message += `💰 *TOTAL ESTIMADO:*`;
    if (totalCUP > 0) message += `\n- $${totalCUP.toLocaleString()} CUP`;
    if (totalUSD > 0) message += `\n- $${totalUSD.toFixed(2)} USD`;
    message += `\n-----------------------------------\n`;
    message += `Por favor, confirmemos disponibilidad y método de pago para completar el envío. ¡Gracias!`;

    // Vaciar el carrito tras el envío si el usuario lo confirma
    cart = [];
    saveCart();
    updateCartUI();
    renderProducts();

    const encodedUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(encodedUrl, '_blank');
}

// Contador de visitas
async function updateVisitCount() {
    try {
        const key = 'bazar_drem_big_visitas_2026';
        const response = await fetch(`https://countapi.mileshilliard.com/api/v1/hit/${key}`);
        const data = await response.json();
        
        const countElement = document.getElementById('visitCount');
        if (countElement && data.value) {
            countElement.textContent = Number(data.value).toLocaleString();
        }
    } catch (error) {
        console.error('Error al registrar la visita:', error);
        const countElement = document.getElementById('visitCount');
        if (countElement) countElement.textContent = '1';
    }
}

document.addEventListener('DOMContentLoaded', updateVisitCount);