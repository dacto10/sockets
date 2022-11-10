import { Routes, Route } from "react-router-dom";
import Login from "../views/Login";

const RouterView: React.FC = () => (
    <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<></>}/>
        <Route path="/private/:username" element={<></>}/>
    </Routes>
);

export default RouterView;