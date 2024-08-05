import './App.css';
import wrench from './images/wrench.png';
import img1 from './images/50a3300a69a61a1af350f03922392c9f--asian-paints-paint-brands.jpg';
import img2 from './images/582589_15768797_2847433_5139bb1a_image.png';
import img3 from './images/download.png';
import img4 from './images/ef8ae5b2a53c6d3be9e281d99241d635.jpg';
import img5 from './images/1856-768x591.png';


function Client() {
  return (
    <body>
        <nav id="nav">
            <div id="logo">
                <img src={wrench} alt="Fixician.in"></img>
            </div>
            <ul>
            <li class="item"><a href="home">Home</a></li>
                <li class="item"><a href="services">Our Services</a></li>
                <li class="item"><a href="client">Our Clients</a></li>
                <li class="item"><a href="contact">Contact Us</a></li>
                <li class="item"><a href="book">Appointments</a></li>
            </ul>    
        </nav>

        <section id="client">
            <h1 class="h-primary center">Our Clients</h1>
            <div id="clients">
                <div class="client-item">
                    <img src={img1} alt="Client 1"></img>
                </div>
                <div class="client-item">
                    <img src={img2} alt="Client 2"></img>
                </div>
              
                <div class="client-item">
                    <img src={img3} alt="Client 3"></img>
                </div>
                <div class="client-item">
                    <img src={img4} alt="Client 4"></img>
                </div>
                <div class="client-item">
                    <img src={img5} alt="Client 5"></img>
                </div>
            </div>
        </section>

        <footer>
            <div class="center">
                Copyright &copy; www.Fixician.in. All Rights Reserved.
            </div>
        </footer>
    </body>
  );
}

export default Client;
