import React,{Component} from 'react';

import FullPost from '../../component/FullPost/FullPost';
import NewPost from '../../component/NewPost/NewPost';
import Post from '../../component/Post/Post';

import './Blog.css';

export default class Blog extends Component{
    render(){
        return(
            <>
                <section className="Posts">
                    <Post />
                    <Post />
                    <Post />
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </>
        );
    }
}