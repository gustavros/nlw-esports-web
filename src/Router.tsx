import { Route, Routes } from "react-router-dom";
import { AdGame } from "./pages/AdGame";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games/:id/ads" element={<AdGame />} />
    </Routes>
  );
}
