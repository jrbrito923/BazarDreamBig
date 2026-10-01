
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
                badge: 'Más Vendido',
                badgeColor: 'bg-amber-500',
                image: 'imagen/ComboSupremo.jpg',
                description: 'Incluye: 11lb Pollo, 7lb Lomo deshuesado de Cerdo,1 carton de huevo(30), 2L Aceite, 5lb Arroz, 2lb Frijoles,2 espaguetis de (500gr),2 Pasta de tomate  .'
            },
            {
                id: 2,
                name: 'Lomo deshuesado de cerdo',
                category: 'carnes',
                price: 2100.00 ,
                badge: 'Oferta',
                badgeColor: 'bg-emerald-500',
                image: 'imagen/LOMO-DE-CERDO.jpg',
                description: 'Incluye: Lomo de Cerdo por Libra.'
            },
            {
                id: 3,
                name: 'Jamonda de Cerdo',
                category: 'carnes',
                price: 600.00,
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
                badge: 'oferta',
               /* badgeColor: 'bg-red-500',*/
                image: 'imagen/picadillo mdm.jpg',
                description: 'Incluye: picadillo MDM por libras.'
            },
            {
                id: 6,
                name: 'Carne de Pollo',
                category: 'carnes',
                price: 8500.00,
                badge: 'Oferta',
                badgeColor: 'bg-emerald-500',
                image: 'imagen/Pollo.jpg',
                description: 'Incluye: Paquete de 10 Lbs de Cuartos.'
            },
            {
                id: 7,
                name: 'Toallitas humedas',
                category: 'aseo',
                price: 1200.00,
                badge: null,
                image: 'imagen/toallitahumedaBrisaViva.jpg',
                description: 'Paquete de toallitas húmedas multiusos.'
            },
            {
                id: 8,
                name: 'Papel Sanitario la Excelencia',
                category: 'aseo',
                price: 600.00,
                badge: null,
                image: 'imagen/papelexcelencia.jpg',
                description: 'Papel sanitario 4 rollos super suave 2 capas.'
            },
            {
                id: 9,
                name: 'Detergente Yeya',
                category: 'aseo',
                price: 950.00,
                badge: null,
                image: 'imagen/detergenteYeya.jpg',
                description: 'Detergente en polvo multiusos antibacterial y microbial (500gr).'
            },
            {
                id: 10,
                name: 'Pasta Dental RoyalFresh',
                category: 'aseo',
                price: 650.00,
                badge: null,
                image: 'imagen/pastaRoyalfresh.jpg',
                description: 'Pasta dental.'
            },
            {
                id: 11,
                name: 'Pasta Dental Sonrie',
                category: 'aseo',
                price: 600.00,
                badge: null,
                image: 'imagen/pastadienteSonrie.jpg',
                description: 'Pasta dental.'
            },
            {
                id: 12,
                name: 'Jabon Nacar',
                category: 'aseo',
                price: 350.00,
                badge: null,
                image: 'imagen/jabonNacar.jpg',
                description: 'Jabon nacar 100 gr.'
            },
            {
                id: 13,
                name: 'Arroz Kanga (1 kg)',
                category: 'despensa',
                price: 900.00,
                badge: '',
                badgeColor: 'bg-blue-500',
                image: 'imagen/arrozkanga.jpg',
                description: 'Arroz de grano largo entero, ideal para las comidas diarias de toda la familia.'
            },
            {
                id: 14,
                name: 'Arroz Pateko (1 kg)',
                category: 'despensa',
                price: 920.00,
                badge: '',
                badgeColor: 'bg-blue-500',
                image: 'imagen/arrozpateko.jpg',
                description: 'Arroz de grano largo entero, ideal para las comidas diarias de toda la familia.'
            },
            {
                id: 15,
                name: 'Aceite Sublime Sellado (900 ml)',
                category: 'despensa',
                price: 2800.00,
                badge: null,
                image: 'imagen/aceiteSublime.jpg',
                description: 'Aceite de vegetal comestible, especial para freír y cocinar.'
            },
            {
                id: 16,
                name: 'Azucar Blanca ',
                category: 'despensa',
                price: 550.00,
                badge: null,
                image: 'imagen/azucarblanca.jpg',
                description: 'Azucar blanca por libras.'
            },
            {
                id: 17,
                name: 'Spagueti (500 gr)',
                category: 'despensa',
                price: 600.00,
                badge: null,
                image: 'imagen/espaguetiPastaMondo.jpg',
                description: 'espagueti paquete de 500g.'
            },
            {
                id: 18,
                name: 'Leche Condensada (390 gr)',
                category: 'despensa',
                price: 950.00,
                badge: null,
                image: 'imagen/lecheRayan.jpg',
                description: 'Leche condensada.'
            },
            {
                id: 19,
                name: 'Pasta de Tomate (400 gr)',
                category: 'despensa',
                price: 720.00,
                badge: null,
                image: 'imagen/PastaGuerrero.jpg',
                description: 'Pasta de tomate guerrero 400g.'
            },
            {
                id: 20,
                name: 'Mostaza (300 gr)',
                category: 'despensa',
                price: 1500.00,
                badge: null,
                image: 'imagen/mostazaazotea.jpg',
                description: 'Mostaza 300g.'
            },
            {
                id: 21,
                name: 'Sason Mina',
                category: 'despensa',
                price: 60.00,
                badge: null,
                image: 'imagen/sasonmina.jpg',
                description: 'Sason Mina 5gr.'
            },
            {
                id: 22,
                name: 'Cerveza Cristal (Pack 24 latas)',
                category: 'bebidas',
                price: 840.00,
                badge: 'agotado',
                badgeColor: 'bg-purple-500',
                image: 'imagen/cervezacristal.jpg',
                description: 'Caja de 24 latas de cerveza.'
            },
            {
                id: 23,
                name: 'Cerveza Widmill (Pack 24 latas)',
                category: 'bebidas',
                price: 600.00,
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
                badge: 'Frío Garantizado',
                badgeColor: 'bg-purple-500',
                image: 'imagen/cervezavalmero.jpg',
                description: 'Caja de 24 latas de cerveza.'
            },
            {
                id: 25,
                name: 'Ron Chancelier ',
                category: 'bebidas',
                price: 3500.00,
                badgeColor: 'bg-purple-500',
                image: 'imagen/ronChancelier.jpg',
                description: 'Botella de 1L .'
            },
            {
                id: 26,
                name: 'Shaka',
                category: 'bebidas',
                price: 600.00,
                badgeColor: 'bg-purple-500',
                image: 'imagen/shaka.jpg',
                description: 'bebida compuesta por vodka y energisante.'
            },
            {
                id: 27,
                name: 'Refresco Brio',
                category: 'bebidas',
                price: 550.00,
                badgeColor: 'bg-purple-500',
                image: 'imagen/refrescoBrio1.jpg',
                description: 'Refresco Lata.'
            },
            {
                id: 28,
                name: 'Agua Ciego Montero',
                category: 'bebidas',
                price: 400.00,
                badgeColor: 'bg-purple-500',
                image: 'imagen/aguaCiegoMontero.jpg',
                description: 'Refresco Lata.'
            },
            {
                id: 29,
                name: 'Malta Santa Isabel',
                category: 'bebidas',
                price: 650.00,
                badgeColor: 'bg-purple-500',
                image: 'imagen/maltaSantaIsabel.jpg',
                description: 'Malta de 330ml.'
            },
            {
                id: 30,
                name: 'Malta Guajira',
                category: 'bebidas',
                price: 1900.00,
                badgeColor: 'bg-purple-500',
                image: 'imagen/Maltaguajira.jpg',
                description: 'Malta de 1500ml.'
            },
             {
                id: 32,
                name: 'Carton De Huevo',
                category: 'carnes',
                price: 4100.00,
                badge: 'Oferta',
                badgeColor: 'bg-emerald-500',
                image: 'imagen/huevo.jpg',
                description: 'Incluye: 30 unidades de huevo frescos.'
            },
           /* {
                id: 31,
                name: 'Combo Desayuno & Leche',
                category: 'combos',
                price: 32.00,
                badge: 'Popular',
                badgeColor: 'bg-amber-500',
                image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
                description: '2 Bolsas de Leche en Polvo 1kg, Cafe Molido 500g, Paquete de Galletas, Mantequilla.'
            }*/
        ];

        let cart = [];
        let currentCategory = 'all';
        let searchQuery = '';

        function normalizeText(text) {
            return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
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

            grid.innerHTML = filtered.map(product => {
                const cartItem = cart.find(item => item.id === product.id);
                const quantityInCart = cartItem ? cartItem.quantity : 0;
                const isAgotado = product.badge === 'Agotado';

                return `
                    <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between group">
                        <div class="relative aspect-video sm:aspect-square overflow-hidden bg-slate-100">
                            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80';">
                            ${product.badge ? `
                                <span class="absolute top-3 left-3 text-[10px] font-bold text-white px-2.5 py-1 rounded-full shadow ${product.badgeColor || 'bg-emerald-600'}">
                                    ${product.badge}
                                </span>
                            ` : ''}
                        </div>
                        <div class="p-4 flex-1 flex flex-col justify-between">
                            <div>
                                <h3 class="font-bold text-slate-900 text-base leading-snug mb-1">${product.name}</h3>
                                <p class="text-xs text-slate-500 line-clamp-2 mb-3">${product.description}</p>
                            </div>

                            <div>
                                <div class="flex items-baseline justify-between mb-3">
                                    <span class="text-xs text-slate-400 uppercase font-medium">Precio</span>
                                    <span class="text-xl font-black text-slate-900">$${product.price.toFixed(2)}</span>
                                </div>

                                ${isAgotado ? `
                                    <button disabled class="w-full bg-slate-200 text-slate-400 text-xs font-bold py-2.5 px-4 rounded-xl cursor-not-allowed">
                                        Producto Agotado
                                    </button>
                                ` : quantityInCart > 0 ? `
                                    <div class="flex items-center justify-between bg-emerald-50 border border-emerald-200 rounded-xl p-1">
                                        <button onclick="updateQuantity(${product.id}, -1)" class="w-8 h-8 rounded-lg bg-white text-emerald-700 shadow-sm font-bold flex items-center justify-center hover:bg-emerald-100 transition">-</button>
                                        <span class="font-bold text-sm text-emerald-900">${quantityInCart} en carrito</span>
                                        <button onclick="updateQuantity(${product.id}, 1)" class="w-8 h-8 rounded-lg bg-emerald-600 text-white shadow-sm font-bold flex items-center justify-center hover:bg-emerald-700 transition">+</button>
                                    </div>
                                ` : `
                                    <button onclick="addToCart(${product.id})" class="w-full bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow transition duration-200 flex items-center justify-center gap-2">
                                        <i data-lucide="plus" class="w-4 h-4"></i>
                                        <span>Agregar al Pedido</span>
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
            if (!product || product.badge === 'Agotado') return;

            const existingIndex = cart.findIndex(item => item.id === productId);
            if (existingIndex > -1) {
                cart[existingIndex].quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }

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
            updateCartUI();
            renderProducts();
        }

        function updateCartUI() {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

            const badgeElem = document.getElementById('cartBadge');
            if (badgeElem) badgeElem.innerText = totalItems;

            const totalHeader = document.getElementById('cartTotalHeader');
            if (totalHeader) totalHeader.innerText = `$${totalPrice.toFixed(2)}`;

            const subtotalElem = document.getElementById('cartSubtotal');
            if (subtotalElem) subtotalElem.innerText = `$${totalPrice.toFixed(2)}`;

            const totalElem = document.getElementById('cartTotal');
            if (totalElem) totalElem.innerText = `$${totalPrice.toFixed(2)}`;

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
                        <div class="pt-3 first:pt-0 flex items-center justify-between gap-3">
                            <div class="flex items-center gap-3">
                                <img src="${item.image}" alt="${item.name}" class="w-12 h-12 rounded-lg object-cover bg-slate-100 flex-shrink-0" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80';">
                                <div>
                                    <h4 class="text-xs font-bold text-slate-800 line-clamp-1">${item.name}</h4>
                                    <p class="text-xs text-slate-500">$${item.price.toFixed(2)} c/u</p>
                                </div>
                            </div>

                            <div class="flex items-center gap-2">
                                <div class="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200">
                                    <button onclick="updateQuantity(${item.id}, -1)" class="w-6 h-6 flex items-center justify-center text-slate-600 hover:text-slate-900 font-bold text-xs">-</button>
                                    <span class="w-6 text-center text-xs font-bold">${item.quantity}</span>
                                    <button onclick="updateQuantity(${item.id}, 1)" class="w-6 h-6 flex items-center justify-center text-slate-600 hover:text-slate-900 font-bold text-xs">+</button>
                                </div>
                                <span class="text-xs font-bold text-slate-900 min-w-[50px] text-right">$${(item.price * item.quantity).toFixed(2)}</span>
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

            const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

            let message = `🛒 *NUEVO PEDIDO - BAZAR YM*\n`;
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
                const sub = (item.price * item.quantity).toFixed(2);
                message += `${index + 1}. *${item.name}*\n   ${item.quantity}x @ $${item.price.toFixed(2)} = *$${sub}*\n`;
            });

            message += `\n-----------------------------------\n`;
            message += `💰 *TOTAL ESTIMADO: $${totalPrice.toFixed(2)} USD*\n`;
            message += `-----------------------------------\n`;
            message += `Por favor, confirmemos disponibilidad y método de pago para completar el envío. ¡Gracias!`;

            const encodedUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
            window.open(encodedUrl, '_blank');
        }
       // Obtener e incrementar el contador de visitas
async function updateVisitCount() {
    try {
        // Clave única para tu tienda
        const key = 'bazar_drem_big_visitas_2026';
        
        // Usamos la API alternativa activa
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

// Ejecutar cuando cargue el documento
document.addEventListener('DOMContentLoaded', updateVisitCount);