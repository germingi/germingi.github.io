<template>
  <PageHeader />
  <div class="video-player-page">
    <ProjectCard
      name="vue3 video player"
      repoUrl="https://github.com/user/repo"
      shortDescription="An example video player built with Vue 3."
      :img="vue3VideoPlayerImage"
    >
      Example
    </ProjectCard>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '../PageHeader.vue'
import ProjectCard from './ProjectCard.vue'
import vue3VideoPlayerImage from '@/assets/vu3-video-player.png'
</script>

<style scoped>
.video-player-page {
  max-width: 50rem;
  margin: 2rem auto;
}
</style>
