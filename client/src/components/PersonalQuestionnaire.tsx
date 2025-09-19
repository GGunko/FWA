import { useState } from 'react';
import FamicomHeader from './FamicomHeader';
import QuestionCard from './QuestionCard';
import FamicomButton from './FamicomButton';

const questions = [
  "Why did you take Computer Science as your course in college?",
  "What is your \"Dream Job\"?",
  "How do you see yourself ten years from now?"
];

export default function PersonalQuestionnaire() {
  const [answers, setAnswers] = useState<string[]>(['', '', '']);
  const [showCompletion, setShowCompletion] = useState(false);

  const handleAnswerChange = (questionIndex: number, answer: string) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const filledAnswers = answers.filter(answer => answer.trim() !== '').length;
    if (filledAnswers === 3) {
      setShowCompletion(true);
      console.log('All questions answered!', answers);
    } else {
      console.log(`Please complete all questions. ${filledAnswers}/3 completed.`);
    }
  };

  const handleReset = () => {
    setAnswers(['', '', '']);
    setShowCompletion(false);
    console.log('Questionnaire reset');
  };

  if (showCompletion) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto">
          <FamicomHeader 
            title="MISSION COMPLETE!" 
            subtitle="You have successfully answered all questions!"
          />
          
          <div className="border-2 border-accent bg-card p-8 text-center">
            <div className="text-6xl mb-4">★</div>
            <h2 className="text-xl text-accent mb-4" data-testid="text-completion">CONGRATULATIONS!</h2>
            <p className="text-card-foreground mb-6">Your personal questionnaire has been completed.</p>
            <FamicomButton variant="primary" onClick={handleReset}>
              START NEW QUEST
            </FamicomButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <FamicomHeader 
          title="PERSONAL QUEST" 
          subtitle="Complete this questionnaire to finish your school homework mission!"
        />

        <div className="space-y-6">
          {questions.map((question, index) => (
            <QuestionCard
              key={index}
              questionNumber={index + 1}
              question={question}
              answer={answers[index]}
              onAnswerChange={(answer) => handleAnswerChange(index, answer)}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="mb-4">
            <span className="text-sm text-muted-foreground" data-testid="text-progress">
              Progress: {answers.filter(a => a.trim() !== '').length}/3 questions completed
            </span>
          </div>
          <FamicomButton variant="accent" onClick={handleSubmit}>
            SUBMIT QUEST
          </FamicomButton>
        </div>

        {/* Decorative footer */}
        <div className="mt-12 text-center">
          <div className="h-1 bg-border w-full mb-4"></div>
          <p className="text-xs text-muted-foreground">
            Powered by Famicom Technology • School Homework Edition
          </p>
        </div>
      </div>
    </div>
  );
}