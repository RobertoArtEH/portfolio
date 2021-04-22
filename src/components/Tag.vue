<template lang="pug">
  span.tag.font-bold.rounded-lg.bg-light-gray.mr-2.mb-2 {{ title }}
</template>

<script>
export default {
  name: 'Tag',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
