import { Box, Grid, Paper, Typography } from "@mui/material"
import { IMessage } from "../utils";
import Message from "./Message";

interface Props {
    messages: IMessage[];
    with?: string;
}

const Conversation: React.FC<Props> = (props: Props) => {
    const { messages } = props;
    const fakeMessages = [{
        from: "user1",
        message: "Hola manito"
    },
    {
        from: "",
        message: "Hola manitoo"
    },
    {
        from: "user2",
        message: "Hola manito"
    },
    {
        from: "user1",
        message: "Hola manito"
    },
    {
        from: "",
        message: "Hola manitoo"
    },
    {
        from: "user2",
        message: "Hola manito"
    },
    {
        from: "user1",
        message: "Hola manito"
    },
    {
        from: "",
        message: "Hola manitoo"
    },
    {
        from: "user2",
        message: "Hola manito"
    },
    {
        from: "user1",
        message: "Hola manito"
    },
    {
        from: "",
        message: "Hola manitoo"
    },
    {
        from: "user2",
        message: "Hola manito"
    },
    {
        from: "user1",
        message: "Hola manito"
    },
    {
        from: "",
        message: "Hola manitoo"
    },
    {
        from: "user2",
        message: "Hola manito buenas tardes hiansadas da asdasd asd asda sdas dasf asdgasgasdageaegfasdagesa adsafawgaeasfgeafsafeafsafeafasf agw sdasdasdasdfa s das dasd asda gfsdsa"
    }]
    return (
        <>
            <Box sx={ chatContainerStyles }>
                <Paper sx={ chatInfoStyles }>
                    <Typography fontSize={"13px"}>
                        { 
                            props.with  ? `Conversation with ${props.with}` : "General chat"
                        }
                    </Typography>
                </Paper>
                <Grid container spacing={1} direction={"column"} sx={ { marginBottom: 1 } }>
                {
                    fakeMessages.map((message, index) => {
                        const type = message.from === "" ? "info" : message.from === "user1" ? "own" : "other";
                        return <Grid item><Message type={type} content={message.message} key={index}></Message></Grid>
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