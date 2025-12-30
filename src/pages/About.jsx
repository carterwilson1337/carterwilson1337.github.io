import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import SkillIcon from '@/components/SkillIcon'
import { Code, Lightbulb, BookOpen, MapPin, Mail } from 'lucide-react'

const About = () => {
  const experiencedSkills = [
    'Java', 'Python', 'React', 'Git/Github', 'Godot',
    'Docker', 'Linux', 'Windows', 'Steamworks'
  ]

  const familiarSkills = [
    'PostgreSQL', 'Supabase', 'LLM APIs (OpenAI/Google)', 'Ollama', 'FastAPI',
    'NoSQL', 'sklearn', 'AWS', 'OpenCV', 'A* pathfinding'
  ]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Developer | Student | Researcher
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Mount Pleasant, SC</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:carterwilsonse@gmail.com" className="hover:text-primary transition-colors">
                carterwilsonse@gmail.com
              </a>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Introduction</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              I'm a graduate student at the College of Charleston pursuing my M.S. in Computer and Information Sciences,
              with a strong foundation in software engineering and computer science. I graduated
              Magna Cum Laude with my B.S. in Computer Science in December 2024.
            </p>
            <p className="text-muted-foreground">
              My interests span from game development to drone navigation research, with a particular
              passion for building innovative solutions and learning new technologies through hands-on projects.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What Drives Me</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex gap-3">
                <Code className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Coding</h4>
                  <p className="text-sm text-muted-foreground">
                    Love building things and seeing ideas come to life through code.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Problem Solving</h4>
                  <p className="text-sm text-muted-foreground">
                    Thrive on tackling complex challenges and finding elegant solutions.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <BookOpen className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Constantly exploring new technologies and expanding my skillset.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-sm font-semibold mb-4">Experienced:</p>
              <div className="flex flex-wrap gap-4">
                {experiencedSkills.map((skill) => (
                  <SkillIcon key={skill} name={skill} size="lg" />
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold mb-4">Familiar:</p>
              <div className="flex flex-wrap gap-4">
                {familiarSkills.map((skill) => (
                  <SkillIcon key={skill} name={skill} size="lg" />
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold mb-3">Methodologies:</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Scrum</Badge>
                <Badge variant="secondary">Agile Development</Badge>
                <Badge variant="secondary">Scrum Master Experience</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">College of Charleston</h3>
                  <p className="text-muted-foreground">M.S. in Computer and Information Sciences</p>
                </div>
                <Badge variant="outline">Expected May 2026</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Charleston, SC</p>
            </div>

            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">College of Charleston</h3>
                  <p className="text-muted-foreground">B.S. in Computer Science, Magna Cum Laude</p>
                </div>
                <Badge variant="outline">December 2024</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Charleston, SC</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Teaching Assistant</h3>
                  <p className="text-muted-foreground">College of Charleston</p>
                </div>
                <Badge variant="outline">Jan 2025 - Present</Badge>
              </div>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                <li>Prepare, lead and grade labs in Python and Java programming</li>
                <li>Grade assignments for Python lecture courses</li>
                <li>Support students in learning fundamental programming concepts</li>
              </ul>
            </div>

            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Research - Autonomous Drone Navigation</h3>
                  <p className="text-muted-foreground">College of Charleston</p>
                </div>
                <Badge variant="outline">June 2024 - Present</Badge>
              </div>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                <li>Developed proof of concept for autonomous drone navigation in GPS-denied environments</li>
                <li>Utilized Python Computer Vision libraries for barcode scanning and inventory counting</li>
                <li>Working on custom drone hardware to improve capabilities</li>
                <li>Researching Robot Operating System (ROS), Time-of-flight sensors, and optical sensory capabilities</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default About
