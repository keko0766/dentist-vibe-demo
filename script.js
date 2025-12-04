// JavaScript для анимаций появления блоков при скролле

// Функция для проверки видимости элемента
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 100 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для добавления класса visible к элементам
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in-up');
    
    elements.forEach((element) => {
        if (isElementInViewport(element) && !element.classList.contains('visible')) {
            element.classList.add('visible');
        }
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Проверяем элементы сразу при загрузке
    handleScrollAnimation();
    
    // Проверяем элементы при скролле
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Проверяем элементы при изменении размера окна
    window.addEventListener('resize', handleScrollAnimation);
});

// Плавная прокрутка для якорных ссылок (если будут добавлены)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Добавляем анимацию для плавающей кнопки WhatsApp при наведении
const whatsappButton = document.querySelector('.whatsapp-float');
if (whatsappButton) {
    whatsappButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    whatsappButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

// ============================================
// ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА
// ============================================

// Объект с переводами
const translations = {
    ru: {
        // Hero секция
        'hero.title': 'Лечение зубов без боли — с гарантией результата',
        'hero.subtitle': 'Консультация + план лечения — бесплатно',
        'hero.cta': 'Записаться в WhatsApp',
        'hero.trigger1': 'Опыт 10+ лет',
        'hero.trigger2': 'Безболезненная анестезия',
        'hero.trigger3': 'Гарантия результата',
        
        // Страхи
        'fears.title': 'Мы решаем ваши страхи',
        'fears.fear1.title': 'Боитесь боли?',
        'fears.fear1.text': 'Работаем под современной анестезией — вы ничего не почувствуете',
        'fears.fear2.title': 'Нет времени?',
        'fears.fear2.text': 'Лечение за 1–2 визита — быстро и эффективно',
        'fears.fear3.title': 'Переживаете за качество?',
        'fears.fear3.text': 'Используем только материалы премиум-класса',
        'fears.fear4.title': 'Боитесь дорого?',
        'fears.fear4.text': 'Честная смета и рассрочка без переплат',
        
        // Услуги
        'services.title': 'Наши услуги',
        'services.service1.title': 'Лечение кариеса',
        'services.service1.desc': 'Безболезненное лечение с использованием современных материалов',
        'services.service1.cta': 'Узнать точную стоимость в WhatsApp',
        'services.service1.whatsapp': 'Узнать точную стоимость лечения кариеса',
        'services.service2.title': 'Чистка AirFlow',
        'services.service2.desc': 'Профессиональная чистка зубов без повреждения эмали',
        'services.service2.cta': 'Узнать точную стоимость в WhatsApp',
        'services.service2.whatsapp': 'Узнать точную стоимость чистки AirFlow',
        'services.service3.title': 'Имплантация',
        'services.service3.desc': 'Восстановление зубов с помощью имплантов премиум-класса',
        'services.service3.cta': 'Узнать точную стоимость в WhatsApp',
        'services.service3.whatsapp': 'Узнать точную стоимость имплантации',
        'services.service4.title': 'Протезирование',
        'services.service4.desc': 'Коронки, виниры, протезы — индивидуальный подход',
        'services.service4.cta': 'Узнать точную стоимость в WhatsApp',
        'services.service4.whatsapp': 'Узнать точную стоимость протезирования',
        'services.service5.title': 'Отбеливание',
        'services.service5.desc': 'Безопасное отбеливание зубов на несколько тонов',
        'services.service5.cta': 'Узнать точную стоимость в WhatsApp',
        'services.service5.whatsapp': 'Узнать точную стоимость отбеливания',
        'services.service6.title': 'Детская стоматология',
        'services.service6.desc': 'Безопасное лечение для детей в комфортной атмосфере',
        'services.service6.cta': 'Узнать точную стоимость в WhatsApp',
        'services.service6.whatsapp': 'Узнать точную стоимость детской стоматологии',
        
        // Почему выбирают нас
        'why.title': 'Почему выбирают нас',
        'why.reason1.title': 'Опыт врачей',
        'why.reason1.text': 'Более 10 лет практики, постоянное повышение квалификации',
        'why.reason2.title': 'Сертификаты',
        'why.reason2.text': 'Международные сертификаты и дипломы',
        'why.reason3.title': 'Стерильность',
        'why.reason3.text': 'Полная стерилизация инструментов и безопасность',
        'why.reason4.title': '3D-диагностика',
        'why.reason4.text': 'Точная диагностика с помощью современного оборудования',
        'why.reason5.title': 'Гарантия',
        'why.reason5.text': 'Гарантия на все виды лечения',
        
        // Галерея
        'gallery.title': 'Результаты наших работ',
        'gallery.before': 'До',
        'gallery.after': 'После',
        
        // Отзывы
        'reviews.title': 'Отзывы наших пациентов',
        'reviews.review1.text': '"Очень довольна лечением! Врач внимательный, все объяснил, лечение прошло без боли. Рекомендую!"',
        'reviews.review1.author': '— Мария К.',
        'reviews.review2.text': '"Долго боялся идти к стоматологу, но здесь все прошло отлично. Анестезия действительно безболезненная!"',
        'reviews.review2.author': '— Иван П.',
        'reviews.review3.text': '"Привела ребенка — остались очень довольны. Врач нашел подход, ребенок не боялся. Спасибо!"',
        'reviews.review3.author': '— Елена С.',
        'reviews.video': 'Видео отзыв',
        
        // Команда
        'team.title': 'Наша команда',
        'team.doctor1.name': 'Иван Петров',
        'team.doctor1.experience': 'Стаж: 12 лет',
        'team.doctor1.specialty': 'Терапевт, имплантолог',
        'team.doctor2.name': 'Мария Соколова',
        'team.doctor2.experience': 'Стаж: 10 лет',
        'team.doctor2.specialty': 'Ортодонт, детский стоматолог',
        'team.doctor3.name': 'Алексей Волков',
        'team.doctor3.experience': 'Стаж: 15 лет',
        'team.doctor3.specialty': 'Хирург, протезист',
        
        // Стоимость
        'pricing.title': 'Стоимость услуг',
        'pricing.service1': 'Чистка AirFlow',
        'pricing.service2': 'Лечение кариеса',
        'pricing.service3': 'Имплантация',
        'pricing.cta': 'Получить точную цену в WhatsApp',
        'pricing.whatsapp': 'Получить точную цену',
        
        // Процесс
        'process.title': 'Процесс лечения в 4 шагах',
        'process.step1.title': 'Консультация',
        'process.step1.text': 'Бесплатная консультация и осмотр',
        'process.step2.title': 'Диагностика',
        'process.step2.text': '3D-снимки и точная диагностика',
        'process.step3.title': 'Лечение',
        'process.step3.text': 'Безболезненное лечение с гарантией',
        'process.step4.title': 'Контроль',
        'process.step4.text': 'Контроль результата + гарантия',
        
        // Контакты
        'contacts.title': 'Контакты',
        'contacts.address.label': 'Адрес',
        'contacts.address.value': 'г. Москва, ул. Примерная, д. 10',
        'contacts.phone.label': 'Телефон',
        'contacts.phone.value': '+7 (XXX) XXX-XX-XX',
        'contacts.hours.label': 'График работы',
        'contacts.hours.value': 'Пн-Пт: 9:00 - 21:00',
        'contacts.hours.value2': 'Сб-Вс: 10:00 - 18:00',
        'contacts.map': 'Карта',
        'contacts.cta': 'Записаться в WhatsApp',
        
        // Footer
        'footer.copyright': '© 2024 Стоматология. Все права защищены.',
        
        // Aria labels
        'whatsapp.aria': 'Написать в WhatsApp'
    },
    kk: {
        // Hero секция
        'hero.title': 'Аурусыз емдеу — нәтижеге кепілдікпен',
        'hero.subtitle': 'Консультация + емдеу жоспары — тегін',
        'hero.cta': 'WhatsApp-та жазылу',
        'hero.trigger1': '10+ жыл тәжірибе',
        'hero.trigger2': 'Аурусыз анестезия',
        'hero.trigger3': 'Нәтижеге кепілдік',
        
        // Страхи
        'fears.title': 'Біз сіздің қорқыныштарыңызды шешеміз',
        'fears.fear1.title': 'Аурудан қорқасыз ба?',
        'fears.fear1.text': 'Заманауи анестезиямен жұмыс істейміз — сіз еш нәрсе сезімейсіз',
        'fears.fear2.title': 'Уақыт жоқ па?',
        'fears.fear2.text': '1–2 барыста емдеу — жылдам және тиімді',
        'fears.fear3.title': 'Сапасынан алаңдайсыз ба?',
        'fears.fear3.text': 'Тек премиум-класс материалдарын қолданамыз',
        'fears.fear4.title': 'Қымбат болуынан қорқасыз ба?',
        'fears.fear4.text': 'Адал смета және қосымша төлемсіз бөліп төлеу',
        
        // Услуги
        'services.title': 'Біздің қызметтер',
        'services.service1.title': 'Кариес емдеу',
        'services.service1.desc': 'Заманауи материалдарды пайдалана отырып, аурусыз емдеу',
        'services.service1.cta': 'WhatsApp-та нақты бағаны білу',
        'services.service1.whatsapp': 'Кариес емдеудің нақты бағасын білу',
        'services.service2.title': 'AirFlow тазалау',
        'services.service2.desc': 'Эмальге зиян келтірмей кәсіби тіс тазалау',
        'services.service2.cta': 'WhatsApp-та нақты бағаны білу',
        'services.service2.whatsapp': 'AirFlow тазалаудың нақты бағасын білу',
        'services.service3.title': 'Имплантация',
        'services.service3.desc': 'Премиум-класс импланттармен тістерді қалпына келтіру',
        'services.service3.cta': 'WhatsApp-та нақты бағаны білу',
        'services.service3.whatsapp': 'Имплантацияның нақты бағасын білу',
        'services.service4.title': 'Протездеу',
        'services.service4.desc': 'Коронкалар, винирлер, протездер — жеке тәсіл',
        'services.service4.cta': 'WhatsApp-та нақты бағаны білу',
        'services.service4.whatsapp': 'Протездеудің нақты бағасын білу',
        'services.service5.title': 'Ағарту',
        'services.service5.desc': 'Бірнеше реңкке дейін қауіпсіз тіс ағарту',
        'services.service5.cta': 'WhatsApp-та нақты бағаны білу',
        'services.service5.whatsapp': 'Ағартудың нақты бағасын білу',
        'services.service6.title': 'Балалар стоматологиясы',
        'services.service6.desc': 'Жайлы атмосферада балаларға қауіпсіз емдеу',
        'services.service6.cta': 'WhatsApp-та нақты бағаны білу',
        'services.service6.whatsapp': 'Балалар стоматологиясының нақты бағасын білу',
        
        // Почему выбирают нас
        'why.title': 'Неге бізді таңдайды',
        'why.reason1.title': 'Дәрігерлердің тәжірибесі',
        'why.reason1.text': '10 жылдан астам тәжірибе, біліктілікті үнемі арттыру',
        'why.reason2.title': 'Сертификаттар',
        'why.reason2.text': 'Халықаралық сертификаттар мен дипломдар',
        'why.reason3.title': 'Стерильділік',
        'why.reason3.text': 'Құралдарды толық стерилизациялау және қауіпсіздік',
        'why.reason4.title': '3D-диагностика',
        'why.reason4.text': 'Заманауи жабдықпен дәл диагностика',
        'why.reason5.title': 'Кепілдік',
        'why.reason5.text': 'Емдеудің барлық түрлеріне кепілдік',
        
        // Галерея
        'gallery.title': 'Біздің жұмыстардың нәтижелері',
        'gallery.before': 'Бұрын',
        'gallery.after': 'Кейін',
        
        // Отзывы
        'reviews.title': 'Науқастардың пікірлері',
        'reviews.review1.text': '"Емдеуге өте қанағаттаным! Дәрігер мейірімді, бәрін түсіндірді, емдеу аурусыз өтті. Ұсынамын!"',
        'reviews.review1.author': '— Мария К.',
        'reviews.review2.text': '"Стоматологқа барудан ұзақ уақыт қорқып жүрдім, бірақ мұнда бәрі керемет өтті. Анестезия шынымен аурусыз!"',
        'reviews.review2.author': '— Иван П.',
        'reviews.review3.text': '"Баланы әкелдім — өте қанағаттандық. Дәрігер тәсіл тапты, бала қорқаған жоқ. Рахмет!"',
        'reviews.review3.author': '— Елена С.',
        'reviews.video': 'Бейне пікір',
        
        // Команда
        'team.title': 'Біздің команда',
        'team.doctor1.name': 'Иван Петров',
        'team.doctor1.experience': 'Тәжірибе: 12 жыл',
        'team.doctor1.specialty': 'Терапевт, имплантолог',
        'team.doctor2.name': 'Мария Соколова',
        'team.doctor2.experience': 'Тәжірибе: 10 жыл',
        'team.doctor2.specialty': 'Ортодонт, балалар стоматологы',
        'team.doctor3.name': 'Алексей Волков',
        'team.doctor3.experience': 'Тәжірибе: 15 жыл',
        'team.doctor3.specialty': 'Хирург, протезист',
        
        // Стоимость
        'pricing.title': 'Қызметтердің бағасы',
        'pricing.service1': 'AirFlow тазалау',
        'pricing.service2': 'Кариес емдеу',
        'pricing.service3': 'Имплантация',
        'pricing.cta': 'WhatsApp-та нақты бағаны алу',
        'pricing.whatsapp': 'Нақты бағаны алу',
        
        // Процесс
        'process.title': '4 қадамда емдеу процесі',
        'process.step1.title': 'Консультация',
        'process.step1.text': 'Тегін консультация және тексеру',
        'process.step2.title': 'Диагностика',
        'process.step2.text': '3D-суреттер және дәл диагностика',
        'process.step3.title': 'Емдеу',
        'process.step3.text': 'Кепілдікпен аурусыз емдеу',
        'process.step4.title': 'Басқару',
        'process.step4.text': 'Нәтижені бақылау + кепілдік',
        
        // Контакты
        'contacts.title': 'Байланыстар',
        'contacts.address.label': 'Мекен-жай',
        'contacts.address.value': 'г. Москва, ул. Примерная, д. 10',
        'contacts.phone.label': 'Телефон',
        'contacts.phone.value': '+7 (XXX) XXX-XX-XX',
        'contacts.hours.label': 'Жұмыс кестесі',
        'contacts.hours.value': 'Дүйсенбі-Жұма: 9:00 - 21:00',
        'contacts.hours.value2': 'Сенбі-Жексенбі: 10:00 - 18:00',
        'contacts.map': 'Карта',
        'contacts.cta': 'WhatsApp-та жазылу',
        
        // Footer
        'footer.copyright': '© 2024 Стоматология. Барлық құқықтар қорғалған.',
        
        // Aria labels
        'whatsapp.aria': 'WhatsApp-та жазу'
    }
};

// Текущий язык (по умолчанию русский)
let currentLang = localStorage.getItem('language') || 'ru';

// Функция переключения языка
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Обновляем все элементы с data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Проверяем, является ли элемент input или textarea
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.value = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Обновляем href для ссылок с data-i18n-href
    document.querySelectorAll('[data-i18n-href]').forEach(element => {
        const key = element.getAttribute('data-i18n-href');
        if (translations[lang] && translations[lang][key]) {
            // Извлекаем номер телефона из текущего href или используем дефолтный
            const currentHref = element.getAttribute('href') || '';
            const phoneMatch = currentHref.match(/wa\.me\/(\d+)/);
            const phone = phoneMatch ? phoneMatch[1] : '79XXXXXXXXX'; // Замените на реальный номер
            const text = encodeURIComponent(translations[lang][key]);
            element.setAttribute('href', `https://wa.me/${phone}?text=${text}`);
        }
    });
    
    // Обновляем aria-label для элементов с data-i18n-aria
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
        const key = element.getAttribute('data-i18n-aria');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('aria-label', translations[lang][key]);
        }
    });
    
    // Обновляем атрибут lang у html
    document.documentElement.setAttribute('lang', lang);
    
    // Обновляем стили кнопок переключения языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('bg-blue-600', 'text-white');
            btn.classList.remove('text-gray-700', 'hover:bg-gray-100');
        } else {
            btn.classList.remove('bg-blue-600', 'text-white');
            btn.classList.add('text-gray-700', 'hover:bg-gray-100');
        }
    });
}

// Инициализация переключателя языка
document.addEventListener('DOMContentLoaded', () => {
    // Применяем сохраненный язык
    switchLanguage(currentLang);
    
    // Обработчики для кнопок переключения языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
});

