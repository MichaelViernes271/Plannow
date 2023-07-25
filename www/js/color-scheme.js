function setTheme(name) {
    document.querySelector(`.${name}`).onclick = () => {
        const root = document.documentElement;
        root.style.setProperty('--primary-color', `var(--${name}-color-10)`);
        root.style.setProperty('--primary-hover-color', `var(--${name}-color)`);
        root.style.setProperty('--primary-border-color', `var(--${name}-color)`);
    };
}

setTheme('green');
setTheme('blue');
setTheme('black');
