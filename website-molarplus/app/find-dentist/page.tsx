import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo';
import FindDentistClient from '@/components/FindDentistClient';

export const metadata: Metadata = {
  title: 'Find Dentists Near You | Best Dental Clinics in India | MolarPlus',
  description:
    'Find top-rated dentists and dental clinics near you in India. Search by speciality and location — general dentists, orthodontists, pediatric dentists, and more.',
  keywords:
    'find dentist near me, dental clinic near me, best dentist India, orthodontist near me, pediatric dentist, dental appointment booking',
  alternates: { canonical: `${SITE_URL}/find-dentist` },
  openGraph: {
    title: 'Find Dentists Near You | MolarPlus',
    description: 'Search top-rated dentists and dental clinics near you across India.',
    url: `${SITE_URL}/find-dentist`,
    images: [{ url: `${SITE_URL}/hero-molarplus.png`, width: 1200, height: 630, alt: 'Find Dentists Near You' }],
  },
};

export default function FindDentistPage() {
  return <FindDentistClient />;
}
