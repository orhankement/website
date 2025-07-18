 // Mobile menu toggle
        function toggleMenu() {
            const navMenu = document.getElementById('nav-menu');
            navMenu.classList.toggle('show');
        }

        // Cookie functions
        function acceptCookies() {
            document.getElementById('cookieNotice').classList.remove('show');
            localStorage.setItem('cookieAccepted', 'true');
        }

        function declineCookies() {
            document.getElementById('cookieNotice').classList.remove('show');
            localStorage.setItem('cookieAccepted', 'false');
        }

        // Show cookie notice if not accepted
        window.addEventListener('load', function() {
            if (!localStorage.getItem('cookieAccepted')) {
                setTimeout(function() {
                    document.getElementById('cookieNotice').classList.add('show');
                }, 2000);
            }
        });

        // Smooth scrolling for anchor links
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

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 30px rgba(0,0,0,0.15)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            }
        });
