// Language Switching
const langDropdown = document.querySelector('.lang-dropdown');
const translatableElements = document.querySelectorAll('[data-translate]');
const navLinks = document.querySelectorAll('.nav-link'); // إضافة اختيار عناصر التنقل

const translations = {
    en: {
        title: "Welcome to Burger Master",
        about: "About Us",
        contact: "Contact Us",
        order: "Place Order",
        nav_home: "Home",
        nav_about: "About",
        nav_contact: "Contact",
        nav_order: "Order Now",
        description: "Are you looking for a unique dining experience? Look no further! Burger Master is your perfect destination for burger lovers. We offer a variety of delicious burgers to suit all tastes, from classic to innovative. Every bite takes you on a journey of unforgettable flavors! At Burger Master, we serve burgers like you've never tasted before. Fresh ingredients, innovative recipes, and a distinctive atmosphere that combines authenticity and modernity. Join us for an exceptional experience in the world of burgers!",
        about_paragraph1: "At Burger Master, we are more than just a burger restaurant. We are a passionate team dedicated to providing an exceptional dining experience that combines quality and innovation. Our restaurant was founded on a simple idea: to offer the best burgers using fresh ingredients and innovative recipes. We believe that food is not just a meal, but an experience that combines flavors and great ambiance.",
        about_paragraph2: "Our vision is to be the number one destination for burger lovers in the region. We always strive to deliver the best by improving our recipes and providing excellent customer service. Join us to be part of our family and enjoy an unforgettable dining experience.",
        order_paragraph: "Enjoy a quick and easy ordering experience with Burger Master! Choose your favorite meal from our diverse menu and add your personal touch with delicious extras. We guarantee a convenient ordering experience that meets all your needs. Whether you want to dine at home or at the office, we're here to serve you. Order now and enjoy a delicious burger delivered to your doorstep in no time!",
        contact_paragraph1: "We are here to serve you! If you have any inquiries or suggestions, don't hesitate to contact us. Our team is always available to ensure you have the best experience possible.",
        contact_paragraph2: "You can reach us by phone, email, or visit one of our branches. We look forward to hearing from you!",
        contact_info: {
            phone: "Phone: +966-555-123456",
            email: "Email: info@burgermaster.com",
            address: "Address: Burger Street, Riyadh, Saudi Arabia"
        },

            name: "Name",
            phone: "Phone",
            address: "Address",
            ordering: "Order",
            notes: "Additional Notes",
            submitbtn: "Submit Order",
            email:'email',
            message:'your Message',
            addressdet:'Burger Street, Riyadh, Saudi Arabia',
            send:'send',
            addressdet2:'Palestine Gaza',
            ourweb:'Our social media sites',
            Quick:'Quick Links'
        
    },
    ar: {
        title: "مرحبا بكم في برجر ماستر",
        about: "من نحن",
        contact: "اتصل بنا",
        order: "اطلب الآن",
        nav_home: "الرئيسية",
        nav_about: "من نحن",
        nav_contact: "اتصل بنا",
        nav_order: "اطلب الآن",
        description: "هل تبحث عن تجربة طعام فريدة من نوعها؟ لا داعي للبحث أكثر! مطعم برجر ماستر هو وجهتك المثالية لعشاق البرجر. نحن نقدم مجموعة متنوعة من البرجر اللذيذة التي تناسب جميع الأذواق، بدءًا من الكلاسيكية إلى المبتكرة. كل قضمة تأخذك في رحلة من النكهات التي لا تُنسى! في مطعم برجر ماستر، نُقدّم لك البرجر كما لم تتذوقه من قبل. مكوّنات طازجة، وصفات مبتكرة، وأجواء مميزة تجمع بين الأصالة والحداثة. انضم إلينا لتجربة استثنائية في عالم البرجر!",
        about_paragraph1: "في مطعم برجر ماستر، نحن أكثر من مجرد مطعم برجر. نحن فريق شغوف بتقديم تجربة طعام استثنائية تجمع بين الجودة والابتكار. تأسس مطعمنا على فكرة بسيطة: تقديم أفضل أنواع البرجر باستخدام المكونات الطازجة والوصفات المبتكرة. نحن نؤمن بأن الطعام ليس مجرد وجبة، بل هو تجربة تجمع بين النكهات والأجواء الرائعة.",
        about_paragraph2: "رؤيتنا هي أن نكون الوجهة الأولى لعشاق البرجر في المنطقة. نسعى دائمًا لتقديم الأفضل من خلال تحسين وصفاتنا وتقديم خدمة عملاء مميزة. انضم إلينا لتكون جزءًا من عائلتنا واستمتع بتجربة طعام لا تُنسى.",
        order_paragraph: "استمتع بتجربة طلب سهلة وسريعة مع مطعم برجر ماستر! اختر وجبتك المفضلة من قائمتنا المتنوعة، وأضف لمساتك الخاصة من الإضافات الشهية. نحن نضمن لك تجربة طلب مريحة تلبي جميع احتياجاتك. سواء كنت ترغب في تناول الطعام في المنزل أو في المكتب، نحن هنا لخدمتك. اطلب الآن واستمتع بوجبة برجر لذيذة تصل إلى باب منزلك في وقت قياسي!",
        contact_paragraph1: "نحن هنا لخدمتك! إذا كان لديك أي استفسارات أو اقتراحات، لا تتردد في التواصل معنا. فريقنا متواجد دائمًا لضمان حصولك على أفضل تجربة ممكنة.",
        contact_paragraph2: "يمكنك التواصل معنا عبر الهاتف أو البريد الإلكتروني، أو زيارة أحد فروعنا. نحن نتطلع إلى سماعك!",
        contact_info: {
            phone: "الهاتف: +966-555-123456",
            email: "البريد الإلكتروني: info@burgermaster.com",
            address: "العنوان: شارع البرجر، الرياض، المملكة العربية السعودية"
        },

            name: "الاسم",
            phone: "الهاتف",
            address: "العنوان",
            ordering: "الطلب",
            notes: "ملاحظات إضافية",
            submitbtn: "إرسال الطلب",
            email:'البريد الإلكتروني',
            message:'رسالتك',
            addressdet :'شارع البرجر، الرياض، المملكة العربية السعودية',
            addressdet2:'Palestine Gaza',
            send:'إرسال',
            addressdet2:'فلسطين غزة',
            ourweb:'مواقع التواصل الاجتماعي الخاصة بنا',
            Quick:'روابط سريعة'
        
    }
};

