import { Component } from '@angular/core';

interface Feature {
  icon: string;
  title: string;
  description: string;
  features: string[];
  gradientClass: string;
}

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  features: Feature[] = [
    {
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      title: 'Professional Invoices',
      description: 'Create beautiful, customizable invoices in seconds. Multiple templates with advanced editing capabilities and PDF export.',
      features: ['Custom invoice templates', 'Advanced invoice editor', 'PDF export & sharing', 'Invoice customization'],
      gradientClass: 'gradient-bg-1'
    },
    {
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
      title: 'Quote Management',
      description: 'Streamline your sales process with professional quotes. Send, track, and convert approved quotes to invoices instantly.',
      features: ['Quote creation & editing', 'Approval workflow system', 'Public quote viewing', 'Quote-to-invoice conversion'],
      gradientClass: 'gradient-bg-2'
    },
    {
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      title: 'Client Portal',
      description: 'Give your clients a dedicated portal to view invoices, track payments, and manage their account seamlessly.',
      features: ['Dedicated client portal', 'Client management system', 'Invoice portal access', 'Real-time notifications'],
      gradientClass: 'gradient-bg-3'
    },
    {
      icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
      title: 'Payment Tracking',
      description: 'Never miss a payment again. Track payment status, record payments, and integrate with South African banking systems.',
      features: ['Payment status tracking', 'Record payment functionality', 'SA bank integration', 'Payment success notifications'],
      gradientClass: 'gradient-bg-4'
    },
    {
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      title: 'Advanced Analytics',
      description: 'Get deep insights into your business performance with comprehensive analytics dashboards and visual timelines.',
      features: ['Advanced analytics dashboard', 'Invoice metrics & insights', 'Activity timeline tracking', 'Visual timeline reports'],
      gradientClass: 'gradient-bg-5'
    },
    {
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      title: 'Security & Authentication',
      description: 'Enterprise-grade security with Firebase authentication, protected routes, and comprehensive user management.',
      features: ['Firebase authentication', 'Protected route system', 'Password reset functionality', 'Profile settings management'],
      gradientClass: 'gradient-bg-6'
    }
  ];
}
