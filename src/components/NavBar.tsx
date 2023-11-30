import { Navbar, Nav, Container } from 'react-bootstrap';

type CustomNavbar = {
  username: string
  avatar: string
}

const CustomNavbar = ({ username, avatar }: CustomNavbar) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Your Dashboard</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Hello, {username}</Nav.Link>
          <Nav.Link href="#link">
            <img
              src={avatar}
              alt="User Avatar"
              style={{ width: '30px', borderRadius: '50%' }}
            />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
