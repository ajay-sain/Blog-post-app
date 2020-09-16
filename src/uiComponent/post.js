import React from 'react';
import Button from './back';
import '../media/css/new.css';
import { fetchPost } from '../actions';
import { connect } from 'react-redux';

class Post extends React.Component {
    constructor(){
        super()
        this.state = {
            id: ""
        }
    }
    edit(){
        this.props.history.push('/edit/'+this.state.id)
    }
    like(){
        this.props.dispatch({type: "LIKE_POST", payload: this.state.id})
        this.updateData()
    }
    delete(){
        this.props.dispatch({type: "DELETE_POST_DATA", payload: this.state.id})
        this.props.history.push("/");
    }
    updateData(){
        let id = this.props.match.params.id
        this.setState({id: id})
        this.props.dispatch({type: "FETCH_POST_DATA", payload: id})
    }
    componentDidMount(){
        this.updateData()
    }
    render() {
        console.log(this.props.response.post && this.props.response.post.like)
        return(
            <div>
                <div className="header">
                    <ul className="list">
                        <li className="list-item">
                            <Button/>
                        </li>
                        <li className="list-item">
                            <ul className="list">
                                <li className="list-item"><button className="like" onClick={()=>this.like()}>{this.props.response.post && this.props.response.post.like ? "Dislike" : "Like"}</button></li>
                                <li className="list-item"><button className="edit" onClick={()=>this.edit()}>Edit</button></li>
                                <li className="list-item"><button className="delete" onClick={()=>this.delete()}>Delete</button></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="clear-fix"></div>
                <div className="create-context">
                    <form>
                        <div className="user-input">
                            <label>Title: </label>
                            <p className="content">{this.props.response.post && this.props.response.post.title}</p>
                        </div>
                        <div className="user-input">
                            <label>Catagory: </label>
                            <p className="content">{this.props.response.post && this.props.response.post.catagory}</p>
                        </div>
                        <div className="user-input">
                            <label>Content: </label>
                            <p className="content">{this.props.response.post && this.props.response.post.content}</p>
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

export default connect(mapStateToProps,mapDispatchToProps)(Post);