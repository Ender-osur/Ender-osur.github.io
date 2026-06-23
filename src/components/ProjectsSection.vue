<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref, watchEffect } from 'vue';

const { t } = useI18n();
const projects = ref<
  {
    title: string;
    description: string;
    image?: string;
    tags: string[];
    link: string;
    iframe?: string;
  }[]
>([]);

watchEffect(() => {
  projects.value = [
    {
      title: t('projects.title1'),
      description: t('projects.description1'),
      image: 'image1.webp',
      tags: ['Astro', 'TailwindCSS', 'Github Pages'],
      link: 'https://ing-santi-garcia.github.io/ing-santi-garcia/',
    },
    {
      title: t('projects.title2'),
      description: t('projects.description2'),
      image: 'image3.webp',
      tags: ['TailwindCSS', 'React', 'MaterialUI', 'i18n', 'Zustand'],
      link: 'https://web-portal-production-d02a.up.railway.app/',
    },
    {
      title: t('projects.title3'),
      description: t('projects.description3'),
      image: 'app.webp',
      tags: ['React Native', 'Expo', 'i18n', 'TS', 'Redux'],
      link: 'https://github.com/Ender-osur/cardio_analyzer',
    },
    {
      title: t('projects.title4'),
      description: t('projects.description4'),
      image: 'image4.webp',
      tags: ['Vuejs', 'Tailwind 4', 'i18n', 'TS', 'Node+Express', 'PostgreSQL', 'Hexagonal Arch'],
      link: 'https://github.com/Ender-osur/fe_infringment-defender',
    },
    {
      title: t('projects.title5'),
      description: t('projects.description5'),
      image: 'image5.png',
      tags: ['PHP', 'React.js', 'Redux', 'TS', 'Hexagonal Architecture'],
      link: 'https://sioma.app/user/login.php',
    },
    {
      title: t('projects.title6'),
      description: t('projects.description6'),
      image: 'image6.png',
      tags: ['Monolito', 'Next.js', 'Zustand', 'TS', 'TailwindCSS'],
      link: 'https://fylakax.com',
    },
  ];
});
</script>

<template>
  <section
    id="projects"
    class="relative py-24 bg-dawn-raised dark:bg-midnight-raised transition-colors duration-300 flex justify-center items-center"
  >
    <div class="container relative mx-auto px-4 gap-10 flex flex-col" data-aos="fade-up">
      <div class="flex flex-col items-center gap-4">
        <p class="eyebrow">{{ $t('projects.eyebrow') }}</p>
        <h2 class="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-100">
          {{ $t('projects.title') }}
        </h2>
      </div>
      <div class="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="project in projects"
          :key="project.title"
          class="group relative h-full bg-white dark:bg-[#0e1a28] border border-[#5c392912] dark:border-white/5 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-center"
          data-aos="fade-up"
        >
          <div class="flex flex-col relative h-full justify-between w-full">
            <div class="overflow-hidden">
              <iframe
                v-if="project.iframe"
                title="Project"
                class="w-full h-full pointer-events-none"
                :src="project.iframe"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer"
              ></iframe>
              <img
                v-else
                :src="project.image"
                :alt="project.title"
                class="w-full h-48 object-cover text-gray-600 dark:text-gray-300 pointer-events-none transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div class="flex flex-col relative h-full justify-between p-6 pt-5">
              <main class="w-full flex flex-col gap-3">
                <h3 class="text-xl font-bold font-display text-gray-800 dark:text-gray-100">
                  {{ project.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed text-[0.95rem]">{{ project.description }}</p>
                <div class="flex flex-wrap gap-2 mt-1">
                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="font-mono text-xs px-2 py-0.5 rounded-md border border-[#5c392920] dark:border-white/10 text-gray-500 dark:text-gray-400"
                  >
                    {{ tag }}
                  </span>
                </div>
              </main>
              <footer class="flex mt-6">
                <a
                  :href="project.link"
                  class="group/link text-primary dark:text-[#ff9966] hover:text-[#d2551f] font-medium inline-flex items-center"
                  target="_blank"
                >
                  {{ $t('projects.viewProject') }}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 ml-1 transition-transform group-hover/link:translate-x-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
