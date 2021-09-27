export function RepositoryItem({repository}) {

  return (
    <li>
        <a href={repository.html_url} target="_blank">
          {repository?.name ?? 'Default'}
        </a>
    </li>
  )
}