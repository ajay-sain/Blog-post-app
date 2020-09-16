import React from 'react';
import '../media/css/new.css'
import Back from './back'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost, updatePost } from '../actions';

class EditPost extends React.Component {
    constructor(){
        super()
        this.state = {
            title: "",
            catagory: "",
            content: ""
        }
    }
    componentWillReceiveProps(newProps){
        this.setState({
            title: newProps.response.post && newProps.response.post.title,
            catagory: newProps.response.post && newProps.response.post.catagory,
            content: newProps.response.post && newProps.response.post.content
        })
    }
    componentDidMount(){
        let id = this.props.match.params.id
        this.setState({id: id})
        this.props.dispatch({type: "FETCH_POST_DATA", payload: id})
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.dispatch({type: "UPDATE_POST_DATA", payload: {
            id: this.state.id,
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
                            <input type="text" placeholder="title" name="title" defaultValue={this.state.title}/>
                        </div>
                        <div className="user-input">
                            <label>Catagory</label>
                            <input type="text" placeholder="catagory" name="catagory" defaultValue={this.state.catagory}/>
                        </div>
                        <div className="user-input">
                            <label>Content</label>
                            <textarea placeholder="main content" name="content" defaultValue={this.state.content}></textarea>
                        </div>
                        <div className="user-input">
                            <button type="submit" className="submit">Update</button>
                            <button type="reset"  className="cancle">Reset</button>
                        </div>
                    </form>
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

const mapDispatchToProps = (dispatch) =>{
    return {
        dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditPost);