import FamicomInput from '../FamicomInput';

export default function FamicomInputExample() {
  return (
    <div className="space-y-4">
      <FamicomInput placeholder="Enter a single line..." />
      <FamicomInput 
        placeholder="Enter your detailed answer here..." 
        multiline={true} 
        rows={6} 
      />
    </div>
  );
}