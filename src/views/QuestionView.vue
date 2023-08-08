<script setup lang="ts">
import QuestionSection from '@/components/QuestionSection.vue'
import { useQuestionsStore } from '@/stores/questions'

const questionsStore = useQuestionsStore()
</script>

<template>
  <div>
    <span class="form-text d-block text-end">
      Puntos acumulados: {{ questionsStore.score }}ps
    </span>
    <QuestionSection
      :question="questionsStore.questions[questionsStore.currentIndex]"
    />
  </div>
</template>
