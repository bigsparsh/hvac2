<script setup>
import { ref } from 'vue'
import logo from '@/assets/images/thermosync-logo.png'
import { navigation } from '@/data/site'
import { useEnquiry } from '@/composables/useEnquiry'
import AppButton from '@/components/ui/AppButton.vue'
import AppIcon from '@/components/ui/AppIcon.vue'
import Container from '@/components/ui/Container.vue'
import Thermobar from '@/components/ui/Thermobar.vue'

const { openEnquiry } = useEnquiry()

const menuOpen = ref(false)
const menuButton = ref(null)

function closeMenu() {
  menuOpen.value = false
}

function openMobileEnquiry() {
  const trigger = menuButton.value
  closeMenu()
  openEnquiry(trigger)
}
</script>

<template>
  <header
    class="relative border-b border-line bg-white"
    @keydown.escape="closeMenu"
  >
    <Thermobar class="h-1" />

    <Container class="relative flex items-center justify-between gap-3 py-3.5">
      <a
        href="#top"
        class="group flex min-w-0 items-center gap-3"
        aria-label="Thermosync home"
        @click="closeMenu"
      >
        <img
          :src="logo"
          alt=""
          class="block h-[41px] w-[46px] shrink-0 transition-transform duration-500 ease-out group-hover:-rotate-3 group-hover:scale-105"
        />
        <span class="flex min-w-0 flex-col gap-[3px]">
          <span
            class="font-display text-[22px] font-extrabold leading-none tracking-[-.02em] text-navy transition-colors duration-300 group-hover:text-brand"
          >
            ThermoSync
          </span>
          <span
            class="hidden font-display text-[7.5px] font-medium uppercase tracking-[.2em] text-muted transition-colors duration-300 group-hover:text-ink min-[520px]:block min-[1024px]:hidden min-[1200px]:block"
          >
            Power &amp; Cooling Services for Critical Spaces
          </span>
        </span>
      </a>

      <nav
        class="ts-nav hidden flex-wrap gap-[18px] min-[1024px]:flex min-[1200px]:gap-[26px]"
        aria-label="Main"
      >
        <a
          v-for="link in navigation"
          :key="link.href"
          :href="link.href"
          class="link-underline text-[13px] font-medium text-ink transition-colors duration-300 hover:text-brand min-[1200px]:text-[14px]"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="flex shrink-0 items-center gap-2">
        <AppButton
          href="#contact"
          variant="navy"
          size="sm"
          class="max-[1024px]:hidden"
          aria-haspopup="dialog"
          @click.prevent="openEnquiry"
        >
          Get a free consultation
        </AppButton>

        <button
          ref="menuButton"
          type="button"
          class="flex h-11 w-11 items-center justify-center rounded-full border border-line text-navy transition-colors duration-300 hover:border-brand/40 hover:bg-mist min-[1024px]:hidden"
          :aria-expanded="menuOpen"
          aria-controls="mobile-nav"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          @click="menuOpen = !menuOpen"
        >
          <span class="relative block h-4 w-5" aria-hidden="true">
            <span
              class="absolute left-0 top-0.5 h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-out"
              :class="menuOpen ? 'translate-y-[6px] rotate-45' : ''"
            ></span>
            <span
              class="absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-opacity duration-200"
              :class="menuOpen ? 'opacity-0' : 'opacity-100'"
            ></span>
            <span
              class="absolute left-0 top-[13px] h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-out"
              :class="menuOpen ? '-translate-y-[6px] -rotate-45' : ''"
            ></span>
          </span>
        </button>
      </div>
    </Container>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="-translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <div
        v-if="menuOpen"
        id="mobile-nav"
        class="border-t border-line bg-white min-[1024px]:hidden"
      >
        <Container class="flex flex-col gap-2 py-4">
          <nav class="flex flex-col" aria-label="Mobile">
            <a
              v-for="link in navigation"
              :key="link.href"
              :href="link.href"
              class="group flex items-center justify-between rounded-[10px] px-3 py-3 font-display text-[15px] font-medium text-ink transition-colors duration-200 hover:bg-mist hover:text-brand"
              @click="closeMenu"
            >
              {{ link.label }}
              <AppIcon
                name="arrow-right"
                :size="16"
                class="text-muted transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:text-brand"
              />
            </a>
          </nav>

          <AppButton
            href="#contact"
            variant="navy"
            class="mt-2 w-full justify-center"
            aria-haspopup="dialog"
            @click.prevent="openMobileEnquiry"
          >
            Get a free consultation
          </AppButton>
        </Container>
      </div>
    </Transition>
  </header>
</template>
