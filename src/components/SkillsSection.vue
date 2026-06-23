<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t: $t } = useI18n();

const skills = ref([
  { name: 'JavaScript', icon: 'js.svg' },
  { name: 'TypeScript', icon: 'ts.svg' },
  { name: 'Vue.js', icon: 'vue.svg' },
  { name: 'Node.js', icon: 'node.svg' },
  { name: 'Python', icon: 'python.svg' },
  { name: 'HTML5', icon: 'html5.svg' },
  { name: 'Git', icon: 'git.svg' },
  { name: 'CSS3', icon: 'css3.svg' },
  { name: 'AWS', icon: 'aws.svg' },
  { name: 'React', icon: 'react.svg' },
  { name: 'React Native', icon: 'react.svg' },
  { name: 'Next', icon: 'next.svg' },
  { name: 'Angular', icon: 'angular.svg' },
]);

const softSkillsArray = computed(() => {
  const softSkills = $t('skills.softSkills')
    .split(';')
    .map((skill) => skill.trim());
  const headerAndBody = softSkills.map((item) => {
    const [header, body] = item.split(':');
    return { header, body}
  });
  return headerAndBody;
});
</script>

<template>
  <section
    id="skills"
    class="py-24 bg-dawn-raised dark:bg-midnight-raised transition-colors duration-300 flex justify-center items-center w-full"
  >
    <main class="container mx-auto px-4 flex flex-col gap-14 w-full" data-aos="fade-up">
      <div class="flex flex-col items-center gap-4">
        <p class="eyebrow">{{ $t('skills.eyebrow') }}</p>
        <h2 class="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-100">
          {{ $t('skills.title') }}
        </h2>
      </div>
      <div class="grid grid-col-1 sm:grid-cols-2 justify-center items-start gap-12">
        <article class="flex flex-col w-full h-full items-center">
          <div class="flex flex-col w-full max-w-md gap-6">
            <h3 class="font-mono text-sm tracking-[0.2em] uppercase text-[#5c3929] dark:text-[#ff9966] text-center">
              {{ $t('skills.soft') }}
            </h3>
            <ul class="text-gray-700 dark:text-gray-300 flex flex-col gap-5">
              <li
                v-for="(softSkill, index) in softSkillsArray"
                :key="index"
                class="border-l-2 border-[#5c392930] dark:border-[#ff996640] pl-4"
              >
                <span class="block font-display font-semibold text-gray-800 dark:text-gray-100 mb-0.5">{{ softSkill.header }}</span>
                <span class="text-gray-600 dark:text-gray-400 text-[0.95rem] leading-relaxed">{{ softSkill.body }}</span>
              </li>
            </ul>
          </div>
        </article>

        <article class="flex flex-col w-full h-full items-center gap-6">
          <h3 class="font-mono text-sm tracking-[0.2em] uppercase text-[#5c3929] dark:text-[#ff9966]">
            {{ $t('skills.hard') }}
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <div
              v-for="skill in skills"
              :key="skill.name"
              class="group w-32 h-32 bg-white dark:bg-[#0e1a28] border border-[#5c392912] dark:border-white/5 flex flex-col justify-center items-center gap-2.5 rounded-xl shadow-sm hover:shadow-lg hover:border-primary/40 dark:hover:border-[#ff9966]/40 transition-all duration-300 hover:-translate-y-1 select-none"
              data-aos="zoom-in"
            >
              <img
                :src="skill.icon"
                :alt="skill.name"
                class="w-11 h-11 transition-transform duration-300 group-hover:scale-110"
              />
              <h3 class="font-mono text-[0.72rem] tracking-wide text-gray-600 dark:text-gray-400">
                {{ skill.name }}
              </h3>
            </div>
          </div>
        </article>
      </div>
    </main>
  </section>
</template>
