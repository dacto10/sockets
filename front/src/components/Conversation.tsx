import { Box, Grid, Paper, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { IMessage } from "../utils";
import Message from "./Message";

interface Props {
    messages: IMessage[];
}

const Conversation: React.FC<Props> = (props: Props) => {
    const { messages } = props;
    const { id } = useAppSelector(state => state.session);
    const location = useLocation();
    const [user, setUser] = useState("");
    const privates = useAppSelector(state => state.message.privates);
    
    useEffect(() => {
        if (location.pathname !== '/') {
            setUser(privates.find(msg => msg.with.id === location.pathname.slice(1))?.with.username || "");
        } else {
            setUser("");
        }
    }, [location.pathname, privates])

    return (
        <>
            <Box sx={ chatContainerStyles }>
                <Paper sx={ chatInfoStyles }>
                    <Typography fontSize={"13px"}>
                        { 
                            user !== ""  ? `Conversation with ${user}` : "General chat"
                        }
                    </Typography>
                </Paper>
                <Grid container spacing={1} direction={"column"} sx={ { marginBottom: 0.5 } }>
                {
                    messages.map((message, index) => {
                        const type = message.from.username === "" ? "info" : message.from.id === id ? "own" : "other";
                        return <Grid item key={index}><Message type={type} content={message.message} sender={message.from.username}></Message></Grid>
                    })
                }
                </Grid>
            </Box>
        </>
    )
}

export default Conversation;

const chatInfoStyles = {
    position: "fixed",
    top: 80,
    left: "50%",
    transform: "translateX(calc(-50% + 125px))",
    p: 1,
    borderRadius: 4
}

const chatContainerStyles = {
    overflow: 'auto',
    height: 'calc(100vh - 200px)',
    pt: 8,

}