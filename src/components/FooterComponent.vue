<script setup lang="ts"></script>

<template>
  <footer
    class="w-full h-full bg-dawn-raised dark:bg-midnight-raised border-t border-[#5c392915] dark:border-white/5 py-10 transition-colors duration-300 items-center flex justify-center"
  >
    <div class="container mx-auto px-4 flex flex-col items-center gap-3 text-center">
      <a href="#" class="font-display text-xl font-bold text-gray-800 dark:text-gray-100">
        Osur<span class="text-primary">.dev</span>
      </a>
      <p class="font-mono text-xs tracking-wide text-gray-500 dark:text-gray-400">
        © {{ new Date().getFullYear() }} — {{ $t('footer.rights') }}
      </p>
      <a
        href="https://github.com/Ender-osur/vue_portfolio"
        referrerpolicy="no-referrer"
        target="_blank"
        class="font-mono text-xs tracking-[0.18em] uppercase text-[#5c3929] dark:text-[#ff9966] hover:underline underline-offset-4"
        >GitHub ↗</a
      >
    </div>
  </footer>
</template>

<style scoped></style>
