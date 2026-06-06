const ORIGIN = 'Rua da Pereira 15, Campo, 7200-517 Reguengos de Monsaraz, Portugal';
const LANG_KEY = 'casa-lang';

const i18n = {
    en: {
        subtitle: 'a place to rest',
        navLabel: 'Around the area',
        navAldeia: 'The village',
        navRestaurants: 'Restaurants',
        navBeaches: 'Beaches',
        navProducts: 'Local products',
        navPlaces: 'Places of interest',
        guideTitle: 'Around the area',
        guideIntro: 'Our favourite spots near Campo — distances are approximate driving times from the casa.',
        sectionAldeia: 'In the village',
        sectionRestaurants: 'Restaurants',
        sectionBeaches: 'Beaches',
        sectionProducts: 'Local products',
        sectionPlaces: 'Places of interest',
        linkGoogleMaps: 'Google Maps',
        linkWebsite: 'Website',
        linkDirections: 'Directions'
    },
    pt: {
        subtitle: 'um lugar para descansar',
        navLabel: 'Na redor',
        navAldeia: 'Na aldeia',
        navRestaurants: 'Restaurantes',
        navBeaches: 'Praias',
        navProducts: 'Produtos locais',
        navPlaces: 'Locais de interesse',
        guideTitle: 'Aqui Perto',
        guideIntro: 'Os nossos sítios preferidos aqui na zona.',
        sectionAldeia: 'Na aldeia',
        sectionRestaurants: 'Restaurantes',
        sectionBeaches: 'Praias',
        sectionProducts: 'Produtos locais',
        sectionPlaces: 'Locais de interesse',
        linkGoogleMaps: 'Google Maps',
        linkWebsite: 'Website',
        linkDirections: 'Como chegar'
    }
};

const sectionTitleKeys = {
    aldeia: 'sectionAldeia',
    restaurants: 'sectionRestaurants',
    beaches: 'sectionBeaches',
    products: 'sectionProducts',
    places: 'sectionPlaces'
};

let currentLang = 'en';

function mapsDir(destination) {
    return 'https://www.google.com/maps/dir/?api=1&origin=' +
        encodeURIComponent(ORIGIN) + '&destination=' + encodeURIComponent(destination);
}

function t(key) {
    return i18n[currentLang][key] || i18n.en[key] || key;
}

function placeText(value) {
    if (value && typeof value === 'object') return value[currentLang];
    return value;
}

function detectLang() {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === 'en' || stored === 'pt') return stored;
    return 'pt';
}

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang;
    applyStaticText();
    renderGuide();
    updateLangButtons();
}

function applyStaticText() {
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });
    const nav = document.querySelector('.area-nav');
    if (nav) nav.setAttribute('aria-label', t('navLabel'));
    const guide = document.querySelector('.guide');
    if (guide) guide.setAttribute('aria-label', t('navLabel'));
}

function updateLangButtons() {
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
        const isActive = btn.getAttribute('data-lang') === currentLang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
}

function renderGuide() {
    const container = document.getElementById('guide-sections');
    if (!container) return;

    container.innerHTML = guidePlaces.map(function(section) {
        const titleKey = sectionTitleKeys[section.id];
        const cards = section.places.map(function(place) {
            const name = placeText(place.name);
            const location = place.location ? placeText(place.location) : '';
            const dest = place.address || (location ? name + ', ' + location : name);
            const desc = place.description[currentLang];
            const siteEntries = place.websites || (place.website ? [{ label: t('linkWebsite'), url: place.website }] : []);
            const links = siteEntries.map(function(site) {
                let label = site.label;
                if (label === 'Google Maps') label = t('linkGoogleMaps');
                else if (typeof label === 'object') label = label[currentLang];
                return '<a href="' + site.url + '" target="_blank" rel="noopener noreferrer">' + label + '</a>';
            }).concat([
                '<a href="' + mapsDir(dest) + '" target="_blank" rel="noopener noreferrer">' + t('linkDirections') + '</a>'
            ]).join('');
            const distanceText = [placeText(place.distance), placeText(place.driveTime)].filter(Boolean).join(' · ');
            return (
                '<article class="place-card">' +
                    '<div class="place-header">' +
                        '<h4 class="place-name">' + name + '</h4>' +
                        '<span class="place-distance">' + distanceText + '</span>' +
                    '</div>' +
                    '<p class="place-desc">' + desc + '</p>' +
                    '<div class="place-links">' + links + '</div>' +
                '</article>'
            );
        }).join('');
        return (
            '<section class="guide-section" id="' + section.id + '">' +
                '<h3>' + t(titleKey) + '</h3>' +
                '<div class="place-list">' + cards + '</div>' +
            '</section>'
        );
    }).join('');
}

