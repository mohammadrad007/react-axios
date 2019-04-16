import React,{Component} from 'react';
import axios from 'axios';

import FullPost from '../../component/FullPost/FullPost';
import NewPost from '../../component/NewPost/NewPost';
import Post from '../../component/Post/Post';

import './Blog.css';


class Blog extends Component{
    state = {
        posts:[],
        selectPostId : null,
        error : false
    }
    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(Response=>{
            const posts = Response.data.slice(0,6);
            const updatePost = posts.map(post=>{
                return(
                    {
                        ...post,
                        author : 'rad'
                    }
                )
            })
            this.setState({posts : updatePost})
        })
        .catch(error=>{
            console.log(error)
            this.setState({error : true});
        })
    }
    postSelectHandler =(id)=>{
        this.setState({
            selectPostId:id
        })
    }
    render(){
        let posts = <p className="alert">مشکل در اتصال به سرور... </p>
        if(!this.state.error){
            posts = this.state.posts.map(post=>{
                return(
                <Post 
                title = {post.title}
                key={post.id}     
                author = {post.author} 
                clicked = {()=>{this.postSelectHandler(post.id)}}
                />
                )
            })
        }

        return(
            <>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id = {this.state.selectPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </>
        );
    }
}
export default Blog;