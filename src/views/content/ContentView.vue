<script setup lang="ts">
import AboutSection from '@/components/AboutSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import ExperienceComponent from '@/components/ExperienceComponent.vue';
import HeroSection from '@/components/HeroSection.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';
import SkillsSection from '@/components/SkillsSection.vue';
</script>

<template>
  <main class="flex flex-col gap-24">
    <HeroSection />
    <ExperienceComponent />
    <ProjectsSection />
    <AboutSection />
    <SkillsSection />
    <ContactSection />
  </main>
</template>

<style lang="css" scoped></style>
