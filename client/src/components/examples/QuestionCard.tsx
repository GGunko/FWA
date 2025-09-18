import QuestionCard from '../QuestionCard';
import { useState } from 'react';

export default function QuestionCardExample() {
  const [answer, setAnswer] = useState('');

  return (
    <QuestionCard
      questionNumber={1}
      question="Why did you take IT as your course in college?"
      answer={answer}
      onAnswerChange={setAnswer}
    />
  );
}