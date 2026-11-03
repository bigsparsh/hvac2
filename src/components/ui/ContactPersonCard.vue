<script setup>
defineProps({
  person: { type: Object, required: true },
})
</script>

<template>
  <div
    class="group micro-card flex items-start gap-4 rounded-[14px] border border-line bg-white px-5 py-5 sm:px-6 sm:py-6"
  >
    <span
      class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-[14px] font-bold transition-transform duration-300 ease-out group-hover:scale-110"
      :style="{ background: person.avatarBg, color: person.avatarColor }"
    >
      {{ person.initials }}
    </span>
    <div class="flex min-w-0 flex-col gap-1">
      <span
        class="font-display text-[16px] font-semibold text-navy transition-colors duration-300 group-hover:text-brand"
      >
        {{ person.name }}
      </span>
      <span v-if="person.role" class="text-[12.5px] text-muted">
        {{ person.role }}
      </span>
      <span class="mt-1.5 text-[14px] tabular-nums text-ink sm:text-[14.5px]">
        {{ person.phones }}
      </span>
      <a
        :href="`mailto:${person.email}`"
        class="link-underline w-fit text-[14px] text-brand transition-colors duration-300 hover:text-denim sm:text-[14.5px]"
      >
        {{ person.email }}
      </a>
    </div>
  </div>
</template>
