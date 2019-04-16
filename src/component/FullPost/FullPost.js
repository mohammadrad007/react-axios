import React,{Component} from 'react';

import './FullPost.css';

class FullPost extends Comment{
    render(){
        let Post = <p>لطفا یک نوشته انتخاب نمایید</p>

        Post = (
            <div className='FullPost'>
                <h1>موضوغ</h1>
                <p>محتوا</p>
                <div className='Edit'>
                    <button className='Delete'>حذف</button>
                </div>
            </div>
        )
        return Post;
    }
}

export default FullPost;