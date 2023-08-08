<script setup lang="ts">
import { computed } from 'vue'
import type { Question } from '@/interfaces/question'
import { useQuestionsStore } from '@/stores/questions'

interface Props {
  question: Question
}
const props = defineProps<Props>()

const questionsStore = useQuestionsStore()

const answersRandomOrder = computed(() => {
  return [
    ...props.question.incorrect_answers,
    props.question.correct_answer
  ].sort(() => Math.random() - 0.5)
})

const handleClick = (answer: string) => {
  if (answer === props.question.correct_answer) {
    questionsStore.setScore(10)
  }
  questionsStore.nextQuestion()
}
</script>

<template>
  <section class="text-center my-5">
    <p class="form-text">{{ props.question.category }}</p>
    <p class="fs-4 fw-bold mb-4">{{ props.question.question }}</p>

    <div class="d-flex justify-content-center gap-3">
      <button
        :key="answer"
        class="btn btn-outline-dark rounded-pill"
        v-for="answer of answersRandomOrder"
        @click="handleClick(answer)"
      >
        {{ answer }}
      </button>
    </div>
  </section>
</template>
