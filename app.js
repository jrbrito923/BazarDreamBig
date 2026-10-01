const WHATSAPP_NUMBER = "5359208138";

const categories = [
    { id: 'all', name: 'Todos' },            
    { id: 'carnes', name: '🥩 Cárnicos' },
    { id: 'despensa', name: '🌾 Despensa & Granos' },
    { id: 'aseo', name: '🧼 Aseo e Higiene' },
    { id: 'bebidas', name: '🥤 Bebidas' },
    { id: 'combos', name: '🔥 Combos de Oferta' }
];

const products = [
    {
        id: 1,
        name: 'Combo Familiar Supremo',
        category: 'combos',
        price: 65.00,
        currency: 'USD',
        badge: 'Más Vendido',
        badgeColor: 'bg-amber-500',
        image: 'imagen/ComboSupremo.jpg',
        description: 'Incluye: 11lb Pollo, 7lb Lomo deshuesado de Cerdo, 1 cartón de huevo (30), 2L Aceite, 5lb Arroz, 2lb Frijoles, 2 espaguetis de (500gr), 2 Pasta de tomate.'
    },
    {
        id: 2,
        name: 'Lomo deshuesado de cerdo',
        category: 'carnes',
        price: 2100.00,
        currency: 'CUP',
        badge: 'Oferta',
        badgeColor: 'bg-emerald-500',
        image: 'imagen/LOMO-DE-CERDO.jpg',
        description: 'Incluye: Lomo de Cerdo por Libra.'
    },
    {
        id: 3,
        name: 'Jamonada de Cerdo',
        category: 'carnes',
        price: 600.00,
        currency: 'CUP',
        badge: 'Agotado',
        badgeColor: 'bg-red-500',
        image: 'imagen/jamonada de cerdo.jpg',
        description: 'Incluye: jamonada por libra.'
    },
    {
        id: 4,
        name: 'Hamburguesa',
        category: 'carnes',
        price: 150.00,
        currency: 'CUP',
        badge: 'Agotado',
        badgeColor: 'bg-red-500',
        image: 'imagen/hamburguesa.jpg',
        description: 'Incluye: hamburguesa por unidad.'
    },
    {
        id: 5,
        name: 'Picadillo MDM',
        category: 'carnes',
        price: 700.00,
        currency: 'CUP',
        badge: 'Oferta',
        badgeColor: 'bg-emerald-500',
        image: 'imagen/picadillo mdm.jpg',
        description: 'Incluye: picadillo MDM por libras.'
    },
    {
        id: 6,
        name: 'Carne de Pollo',
        category: 'carnes',
        price: 8500.00,
        currency: 'CUP',
        badge: 'Oferta',
        badgeColor: 'bg-emerald-500',
        image: 'imagen/Pollo.jpg',
        description: 'Incluye: Paquete de 10 Lbs de Cuartos.'
    },
    {
        id: 7,
        name: 'Toallitas húmedas',
        category: 'aseo',
        price: 1200.00,
        currency: 'CUP',
        badge: null,
        image: 'imagen/toallitahumedaBrisaViva.jpg',
        description: 'Paquete de toallitas húmedas multiusos.'
    },
    {
        id: 8,
        name: 'Papel Sanitario la Excelencia',
        category: 'aseo',
        price: 600.00,
        currency: 'CUP',
        badge: null,
        image: 'imagen/papelexcelencia.jpg',
        description: 'Papel sanitario 4 rollos súper suave 2 capas.'
    },
    {
        id: 9,
        name: 'Detergente Yeya',
        category: 'aseo',
        price: 950.00,
        currency: 'CUP',
        badge: null,
        image: 'imagen/detergenteYeya.jpg',
        description: 'Detergente en polvo multiusos antibacterial y microbial (500gr).'
    },
    {
        id: 10,
        name: 'Pasta Dental RoyalFresh',
        category: 'aseo',
        price: 650.00,
        currency: 'CUP',
        badge: null,
        image: 'imagen/pastaRoyalfresh.jpg',
        description: 'Pasta dental.'
    },
    {
        id: 11,
        name: 'Pasta Dental Sonríe',
        category: 'aseo',
        price: 600.00,
        currency: 'CUP',
        badge: null,
        image: 'imagen/pastadienteSonrie.jpg',
        description: 'Pasta dental.'
    },
    {
        id: 12,
        name: 'Jabón Nácar',
        category: 'aseo',
        price: 350.00,
        currency: 'CUP',
        badge: null,
        image: 'imagen/jabonNacar.jpg',
        description: 'Jabón nácar 100 gr.'
    },
    {
        id: 13,
        name: 'Arroz Kanga (1 kg)',
        category: 'despensa',
        price: 900.00,
        currency: 'CUP',
        badge: null,
        image: 'imagen/arrozkanga.jpg',
        description: 'Arroz de grano largo entero, ideal para las comidas diarias de toda la familia.'
    },
    {
        id: 14,
        name: 'Arroz Pateko (1 kg)',
        category: 'despensa',
        price: 920.00,
        currency: 'CUP',
        badge: null,
        image: 'imagen/arrozpateko.jpg',
        description: 'Arroz de grano largo entero, ideal para las comidas diarias de toda la familia.'
    },
    {
        id: 15,
        name: 'Aceite Sublime Sellado (900 ml)',
        category: 'despensa',
        price: 2800.00,
        currency: 'CUP',
        badge: null,
        image: 'imagen/aceiteSublime.jpg',
        description: 'Aceite vegetal comestible, especial para freír y cocinar.'
    },
    {
        id: 16,
        name: 'Azúcar Blanca',
        category: 'despensa',
        price: 550.00,
        currency: 'CUP',
        badge: null,
        image: 'imagen/azucarblanca.jpg',
        description: 'Azúcar blanca por libras.'
    },
    {
        id: 17,
        name: 'Espagueti (500 gr)',
        category: 'despensa',
        price: 600.00,
        currency: 'CUP',
        badge: null,
        image: 'imagen/espaguetiPastaMondo.jpg',
        description: 'Espagueti paquete de 500g.'
    },
    {
        id: 18,
        name: 'Leche Condensada (390 gr)',
        category: 'despensa',
        price: 950.00,
        currency: 'CUP',
        badge: null,
        image: 'imagen/lecheRayan.jpg',
        description: 'Leche condensada.'
    },
    {
        id: 19,
        name: 'Pasta de Tomate (400 gr)',
        category: 'despensa',
        price: 720.00,
        currency: 'CUP',
        badge: null,
        image: 'imagen/PastaGuerrero.jpg',
        description: 'Pasta de tomate Guerrero 400g.'
    },
    {
        id: 20,
        name: 'Mostaza (300 gr)',
        category: 'despensa',
        price: 1500.00,
        currency: 'CUP',
        badge: null,
        image: 'imagen/mostazaazotea.jpg',
        description: 'Mostaza 300g.'
    },
    {
        id: 21,
        name: 'Sazón Mina',
        category: 'despensa',
        price: 60.00,
        currency: 'CUP',
        badge: null,
        image: 'imagen/sasonmina.jpg',
        description: 'Sazón Mina 5gr.'
    },
    {
        id: 22,
        name: 'Cerveza Cristal (Pack 24 latas)',
        category: 'bebidas',
        price: 840.00,
        currency: 'CUP',
        badge: 'Agotado',
        badgeColor: 'bg-red-500',
        image: 'imagen/cervezacristal.jpg',
        description: 'Caja de 24 latas de cerveza.'
    },
    {
        id: 23,
        name: 'Cerveza Windmill (Pack 24 latas)',
        category: 'bebidas',
        price: 600.00,
        currency: 'CUP',
        badge: 'Frío Garantizado',
        badgeColor: 'bg-purple-500',
        image: 'imagen/cervezawidmill.jpg',
        description: 'Caja de 24 latas de cerveza.'
    },
    {
        id: 24,
        name: 'Cerveza Valmero (Pack 24 latas)',
        category: 'bebidas',
        price: 530.00,
        currency: 'CUP',
        badge: 'Frío Garantizado',
        badgeColor: 'bg-purple-500',
        image: 'imagen/cervezavalmero.jpg',
        description: 'Caja de 24 latas de cerveza.'
    },
    {
        id: 25,
        name: 'Ron Chancelier',
        category: 'bebidas',
        price: 3500.00,
        currency: 'CUP',
        badge: null,
        image: 'imagen/ronChancelier.jpg',
        description: 'Botella de 1L.'
    },
    {
        id: 26,
        name: 'Shaka',
        category: 'bebidas',
        price: 600.00,
        currency: 'CUP',
        badge: null,
        image: 'imagen/shaka.jpg',
        description: 'Bebida compuesta por vodka y energizante.'
    },
    {
        id: 27,
        name: 'Refresco Brío',
        category: 'bebidas',
        price: 550.00,
        currency: 'CUP',
        badge: null,
        image: 'imagen/refrescoBrio1.jpg',
        description: 'Refresco en lata.'
    },
    {
        id: 28,
        name: 'Agua Ciego Montero',
        category: 'bebidas',
        price: 400.00,
        currency: 'CUP',
        badge: null,
        image: 'imagen/aguaCiegoMontero.jpg',
        description: 'Agua mineral en botella/lata.'
    },
    {
        id: 29,
        name: 'Malta Santa Isabel',
        category: 'bebidas',
        price: 650.00,
        currency: 'CUP',
        badge: null,
        image: 'imagen/maltaSantaIsabel.jpg',
        description: 'Malta de 330ml.'
    },
    {
        id: 30,
        name: 'Malta Guajira',
        category: 'bebidas',
        price: 1900.00,
        currency: 'CUP',
        badge: null,
        image: 'imagen/Maltaguajira.jpg',
        description: 'Malta de 1500ml.'
    },
    {
        id: 32,
        name: 'Cartón De Huevo',
        category: 'carnes',
        price: 4100.00,
        currency: 'CUP',
        badge: 'Oferta',
        badgeColor: 'bg-emerald-500',
        image: 'imagen/huevo.jpg',
        description: 'Incluye: 30 unidades de huevos frescos.'
    }
];

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

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');
    if (!grid) return;

    const filtered = products.filter(p => {
        const matchesCategory = (currentCategory === 'all' || p.category === currentCategory);
        const nameNorm = normalizeText(p.name);
        const descNorm = normalizeText(p.description);
        const matchesSearch = nameNorm.includes(searchQuery) || descNorm.includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    const countElem = document.getElementById('productCount');
    if (countElem) countElem.innerText = `Mostrando ${filtered.length} de ${products.length} productos`;

    if (filtered.length === 0) {
        grid.innerHTML = '';
        if (noResults) noResults.classList.remove('hidden');
        return;
    }

    if (noResults) noResults.classList.add('hidden');

    grid.innerHTML = filtered.map((product, index) => {
        const cartItem = cart.find(item => item.id === product.id);
        const quantityInCart = cartItem ? cartItem.quantity : 0;
        const isAgotado = product.badge && product.badge.toLowerCase() === 'agotado';

        return `
            <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between h-full group">
                <!-- Contenedor con efecto Skeleton (animate-pulse) mientras carga la imagen -->
                <div class="relative w-full aspect-square bg-slate-200 animate-pulse overflow-hidden flex-shrink-0">
                    <img src="${product.image}" 
                         alt="${product.name}" 
                         loading="${index < 4 ? 'eager' : 'lazy'}"
                         decoding="async"
                         onload="this.parentElement.classList.remove('animate-pulse', 'bg-slate-200')"
                         class="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                         onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80'; this.parentElement.classList.remove('animate-pulse');">
                    
                    ${product.badge ? `
                        <span class="absolute top-2 left-2 text-[9px] sm:text-[10px] font-bold text-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow z-10 ${product.badgeColor || 'bg-emerald-600'}">
                            ${product.badge}
                        </span>
                    ` : ''}
                </div>

                <!-- Detalles de la tarjeta -->
                <div class="p-2.5 sm:p-4 flex-1 flex flex-col justify-between">
                    <div>
                        <h3 class="font-bold text-slate-900 text-xs sm:text-base leading-snug mb-1 line-clamp-2 h-[2.5em] sm:h-[2.8em] overflow-hidden">
                            ${product.name}
                        </h3>
                        <p class="text-[10px] sm:text-xs text-slate-500 line-clamp-2 mb-2 sm:mb-3 h-[2.4em] sm:h-[2.8em] overflow-hidden">
                            ${product.description}
                        </p>
                    </div>

                    <div class="mt-auto">
                        <div class="flex items-center justify-between gap-1 mb-2 sm:mb-3">
                            <span class="text-[10px] sm:text-xs text-slate-400 uppercase font-medium">Precio</span>
                            <span class="text-xs sm:text-sm md:text-base font-black text-slate-900 truncate text-right">
                                ${formatPrice(product.price, product.currency)}
                            </span>
                        </div>

                        ${isAgotado ? `
                            <button disabled class="w-full bg-slate-200 text-slate-400 text-[11px] sm:text-xs font-bold py-2 px-2 sm:px-4 rounded-xl cursor-not-allowed">
                                Agotado
                            </button>
                        ` : quantityInCart > 0 ? `
                            <div class="flex items-center justify-between bg-emerald-50 border border-emerald-200 rounded-xl p-0.5 sm:p-1">
                                <button onclick="updateQuantity(${product.id}, -1)" class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white text-emerald-700 shadow-sm font-bold flex items-center justify-center hover:bg-emerald-100 transition text-xs sm:text-sm">-</button>
                                <span class="font-bold text-xs sm:text-sm text-emerald-900 px-1">${quantityInCart}</span>
                                <button onclick="updateQuantity(${product.id}, 1)" class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-600 text-white shadow-sm font-bold flex items-center justify-center hover:bg-emerald-700 transition text-xs sm:text-sm">+</button>
                            </div>
                        ` : `
                            <button onclick="addToCart(${product.id})" class="w-full bg-slate-900 hover:bg-emerald-600 text-white text-[11px] sm:text-xs font-bold py-2 sm:py-2.5 px-2 sm:px-4 rounded-xl shadow transition duration-200 flex items-center justify-center gap-1.5">
                                <i data-lucide="plus" class="w-3.5 h-3.5 sm:w-4 sm:h-4"></i>
                                <span>Agregar</span>
                            </button>
                        `}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    if (window.lucide) lucide.createIcons();
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