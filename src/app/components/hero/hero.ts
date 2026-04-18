import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  socialLinks = [
    { label: 'GitHub', href: 'https://github.com/Shahadat-26', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/shahadat026', icon: 'linkedin' },
    { label: 'LeetCode', href: 'https://leetcode.com/Shahadat26', icon: 'leetcode' },
    { label: 'Email', href: 'mailto:mshahadath26@gmail.com', icon: 'email' },
  ];
}
