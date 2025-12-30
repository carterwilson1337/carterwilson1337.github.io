import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Github, ExternalLink, Clock, CheckCircle, BookOpen, User } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const Projects = () => {
  const location = useLocation()
  const [highlightedProject, setHighlightedProject] = useState(null)

  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = location.hash.replace('#', '')
    if (hash) {
      // Wait for the page to render
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          // Scroll to the element
          element.scrollIntoView({ behavior: 'smooth', block: 'center' })
          // Highlight the project
          setHighlightedProject(hash)
          // Remove highlight after animation
          setTimeout(() => setHighlightedProject(null), 2000)
        }
      }, 100)
    }
  }, [location])
  // Current projects - actively working on
  const currentProjects = [
    {
      id: 1,
      name: 'Godot Game Development',
      description: 'Working on stronger anti cheat systems and network management for the Godot engine.',
      technologies: ['Godot', 'GDScript'],
      status: 'In Development',
      category: 'current',
      date: '2024 - Present',
    },
  ]

  // Past projects - completed or archived
  const pastProjects = [
    {
      id: 3,
      name: 'AI-Powered Development Platform',
      description: 'Built a development platform that enables users to submit projects and request LLM-powered bug fixes and feature additions. The system spins up Docker containers to run projects, analyzes program output and exit codes, and allows AI to iteratively refine implementations until successful. Built for CSIS 602 Foundations of Software Engineering.',
      technologies: ['React', 'Vite', 'FastAPI', 'Ollama', 'Supabase', 'Docker'],
      github: 'https://github.com/Spencerhoag/cici-602-bug-fix-project',
      category: 'class',
      date: 'Fall 2025',
      course: 'CSIS 602',
    },
    {
      id: 4,
      name: 'Polygon - Hackathon Game',
      description: 'A game studio focused on bringing AI agents to multiplayer games, eliminating the "waiting for players" problem. Built Mimic, a social deduction party game where AI agents automatically fill empty seats alongside human players. One random player (human OR AI) is secretly the "Mimic" who doesn\'t know the secret word - can you spot who\'s AI and who\'s the imposter?',
      technologies: ['Next.js', 'Firebase', 'Google ADK'],
      github: 'https://github.com/truaxki/polygon',
      category: 'personal',
      date: 'October 3-5, 2025',
      achievement: 'First Place Winner',
    },
    {
      id: 5,
      name: 'Tello Drone Navigation Proof of Concept',
      description: 'Developed proof of concept for autonomous drone navigation using a Tello drone. Implemented Python computer vision with OpenCV for barcode scanning and inventory counting while navigating along warehouse shelves. Successfully demonstrated autonomous shelf navigation and published research paper on findings. This work identified hardware limitations that led to ongoing custom hardware research.',
      technologies: ['Python', 'OpenCV', 'Computer Vision', 'Tello SDK'],
      github: 'https://github.com/carterwilson1337/DroneControlServer',
      category: 'class',
      date: 'Summer 2024',
      achievement: 'Published Research Paper',
    },
    {
      id: 6,
      name: 'Godot Engine OSS Contribution',
      description: 'My first open source contribution to the Godot game engine. Fixed a UI bug in the core engine, gaining experience with C++ and large-scale open source collaboration.',
      technologies: ['C++', 'Godot Engine'],
      github: 'https://github.com/godotengine/godot/pull/112148',
      category: 'personal',
      date: '2025',
    },
    {
      id: 7,
      name: 'Cummins WIP Job Tracking Dashboard',
      description: 'Collaborated with 2 other students to develop a dashboard for a local Cummins plant, providing better visibility into the status of different Work-in-Progress jobs at their location. Built as the capstone project for CSCI 462 Software Engineering.',
      technologies: ['React', 'MySQL', 'JavaScript'],
      github: 'https://github.com/carterwilson12/CumminsDashboard',
      category: 'class',
      date: 'Spring 2024',
      course: 'CSCI 462',
    },
    {
      id: 8,
      name: 'FindMyRoomie',
      description: 'A React-based web application with Firebase backend designed to improve the college roommate matching experience. Built as part of CSCI 362 Software Engineering coursework, implementing features for profile matching, messaging, and user preferences.',
      technologies: ['React', 'Firebase', 'JavaScript'],
      category: 'class',
      date: 'Fall 2023',
      course: 'CSCI 362',
    },
  ]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">Projects</h1>
          <p className="text-xl text-muted-foreground">
            A timeline of my work and contributions
          </p>
        </div>

        {/* Current Projects Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-blue-500" />
            <h2 className="text-3xl font-bold">Current Projects</h2>
          </div>

          <div className="space-y-6 relative before:absolute before:left-6 before:top-0 before:bottom-0 before:w-0.5 before:bg-border md:before:block before:hidden">
            {currentProjects.map((project, index) => (
              <div key={project.id} className="relative pl-0 md:pl-14" id={project.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-4 top-6 w-4 h-4 rounded-full bg-blue-500 border-4 border-background" />

                <Card className={`hover:shadow-lg transition-all ${highlightedProject === project.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '') ? 'ring-2 ring-primary animate-pulse' : ''}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <CardTitle className="text-xl md:text-2xl">{project.name}</CardTitle>
                        <div className="flex items-center gap-2">
                          {project.course || project.category === 'class' ? (
                            <Badge className="gap-1 bg-purple-500 hover:bg-purple-600">
                              <BookOpen className="h-3 w-3" />
                              Academic
                            </Badge>
                          ) : (
                            <Badge className="gap-1 bg-orange-500 hover:bg-orange-600">
                              <User className="h-3 w-3" />
                              Personal
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {project.date}
                        </CardDescription>
                      </div>
                      <Badge className="bg-blue-500 hover:bg-blue-600">
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  {(project.github || project.demo) && (
                    <CardFooter className="flex gap-2 flex-wrap">
                      {project.github && (
                        <Button asChild variant="outline" size="sm">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View on GitHub
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button asChild variant="outline" size="sm">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Past Projects Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-green-500" />
            <h2 className="text-3xl font-bold">Past Projects</h2>
          </div>

          <div className="space-y-6 relative before:absolute before:left-6 before:top-0 before:bottom-0 before:w-0.5 before:bg-border md:before:block before:hidden">
            {pastProjects.map((project) => (
              <div key={project.id} className="relative pl-0 md:pl-14" id={project.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-4 top-6 w-4 h-4 rounded-full bg-green-500 border-4 border-background" />

                <Card className={`hover:shadow-lg transition-all ${highlightedProject === project.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '') ? 'ring-2 ring-primary animate-pulse' : ''}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <CardTitle className="text-xl md:text-2xl">{project.name}</CardTitle>
                        <div className="flex items-center gap-2">
                          {project.category === 'class' ? (
                            <Badge className="gap-1 bg-purple-500 hover:bg-purple-600">
                              <BookOpen className="h-3 w-3" />
                              Academic
                            </Badge>
                          ) : (
                            <Badge className="gap-1 bg-orange-500 hover:bg-orange-600">
                              <User className="h-3 w-3" />
                              Personal
                            </Badge>
                          )}
                        </div>
                        <CardDescription>{project.date}</CardDescription>
                      </div>
                      <Badge className="bg-green-500 hover:bg-green-600">
                        Completed
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{project.description}</p>
                    {project.achievement && (
                      <Badge className="bg-yellow-600 hover:bg-yellow-700">
                        🏆 {project.achievement}
                      </Badge>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  {(project.github || project.demo) && (
                    <CardFooter className="flex gap-2 flex-wrap">
                      {project.github && (
                        <Button asChild variant="outline" size="sm">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View on GitHub
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button asChild variant="outline" size="sm">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
