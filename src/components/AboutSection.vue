<template>
  <section
    id="about"
    class="py-24 bg-transparent transition-colors duration-300 flex justify-center items-center"
  >
    <div class="container mx-auto px-4 gap-8 flex flex-col items-center" data-aos="fade-up">
      <div class="flex flex-col items-center gap-4 mb-4">
        <p class="eyebrow">{{ $t('about.eyebrow') }}</p>
        <h2 class="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-100">
          {{ $t('about.title') }}
        </h2>
      </div>
      <div class="max-w-2xl mx-auto text-center">
        <p class="text-xl md:text-2xl font-display font-medium text-gray-800 dark:text-gray-200 leading-snug mb-6">
          {{ $t('about.description1') }}
        </p>
        <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {{ $t('about.description2') }}
        </p>
      </div>
    </div>
  </section>
</template>
