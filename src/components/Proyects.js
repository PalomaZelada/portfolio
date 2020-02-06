import React, { Component } from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBMask, MDBView, MDBCarouselCaption } from "mdbreact";
import Navbar1 from './Navbar';
import '../App.css';

class Proyects extends Component {
    render() {
        return (
          <div>
         <Navbar1 />   
         <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://pokemongolive.com/img/posts/newgraphicsapr2018.jpg"
              alt="Proyecto data lovers"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Maestro Pokemon GO!</h3>
            <p>Aplicación para jugadores de Pokemon Go, para buscar, filtrar y ordenar</p>
            <div>
            <span>            
              <a className="proyLink"
              href="https://palomazelada.github.io/SCL011-data-lovers/src/index.html"
              target="blank">
              Demo 
              </a>
              <a className="proyLink"
              href="https://github.com/PalomaZelada/SCL011-data-lovers"
              target="blank"
              > 
              Código</a></span>
              </div>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://lh5.googleusercontent.com/proxy/ZXvakVk6taUUxk5B0h7vfGeJ6hrLK13KKaqTQ-Zncf6qEmR1-NK5v7FjMdaS_VQV7PfA1cuRRkBui9tpEN2XCAaUYA"
              alt="Proyecto Burger Queen"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Burger Queen</h3>
            <p>Proyecto para restaurant, para toma de pedidos y preparación de pedidos</p>
            <div>
            <span>            
              <a className="proyLink"
              href="https://burger-queen-9b026.firebaseapp.com/"
              target="blank">
              Demo 
              </a>
              <a className="proyLink"
              href="https://github.com/PalomaZelada/SCL011-BurgerQueen"
              target="blank"
              > 
              Código</a></span>
              </div>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Burger Queen</h3>
            <p>Third text</p>
            <div>
            <span>            
              <a className="proyLink"
              href="https://palomazelada.github.io/SCL011-data-lovers/src/index.html"
              target="blank">
              Demo 
              </a>
              <a className="proyLink"
              href="https://github.com/PalomaZelada/SCL011-data-lovers"
              target="blank"
              > 
              Código</a></span>
              </div>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
    </div>
        )
    }
}

export default Proyects;