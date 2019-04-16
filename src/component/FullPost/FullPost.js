import React,{Component} from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component{
    state = {
        loadPost : null,
    }
    componentWillUpdate(){
        if(this.props.id){
            if(!this.state.loadPost || (this.state.loadPost && this.state.loadPost.id)  !== this.props.id){
                axios.get('http://jsonplaceholder.typicode.com/posts/' + this.props.id)
                .then(Response=>{
                   this.setState({loadPost : Response.data})
                })
            }
    }
    }
    deletePostHandler = ()=>{
            axios.delete('http://jsonplaceholder.typicode.com/posts/' + this.props.id)
            .then(Response=>{
                console.log(Response);
            })
    }
    render(){
        let Post = <p className="alert">لطفا یک نوشته انتخاب نمایید</p>
        if(this.props.id){
            Post = <p className="alert">در حال بارگزاری...</p>
        }
        if(this.state.loadPost){
            Post = (
                <div className='FullPost'>
                    <h1>{this.state.loadPost.title}</h1>
                    <p>{this.state.loadPost.body}</p>
                    <div className='Edit'>
                        <button onClick={this.deletePostHandler} className='Delete'>حذف</button>
                    </div>
                </div>
            )
        }
           
        return Post;

        }
       
    }


export default FullPost;