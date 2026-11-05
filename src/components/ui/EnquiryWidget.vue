<script setup>
import { useEnquiry } from '@/composables/useEnquiry'

const { isEnquiryOpen, openEnquiry } = useEnquiry()
</script>

<template>
  <button
    v-show="!isEnquiryOpen"
    type="button"
    aria-label="Open enquiry form"
    class="fixed bottom-4 right-4 z-50 flex h-14 items-center gap-2 rounded-full bg-navy px-5 font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:bottom-6 sm:right-6"
    @click="openEnquiry"
  >
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
    <span class="hidden sm:inline">Enquire Now</span>
  </button>
</template>
