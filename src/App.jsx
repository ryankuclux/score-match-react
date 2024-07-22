import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Match from './pages/Match'
import Teams from './pages/Teams'
import Started from './pages/Started'
import Result from './pages/Result'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Match />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/Started" element={<Started />} />
        <Route path="/Result" element={<Result />} />
      </Routes>
    </Router>
    </>
  )
}

export default App