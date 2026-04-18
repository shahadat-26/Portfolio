import { Component } from '@angular/core';

@Component({
  selector: 'app-extracurricular',
  imports: [],
  templateUrl: './extracurricular.html',
  styles: ``,
})
export class Extracurricular {
  activities = [
    {
      title: 'Regional Mathematical Olympiad Winner',
      description: 'Secondary (Class 9-10) Category from Cumilla Region',
      extra: 'Selected for National Math Fest',
      logo: 'logos/MathOlympiadLogo.jpg',
      period: 'Feb 2013',
    },
  ];
}
