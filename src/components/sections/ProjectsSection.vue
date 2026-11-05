<script setup>
import { projects } from '@/data/site'
import Container from '@/components/ui/Container.vue'
import CustomerCard from '@/components/ui/CustomerCard.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
</script>

<template>
  <section
    id="projects"
    class="border-t border-line bg-mist"
  >
    <Container class="flex flex-col gap-8 py-16 sm:gap-10 sm:py-24">
      <SectionHeader
        eyebrow="Project experience"
        title="Our major customers"
        description="Expanding customer network, building long-term partnerships."
      />
      <div class="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
        <CustomerCard
          v-for="project in projects"
          :key="project.customer"
          :customer="project"
        />
      </div>
    </Container>
  </section>
</template>
