import { useRef, useCallback } from 'react';
import HeroMockupCard from './HeroMockupCard';
import { cards, getCardContent } from './heroCardData';

export default function HeroCardCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const pauseMarquee = useCallback(() => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'paused';
  }, []);

  const resumeMarquee = useCallback(() => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'running';
  }, []);

  const renderCards = (keyPrefix: string) =>
    cards.map((card) => {
      const content = getCardContent(card.id);
      return (
        <div
          key={`${keyPrefix}-${card.id}`}
          className="flex-shrink-0"
        >
          <HeroMockupCard
            label={card.label}
            labelColor={card.labelColor}
            rotation={0}
            width={170}
            height={135}
            photoUrl={content.photoUrl}
            hideLabel={content.hideLabel}
          >
            {content.mockup}
          </HeroMockupCard>
        </div>
      );
    });

  return (
    <div
      className="overflow-hidden w-full py-8"
      onTouchStart={pauseMarquee}
      onTouchEnd={resumeMarquee}
    >
      <div
        ref={trackRef}
        className="flex gap-4 animate-marquee"
        style={{ willChange: 'transform', width: 'max-content' }}
      >
        {renderCards('a')}
        {renderCards('b')}
      </div>
    </div>
  );
}
