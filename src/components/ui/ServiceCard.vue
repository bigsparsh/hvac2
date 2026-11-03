<script setup>
defineProps({
  service: { type: Object, required: true },
})
</script>

<template>
  <article
    class="group micro-card relative flex flex-col overflow-hidden rounded-[14px] border border-line bg-white"
  >
    <div class="relative h-[168px] shrink-0 overflow-hidden">
      <img
        :src="service.image"
        :alt="service.imageAlt || service.title"
        class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        loading="lazy"
        decoding="async"
      />
    </div>

    <div class="relative flex flex-1 flex-col gap-4 px-7 pb-8 pt-6">
      <h3
        class="text-[21px] font-semibold text-navy transition-colors duration-300 group-hover:text-brand"
      >
        {{ service.title }}
      </h3>
      <p class="text-sm leading-[1.7] text-ink">{{ service.description }}</p>
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
