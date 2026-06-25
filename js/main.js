const langButtons = document.querySelectorAll('.lang-btn');

langButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.lang-btn.active').classList.remove('active');
    button.classList.add('active');

    const lang = button.getAttribute('id');
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      element.textContent = translations[lang][key];
    });
  });
});