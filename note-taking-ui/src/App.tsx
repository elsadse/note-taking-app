import { Navigate, Route, Routes } from "react-router"
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
import { ContentSettings } from "./pages/home/settings/ContentSettings"
import { SettingsColorTheme } from "./pages/home/settings/SettingsColorTheme"
import { useBreakPoint } from "./hooks/useBreakPoint"
import { ContentHomeDesktop } from "./pages/home/ContentHomeDesktop"
import { ContentSettingsDesktop } from "./pages/home/settings/ContentSettingsDesktop"
import { SettingsFontOption } from "./pages/home/settings/SettingsFontOption"
import { SettingsChangePassword } from "./pages/home/settings/SettingsChangePassword"
import { CreateNote } from "./pages/CreateNote"
import { ContentCreateNote } from "./pages/home/ContentCreateNote"
import { ProtectedRoute } from "./components/ProtectedRoute"

function App() {

  const bp = useBreakPoint();

  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="forgotPassword" element={<ForgotPasswordPage />} />
        <Route path="resetPassword" element={<ResetPasswordPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route element={<HomeLayout />}>
          <Route path="" element={bp === "xl" ? <ContentHomeDesktop /> : <ContentAllNote />} />
          <Route path="note" element={bp === "xl" ? <Navigate to="/" replace /> : <ContentNote />} />
          <Route path="tags" element={bp === "xl" ? <Navigate to="/" replace /> : <ContentAllTags />} />
          <Route path="search" element={bp === "xl" ? <Navigate to="/" replace /> : <ContentSearch />} />
          <Route path="settings" element={bp === "xl" ? <ContentSettingsDesktop /> : <ContentSettings />} />
          <Route path="colorTheme" element={bp === "xl" ? <ContentSettingsDesktop /> : <SettingsColorTheme />} />
          <Route path="fontTheme" element={bp === "xl" ? <ContentSettingsDesktop /> : <SettingsFontOption />} />
          <Route path="changePassword" element={bp === "xl" ? <ContentSettingsDesktop /> : <SettingsChangePassword />} />
          <Route path="createNote" element={bp === "xl" ? <ContentCreateNote /> : <CreateNote />} />
        </Route>
      </Route>

      <Route path="component" element={<Components />} />
    </Routes>

  )
}

export default App
