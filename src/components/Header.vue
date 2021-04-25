<template lang="pug">
  header.relative.container.mx-auto.px-4.sm_px-12
    .flex.justify-between.items-center.py-6.md_justify-start.md_space-x-10
      .flex.justify-start.w-0.flex-1
        RouterLink(to="/").flex.flex-no-shrink.mr-6
          img(src="@/assets/img/eagle.svg" alt="ROBERTO ESQUEDA" width="42" height="32").h-8.w-auto

      .-mr-2.-my-2.md_hidden
        button(type="button" aria-expanded="false" @click="showNavContent = !showNavContent").p-2.inline-flex.items-center.justify-center.text-gray-400.hover_text-gray-500
          span.sr-only Open menu
          svg(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true").h-6.w-6
            path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16")

      nav.hidden.md_flex.space-x-10
        RouterLink.font-bold.text-white.text-opacity-50(to="/") HOME
        RouterLink.font-bold.text-white.text-opacity-50(to="/projects") PROJECTS
        a(href="https://medium.com/@robertoesqueda" target="_blank" rel="noopener").font-bold.text-white.text-opacity-50 BLOG

      .hidden.md_flex.items-center.justify-end.md_flex-1.lg_w-0
        button.bg-primary-green.rounded-full.py-3.px-5.text-black.font-bold.text-sm.mt-4.lg_mt-0.border-2.border-black
          | DOWNLOAD RESUME

    transition(
      enter-active-class="transition duration-300 ease-out transform"
      enter-class="-translate-y-3 scale-95 opacity-0"
      enter-to-class="translate-y-0 scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in transform"
      leave-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-3 opacity-0"
    )
      .absolute.top-0.inset-x-0.transition.transform.origin-top-right.md_hidden.shadow-lg.z-50(v-show="showNavContent")
        .rounded-lg.bg-gradient-to-b.from-dark-start.to-dark-end
          .pt-5.pb-6.px-5
            .flex.items-center.justify-between
              div
                img.h-8.w-auto(src='@/assets/img/eagle.svg' alt='ROBERTO ESQUEDA')
              .-mr-2
                button.rounded-md.p-2.inline-flex.items-center.justify-center.text-gray-400.hover_text-gray-500(type='button' @click="showNavContent = !showNavContent")
                  span.sr-only Close menu
                  svg.h-6.w-6(xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true')
                    path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 18L18 6M6 6l12 12')
            .mt-6
              nav.grid.gap-y-8
                RouterLink.-m-3.p-3.flex.items-center(to='/')
                  span.text-base.font-medium.text-white.text-opacity-50.
                    HOME
                RouterLink.-m-3.p-3.flex.items-center(to='/projects')
                  span.text-base.font-medium.text-white.text-opacity-50.
                    PROJECTS
                a.-m-3.p-3.flex.items-center(href='https://medium.com/@robertoesqueda' target='_blank' rel="noopener")
                  span.text-base.font-medium.text-white.text-opacity-50.
                    BLOG
          .py-6.px-5.space-y-6
            div
              button.w-full.py-3.px-5.rounded-full.bg-primary-green.text-black.text-sm.font-bold.border-2.border-black.
                DOWNLOAD RESUME
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      showNavContent: false,
    };
  },
};
</script>

<style lang="scss">

a.router-link-exact-active, a.router-link-exact-active span {
  @apply text-opacity-100;
}

</style>
