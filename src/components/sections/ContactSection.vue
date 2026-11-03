<script setup>
import { contact } from '@/data/site'
import AppIcon from '@/components/ui/AppIcon.vue'
import ContactPersonCard from '@/components/ui/ContactPersonCard.vue'
import Container from '@/components/ui/Container.vue'
import EnquiryForm from '@/components/ui/EnquiryForm.vue'
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'
</script>

<template>
  <section id="contact" class="bg-white">
    <Container class="flex flex-col gap-9 py-16 sm:gap-12 sm:py-[104px]">
      <div class="flex max-w-[820px] flex-col gap-3.5 sm:gap-[18px]">
        <EyebrowBadge>Contact us</EyebrowBadge>
        <h2
          class="text-[clamp(28px,3.8vw,46px)] font-bold leading-[1.14] text-navy sm:text-[clamp(30px,3.8vw,46px)] sm:leading-[1.1]"
        >
          Your search for a client-centred partner in critical power &amp;
          cooling ends here.
        </h2>
      </div>

      <div
        class="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-start gap-6 sm:gap-8"
      >
        <div class="flex min-w-0 flex-col gap-3.5">
          <div
            class="group micro-card flex items-start gap-4 rounded-[14px] border border-line bg-white px-5 py-5 sm:px-6 sm:py-6"
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

        <EnquiryForm id-prefix="f" />
      </div>
    </Container>
  </section>
</template>
