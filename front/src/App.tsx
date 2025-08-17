import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <main className="w-screen">
        <Routes>
          <Route path='/' element={<h1>Hello World!</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App