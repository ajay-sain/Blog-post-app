import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import './media/css/shared.css';
import { fetchPosts } from './actions';
import { connect } from 'react-redux';

class App extends React.Component {
    
    componentDidMount(){
        if(!this.props.response.posts)
            this.props.dispatch(fetchPosts());
    }
    
    render() {
        return(
            <div>
                <Router>
                    <AppRoutes/>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        response : state.post
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);