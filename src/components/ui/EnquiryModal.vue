<script setup>
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { useEnquiry } from '@/composables/useEnquiry'
import AppIcon from './AppIcon.vue'
import EnquiryForm from './EnquiryForm.vue'
import Thermobar from './Thermobar.vue'

const { isEnquiryOpen, closeEnquiry } = useEnquiry()

const dialog = ref(null)
const closeButton = ref(null)
let previousOverflow = ''

function focusableElements() {
  if (!dialog.value) return []

  return Array.from(
    dialog.value.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((element) => element.offsetParent !== null)
}

function handleKeydown(event) {
  if (event.key === 'Escape') {
    event.preventDefault()
    closeEnquiry()
    return
  }

  if (event.key !== 'Tab') return

  const focusable = focusableElements()
  if (!focusable.length) {
    event.preventDefault()
    dialog.value?.focus()
    return
  }

  const first = focusable[0]
  const last = focusable[focusable.length - 1]

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

watch(isEnquiryOpen, async (open) => {
  if (open) {
    previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    await nextTick()
    closeButton.value?.focus()
  } else {
    document.body.style.overflow = previousOverflow
  }
})

onBeforeUnmount(() => {
  document.body.style.overflow = previousOverflow
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isEnquiryOpen"
        class="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-navy/70 px-0 py-0 backdrop-blur-sm sm:items-center sm:px-6 sm:py-8"
        @click.self="closeEnquiry"
      >
        <Transition
          appear
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="translate-y-8 opacity-0 sm:translate-y-0 sm:scale-[0.97]"
          enter-to-class="translate-y-0 opacity-100 sm:scale-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="translate-y-0 opacity-100 sm:scale-100"
          leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-[0.98]"
        >
          <div
            ref="dialog"
            class="relative flex max-h-[100dvh] w-full max-w-[780px] flex-col overflow-hidden rounded-t-[20px] bg-white shadow-[0_35px_80px_-25px_rgba(9,17,39,0.65)] outline-none sm:max-h-[calc(100dvh-4rem)] sm:rounded-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-modal-title"
            tabindex="-1"
            @keydown="handleKeydown"
          >
            <Thermobar class="h-1 shrink-0" />

            <div
              class="flex items-start justify-between gap-4 px-5 pb-4 pt-5 sm:px-[30px] sm:pb-5 sm:pt-6"
            >
              <div class="flex min-w-0 flex-col gap-1.5">
                <span
                  class="font-display text-[11px] uppercase tracking-[.2em] text-brand"
                >
                  Free consultation
                </span>
                <h2
                  id="enquiry-modal-title"
                  class="text-[22px] font-bold leading-[1.2] text-navy sm:text-[26px]"
                >
                  Tell us about your project
                </h2>
                <p class="text-[14px] leading-[1.6] text-muted">
                  Share a few details and our engineers will get back to you.
                </p>
              </div>

              <button
                ref="closeButton"
                type="button"
                class="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-line text-navy transition-colors duration-300 hover:border-brand/40 hover:bg-mist hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
                aria-label="Close enquiry form"
                @click="closeEnquiry"
              >
                <AppIcon name="close" :size="18" />
              </button>
            </div>

            <div class="min-h-0 flex-1 overflow-y-auto">
              <EnquiryForm id-prefix="m" variant="modal" />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
