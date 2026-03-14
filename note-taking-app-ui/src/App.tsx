import { Route, Routes } from "react-router"
import { Components } from "./components/Components"

function App() {

  return (
    <Routes>
      <Route path="component" element={<Components />} />
    </Routes>
  )
}

export default App
