import Conversation from "../components/Conversation";
import TypeInput from "../components/TypeInput";

const Chat: React.FC = () => {
    return (
        <>
            <Conversation messages={[]}></Conversation>
            <TypeInput></TypeInput>
        </>
    )
}

export default Chat;