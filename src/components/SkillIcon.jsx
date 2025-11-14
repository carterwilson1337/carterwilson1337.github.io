import {
  DiJava,
  DiPython,
  DiReact,
  DiGit,
  DiDocker,
  DiLinux,
  DiWindows,
  DiPostgresql,
  DiAws,
} from 'react-icons/di'
import {
  SiGodotengine,
  SiSteam,
  SiFastapi,
  SiFirebase,
  SiScikitlearn,
  SiOpencv,
  SiOpenai,
  SiGooglegemini,
  SiOllama,
  SiSupabase,
} from 'react-icons/si'
import { FaLinux } from 'react-icons/fa'
import { FaProjectDiagram } from 'react-icons/fa'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

const techIcons = {
  'Java': { icon: DiJava, color: '#007396', lightColor: '#007396' },
  'Python': { icon: DiPython, color: '#3776AB', lightColor: '#3776AB' },
  'React': { icon: DiReact, color: '#61DAFB', lightColor: '#0EA5E9' },
  'Git/Github': { icon: DiGit, color: '#F05032', lightColor: '#F05032' },
  'Godot': { icon: SiGodotengine, color: '#478CBF', lightColor: '#478CBF' },
  'Docker': { icon: DiDocker, color: '#2496ED', lightColor: '#2496ED' },
  'Linux': { icon: FaLinux, color: '#FCC624', lightColor: '#EAB308' },
  'Windows': { icon: DiWindows, color: '#0078D6', lightColor: '#0078D6' },
  'Steamworks': { icon: SiSteam, color: '#FFFFFF', lightColor: '#171a21' },  // Dark color for light mode
  'PostgreSQL': { icon: DiPostgresql, color: '#4169E1', lightColor: '#4169E1' },
  'Supabase': { icon: SiSupabase, color: '#3ECF8E', lightColor: '#10B981' },
  'LLM APIs (OpenAI/Google)': { icon: SiOpenai, color: '#412991', lightColor: '#412991' },
  'Ollama': { icon: SiOllama, color: '#FFFFFF', lightColor: '#000000' },  // Black for light mode
  'FastAPI': { icon: SiFastapi, color: '#009688', lightColor: '#009688' },
  'NoSQL': { icon: SiFirebase, color: '#FFCA28', lightColor: '#F59E0B' },
  'sklearn': { icon: SiScikitlearn, color: '#F7931E', lightColor: '#F7931E' },
  'AWS': { icon: DiAws, color: '#FF9900', lightColor: '#FF9900' },
  'OpenCV': { icon: SiOpencv, color: '#5C3EE8', lightColor: '#5C3EE8' },
  'A* pathfinding': { icon: FaProjectDiagram, color: '#8B5CF6', lightColor: '#8B5CF6' },
}

const skillDescriptions = {
  'Java': {
    description: 'Object-oriented programming for enterprise applications and Android development',
    project: '/projects',
  },
  'Python': {
    description: 'Used for drone navigation research, computer vision, and data analysis',
    project: '/projects',
  },
  'React': {
    description: 'Built web applications including this portfolio, FindMyRoomie, and other projects',
    project: '/projects',
  },
  'Git/Github': {
    description: 'Version control and collaboration, including open source contributions',
    project: 'https://github.com/godotengine/godot/pull/112148',
  },
  'Godot': {
    description: 'Game engine for personal game development projects',
    project: '/projects',
  },
  'Docker': {
    description: 'Containerization for consistent development environments',
    project: '/projects',
  },
  'Linux': {
    description: 'Used for development environments and system administration',
    project: '/projects',
  },
  'Windows': {
    description: 'Primary operating system for daily use and development',
    project: '/projects',
  },
  'Steamworks': {
    description: 'Steam API integration for multiplayer networking in Godot games',
    project: '/projects',
  },
  'PostgreSQL': {
    description: 'Relational database for web applications and data modeling',
    project: '/projects',
  },
  'Supabase': {
    description: 'Open source Firebase alternative with Postgres database and real-time subscriptions',
    project: '/projects',
  },
  'LLM APIs (OpenAI/Google)': {
    description: 'Integrating AI capabilities into applications',
    project: '/projects',
  },
  'Ollama': {
    description: 'Local LLM deployment and experimentation',
    project: '/projects',
  },
  'FastAPI': {
    description: 'Building high-performance Python web APIs',
    project: '/projects',
  },
  'NoSQL': {
    description: 'Firebase for real-time databases and cloud services',
    project: '/projects',
  },
  'sklearn': {
    description: 'Machine learning and data mining projects',
    project: '/projects',
  },
  'AWS': {
    description: 'Cloud infrastructure and deployment',
    project: '/projects',
  },
  'OpenCV': {
    description: 'Computer vision for drone navigation and barcode scanning',
    project: '/projects',
  },
  'A* pathfinding': {
    description: 'Pathfinding algorithms for game AI',
    project: '/projects',
  },
}

const SkillIcon = ({ name, size = 'lg' }) => {
  const tech = techIcons[name]
  const skillInfo = skillDescriptions[name]

  if (!tech) return null

  const Icon = tech.icon
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
  }

  const handleClick = () => {
    if (skillInfo?.project) {
      if (skillInfo.project.startsWith('http')) {
        window.open(skillInfo.project, '_blank')
      } else {
        window.location.href = skillInfo.project
      }
    }
  }

  const isDark = typeof window !== 'undefined' && document.documentElement.classList.contains('dark')
  const iconColor = isDark ? tech.color : (tech.lightColor || tech.color)

  return (
    <Tooltip>
      <TooltipTrigger>
        <div
          className={`${sizeMap[size]} flex items-center justify-center rounded-lg bg-card border border-border p-2 hover:scale-110 transition-transform cursor-pointer hover:border-primary shadow-sm dark:shadow-none`}
          onClick={handleClick}
        >
          <Icon style={{ color: iconColor }} className="w-full h-full" />
        </div>
      </TooltipTrigger>
      {skillInfo && (
        <TooltipContent>
          <div className="space-y-1">
            <p className="font-semibold">{name}</p>
            <p className="text-xs text-muted-foreground">{skillInfo.description}</p>
            {skillInfo.project && (
              <p className="text-xs text-primary">Click to view project →</p>
            )}
          </div>
        </TooltipContent>
      )}
    </Tooltip>
  )
}

export default SkillIcon
