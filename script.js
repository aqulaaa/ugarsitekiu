// Основные переменные и состояние приложения
const appState = {
    products: [],
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
    user: JSON.parse(localStorage.getItem('user')) || null,
    currentFilter: 'all',
    currentSort: 'popular',
    currentTheme: localStorage.getItem('theme') || 'light',
    displayedProducts: 8
};

// Данные товаров с новыми изображениями
const productsData = [
    {
        id: 1,
        name: "Razer DeathAdder V3 Pro",
        brand: "razer",
        price: 12990,
        description: "Ультралёгкая беспроводная игровая мышь для соревновательного гейминга. Весит всего 63г и оснащена сенсором Focus Pro 30K[citation:6]. Разработана в сотрудничестве с киберспортсменами для максимальной эргономики и точности[citation:9].",
        features: ["Беспроводная", "Ультралёгкая (63г)", "Focus Pro 30K сенсор", "До 90 часов работы"],
        rating: 4.9,
        reviews: 234,
        image: "https://goodgame.kz/upload/medialibrary/1ea/news-razer-deathadder-v3-pro-1.jpg",
        inStock: true,
        isWireless: true,
        weight: 63
    },
    {
        id: 2,
        name: "Logitech G Pro X Superlight",
        brand: "logitech",
        price: 13990,
        description: "Профессиональная беспроводная мышь, созданная для киберспортсменов. Суперлёгкая конструкция и технология беспроводной связи LIGHTSPEED для минимальной задержки.",
        features: ["Беспроводная", "Суперлёгкая", "Герой 25K сенсор", "LIGHTSPEED"],
        rating: 4.8,
        reviews: 189,
        image: "https://hyperpc.ru/images/catalog/accessories/mouse/logitech/g-pro-x-superlight-2/logitech-pro-x-superlight-2-dex-black.jpg",
        inStock: true,
        isWireless: true,
        weight: 63
    },
    {
        id: 3,
        name: "SteelSeries Aerox 5",
        brand: "steelseries",
        price: 8990,
        description: "Игровая мышь с 9 программируемыми кнопками и сверхлёгкой перфорированной конструкцией. Технология Quantum 2.0 Wireless для стабильного соединения.",
        features: ["Беспроводная", "Лёгкая (74г)", "9 программируемых кнопок", "Quantum 2.0"],
        rating: 4.7,
        reviews: 156,
        image: "https://ilounge.ua/files/uploads/new_4/steelseries-aerox-5-77.jpg",
        inStock: true,
        isWireless: true,
        weight: 74
    },
    {
        id: 4,
        name: "Corsair Dark Core RGB Pro",
        brand: "corsair",
        price: 7990,
        description: "Беспроводная игровая мышь с технологией SLIPSTREAM WIRELESS (задержка <1 мс), настраиваемой RGB-подсветкой и сменными боковыми накладками[citation:1]. Оснащена оптическим датчиком 18 000 DPI[citation:1].",
        features: ["Беспроводная", "RGB подсветка", "18,000 DPI", "Сменные накладки"],
        rating: 4.6,
        reviews: 203,
        image: "https://newton.by/upload/resize_cache/iblock/301/1199_799_16c292005ec91514f5757ea1480bc3f98/3019c9399dee45e7715a302bb9303fd1.jpg",
        inStock: true,
        isWireless: true,
        weight: 140
    },
    {
        id: 5,
        name: "Zowie EC2-C",
        brand: "zowie",
        price: 7490,
        description: "Проводная игровая мышь, созданная специально для шутеров от первого лица. Эргономичная форма, разработанная для профессионального гейминга и длительных игровых сессий.",
        features: ["Проводная", "Эргономичная", "Для FPS", "3360 сенсор"],
        rating: 4.8,
        reviews: 178,
        image: "https://www.clife.ru/upload/iblock/cfd/atwbmunl2gh4qor8cddqgwppd5b13q4t/zowie_ec2_cw_7.png",
        inStock: true,
        isWireless: false,
        weight: 73
    },
    {
        id: 6,
        name: "HyperX Pulsefire Haste",
        brand: "hyperx",
        price: 4990,
        description: "Ультралёгкая игровая мышь с перфорированным корпусом. TTC Golden Micro Switches и гибкий кабель HyperFlex для максимальной свободы движений.",
        features: ["Проводная", "Ультралёгкая (59г)", "Перфорированный корпус", "TTC Golden Switches"],
        rating: 4.7,
        reviews: 142,
        image: "https://avatars.mds.yandex.net/i?id=b5e4cfea307b74a45d38f4c079958b0b_l-5245875-images-thumbs&n=13",
        inStock: true,
        isWireless: false,
        weight: 59
    },
    {
        id: 7,
        name: "Glorious Model O",
        brand: "glorious",
        price: 6490,
        description: "Ультралёгкая игровая мышь с перфорированным корпусом Honeycomb. Гибкий кабель и сенсор BAMF для плавного и точного отслеживания.",
        features: ["Проводная", "Ультралёгкая (67г)", "Honeycomb дизайн", "BAMF сенсор"],
        rating: 4.6,
        reviews: 167,
        image: "https://www.techpowerup.com/review/glorious-model-o-2-mini-wireless/images/title.jpg",
        inStock: true,
        isWireless: false,
        weight: 67
    },
    {
        id: 8,
        name: "Corsair Sabre RGB Pro",
        brand: "corsair",
        price: 5490,
        description: "Ультралёгкая проводная игровая мышь с 8 программируемыми кнопками и высокоточным сенсором. Идеальна для динамичных игр и соревнований.",
        features: ["Проводная", "Лёгкая (74г)", "8 программируемых кнопок", "Высокий DPI"],
        rating: 4.6,
        reviews: 134,
        image: "https://avatars.mds.yandex.net/get-mpic/3707358/img_id7069579258933912127.jpeg/orig",
        inStock: true,
        isWireless: false,
        weight: 74
    }
];

