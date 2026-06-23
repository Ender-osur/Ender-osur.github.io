<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useDark } from '@vueuse/core';

import NavbarComponent from '../NavbarComponent.vue';
import FooterComponent from '../FooterComponent.vue';
import SunMoonComponent from '../SunMoonComponent.vue';
import ScrollTop from '../ScrollTop.vue';

const isDark = useDark();
</script>

<template>
  <div
    :class="{ dark: isDark }"
    class="main bg-dawn dark:bg-midnight transition-colors duration-300 flex"
  >
    <SunMoonComponent />
    <header class="shrink-[0] min-h-5">
      <NavbarComponent />
    </header>
    <main class="grow-1 overflow-y-auto flex flex-col top-16 sm:top-12 relative ">
      <router-view />
    </main>
    <footer class="shrink-[0] h-80 flex items-center justify-center">
      <FooterComponent />
    </footer>
    <ScrollTop />
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}
</style>
