document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-link');
  const contents = document.querySelectorAll('.tab-content');
  const welcomeSection = document.getElementById('welcome');
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const modalClose = document.querySelector('.modal-close');

  // Показываем начальный контент (массаж)
  const initialTab = document.querySelector('.tab-link.active');
  const initialContentId = initialTab.getAttribute('data-tab');
  const initialContent = document.getElementById(initialContentId);
  initialContent.style.display = 'block';
  initialContent.classList.add('active');
  welcomeSection.classList.add(initialContentId);

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => {
        c.classList.remove('active');
        c.style.display = 'none';
      });
      welcomeSection.classList.remove('massage', 'depilation');
      tab.classList.add('active');
      const contentId = tab.getAttribute('data-tab');
      const content = document.getElementById(contentId);
      content.style.display = 'block';
      setTimeout(() => content.classList.add('active'), 10);
      welcomeSection.classList.add(contentId);
    });
  });

  // Обработка кликов по изображениям
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('zoomable')) {
      modal.style.display = 'flex';
      modalImage.src = e.target.src;
    }
  });

  // Закрытие модального окна
  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});