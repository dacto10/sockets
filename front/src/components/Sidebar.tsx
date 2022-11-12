import { Box, Grid } from "@mui/material";
import Online from "./Online";

const Sidebar: React.FC = () => {
    const users = [{id: "asd", username: "Pepee", isActive: false}, {id: "", username: "Pepe", isActive: true}]
    return (
        <Box bgcolor={'white'} position="static" height={'calc(100vh - 64px)'} sx={ { overflowY: 'auto' } }>
            <Grid container direction={'column'}>
                {
                    users.map((user) => (<Online user={user}/>))
                }
            </Grid>
        </Box>
    )
}

export default Sidebar;