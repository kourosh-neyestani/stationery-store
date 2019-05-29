import React from 'react';
import ReactDOM from 'react-dom';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import AppRouter from "./AppRouter";
import * as serviceWorker from './serviceWorker';
// Main Styles
import './assets/styles/style.css';

const theme = createMuiTheme({
    direction: 'rtl',
    typography: {
        useNextVariants: true,
        "fontSize": 14,
    },
    palette: {
        primary: {
            main: '#2775FF',
            contrastText: '#fff',
        },
        secondary: {
            main: '#00c5ab',
            contrastText: '#fff',
        },
    },
});

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <AppRouter/>
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