// Остальной код (функции initApp, initEventListeners, renderProducts и т.д.)
// Должен оставаться без изменений, как в предыдущей версии...

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

// Основная функция инициализации
function initApp() {
    // Устанавливаем тему
    setTheme(appState.currentTheme);
    
    // Инициализируем данные
    appState.products = [...productsData];
    
    // Инициализируем UI
    initEventListeners();
    renderProducts();
    updateCartUI();
    initImageSlider();
    
    // Показываем приветственное уведомление
    setTimeout(() => {
        showNotification('Добро пожаловать в Ramus Mouse!', 'Крупнейший маркетплейс игровых мышек в СНГ', 'info');
    }, 1000);
}

// Инициализация обработчиков событий
function initEventListeners() {
    // Навигация
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            // Обновляем активные ссылки
            document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Закрываем мобильное меню если открыто
            closeMobileMenu();
        });
    });
    
    // Фильтры товаров
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            appState.currentFilter = this.getAttribute('data-filter');
            renderProducts();
        });
    });
    
    // Сортировка товаров
    document.getElementById('sort-select').addEventListener('change', function() {
        appState.currentSort = this.value;
        renderProducts();
    });
    
    // Кнопка "Показать еще"
    document.getElementById('load-more-btn').addEventListener('click', function() {
        appState.displayedProducts += 8;
        renderProducts();
    });
    
    // Бренды
    document.querySelectorAll('.brand-card').forEach(card => {
        card.addEventListener('click', function() {
            const brand = this.getAttribute('data-brand');
            if (brand) {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                document.querySelector(`.filter-btn[data-filter="${brand}"]`).classList.add('active');
                
                appState.currentFilter = brand;
                renderProducts();
                
                // Прокручиваем к товарам
                scrollToSection('products');
            }
        });
    });
    
    // Поиск
    document.getElementById('search-btn').addEventListener('click', handleSearch);
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') handleSearch();
    });
    
    // Корзина
    document.getElementById('cart-btn').addEventListener('click', openCartModal);
    document.getElementById('continue-shopping').addEventListener('click', closeCartModal);
    document.getElementById('checkout-btn').addEventListener('click', checkout);
    
    // Авторизация
    document.getElementById('user-btn').addEventListener('click', openAuthModal);
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const tabId = this.getAttribute('data-tab');
            document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
            document.getElementById(`${tabId}-form`).classList.add('active');
        });
    });
    
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    document.getElementById('register-form').addEventListener('submit', handleRegister);
    
    // Мобильное меню
    document.getElementById('mobile-menu-toggle').addEventListener('click', openMobileMenu);
    document.getElementById('close-mobile-menu').addEventListener('click', closeMobileMenu);
    
    // Переключение темы
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    
    // Закрытие модальных окон
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.classList.remove('active');
        });
    });
    
    // Закрытие модальных окон при клике вне их
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    });
    
    // Слайдер изображений
    document.querySelectorAll('.slider-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            showSliderSlide(slideIndex);
        });
    });
    
    // Автопереключение слайдов
    setInterval(() => {
        const activeSlide = document.querySelector('.slider-item.active');
        const slides = document.querySelectorAll('.slider-item');
        const currentIndex = Array.from(slides).indexOf(activeSlide);
        const nextIndex = (currentIndex + 1) % slides.length;
        
        showSliderSlide(nextIndex);
    }, 5000);
}

