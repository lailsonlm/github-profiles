import { GoSearch } from 'react-icons/go'

import '../../styles/profilesList.scss'

export function ProfilesList() {
  return (
    <main>
      <div className="search">
        <input type="text" placeholder="Digite o usuário do Github"/>
        <button type="button">Buscar <GoSearch /></button>
      </div>

      <div className="result">
        <ul>
          <li>Lista de Perfil</li>
          <li>Lista de Perfil</li>
          <li>Lista de Perfil</li>
          <li>Lista de Perfil</li>
        </ul>
      </div>
    </main>
  )
}