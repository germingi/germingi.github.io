<template>
  <div class="project-card">
    <div class="project-card-header">
      <h2>{{ props.name }}</h2>
      <a :href="props.repoUrl"><i>check out the repo</i></a>
      <p>{{ props.shortDescription }}</p>
    </div>
    <div class="project-card-divider">
      <div class="divider-section" />
      <div class="divider-section" />
      <div class="divider-section" />
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
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

.project-card-header a {
  font-size: 0.9rem;
  color: var(--color-link);
}
.project-card-header a:hover {
  color: var(--color-link-hover);
}

.project-card-divider {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  height: 3px;
}
.divider-section {
  background-color: var(--color-accent-1);
  flex: 1;
}
.divider-section:nth-child(2) {
  background-color: var(--color-accent-2);
}
.divider-section:nth-child(3) {
  background-color: var(--color-accent-3);
}
</style>
