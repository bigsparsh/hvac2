<script setup>
defineProps({
  pillar: { type: Object, required: true },
})
</script>

<template>
  <div
    class="group micro-card relative flex flex-col gap-2.5 overflow-hidden rounded-[14px] border border-line bg-white px-5 py-5 sm:px-[26px] sm:py-6"
  >
    <span
      class="font-display text-[11px] uppercase tracking-[.16em] transition-transform duration-300 group-hover:translate-x-0.5"
      :style="{ color: pillar.color }"
    >
      {{ pillar.label }}
    </span>
    <p class="text-sm leading-[1.65] text-ink">{{ pillar.description }}</p>
    <span
      class="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
      :style="{ background: pillar.color }"
      aria-hidden="true"
    ></span>
  </div>
</template>
