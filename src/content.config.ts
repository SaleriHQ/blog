import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		tags: z.array(z.string()),
		heroImage: z.string().optional(),
		published: z.boolean().optional().default(false),
	}),
});

const every = defineCollection({
	loader: glob({ base: './src/content/every', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		images: z.array(z.string()).optional(),
	}),
});

export const collections = { blog, every };