langDropdown.addEventListener('change', (e) => {
    const lang = e.target.value;
    
    // تغيير اتجاه الصفحة
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // ترجمة العناصر العامة
    translatableElements.forEach(element => {
        const key = element.dataset.translate;
        element.textContent = translations[lang][key];
    });
    
    // ترجمة عناصر التنقل
    navLinks.forEach((link, index) => {
        const keys = ['nav_home', 'nav_about', 'nav_contact', 'nav_order'];
        link.textContent = translations[lang][keys[index]];
    });
    
    // أنيميشن التغيير
    document.body.style.animation = 'fadeIn 0.2s';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 500);
});

// Theme Toggle
const themeToggle = document.createElement('button');
themeToggle.className = 'theme-toggle';
themeToggle.textContent = 'Toggle Theme';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    const isDarkMode = document.body.classList.contains('dark-mode');
    document.body.classList.toggle('dark-mode', !isDarkMode);
    document.body.classList.toggle('light-mode', isDarkMode);
    themeToggle.textContent = isDarkMode ? 'Switch to Dark' : 'Switch to Light';
});

// Set initial theme
document.body.classList.add('dark-mode');

// Scroll Animation
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;

        if(top >= offset && top < offset + height) {
            sec.classList.add('active');
        }
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Smooth Scroll and Set Active Section
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        // Set the target section as active
        sections.forEach(sec => sec.classList.remove('active'));
        targetSection.classList.add('active');
    });
});

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});