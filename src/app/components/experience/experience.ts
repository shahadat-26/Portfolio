import { Component } from '@angular/core';

interface WorkProject {
  name: string;
  client: string;
  description: string;
  stack: string[];
}

interface ExperienceItem {
  role: string;
  company: string;
  logo: string;
  location: string;
  period: string;
  projects: WorkProject[];
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experiences: ExperienceItem[] = [
    {
      role: 'Software Engineer',
      company: 'Streams Tech Ltd',
      logo: 'logos/streamstechlogo.png',
      location: 'Banani, Dhaka',
      period: 'May 2022 – Present',
      projects: [
        {
          name: 'Railway Track & Bridge Management System',
          client: 'Bangladesh Railway',
          description: 'Web application to monitor track, bridge and caretakers',
          stack: ['.NET Core', 'Angular', 'PostgreSQL'],
        },
        {
          name: 'Railway Employee Database Management System',
          client: 'Bangladesh Railway',
          description: 'Web application to manage railways employee information',
          stack: ['.NET Core', 'Angular', 'PostgreSQL'],
        },
        {
          name: 'JANO',
          client: 'CARE Bangladesh',
          description: 'Web and Mobile application for grassroot level surveys',
          stack: ['.NET Core', 'Angular', 'PostgreSQL'],
        },
        {
          name: 'GeoSWMM',
          client: 'Flagship product of Streams Tech Ltd and Utilian Venture (Collaborated with USA Office)',
          description: 'Desktop application for storm water modeling',
          stack: ['.NET', 'WinForms', 'WPF'],
        },
      ],
    },
  ];
}
