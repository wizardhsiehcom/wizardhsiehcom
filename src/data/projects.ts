export interface Project {
  title: string
  description: string
  image?: string
  tags: string[]
  githubUrl?: string
  demoUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'AI UI Platform',
    description:
      'An AOI tool',
    tags: ['Next.js', 'TypeScript', 'Python', 'PostgreSQL', 'Tailwind'],
    // githubUrl: 'https://github.com/wizardhsieh',
    demoUrl: '#',
    featured: true,
  },
]
