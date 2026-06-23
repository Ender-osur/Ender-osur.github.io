<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
import { useI18n } from 'vue-i18n';

const isDark = useDark();
const toggleDark = useToggle(isDark);

const isLangMenuOpen = ref(false);
const scrollY = ref(0);
const isMobile = ref(window.innerWidth < 700);
const isMobileMenuOpen = ref(false);

// Internationalization
const { locale, availableLocales } = useI18n();
const currentLocale = ref(locale.value);

const changeLocale = (newLocale: string) => {
  locale.value = newLocale;
  currentLocale.value = newLocale;
  isLangMenuOpen.value = false;
};

const handleScroll = () => {
  scrollY.value = window.scrollY;
  const navbar = document.getElementById('navbar');

  if (navbar) {
    if (scrollY.value > 0) {
      navbar.classList.add('shadow-lg', 'shadow-black/5');
    } else {
      navbar.classList.remove('shadow-lg', 'shadow-black/5');
    }
  }
};

const handleResize = () => {
  isMobile.value = window.innerWidth < 700;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);

  handleResize();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
});

const navItems = [
  { href: '#experience', label: 'nav.experience' },
  { href: '#projects', label: 'nav.projects' },
  { href: '#about', label: 'nav.about' },
  { href: '#skills', label: 'nav.skills' },
  { href: '#contact', label: 'nav.contact' },
];
</script>

<template>
  <nav
    id="navbar"
    class="fixed w-full bg-dawn/85 dark:bg-midnight/80 border-b border-[#5c392920] dark:border-[#ff996620] backdrop-blur-md z-50 transition-colors duration-300"
  >
    <div class="px-8 py-3 w-full justify-between">
      <div class="flex items-center justify-between">
        <a href="#" class="font-display text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
          Osur<span class="text-primary">.dev</span>
        </a>

        <div v-if="isMobile">
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-[#5c3929] dark:text-[#ff9966] text-2xl"
          >
            ☰
          </button>

          <div
            v-if="isMobileMenuOpen"
            class="absolute bg-white dark:bg-gray-800 shadow-lg shadow-black rounded-lg py-2 z-50 w-48"
          >
            <a
              v-for="item in navItems"
              :key="item.href"
              :href="item.href"
              class="block px-4 py-2 text-slate-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              @click="isMobileMenuOpen = false"
            >
              {{ $t(item.label) }}
            </a>
          </div>
        </div>

        <div v-else class="flex gap-6 justify-center items-center">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="underline-container font-mono text-xs tracking-[0.18em] uppercase text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-[#ff9966] transition-colors duration-200"
            v-tippy="{ content: $t(item.label) }"
          >
            {{ $t(item.label) }}
            <div class="underline bg-primary dark:bg-[#ff9966]"></div>
          </a>
        </div>
        <div class="relative flex flex-row">
          <button
            @click="isLangMenuOpen = !isLangMenuOpen"
            class="flex items-center space-x-1 px-3 py-1 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <span class="text-[#5c3929] dark:text-[#ff9966]">
              {{ currentLocale.toUpperCase() }}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-[#5c3929] dark:text-[#ff9966]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
            v-if="isLangMenuOpen"
            class="absolute top-12 right-10 mt-2 py-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg dark::shadow-black border border-gray-200 dark:border-gray-700 cursor-pointer"
          >
            <button
              v-for="locale in availableLocales"
              :key="locale"
              @click="changeLocale(locale)"
              class="block w-full text-left px-4 py-2 hover:bg-gray-100 text-slate-900 dark:text-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <span class="text-[#5c3929] dark:text-[#ff9966]">{{ locale.toUpperCase() }}</span>
            </button>
          </div>
          <button
            @click="toggleDark()"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <svg
              v-if="isDark"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-[#5c3929] dark:text-[#ff9966]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-[#5c3929] dark:text-[#ff9966]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.underline {
  height: 2px;
  width: 0px;
  transition: width 200ms;
  position: absolute;
  bottom: 0;
  left: 0;
}
.underline-container {
  position: relative;
  display: inline-block;
}
.underline-container:hover .underline {
  width: 100%;
}
</style>
