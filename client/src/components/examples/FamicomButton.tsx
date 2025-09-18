import FamicomButton from '../FamicomButton';
import { useState } from 'react';

export default function FamicomButtonExample() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="space-y-4">
      <div className="flex gap-4 flex-wrap">
        <FamicomButton 
          variant="primary" 
          onClick={() => setClickCount(c => c + 1)}
        >
          PRIMARY
        </FamicomButton>
        <FamicomButton variant="secondary">
          SECONDARY
        </FamicomButton>
        <FamicomButton variant="accent">
          ACCENT
        </FamicomButton>
      </div>
      <div className="text-sm text-muted-foreground">
        Primary button clicked: {clickCount} times
      </div>
    </div>
  );
}