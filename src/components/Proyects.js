import React, { Component } from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBMask, MDBView, MDBCarouselCaption } from "mdbreact";
import Navbar1 from './Navbar';
import '../App.css';
import foto4 from '../images/foto4.jpg'
class Proyects extends Component {
    render() {
        return (
          <div>
         <Navbar1 />   
         <div className="carruselContainer">
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
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2596d0e-8292-46b8-ad65-d5ec8d67f020/d3ei2p6-2c7a7cd7-c5e5-403f-baf2-ecccac3ba278.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QyNTk2ZDBlLTgyOTItNDZiOC1hZDY1LWQ1ZWM4ZDY3ZjAyMFwvZDNlaTJwNi0yYzdhN2NkNy1jNWU1LTQwM2YtYmFmMi1lY2NjYWMzYmEyNzguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.n3hhHRZ0UITG4nvmAcdziiq51jmz2KzYWnJcAgjEKQY"
              alt="Proyecto data lovers"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Maestro Pokemon</h3>
            <p className="resumen">Aplicación para jugadores de Pokemon Go, con data de la primera generación</p>
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
            <p className="resumen">Proyecto para restaurant, para toma de pedidos y preparación de pedidos</p>
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
              src={foto4}
              alt="Proyecto Feminist PRW"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Feminist PWR</h3>
            <p className="resumen">Red social orientada a mujeres, para tratar temas feministas </p>
            <div>
            <span>            
              <a className="proyLink"
              href="https://github.com/PalomaZelada/SCL011-Social-Network"
              target="blank">
              Demo 
              </a>
              <a className="proyLink"
              href="https://github.com/PalomaZelada/SCL011-Social-Network"
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
    </div>
        )
    }
}

export default Proyects;