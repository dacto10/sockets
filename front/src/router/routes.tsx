import { Routes, Route } from "react-router-dom";

const RouterView: React.FC = () => (
    <Routes>
        <Route path="/" element={<></>}/>
        <Route path="/private/:username" element={<></>}/>
    </Routes>
);

export default RouterView;