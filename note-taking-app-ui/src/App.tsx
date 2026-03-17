import { Route, Routes } from "react-router"
import { Components } from "./components/Components"
import { AuthLayout } from "./pages/auth/AuthLayout"
import { Login } from "./pages/auth/Login"

function App() {

  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="component" element={<Components />} />
    </Routes>

  )
}

export default App
