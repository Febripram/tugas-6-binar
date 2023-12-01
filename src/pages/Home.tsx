import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Button variant='warning'> 
        <Link to="/login" className='white'>Login</Link>
      </Button>
    </div>
  );
};

export default Home;
