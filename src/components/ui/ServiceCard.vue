<script setup>
defineProps({
  service: { type: Object, required: true },
})
</script>

<template>
  <article
    class="group micro-card relative flex flex-col overflow-hidden rounded-[14px] border border-line bg-white"
  >
    <div class="relative h-[150px] shrink-0 overflow-hidden sm:h-[168px]">
      <img
        :src="service.image"
        :alt="service.imageAlt || service.title"
        class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        loading="lazy"
        decoding="async"
      />
    </div>

    <div class="relative flex flex-1 flex-col gap-3.5 px-5 pb-6 pt-5 sm:gap-4 sm:px-7 sm:pb-8 sm:pt-6">
      <h3
        class="text-[19px] font-semibold text-navy transition-colors duration-300 group-hover:text-brand sm:text-[21px]"
      >
        {{ service.title }}
      </h3>
      <p class="text-[13.5px] leading-[1.65] text-ink sm:text-sm sm:leading-[1.7]">{{ service.description }}</p>
      <div class="flex flex-wrap gap-2">
        <span v-for="tag in service.tags" :key="tag" class="chip">{{ tag }}</span>
      </div>
    </div>

    <div
      class="absolute inset-x-0 bottom-0 h-1 origin-left transition-transform duration-500 ease-out group-hover:scale-x-125"
      :style="{ background: service.accent }"
      aria-hidden="true"
    ></div>
  </article>
</template>
