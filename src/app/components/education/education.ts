import { Component } from '@angular/core';

interface EducationItem {
  institution: string;
  logo: string;
  degree: string;
  period: string;
}

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  educations: EducationItem[] = [
    {
      institution: 'Shahjalal University of Science and Engineering',
      logo: 'logos/sustlogo.png',
      degree: 'B.Sc (Engineering) in Computer Science and Engineering',
      period: 'Feb 2017 – Dec 2021',
    },
    {
      institution: 'Ashuganj Sar Karkhana College',
      logo: 'logos/askclogo.png',
      degree: 'Higher Secondary Certificate (HSC)',
      period: 'June 2014 – July 2016',
    },
    {
      institution: 'Ashuganj Sar Karkhana School',
      logo: 'logos/askclogo.png',
      degree: 'Secondary School Certificate (SSC)',
      period: 'Jan 2004 – April 2014',
    },
  ];
}
