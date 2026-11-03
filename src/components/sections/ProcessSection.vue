<script setup>
import { processSteps } from '@/data/site'
import Container from '@/components/ui/Container.vue'
import ProcessStep from '@/components/ui/ProcessStep.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import Thermobar from '@/components/ui/Thermobar.vue'
</script>

<template>
  <section
    id="process"
    class="border-y border-line bg-mist"
  >
    <Container class="flex flex-col gap-11 py-24">
      <SectionHeader
        eyebrow="Our capabilities"
        title="From first call to lifelong support"
        description="Eight steps, one accountable team. Every project runs the same path, from power-side survey to cooling-side handover."
      />

      <Thermobar class="rounded-[4px]" />

      <ol
        class="-mt-7 grid list-none grid-cols-2 gap-3 p-0 sm:gap-4 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]"
      >
        <ProcessStep
          v-for="step in processSteps"
          :key="step.number"
          :step="step"
        />
      </ol>
    </Container>
  </section>
</template>
