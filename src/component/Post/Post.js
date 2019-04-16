import React,{Component} from 'react';

import './Post.css';

class Post extends Component{
    render(){
        return(
          <article className="Post">
            <h1>موضوع</h1>
            <div className="info">
                <div className="Aouther">نویسنده</div>
            </div>
          </article>  
        )
    }
}

export default Post;