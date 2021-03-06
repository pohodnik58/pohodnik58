import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from '../../contexts/AuthContext';
import Header from '../Header';
import ProtectedRoute from '../ProtectedRoute';
import logo from '../../imgs/pohColor.svg';
import img from '../../imgs/tree1.png';
import routes from '../../router';

class App extends React.Component {
    getRoutes() {
        return routes.map(route => {
            const RouteComponent = route.private ? ProtectedRoute : Route;
            return React.createElement(RouteComponent, {
                exact: !!route.exact,
                key: route.path,
                path: route.path,
                component: route.component
            });
        });
    }

    render() {
        return (
            <div>
                <AuthProvider>
                    <Router>
                        <Header />
                        <Switch>
                            {this.getRoutes()}
                        </Switch>
                    </Router>
                </AuthProvider>
            </div>
        );
    }
}

export default App;
