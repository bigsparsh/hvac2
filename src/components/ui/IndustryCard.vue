<script setup>
defineProps({
  industry: { type: Object, required: true },
})
</script>

<template>
  <div
    class="group micro-card relative flex min-h-[140px] flex-col justify-end overflow-hidden rounded-[14px] border border-line bg-navy p-4 sm:min-h-[160px] sm:p-5"
  >
    <img
      :src="industry.image"
      :alt="industry.imageAlt || industry.name"
      class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
      loading="lazy"
      decoding="async"
    />
    <div
      class="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/5"
      aria-hidden="true"
    ></div>
    <div class="relative flex flex-col gap-2">
      <span
        class="h-[3px] w-7 rounded-full"
        :style="{ backgroundColor: industry.accent }"
        aria-hidden="true"
      ></span>
      <span
        class="font-display text-[14px] font-semibold leading-[1.25] text-white drop-shadow-[0_1px_8px_rgba(9,17,39,0.6)] sm:text-[15.5px]"
      >
        {{ industry.name }}
      </span>
    </div>
  </div>
</template>
