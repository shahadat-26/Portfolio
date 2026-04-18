import { Component } from '@angular/core';

interface ContactItem {
  icon: string;
  label: string;
  value: string;
  href: string;
}

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactItems: ContactItem[] = [
    {
      icon: 'email',
      label: 'Email',
      value: 'mshahadath26@gmail.com',
      href: 'mailto:mshahadath26@gmail.com',
    },
    {
      icon: 'phone',
      label: 'Phone',
      value: '+880 1772 549360',
      href: 'tel:+8801772549360',
    },
    {
      icon: 'github',
      label: 'GitHub',
      value: '@Shahadat-26',
      href: 'https://github.com/Shahadat-26',
    },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      value: 'Muhammad Shahadat Hossain',
      href: 'https://linkedin.com/in/shahadat026',
    },
  ];
}
