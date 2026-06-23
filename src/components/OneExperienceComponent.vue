<script setup lang="ts">
defineProps<{
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}>();


</script>

<template>
  <div class="relative">
    <div
      class="absolute w-3.5 h-3.5 bg-primary dark:bg-[#ff9966] rounded-full -left-9 top-7 ring-4 ring-dawn dark:ring-midnight sm:block hidden"
    ></div>
    <article
      class="relative bg-dawn-raised dark:bg-midnight-raised border border-[#5c392915] dark:border-white/5 shadow-xl max-w-200 rounded-lg overflow-hidden border-l-2 border-l-primary dark:border-l-[#ff9966]"
    >
      <header class="p-7 pb-0 w-full">
        <time
          class="block font-mono text-xs tracking-widest uppercase text-[#5c3929] dark:text-[#ff9966] mb-3"
          >{{ period }}</time
        >
        <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">
          {{ title }}
        </h3>
        <h4 class="text-base text-gray-600 dark:text-gray-400">{{ company }}</h4>
      </header>
      <section class="px-7 py-6 flex flex-col gap-5 items-start">
        <ul class="space-y-2 list-disc pl-4 marker:text-primary dark:marker:text-[#ff9966]">
          <li
            v-for="(item, index) in description"
            :key="index"
            class="text-[#4a5565] dark:text-[#99a1af] leading-relaxed"
          >
            {{ item }}
          </li>
        </ul>
        <footer class="flex flex-wrap gap-2">
          <span
            v-for="tech in technologies"
            :key="tech"
            class="font-mono text-xs px-2.5 py-1 rounded-md border border-[#5c392925] dark:border-white/10 text-gray-600 dark:text-gray-300"
          >
            {{ tech }}
          </span>
        </footer>
      </section>
    </article>
  </div>
</template>
