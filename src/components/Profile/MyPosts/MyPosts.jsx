import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
const MyPosts = (props) => {
  let postsElements = props.postsData.map((p) => (
    <Post mes={p.message} like={p.likeCount} key={p.id} />
  ));

  let onAddPost = () => {
    props.addPost();
    //add post to bll
  };
  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text); //update post in state(bll)
  };
  return (
    <div className={s.myPosts_items}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            value={props.newPostText}
          ></textarea>
        </div>
        <div>
          <button onClick={onAddPost} className={s.btn}>
            Add post
          </button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
