export interface Skill {
  name: string
  icon: string
  color: string
}

export interface SkillCategory {
  label: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Languages',
    skills: [
      { name: 'Python', icon: 'simple-icons:python', color: '#3776AB' },
      { name: 'SQL', icon: 'simple-icons:postgresql', color: '#336791' },
    ],
  },
  {
    label: 'Frontend',
    skills: [
      { name: 'React', icon: 'simple-icons:react', color: '#61DAFB' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'simple-icons:nodedotjs', color: '#339933' },
      { name: 'FastAPI', icon: 'simple-icons:fastapi', color: '#009688' },
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql', color: '#336791' },    ],
  },
  {
    label: 'Tools & DevOps',
    skills: [
      { name: 'Docker', icon: 'simple-icons:docker', color: '#2496ED' },
      { name: 'GitHub Actions', icon: 'simple-icons:githubactions', color: '#2088FF' },
      { name: 'Git', icon: 'simple-icons:git', color: '#F05032' },
    ],
  },
]
