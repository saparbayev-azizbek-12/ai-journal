export function applyTheme(isDark: boolean): void {
  document.documentElement.classList.toggle('dark', isDark);
  const lightIcon = document.getElementById('theme-icon-light');
  const darkIcon  = document.getElementById('theme-icon-dark');
  const label     = document.getElementById('theme-label');
  if (!lightIcon || !darkIcon || !label) return;
  if (isDark) {
    lightIcon.classList.add('theme-hidden');
    darkIcon.classList.remove('theme-hidden');
    label.textContent = 'Dark';
  } else {
    lightIcon.classList.remove('theme-hidden');
    darkIcon.classList.add('theme-hidden');
    label.textContent = 'Light';
  }
}

export function setupTheme(): void {
  const saved      = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark     = saved ? saved === 'dark' : prefersDark;
  applyTheme(isDark);

  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    const nowDark = !document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', nowDark ? 'dark' : 'light');
    applyTheme(nowDark);
  });
}
