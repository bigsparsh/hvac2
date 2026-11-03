<script setup>
defineProps({
  stat: { type: Object, required: true },
})
</script>

<template>
  <div
    class="stat-card group flex flex-col gap-1.5 transition-colors duration-300 hover:bg-white/[0.035]"
  >
    <span
      class="origin-left font-display text-[40px] font-bold leading-none tabular-nums transition-transform duration-500 ease-out group-hover:scale-105"
      :class="stat.color"
    >
      {{ stat.value }}
    </span>
    <span
      class="text-[13px] text-steel transition-colors duration-300 group-hover:text-cloud"
    >
      {{ stat.label }}
    </span>
  </div>
</template>
