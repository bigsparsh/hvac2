<script setup>
import AppIcon from './AppIcon.vue'

defineProps({
  industry: { type: Object, required: true },
})
</script>

<template>
  <div
    class="group micro-card flex min-h-[112px] flex-col justify-between gap-3 rounded-[14px] border border-line bg-white px-4 py-4 sm:min-h-[120px] sm:gap-3.5 sm:px-5 sm:py-[22px]"
  >
    <AppIcon
      :name="industry.icon"
      :size="26"
      :stroke="industry.stroke"
      class="micro-icon shrink-0"
    />
    <span
      class="font-display text-[14px] font-semibold text-navy transition-colors duration-300 group-hover:text-brand sm:text-[15.5px]"
    >
      {{ industry.name }}
    </span>
  </div>
</template>
