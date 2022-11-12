import { Grid, Paper, Typography } from "@mui/material";

interface Props {
    type: 'own' | 'other' | 'info';
    content: string;
    sender: string;
}

const Message: React.FC<Props> = (props: Props) => {
    const { type, content, sender } = props;
    return (
        <>
            {
                type === 'info' ? (
                    <Grid container>
                        <Grid item xs={12} sx={ chatContainerStyles }>
                            <Paper sx={ chatInfoStyles }>
                                <Typography fontSize={"13px"}>
                                    { 
                                        content
                                    }
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                ) : (
                    <Grid container direction={type === 'own' ? "row-reverse" : "row"}>
                        <Grid item sx={ { ...chatContainerStyles, justifyContent: type === 'own' ? "flex-end" : "flex-start" } }>
                            <Paper elevation={3} sx={ type === 'own' ? chatOwnStyles : chatOtherStyles }>
                                {
                                    type !== 'own' ? (
                                        <Typography fontSize={"10px"} fontWeight={'600'}>
                                            { sender }
                                        </Typography>
                                    ) : ''
                                }
                                <Typography fontSize={"15px"}>
                                    { 
                                        content
                                    }
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                )
            }
        </>
    )
}

export default Message;

const chatInfoStyles = {
    p: 1,
    borderRadius: 4,
    width: 'fit-content'
}

const chatContainerStyles = {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
}

const chatOwnStyles = {
    p: 1,
    borderRadius: 4,
    minWidth: 25,
}

const chatOtherStyles = {
    ...chatOwnStyles,
    background: "#ADC2DE",
}