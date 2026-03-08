import { Route, Routes } from "react-router"
import { PageLayout } from "./components/all notes/PageLayout"
import { ContentAllNote } from "./components/all notes/ContentAllNote"
import { ContentNote } from "./components/all notes/ContentNote"

function App() {

  return (
    <Routes>
      <Route element={<PageLayout/>}>
        <Route index element={<ContentAllNote/>}/>
        <Route path="note" element={<ContentNote/>}/>
      </Route>
    </Routes>
  )
}

export default App
