document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const footer = document.querySelector('.footer p');

  if (footer) {
    footer.insertAdjacentHTML('afterend', '<p style="margin-top: 0.5rem; color: var(--muted);">© ' + year + ' Olivia Carter</p>');
  }
});
