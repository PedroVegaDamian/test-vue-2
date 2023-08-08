import { defineStore } from 'pinia'
import type { Question } from '@/interfaces/question'

interface State {
  questions: Question[]
  currentIndex: number
  score: number
}

export const useQuestionsStore = defineStore({
  id: 'questions',
  state: (): State => ({
    questions: [],
    currentIndex: 0,
    score: 0
  }),
  getters: {
    isQuestionsReady(): boolean {
      return this.questions.length > 0
    },
    isFinalQuestion(): boolean {
      return this.currentIndex === this.questions.length
    }
  },
  actions: {
    setQuestions(questions: Question[]) {
      this.questions = questions
    },
    nextQuestion() {
      this.currentIndex += 1
    },
    setScore(score: number) {
      this.score += score
    }
  }
})
