import { NavLink } from "react-router-dom";

interface Category {
  name: string;
}

interface Props {
  post: {
    photo: string;
    categories: Category[];
    title: string;
    _id: any;
    createdAt: string;
    desc: string;
  };
}

const Post: React.FC<Props> = ({ post }) => {
  const PF = "http://localhost:5000/images/";

  console.log(post.photo);
  return (
    <div className="Post">
      {post.photo && <img src={PF + post.photo} alt="" />}
      <div className="Post-Info">
        <div className="PostCats">
          {post.categories.map((cat, index) => (
            <span key={index}>{cat.name}</span>
          ))}
        </div>
        <NavLink
          style={{ textDecoration: "none", color: "black" }}
          to={`/post/${post._id}`}
        >
          <span className="postTitle">{post.title}</span>
        </NavLink>
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;
