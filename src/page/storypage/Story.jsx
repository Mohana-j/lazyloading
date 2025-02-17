import React, { useEffect, useState, useRef, useCallback } from "react";
import "../../styles/App.css";

const content = [
  "Once upon a time, in a mystical land far away, there existed a kingdom lost to time...",
  "Legends spoke of an ancient artifact hidden within the heart of the kingdom...",
  "A brave traveler, guided only by whispers of fate, set forth on an arduous journey...",
  "Through thick forests and towering mountains, the traveler ventured onward...",
  "One fateful night, under a star-lit sky, an old hermit revealed a long-forgotten prophecy...",
  "With renewed determination, the traveler entered the cursed valley, where darkness loomed...",
  "The eerie silence was broken by the roars of unseen creatures lurking in the shadows...",
  "Every step forward was met with new trials, testing not just strength but wisdom...",
  "The traveler stumbled upon an ancient temple, its entrance sealed by cryptic runes...",
  "With patience and intellect, the traveler deciphered the markings and unlocked the gate...",
  "Inside, glowing symbols illuminated a grand chamber filled with golden relics...",
  "But at the center stood the artifact, radiating a power beyond imagination...",
  "As the traveler reached for it, the temple shook violently, as if time itself was resisting...",
  "A spectral guardian emerged, challenging the traveler to a final test of courage...",
  "The battle was not fought with swords, but with resolve, as the guardian tested their heart...",
  "Proving their worth, the traveler grasped the artifact, feeling its power surge through them...",
  "The temple crumbled, but the traveler escaped just in time, forever changed by the journey...",
  "Returning to the world, the traveler’s story spread like wildfire, inspiring generations...",
  "The artifact, now safeguarded, became a symbol of hope, its legend never forgotten...",
  "And so, in the pages of history, the traveler’s name was forever etched among the great..."
];

const PAGE_SIZE = 5; // Number of paragraphs to load per scroll

const Story = () => {
  const [visibleContent, setVisibleContent] = useState(content.slice(0, PAGE_SIZE));
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);

  // Function to load more content
  const loadMoreContent = useCallback(() => {
    if (loading) return;

    setLoading(true);
    document.body.style.overflow = "hidden"; // Disable scrolling

    setTimeout(() => {
      const currentLength = visibleContent.length;
      const nextContent = content.slice(currentLength, currentLength + PAGE_SIZE);

      if (nextContent.length > 0) {
        setVisibleContent((prev) => [...prev, ...nextContent]);
      } else {
        // If we reach the end of the content, start from the beginning
        setVisibleContent((prev) => [...prev, ...content.slice(0, PAGE_SIZE)]);
      }

      setLoading(false);
      document.body.style.overflow = "auto"; // Enable scrolling
    }, 2000);
  }, [loading, visibleContent]);

  // Infinite scrolling effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const lastEntry = entries[0];
        if (lastEntry.isIntersecting) {
          loadMoreContent();
        }
      },
      { threshold: 1.0 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [loadMoreContent]);

  return (
    <div style={{ textAlign: "center", padding: "50px", maxWidth: "700px", margin: "auto" }}>
      <h1>📖 The Legend of the Lost Kingdom</h1>
      {visibleContent.map((text, index) => (
        <p
          key={index}
          style={{
            fontSize: "20px",
            lineHeight: "1.8",
            margin: "20px 0",
            opacity: loading ? 0.5 : 1,
            transition: "opacity 1s ease-in-out",
          }}
        >
          {text}
        </p>
      ))}
      <div ref={containerRef} style={{ height: "50px" }}></div>
      {loading && <p style={{ fontSize: "20px", color: "gray", fontWeight: "bold" }}>Loading more content...</p>}
    </div>
  );
};

export default Story;