// Рендеринг товаров
function renderProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    // Фильтрация товаров
    let filteredProducts = [...appState.products];
    
    if (appState.currentFilter !== 'all') {
        if (appState.currentFilter === 'wireless') {
            filteredProducts = filteredProducts.filter(product => product.isWireless);
        } else if (appState.currentFilter === 'lightweight') {
            filteredProducts = filteredProducts.filter(product => product.weight < 70);
        } else {
            filteredProducts = filteredProducts.filter(product => product.brand === appState.currentFilter);
        }
    }
    
    // Сортировка товаров
    filteredProducts.sort((a, b) => {
        switch (appState.currentSort) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            case 'new':
                return b.id - a.id;
            case 'popular':
            default:
                return b.reviews - a.reviews;
        }
    });
    
    // Ограничение количества отображаемых товаров
    const productsToShow = filteredProducts.slice(0, appState.displayedProducts);
    
    // Рендеринг
    productsGrid.innerHTML = '';
    
    if (productsToShow.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products" style="grid-column: 1/-1; text-align: center; padding: 60px;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--text-light); margin-bottom: 20px;"></i>
                <h3 style="margin-bottom: 10px;">Товары не найдены</h3>
                <p style="color: var(--text-light);">Попробуйте изменить параметры фильтрации</p>
            </div>
        `;
        return;
    }
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    // Скрываем кнопку "Показать еще" если все товары отображены
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = filteredProducts.length > appState.displayedProducts ? 'block' : 'none';
    }
    
    // Добавляем обработчики событий для кнопок товаров
    document.querySelectorAll('.cart-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
    
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            toggleWishlist(productId);
        });
    });
    
    document.querySelectorAll('.view-product-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            openProductModal(productId);
        });
    });
}

// Создание карточки товара
function createProductCard(product) {
    const isInCart = appState.cart.some(item => item.id === product.id);
    const isInWishlist = appState.wishlist.some(item => item.id === product.id);
    
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.src='assets/images/products/default.jpg';">
            ${!product.inStock ? '<span class="product-badge">Нет в наличии</span>' : ''}
            ${product.isWireless ? '<span class="product-badge" style="right: 15px; left: auto;">Беспроводная</span>' : ''}
        </div>
        <div class="product-content">
            <div class="product-brand">${product.brand.toUpperCase()}</div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description.substring(0, 100)}...</p>
            <div class="product-features">
                ${product.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
            </div>
            <div class="product-footer">
                <div class="product-price">${formatPrice(product.price)} руб.</div>
                <div class="product-actions">
                    <button class="product-btn wishlist-btn ${isInWishlist ? 'active' : ''}" data-id="${product.id}" title="${isInWishlist ? 'Удалить из избранного' : 'Добавить в избранное'}">
                        <i class="fas ${isInWishlist ? 'fa-heart' : 'fa-heart'}"></i>
                    </button>
                    <button class="product-btn cart-btn ${isInCart ? 'active' : ''}" data-id="${product.id}" ${!product.inStock ? 'disabled' : ''} title="${isInCart ? 'Уже в корзине' : 'Добавить в корзину'}">
                        <i class="fas ${isInCart ? 'fa-check' : 'fa-shopping-cart'}"></i>
                    </button>
                    <button class="product-btn view-product-btn" data-id="${product.id}" title="Посмотреть подробности">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    return productCard;
}

// Открытие модального окна товара
function openProductModal(productId) {
    const product = appState.products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('product-modal');
    const modalTitle = document.getElementById('product-modal-title');
    const modalBody = document.getElementById('product-modal-body');
    
    modalTitle.textContent = product.name;
    
    modalBody.innerHTML = `
        <div class="product-modal-image">
            <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.src='assets/images/products/default.jpg';">
        </div>
        <div class="product-modal-info">
            <div class="product-modal-brand">${product.brand.toUpperCase()}</div>
            <div class="product-modal-price">${formatPrice(product.price)} руб.</div>
            <div class="product-modal-rating">
                <span class="rating-stars">
                    ${generateStarRating(product.rating)}
                </span>
                <span class="rating-count">${product.reviews} отзывов</span>
            </div>
            <p class="product-modal-description">${product.description}</p>
            <div class="product-modal-features">
                <h4>Характеристики:</h4>
                <div class="features-list">
                    ${product.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                </div>
            </div>
            <div class="product-modal-actions">
                <button class="btn btn-primary cart-btn-modal" data-id="${product.id}">
                    <i class="fas fa-shopping-cart"></i> Добавить в корзину
                </button>
                <button class="btn btn-secondary wishlist-btn-modal" data-id="${product.id}">
                    <i class="fas fa-heart"></i> В избранное
                </button>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    
    // Добавляем обработчики событий для кнопок в модальном окне
    modal.querySelector('.cart-btn-modal').addEventListener('click', function() {
        addToCart(productId);
        modal.classList.remove('active');
    });
    
    modal.querySelector('.wishlist-btn-modal').addEventListener('click', function() {
        toggleWishlist(productId);
        const wishlistBtn = this.querySelector('i');
        if (appState.wishlist.some(item => item.id === productId)) {
            wishlistBtn.classList.remove('fa-heart');
            wishlistBtn.classList.add('fa-heart-broken');
            this.innerHTML = '<i class="fas fa-heart-broken"></i> Удалить из избранного';
        } else {
            wishlistBtn.classList.remove('fa-heart-broken');
            wishlistBtn.classList.add('fa-heart');
            this.innerHTML = '<i class="fas fa-heart"></i> В избранное';
        }
    });
}

