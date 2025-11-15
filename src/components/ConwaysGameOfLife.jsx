import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Play, Pause, FastForward, Info, RotateCcw, Shuffle } from 'lucide-react'
import { Button } from './ui/button'

const ConwaysGameOfLife = () => {
  const containerRef = useRef(null)
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const rendererRef = useRef(null)
  const gridRef = useRef(null)
  const cubesRef = useRef([])
  const animationFrameRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(true)
  const [speed, setSpeed] = useState(1)
  const [generation, setGeneration] = useState(0)
  const [population, setPopulation] = useState(0)
  const [showInfo, setShowInfo] = useState(false)

  const gridSize = 16  // Reduced from 32 for better performance
  const cellSize = 4.0  // Scaled up to fill entire screen
  const cellSpacing = 6.0  // Scaled up to fill entire screen
  const updateIntervalRef = useRef(null)
  const previousGridRef = useRef(null)
  const initialGridRef = useRef(null)

  // Initialize grid with random pattern
  const createInitialGrid = () => {
    const grid = []
    for (let x = 0; x < gridSize; x++) {
      grid[x] = []
      for (let y = 0; y < gridSize; y++) {
        grid[x][y] = []
        for (let z = 0; z < gridSize; z++) {
          grid[x][y][z] = Math.random() < 0.1 ? 1 : 0
        }
      }
    }
    return grid
  }

  // Count living neighbors in 3D (26 neighbors for each cell)
  const countNeighbors = (grid, x, y, z) => {
    let count = 0
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        for (let dz = -1; dz <= 1; dz++) {
          if (dx === 0 && dy === 0 && dz === 0) continue

          const nx = (x + dx + gridSize) % gridSize
          const ny = (y + dy + gridSize) % gridSize
          const nz = (z + dz + gridSize) % gridSize

          count += grid[nx][ny][nz]
        }
      }
    }
    return count
  }

  // Update grid according to Conway's rules (adapted for 3D)
  const updateGrid = (currentGrid) => {
    const newGrid = createInitialGrid().map(x => x.map(y => y.map(() => 0)))
    let pop = 0

    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        for (let z = 0; z < gridSize; z++) {
          const neighbors = countNeighbors(currentGrid, x, y, z)
          const wasAlive = currentGrid[x][y][z]

          if (wasAlive) {
            newGrid[x][y][z] = (neighbors >= 4 && neighbors <= 7) ? 1 : 0
          } else {
            newGrid[x][y][z] = neighbors === 6 ? 1 : 0
          }

          if (newGrid[x][y][z]) {
            pop++
          }
        }
      }
    }

    return { grid: newGrid, population: pop }
  }

  // Update cube visuals based on grid
  const updateCubes = (grid) => {
    cubesRef.current.forEach((cube, index) => {
      const x = Math.floor(index / (gridSize * gridSize))
      const y = Math.floor((index % (gridSize * gridSize)) / gridSize)
      const z = index % gridSize

      const isAlive = grid[x][y][z] === 1

      // All cells are always visible, just vary opacity
      cube.visible = true

      // Adjust colors based on light/dark mode
      const isDark = document.documentElement.classList.contains('dark')
      const aliveColor = isDark ? 0x2563eb : 0x1e40af  // Darker blue in light mode
      const deadColor = isDark ? 0x2563eb : 0x93c5fd   // Lighter blue for dead cells in light mode

      if (isAlive) {
        cube.material.color.setHex(aliveColor)
        cube.material.opacity = isDark ? 0.35 : 0.25 // Slightly less opaque in light mode
        if (cube.children[0]) {
          cube.children[0].material.opacity = isDark ? 0.25 : 0.15
        }
      } else {
        cube.material.color.setHex(deadColor)
        cube.material.opacity = isDark ? 0.015 : 0.04 // More visible in light mode
        if (cube.children[0]) {
          cube.children[0].material.opacity = isDark ? 0.01 : 0.02
        }
      }
    })
  }

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(
      50,  // Reduced FOV to zoom in more
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.set(35, 35, 35)
    camera.lookAt(0, 0, 0)
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    const initialGrid = createInitialGrid()
    gridRef.current = initialGrid
    previousGridRef.current = initialGrid
    initialGridRef.current = initialGrid

    const isDark = document.documentElement.classList.contains('dark')

    const geometry = new THREE.BoxGeometry(cellSize, cellSize, cellSize)
    const material = new THREE.MeshBasicMaterial({
      color: isDark ? 0x2563eb : 0x1e40af,  // Darker blue in light mode
      transparent: true,
      opacity: isDark ? 0.3 : 0.2,  // Less transparent in light mode
    })

    // Optional: Add edges for subtle outline effect
    const edgesGeometry = new THREE.EdgesGeometry(geometry)
    const edgesMaterial = new THREE.LineBasicMaterial({
      color: isDark ? 0x2563eb : 0x1e40af,  // Darker blue in light mode
      transparent: true,
      opacity: isDark ? 0.2 : 0.15,
    })

    const cubes = []
    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        for (let z = 0; z < gridSize; z++) {
          const cube = new THREE.Mesh(geometry, material.clone())
          // Use cellSpacing instead of cellSize for positioning to create gaps
          cube.position.set(
            (x - gridSize / 2) * cellSpacing,
            (y - gridSize / 2) * cellSpacing,
            (z - gridSize / 2) * cellSpacing
          )

          // All cells are always visible
          cube.visible = true

          // Set initial opacity based on alive/dead state and theme
          const isAlive = initialGrid[x][y][z] === 1
          cube.material.opacity = isAlive ? (isDark ? 0.35 : 0.25) : (isDark ? 0.015 : 0.04)

          // Add subtle edge outline
          const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial.clone())
          edges.material.opacity = isAlive ? (isDark ? 0.25 : 0.15) : (isDark ? 0.01 : 0.02)
          cube.add(edges)

          scene.add(cube)
          cubes.push(cube)
        }
      }
    }
    cubesRef.current = cubes

    let initialPop = 0
    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        for (let z = 0; z < gridSize; z++) {
          if (initialGrid[x][y][z]) initialPop++
        }
      }
    }
    setPopulation(initialPop)

    // Mouse movement for camera
    let mouseX = 0
    let mouseY = 0
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate)

      // Mouse controls continuous rotation speed (very subtle to prevent motion sickness)
      const rotationSpeedY = mouseX * 0.0005  // Horizontal mouse movement controls Y rotation
      const rotationSpeedX = mouseY * 0.00025  // Vertical mouse movement controls X rotation

      scene.rotation.y += rotationSpeedY
      scene.rotation.x += rotationSpeedX

      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (updateIntervalRef.current) {
        clearInterval(updateIntervalRef.current)
      }
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
      geometry.dispose()
      material.dispose()
    }
  }, [])

  useEffect(() => {
    if (updateIntervalRef.current) {
      clearInterval(updateIntervalRef.current)
    }

    if (isPlaying && gridRef.current) {
      const interval = 2500 / speed  // Slow base speed for subtle background effect
      updateIntervalRef.current = setInterval(() => {
        const { grid: newGrid, population: newPop } = updateGrid(gridRef.current)
        previousGridRef.current = gridRef.current
        gridRef.current = newGrid
        updateCubes(newGrid)
        setGeneration(g => g + 1)
        setPopulation(newPop)
      }, interval)
    }

    return () => {
      if (updateIntervalRef.current) {
        clearInterval(updateIntervalRef.current)
      }
    }
  }, [isPlaying, speed])

  const togglePlay = () => setIsPlaying(!isPlaying)

  const cycleSpeed = () => {
    setSpeed(s => {
      if (s === 1) return 2
      if (s === 2) return 4
      return 1
    })
  }

  const restartSimulation = () => {
    if (initialGridRef.current) {
      gridRef.current = initialGridRef.current
      updateCubes(initialGridRef.current)
      setGeneration(0)
      let pop = 0
      for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
          for (let z = 0; z < gridSize; z++) {
            if (initialGridRef.current[x][y][z]) pop++
          }
        }
      }
      setPopulation(pop)
    }
  }

  const generateNewStart = () => {
    const newGrid = createInitialGrid()
    gridRef.current = newGrid
    initialGridRef.current = newGrid
    updateCubes(newGrid)
    setGeneration(0)
    let pop = 0
    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        for (let z = 0; z < gridSize; z++) {
          if (newGrid[x][y][z]) pop++
        }
      }
    }
    setPopulation(pop)
  }

  return (
    <>
      <div
        ref={containerRef}
        className="fixed top-0 left-0 w-full h-full -z-10"
      />

      {/* Consolidated Control Panel */}
      <div className="fixed bottom-6 right-6 z-20">
        <div className="bg-background/90 dark:bg-background/80 backdrop-blur-sm border border-border rounded-lg p-4 space-y-3 min-w-[200px] shadow-lg">
          {/* Info Button */}
          <Button
            variant="ghost"
            size="sm"
            className="w-full"
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
          >
            <Info className="h-4 w-4 mr-1" />
            What is this?
          </Button>

          <div className="border-t border-border dark:border-border"></div>

          {/* Stats */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Generation:</span>
              <span className="font-mono font-semibold">{generation}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Population:</span>
              <span className="font-mono font-semibold">{population}</span>
            </div>
          </div>

          <div className="border-t border-border dark:border-border"></div>

          {/* Controls */}
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={togglePlay}
            >
              {isPlaying ? <Pause className="h-4 w-4 mr-1" /> : <Play className="h-4 w-4 mr-1" />}
              {isPlaying ? 'Pause' : 'Play'}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={cycleSpeed}
            >
              <FastForward className="h-4 w-4 mr-1" />
              {speed}x
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={restartSimulation}
            >
              <RotateCcw className="h-4 w-4 mr-1" />
              Restart
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={generateNewStart}
            >
              <Shuffle className="h-4 w-4 mr-1" />
              New
            </Button>
          </div>

          {/* Info Tooltip */}
          {showInfo && (
            <div className="absolute bottom-full right-0 mb-2 w-80 bg-popover border border-border rounded-lg p-4 shadow-lg">
              <h4 className="font-semibold mb-2">3D Conway's Game of Life</h4>
              <p className="text-xs text-muted-foreground mb-3">
                A three-dimensional cellular automaton based on Conway's Game of Life,
                where cells exist in a 16×16×16 voxel grid.
              </p>
              <div className="text-xs space-y-2">
                <div>
                  <span className="font-semibold">Rules:</span>
                  <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                    <li>Living cells with 4-7 neighbors survive</li>
                    <li>Dead cells with exactly 6 neighbors become alive</li>
                    <li>All other cells die or stay dead</li>
                  </ul>
                </div>
                <p className="text-muted-foreground">
                  Each cell has 26 possible neighbors (instead of 8 in 2D).
                  Watch as complex patterns emerge and evolve in 3D space!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ConwaysGameOfLife
