import './App.css';
import wrench from './images/wrench.png';

function Appointments() {
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
            <h1 class="h-primary center">Welcome to Fixician! How may we help you?</h1>
            <div id="contacts">
                <a href="add"><button class="btn">Book Appointment</button></a>
                <a href="delete"><button class="btn">Delete Appointment</button></a>
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

export default Appointments;
