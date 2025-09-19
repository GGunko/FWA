import FamicomHeader from './FamicomHeader';
import StorySection from './StorySection';
import FamicomButton from './FamicomButton';
import { useState } from 'react';

export default function PersonalStory() {
  const [currentChapter, setCurrentChapter] = useState(0);
  
  const storyData = [
    {
      icon: "💻",
      title: "THE BEGINNING",
      subtitle: "Why Computer Science?",
      content: "I chose Computer Science as my course because I want to learn how to code and pursue something I truly enjoy. Coding excites me since it feels like a job I would never get tired of, as it combines creativity and problem-solving. At the same time, the demand for computer-related careers continues to grow, making this course both practical and rewarding for the future. Beyond career opportunities, Computer Science also supports my passion for game development, giving me the skills and foundation to turn my hobby into something more meaningful while preparing me for a stable and fulfilling career.",
      position: "left" as const
    },
    {
      icon: "🎮",
      title: "THE DREAM",
      subtitle: "My Ultimate Goal",
      content: "My dream job is to become a game developer. Ever since I was a kid, I've been deeply influenced by video games. It all started when I was gifted a Family Computer as my first console, where I spent countless hours playing Super Mario Bros. and Contra. Later on, when I got my first personal computer, I discovered even more games that fueled my passion. The thought of creating games that could inspire and entertain others the way those early games inspired me drives my ambition every day.",
      position: "right" as const
    },
    {
      icon: "🚀",
      title: "THE FUTURE",
      subtitle: "Ten Years From Now",
      content: "Ten years from now, I see myself as an established game developer working either at a renowned gaming company or running my own indie game studio. I envision having released several successful games that have touched people's lives, just like those classic Famicom games touched mine. I want to be someone who bridges the gap between technical expertise and creative storytelling, creating immersive experiences that inspire the next generation of gamers and developers.",
      position: "left" as const
    }
  ];

  const handleNext = () => {
    setCurrentChapter((prev) => Math.min(prev + 1, storyData.length - 1));
    console.log(`Chapter ${currentChapter + 2} loaded`);
  };

  const handlePrev = () => {
    setCurrentChapter((prev) => Math.max(prev - 1, 0));
    console.log(`Chapter ${currentChapter} loaded`);
  };

  const handleReset = () => {
    setCurrentChapter(0);
    console.log('Story reset to beginning');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary/20 to-accent/20 p-8 mb-8">
        <FamicomHeader 
          title="MY CODING JOURNEY" 
          subtitle="A Personal Story of Passion, Dreams, and Future Ambitions"
        />
        
        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mt-6">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
            <span>CHAPTER PROGRESS</span>
            <span>{currentChapter + 1} / {storyData.length}</span>
          </div>
          <div className="w-full h-2 bg-muted border border-border">
            <div 
              className="h-full bg-accent transition-all duration-500"
              style={{ width: `${((currentChapter + 1) / storyData.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Story Content */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Chapter Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          {storyData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentChapter(index);
                console.log(`Jumped to chapter ${index + 1}`);
              }}
              className={`w-4 h-4 border-2 transition-all hover-elevate ${
                index === currentChapter 
                  ? 'bg-primary border-primary' 
                  : 'bg-muted border-muted-border'
              }`}
              data-testid={`button-chapter-${index + 1}`}
            />
          ))}
        </div>

        {/* Current Story Section */}
        <div className="transition-all duration-700">
          <StorySection
            icon={storyData[currentChapter].icon}
            title={storyData[currentChapter].title}
            subtitle={storyData[currentChapter].subtitle}
            content={storyData[currentChapter].content}
            position={storyData[currentChapter].position}
          />
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center gap-4 mt-12 mb-8">
          <FamicomButton 
            variant="secondary" 
            onClick={handlePrev}
            disabled={currentChapter === 0}
          >
            ← PREV
          </FamicomButton>
          
          <FamicomButton 
            variant="primary" 
            onClick={handleReset}
          >
            ⟲ RESTART
          </FamicomButton>
          
          <FamicomButton 
            variant="secondary" 
            onClick={handleNext}
            disabled={currentChapter === storyData.length - 1}
          >
            NEXT →
          </FamicomButton>
        </div>

        {/* Bottom Stats Panel */}
        <div className="border-2 border-border bg-card p-6 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl text-primary mb-2">01</div>
              <div className="text-xs text-muted-foreground">COURSE</div>
              <div className="text-sm text-card-foreground">Computer Science</div>
            </div>
            <div>
              <div className="text-2xl text-accent mb-2">∞</div>
              <div className="text-xs text-muted-foreground">PASSION</div>
              <div className="text-sm text-card-foreground">Game Development</div>
            </div>
            <div>
              <div className="text-2xl text-primary mb-2">10</div>
              <div className="text-xs text-muted-foreground">YEARS VISION</div>
              <div className="text-sm text-card-foreground">Established Developer</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <div className="h-1 bg-border w-full mb-4"></div>
          <p className="text-xs text-muted-foreground">
            Personal Journey • Famicom Edition
          </p>
        </div>
      </div>
    </div>
  );
}