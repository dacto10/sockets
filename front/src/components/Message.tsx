import { Grid, Paper, Typography } from "@mui/material";

interface Props {
    type: 'own' | 'other' | 'info';
    content: string;
}

const Message: React.FC<Props> = (props: Props) => {
    const { type, content } = props;
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
                        <Grid item xs={6} sx={ { ...chatContainerStyles, justifyContent: type === 'own' ? "flex-end" : "flex-start" } }>
                            <Paper sx={ type === 'own' ? chatOwnStyles : chatOtherStyles }>
                                <Typography fontSize={"14px"}>
                                    { 
                                        content
                                    }
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}></Grid>
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
    borderRadius: 4
}

const chatOtherStyles = {
    ...chatOwnStyles,
    background: "#E8F0FE"
}