// Генерация звездного рейтинга
function generateStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Работа с корзиной
function addToCart(productId) {
    const product = appState.products.find(p => p.id === productId);
    if (!product) return;
    
    // Проверяем наличие товара
    if (!product.inStock) {
        showNotification('Товара нет в наличии', 'Выберите другой товар', 'error');
        return;
    }
    
    // Проверяем, есть ли товар уже в корзине
    const existingItem = appState.cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        appState.cart.push({
            id: product.id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    // Сохраняем в localStorage
    localStorage.setItem('cart', JSON.stringify(appState.cart));
    
    // Обновляем UI
    updateCartUI();
    
    // Показываем уведомление
    showNotification('Товар добавлен в корзину', product.name, 'success');
    
    // Анимация кнопки корзины
    const cartBtn = document.getElementById('cart-btn');
    cartBtn.style.transform = 'scale(1.2)';
    setTimeout(() => cartBtn.style.transform = 'scale(1)', 300);
}

function updateCartUI() {
    // Обновляем счетчик корзины
    const cartCount = document.getElementById('cart-count');
    const totalItems = appState.cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Обновляем содержимое корзины
    renderCartItems();
    
    // Обновляем кнопки товаров в корзине
    document.querySelectorAll('.cart-btn').forEach(btn => {
        const productId = parseInt(btn.getAttribute('data-id'));
        const isInCart = appState.cart.some(item => item.id === productId);
        
        if (isInCart) {
            btn.classList.add('active');
            btn.innerHTML = '<i class="fas fa-check"></i>';
            btn.setAttribute('title', 'Уже в корзине');
        } else {
            btn.classList.remove('active');
            btn.innerHTML = '<i class="fas fa-shopping-cart"></i>';
            btn.setAttribute('title', 'Добавить в корзину');
        }
    });
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartEmpty = document.getElementById('cart-empty');
    const cartSummary = document.getElementById('cart-summary');
    
    if (!cartItemsContainer || !cartEmpty || !cartSummary) return;
    
    // Очищаем контейнер
    cartItemsContainer.innerHTML = '';
    
    if (appState.cart.length === 0) {
        cartEmpty.style.display = 'block';
        cartSummary.style.display = 'none';
        return;
    }
    
    cartEmpty.style.display = 'none';
    cartSummary.style.display = 'block';
    
    // Рендерим товары в корзине
    let totalItems = 0;
    let subtotal = 0;
    
    appState.cart.forEach(item => {
        totalItems += item.quantity;
        subtotal += item.price * item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.src='assets/images/products/default.jpg';">
            </div>
            <div class="cart-item-info">
                <h4 class="cart-item-name">${item.name}</h4>
                <div class="cart-item-brand">${item.brand.toUpperCase()}</div>
                <div class="cart-item-price">${formatPrice(item.price)} руб.</div>
            </div>
            <div class="cart-item-controls">
                <div class="quantity-control">
                    <button class="quantity-btn decrease-quantity" data-id="${item.id}">-</button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn increase-quantity" data-id="${item.id}">+</button>
                </div>
                <button class="remove-item" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Обновляем итоговую информацию
    document.getElementById('cart-total-items').textContent = totalItems;
    document.getElementById('cart-subtotal').textContent = formatPrice(subtotal);
    document.getElementById('cart-total').textContent = formatPrice(subtotal);
    
    // Добавляем обработчики событий для элементов корзины
    document.querySelectorAll('.increase-quantity').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            updateCartItemQuantity(productId, 1);
        });
    });
    
    document.querySelectorAll('.decrease-quantity').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            updateCartItemQuantity(productId, -1);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
}

