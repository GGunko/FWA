import { useState } from "react";

interface FamicomInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  multiline?: boolean;
  rows?: number;
  className?: string;
}

export default function FamicomInput({ 
  placeholder = "Enter your answer...", 
  value, 
  onChange, 
  multiline = false,
  rows = 4,
  className = ""
}: FamicomInputProps) {
  const [internalValue, setInternalValue] = useState(value || "");
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  const baseClasses = "w-full p-4 border-2 border-input bg-background text-foreground font-mono text-sm focus:border-primary focus:outline-none focus:ring-0";

  if (multiline) {
    return (
      <textarea
        data-testid="input-textarea"
        className={`${baseClasses} resize-none ${className}`}
        placeholder={placeholder}
        value={internalValue}
        onChange={handleChange}
        rows={rows}
      />
    );
  }

  return (
    <input
      data-testid="input-text"
      type="text"
      className={`${baseClasses} ${className}`}
      placeholder={placeholder}
      value={internalValue}
      onChange={handleChange}
    />
  );
}