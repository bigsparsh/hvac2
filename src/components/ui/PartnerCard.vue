<script setup>
defineProps({
  partner: { type: Object, required: true },
})
</script>

<template>
  <div
    class="partner-card group micro-card flex shrink-0 items-center justify-center rounded-[14px] border border-line bg-white px-5"
  >
    <img
      :src="partner.image"
      :alt="partner.name"
      class="transition-transform duration-500 ease-out group-hover:scale-[1.05]"
      decoding="async"
    />
  </div>
</template>
