export interface TimelineEntry {
  role: string
  company: string
  companyUrl?: string
  startDate: string
  endDate: string
  description: string[]
  tags: string[]
  type: 'work' | 'education'
}

export const experiences: TimelineEntry[] = [
  {
    role: 'AI Engineer',
    company: 'GPM',
    companyUrl: 'https://www.gpmcorp.com.tw/',
    startDate: '2026',
    endDate: 'Present',
    description: [
      'A rookie ai developer.',
    ],
    tags: ['Python', 'Docker'],
    type: 'work',
  },
]
