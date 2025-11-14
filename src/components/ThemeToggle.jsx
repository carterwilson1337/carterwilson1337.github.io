import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { Button } from './ui/button'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check initial theme
    const darkMode = document.documentElement.classList.contains('dark')
    setIsDark(darkMode)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (newTheme) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Button
        onClick={toggleTheme}
        variant="outline"
        size="icon"
        className="h-10 w-10 rounded-full"
      >
        {isDark ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </Button>
    </div>
  )
}

export default ThemeToggle
