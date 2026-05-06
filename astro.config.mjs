import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
    site: 'https://ArcasHH.github.io',
    //base: '/',
    base: '/portfolio/',
    trailingSlash: 'always',
    integrations: [icon()],
    vite: {
        plugins: [tailwindcss()]
    }
});