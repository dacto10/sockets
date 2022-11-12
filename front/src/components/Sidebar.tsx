import { Box, Grid } from "@mui/material";
import { useAppSelector } from "../store/hooks";
import Online from "./Online";

const Sidebar: React.FC = () => {
    const users = useAppSelector(state => state.message.privates).map(msg => msg.with)
    return (
        <Box bgcolor={'white'} position="static" height={'calc(100vh - 64px)'} sx={ { overflowY: 'auto' } }>
            <Grid container direction={'column'}>
                {
                    users.map((user) => (<Online user={user} key={user.id}/>))
                }
            </Grid>
        </Box>
    )
}

export default Sidebar;