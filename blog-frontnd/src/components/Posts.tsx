
import Post from './Post';

interface Props {
  posts: Array<any>;
}

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <div className='Posts'>
      {posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  );
};

export default Posts;