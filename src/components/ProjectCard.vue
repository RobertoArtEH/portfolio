<template lang="pug">
  article.project-card.rounded-md
    img.object-cover(:src="require(`@/assets/${imgUrl}`)" :alt="title")
    .p-5
      h3.font-bold.text-lg {{ title }}
      p.pt-2 {{ description }}
      .flex.flex-wrap.py-6
        template(v-for="item in tags")
          Tag(:title="item")
      template(v-if="url")
        a(
          :href="url"
          target="_blank"
          rel="noopener"
          :aria-label="title"
        ).inline-block.text-center.text-primary-green.text-sm.font-bold.w-full.py-2.rounded-md.border-2.border-primary-green.
          VIEW PROJECT
      template(v-else)
        a.inline-block.text-center.text-red-500.text-sm.font-bold.w-full.py-2.rounded-md.border-2.border-red-500.
          NO AVAILABLE NOW
</template>

<script>
import Tag from '@/components/Tag.vue';

export default {
  name: 'ProjectCard',
  components: { Tag },
  props: {
    id: {
      type: Number,
      required: true,
    },
    url: {
      type: String,
      required: false,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
  },
};
</script>
