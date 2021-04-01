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
            ).bg-primary-green.rounded.py-2.px-3.text-black.border-2.border-black.inline-block
              i.fab.fa-linkedin.fa-2x
            a(
              href="https://github.com/RobertoArtEH"
              target="_blank"
            ).bg-primary-green.rounded.py-2.px-3.text-black.border-2.border-black.inline-block
              i.fab.fa-github.fa-2x
            a(
              href="https://twitter.com/RobertoArtEH"
              target="_blank"
            ).bg-primary-green.rounded.py-2.px-3.text-black.border-2.border-black.inline-block
              i.fab.fa-twitter.fa-2x
            a(
              href="mailto:robertoesqueda.dev@gmail.com"
            ).bg-primary-green.rounded.py-2.px-3.text-black.border-2.border-black.inline-block
              i.fas.fa-envelope.fa-2x
        img(src="@/assets/img/hero-illustration.svg").block.mx-auto
      .relative
        svg(viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 150px; width: 100%; position: absolute; bottom: 0; z-index: -1;")
          path(
            d="M0.00,49.98 C178.61,232.39 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style="stroke: none; fill: #0E141B;"
          )
</template>

<script>

export default {
  name: 'Home',
};
</script>
