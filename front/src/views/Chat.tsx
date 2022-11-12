import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Conversation from "../components/Conversation";
import TypeInput from "../components/TypeInput";
import { useAppSelector } from "../store/hooks";
import { IMessage } from "../utils";

const Chat: React.FC = () => {
    const location = useLocation();
    const [messages, setMessages] = useState<IMessage[]>([]);
    const allMessages = useAppSelector(state => state.message);
    const session = useAppSelector(state => state.session);
    const navigate = useNavigate();

    useEffect(() => {
        if (session.id === "") navigate("/login")
        if (location.pathname !== '/') {
            setMessages(allMessages.privates.find(msg => msg.with.id === location.pathname.slice(1))?.messages || []);
        } else {
            setMessages(allMessages.general);
        }
    }, [location, allMessages.privates, allMessages.general, session.id, navigate])
    
    return (
        <>
            <Conversation messages={messages}></Conversation>
            <TypeInput></TypeInput>
        </>
    )
}

export default Chat;