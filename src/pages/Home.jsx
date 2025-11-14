import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import ConwaysGameOfLife from '@/components/ConwaysGameOfLife'

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <ConwaysGameOfLife />
      <div className="absolute inset-0 bg-black/40 dark:bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center space-y-6 z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl">
            Carter Wilson
          </h1>
          <p className="text-xl md:text-2xl text-white drop-shadow-lg">
            Developer | Student | Creator
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="shadow-lg">
              <Link to="/about">About Me</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 dark:bg-black/50 border-white/30 text-white hover:bg-white/20 dark:hover:bg-black/70 backdrop-blur-sm shadow-lg">
              <Link to="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
