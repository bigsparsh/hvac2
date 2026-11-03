<script setup>
import heroImageDesktop from '@/assets/images/thermosync hero image.webp'
import heroImageMobile from '@/assets/images/potrait hero image.webp'
import { stats } from '@/data/site'
import { useEnquiry } from '@/composables/useEnquiry'
import AppButton from '@/components/ui/AppButton.vue'
import AppIcon from '@/components/ui/AppIcon.vue'
import Container from '@/components/ui/Container.vue'
import GridOverlay from '@/components/ui/GridOverlay.vue'
import StatCard from '@/components/ui/StatCard.vue'
import Thermobar from '@/components/ui/Thermobar.vue'

const { openEnquiry } = useEnquiry()
</script>

<template>
  <section id="top" class="relative overflow-hidden bg-navy text-white">
    <div class="absolute inset-0" aria-hidden="true">
      <picture>
        <source media="(min-width: 768px)" :srcset="heroImageDesktop" />
        <img
          :src="heroImageMobile"
          alt=""
          class="h-[112%] w-full -scale-x-100 object-cover object-center md:h-full"
          fetchpriority="high"
          decoding="async"
        />
      </picture>
    </div>
    <div class="hero-image-shade absolute inset-0" aria-hidden="true"></div>
    <GridOverlay class="absolute inset-0 opacity-25" />

    <Container
      class="relative flex flex-col justify-center py-16 pb-[232px] md:py-24 md:pb-[88px]"
    >
      <div class="flex min-w-0 max-w-[640px] flex-col gap-5 sm:gap-[26px]">
        <span
          class="self-start rounded-[40px] border border-brand/[0.45] bg-brand/[0.18] px-3.5 py-1.5 font-display text-[11px] uppercase tracking-[.18em] text-sky transition-all duration-300 hover:-translate-y-0.5 hover:border-sky/60 hover:bg-brand/25 sm:px-4 sm:py-2 sm:text-[12px] sm:tracking-[.2em]"
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

        <p class="max-w-[540px] text-[16px] leading-[1.65] text-cloud sm:text-[17px] sm:leading-[1.7]">
          Thermosync JMK Private Limited delivers end-to-end critical power,
          precision cooling, data center infrastructure and HVAC solutions, from
          design through commissioning and after-sales support.
        </p>

        <div class="flex flex-wrap gap-3.5">
          <AppButton
            href="#contact"
            aria-haspopup="dialog"
            @click.prevent="openEnquiry"
          >
            Get a free consultation
            <AppIcon name="arrow-right" :size="18" />
          </AppButton>
          <AppButton href="#services" variant="ghost">
            Explore our services
          </AppButton>
        </div>
      </div>
    </Container>

    <!-- stats -->
    <div class="relative border-t border-white/10 bg-navy/55 md:bg-navy/40">
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
