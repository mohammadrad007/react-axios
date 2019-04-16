import React,{Component} from 'react';

import './Post.css';

class Post extends Component{
    render(){
        return(
          <article className="Post" onClick={this.props.clicked}>
            <h1>{this.props.title}</h1>
            <div className="info">
                <div className="Aouther">نویسنده مطلب : {this.props.author} </div>
            </div>
          </article>  
        )
    }
}

export default Post;