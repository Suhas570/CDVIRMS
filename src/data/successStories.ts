export interface SuccessStoryItem {
  id: string;
  title: string;
  entityName: string;
  entityType: string;
  location: string;
  metricLabel: string;
  metricValue: string;
  summary: string;
  impacts: string[];
}

export const platformSuccessStories: SuccessStoryItem[] = [
  {
    id: 'case-1',
    title: 'Modernizing 450-Room Tech Corridor Hospitality Hub',
    entityName: 'Whitefield Star International',
    entityType: 'Luxury Hotel Chain',
    location: 'Whitefield, Bengaluru',
    metricLabel: 'Check-in Time Reduction',
    metricValue: '85%',
    summary: 'Automated 12,000 monthly guest check-ins while eliminating manual Form C immigration dual entries.',
    impacts: [
      'Saved 160 administrative desk hours per month',
      '100% compliance audit score with zero regulatory notices',
      'Integration with keycard encoding systems',
    ],
  },
  {
    id: 'case-2',
    title: 'Securing Student & Working Professional Co-Living Network',
    entityName: 'UrbanNest Living (24 Properties)',
    entityType: 'PG & Co-Living Group',
    location: 'Electronic City & HSR Layout',
    metricLabel: 'Unauthorized Entry Drop',
    metricValue: '99.4%',
    summary: 'Centralized oversight for 3,200 long-term residents and 500 daily delivery visitors across Bengaluru south.',
    impacts: [
      'Automated parent / guardian emergency notification link',
      'Real-time delivery partner gate passes',
      'Full electronic compliance with Karnataka Police Public Safety Act',
    ],
  },
  {
    id: 'case-3',
    title: 'Heritage Tourism & Rapid International Delegate Processing',
    entityName: 'Mysuru Royal Heritage Lodges',
    entityType: 'Heritage Tourism Association',
    location: 'Mysuru City',
    metricLabel: 'Tourist Processing Speed',
    metricValue: '3.5x Faster',
    summary: 'Streamlined seasonal tourist influx during Dasara festival across 120 member properties without queues.',
    impacts: [
      'Real-time cluster occupancy reporting to district control room',
      'Multilingual guest self-declaration mobile interface',
      'Seamless coordination with tourism police',
    ],
  },
];