const images = [
    'Screenshot 2025-12-09 at 11.43.48.png',
    'Screenshot 2025-12-09 at 11.43.54.png',
    'Screenshot 2025-12-09 at 11.43.59.png',
    'Screenshot 2025-12-09 at 11.43.07.png',
    'Screenshot 2025-12-09 at 11.42.59.png',
    'pool-night-patio.jpeg',
    'pool-night-green-01.jpeg',
    'pool-night-green-02.jpeg',
    'pool-night-wide.jpeg',
    'pool-night-blue-01.jpeg',
    'pool-night-blue-02.jpeg',
    'Screenshot 2025-12-09 at 11.39.11.png',
    'Screenshot 2025-12-09 at 11.39.20.png',
    'Screenshot 2025-12-09 at 11.39.30.png',
    'Screenshot 2025-12-09 at 11.39.41.png',
    'Screenshot 2025-12-09 at 11.39.53.png',
    'Screenshot 2025-12-09 at 11.40.04.png',
    'Screenshot 2025-12-09 at 11.40.14.png',
    'Screenshot 2025-12-09 at 11.40.23.png',
    'Screenshot 2025-12-09 at 11.40.32.png',
    'Screenshot 2025-12-09 at 11.40.41.png',
    'Screenshot 2025-12-09 at 11.40.50.png',
    'Screenshot 2025-12-09 at 11.41.00.png',
    'Screenshot 2025-12-09 at 11.41.09.png',
    'Screenshot 2025-12-09 at 11.41.17.png',
    'Screenshot 2025-12-09 at 11.41.28.png',
    'Screenshot 2025-12-09 at 11.41.38.png',
    'Screenshot 2025-12-09 at 11.41.54.png',
    'Screenshot 2025-12-09 at 11.42.03.png',
    'Screenshot 2025-12-09 at 11.42.13.png',
    'Screenshot 2025-12-09 at 11.42.23.png',
    'Screenshot 2025-12-09 at 11.42.33.png',
    'Screenshot 2025-12-09 at 11.42.42.png',
    'Screenshot 2025-12-09 at 11.42.51.png',
    'Screenshot 2025-12-09 at 11.43.14.png',
    'Screenshot 2025-12-09 at 11.43.22.png',
    'Screenshot 2025-12-09 at 11.43.31.png',
    'Screenshot 2025-12-09 at 11.43.41.png'
];

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = images[currentIndex];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
    if (event.target === document.getElementById('lightbox') ||
        event.target.classList.contains('lightbox-close')) {
        document.getElementById('lightbox').classList.remove('active');
        document.body.style.overflow = '';
    }
}

function nextImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('lightbox-img').src = images[currentIndex];
}

function prevImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById('lightbox-img').src = images[currentIndex];
}

document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    } else if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % images.length;
        document.getElementById('lightbox-img').src = images[currentIndex];
    } else if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        document.getElementById('lightbox-img').src = images[currentIndex];
    }
});

document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        setLang(btn.getAttribute('data-lang'));
    });
});

setLang(detectLang());
