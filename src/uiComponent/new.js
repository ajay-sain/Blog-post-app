import React from 'react';
import '../media/css/new.css'
import Back from './back'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class NewPost extends React.Component {
    
    handleSubmit(event){
        event.preventDefault();
        this.props.dispatch({type: "ADD_POST_TO_STORE", payload: {
            id: Date.now(),
            like: false,
            title: event.target.title.value,
            catagory: event.target.catagory.value,
            content: event.target.content.value
        }});
        this.props.history.push("/");
    }
    render() {
        return(
            <div>
                <div className="header">
                    <Back/>
                    <div className="clear-fix"></div>
                </div>
                <div className="create-context">
                    <form onSubmit={(event)=>this.handleSubmit(event)}>
                        <div className="user-input">
                            <label>Title</label>
                            <input type="text" name="title" placeholder="title" />
                        </div>
                        <div className="user-input">
                            <label>Catagory</label>
                            <input type="text" name="catagory" placeholder="catagory"/>
                        </div>
                        <div className="user-input">
                            <label>Content</label>
                            <textarea placeholder="main content" name="content"></textarea>
                        </div>
                        <div className="user-input">
                            <button type="submit" className="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        dispatch
    }
}

export default connect(null,mapDispatchToProps)(NewPost);