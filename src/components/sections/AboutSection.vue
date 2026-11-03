<script setup>
import { pillars } from '@/data/site'
import Container from '@/components/ui/Container.vue'
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'
import GridOverlay from '@/components/ui/GridOverlay.vue'
import PillarCard from '@/components/ui/PillarCard.vue'
import Thermobar from '@/components/ui/Thermobar.vue'
</script>

<template>
  <section id="about" class="bg-white">
    <Container class="flex flex-col gap-14 pb-24 pt-[104px]">
      <div
        class="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-14"
      >
        <div class="flex min-w-0 flex-col gap-[22px]">
          <EyebrowBadge>About us</EyebrowBadge>
          <h2
            class="text-[clamp(32px,4vw,48px)] font-bold leading-[1.08] text-navy"
          >
            Engineering reliability for mission-critical environments
          </h2>
          <p class="max-w-[560px] text-base leading-[1.75] text-ink">
            Thermosync JMK Pvt. Ltd. is an engineering solutions company
            specialising in critical power, precision cooling, data center
            infrastructure and HVAC. We provide end-to-end solutions covering
            system design, supply, installation, commissioning and after-sales
            support.
          </p>
          <p class="max-w-[560px] text-base leading-[1.75] text-ink">
            Our focus is to deliver reliable, energy-efficient and
            application-oriented solutions for mission-critical environments,
            helping customers achieve high availability, operational efficiency
            and business continuity.
          </p>
        </div>

        <div
          class="micro-card relative min-w-0 overflow-hidden rounded-2xl bg-[linear-gradient(145deg,#181933,#17376f)] text-white hover:shadow-[0_30px_60px_-34px_rgba(32,111,195,0.65)]"
        >
          <GridOverlay class="absolute inset-0 opacity-90" />
          <div class="relative flex flex-col gap-4 px-[34px] pb-[42px] pt-9">
            <span
              class="font-display text-[11px] uppercase tracking-[.2em] text-solar"
            >
              What we do
            </span>
            <h3 class="text-2xl font-semibold leading-[1.25] text-white">
              Your trusted end-to-end solution provider
            </h3>
            <p class="text-[14.5px] leading-[1.75] text-cloud">
              We are a customer-centric organisation committed to delivering
              exceptional services and customised solutions for data centers,
              industrial applications, electrical infrastructure and HVAC
              systems.
            </p>
            <p class="text-[14.5px] leading-[1.75] text-cloud">
              Unlike organisations that focus on a limited range of brands, we
              offer multi-brand solutions and services, giving you greater
              flexibility and access to the right products, technologies and
              expertise whenever you need them.
            </p>
            <p
              class="mt-1 font-display text-[16px] font-semibold text-white"
            >
              We don't just provide solutions. We build long-term partnerships.
            </p>
          </div>
          <Thermobar class="absolute inset-x-0 bottom-0" />
        </div>
      </div>

      <!-- brand pillars -->
      <div
        class="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5"
      >
        <PillarCard
          v-for="pillar in pillars"
          :key="pillar.label"
          :pillar="pillar"
        />
      </div>
    </Container>
  </section>
</template>
