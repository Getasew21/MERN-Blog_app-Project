
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useLocation, NavLink } from "react-router-dom";
import { Context } from "../context/Context";

interface Post {
  _id: string;
  photo: string;
  title: string;
  username: string;
  createdAt: string;
  desc: string;
}

const SinglePost: React.FC = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState<Post>({
    _id: "",
    photo: "",
    title: "",
    username: "",
    createdAt: "",
    desc: ""
  });
  const PF="http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get<Post>(
          `http://localhost:5000/api/posts/get/${path}`
        );
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc);
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    console.log(user?.username);
    try {
      await axios.delete<void>("http://localhost:5000/api/posts/delete/" + post._id, {
        data: { username: user?.username}
      });
      console.log("Post deleted successfully");
      setIsDeleted(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async () => {
    console.log(post.username)
   
    try {
      await axios.put<void>("http://localhost:5000/api/posts/update/" + post._id, {username: user?.username,
        title,
        desc
      });

      console.log("Post updated successfully");
      setUpdateMode(false);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(post.photo)

  return (
    <div className="singlePost">
      {isDeleted ? (
        <div className="deleted">
        <p className="deletedMessage">Post has been deleted!</p>
        </div>
      ) : (
        <div className="singlePost-wrapper">
  {post.photo && <img src={PF + post.photo} alt='' />}      

          {updateMode ? (
            <input
              type="text"
              value={title}
              className="singlePostTitleInput"
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <h1 className="singlePost-Title">
              {title}
              {post.username === user?.username && (
                <div className="singlePostEdit">
                  <i className="fa-solid fa-pen" onClick={() => setUpdateMode(true)}></i>
                  <i className="fa-solid fa-trash" onClick={handleDelete}></i>
                </div>
              )}
            </h1>
          )}
          <div className="singlePostinfo">
            <span>
              Author:
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to={`/?user=${post.username}`}
              >
                <b>{post.username}</b>
              </NavLink>
            </span>
            <span className="singlePostDate">
              {new Date(post.createdAt).toDateString()}
            </span>
          </div>
          {updateMode ? (
            <textarea
              className="singlePostDescInput"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          ) : (
            <p className="singlePost-desc">{desc}</p>
          )}
          {updateMode && (
            <button className="singlePostButton" onClick={handleUpdate}>
              Update
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SinglePost;