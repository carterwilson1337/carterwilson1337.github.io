import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'
import { ExternalLink, Star } from 'lucide-react'

const Coursework = () => {
  const graduateCourses = [
    {
      code: 'CSIS 614',
      name: 'Advanced Operating Systems',
      semester: 'Spring 2026',
      status: 'In Progress',
    },
    {
      code: 'CSIS 641',
      name: 'Advanced Cybersecurity',
      semester: 'Spring 2026',
      status: 'In Progress',
    },
    {
      code: 'CSIS 631',
      name: 'Principles Computer Security',
      semester: 'Fall 2025',
    },
    {
      code: 'CSIS 632',
      name: 'Data Communications & Networking',
      semester: 'Fall 2025',
    },
    {
      code: 'CSIS 602',
      name: 'Foundations Of Software Engineering',
      semester: 'Fall 2025',
      project: 'AI-Powered Development Platform',
    },
    {
      code: 'CSIS 635',
      name: 'Fundamentals of Agile Project Management',
      semester: 'Spring 2025',
    },
    {
      code: 'CSIS 690',
      name: 'Special Topics In Computing',
      semester: 'Spring 2025',
    },
    {
      code: 'CSIS 604',
      name: 'Distributed Computer Systems Architecture',
      semester: 'Fall 2024',
    },
    {
      code: 'CSIS 601',
      name: 'Data Modeling/Database Design',
      semester: 'Spring 2024',
    },
    {
      code: 'CSIS 605',
      name: 'Applied Algorithms',
      semester: 'Spring 2024',
    },
    {
      code: 'CSIS 672',
      name: 'Human-Computer Interaction',
      semester: 'Fall 2023',
    },
  ]

  const undergraduateCourses = [
    {
      code: 'CSCI 462',
      name: 'Software Engineering Capstone',
      semester: 'Spring 2024',
      project: 'Cummins WIP Job Tracking Dashboard',
    },
    {
      code: 'CSCI 345',
      name: 'Computer and Network Security',
      semester: 'Spring 2024',
    },
    {
      code: 'CSCI 350',
      name: 'Digital Logic & Computer Organization',
      semester: 'Spring 2024',
    },
    {
      code: 'CSCI 334',
      name: 'Data Mining',
      semester: 'Spring 2025',
    },
    {
      code: 'CSCI 362',
      name: 'Software Engineering',
      semester: 'Fall 2023',
      project: 'FindMyRoomie',
    },
    {
      code: 'CSCI 340',
      name: 'Operating Systems I',
      semester: 'Fall 2024',
    },
    {
      code: 'CSCI 320',
      name: 'Programming Language Concepts',
      semester: 'Spring 2023',
    },
    {
      code: 'CSCI 250',
      name: 'Intro To Computer Organization & Assembly Language',
      semester: 'Spring 2023',
    },
    {
      code: 'CSCI 230',
      name: 'Data Structures and Algorithms',
      semester: 'Fall 2022',
    },
    {
      code: 'CSCI 221',
      name: 'Computer Programming II',
      semester: 'Spring 2022',
    },
    {
      code: 'CSCI 111',
      name: 'Introduction to Cybersecurity',
      semester: 'Fall 2021',
    },
  ]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">Coursework</h1>
          <p className="text-xl text-muted-foreground">
            My academic journey through Computer Science
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-muted/50 rounded-lg p-3 max-w-md mx-auto">
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            <span>Look for the star to see projects completed in classes</span>
          </div>
        </div>

        {/* Graduate Courses Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold">Graduate Courses</h2>
            <Badge variant="outline">M.S. in Computer and Information Sciences</Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {graduateCourses.map((course, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-start gap-1.5 flex-1">
                      {course.project && (
                        <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500 mt-0.5 flex-shrink-0" />
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm leading-tight">{course.code}</h4>
                        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{course.name}</p>
                      </div>
                    </div>
                    {course.status === 'In Progress' && (
                      <Badge className="bg-blue-500 text-xs py-0">{course.status}</Badge>
                    )}
                  </div>
                  {course.project ? (
                    <Link
                      to={`/projects#${course.project.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}
                      className="text-xs text-primary hover:underline flex items-center gap-1 mt-2"
                    >
                      <ExternalLink className="h-3 w-3" />
                      View Project
                    </Link>
                  ) : (
                    <div className="h-5 mt-2"></div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Undergraduate Courses Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold">Undergraduate Courses</h2>
            <Badge variant="outline">B.S. in Computer Science, Magna Cum Laude</Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {undergraduateCourses.map((course, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-start gap-1.5 flex-1">
                      {course.project && (
                        <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500 mt-0.5 flex-shrink-0" />
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm leading-tight">{course.code}</h4>
                        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{course.name}</p>
                      </div>
                    </div>
                  </div>
                  {course.project ? (
                    <Link
                      to={`/projects#${course.project.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}
                      className="text-xs text-primary hover:underline flex items-center gap-1 mt-2"
                    >
                      <ExternalLink className="h-3 w-3" />
                      View Project
                    </Link>
                  ) : (
                    <div className="h-5 mt-2"></div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coursework
