import { AppBar, IconButton, TextField, Toolbar } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import { useLocation } from "react-router-dom";
import { sendMessageAction } from "../store/actions/messages";
import { IUser } from "../utils";

const TypeInput = () => {
    const [value, setValue] = useState<string>('');
    const location = useLocation();
    const [to, setTo] = useState<IUser | undefined>(undefined);
    const users = useAppSelector(state => state.message.privates);


    const sendMessage = (e: React.FormEvent<HTMLDivElement>) => {
        e.preventDefault();
        sendMessageAction(value, to);
        setValue('');
    }

    const setRequiredValueAlert = (event: React.FormEvent<HTMLDivElement>) => {
        event.preventDefault();
    }

    useEffect(() => {
        if (location.pathname !== '/') {
            setTo(users.map(msg => msg.with).find(user => user.id === location.pathname.slice(1)));
        } else {
            setTo(undefined);
        }
    }, [location.pathname, users])
    
    return (
        <>
            <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, width: "83.3%", boxShadow: "unset" }} component={"form"} onInvalid={ setRequiredValueAlert } onSubmit={ sendMessage } >
                <Toolbar sx={{ gap: 2 }}>
                    <TextField className="override" required size="small" variant="outlined" color="secondary" fullWidth value={value} onChange={e => setValue(e.target.value)} focused/>
                    <IconButton color="inherit" aria-label="open drawer" type="submit">
                        <SendIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default TypeInput;