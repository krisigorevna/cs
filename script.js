// script.js — интерактив: кнопка + сообщение
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('neonBtn');
  const statusMsg = document.getElementById('statusMessage');

  if (btn && statusMsg) {
    btn.addEventListener('click', function() {
      // Неоновый эффект: меняем текст и стиль
      statusMsg.textContent = '🔥 РАУНД ЗАПУЩЕН · УДАЧИ!';
      statusMsg.style.color = '#b69eff';
      statusMsg.style.textShadow = '0 0 20px #7a4cff, 0 0 40px #4a2cbf';
      
      // Анимация мигания кнопки (добавим класс)
      btn.style.boxShadow = '0 0 60px #8a5aff, 0 0 120px #5a2aff';
      btn.style.borderColor = '#d6c6ff';
      
      // Сброс через 2.5 секунды
      setTimeout(() => {
        statusMsg.textContent = '⚡ ГОТОВ К СЛЕДУЮЩЕМУ';
        statusMsg.style.color = '#c7baff';
        statusMsg.style.textShadow = 'none';
        btn.style.boxShadow = '0 0 20px rgba(90, 50, 255, 0.3), inset 0 0 20px rgba(130, 80, 255, 0.1)';
        btn.style.borderColor = '#b18aff';
      }, 2500);
    });

    // Дополнительный эффект: при наведении на блоки (лёгкое свечение)
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transition = '0.2s';
        card.style.boxShadow = '0 20px 50px rgba(90, 50, 255, 0.3), 0 0 0 1px rgba(180, 140, 255, 0.3)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(160, 100, 255, 0.15)';
      });
    });
  }
});
