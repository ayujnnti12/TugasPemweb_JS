document.addEventListener('DOMContentLoaded', function() {
    // Mengambil elemen form dan field input
    const form = document.getElementById('registrationForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const usernameError = document.getElementById('usernameError');
    const emailFeedback = document.getElementById('emailFeedback');
    const emailError = document.getElementById('emailError');
    const passwordStrength = document.getElementById('passwordStrength');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordFeedback = document.getElementById('confirmPasswordFeedback');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    // Validasi username
    username.addEventListener('keyup', function() {
        const usernameValue = username.value;
        // Username harus antara 5-20 karakter dan alfanumerik
        if (!/^[a-zA-Z0-9]{5,20}$/.test(usernameValue)) {
            usernameError.textContent = 'Username harus 5-20 karakter dan alfanumerik.';
        } else {
            usernameError.textContent = '';
        }
    });

    // Validasi format email
    email.addEventListener('change', function() {
        const emailValue = email.value;
        // Cek apakah email valid
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
            emailFeedback.textContent = 'Email valid';
            emailError.textContent = '';
        } else {
            emailFeedback.textContent = '';
            emailError.textContent = 'Format email tidak valid.';
        }
    });

    // Validasi kekuatan password
    password.addEventListener('keyup', function() {
        const passwordValue = password.value;
        // Password kuat jika minimal 8 karakter, ada angka, dan huruf
        if (passwordValue.length >= 8 && /[0-9]/.test(passwordValue) && /[a-zA-Z]/.test(passwordValue)) {
            passwordStrength.textContent = 'Password kuat';
            passwordError.textContent = '';
        } else {
            passwordStrength.textContent = 'Password lemah';
            passwordError.textContent = 'Password harus minimal 8 karakter dan mencakup huruf dan angka.';
        }
    });

    // Validasi konfirmasi password
    confirmPassword.addEventListener('input', function() {
        // Cek apakah konfirmasi password cocok dengan password
        if (confirmPassword.value === password.value) {
            confirmPasswordFeedback.textContent = 'Password cocok';
            confirmPasswordError.textContent = '';
        } else {
            confirmPasswordFeedback.textContent = 'Password tidak cocok';
            confirmPasswordError.textContent = 'Konfirmasi password tidak cocok.';
        }
    });

    // Validasi akhir saat submit
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah reload halaman saat submit
        // Cek apakah ada pesan error sebelum submit
        if (usernameError.textContent || emailError.textContent || passwordError.textContent || confirmPasswordError.textContent) {
            alert('Periksa kembali isian formulir Anda.');
        } else {
            alert('Pendaftaran berhasil!');
        }
    });
});