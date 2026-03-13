import customerImg from '../../assets/customer-card.png';
import fleetImg from '../../assets/fleet-management.png';
import rentalAgreementImg from '../../assets/rental-agreement.png';
import ReservationMockup from './mockups/ReservationMockup';
import PaymentsMockup from './mockups/PaymentsMockup';
import ContractsMockup from './mockups/ContractsMockup';
import AnalyticsMockup from './mockups/AnalyticsMockup';
import LoyaltyMockup from './mockups/LoyaltyMockup';
import OcrMockup from './mockups/OcrMockup';

const PHOTOS: Record<string, string> = {
  fleet: fleetImg,
  customer: customerImg,
  claims: rentalAgreementImg,
  inspection: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=80',
};

export const cards = [
  { id: 'fleet',        label: 'Fleet Management',    labelColor: '#007A55', x: 43 },
  { id: 'reservations', label: 'Reservation Planner', labelColor: '#3B82F6', x: 156 },
  { id: 'payments',     label: 'Payments',            labelColor: '#84CC16', x: 269 },
  { id: 'customer',     label: 'Customer 360',        labelColor: '#EC4899', x: 382 },
  { id: 'contracts',    label: 'Digital Contracts',    labelColor: '#A78BFA', x: 495 },
  { id: 'ocr',          label: 'OCR & Scanning',      labelColor: '#2DD4BF', x: 608 },
  { id: 'inspections',  label: 'Inspections',         labelColor: '#F59E0B', x: 721 },
  { id: 'analytics',    label: 'Analytics',           labelColor: '#F97316', x: 834 },
  { id: 'loyalty',      label: 'Loyalty Program',     labelColor: '#F59E0B', x: 947 },
  { id: 'claims',       label: 'Claims',              labelColor: '#6366F1', x: 1058 },
];

export function getCardContent(id: string): { photoUrl?: string; mockup?: React.ReactNode; hideLabel?: boolean } {
  switch (id) {
    case 'fleet':
      return { photoUrl: PHOTOS.fleet };
    case 'customer':
      return { photoUrl: PHOTOS.customer };
    case 'claims':
      return { photoUrl: PHOTOS.claims };
    case 'inspections':
      return { photoUrl: PHOTOS.inspection };
    case 'reservations':
      return { mockup: <ReservationMockup />, hideLabel: true };
    case 'payments':
      return { mockup: <PaymentsMockup />, hideLabel: true };
    case 'contracts':
      return { mockup: <ContractsMockup />, hideLabel: true };
    case 'analytics':
      return { mockup: <AnalyticsMockup />, hideLabel: true };
    case 'loyalty':
      return { mockup: <LoyaltyMockup />, hideLabel: true };
    case 'ocr':
      return { mockup: <OcrMockup />, hideLabel: true };
    default:
      return {};
  }
}
