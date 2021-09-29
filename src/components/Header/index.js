import { FiGithub } from 'react-icons/fi'

import '../../styles/header.scss'
import { ButtonTheme } from '../ButtonTheme'

export function Header({checked, setChecked}) {
  return (
    <header >
      <div>
        <h1>Github Profiles</h1>
        <FiGithub />
      </div>
      <ButtonTheme checked={checked} setChecked={setChecked}/>
    </header>
  )
}