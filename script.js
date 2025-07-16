// DOM yüklendikten sonra çalışacak kodlar
document.addEventListener('DOMContentLoaded', function() {
    
    // Elementleri seç
    const loginButton = document.querySelector('.action-button.login');
    const registerButton = document.querySelector('.action-button.register');
    const navButtons = document.querySelectorAll('.nav-button');
    const navLinks = document.querySelectorAll('.main-nav a');
    const searchInput = document.querySelector('.search-container input');
    const socialLinks = document.querySelectorAll('.social-icons a');
    
    // Login butonu için event listener
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            console.log('Login butonuna tıklandı!');
            alert('Login sayfasına yönlendiriliyor...');
            // Buraya gerçek login sayfasına yönlendirme kodu eklenebilir
            // window.location.href = '/login';
        });
    }
    
    // Register butonu için event listener
    if (registerButton) {
        registerButton.addEventListener('click', function() {
            console.log('Register butonuna tıklandı!');
            alert('Kayıt sayfasına yönlendiriliyor...');
            // Buraya gerçek kayıt sayfasına yönlendirme kodu eklenebilir
            // window.location.href = '/register';
        });
    }
    
    // Header'daki nav butonları için event listener
    navButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const buttonText = e.target.textContent.trim();
            console.log(`${buttonText} butonuna tıklandı!`);
            
            if (buttonText === 'SIGNUP') {
                alert('Kayıt sayfasına yönlendiriliyor...');
                // window.location.href = '/signup';
            } else if (buttonText === 'SUBSCRIBE') {
                alert('Abonelik sayfasına yönlendiriliyor...');
                // window.location.href = '/subscribe';
            }
        });
    });
    
    // Navigasyon linkleri için event listener
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const linkText = e.target.textContent.trim();
            console.log(`${linkText} linkine tıklandı!`);
            
            // Sayfalar arası geçiş burada yapılabilir
            switch(linkText) {
                case 'HOME':
                    console.log('Ana sayfaya yönlendiriliyor...');
                    // window.location.href = '/';
                    break;
                case 'ABOUT':
                    console.log('Hakkımızda sayfasına yönlendiriliyor...');
                    // window.location.href = '/about';
                    break;
                case 'CONTACT':
                    console.log('İletişim sayfasına yönlendiriliyor...');
                    // window.location.href = '/contact';
                    break;
            }
        });
    });
    
    // Arama kutusu için event listener
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = e.target.value.trim();
                if (searchTerm) {
                    console.log(`Arama yapıldı: ${searchTerm}`);
                    alert(`"${searchTerm}" için arama yapılıyor...`);
                    // Buraya gerçek arama işlevi eklenebilir
                    // performSearch(searchTerm);
                }
            }
        });
        
        // Arama kutusuna odaklanma efekti
        searchInput.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.05)';
        });
        
        searchInput.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    }
    
    // Sosyal medya linkleri için event listener
    socialLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = e.target.closest('a').getAttribute('aria-label');
            console.log(`${platform} linkine tıklandı!`);
            alert(`${platform} sayfasına yönlendiriliyor...`);
            
            // Gerçek sosyal medya linklerini burada ekleyebilirsiniz
            // const socialUrls = {
            //     'Facebook': 'https://facebook.com/yourpage',
            //     'Twitter': 'https://twitter.com/yourpage',
            //     'Instagram': 'https://instagram.com/yourpage',
            //     'LinkedIn': 'https://linkedin.com/company/yourpage'
            // };
            // window.open(socialUrls[platform], '_blank');
        });
    });
    
    // Smooth scrolling efekti (anchor linkler için)
    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    // Sayfa yüklendiğinde animasyon efektleri
    function initAnimations() {
        const elements = document.querySelectorAll('.main-heading, .sub-heading, .description, .action-button');
        elements.forEach(function(element, index) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            
            setTimeout(function() {
                element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }
    
    // Animasyonları başlat
    initAnimations();
    
    // Responsive menü için (mobil cihazlarda)
    function handleResize() {
        const header = document.querySelector('.site-header');
        if (window.innerWidth <= 992) {
            header.classList.add('mobile-menu');
        } else {
            header.classList.remove('mobile-menu');
        }
    }
    
    // Sayfa yeniden boyutlandırıldığında çalışacak
    window.addEventListener('resize', handleResize);
    
    // Sayfa yüklendiğinde bir kez çalıştır
    handleResize();
    
    // Konsola hoş geldin mesajı
    console.log('WebArchitects sitesi başarıyla yüklendi! 🚀');
    console.log('Geliştirici: WebArchitects Team');
    
});
