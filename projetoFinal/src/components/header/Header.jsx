import logoLivro from '../../assets/logoLivro.png'
import lupa from '../../assets/lupa.png'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

export default function Header() {
  return(
    <BrowserRouter>
    <header>
      <section>
        <img src={logoLivro} alt="imagem de ilustração de livro" />
        <h1>Livros Vai na Web</h1>
      </section>
      <nav>
        <ul>
          <li><Link to='/'>Início</Link></li>
          <li><Link to='/livros-doados'>Livros Doados</Link></li> 
          <li><Link to='/quero-doar'>Quero Doar</Link></li> 
        </ul>
      </nav>
      <section>
        <input type="search" name="" id="" placeholder='O que você procura?' />
        <button><img src={lupa} alt="imagem de lupa branca" /></button>
      </section>
    </header>
     <Routes>
      <Route path='/'/>
      <Route path='/livros-doados'/>
      <Route path='/quero-doar'/>
     </Routes>
    </BrowserRouter>
  )
}