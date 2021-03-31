import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormControls";

const maxLength100 = maxLengthCreator(100);

const AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newPostText'}
                       validate={[required, maxLength100 ]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
}

const ReduxNewPostForm = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm);

const MyPosts = React.memo(props => {
    console.log('render')
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <ReduxNewPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});

export default MyPosts;