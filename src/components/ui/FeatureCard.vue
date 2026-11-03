<script setup>
import AppIcon from './AppIcon.vue'

defineProps({
  feature: { type: Object, required: true },
})
</script>

<template>
  <div
    class="group relative flex items-start gap-[18px] overflow-hidden border-b border-r border-line px-7 py-[30px] transition-colors duration-300 hover:bg-mist"
  >
    <span
      class="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-brand transition-transform duration-300 ease-out group-hover:scale-x-100"
      aria-hidden="true"
    ></span>
    <AppIcon
      :name="feature.icon"
      :size="30"
      :stroke="feature.stroke"
      class="micro-icon shrink-0"
    />
    <div class="flex flex-col gap-2">
      <h3
        class="text-[18px] font-semibold text-navy transition-colors duration-300 group-hover:text-brand"
      >
        {{ feature.title }}
      </h3>
      <p class="text-sm leading-[1.7] text-ink">{{ feature.description }}</p>
    </div>
  </div>
</template>
