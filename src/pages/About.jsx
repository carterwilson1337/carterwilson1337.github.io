import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import SkillIcon from '@/components/SkillIcon'
import { Gamepad2, Code, Lightbulb, BookOpen, MapPin, Mail } from 'lucide-react'

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
            Developer | Student | Researcher | Gamer
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
            <CardDescription>A bit about myself</CardDescription>
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
            <CardDescription>My passions and interests</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <Gamepad2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Video Games</h4>
                  <p className="text-sm text-muted-foreground">
                    Passionate competitive gamer with a love for competition and fun with friends.
                  </p>
                </div>
              </div>
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
            <CardTitle>Gaming</CardTitle>
            <CardDescription>Competitive gaming achievements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              When I'm not coding, you'll find me playing ranked in competitive games. I'm passionate about
              improving my skills and climbing the ladder.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <img src="/images/games/LoL_Icon_Rendered_Hi-Res.png" alt="League of Legends" className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold">League of Legends</h4>
                    <Badge className="bg-gradient-to-r from-red-600 to-orange-500 text-white">Grandmaster</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Peaked at Grandmaster rank. Main: Janna - I found myself enjoying empowering others and providing disengage to give my teammates space to play. I gained a lot of knowledge about what it takes to learn and get better at something by playing League.
                  </p>
                </div>
              </div>
              <div className="border-l-2 border-primary pl-4 space-y-2">
                <p className="text-sm font-semibold">Other games I enjoy:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="gap-1.5">
                    <img src="/images/games/Rust_Marque-1080.png" alt="Rust" className="h-14 w-auto -m-4" />
                    Rust
                  </Badge>
                  <Badge variant="outline" className="gap-1.5">
                    <img src="/images/games/image.png" alt="CS2" className="h-6 w-6 object-contain" />
                    CS2
                  </Badge>
                  <Badge variant="outline" className="gap-1.5">
                    <Gamepad2 className="h-3.5 w-3.5" />
                    Escape from Tarkov
                  </Badge>
                </div>
              </div>
              <div className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
                <p>League of Legends and all related logos are trademarks of Riot Games, Inc. Rust is a trademark of Facepunch Studios. Counter-Strike 2 is a trademark of Valve Corporation. Escape from Tarkov is a trademark of Battlestate Games Limited. All trademarks are property of their respective owners.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
            <CardDescription>Technologies I work with - hover for details and click to see projects</CardDescription>
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
            <CardDescription>My academic background</CardDescription>
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
            <CardDescription>Work and research experience</CardDescription>
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
