<template lang="pug">
  article.project-card.rounded-md.my-12
    img.object-cover(:src="imgUrl")
    .p-5
      h3.font-bold.text-lg {{ title }}
      p.pt-2 {{ description }}
      .flex.flex-wrap.py-6
        template(v-for="item in tags")
          Tag(:title="item")
      button.text-primary-green.text-sm.font-bold.w-full.py-2.rounded-md.border-2.border-primary-green.
        VIEW PROJECT
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
