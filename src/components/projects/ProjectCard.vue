<template>
  <div class="project-card">
    <ProjectCardHeader
      :name="props.name"
      :repo-url="props.repoUrl"
      :short-description="props.shortDescription"
    />
    <ProjectCardDivider />
    <slot />
  </div>
</template>

<script setup lang="ts">
import ProjectCardDivider from './ProjectCardDivider.vue'
import ProjectCardHeader from './ProjectCardHeader.vue'

const props = defineProps<{
  name: string
  repoUrl: string
  shortDescription: string
}>()
</script>

<style scoped>
h2 {
  margin: 0;
  margin-bottom: 0.5rem;
}

.project-card {
  background-color: var(--color-card);
  border: 1px solid var(--color-card-border);
  border-radius: 0.5rem;
  padding: 1rem;
}
</style>
