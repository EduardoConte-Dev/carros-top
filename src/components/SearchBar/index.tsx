import './styles.css'

export default function SearchBar() {
  return (
    <form className="ct-searcg-bar">
      <input className='ct-forms-control' type='text' placeholder='Digite sua busca' />
      <button className='ct-search-bar-submit' type='submit'>Buscar</button>
    </form>
  )
}