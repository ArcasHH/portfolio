import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: 'https://ArcasHH.github.io',
    //base: '/',
    base: '/portfolio/',
    trailingSlash: 'always',
    vite: {
        plugins: [tailwindcss()]
    }
});