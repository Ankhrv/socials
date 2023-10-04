import React from 'react';
import s1 from './myposts.module.css';
import Posts from './post/post';
const Myposts = (props) => {

  let postData = [
    {id: 1,message: 'h1 how are you',likes: 12},
    {id: 2,message: 'h1 how are you2',likes: 163},
    {id: 3,message: 'h1 how are you3',likes: 125}
    // {id: 4,message: 'You'},
    // {id: 5,message: 'You'},
    // {id: 6,message: 'You'}
 ]

  return (
    <div className={s1.postsblock}>
      <h3>my post</h3>
      <div>
       
          <div className={s1.texta}>
            <textarea></textarea>
          </div>
        <div className={s1.but}>
        <button>Add post</button></div>
       
      </div>
      <div className={s1.posts}>
        <Posts message={postData[0].message} likes={postData[0].likes} />
        <Posts message={postData[1].message} likes={postData[1].likes} />
        <Posts message={postData[2].message} likes={postData[2].likes} />
        {/* <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts /> */}


      </div>
    </div>

  );

}

export default Myposts;