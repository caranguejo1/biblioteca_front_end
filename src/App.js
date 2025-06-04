import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './componentes/Menu';
import FormAutor from './paginas/FormAutor';
import FormCategoria from './paginas/FormCategoria';
import FormEditora from './paginas/FormEditora';
import FormLivro from './paginas/FormLivro';
import FormUsuario from './paginas/FormUsuario';
import FormFuncionario from './paginas/FormFuncionario';
import Home from './paginas/Home';
import ListaAutor from './paginas/ListaAutor';
import ListaCategoria from './paginas/ListaCategoria';
import ListaEditora from './paginas/ListaEditora';
import listaLivro from './paginas/ListaLivro';
import ListaUsuario from './paginas/ListaUsuario';
import ListaFuncionario from './paginas/ListaFuncionario';

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />

        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/listacategoria' element={<ListaCategoria />} />
            <Route path='/cadastrocategoria' element={<FormCategoria />} />
            <Route path='/cadastrocategoria/:id' element={<FormCategoria />} />
            
            <Route path='/listaeditora' element={<ListaCategoria />} />
            <Route path='/cadastroeditora' element={<FormCategoria />} />
            <Route path='/cadastroeditora/:id' element={<FormCategoria />} />

            <Route path='/listaautor' element={<ListaAutor />} />
            <Route path='/cadastroautor' element={<FormAutor />} />
            <Route path='/cadastroautor/:id' element={<FormAutor />} />

            <Route path='/listalivro' element={<listaLivro />} />
            <Route path='/cadastrolivro' element={<FormLivro />} />
            <Route path='/cadastrolivro/:id' element={<FormLivro />} />

            <Route path='/listausuario' element={<ListaUsuario />} />
            <Route path='/cadastrousuario' element={<FormUsuario />} />
            <Route path='/cadastrousuario/:id' element={<FormUsuario />} />

            <Route path='/listafuncionario' element={<ListaFuncionario />} />
            <Route path='/cadastrofuncionario' element={<FormFuncionario />} />
            <Route path='/cadastrofuncionario/:id' element={<FormFuncionario />} />

            <Route path='*' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
