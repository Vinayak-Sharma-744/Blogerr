import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

const Home = () => {
  const [postLists, setPostLists] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  });
  // const deletePost = async (id) => {
  //   const postDoc = doc(db, "posts", id)
  //   await deleteDoc()
  // }
  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
              </div>
              {/* <div className="deletePost">
                <button onClick={() => { deletePost(post.id) }}>&#128465;</button>
              </div> */}
            </div>
            <div className="postTextContainer">{post.postText}</div>
            {/* <h3>{post.author.name }</h3> */}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
