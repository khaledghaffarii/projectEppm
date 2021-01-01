import React, { Component } from 'react'
import { Navbar, Nav,NavDropdown ,Table,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export class NavBAr extends Component {
    render() {
        return (
            <div>
                 <Navbar bg="light" expand="lg">
       
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">

           <Nav className="mr-auto">
           <Nav.Link href="#" >Synthèse du projet </Nav.Link>
           <Nav.Link href="#home">Tache</Nav.Link>
           <Nav.Link href="#link">Achat </Nav.Link>
           <NavDropdown title="Action" id="basic-nav-dropdown" className="ml-10 float-sm-left">
               <NavDropdown.Item href="#action/1">Épinglé le Projet</NavDropdown.Item>
               <NavDropdown.Item href="#action/2">Maquer Comme Fini</NavDropdown.Item>
               <NavDropdown.Item href="#action/3">Marquer Comme Annulé</NavDropdown.Item>
               <NavDropdown.Item href="#action/4">Marquer Comme Non Commencé</NavDropdown.Item>
               <NavDropdown.Item href="#action/5">Marquer Comme En attente</NavDropdown.Item>
           </NavDropdown>
           </Nav>
   </Navbar.Collapse>
</Navbar>
            </div>
        )
    }
}

export default NavBAr
