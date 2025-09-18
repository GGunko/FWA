interface FamicomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent";
  disabled?: boolean;
  className?: string;
}

export default function FamicomButton({ 
  children, 
  onClick, 
  variant = "primary", 
  disabled = false,
  className = ""
}: FamicomButtonProps) {
  const baseClasses = "px-6 py-3 border-2 font-mono text-sm cursor-pointer transition-all hover-elevate active-elevate-2";
  
  const variantClasses = {
    primary: "bg-primary text-primary-foreground border-primary-border",
    secondary: "bg-secondary text-secondary-foreground border-secondary-border", 
    accent: "bg-accent text-accent-foreground border-accent-border"
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  const handleClick = () => {
    if (!disabled && onClick) {
      console.log('Famicom button clicked');
      onClick();
    }
  };

  return (
    <button
      data-testid={`button-${variant}`}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}