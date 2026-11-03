<script setup>
import { reactive, ref } from 'vue'
import { contact } from '@/data/site'
import AppButton from '@/components/ui/AppButton.vue'
import AppIcon from '@/components/ui/AppIcon.vue'
import ContactPersonCard from '@/components/ui/ContactPersonCard.vue'
import Container from '@/components/ui/Container.vue'
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'
import Thermobar from '@/components/ui/Thermobar.vue'

const WHATSAPP_NUMBER = '911024102423'

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
  <section id="contact" class="bg-white">
    <Container class="flex flex-col gap-12 py-[104px]">
      <div class="flex max-w-[820px] flex-col gap-[18px]">
        <EyebrowBadge>Contact us</EyebrowBadge>
        <h2
          class="text-[clamp(30px,3.8vw,46px)] font-bold leading-[1.1] text-navy"
        >
          Your search for a client-centred partner in critical power &amp;
          cooling ends here.
        </h2>
      </div>

      <div
        class="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-start gap-8"
      >
        <div class="flex min-w-0 flex-col gap-3.5">
          <div
            class="group micro-card flex items-start gap-4 rounded-[14px] border border-line bg-white px-6 py-6"
          >
            <AppIcon
              name="pin"
              :size="24"
              stroke="#206FC3"
              class="micro-icon mt-0.5 shrink-0"
            />
            <div class="flex flex-col gap-1.5">
              <span
                class="font-display text-[11px] uppercase tracking-[.18em] text-muted"
              >
                Office
              </span>
              <p class="text-[15px] leading-[1.65] text-navy">
                {{ contact.office }}
              </p>
            </div>
          </div>

          <ContactPersonCard
            v-for="person in contact.people"
            :key="person.name"
            :person="person"
          />
        </div>

        <form
          class="relative flex min-w-0 flex-col gap-[18px] overflow-hidden rounded-2xl border border-line bg-mist px-[30px] pb-9 pt-8"
          aria-label="Enquiry form"
          @submit.prevent="handleSubmit"
        >
          <h3 class="text-[20px] font-semibold text-navy">Send an enquiry</h3>

          <div
            class="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-4"
          >
            <div>
              <label class="field-label" for="f-name">Name</label>
              <input
                id="f-name"
                v-model="form.name"
                class="field-input"
                type="text"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label class="field-label" for="f-company">Company</label>
              <input
                id="f-company"
                v-model="form.company"
                class="field-input"
                type="text"
                placeholder="Company name"
              />
            </div>
            <div>
              <label class="field-label" for="f-email">Email</label>
              <input
                id="f-email"
                v-model="form.email"
                class="field-input"
                type="email"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label class="field-label" for="f-phone">Phone</label>
              <input
                id="f-phone"
                v-model="form.phone"
                class="field-input"
                type="tel"
                placeholder="+91"
              />
            </div>
          </div>

          <div>
            <label class="field-label" for="f-service">
              Service interested in
            </label>
            <select
              id="f-service"
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
            <label class="field-label" for="f-msg">Message</label>
            <textarea
              id="f-msg"
              v-model="form.message"
              class="field-input resize-y"
              rows="4"
              placeholder="Tell us about your load, site and timeline"
            ></textarea>
          </div>

          <AppButton
            type="submit"
            variant="navy"
            class="cursor-pointer justify-center"
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
      </div>
    </Container>
  </section>
</template>
