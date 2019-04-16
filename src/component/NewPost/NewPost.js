import React,{Component} from 'react';

import './NewPost.css';

class NewPost extends Component{
    state = {
        title : '',
        content : '',
        author : ''
    }

    render(){
        return(
            <div className="NewPost">
                <h1>اضافه کردن نوشته</h1>
                <label>موضوع</label>
                <input type="text" value={this.state.title} onChange={(event)=>{this.setState({title : event.target.value})}}></input>
                <label>محتوا</label>
                <textarea rows="4" value={this.state.content} onChange={(event)=>{this.setState({content : event.target.value})}}></textarea>
                <label>نویسنده</label>
                <select value={this.state.author} onChange={(event)=>{this.setState({author : event.target.value})}}>
                    <option value="Mohammad">Mohammad</option>
                    <option value="Rad">Rad</option>
                </select>
                <button>اضافه کردن پست</button>
            </div>
        )
    }
}