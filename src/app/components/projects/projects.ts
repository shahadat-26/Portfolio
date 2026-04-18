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
        'Academic platform facilitating course management, student enrollment, MCQ examinations, and automated result tracking with role-based access for teachers and students.',
      stack: ['.NET Core', 'Angular', 'PostgreSQL'],
      github: 'https://github.com/shahadat-26/EasyMCQ',
      live: 'https://easymcq.pages.dev',
    },
    {
      name: 'ShopperBangla',
      description:
        'Multi-vendor e-commerce marketplace empowering vendors to manage storefronts while providing customers a seamless shopping experience.',
      stack: ['.NET Core', 'Angular', 'PostgreSQL'],
      github: 'https://github.com/shahadat-26/Shopper',
      live: 'https://shopperbangla.pages.dev',
    },
    {
      name: 'Word Makers',
      description:
        'Word puzzle game featuring real-time scoring, progressive difficulty levels, streak-based bonus rewards, contextual hints, and a global leaderboard.',
      stack: ['.NET Core', 'Angular', 'PostgreSQL'],
      github: 'https://github.com/shahadat-26/WordMakers',
      live: 'https://wordmakers.pages.dev',
    },
    {
      name: 'E-Appointment',
      description:
        'Easy solution to appointees and authorities to fix appointments efficiently and manage scheduling.',
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
