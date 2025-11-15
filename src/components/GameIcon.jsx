import {
  SiRust,
  SiCounterstrike,
  SiRiotgames,
} from 'react-icons/si'
import { GiAk47 } from 'react-icons/gi'

const gameIcons = {
  'League of Legends': { icon: SiRiotgames, color: '#D4AF37' },
  'Rust': { icon: SiRust, color: '#000000' },
  'CS:GO': { icon: SiCounterstrike, color: '#F5A623' },
  'Escape from Tarkov': { icon: GiAk47, color: '#9A8866' },
}

const GameIcon = ({ name, size = 'md', showLabel = true }) => {
  const game = gameIcons[name]

  if (!game) return null

  const Icon = game.icon
  const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }

  return (
    <div className="inline-flex items-center gap-2">
      <div
        className={`${sizeMap[size]} flex items-center justify-center`}
      >
        <Icon style={{ color: game.color }} className="w-full h-full" />
      </div>
      {showLabel && <span>{name}</span>}
    </div>
  )
}

export default GameIcon
