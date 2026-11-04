<script setup>
import { reactive, ref } from 'vue'
import { contact } from '@/data/site'
import AppButton from './AppButton.vue'
import Thermobar from './Thermobar.vue'

const props = defineProps({
  idPrefix: { type: String, default: 'enquiry' },
  variant: {
    type: String,
    default: 'inline',
    validator: (value) => ['inline', 'modal'].includes(value),
  },
})

const WHATSAPP_NUMBER = '919873143974'

const submitted = ref(false)

const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  service: contact.serviceOptions[0],
  message: '',
})

function handleSubmit() {
  const details = [
    `Name: ${form.name.trim()}`,
    form.company.trim() ? `Company: ${form.company.trim()}` : '',
    `Email: ${form.email.trim()}`,
    form.phone.trim() ? `Phone: ${form.phone.trim()}` : '',
    `Service interested in: ${form.service}`,
  ].filter(Boolean)

  const message = [
    'New enquiry from the Thermosync website',
    '',
    ...details,
    '',
    'Message:',
    form.message.trim(),
  ].join('\n')

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    '_blank',
    'noopener,noreferrer',
  )

  submitted.value = true
}
</script>

<template>
  <form
    :class="[
      'relative flex min-w-0 flex-col gap-4 overflow-hidden bg-mist px-5 pb-7 pt-6 sm:gap-[18px] sm:px-[30px] sm:pb-9 sm:pt-8',
      variant === 'inline' ? 'rounded-2xl border border-line' : '',
    ]"
    aria-label="Enquiry form"
    @submit.prevent="handleSubmit"
  >
    <h3
      v-if="variant === 'inline'"
      class="text-[18px] font-semibold text-navy sm:text-[20px]"
    >
      Send an enquiry
    </h3>

    <div
      class="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-4"
    >
      <div>
        <label class="field-label" :for="`${idPrefix}-name`">Name</label>
        <input
          :id="`${idPrefix}-name`"
          v-model="form.name"
          class="field-input"
          type="text"
          placeholder="Your full name"
        />
      </div>
      <div>
        <label class="field-label" :for="`${idPrefix}-company`">Company</label>
        <input
          :id="`${idPrefix}-company`"
          v-model="form.company"
          class="field-input"
          type="text"
          placeholder="Company name"
        />
      </div>
      <div>
        <label class="field-label" :for="`${idPrefix}-email`">Email</label>
        <input
          :id="`${idPrefix}-email`"
          v-model="form.email"
          class="field-input"
          type="email"
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label class="field-label" :for="`${idPrefix}-phone`">Phone</label>
        <input
          :id="`${idPrefix}-phone`"
          v-model="form.phone"
          class="field-input"
          type="tel"
          placeholder="+91"
        />
      </div>
    </div>

    <div>
      <label class="field-label" :for="`${idPrefix}-service`">
        Service interested in
      </label>
      <select
        :id="`${idPrefix}-service`"
        v-model="form.service"
        class="field-input"
      >
        <option
          v-for="option in contact.serviceOptions"
          :key="option"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
    </div>

    <div>
      <label class="field-label" :for="`${idPrefix}-msg`">Message</label>
      <textarea
        :id="`${idPrefix}-msg`"
        v-model="form.message"
        class="field-input resize-y"
        rows="4"
        placeholder="Tell us about your load, site and timeline"
      ></textarea>
    </div>

    <AppButton
      type="submit"
      variant="navy"
      class="w-full cursor-pointer justify-center"
      :class="variant === 'inline' ? 'sm:w-auto' : ''"
    >
      Send enquiry
    </AppButton>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <p
        v-if="submitted"
        class="text-center text-[13.5px] text-leaf"
        role="status"
      >
        Your enquiry has been prepared in WhatsApp — press send there to
        deliver it.
      </p>
    </Transition>

    <Thermobar class="absolute inset-x-0 bottom-0 h-1" />
  </form>
</template>
