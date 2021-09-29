import { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../../styles/profilesList.scss'
import { ProfilesItem } from '../ProfilesItem'
import { RepositoryItem } from '../RepositoryItem'

export function ProfilesList() {
  const [user, setUser] = useState({})
  const [repositories, setRepositories] = useState([])
  const [userSerch, setUserSerch] = useState('')
  const [ProfileUser, setProfileUser] = useState('')


  const notify = () => {
    toast.error('Usuário não encontrado', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
      })
  }


  async function handleSearchUser() {
    setProfileUser(userSerch);

    const response = await fetch(`https://api.github.com/users/${userSerch}`)
      const data = await response.json()
      setUser(data)

      const res = await fetch(`https://api.github.com/users/${userSerch}/repos`)
      res.json().then((response) => {
        try {
          response.sort((a, b) => {
            if (a.created_at < b.created_at) {
              return 1;
            }
            if (a.created_at > b.created_at) {
              return -1;
            }
            return 0;
          });
          setRepositories(response.slice(0,4))
          
        } catch (error) {
          setProfileUser('')
          notify()
          console.log("User not found");
        }
      })
  }


  return (
    <main >
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

      {ProfileUser === '' ? '' : 
        <div className="result">
          <ul className="profileItem">
            <ProfilesItem user={user}/>
          </ul>
          <ul>
            <strong>Repositórios Recentes</strong>
            {repositories.map(repository => {
                  return <RepositoryItem key={repository.name} 
                  repository={repository}/>
              })}
          </ul>
        </div>
      }
    </main>    
  )
}