function updateCartItemQuantity(productId, change) {
    const item = appState.cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity < 1) {
        removeFromCart(productId);
    } else {
        localStorage.setItem('cart', JSON.stringify(appState.cart));
        updateCartUI();
    }
}

function removeFromCart(productId) {
    appState.cart = appState.cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(appState.cart));
    updateCartUI();
    
    // Показываем уведомление
    const product = appState.products.find(p => p.id === productId);
    if (product) {
        showNotification('Товар удален из корзины', product.name, 'info');
    }
}

function openCartModal() {
    document.getElementById('cart-modal').classList.add('active');
}

function closeCartModal() {
    document.getElementById('cart-modal').classList.remove('active');
}

function checkout() {
    if (appState.cart.length === 0) return;
    
    const total = appState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // В реальном приложении здесь была бы отправка заказа на сервер
    showNotification('Заказ оформлен!', `Сумма заказа: ${formatPrice(total)} руб. Скоро с вами свяжется менеджер.`, 'success');
    
    // Очищаем корзину
    appState.cart = [];
    localStorage.setItem('cart', JSON.stringify(appState.cart));
    updateCartUI();
    
    // Закрываем модальное окно
    closeCartModal();
}

// Работа с избранным
function toggleWishlist(productId) {
    const product = appState.products.find(p => p.id === productId);
    if (!product) return;
    
    const existingIndex = appState.wishlist.findIndex(item => item.id === productId);
    
    if (existingIndex >= 0) {
        // Удаляем из избранного
        appState.wishlist.splice(existingIndex, 1);
        showNotification('Удалено из избранного', product.name, 'info');
    } else {
        // Добавляем в избранное
        appState.wishlist.push({
            id: product.id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            image: product.image
        });
        showNotification('Добавлено в избранное', product.name, 'success');
    }
    
    // Сохраняем в localStorage
    localStorage.setItem('wishlist', JSON.stringify(appState.wishlist));
    
    // Обновляем кнопки товаров
    document.querySelectorAll(`.wishlist-btn[data-id="${productId}"]`).forEach(btn => {
        if (existingIndex >= 0) {
            btn.classList.remove('active');
            btn.innerHTML = '<i class="fas fa-heart"></i>';
            btn.setAttribute('title', 'Добавить в избранное');
        } else {
            btn.classList.add('active');
            btn.innerHTML = '<i class="fas fa-heart"></i>';
            btn.setAttribute('title', 'Удалить из избранного');
        }
    });
}

// Авторизация
function openAuthModal() {
    document.getElementById('auth-modal').classList.add('active');
}

