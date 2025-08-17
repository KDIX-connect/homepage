import { BrowserRouter, Route, Routes } from "react-router-dom"
import OverviewPage from "./pages/OverviewPage"
import ActivityResultsPage from "./pages/ActivityResultsPage"
import ActivityResultsArticles from "./pages/activityResults/Articles"

function App() {
  return (
    <BrowserRouter>
      <main className="w-screen">
        <Routes>
          <Route path='/overview' element={<OverviewPage />} />
          <Route path='/activityResults' element={<ActivityResultsPage />} />
          <Route path='/activityResults/articles/:id' element={<ActivityResultsArticles />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App