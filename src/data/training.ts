export interface TrainingSession {
  id: string;
  title: string;
  targetAudience: string;
  date: string;
  time: string;
  mode: 'Online Webinar' | 'Hands-on Workshop' | 'Jurisdiction Camp';
  venueOrPlatform: string;
  instructor: string;
  seatsTotal: number;
  seatsBooked: number;
}

export const upcomingTrainingSessions: TrainingSession[] = [
  {
    id: 'train-1',
    title: 'Bengaluru Urban: Masterclass on PG & Co-Living Mandatory Digital Compliance',
    targetAudience: 'PG Owners, Hostel Wardens & Property Managers',
    date: '2026-10-08',
    time: '11:00 AM – 12:30 PM IST',
    mode: 'Online Webinar',
    venueOrPlatform: 'State E-Governance Virtual Auditorium (Webex)',
    instructor: 'Shri Anand Kumar, Senior Compliance Advisor, KSP',
    seatsTotal: 500,
    seatsBooked: 420,
  },
  {
    id: 'train-2',
    title: 'Hospitality Night Audit & Form C Automation for 3-Star & 5-Star Properties',
    targetAudience: 'Front Office Managers, General Managers & IT Heads',
    date: '2026-10-14',
    time: '03:00 PM – 04:30 PM IST',
    mode: 'Online Webinar',
    venueOrPlatform: 'NIC Video Portal',
    instructor: 'Smt. Priya Rao, Digital Governance Specialist',
    seatsTotal: 300,
    seatsBooked: 245,
  },
  {
    id: 'train-3',
    title: 'South Zone Field Training: Android Gatekeeper Deployment for Security Guards',
    targetAudience: 'On-duty Security Supervisors & Watchmen',
    date: '2026-10-20',
    time: '10:00 AM – 01:00 PM IST',
    mode: 'Hands-on Workshop',
    venueOrPlatform: 'DCP South Conference Hall, Jayanagar, Bengaluru',
    instructor: 'Technical Support Team, CVIRMS Project Cell',
    seatsTotal: 150,
    seatsBooked: 135,
  },
  {
    id: 'train-4',
    title: 'Mysuru Division: Public Safety Measures Act Awareness & Onboarding Drive',
    targetAudience: 'Hotel Owners Association & Heritage Homestay Operators',
    date: '2026-10-26',
    time: '02:00 PM – 05:00 PM IST',
    mode: 'Jurisdiction Camp',
    venueOrPlatform: 'Police Bhavan, Nazarbad, Mysuru',
    instructor: 'District Police Superintendent & Field Officers',
    seatsTotal: 200,
    seatsBooked: 178,
  },
];
