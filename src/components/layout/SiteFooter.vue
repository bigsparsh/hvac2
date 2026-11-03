<script setup>
import logo from '@/assets/images/thermosync-logo.png'
import { footer } from '@/data/site'
import Container from '@/components/ui/Container.vue'
import GridOverlay from '@/components/ui/GridOverlay.vue'
import Thermobar from '@/components/ui/Thermobar.vue'

function telHref(phone) {
  return `tel:${phone.replace(/\D/g, '')}`
}
</script>

<template>
  <footer class="relative overflow-hidden bg-navy text-white">
    <Thermobar />
    <GridOverlay class="absolute inset-x-0 bottom-0 top-1.5 opacity-60" />

    <Container
      class="relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-8 pb-8 pt-12 sm:gap-10 sm:pb-10 sm:pt-16"
    >
      <div class="group flex flex-col gap-4">
        <div class="flex items-center gap-3">
          <img
            :src="logo"
            alt=""
            class="h-[41px] w-[46px] transition-transform duration-500 ease-out group-hover:-rotate-3 group-hover:scale-105"
          />
          <span
            class="font-display text-[22px] font-extrabold tracking-[-.02em] text-white transition-colors duration-300 group-hover:text-solar"
          >
            ThermoSync
          </span>
        </div>
        <p class="text-[13.5px] leading-[1.7] text-steel">
          {{ footer.description }}
        </p>
        <span class="font-display text-[14px] font-semibold text-solar">
          {{ footer.tagline }}
        </span>
      </div>

      <nav class="flex flex-col gap-2.5" aria-label="Footer">
        <span
          class="mb-1 font-display text-[11px] uppercase tracking-[.2em] text-slateblue"
        >
          Quick links
        </span>
        <a
          v-for="link in footer.quickLinks"
          :key="link.href"
          :href="link.href"
          class="link-underline w-fit text-[14px] text-fog transition-colors duration-300 hover:text-white"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="flex flex-col gap-2.5">
        <span
          class="mb-1 font-display text-[11px] uppercase tracking-[.2em] text-slateblue"
        >
          Services
        </span>
        <span
          v-for="service in footer.serviceLinks"
          :key="service"
          class="cursor-default text-[14px] text-fog transition-all duration-300 hover:translate-x-1 hover:text-white"
        >
          {{ service }}
        </span>
      </div>

      <div class="flex flex-col gap-2.5">
        <span
          class="mb-1 font-display text-[11px] uppercase tracking-[.2em] text-slateblue"
        >
          Get in touch
        </span>
        <template
          v-for="(person, index) in footer.contacts"
          :key="person.name"
        >
          <span
            class="text-[14px] font-semibold text-white"
            :class="index > 0 ? 'mt-1.5' : ''"
          >
            {{ person.name }}
          </span>
          <a
            :href="telHref(person.phone)"
            class="link-underline w-fit text-[14px] tabular-nums text-fog transition-colors duration-300 hover:text-white"
          >
            {{ person.phone }}
          </a>
          <a
            :href="`mailto:${person.email}`"
            class="link-underline w-fit text-[14px] text-fog transition-colors duration-300 hover:text-white"
          >
            {{ person.email }}
          </a>
        </template>
      </div>
    </Container>

    <Container
      class="relative flex flex-wrap justify-between gap-4 border-t border-white/10 py-5 pb-7"
    >
      <span class="text-[12.5px] text-slateblue">{{ footer.copyright }}</span>
      <a
        :href="`https://${footer.website}`"
        target="_blank"
        rel="noopener noreferrer"
        class="link-underline text-[12.5px] text-slateblue transition-colors duration-300 hover:text-white"
      >
        {{ footer.website }}
      </a>
    </Container>
  </footer>
</template>
