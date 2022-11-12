import { Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import CircleIcon from '@mui/icons-material/Circle';
import { IUser } from "../utils";

interface Props {
    user: IUser
}

const Online: React.FC<Props> = (props: Props) => {
    const { user: { username, isActive} } = props;
    return (
        <Grid item sx={ itemContainerStyles }>
            <Link to={`/${username}`}>
                <Grid container columnSpacing={6}>
                    <Grid item xs={2} sx={ itemStyles }>
                        <CircleIcon color={isActive ? 'success' : 'error'} />
                    </Grid>
                    <Grid item sx={ itemStyles }>
                        <Typography sx={ textStyles }>{username}</Typography>
                    </Grid>
                </Grid>
            </Link>
        </Grid>
    )
}

export default Online;

const itemContainerStyles = {
    pl: 3,
    pr: 3,
    pt: 2,
    pb: 2,
    color: 'gray',
    ':hover': {
        background: '#E8F0FE'
    },
    borderBottom: '1px solid #E8F0FE'
}

const itemStyles = {
    justifyContent: 'start',
    alignItems: 'center',
}

const textStyles = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    maxWidth: '151px',
    textOverflow: 'ellipsis'
}