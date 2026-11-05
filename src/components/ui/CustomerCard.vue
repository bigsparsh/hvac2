<script setup>
import { computed } from 'vue'

const props = defineProps({
  customer: { type: Object, required: true },
})

const initials = computed(
  () =>
    props.customer.initials ??
    props.customer.customer
      .split(/\s+/)
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
      .toUpperCase(),
)
</script>

<template>
  <div
    class="group micro-card flex flex-col items-center gap-4 rounded-[14px] border border-line bg-white p-6 text-center"
  >
    <div class="flex h-20 w-full items-center justify-center">
      <img
        v-if="customer.logo"
        :src="customer.logo"
        :alt="`${customer.customer} logo`"
        class="max-h-full max-w-[180px] object-contain transition-transform duration-500 ease-out group-hover:scale-[1.05]"
        loading="lazy"
        decoding="async"
      />
      <span
        v-else
        class="flex h-16 w-16 items-center justify-center rounded-full bg-cream font-display text-[20px] font-semibold text-[#8a1a0f]"
        aria-hidden="true"
      >
        {{ initials }}
      </span>
    </div>
    <p
      class="text-[14px] font-semibold leading-[1.4] text-navy transition-colors duration-200 group-hover:text-brand"
    >
      {{ customer.customer }}
    </p>
  </div>
</template>
