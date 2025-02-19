import { ThemeChanger } from "./Components/ThemeContext";
import './Components/style.css'
import UserContextProvider from './context/UserContextProvider';
import ToggleStatus from "./Components/ToggleStatus";
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  return (
    <>
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>

    </>
  )
}
export default App;