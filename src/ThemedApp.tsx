import React, { useMemo, useState } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "styled-components";
import { MuiThemeProvider, StylesProvider } from "@material-ui/core/styles";
import App from "./App";

const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
});

function ThemedApp() {
    const [darkMode, setDarkMode] = useState(false);

    const theme = useMemo(() => {
        return createMuiTheme({
            palette: {
                type: darkMode ? "dark" : "light",
                primary: {
                    main: "#fff",
                    dark: "#000"
                },
                secondary: {
                    main: "#fff",
                    dark: "#000"
                },
                background: {
                    default: darkMode ? "#000" : "#fff",
                    paper: darkMode ? "#000" : "#fff",
                }
            },
            typography: {
                fontFamily: [
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    '"Roboto"',
                    '"Oxygen"',
                    '"Ubuntu"',
                    '"Cantarell"',
                    '"Fira Sans"',
                    '"Droid Sans"',
                    '"Helvetica Neue"',
                    'sans-serif'
                ].join(','),
                fontWeightLight: 300,
                fontWeightRegular: 400,
                fontWeightMedium: 500,
                fontWeightBold: 700,
                fontSize: 18,
                htmlFontSize: 20,
                h1: {
                    fontSize: "2.5rem",
                    lineHeight: "2.75rem",
                    fontWeight: 500,
                },
                h2: {
                    fontSize: "2rem",
                    lineHeight: "2.25rem",
                    fontWeight: 500,
                },
                h3: {
                    fontSize: "1.75rem",
                    lineHeight: "2.0rem",
                    fontWeight: 500,
                },
                h4: {
                    fontSize: "1.5rem",
                    lineHeight: "1.75rem",
                    fontWeight: 500,
                },
                h5: {
                    fontSize: "1.25rem",
                    lineHeight: "1.5rem",
                    fontWeight: 500,
                },
                h6: {
                    fontSize: "1rem",
                    lineHeight: "1.25rem",
                    fontWeight: 500,
                },
                subtitle1: {
                    fontSize: "1.5rem",
                    lineHeight: "1.75rem",
                    fontWeight: 500,
                },
                subtitle2: {
                    fontSize: "1.25rem",
                    lineHeight: "1.5rem",
                    fontWeight: 500,
                },
                body1: {
                    fontSize: "1rem",
                    fontWeight: 400,
                },
                body2: {
                    fontSize: "1.2rem",
                    fontWeight: 400,
                },
                button: {
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    textTransform: 'none'
                }
            },
            props: {
                MuiButtonBase: {
                    disableRipple: true
                }
            },
            overrides: {
                MuiTabs: {
                    indicator: {
                        transition: "none"
                    }
                },
                MuiMenuItem: {
                    root: {
                        fontSize: "1.2rem"
                    }
                }
            }
        })
    }, [darkMode]);

    return (
        <StylesProvider injectFirst>
            <MuiThemeProvider theme={theme}>
                <ThemeProvider theme={theme}>
                    <React.StrictMode>
                        <Router history={history}>
                            <App darkMode={darkMode} setDarkMode={setDarkMode} />
                        </Router>
                    </React.StrictMode>
                </ThemeProvider>
            </MuiThemeProvider>
        </StylesProvider>
    );
}

export default ThemedApp;
