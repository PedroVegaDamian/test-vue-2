<script setup lang="ts">
import TrophyIcon from '@/components/TrophyIcon.vue'
import { useQuestionsStore } from '@/stores/questions'

const questionsStore = useQuestionsStore()
const playAgain = () => {
  window.location.reload()
}
</script>

<template>
  <div class="text-center py-5">
    <TrophyIcon />
    <h1 class="mt-3 mb-5">
      Felicitaciones!! hiciste {{ questionsStore.score }} puntos!!
    </h1>
    <button class="btn btn-dark px-4" @click="playAgain">Volver a jugar</button>
  </div>
</template>
