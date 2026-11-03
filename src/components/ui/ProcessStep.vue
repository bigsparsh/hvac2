<script setup>
defineProps({
  step: { type: Object, required: true },
})
</script>

<template>
  <li
    class="group micro-card flex flex-col gap-2.5 rounded-[14px] border border-line bg-white px-4 pb-5 pt-4 sm:px-[22px] sm:pb-6 sm:pt-[22px]"
  >
    <span
      class="flex h-8 w-8 items-center justify-center rounded-full font-display text-[12px] font-bold tabular-nums transition-transform duration-300 ease-out group-hover:-rotate-3 group-hover:scale-110 sm:h-[34px] sm:w-[34px] sm:text-[13px]"
      :style="{ background: step.bg, color: step.color }"
    >
      {{ step.number }}
    </span>
    <h3
      class="text-[15px] font-semibold text-navy transition-colors duration-300 group-hover:text-brand sm:text-[17px]"
    >
      {{ step.title }}
    </h3>
    <p class="text-[12.5px] leading-[1.6] text-ink sm:text-[13.5px] sm:leading-[1.65]">{{ step.description }}</p>
  </li>
</template>
