import { Route, Routes } from "react-router"
import { Components } from "./components/Components"
import { AuthLayout } from "./pages/auth/AuthLayout"
import { LoginPage } from "./pages/auth/LoginPage"
import { ForgotPasswordPage } from "./pages/auth/ForgotPasswordPage"
import { ResetPasswordPage } from "./pages/auth/ResetPasswordPage"
import { RegisterPage } from "./pages/auth/RegisterPage"
import { ContentAllNote } from "./pages/home/ContentAllNote"
import { ContentNote } from "./pages/home/ContentNote"
import { HomeLayout } from "./pages/home/HomeLayout"
import { ContentAllTags } from "./pages/home/ContentAllTags"
import { ContentSearch } from "./pages/home/ContentSearch"

function App() {

  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="forgotPassword" element={<ForgotPasswordPage />} />
        <Route path="resetPassword" element={<ResetPasswordPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      <Route element={<HomeLayout />}>
        <Route path="" element={<ContentAllNote />} />
        <Route path="note" element={<ContentNote />} />
        <Route path="tags" element={<ContentAllTags />} />
        <Route path="search" element={<ContentSearch />} />
      </Route>

      <Route path="component" element={<Components />} />
    </Routes>

  )
}

export default App
