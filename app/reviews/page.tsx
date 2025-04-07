import { Metadata } from 'next';
import { Reviews } from '@/components/reviews';

export const metadata: Metadata = {
  title: 'Reviews | KNG Home Buyers',
  description: 'See what our satisfied customers have to say about selling their homes to KNG Home Buyers.',
};

export default function ReviewsPage() {
  return <Reviews />;
}