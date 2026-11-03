<script setup>
import { services } from '@/data/site'
import AppButton from '@/components/ui/AppButton.vue'
import Container from '@/components/ui/Container.vue'
import GridOverlay from '@/components/ui/GridOverlay.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import ServiceCard from '@/components/ui/ServiceCard.vue'
import Thermobar from '@/components/ui/Thermobar.vue'
</script>

<template>
  <section
    id="services"
    class="border-t border-line bg-mist"
  >
    <Container class="flex flex-col gap-11 py-24">
      <SectionHeader
        eyebrow="Our core business"
        title="Five pillars of critical infrastructure"
        description="From the UPS room to the data hall to the office floor, one engineering team designs, supplies, commissions and maintains it."
      />

      <div
        class="grid auto-rows-fr grid-cols-[repeat(auto-fit,minmax(min(100%,330px),1fr))] gap-5"
      >
        <ServiceCard
          v-for="service in services"
          :key="service.title"
          :service="service"
        />

        <article
          class="micro-card relative flex flex-col justify-between gap-6 overflow-hidden rounded-[14px] bg-navy px-7 pb-8 pt-[30px] hover:shadow-[0_28px_55px_-30px_rgba(24,25,51,0.75)]"
        >
          <GridOverlay class="absolute inset-0" />
          <div class="relative flex flex-col gap-3">
            <span
              class="font-display text-[11px] uppercase tracking-[.2em] text-solar"
            >
              Not sure where to start?
            </span>
            <h3 class="text-2xl font-semibold leading-[1.25] text-white">
              Tell us the load and the space. We'll size the system.
            </h3>
          </div>
          <AppButton href="#contact" class="relative self-start">
            Talk to an engineer
          </AppButton>
          <Thermobar class="absolute inset-x-0 bottom-0 h-1" />
        </article>
      </div>
    </Container>
  </section>
</template>
