<template>
  <div class="project-card">
    <div class="project-card-header">
      <div>
        <h2>{{ props.name }}</h2>
        <a :href="props.repoUrl" target="_blank" rel="noopener noreferrer">link to repo</a>
        <p>{{ props.shortDescription }}</p>
      </div>
      <img :src="props.img" :alt="props.name" />
    </div>
    <hr />
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
  img: string
  repoUrl: string
  shortDescription: string
}>()
</script>

<style scoped>
h2 {
  margin-top: 0;
}

.project-card {
  background-color: #eeeeee;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 1rem;
}
.project-card-header {
  display: flex;
  justify-content: space-between;
}
.project-card-header img {
  aspect-ratio: 4 / 3;
  border-radius: 0.5rem;
  object-fit: cover;
  max-height: 10rem;
  filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.2));
}

@media (max-width: 640px) {
  .project-card-header {
    flex-direction: column;
  }
  .project-card-header img {
    width: 100%;
  }
}
</style>
