import { Grid, Typography } from "@mui/material"
import { Link, useLocation } from "react-router-dom"
import CircleIcon from '@mui/icons-material/Circle';
import { IUser } from "../utils";
import { useEffect, useState } from "react";

interface Props {
    user: IUser
}

const Online: React.FC<Props> = (props: Props) => {
    const { user: { id, username, isActive} } = props;
    const location = useLocation();
    const [selected, setSelected] = useState(false);
    
    useEffect(() => {
        if (location.pathname.slice(1) === id) setSelected(true);
        else setSelected(false);
    }, [location.pathname, id])

    return (
        <Grid item sx={ { ...itemContainerStyles, ...(selected ? { background: '#ADC2DE' } : {}) } }>
            <Link to={`/${id}`}>
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
        background: '#ADC2DE'
    },
    borderBottom: '1px solid #ADC2DE'
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