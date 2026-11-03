<script setup>
import SiteFooter from '@/components/layout/SiteFooter.vue'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import IndustriesSection from '@/components/sections/IndustriesSection.vue'
import PartnersSection from '@/components/sections/PartnersSection.vue'
import ProcessSection from '@/components/sections/ProcessSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import SupportSection from '@/components/sections/SupportSection.vue'
import WhySection from '@/components/sections/WhySection.vue'
import EnquiryModal from '@/components/ui/EnquiryModal.vue'
</script>

<template>
  <div class="w-full bg-white">
    <SiteHeader />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhySection />
      <ProcessSection />
      <IndustriesSection />
      <PartnersSection />
      <ProjectsSection />
      <SupportSection />
      <ContactSection />
    </main>
    <SiteFooter />
    <EnquiryModal />
  </div>
</template>
