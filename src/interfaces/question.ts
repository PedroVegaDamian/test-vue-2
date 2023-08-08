export interface Question {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export interface QuestionFilters {
  amount: number
  category: number
  difficulty: string
}
