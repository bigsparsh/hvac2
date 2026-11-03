<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'ghost', 'navy'].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['md', 'sm'].includes(value),
  },
  href: { type: String, default: '' },
  type: { type: String, default: 'button' },
})

const variantClasses = {
  primary:
    'bg-solar text-navy hover:bg-[#ffc23d] hover:text-navy hover:shadow-[0_12px_26px_-12px_rgba(253,174,9,0.75)]',
  ghost:
    'border border-white/35 text-white hover:border-white/60 hover:bg-white/[0.08] hover:text-white',
  navy: 'bg-navy text-white hover:bg-denim hover:text-white hover:shadow-[0_12px_26px_-14px_rgba(24,25,51,0.85)]',
}

const sizeClasses = {
  md: 'min-h-12 px-6 text-[15px]',
  sm: 'min-h-11 px-6 text-[14px]',
}

const classes = computed(() => [
  'btn-icon inline-flex cursor-pointer items-center gap-[10px] rounded-[40px] font-display font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
  sizeClasses[props.size],
  variantClasses[props.variant],
])
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href || undefined"
    :type="href ? undefined : type"
    :class="classes"
  >
    <slot />
  </component>
</template>
