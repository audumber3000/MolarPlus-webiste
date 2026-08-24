import type { Metadata } from 'next';
import { SITE_URL, DEFAULT_OG_IMAGE } from '@/lib/seo';
import FindDentistClient from '@/components/FindDentistClient';

export const metadata: Metadata = {
  title: 'Find Dentists Near You | Top-rated Dental Clinics',
  description:
    'Find top-rated dentists and dental clinics near you. Search by speciality and location, general dentists, orthodontists, pediatric dentists, and more.',
  keywords:
    'find dentist near me, dental clinic near me, best dentist, orthodontist near me, pediatric dentist, dental appointment booking',
  alternates: { canonical: `${SITE_URL}/find-dentist` },
  openGraph: {
    title: 'Find Dentists Near You | MolarPlus',
    description: 'Search top-rated dentists and dental clinics near you.',
    url: `${SITE_URL}/find-dentist`,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function FindDentistPage() {
  return <FindDentistClient />;
}
