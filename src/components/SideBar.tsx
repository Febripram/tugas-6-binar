import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link as={Link} to="/dashboard">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/dashboard/cars">
          Cars
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
