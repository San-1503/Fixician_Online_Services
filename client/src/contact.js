import './App.css';
import wrench from './images/wrench.png';

function Contact() {
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

        <section id="contact">
            <h1 class="h-primary center">Contact Us</h1>
            <div id="contacts">
                <p>Email: fixicianpvt@gmail.com</p>
                <p>Telephone: 080-56785678 / 080-32432454 / 080-90905050</p>
                <p>Whatsapp: +91-8090776534 / +91-7886923098 </p>
                <p>Instagram: @fixician_services</p>
                <p>Facebook: @Fixician_Services</p>
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

export default Contact;
