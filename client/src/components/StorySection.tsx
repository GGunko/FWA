interface StorySectionProps {
  icon: string;
  title: string;
  subtitle: string;
  content: string;
  position: "left" | "right";
}

export default function StorySection({ 
  icon, 
  title, 
  subtitle, 
  content, 
  position 
}: StorySectionProps) {
  return (
    <div className={`flex gap-8 items-start mb-12 ${position === 'right' ? 'flex-row-reverse' : ''}`}>
      {/* Icon Panel */}
      <div className="flex-shrink-0">
        <div className="w-24 h-24 bg-primary text-primary-foreground flex items-center justify-center text-4xl border-2 border-primary-border">
          {icon}
        </div>
      </div>
      
      {/* Content Panel */}
      <div className="flex-1">
        <div className="border-2 border-card-border bg-card p-6">
          <div className="mb-4">
            <h2 className="text-xl text-primary mb-2" data-testid={`text-story-title-${title.toLowerCase().replace(' ', '-')}`}>
              {title}
            </h2>
            <div className="h-1 bg-accent w-16 mb-3"></div>
            <p className="text-sm text-accent mb-4" data-testid={`text-story-subtitle-${title.toLowerCase().replace(' ', '-')}`}>
              {subtitle}
            </p>
          </div>
          <div className="text-card-foreground leading-relaxed text-sm" data-testid={`text-story-content-${title.toLowerCase().replace(' ', '-')}`}>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}