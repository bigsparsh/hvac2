<script setup>
defineProps({
  step: { type: Object, required: true },
})
</script>

<template>
  <li
    class="group micro-card flex flex-col gap-2.5 rounded-[14px] border border-line bg-white px-[22px] pb-6 pt-[22px]"
  >
    <span
      class="flex h-[34px] w-[34px] items-center justify-center rounded-full font-display text-[13px] font-bold tabular-nums transition-transform duration-300 ease-out group-hover:-rotate-3 group-hover:scale-110"
      :style="{ background: step.bg, color: step.color }"
    >
      {{ step.number }}
    </span>
    <h3
      class="text-[17px] font-semibold text-navy transition-colors duration-300 group-hover:text-brand"
    >
      {{ step.title }}
    </h3>
    <p class="text-[13.5px] leading-[1.65] text-ink">{{ step.description }}</p>
  </li>
</template>
