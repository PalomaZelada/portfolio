import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap';
import './components.css';
import ScrollableAnchor from 'react-scrollable-anchor'

class Proyects extends Component {
  render() {
    return (
      <ScrollableAnchor id="proyects">
      <div>
        <section className="section-title">
        <h3>Proyectos Destacados</h3>
        </section>
        <div className="borderCard">
          <Row>
            <Col sm="4">
              <Card body>
                <CardTitle className="cardTitle">Burger Queen</CardTitle>
                <CardImg top width="100%" src="https://lh5.googleusercontent.com/proxy/ZXvakVk6taUUxk5B0h7vfGeJ6hrLK13KKaqTQ-Zncf6qEmR1-NK5v7FjMdaS_VQV7PfA1cuRRkBui9tpEN2XCAaUYA" alt="Burger Queen" />
                <CardText>Proyecto para restaurant, para toma de pedidos y preparación de pedidos.</CardText>
                <Button color="primary"
                  href="https://burger-queen-9b026.firebaseapp.com/"
                  target="blank">
                  Demo</Button>
                <Button color="primary"
                  href="https://github.com/PalomaZelada/SCL011-BurgerQueen"
                  target="blank"
                >Código</Button>
              </Card>
            </Col>
            <Col sm="4">
              <Card body>
                <CardTitle className="cardTitle">Maestro Pokemon Go</CardTitle>
                <CardImg top width="100%" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2596d0e-8292-46b8-ad65-d5ec8d67f020/d3ei2p6-2c7a7cd7-c5e5-403f-baf2-ecccac3ba278.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QyNTk2ZDBlLTgyOTItNDZiOC1hZDY1LWQ1ZWM4ZDY3ZjAyMFwvZDNlaTJwNi0yYzdhN2NkNy1jNWU1LTQwM2YtYmFmMi1lY2NjYWMzYmEyNzguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.n3hhHRZ0UITG4nvmAcdziiq51jmz2KzYWnJcAgjEKQY" alt="Maestro Pokemon GO" />
                <CardText>Aplicación para jugadores de Pokemon Go, con data de la primera generación.</CardText>
                <Button color="primary"
                  href="https://palomazelada.github.io/SCL011-data-lovers/src/index.html"
                  target="blank"
                >Demo</Button>
                <Button color="primary"
                  href="https://github.com/PalomaZelada/SCL011-data-lovers"
                  target="blank"
                >Código</Button>
              </Card>
            </Col>
            <Col sm="4">
              <Card body>
                <CardTitle className="cardTitle">Feminist PWR</CardTitle>
                <CardImg top width="100%" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2596d0e-8292-46b8-ad65-d5ec8d67f020/d3ei2p6-2c7a7cd7-c5e5-403f-baf2-ecccac3ba278.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QyNTk2ZDBlLTgyOTItNDZiOC1hZDY1LWQ1ZWM4ZDY3ZjAyMFwvZDNlaTJwNi0yYzdhN2NkNy1jNWU1LTQwM2YtYmFmMi1lY2NjYWMzYmEyNzguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.n3hhHRZ0UITG4nvmAcdziiq51jmz2KzYWnJcAgjEKQY" alt="Feminist PWR" />
                <CardText>Red social creada para mujeres para tratar temas de feminismo y de minorias</CardText>
                <Button color="primary"
                  href="https://palomazelada.github.io/SCL011-data-lovers/src/index.html"
                  target="blank"
                >Demo</Button>
                <Button color="primary"
                href="https://github.com/PalomaZelada/SCL011-data-lovers"
                  target="blank"
                >Código</Button>
              </Card>
            </Col>
          </Row>
        </div>
        <section className="section-title">
        <h3>Herramientas</h3>
        </section>
        <div className="skills-direction">
        <div className="container-skills">
          <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank">
          <svg className="skills-size" viewBox="0 0 128 128">
<path d="M2 1v125h125v-125h-125zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065-.001-10.115.046-20.188.046-30.188h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
</svg> 
                     </a>
          <a href="https://es.reactjs.org/" target="_blank">
          <svg className="skills-size" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="2500px" height="2246px" viewBox="0 0 2500 2246" enable-background="new 0 0 2500 2246" space="preserve">
<g>
	<path  d="M1970.9,740.1c-23.5-8.1-47.2-15.5-71-22.4c4-16.1,7.6-32.2,11-48.4c53.8-261,18.6-471.3-101.4-540.5
		c-115.1-66.4-303.4,2.8-493.5,168.3c-18.7,16.3-37.1,33.2-54.9,50.4c-12-11.5-24.2-22.7-36.6-33.8
		c-199.3-176.9-399-251.5-518.9-182.1c-115,66.6-149.1,264.2-100.7,511.6c4.8,24.5,10.3,48.9,16.3,73.1c-28.3,8-55.6,16.6-81.7,25.7
		c-233.6,81.4-382.8,209.1-382.8,341.5c0,136.8,160.1,273.9,403.5,357.1c19.7,6.7,39.6,12.9,59.7,18.7
		c-6.5,26.1-12.3,52.4-17.3,78.8c-46.2,243.1-10.1,436,104.6,502.2c118.5,68.3,317.3-1.9,510.9-171.1c15.3-13.4,30.7-27.6,46-42.4
		c19.4,18.7,39.3,36.8,59.6,54.4c187.5,161.4,372.7,226.5,487.3,160.2c118.4-68.5,156.8-275.8,106.9-528.1
		c-3.8-19.3-8.3-38.9-13.2-59c14-4.1,27.7-8.4,41-12.8c253-83.8,417.5-219.3,417.5-357.9C2363.3,950.6,2209.3,822.1,1970.9,740.1z
		 M1377.8,368.2c162.9-141.8,315.2-197.7,384.5-157.7c73.9,42.6,102.6,214.5,56.2,439.8c-3,14.7-6.4,29.3-9.9,43.9
		c-91.5-21.1-190.9-36.8-295-46.6c-60.6-86.3-123.5-164.8-186.5-232.8C1343.6,398.8,1360.6,383.3,1377.8,368.2z M808.3,1196.6
		c20,38.5,40.8,76.6,62.6,114.2c22.2,38.3,45.3,76.1,69.3,113.3c-72.3-8.1-140.4-19-203.4-32.7
		C756.2,1328.5,780.2,1263.1,808.3,1196.6z M808.1,974.9C780.7,909.8,757.2,845.8,738,784c63-14.1,130.1-25.6,200-34.3
		c-23.4,36.5-46,73.6-67.6,111.2C848.8,898.4,828,936.4,808.1,974.9z M858.2,1085.8c29-60.5,60.3-119.8,93.9-177.9v0
		c33.5-58.1,69.2-114.9,107-170.3c65.6-5,132.9-7.6,200.9-7.6c68.3,0,135.7,2.6,201.3,7.6c37.4,55.3,72.9,111.9,106.3,169.7
		c33.6,58,65.3,117,95.1,177c-29.5,60.6-61.1,120.2-94.8,178.6h0c-33.4,58.1-68.7,115-105.9,170.8c-65.5,4.7-133.1,7.1-202.1,7.1
		c-68.7,0-135.5-2.1-199.8-6.3c-38.1-55.6-74.1-112.7-107.8-171.1C918.8,1205.5,887.4,1146.2,858.2,1085.8z M1649.6,1310.1
		c22.2-38.5,43.5-77.5,64-116.9c29.5,67.2,54.4,132.3,74.1,194.1c-64,14.6-133.1,26.4-205.8,35.1
		C1605.2,1385.4,1627.7,1348,1649.6,1310.1z M1712.7,975c-20.4-38.7-41.6-77-63.5-114.8c-21.6-37.3-43.9-74.1-67.1-110.3
		c70.4,8.9,137.9,20.7,201.2,35.2C1764.3,845.9,1740.6,909.7,1712.7,975z M1261.1,482.1c43.5,47.1,87,99.7,129.8,156.8
		c-86.9-4.1-173.9-4.1-260.8-0.1C1173,582.3,1216.9,529.8,1261.1,482.1z M752.8,213.2c73.8-42.7,237.1,18.2,409.1,171
		c11,9.8,22,20,33.1,30.6c-64.1,68.8-127.4,147.2-188,232.6c-103.8,9.6-203.1,25.1-294.4,45.8c-5.6-22.5-10.7-45.2-15.2-68v0
		C655.9,413.2,683.5,253.3,752.8,213.2z M645.2,1368.4c-18.3-5.2-36.5-10.9-54.5-17c-107.6-36.8-196.4-84.6-257.4-136.7
		c-54.7-46.9-82.4-93.4-82.4-131.2c0-80.3,119.8-182.8,319.6-252.5c25.1-8.7,50.4-16.7,75.9-23.9c27.6,89.8,63.8,183.7,107.5,278.7
		C709.8,1182.2,673.1,1277.6,645.2,1368.4z M1156,1798.1c-85.6,74.8-171.4,127.9-247,154.6h0c-67.9,24-122,24.7-154.8,5.8
		c-69.6-40.1-98.5-195.1-59.1-403c4.7-24.6,10.1-49,16.1-73.3c90.4,20,190.4,34.4,297.4,43c61,85.9,125,164.9,189.4,234
		C1184.3,1772.6,1170.3,1785.5,1156,1798.1z M1263.7,1691.6c-44.7-48.2-89.2-101.5-132.8-158.9c42.2,1.7,85.3,2.5,129.1,2.5
		c45,0,89.4-1,133.2-3C1350.2,1590.6,1306.8,1644,1263.7,1691.6z M1836.1,1822.7c-13.1,70.8-39.6,118.1-72.2,137
		c-69.5,40.3-218.3-12.1-378.6-150.1c-18.4-15.8-36.9-32.7-55.5-50.6c62.2-68,124.3-147.1,185-234.9
		c106.7-9.5,207.5-24.9,298.8-46.1c4.5,18.2,8.5,36,11.9,53.4C1847.5,1643,1850.7,1743.9,1836.1,1822.7z M1916.1,1351.9
		L1916.1,1351.9c-12.1,4-24.5,7.9-37.1,11.6c-27.9-88.4-65.6-182.4-111.7-279.5c44-94.8,80.2-187.6,107.4-275.5
		c22.6,6.5,44.5,13.4,65.6,20.7c204.2,70.3,328.7,174.2,328.7,254.3C2269,1168.8,2134.5,1279.5,1916.1,1351.9z"/>
	<path  d="M1260,1280.5c108.8,0,197-88.2,197-197c0-108.8-88.2-197-197-197c-108.8,0-197,88.2-197,197
		C1063,1192.3,1151.2,1280.5,1260,1280.5z"/>
</g>
</svg>
          </a>
          <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank">
            <svg className="skills-size" viewBox="0 0 128 128">
              <path d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387 10.015-112.107h-109.936zm89.126 26.539l-.627 7.172-.276 3.289h-52.665000000000006l1.257 14h50.156000000000006l-.336 3.471-3.233 36.119-.238 2.27-28.196 7.749v.002l-.034.018-28.177-7.423-1.913-21.206h13.815000000000001l.979 10.919 15.287 4.081h.043v-.546l15.355-3.875 1.604-17.579h-47.698l-3.383-38.117-.329-3.883h68.939l-.33 3.539z"></path>
            </svg>         </a>
          <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank">
            <svg className="skills-size" viewBox="0 0 128 128">
              <path d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626 10.063-112.837h-110.48zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336-28.36 7.844v.001l-.022.019-28.311-7.888-1.917-21.739h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229 1.632-18.001h-32.282999999999994l-.277-3.043-.631-7.129-.331-3.828h34.748999999999995l1.264-14h-52.926l-.277-3.041-.63-7.131-.332-3.828h69.281l-.331 3.862z"></path>
            </svg>
          </a>
          <a href="https://firebase.google.com/?hl=es" target="_blank">
            <svg className="skills-size" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title /><path d="M3.89 15.673L6.255.461A.542.542 0 0 1 7.27.289L9.813 5.06 3.89 15.673zm16.795 3.691L18.433 5.365a.543.543 0 0 0-.918-.295l-14.2 14.294 7.857 4.428a1.62 1.62 0 0 0 1.587 0l7.926-4.428zM14.3 7.148l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984 14.3 7.148z" /></svg>
          </a>
          <a href="https://git-scm.com/" target="_blank">
            <svg className="skills-size" viewBox="0 0 128 128">
              <path d="M124.737 58.378l-55.116-55.114c-3.172-3.174-8.32-3.174-11.497 0l-11.444 11.446 14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679-3.78 3.78-9.901 3.78-13.683 0-2.842-2.844-3.545-7.019-2.105-10.521l-13.048-13.048-.002 34.341c.922.455 1.791 1.063 2.559 1.828 3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683.934-.933 2.014-1.638 3.167-2.11v-34.659c-1.153-.472-2.231-1.172-3.167-2.111-2.862-2.86-3.551-7.06-2.083-10.576l-14.313-14.313-37.792 37.79c-3.175 3.177-3.175 8.325 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858c3.174-3.176 3.174-8.327-.001-11.501z"></path>
            </svg>
          </a>
          <a href="https://github.com/" target="_blank">
            <svg className="skills-size" viewBox="0 0 128 128">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
            </svg>
          </a>
          <a href="https://nodejs.org/es/" target="_blank">


            <svg className="skills-size" viewBox="0 0 128 128">
              <path d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path>
            </svg>
          </a>
          <a href="https://getbootstrap.com/" target="_blank">
          </a>
          </div>
        </div>
      </div>
      </ScrollableAnchor>
    )
  }
}

export default Proyects;