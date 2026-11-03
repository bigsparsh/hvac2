import { ref } from 'vue'

const isEnquiryOpen = ref(false)
let triggerElement = null

export function useEnquiry() {
  function openEnquiry(source) {
    const explicitElement =
      source instanceof HTMLElement ? source : source?.currentTarget

    triggerElement =
      explicitElement instanceof HTMLElement
        ? explicitElement
        : document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null

    isEnquiryOpen.value = true
  }

  function closeEnquiry() {
    isEnquiryOpen.value = false

    if (triggerElement?.isConnected) {
      triggerElement.focus({ preventScroll: true })
    }
    triggerElement = null
  }

  return { isEnquiryOpen, openEnquiry, closeEnquiry }
}
