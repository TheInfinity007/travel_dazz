import { makeStyles } from '@mui/styles';
import { createTheme, alpha } from '@mui/material/styles';

const theme = createTheme();
console.log(theme);

export default makeStyles(() => ({
    title: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('sm')]: { marginLeft: 0, width: '100%' },
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.down('md')]: { width: '100%' },
        [theme.breakpoints.up('md')]: { width: '20ch' },
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));
