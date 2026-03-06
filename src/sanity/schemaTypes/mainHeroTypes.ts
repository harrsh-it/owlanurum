import { defineField, defineType } from "sanity";

export const mainHeroTypes = defineType({
  name: "mainHero",
  title: "Main Hero Section",
  type: "document",

  fields: [

    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "productImage",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),

    defineField({
      name: "subHeading",
      title: "Sub Heading",
      type: "string",
    }),

    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),

    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
    }),

    defineField({
      name: "buttonLink",
      title: "Button Link",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "tagline",
      media: "productImage",
    },
  },
});