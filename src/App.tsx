import './App.css'
import { Formulario } from './components/Formulario';
import { useAuthStore } from './store'

function isLogged() {
  const logged = useAuthStore(state => state.logged);
  return logged;
}

function App() {

  const logged = useAuthStore(state => state.logged);
  const user = useAuthStore(state => state.user);

  const changedLogged = useAuthStore(state => state.changeLogged);

  return (
    <>
      {user &&
        <p>{user.username}</p>
      }
      <p>{logged ? 'ACTIVO' : 'NO ACTIVO'}</p>
      <p>{isLogged() ? 'ACTIVO' : 'NO ACTIVO'}</p>
      <button onClick={changedLogged}>PULSA</button>
      <Formulario />
    </>
  )
}

export default App
