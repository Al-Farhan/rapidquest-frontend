import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Routes path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      
    </Routes>
  );
}

export default App;
