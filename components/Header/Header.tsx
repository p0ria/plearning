import { AppBar, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { FiMoon, FiSun, FiMenu } from "react-icons/fi";
import { useTheme } from "../../hooks/useTheme";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}))

export default function Header() {
    const classes = useStyles()
    const { theme, isDarkTheme, setIsDarkTheme } = useTheme();

    return (
        <div className={classes.root}>
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
                        <FiMenu />
                    </IconButton>
                    <Typography className={classes.title} variant="h6">
                        پی لرنینگ
                    </Typography>
                    <div>
                        <IconButton color="inherit" aria-label="theme switcher" onClick={() => setIsDarkTheme(isDarkTheme => !isDarkTheme)}>
                            {isDarkTheme ? <FiSun /> : <FiMoon />}
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div >
    )
}