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
    <Container class="flex flex-col gap-10 pb-16 pt-16 sm:gap-14 sm:pb-24 sm:pt-[104px]">
      <div
        class="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-9 sm:gap-14"
      >
        <div class="flex min-w-0 flex-col gap-4 sm:gap-[22px]">
          <EyebrowBadge>About us</EyebrowBadge>
          <h2
            class="text-[clamp(28px,4vw,48px)] font-bold leading-[1.12] text-navy sm:text-[clamp(32px,4vw,48px)] sm:leading-[1.08]"
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
          <div class="relative flex flex-col gap-3.5 px-5 pb-7 pt-6 sm:gap-4 sm:px-[34px] sm:pb-[42px] sm:pt-9">
            <span
              class="font-display text-[11px] uppercase tracking-[.2em] text-solar"
            >
              What we do
            </span>
            <h3 class="text-xl font-semibold leading-[1.25] text-white sm:text-2xl">
              Your trusted end-to-end solution provider
            </h3>
            <p class="text-[14px] leading-[1.65] text-cloud sm:text-[14.5px] sm:leading-[1.75]">
              We are a customer-centric organisation committed to delivering
              exceptional services and customised solutions for data centers,
              industrial applications, electrical infrastructure and HVAC
              systems.
            </p>
            <p class="text-[14px] leading-[1.65] text-cloud sm:text-[14.5px] sm:leading-[1.75]">
              Unlike organisations that focus on a limited range of brands, we
              offer multi-brand solutions and services, giving you greater
              flexibility and access to the right products, technologies and
              expertise whenever you need them.
            </p>
            <p
              class="mt-1 font-display text-[15px] font-semibold text-white sm:text-[16px]"
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
