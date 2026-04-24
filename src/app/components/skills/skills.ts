import { Component, signal } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
  category: string;
  color?: string;
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  categories = ['All', 'Backend', 'Frontend', 'Database', 'Desktop', 'DevOps', 'Script', 'Others'];
  activeCategory = signal('All');

  skills: Skill[] = [
    // Backend
    { name: 'C#', icon: 'devicon-csharp-plain colored', category: 'Backend' },
    { name: '.NET', icon: 'devicon-dot-net-plain colored', category: 'Backend' },
    { name: '.NET Core', icon: 'devicon-dotnetcore-plain colored', category: 'Backend' },
    { name: 'REST APIs', icon: 'devicon-fastapi-plain colored', category: 'Backend' },
    { name: 'RabbitMQ', icon: 'devicon-rabbitmq-original colored', category: 'Backend' },
    { name: 'Entity Framework', icon: 'devicon-dotnetcore-plain colored', category: 'Backend' },
    { name: 'Redis', icon: 'devicon-redis-plain colored', category: 'Backend' },
    { name: 'JWT', icon: 'devicon-jwt-plain colored', category: 'Backend' },
    { name: 'BCrypt', icon: 'devicon-jwt-plain colored', category: 'Backend' },

    // Frontend
    { name: 'Angular', icon: 'devicon-angularjs-plain colored', category: 'Frontend' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored', category: 'Frontend' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored', category: 'Frontend' },
    { name: 'HTML5', icon: 'devicon-html5-plain colored', category: 'Frontend' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored', category: 'Frontend' },

    // Database
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored', category: 'Database' },

    // Desktop
    { name: 'WPF', icon: 'devicon-windows11-original colored', category: 'Desktop' },
    { name: 'WinForms', icon: 'devicon-windows11-original colored', category: 'Desktop' },

    // DevOps
    { name: 'Git', icon: 'devicon-git-plain colored', category: 'DevOps' },
    { name: 'Docker', icon: 'devicon-docker-plain colored', category: 'DevOps' },
    { name: 'Nginx', icon: 'devicon-nginx-original colored', category: 'DevOps' },
    { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark colored', category: 'DevOps' },
    { name: 'CI/CD', icon: 'devicon-githubactions-plain colored', category: 'DevOps' },

    // Backend (cont.)
    { name: 'Postman', icon: 'devicon-postman-plain colored', category: 'Backend' },

    // Script
    { name: 'Python', icon: 'devicon-python-plain colored', category: 'Script' },

    // Others
    { name: 'Jira', icon: 'devicon-jira-plain colored', category: 'Others' },
  ];

  setCategory(category: string) {
    this.activeCategory.set(category);
  }

  get filteredSkills(): Skill[] {
    if (this.activeCategory() === 'All') {
      return this.skills;
    }
    return this.skills.filter(s => s.category === this.activeCategory());
  }
}
