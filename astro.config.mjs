// @ts-check
import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypePrettyCode from 'rehype-pretty-code';
import vue from '@astrojs/vue';
import theme from "./public/theme/theme.json"
import tailwindcss from "@tailwindcss/vite";
import { transformerCopyButton } from '@rehype-pretty/transformers';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
    site: 'http://saleri.xyz',
    integrations: [mdx(), sitemap(), vue()],

    markdown: {
        syntaxHighlight: false,
        remarkPlugins: [remarkMath],
        rehypePlugins: [
            rehypeKatex,
            [rehypePrettyCode, {
                theme: theme,
                transformers: [
                    transformerCopyButton({
                        visibility: 'hover',
                        feedbackDuration: 2_500,
                    }),
                ],
            }]
        ]
    },

    vite: {
        plugins: [tailwindcss()]
    }
});