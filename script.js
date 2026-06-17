// script.js — лёгкая интерактивность
document.addEventListener('DOMContentLoaded', () => {

    // 1. Кнопки "Играть" / "Начать битву"
    const playBtns = document.querySelectorAll('.btn-primary');
    playBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            // визуальный фидбэк
            const original = this.textContent;
            this.textContent = '⚡ ИЩЕМ...';
            this.style.transform = 'scale(0.96)';
            setTimeout(() => {
                this.textContent = original;
                this.style.transform = '';
            }, 1200);
        });
    });

    // 2. Кнопки "Войти" / "Смотреть трейлер" / "Apply" (для примера)
    const outlineBtns = document.querySelectorAll('.btn-outline');
    outlineBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('🔮 Функция в разработке. Демо-режим.');
        });
    });

    // 3. hover-эффект для карточек (уже в css, но добавим лёгкий звук)
    const cards = document.querySelectorAll('.block-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // ничего не делаем, css уже обрабатывает
        });
    });

    // 4. Навигация — плавный скролл (заглушка)
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            this.style.color = '#b69eff';
            setTimeout(() => { this.style.color = ''; }, 300);
        });
    });

    // 5. Эффект загрузки — мигание лого (просто для атмосферы)
    const logo = document.querySelector('.logo');
    if (logo) {
        setInterval(() => {
            logo.style.opacity = '0.9';
            setTimeout(() => { logo.style.opacity = '1'; }, 100);
        }, 3000);
    }

    console.log('🔥 CS:NEON загружен!');
});
