import { Grid, Paper, TextField, Typography } from "@mui/material";

const Login: React.FC = () => {
    return (
        <>
            <Paper elevation={3}>
                <Grid container direction={"column"}>
                    <Grid item>
                        <Typography variant="h3">Login</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5">Username:</Typography>
                    </Grid>
                    <Grid item>
                        <TextField  />
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default Login;