function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // В реальном приложении здесь была бы проверка на сервере
    if (email && password) {
        appState.user = { email, name: email.split('@')[0] };
        localStorage.setItem('user', JSON.stringify(appState.user));
        
        showNotification('Вход выполнен!', `Добро пожаловать, ${appState.user.name}!`, 'success');
        
        // Закрываем модальное окно
        document.getElementById('auth-modal').classList.remove('active');
        
        // Обновляем UI
        const userBtn = document.getElementById('user-btn');
        userBtn.innerHTML = '<i class="fas fa-user-check"></i>';
        userBtn.setAttribute('title', `Вы вошли как ${appState.user.name}`);
    } else {
        showNotification('Ошибка входа', 'Пожалуйста, заполните все поля', 'error');
    }
}

function handleRegister(e) {
    e.preventDefault();
    
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirm = document.getElementById('register-confirm').value;
    
    // Валидация
    if (!name || !email || !password || !confirm) {
        showNotification('Ошибка регистрации', 'Пожалуйста, заполните все поля', 'error');
        return;
    }
    
    if (password !== confirm) {
        showNotification('Ошибка регистрации', 'Пароли не совпадают', 'error');
        return;
    }
    
    // В реальном приложении здесь была бы отправка на сервер
    appState.user = { email, name };
    localStorage.setItem('user', JSON.stringify(appState.user));
    
    showNotification('Регистрация успешна!', `Добро пожаловать, ${name}! На почту ${email} отправлено подтверждение.`, 'success');
    
    // Закрываем модальное окно
    document.getElementById('auth-modal').classList.remove('active');
    
    // Обновляем UI
    const userBtn = document.getElementById('user-btn');
    userBtn.innerHTML = '<i class="fas fa-user-check"></i>';
    userBtn.setAttribute('title', `Вы вошли как ${name}`);
    
    // Очищаем форму
    e.target.reset();
}

// Поиск
function handleSearch() {
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.trim().toLowerCase();
    
    if (!query) {
        showNotification('Введите запрос', 'Пожалуйста, введите название мыши или бренд для поиска', 'info');
        return;
    }
    
    // Фильтруем товары по запросу
    appState.currentFilter = 'all';
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
    
    // В реальном приложении здесь был бы запрос к серверу
    const filteredProducts = productsData.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.brand.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );
    
    if (filteredProducts.length === 0) {
        showNotification('Ничего не найдено', 'Попробуйте изменить запрос', 'info');
        return;
    }
    
    // Обновляем отображаемые товары
    appState.displayedProducts = 8;
    appState.products = filteredProducts;
    renderProducts();
    
    // Прокручиваем к результатам
    scrollToSection('products');
    
    showNotification(`Найдено ${filteredProducts.length} товаров`, 'по вашему запросу', 'success');
}

// Мобильное меню
function openMobileMenu() {
    document.getElementById('mobile-menu').classList.add('active');
}

function closeMobileMenu() {
    document.getElementById('mobile-menu').classList.remove('active');
}

// Тема
function toggleTheme() {
    const newTheme = appState.currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // Показываем уведомление
    showNotification('Тема изменена', newTheme === 'dark' ? 'Включена темная тема' : 'Включена светлая тема', 'info');
}

function setTheme(theme) {
    appState.currentTheme = theme;
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    
    // Обновляем иконку переключателя темы
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }
}

// Слайдер изображений
function initImageSlider() {
    showSliderSlide(0);
}

function showSliderSlide(index) {
    const slides = document.querySelectorAll('.slider-item');
    const buttons = document.querySelectorAll('.slider-btn');
    
    // Скрываем все слайды
    slides.forEach(slide => slide.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Показываем выбранный слайд
    if (slides[index]) {
        slides[index].classList.add('active');
        buttons[index].classList.add('active');
    }
}

// Утилиты
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 100,
            behavior: 'smooth'
        });
    }
}

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function showNotification(title, message, type = 'info') {
    const container = document.getElementById('notification-container');
    if (!container) return;
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-icon">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        </div>
        <div class="notification-content">
            <h4>${title}</h4>
            <p>${message}</p>
        </div>
    `;
    
    container.appendChild(notification);
    
    // Удаляем уведомление через 5 секунд
    setTimeout(() => {
        notification.style.animation = 'notificationSlideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Добавляем стили для анимации выхода уведомлений
const style = document.createElement('style');
style.textContent = `
    @keyframes notificationSlideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);