export function ProfilesItem({user}) {
  return (
  <li>
      <img src={user.avatar_url} alt="Avatar do Usuário" />
      <div>
        <strong>{user?.name ?? ''}</strong>
        <p>Username: {user.login}</p>
        <p>Seguidores: {user.followers}</p>
        <p>Repositórios: {user.public_repos}</p>

        <a href={user.html_url} target="_blank">Acessar Perfil</a>

      </div>
      
  </li>
  )
}