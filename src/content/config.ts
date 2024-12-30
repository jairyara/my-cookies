import { defineCollection, z } from "astro:content";

const recipes = defineCollection({
    schema: z.object({
        title: z.string(),
        image: z.string(),
        category: z.string(),
        time: z.number(),
        quantity: z.number(),
        ingredients: z.array(z.string()),
        nutrition: z.array(z.string()),
        steps: z.array(z.string()),
        anymore:z.array(z.string()),
        decorate:z.array(z.string()),
        fillings:z.array(z.string()),
    })
});


export const collections = { recipes };

