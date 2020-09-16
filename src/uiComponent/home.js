import React from 'react';
import '../media/css/home.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends React.Component {
    
    viewPost(id){
        const url = "/p/" + id;
        this.props.history.push(url);
    }

    render() {
        return(
            <div>
                <div className="header">
                    <Link to="new" className="user-action">New Post</Link>
                </div>
                <div className="clear-fix"></div>
                <div className="context">
                        {
                            this.props.response.posts && this.props.response.posts.map( post => {
                                return (<div key={post.id} className="post-item" onClick={()=>this.viewPost(post.id)}>{post.title}</div>)
                            })
                        }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        response : state.post
    }
}

export default connect(mapStateToProps,null)(Home);