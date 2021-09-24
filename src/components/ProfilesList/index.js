import { useState, useEffect } from 'react'
import { GoSearch } from 'react-icons/go'

import '../../styles/profilesList.scss'
import { ProfilesItem } from '../ProfilesItem'

export function ProfilesList() {
  const [user, setUser] = useState({})
  const [userSerch, setUserSerch] = useState('')
  const [ProfileUser, setProfileUser] = useState('')

  useEffect(() => {
    fetch(`https://api.github.com/users/${ProfileUser}`)
    .then(response => response.json())
    .then(data => setUser(data))
  }, [ProfileUser])

  function handleSearchUser() {
    setProfileUser(userSerch)
  }

  return (
    <main>
      <div className="search">
        <input 
          type="text" 
          placeholder="Digite o usuário do Github" 
          value={userSerch}
          onChange={event => setUserSerch(event.target.value)}
        />
        <button 
          type="button"
          onClick={handleSearchUser}
        > Buscar <GoSearch /></button>
      </div>

      <div className="result">
        <ul>
          <ProfilesItem user={user}/>
        </ul>
      </div>
    </main>
  )
}