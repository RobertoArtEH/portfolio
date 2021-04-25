<template lang="pug">
  footer.bg-gradient-to-b.from-dark-end.to-dark-start
    .container.mx-auto.py-10.px-4.sm_px-12.flex.justify-between
      .flex.flex-col.justify-between.items-center.md_items-start
        RouterLink(to="/").flex.flex-no-shrink.mr-6.mb-16.md_mb-0
          img(src="@/assets/img/eagle.svg" alt="ROBERTO ESQUEDA" width="42" height="32").h-8.w-auto
        span.text-xs.hidden.md_block &#169; 2021 - present Roberto Esqueda. All Rights Reserved.
      .flex.justify-around.md_justify-start
        nav
          p.mb-3.text-gray-400 Menu
          .grid.gap-y-2
            RouterLink(to="/") Home
            RouterLink(to="/projects") Projects
            a(href="https://medium.com/@robertoesqueda" target="_blank" rel="noopener") Blog
        nav.ml-28
          p.mb-3.text-gray-400 Links
          .grid.gap-y-2
            a(href="https://www.linkedin.com/in/robertoesqueda/" target="_blank" rel="noopener") Linkedin
            a(href="https://github.com/RobertoArtEH" target="_blank" rel="noopener") Github
            a(href="https://twitter.com/RobertoArtEH" target="_blank" rel="noopener") Twitter
      span.text-xs.mt-16.block.md_hidden.text-center.md_text-left &#169; 2021 - present Roberto Esqueda. All Rights Reserved.
</template>

<script>
export default {
};
</script>

<style lang="scss">
@media (max-width: 768px) {
  footer > .container {
    flex-direction: column;
  }
}

</style>
