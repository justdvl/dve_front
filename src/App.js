import React from 'react';
import './App.css';
import { createBrowserHistory } from 'history';
import './index.css';
import Layout from './components/Layout';
import Home from './Pages/Home';
import KosikPage from './Pages/KosikPage';
import ObchodnePodmienky from './Pages/ObchodnePodmienky';
import OchranaOsobnychUdajov from './Pages/OchranaOsobnychUdajov';
import { Router, Route, Switch } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import StackContextProvider from './utils/StackProvider';

const App = () => {
    const history = createBrowserHistory();

    return (
        <StackContextProvider>
            <Router history={history}>
                {/* <ScrollToTop /> */}
                <CookieConsent buttonText="Rozumiem">
                    Tento web používa súbory cookies. Prechádzaním webu
                    vyjadrujete súhlas s ich používaním.
                </CookieConsent>
                <Layout>
                    <Switch>
                        <Route exact path="/kosik" component={KosikPage} />
                        <Route
                            exact
                            path="/obchodne-podmienky"
                            component={ObchodnePodmienky}
                        />
                        <Route
                            exact
                            path="/ochrana-osobnych-udajov"
                            component={OchranaOsobnychUdajov}
                        />
                        <Route path="/" component={Home} />
                    </Switch>
                </Layout>
            </Router>
        </StackContextProvider>
    );
};

export default App;
