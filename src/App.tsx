import { Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"

const App = () => (
  <Routes>
    <Route path="/:skill" Component={HomePage} />
    <Route path="/" Component={HomePage} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
)

export default App
