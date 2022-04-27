import { Route, Routes, Navigate } from "react-router-dom";
import FeedPage from "./view/FeedPage/FeedPage";
import LoginPage from "./view/LoginPage/LoginPage";
export default function App() {
  document.body.style.cssText = `
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
    font-family: 'Roboto', sans-serif;
    box-sizing:border-box;
    margin:0;
    padding:0;
    background-color:rgb(250, 250, 250);
    `;
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/feed" element={<FeedPage />} />
      </Routes>
    </>
  );
}
