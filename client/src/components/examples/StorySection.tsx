import StorySection from '../StorySection';

export default function StorySectionExample() {
  return (
    <div className="space-y-8">
      <StorySection
        icon="💻"
        title="EXAMPLE STORY"
        subtitle="A sample story section"
        content="This is an example of how the story section component works with the Famicom-style design. It showcases the retro gaming aesthetic while presenting content in an engaging narrative format."
        position="left"
      />
      <StorySection
        icon="🎮"
        title="ANOTHER CHAPTER"
        subtitle="Right-aligned version"
        content="This shows how the component looks when positioned on the right side, creating a dynamic flow for the story layout."
        position="right"
      />
    </div>
  );
}