<script setup>
import { supportRoles } from '@/data/site'
import Container from '@/components/ui/Container.vue'
import GridOverlay from '@/components/ui/GridOverlay.vue'
import SupportBadge from '@/components/ui/SupportBadge.vue'
import Thermobar from '@/components/ui/Thermobar.vue'
</script>

<template>
  <section class="relative overflow-hidden bg-navy text-white">
    <GridOverlay class="absolute inset-0" />
    <div class="support-glow absolute inset-0" aria-hidden="true"></div>

    <Container
      class="relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-9 py-16 sm:gap-12 sm:py-[88px]"
    >
      <div class="flex flex-col gap-3.5 sm:gap-[18px]">
        <span
          class="font-display text-[11px] uppercase tracking-[.2em] text-solar"
        >
          Technical, service &amp; support network
        </span>
        <h2
          class="text-[clamp(28px,3.6vw,44px)] font-bold leading-[1.12] text-white sm:text-[clamp(30px,3.6vw,44px)] sm:leading-[1.1]"
        >
          Uptime, by design.
        </h2>
        <p class="max-w-[480px] text-[15px] leading-[1.7] text-cloud sm:text-[15.5px] sm:leading-[1.75]">
          A dedicated team stands behind every installation, from the
          application engineer who sizes it to the service engineer who keeps it
          running.
        </p>
      </div>

      <div
        class="grid grid-cols-2 gap-2.5 sm:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]"
      >
        <SupportBadge
          v-for="role in supportRoles"
          :key="role"
          :label="role"
        />
      </div>
    </Container>

    <Thermobar class="relative" />
  </section>
</template>
