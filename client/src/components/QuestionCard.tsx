import FamicomInput from './FamicomInput';

interface QuestionCardProps {
  questionNumber: number;
  question: string;
  answer: string;
  onAnswerChange: (answer: string) => void;
}

export default function QuestionCard({ 
  questionNumber, 
  question, 
  answer, 
  onAnswerChange 
}: QuestionCardProps) {
  return (
    <div className="border-2 border-border bg-card p-6 mb-6" data-testid={`card-question-${questionNumber}`}>
      <div className="mb-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-sm font-mono" data-testid={`text-question-number-${questionNumber}`}>
            {questionNumber}
          </div>
          <div className="h-1 flex-1 bg-primary"></div>
        </div>
        <h2 className="text-lg text-card-foreground font-mono leading-relaxed" data-testid={`text-question-${questionNumber}`}>
          {question}
        </h2>
      </div>
      
      <FamicomInput
        placeholder="Type your answer here..."
        value={answer}
        onChange={onAnswerChange}
        multiline={true}
        rows={6}
        className="w-full"
      />
    </div>
  );
}