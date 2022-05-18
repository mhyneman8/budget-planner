import { Navbar, Container, Nav } from "react-bootstrap"

export default function NavBar() {
  return (
    // <Stack direction="horizontal" gap="2">

    // </Stack>
    <>
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="" className="bold" >Monthly Budget</Navbar.Brand>
                <Nav className="float-end border-bottom border-light">
                    <Nav.Link href="" className="border-bottom border-primary border-2">Budget</Nav.Link>
                    <Nav.Link href="" className="border-bottom border-dark border-1">Expert Advice</Nav.Link>
                    <Nav.Link href="" className="border-bottom border-dark border-1">Transactions</Nav.Link>
                    <Nav.Link href="" className="border-bottom border-dark border-1">Community</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
    
  )
}
