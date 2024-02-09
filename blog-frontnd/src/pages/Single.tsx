
import Sidbar from '../components/Sidebar';
import SinglePost from '../components/SinglePost';

const Single: React.FC = () => {
  return (
    <div className='single mt-20'>
      <SinglePost />
      <Sidbar />
    </div>
  );
}

export default Single;