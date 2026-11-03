<script setup>
import { projects } from '@/data/site'
import Container from '@/components/ui/Container.vue'
import ProjectTable from '@/components/ui/ProjectTable.vue'
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
        title="Major customers and delivered capacity"
        description="Expanding customer network, building long-term partnerships."
      />
      <ProjectTable :projects="projects" />
    </Container>
  </section>
</template>
