import { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import profile_pic from '../src/assets/images/profile_pic.jpg';
import play_plex_img from '../src/assets/images/play_plex.png'
import post_redesign_img from '../src/assets/images/post_redesign.jpg'
import site_tools_img from '../src/assets/images/site_tools_img.png'

function App() {

  return (
    <>
    <Container fluid className='p-0'>
      <Row className="justify-content-md-center m-0 px-0">
        <Col  lg="4" md="6">
          <img src={profile_pic} alt="" className='w-100' />
        </Col>
      </Row>
    
    <Navbar bg="dark" className='py-3' data-bs-theme="dark">
        <Container fluid>
          <Nav className="m-auto">
            <Nav.Link href="#home" className="nav_link">home</Nav.Link>
            <Nav.Link href="#features" className="nav_link">ux design</Nav.Link>
            <Nav.Link href="#pricing" className="nav_link">other work</Nav.Link>
            <Nav.Link href="#pricing" className="nav_link">about me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>    
      <Row className="justify-content-md-center p-4 m-0">
        <Col lg="5" md="7" className='text-start'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur alias tempore, corporis magnam vel magni harum vero doloribus voluptates nemo libero aspernatur nisi necessitatibus voluptatibus ipsa rem beatae accusantium quaerat.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur alias tempore, corporis magnam vel magni harum vero doloribus voluptates nemo libero aspernatur nisi necessitatibus voluptatibus ipsa rem beatae accusantium quaerat.</p>
          <Row className="justify-content-center mt-5">
            <Button variant="info" className='button px-4 py-3'>My Resume</Button>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center  flex-column p-4 m-0">
        <Col lg="10" className='text-center py-5'>
        <h2 className='section_heading'>recent projects</h2>
        </Col>
        <Col lg="10">
        <hr />
        </Col>
        <Col lg="10">
          <Row className="justify-content-center align-items-center  m-0">
            <Col lg="4" className='p-3'>
              <h4 className='section_heading py-4'>site tools</h4>
              <img src={site_tools_img} alt="" className='w-100' />
              <Button variant="info" className='button px-4 py-3 mt-5'>site tools</Button>
            </Col>
            <Col lg="4" className='p-3'>
              <h4 className='section_heading py-4'>hufpost redesign</h4>
              <img src={post_redesign_img} alt="" className='w-100' />
              <Button variant="info" className='button px-4 py-3 mt-5'>hufpost redesign</Button>
            </Col>
            <Col lg="4" className='p-3'>
              <h4 className='section_heading py-4'>play plex</h4>
              <img src={play_plex_img} alt="" className='w-100' />
              <Button variant="info" className='button px-4 py-3 mt-5'>play plex</Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="justify-content-center footer align-items-center  flex-column mx-0">
        <Col lg="12" className='text-center footer_col py-3'>
          <div className='d-flex justify-content-center py-3'>
          <i className="fa-regular fa-envelope"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-tumblr"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          </div>
          <span>powered by Mohtasham</span>
        </Col>
      </Row>
      </Container>

    </>
  )
}

export default App
