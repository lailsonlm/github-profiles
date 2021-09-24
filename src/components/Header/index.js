import { FiGithub } from 'react-icons/fi'

import '../../styles/header.scss'

export function Header() {
  return (
    <header>
      <div>
        <h1>Github Profiles</h1>
        <FiGithub />
      </div>
    </header>
  )
}