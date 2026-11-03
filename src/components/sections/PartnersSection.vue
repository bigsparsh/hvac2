<script setup>
import { partners } from '@/data/site'
import Container from '@/components/ui/Container.vue'
import PartnerCard from '@/components/ui/PartnerCard.vue'
</script>

<template>
  <section
    id="partners"
    class="overflow-hidden border-t border-line bg-white py-[72px]"
  >
    <Container class="flex flex-wrap items-center justify-between gap-5">
      <h2 class="text-[26px] font-semibold text-navy">
        Driving innovation through technology with
      </h2>
      <span
        class="font-display text-[11px] uppercase tracking-[.2em] text-muted"
      >
        Multi-brand · vendor-neutral
      </span>
    </Container>

    <Container class="mt-8">
      <div
        class="marquee"
        role="region"
        aria-label="Technology partners. Focus or hover to pause."
        tabindex="0"
      >
        <div class="marquee-track">
          <div
            v-for="group in 8"
            :key="group"
            class="marquee-group"
            :aria-hidden="group > 1 ? 'true' : undefined"
          >
            <PartnerCard
              v-for="partner in partners"
              :key="partner.name"
              :partner="partner"
            />
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
