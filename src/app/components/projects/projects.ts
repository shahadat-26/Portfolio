import { Component } from '@angular/core';

interface Project {
  name: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: Project[] = [
    {
      name: 'EasyMCQ',
      description:
        'Course management, student enrollment, MCQ examinations, and automated result tracking — all unified in a comprehensive full-stack academic platform engineered to streamline the entire examination lifecycle. Educators can create and organize courses with structured modules, manage bulk enrollments, and design assessments with configurable question banks, time limits, and custom grading criteria. Automated result processing delivers instant scores with question-wise breakdowns, class-wide performance analytics, and score distribution insights. Features robust role-based access control separating Teacher and Student portals — teachers monitor progress, identify weak areas, and oversee assessments, while students browse available courses, enroll seamlessly, attempt timed examinations with real-time progress tracking, and review detailed result summaries. Additional capabilities include secure authentication, protected dashboards, form validation, and responsive design — making it production-ready for universities, coaching centers, and academic institutions seeking end-to-end assessment digitization.',
      stack: ['.NET Core', 'Angular', 'PostgreSQL', 'EF Core', 'JWT', 'Tailwind CSS'],
      github: 'https://github.com/shahadat-26/EasyMCQ',
      live: 'https://easymcq.pages.dev',
    },
    {
      name: 'ShopperBangla',
      description:
        'Multi-vendor e-commerce marketplace where vendors can set up storefronts, list products with images and variations, and manage incoming orders through a dedicated dashboard with sales analytics. Customers enjoy a full shopping experience — browsing by category, searching and filtering products by price, adding items to cart or wishlist, writing reviews with photos, and tracking orders in real time. The platform features role-based access for customers, vendors, and admins, with each role having tailored interfaces and permissions. Checkout supports saved addresses, multiple delivery options, and order summaries before confirmation. Vendors can update order statuses from processing through packaging, shipping, and delivery, while customers can view detailed order history, cancel pending orders, request returns, and manage their profiles including saved addresses and payment preferences. An admin panel provides oversight with user management, category configuration, and platform-wide reporting. Built with a clean separation between storefront, vendor dashboard, and admin panel to support independent scaling and maintainability of each experience.',
      stack: ['.NET Core', 'Angular', 'PostgreSQL', 'EF Core', 'JWT', 'Docker'],
      github: 'https://github.com/shahadat-26/Shopper',
      live: 'https://shopperbangla.pages.dev',
    },
    {
      name: 'Word Makers',
      description:
        'A word puzzle game challenging players to unscramble letters and form valid English words against the clock. The game dynamically adjusts difficulty across multiple levels based on player progression, while a streak-based combo system rewards consistency with escalating bonus multipliers. Players receive intelligent, contextual hints tailored to their performance and compete globally through a real-time leaderboard and ranking system. The platform features secure authentication with encrypted credentials, clean separation between frontend and backend with RESTful API design. Fully containerized and deployed across cloud infrastructure for high availability and performance.',
      stack: ['.NET Core', 'Angular', 'PostgreSQL', 'EF Core', 'JWT', 'Docker'],
      github: 'https://github.com/shahadat-26/WordMakers',
      live: 'https://wordmakers.pages.dev',
    },
    {
      name: 'E-Appointment',
      description:
        'A web-based application enabling authorities (like clinics, corporate offices, or anyone managing appointees) to create appointment windows, manage incoming requests, and process appointees through an organized queue. Appointees can browse available slots, apply for appointments, and track their real-time queue position with smart notifications. Features role-based dashboards, a complete appointment lifecycle (pending, approved, declined, completed), duplicate booking prevention, and a notification system that alerts users when their turn is approaching.',
      stack: ['.NET Core', 'Angular', 'PostgreSQL'],
      github: 'https://github.com/shahadat-26/E-Appointment',
    },
    {
      name: 'RentHouse',
      description:
        'A web facility to connect the Landlords and tenants, making the rental process smooth and transparent.',
      stack: ['.NET Core', 'Angular', 'PostgreSQL'],
      github: 'https://github.com/shahadat-26/RentHouseNET',
    },
  ];
}
