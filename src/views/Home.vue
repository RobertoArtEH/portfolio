<template lang="pug">
  main
    section.hero.mt-14
      .grid.grid-cols-1.lg_grid-cols-2.container.mx-auto.px-4.sm_px-12
        .text-center.lg_text-left
          h1.text-5xl
            span.block I'm Roberto Esqueda,
            span Web Developer
          p.my-8.
            I specialize in JavaScript technologies like Vue, Angular and React.</br>
            I have +1 years of professional experience working in frontend and backend,</br>
            but since I was very young I have tried to never stop learning.
          .mb-8.space-x-5
            a(
              href="https://www.linkedin.com/in/robertoesqueda/"
              target="_blank"
              rel="noopener"
              aria-label="Linkedin"
            ).bg-primary-green.rounded.py-2.px-3.text-black.border-2.border-black.inline-block
              i.fab.fa-linkedin.fa-2x
            a(
              href="https://github.com/RobertoArtEH"
              target="_blank"
              rel="noopener"
              aria-label="Github"
            ).bg-primary-green.rounded.py-2.px-3.text-black.border-2.border-black.inline-block
              i.fab.fa-github.fa-2x
            a(
              href="https://twitter.com/RobertoArtEH"
              target="_blank"
              rel="noopener"
              aria-label="Twitter"
            ).bg-primary-green.rounded.py-2.px-3.text-black.border-2.border-black.inline-block
              i.fab.fa-twitter.fa-2x
            a(
              href="mailto:robertoesqueda.dev@gmail.com"
              aria-label="Email"
            ).bg-primary-green.rounded.py-2.px-3.text-black.border-2.border-black.inline-block
              i.fas.fa-envelope.fa-2x
        img(src="@/assets/img/hero-illustration.svg" alt="Hero illustration" width="353" height="343").block.mx-auto
      .relative
        svg(viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 150px; width: 100%; position: absolute; bottom: 0; z-index: -1;")
          path(
            d="M0.00,49.98 C178.61,232.39 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style="stroke: none; fill: #0E141B;"
          )
    section.container.mx-auto.mt-32.px-4.sm_px-12.grid.grid-cols-1.lg_grid-cols-main
      section
        h2.font-bold MAIN PROJECTS
        template(v-for="project in projects")
          ProjectCard(
            :id="project.id"
            :url="project.url"
            :imgUrl="project.imgUrl"
            :title="project.title"
            :description="project.description"
            :tags="project.tags"
          ).my-12
        RouterLink(
          to="/projects"
        ).inline-block.text-center.btn-footer.button.w-full.mb-16.py-3.px-5.rounded-full.bg-primary-green.text-black.text-sm.font-bold.border-2.border-black.
          VIEW ALL
      section
        article
          h4.font-bold MAIN SKILLS
          .flex.flex-wrap.my-12
            template(v-for="skill in skills")
              Tag(:title="skill")
        article
          h4.font-bold TECHNOLOGIES & TOOLS
          .flex.flex-wrap.my-12
            template(v-for="technology in technologies")
              Tag(:title="technology")
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue';
import Tag from '@/components/Tag.vue';

import Projects from '@/data/Projects';
import { mainSkills, secondarySkills } from '@/data/Skills';

export default {
  name: 'Home',
  components: {
    ProjectCard,
    Tag,
  },
  data() {
    return {
      skills: mainSkills,
      technologies: secondarySkills,
      projects: Projects.slice(0, 3),
    };
  },
};
</script>
