import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ForumIcon from '@mui/icons-material/Forum';
import { setUserAction } from "../store/actions/session";
import { IUser } from "../utils";
import { socket } from "..";
import { useAppSelector } from "../store/hooks";

const Login: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const navigate = useNavigate();
    const session = useAppSelector(state => state.session);

    useEffect(() => {
        if (session.id !== "") navigate("/");
    }, [session.id, navigate])

    const login = () => {
        const user: IUser = {
            username: inputValue,
            id: socket.id,
            isActive: true
        }
        setUserAction(user);
        
        navigate('/');
    }

    const setRequiredValueAlert = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(true);
    }

    return (
        <>
            <Paper sx={loginStyles} elevation={3} component={"form"} onSubmit={login} onInvalid={ setRequiredValueAlert }>
                <Grid container direction={"column"} sx={containerStyles}>
                    <Grid item>
                        <ForumIcon color="primary" sx={ iconStyles } />
                    </Grid>
                    <Grid item>
                        <Typography variant="h1">Random Chat App</Typography>
                    </Grid>
                    <Grid item width={"100%"}>
                        <TextField error={error} helperText={error ? "Please provide a username" : ''} required label="Username" fullWidth value={inputValue} onChange={ (e) => setInputValue(e.target.value)}/>
                    </Grid>
                    <Grid item sx={ buttonContainerStyles }>
                        <Button variant={"contained"} type={"submit"}>JOIN</Button>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default Login;

const loginStyles = {
    width: 500,
    height: 350,
    borderRadius: 2
}

const containerStyles = {
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    pl: 10,
    pr: 10,
    pt: 6,
    pb: 6
}

const buttonContainerStyles = {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end"
}

const iconStyles = {
    fontSize: 50
}