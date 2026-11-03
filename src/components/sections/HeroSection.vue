<script setup>
import logo from '@/assets/images/thermosync-logo.png'
import { stats } from '@/data/site'
import AppButton from '@/components/ui/AppButton.vue'
import AppIcon from '@/components/ui/AppIcon.vue'
import Container from '@/components/ui/Container.vue'
import GridOverlay from '@/components/ui/GridOverlay.vue'
import StatCard from '@/components/ui/StatCard.vue'
import Thermobar from '@/components/ui/Thermobar.vue'
</script>

<template>
  <section id="top" class="relative overflow-hidden bg-navy text-white">
    <div class="hero-glow absolute inset-0" aria-hidden="true"></div>
    <GridOverlay class="absolute inset-0" />

    <Container
      class="relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-10 py-16 pb-14 sm:gap-14 sm:py-24 sm:pb-[88px]"
    >
      <div class="flex min-w-0 flex-col gap-[26px]">
        <span
          class="self-start rounded-[40px] border border-brand/[0.45] bg-brand/[0.18] px-4 py-2 font-display text-[12px] uppercase tracking-[.2em] text-sky transition-all duration-300 hover:-translate-y-0.5 hover:border-sky/60 hover:bg-brand/25"
        >
          Engineering solutions for critical environments
        </span>

        <h1
          class="text-[clamp(34px,6vw,72px)] font-bold leading-[1.04] text-white sm:leading-[1.02] lg:text-[clamp(54px,calc(6vw-6px),66px)]"
        >
          <span class="lg:whitespace-nowrap">Power &amp; Cooling</span> Services
          for
          <span class="text-solar">Critical Spaces</span>
        </h1>

        <Thermobar class="w-60 rounded-[4px]" />

        <p class="max-w-[540px] text-[17px] leading-[1.7] text-cloud">
          Thermosync JMK Private Limited delivers end-to-end critical power,
          precision cooling, data center infrastructure and HVAC solutions, from
          design through commissioning and after-sales support.
        </p>

        <div class="flex flex-wrap gap-3.5">
          <AppButton href="#contact">
            Get a free consultation
            <AppIcon name="arrow-right" :size="18" />
          </AppButton>
          <AppButton href="#services" variant="ghost">
            Explore our services
          </AppButton>
        </div>
      </div>

      <!-- Thermo + Sync composition -->
      <div
        class="relative grid min-w-0 grid-cols-1 items-center gap-5 md:grid-cols-[1fr_auto_1fr] md:gap-0"
      >
        <div
          class="micro-card order-2 flex flex-col gap-3 rounded-2xl border border-solar/35 bg-white/[0.04] px-[22px] py-6 hover:border-solar/60 hover:bg-white/[0.07] md:order-none"
        >
          <span
            class="font-display text-[11px] uppercase tracking-[.2em] text-solar"
          >
            Thermo · Power
          </span>
          <h3 class="text-[20px] font-semibold text-white">Critical power</h3>
          <p class="text-[13px] leading-[1.7] text-steel">
            UPS · STS · Power distribution · Batteries · Lithium-ion · Power
            quality
          </p>
        </div>

        <div
          class="relative z-[1] order-first mx-auto flex h-[112px] w-[126px] items-center justify-center md:order-none md:-mx-[26px] md:h-[134px] md:w-[150px]"
        >
          <img
            :src="logo"
            alt="ThermoSync logomark: gear, power bolt and cooling fan"
            class="float-logo h-[112px] w-[126px] drop-shadow-[0_14px_30px_rgba(0,0,0,.45)] md:h-[134px] md:w-[150px]"
          />
        </div>

        <div
          class="micro-card order-3 flex flex-col gap-3 rounded-2xl border border-brand/60 bg-white/[0.04] px-[22px] py-6 hover:border-brand hover:bg-white/[0.07] md:order-none md:pl-[34px] md:pr-[22px]"
        >
          <span
            class="font-display text-[11px] uppercase tracking-[.2em] text-azure"
          >
            Sync · Cooling
          </span>
          <h3 class="text-[20px] font-semibold text-white">Precision cooling</h3>
          <p class="text-[13px] leading-[1.7] text-steel">
            PAC · PAHU · Chillers · VRF/VRV · Hot &amp; cold aisle containment
          </p>
        </div>

        <p
          class="order-last col-span-full mt-[22px] text-center font-display text-[13px] uppercase tracking-[.14em] text-slateblue md:order-none"
        >
          One partner. Every critical system.
        </p>
      </div>
    </Container>

    <!-- stats -->
    <div class="relative border-t border-white/10">
      <Container class="stats-grid py-0">
        <StatCard
          v-for="stat in stats"
          :key="stat.label"
          :stat="stat"
        />
      </Container>
    </div>

    <Thermobar class="relative" />
  </section>
</template>
