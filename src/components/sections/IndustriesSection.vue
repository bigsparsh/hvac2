<script setup>
import { industries } from '@/data/site'
import Container from '@/components/ui/Container.vue'
import IndustryCard from '@/components/ui/IndustryCard.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
</script>

<template>
  <section id="industries" class="bg-white">
    <Container class="flex flex-col gap-11 py-24">
      <SectionHeader
        eyebrow="Industries we serve"
        title="Trusted across 10+ sectors"
        description="From mission-critical data halls to campus comfort, the same engineering discipline and a single point of accountability."
      />

      <div
        class="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-3.5"
      >
        <IndustryCard
          v-for="industry in industries"
          :key="industry.name"
          :industry="industry"
        />
      </div>
    </Container>
  </section>
</template>
