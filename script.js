document.addEventListener('DOMContentLoaded', () => {

    const loginButton = document.querySelector('.action-button.login');
    const registerButton = document.querySelector('.action-button.register');
    const navButtons = document.querySelectorAll('.nav-button');

    loginButton.addEventListener('click', () => {
        console.log('Login butonuna tıklandı!');
        alert('Login sayfasına yönlendiriliyor...');
    });

    registerButton.addEventListener('click', () => {
        console.log('Register butonuna tıklandı!');
        alert('Kayıt sayfasına yönlendiriliyor...');
    });

    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log(`${e.target.textContent} butonuna tıklandı!`);
        });
    });

});
