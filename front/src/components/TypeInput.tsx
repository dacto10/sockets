import { AppBar, IconButton, TextField, Toolbar } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const TypeInput = () => {
    
    return (
        <>
            <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, width: "83.3%", background: "#91b8ff", boxShadow: "unset" }} component={"form"}>
                <Toolbar sx={{ gap: 2 }}>
                    <TextField size="small" variant="outlined" color="primary" fullWidth></TextField>
                    <IconButton color="inherit" aria-label="open drawer" type="submit">
                        <SendIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default TypeInput;