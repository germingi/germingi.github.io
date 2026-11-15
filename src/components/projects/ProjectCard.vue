<template>
  <div class="project-card">
    <div>
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
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
}
</style>
