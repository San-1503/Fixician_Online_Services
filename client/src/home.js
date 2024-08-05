import './App.css';
import wrench from './images/wrench.png';

function Home() {
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

        <section id="home">
            <h1 class="h-primary">WELCOME TO FIXICIAN!</h1>
            <p>Ever felt lazy doing all the chores at home by yourself? Ever had your househelp quit on you?</p>
            <p>Ever left your house in disarray?</p>
            <br></br>
            <p>We, here at Fixician, are always available for fulfilling all your needs!</p>
            <a href="add"><button class="btn">Book Now</button></a>
        </section>

        <footer>
            <div class="center">
                Copyright &copy; www.Fixician.in. All Rights Reserved.
            </div>
        </footer>
        </body>
  );
}

export default Home;
