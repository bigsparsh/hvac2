<script setup>
defineProps({
  projects: { type: Array, required: true },
})

function categoryClasses(category) {
  return category === 'Critical Power'
    ? 'bg-cream text-[#8a1a0f]'
    : 'bg-[#eaf1f8] text-[#17376f]'
}
</script>

<template>
  <div
    class="overflow-x-auto rounded-[14px] border border-line bg-white"
  >
    <table class="project-table">
      <thead>
        <tr>
          <th>Customer</th>
          <th>Solution category</th>
          <th>Capacity</th>
          <th>Load application</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="project in projects"
          :key="project.customer"
          class="group transition-colors duration-200 hover:bg-mist"
        >
          <td class="customer transition-colors duration-200 group-hover:text-brand">
            {{ project.customer }}
          </td>
          <td>
            <span
              class="inline-block rounded-[30px] px-[10px] py-[5px] text-[12px] font-medium"
              :class="categoryClasses(project.category)"
            >
              {{ project.category }}
            </span>
          </td>
          <td class="num">{{ project.capacity }}</td>
          <td>{{ project.application }}</td>
          <td>{{ project.location }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
