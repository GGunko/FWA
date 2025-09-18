interface FamicomHeaderProps {
  title: string;
  subtitle?: string;
}

export default function FamicomHeader({ title, subtitle }: FamicomHeaderProps) {
  return (
    <header className="text-center mb-8 p-6 border-2 border-primary bg-card">
      <div className="flex items-center justify-center gap-4 mb-4">
        <span className="text-2xl text-accent" data-testid="icon-star-left">★</span>
        <h1 className="text-2xl text-primary" data-testid="text-title">{title}</h1>
        <span className="text-2xl text-accent" data-testid="icon-star-right">★</span>
      </div>
      {subtitle && (
        <p className="text-sm text-muted-foreground" data-testid="text-subtitle">{subtitle}</p>
      )}
      <div className="mt-4 h-1 bg-primary w-full"></div>
    </header>
  );
}