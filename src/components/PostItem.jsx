import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useHistory} from 'react-router-dom';
import PostRec from './PostRec';

const PostItem = (props) => {
    const router = useHistory()

    return (
        <div className="post">
            {/* <div className="post__content">
                <strong>{props.post.code}{' '}{props.post.ln}</strong>
                {' '}{props.post.country}{' '}{props.post.city}
            </div> */}
            <PostRec pst={props.post} />
            <div className="post__btns">
                <MyButton onClick={() => router.push(`/posts/${props.post.code}`)}>
                    Open
                </MyButton>
                <MyButton onClick={() => props.remove(props.post)}>
                    Add Msg
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;
