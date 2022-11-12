import { Routes, Route } from "react-router-dom";
import Chat from "../views/Chat";
import Login from "../views/Login";

const RouterView: React.FC = () => (
    <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Chat />}/>
        <Route path="/:username" element={<Chat />}/>
    </Routes>
);

export default RouterView;