import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface WorkProject {
  name: string;
  client: string;
  description: string;
  details?: string;
  facilities?: string[];
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
  constructor(private sanitizer: DomSanitizer) {}

  sanitize(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

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
          description:
            'A comprehensive digital management platform designed for Bangladesh Railway to streamline the monitoring, maintenance, and oversight of its physical infrastructure. The system transforms traditionally manual verification processes into a data-driven, digital ecosystem, improving operational safety and reliability.',
          facilities: [
            'Gang Management System — Real-time attendance tracking and live location monitoring of field maintenance crews, ensuring accountability and efficient resource deployment.',
            'GIS Map Visualization — A centralized geospatial portal leveraging GIS to visualize and manage critical railway assets including tracks, bridges, utility poles, stations, and junctions.',
            'Bridge Management System — A comprehensive database of bridge assets with detailed structural inspection records, condition assessments, and maintenance histories.',
            'Track Management — Tools for monitoring track stability, alignment, and geometry, providing actionable insights for informed maintenance planning.',
          ],
          stack: ['.NET Core', 'Angular', 'PostgreSQL'],
        },
        {
          name: 'Railway Employee Database Management System',
          client: 'Bangladesh Railway',
          description:
            'A dedicated administrative management platform designed to digitize the personnel records and organizational structure of Bangladesh Railway. The system serves as the digital backbone for managing the railway\'s vast workforce, replacing paper-based processes with a centralized, reliable database.',
          facilities: [
            'Organogram Management — Maps the complete hierarchical structure of Bangladesh Railway, from the Director General to field-level staff, across departments including Rolling Stock, Infrastructure, Finance, and Marketing, with clear visualization of reporting lines.',
            'Employee Profiles — Centralized storage for personal details, professional history, service records, and current designations, providing a single source of truth for each employee.',
            'Service History & Postings — Tracks career progression including transfers between zones (East and West) and divisions (e.g., Dhaka, Chittagong, Paksey), maintaining a complete audit trail of each employee\'s journey.',
            'Digital Database Transition — Eliminates data redundancy and improves the accuracy of employee information across distributed offices and railway stations nationwide.',
            'Reporting — Generates administrative reports based on real-time data to assist in decision-making and manpower planning.',
          ],
          stack: ['.NET Core', 'Angular', 'PostgreSQL', 'AWS'],
        },
        {
          name: 'GeoSWMM',
          client: 'Flagship product of Streams Tech Ltd and Utilian Venture (Collaborated with USA Office)',
          description:
            'An advanced stormwater and wastewater collection system modeling software integrated directly within Esri\'s ArcGIS Pro, offered at <span style="color: white; font-weight: 600;">$2,795</span> per single subscription annually. It serves as a comprehensive platform for modeling hydrology, hydraulics, and water quality, enabling professionals to manage geospatial data and run complex simulations in a single GIS-native environment.',
          facilities: [
            '1D & 2D Modeling Capabilities — Supports both 1D and 2D flood modeling, enabling users to simulate real-world flood pathways, storm drain overflows, and floodplain dynamics with high fidelity.',
            'GIS-Based Model Building — Features an automated Watershed Delineation Tool for defining drainage boundaries and a Surface Flow Path Tool for delineating overland flow paths in dual-drainage modeling.',
            'Network Analysis Tool — Automates QA/QC by detecting connectivity issues, missing pipe segments, and geometric anomalies such as orphaned nodes or incorrect pipe directionality.',
            'Hydrologic Property Calculators — A suite of automated calculators including Imperviousness Calculator for area-weighted surface analysis, Subcatchment Slope & Width Calculators for DEM-based estimation, and Conduit Roughness Calculator for material-specific roughness assignment.',
            'Flood Mapping Tool — Automatically generates flood depth and extent maps directly from model results, supporting risk assessment and climate resilience planning.',
            'Water Quality & LID Support — Evaluates pollutant fate and transport while enabling the design and evaluation of Low Impact Development strategies including rain gardens, green roofs, and permeable pavements.',
            'Control Rules Editor — Provides an intuitive, point-and-click interface for assigning complex SWMM control rules to pumps, weirs, and orifices, eliminating the need for manual coding.',
            'And many more — The above highlights a selection of GeoSWMM\'s core capabilities. The platform offers a broader suite of tools and features designed to support every stage of the stormwater modeling workflow.',
          ],
          stack: ['.NET', 'WinForms', 'WPF'],
        },
        {
          name: 'JANO',
          client: 'CARE Bangladesh',
          description: 'A multi-sectoral digital ecosystem designed to track health and nutrition outcomes in real time. The platform utilizes integrated mobile applications and web-based dashboards to automate data flow between local service providers and national oversight bodies. It focuses on collecting critical metrics — such as service delivery frequency, dietary diversity, and anthropometric measurements — while incorporating qualitative tools like community scorecards to ensure social accountability. By digitizing these indicators, the platform transforms raw field data into actionable evidence for planning, budgeting, and performance monitoring across various government departments.',
          stack: ['.NET Core', 'Angular', 'PostgreSQL'],
        },
      ],
    },
  ];
}
