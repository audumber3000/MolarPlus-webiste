import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Users,
  Calendar,
  FileText,
  DollarSign,
  MessageSquare,
  BarChart3,
  Shield,
  Clock,
  Zap,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { SITE_URL, colors } from '@/lib/seo';
import { APP_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Features - Best Dental Clinic Management Software | MolarPlus',
  description:
    'Explore MolarPlus dental software features: patient management, appointment scheduling, mobile apps, billing, analytics & more. Best dental clinic management software for dentists.',
  keywords:
    'dental software features, dental clinic management software, practice management, appointment scheduling, patient records, dental analytics, mobile dental app, HIPAA compliance, dental billing',
  alternates: { canonical: `${SITE_URL}/features` },
  openGraph: {
    title: 'Features - Best Dental Clinic Management Software | MolarPlus',
    description: 'Patient management, appointments, billing, analytics. Complete dental practice management software.',
    url: `${SITE_URL}/features`,
  },
};

function BrowserFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200/80 bg-white">
      {/* Browser chrome */}
      <div className="bg-gray-100 px-4 py-2.5 flex items-center gap-3 border-b border-gray-200">
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 truncate border border-gray-200">
          app.molarplus.com
        </div>
      </div>
      {/* Screenshot */}
      <img
        src={src}
        alt={alt}
        className="w-full h-auto block"
        loading="lazy"
      />
    </div>
  );
}

const features = [
  {
    icon: Users,
    title: 'Patient Management System',
    description:
      'Comprehensive dental patient management with digital records, treatment history, and profile management.',
    benefits: [
      'Complete patient profiles with dental history',
      'Digital patient records management',
      'Quick patient search and filtering',
      'Patient demographics and contact info',
      'Treatment history and notes',
    ],
    screenshot: '/desktop_screen/patient-files.png',
  },
  {
    icon: Calendar,
    title: 'Dental Appointment Scheduling',
    description:
      'Smart appointment scheduling for dental practices. Book, reschedule, and track with automated reminders.',
    benefits: [
      'Visual calendar interface',
      'Automated appointment reminders',
      'Online booking integration',
      'Waitlist management',
      'Recurring appointment support',
    ],
    screenshot: '/desktop_screen/appointment.png',
  },
  {
    icon: MessageSquare,
    title: 'Patient Communication',
    description: 'Send automated notifications for appointments, treatment reminders, and updates to patients.',
    benefits: [
      'Appointment reminders via SMS & WhatsApp',
      'Treatment follow-ups',
      'Bulk messaging capabilities',
      'Two-way communication',
      'Consent forms management',
    ],
    screenshot: '/desktop_screen/Consent-forms.png',
  },
  {
    icon: DollarSign,
    title: 'Dental Billing & Payments',
    description: 'Complete billing for dental practices with invoices, payment tracking, and insurance claims.',
    benefits: [
      'Digital invoice generation',
      'Payment tracking and receipts',
      'Multiple payment methods',
      'Insurance claims processing',
      'Treatment cost estimates',
    ],
    screenshot: '/desktop_screen/transcation-managment.png',
  },
  {
    icon: BarChart3,
    title: 'Dental Practice Analytics',
    description: 'Dashboard with insights into patient flow, revenue trends, and practice performance.',
    benefits: [
      'Real-time dashboard',
      'Revenue analytics and trends',
      'Patient flow analysis',
      'Custom report generation',
      'Performance metrics tracking',
    ],
    screenshot: '/desktop_screen/clinic-report.png',
  },
  {
    icon: FileText,
    title: 'Treatment Planning & Charts',
    description: 'Manage dental treatments, prescriptions, and follow-ups. Create treatment plans and track progress.',
    benefits: [
      'Digital treatment planning',
      'Dental charting tools',
      'Prescription management',
      'Follow-up scheduling',
      'Clinical notes and observations',
    ],
    screenshot: '/desktop_screen/dental-chart.png',
  },
  {
    icon: Shield,
    title: 'HIPAA Security & Compliance',
    description: 'Enterprise-grade security with encrypted storage, role-based access, and HIPAA compliance.',
    benefits: [
      'HIPAA compliant infrastructure',
      'Encrypted data storage',
      'Role-based access control',
      'Audit logs and tracking',
      'Regular security updates',
    ],
    screenshot: '/desktop_screen/dashboard.png',
  },
  {
    icon: Clock,
    title: 'Staff Management',
    description: 'Manage dental practice staff, assign roles, track performance, and maintain team schedules.',
    benefits: [
      'Staff profiles and roles',
      'Performance tracking',
      'Schedule management',
      'Task assignment',
      'Access control',
    ],
    screenshot: '/desktop_screen/manage-staff.png',
  },
  {
    icon: Zap,
    title: 'Quick & Easy Setup',
    description: 'Get started in under 24 hours with simple onboarding. No technical knowledge required.',
    benefits: [
      '24-hour setup time',
      'Free onboarding support',
      'Staff training included',
      'Data migration assistance',
      'Dedicated account manager',
    ],
    screenshot: '/desktop_screen/prcedure-setting.png',
  },
];

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MolarPlus Dental Clinic Management Software',
  description:
    'Comprehensive dental practice management software with patient management, appointments, mobile apps, analytics, and more',
  brand: { '@type': 'Brand', name: 'MolarPlus' },
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '0',
    highPrice: '9999',
    priceCurrency: 'INR',
  },
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* Hero */}
      <section className="pt-12 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-[#1a1c4b] mb-6">
              Powerful Features for{' '}
              <span style={{ color: colors.primary }}>Dental Clinic Management</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Everything you need to run your dental practice efficiently — all in one comprehensive platform
            </p>
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-medium text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: colors.primary }}
            >
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Features — alternating layout with browser screenshots */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isReversed = index % 2 === 1;
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}
                >
                  {/* Text side */}
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="mb-5" style={{ color: colors.primary }}>
                      <Icon className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold text-[#1a1c4b] mb-4">{feature.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle
                            className="w-5 h-5 flex-shrink-0 mt-0.5"
                            style={{ color: colors.primary }}
                          />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Screenshot side */}
                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <BrowserFrame
                      src={feature.screenshot}
                      alt={`MolarPlus ${feature.title} screenshot`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1a1c4b] mb-4">Why Dentists Choose MolarPlus</h2>
            <p className="text-xl text-gray-600">The best dental clinic management software for Indian practices</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: colors.primary }}>70%</div>
              <p className="text-gray-600">Reduction in administrative time</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: colors.secondary }}>3x</div>
              <p className="text-gray-600">Faster patient check-ins</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="text-4xl font-bold mb-2 text-purple-600">95%</div>
              <p className="text-gray-600">Patient satisfaction rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Better Dental Practice Management?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 180+ dental practices using MolarPlus — the best dental software for clinics across India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex items-center justify-center gap-2 bg-white px-8 py-4 rounded-lg font-medium transition-colors hover:bg-gray-100"
              style={{ color: colors.primary }}
            >
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
