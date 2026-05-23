export function setupCopyButtons(): void {
  const buttons = document.querySelectorAll<HTMLButtonElement>('.copy-btn');

  buttons.forEach(button => {
    // Avoid duplicate listeners by cloning
    const fresh = button.cloneNode(true) as HTMLButtonElement;
    button.parentNode?.replaceChild(fresh, button);

    fresh.addEventListener('click', async () => {
      const raw = fresh.getAttribute('data-code');
      if (!raw) return;

      try {
        const text = JSON.parse(`"${raw}"`).replace(/\\n/g, '\n');
        await navigator.clipboard.writeText(text);

        const copyIcon  = fresh.querySelector('.copy-icon');
        const checkIcon = fresh.querySelector('.check-icon');
        copyIcon?.classList.add('cb-hidden');
        checkIcon?.classList.remove('cb-hidden');

        setTimeout(() => {
          copyIcon?.classList.remove('cb-hidden');
          checkIcon?.classList.add('cb-hidden');
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    });
  });
}
