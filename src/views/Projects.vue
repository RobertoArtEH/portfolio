<template lang="pug">
  main.container.mx-auto.mt-16.px-4.sm_px-12
    h1.text-3xl.text-center.mb-12 Projects
    section.grid.grid-cols-1.xl_grid-cols-projects.gap-x-2.place-items-center
      template(v-for="project in projects")
        ProjectCard(
          :id="project.id"
          :url="project.url"
          :imgUrl="project.imgUrl"
          :title="project.title"
          :description="project.description"
          :tags="project.tags"
        ).my-8
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue';
import Projects from '@/data/Projects';

export default {
  name: 'Projects',
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: Projects,
    };
  },
};
</script>
