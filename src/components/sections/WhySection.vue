<script setup>
import { reasons } from '@/data/site'
import Container from '@/components/ui/Container.vue'
import FeatureCard from '@/components/ui/FeatureCard.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
</script>

<template>
  <section id="why" class="bg-white">
    <Container class="flex flex-col gap-11 py-24">
      <SectionHeader
        eyebrow="Why Thermosync JMK"
        title="Built for uptime, efficiency and value"
        title-max-width="max-w-[720px]"
      />

      <div
        class="grid grid-cols-[repeat(auto-fit,minmax(min(100%,330px),1fr))] border-l border-t border-line"
      >
        <FeatureCard
          v-for="feature in reasons"
          :key="feature.title"
          :feature="feature"
        />
      </div>
    </Container>
  </section>
</template>
