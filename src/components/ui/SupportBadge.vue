<script setup>
defineProps({
  label: { type: String, required: true },
})
</script>

<template>
  <div
    class="group relative overflow-hidden rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3.5 font-display text-[14px] font-medium text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-solar/40 hover:bg-white/[0.07]"
  >
    <span
      class="absolute inset-y-0 left-0 w-[2px] origin-top scale-y-0 bg-solar transition-transform duration-300 ease-out group-hover:scale-y-100"
      aria-hidden="true"
    ></span>
    {{ label }}
  </div>
</template>
