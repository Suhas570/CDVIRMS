export interface StatItem {
  id: string;
  targetValue: number;
  suffix: string;
  labelKey: string;
  defaultLabel: string;
  description: string;
}

export const platformStatistics: StatItem[] = [
  {
    id: 'stat-entities',
    targetValue: 10450,
    suffix: '+',
    labelKey: 'stats.entities',
    defaultLabel: 'Registered Entities',
    description: 'Hotels, PGs, Lodges, Hostels & Corporate Hubs across Karnataka',
  },
  {
    id: 'stat-records',
    targetValue: 524000,
    suffix: '+',
    labelKey: 'stats.records',
    defaultLabel: 'Visitor Records Processed',
    description: 'Encrypted, tamper-evident digital records logged securely',
  },
  {
    id: 'stat-stations',
    targetValue: 512,
    suffix: '+',
    labelKey: 'stats.stations',
    defaultLabel: 'Police Stations Linked',
    description: 'Integrated directly into jurisdiction verification networks',
  },
  {
    id: 'stat-uptime',
    targetValue: 99.98,
    suffix: '%',
    labelKey: 'stats.uptime',
    defaultLabel: 'System Uptime SLA',
    description: 'High-availability state cloud infrastructure with zero downtime',
  },
];
