import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { mqttConnect } from './controllers/mqtt/mqtt';
import App from "./App";

function ThemedApp() {
    const appTheme = useAppSelector(state => state.theme);
    const isDark = appTheme.value === "dark";
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(mqttConnect());
    }, [dispatch]);

    const theme = useMemo(() => {
        return createTheme({
            palette: {
                primary: {
                    main: "#fff",
                    dark: "#000",
                    contrastText: isDark ? "#fff" : "#000",
                },
                secondary: {
                    main: "#000",
                    dark: "#fff",
                    contrastText: isDark ? "#000" : "#fff",
                },
                background: {
                    default: isDark ? "#0A0C10" : "#fafafa",
                    paper: isDark ? "#0D1117" : "#fff",
                },
                error: {
                    light: "#e57373",
                    main: "#f44336",
                    dark: "#d32f2f",
                    contrastText: "#fff"
                },
                text: {
                    primary: isDark ? "#fff" : "#000",
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
            components: {
                MuiButtonBase: {
                    defaultProps: {
                        disableRipple: true
                    }
                },
                MuiButton: {
                    defaultProps: {
                        disableRipple: true,
                    },
                },
                MuiTabs: {
                    styleOverrides: {
                        indicator: {
                            transition: "none"
                        }
                    }
                },
                MuiMenuItem: {
                    styleOverrides: {
                        root: {
                            fontSize: "1.2rem"
                        }
                    }
                },
                MuiDrawer: {
                    styleOverrides: {
                        paper: {
                            borderColor: isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)",
                        }
                    }
                },
                MuiDivider: {
                    styleOverrides: {
                        root: {
                            borderColor: isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)",
                        }
                    }
                },
                MuiListItemIcon: {
                    styleOverrides: {
                        root: {
                            color: isDark ? "rgba(255,255,255,0.54)" : "rgba(0,0,0,0.54)",
                            minWidth: "40px"
                        }
                    }
                }
            }
        })
    }, [isDark]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <React.StrictMode>
                <BrowserRouter>
                    <Helmet>
                        <meta name="theme-color" content={isDark ? "#000" : "#fff"} />
                    </Helmet>
                    <App />
                </BrowserRouter>
            </React.StrictMode>
        </ThemeProvider>
    );
}

export default ThemedApp;
