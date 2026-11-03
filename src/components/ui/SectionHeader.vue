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
    class="flex flex-wrap items-end justify-between gap-5 sm:gap-6"
  >
    <div class="flex flex-col gap-3.5 sm:gap-[18px]" :class="titleMaxWidth">
      <EyebrowBadge>{{ eyebrow }}</EyebrowBadge>
      <h2
        class="text-[clamp(28px,4vw,48px)] font-bold leading-[1.12] text-navy sm:text-[clamp(32px,4vw,48px)] sm:leading-[1.08]"
      >
        {{ title }}
      </h2>
    </div>
    <p
      v-if="description"
      class="max-w-[380px] text-[14.5px] leading-[1.65] text-ink sm:text-[15px] sm:leading-[1.7]"
    >
      {{ description }}
    </p>
  </div>
</template>
