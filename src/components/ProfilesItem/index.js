export function ProfilesItem(props) {
  return (
  <li>
      <strong>{props.user.name ?? 'Usuário'}</strong>
      <p>{props.user.bio}</p>

      <a href={props.user.html_url}>Acessar Perfil</a>
  </li>
  )
}