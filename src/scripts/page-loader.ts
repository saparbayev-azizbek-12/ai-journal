export function hideLoader(): void {
  const loader = document.getElementById('page-loader');
  if (loader && !loader.classList.contains('loader-hidden')) {
    loader.classList.add('loader-hidden');
  }
}

export function showLoader(): void {
  const loader = document.getElementById('page-loader');
  if (loader) {
    loader.classList.remove('loader-hidden');
  }
}

export function initPageLoader(): void {
  if (document.readyState === 'complete') {
    hideLoader();
  } else {
    window.addEventListener('load', hideLoader);
  }

  document.addEventListener('astro:before-preparation', showLoader);
  document.addEventListener('astro:page-load', hideLoader);
  setTimeout(hideLoader, 3000);
}
