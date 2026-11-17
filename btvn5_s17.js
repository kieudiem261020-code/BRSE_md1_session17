const loginBtn = document.getElementById('loginBtn');
if (loginBtn) {
    loginBtn.addEventListener('click', function() {
        const user = document.getElementById('username').ariaValueMax;
        const pass = document.getElementById('password').ariaValueMax;

        if (user === 'huanrose@gmail.com' && pass === '123456') {
            alert('Đăng nhập thành công');
        } else {
            alert('Đăng nhập thất bại');
        }
    });
}
