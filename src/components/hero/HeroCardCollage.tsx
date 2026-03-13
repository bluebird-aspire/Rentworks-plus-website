import HeroMockupCard from './HeroMockupCard';
import { cards, getCardContent } from './heroCardData';

export default function HeroCardCollage() {
  return (
    <div style={{ position: 'relative', width: 1200, height: 225, margin: '0 auto' }}>
      {cards.map((card, i) => {
        const content = getCardContent(card.id);
        return (
          <div
            key={card.id}
            style={{
              position: 'absolute',
              top: 0,
              left: card.x,
              zIndex: i + 1,
              transform: 'rotate(-27deg)',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, z-index 0s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg)';
              e.currentTarget.style.zIndex = '20';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotate(-27deg)';
              e.currentTarget.style.zIndex = String(i + 1);
            }}
          >
            <HeroMockupCard
              label={card.label}
              labelColor={card.labelColor}
              rotation={0}
              width={185}
              height={145}
              photoUrl={content.photoUrl}
              hideLabel={content.hideLabel}
            >
              {content.mockup}
            </HeroMockupCard>
          </div>
        );
      })}
    </div>
  );
}
