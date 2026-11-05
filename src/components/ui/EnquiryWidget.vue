<script setup>
import { Icon } from '@iconify/vue'
import { useEnquiry } from '@/composables/useEnquiry'

const { isEnquiryOpen, openEnquiry } = useEnquiry()
</script>

<template>
  <button
    v-show="!isEnquiryOpen"
    type="button"
    aria-label="Chat with us on WhatsApp"
    class="fixed bottom-4 right-4 z-50 flex h-14 items-center gap-2 rounded-full bg-whatsapp px-5 font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-whatsapp-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:bottom-6 sm:right-6"
    @click="openEnquiry"
  >
    <Icon icon="simple-icons:whatsapp" width="20" height="20" color="white" />
    <span class="hidden sm:inline">Chat with us</span>
  </button>
</template>
