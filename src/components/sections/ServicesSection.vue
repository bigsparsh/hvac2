<script setup>
import { services } from '@/data/site'
import { useEnquiry } from '@/composables/useEnquiry'
import AppButton from '@/components/ui/AppButton.vue'
import Container from '@/components/ui/Container.vue'
import GridOverlay from '@/components/ui/GridOverlay.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import ServiceCard from '@/components/ui/ServiceCard.vue'
import Thermobar from '@/components/ui/Thermobar.vue'

const { openEnquiry } = useEnquiry()
</script>

<template>
  <section
    id="services"
    class="border-t border-line bg-mist"
  >
    <Container class="flex flex-col gap-8 py-16 sm:gap-11 sm:py-24">
      <SectionHeader
        eyebrow="Our core business"
        title="Five pillars of critical infrastructure"
        description="From the UPS room to the data hall to the office floor, one engineering team designs, supplies, commissions and maintains it."
      />

      <div
        class="grid grid-cols-[repeat(auto-fit,minmax(min(100%,330px),1fr))] gap-5"
      >
        <ServiceCard
          v-for="service in services"
          :key="service.title"
          :service="service"
        />

        <article
          class="micro-card relative flex flex-col justify-start gap-4 overflow-hidden rounded-[14px] bg-navy px-5 pb-6 pt-6 hover:shadow-[0_28px_55px_-30px_rgba(24,25,51,0.75)] sm:px-7 sm:pb-8 sm:pt-[30px]"
        >
          <GridOverlay class="absolute inset-0" />
          <div class="relative flex flex-col gap-2.5 sm:gap-3">
            <span
              class="font-display text-[11px] uppercase tracking-[.2em] text-solar"
            >
              Not sure where to start?
            </span>
            <h3 class="text-xl font-semibold leading-[1.25] text-white sm:text-2xl">
              Tell us the load and the space. We'll size the system.
            </h3>
          </div>
          <AppButton
            href="#contact"
            class="relative self-start"
            aria-haspopup="dialog"
            @click.prevent="openEnquiry"
          >
            Talk to an engineer
          </AppButton>
          <Thermobar class="absolute inset-x-0 bottom-0 h-1" />
        </article>
      </div>
    </Container>
  </section>
</template>
