// @ts-check
import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import vue from '@astrojs/vue';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: 'http://saleri.xyz',
    integrations: [mdx(), sitemap(), vue()],

    vite: {
        plugins: [tailwindcss()]
    }
});