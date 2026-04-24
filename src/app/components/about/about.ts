import { Component } from '@angular/core';

interface Stat {
  value: string;
  label: string;
}

interface SkillCard {
  icon: string;
  image?: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  stats: Stat[] = [
    { value: '4', label: 'Years of Experience' },
    { value: '11+', label: 'Projects Completed' },
    { value: '550+', label: 'Problems Solved' },
    { value: '16+', label: 'Technologies Mastered' },
  ];

  skillCards: SkillCard[] = [
    {
      icon: '⚙️',
      title: 'Backend Development',
      description: '.NET Core, REST APIs, Entity Framework, Redis, RabbitMQ, WebSocket, JWT, BCrypt',
    },
    {
      icon: '🎨',
      title: 'Frontend Development',
      description: 'Angular, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS',
    },
    {
      icon: '🖥️',
      title: 'Desktop Development',
      description: 'WPF, WinForms',
    },
    {
      icon: '🗄️',
      title: 'Database Management',
      description: 'PostgreSQL',
    },
    {
      icon: '',
      image: 'logos/devops.jpg',
      title: 'DevOps & Tools',
      description: 'Git, Docker, AWS, Nginx, CI/CD',
    },
  ];
}
