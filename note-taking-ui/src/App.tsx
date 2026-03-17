import { Route, Routes } from "react-router"
import { Components } from "./components/Components"
import { AuthLayout } from "./pages/auth/AuthLayout"
import { LoginPage } from "./pages/auth/LoginPage"
import { ForgotPasswordPage } from "./pages/auth/ForgotPasswordPage"

function App() {

  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="forgotPassword" element={<ForgotPasswordPage />} />
      </Route>
      <Route path="component" element={<Components />} />
    </Routes>

  )
}

export default App
