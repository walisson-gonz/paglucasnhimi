import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        width: 275,
        marginRight: theme.spacing(2)
    },
    button: {
        width: '100%'
    },
}));

const tags = [
    { id: 1, name: 'ReactJs' },
    { id: 2, name: 'javaScript' },
    { id: 3, name: 'DotNet' },
    { id: 4, name: 'Php' },
    { id: 5, name: 'MaterialDesign' },
    { id: 6, name: 'WebDev' },
]

function NavBar() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Button variant='outlined' color='secondary' className={classes.button}>Registrar Gratis</Button>
            <ListSubheader>{'tags em alta'}</ListSubheader>
            {
                tags.map((item) => (
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`#${item.name}`} />
                    </ListItem>
                ))
            }
            <ListItem button>Exibir mais tags</ListItem>
        </Paper>

    )
}
export default NavBar;