import { BrowserRouter, Route, Routes } from "react-router-dom"
import OverviewPage from "./pages/OverviewPage"
import ActivityResultsPage from "./pages/ActivityResultsPage"
import ActivityResultsArticles from "./pages/activityResults/Articles"
import RecruitmentPage from "./pages/RecruitmentPage"
import Header from "./Header"

function App() {
  return (
    <BrowserRouter>
      <div
        className="font-sans text-slate-900 scheme-light w-screen min-h-screen">
        <Header></Header>
        <main className="bg-amber-50 pb-5 min-h-[60vh]">
          <Routes>
            <Route path='/about' element={<OverviewPage />} />
            <Route path='/recruit' element={<RecruitmentPage />} />
            <Route path='/activity' element={<ActivityResultsPage />} />
            <Route path='/activity/articles/:id' element={<ActivityResultsArticles />} />
          </Routes>
        </main>
        <footer className="py-5 text-sm text-center">
          <div className="container">© 2025 スタートアップ（設立予定）</div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App