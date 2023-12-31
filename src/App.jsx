

import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

// components
import TodoApp from './components/demo/todo/todoApp.jsx';
import UserContainer from './components/user/UserContainer';
import AdminContainer from './components/admin/AdminContainer';

// util
import checkLoginAdmin from 'src/components/util/checkLoginAdmin';
import LoginAdminContainer from 'src/components/admin/content/login/LoginAdminContainer';
import ReloadContainer from "src/components/admin/content/login/ReloadContainer";
import BasicAd from './Seo';

// const
// const { Header, Footer, Content } = Layout;

function App() {
    return (
        <BrowserRouter>
            <BasicAd/>
            <Switch>
                <Route path={'/demo'} component={TodoApp}/>
                <Route path={'/admin'} component={AdminContainer}/>
                <Route path={'/admin-login'} component={LoginAdminContainer}/>
                <Route path={'/reload'} component={ReloadContainer}/>
                <Route path={'/'} component={UserContainer}/>
            </Switch>
        </BrowserRouter>
    );
}

export default React.memo(App);
