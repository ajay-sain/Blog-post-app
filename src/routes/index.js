import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = React.lazy(() => import('../uiComponent/home'));
const NewPost = React.lazy(() => import('../uiComponent/new'));
const EditPost = React.lazy(() => import('../uiComponent/edit'));
const Post = React.lazy(() => import('../uiComponent/post'));
const NotFound = React.lazy(() => import('../uiComponent/not-found'));

const AppRoutes = () =>{
    return(
        <Switch>
            <Suspense fallback={<div className="loading"></div>}>
                <Route exact path="/" component={Home}/>
                <Route path="/new" component={NewPost}/>
                <Route path="/edit/:id" component={EditPost}/>
                <Route path="/p/:id" component={Post}/>
            </Suspense>
        </Switch>
    )
}

export default AppRoutes;