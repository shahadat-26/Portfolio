import { Component } from '@angular/core';

interface Platform {
  name: string;
  username: string;
  description: string;
  solved: number;
  profileUrl: string;
}

@Component({
  selector: 'app-problem-solving',
  imports: [],
  templateUrl: './problem-solving.html',
  styleUrl: './problem-solving.css',
})
export class ProblemSolving {
  totalSolved = 550;

  platforms: Platform[] = [
    {
      name: 'LeetCode',
      username: 'Shahadat26',
      description: 'Interview-Level Coding Challenges',
      solved: 218,
      profileUrl: 'https://leetcode.com/Shahadat26',
    },
    {
      name: 'Vjudge',
      username: 'MD_Shahadat',
      description: 'Codeforces, UVA & LightOJ Problems',
      solved: 334,
      profileUrl: 'https://vjudge.net/user/MD_Shahadat',
    },
  ];
}
