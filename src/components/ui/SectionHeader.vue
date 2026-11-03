<script setup>
import EyebrowBadge from './EyebrowBadge.vue'

defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  titleMaxWidth: { type: String, default: 'max-w-[640px]' },
})
</script>

<template>
  <div
    class="flex flex-wrap items-end justify-between gap-6"
  >
    <div class="flex flex-col gap-[18px]" :class="titleMaxWidth">
      <EyebrowBadge>{{ eyebrow }}</EyebrowBadge>
      <h2
        class="text-[clamp(32px,4vw,48px)] font-bold leading-[1.08] text-navy"
      >
        {{ title }}
      </h2>
    </div>
    <p
      v-if="description"
      class="max-w-[380px] text-[15px] leading-[1.7] text-ink"
    >
      {{ description }}
    </p>
  </div>
</template>
