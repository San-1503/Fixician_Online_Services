import './App.css';
import wrench from './images/wrench.png';
import img1 from './images/pexels-matilda-wormwood-4099264.jpg';
import img2 from './images/engineer-man-testing-optical-fiber_23-2148323460.jpg';
import img3 from './images/istockphoto-1208084866-612x612.jpg';
import img4 from './images/pexels-ksenia-chernaya-5691630.jpg';

function Services() {
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

        <section id="services">
            <h1 class="h-primary center">OUR SERVICES</h1>
            <div id="services">
                <div class="box">
                    <img src={img1} alt=""></img>
                    <h2 class="h-secondary center">Cleaning and Pest Control</h2>
                    <p class="center">Here at Fixician, we offer bathroom and kitchen cleaning, pest control, sofa and carpet cleaning and upholstery cleaning, all at very afforable prices!</p>
                </div>
                <div class="box">
                    <img src={img2} alt=""></img>
                    <h2 class="h-secondary center">Plumbers, Electricians and Carpenters</h2>
                    <p class="center">Here at Fixician, we employ trained and experienced workers, for all types of plumbing services such as tap, shower, sink and flushtank repair; electricians for fixing any electrical faults; as well as carpenters for all kinds of furniture and other woodwork!</p>
                </div>
                <div class="box">
                    <img src={img3} alt=""></img>
                    <h2 class="h-secondary center">Appliance Repair</h2>
                    <p class="center">Here at Fixician, we offer trusted repair services for several appliances such as: ACs, microwaves, refrigerators, washing machines, vacuum cleaners and many more!</p>
                </div>
                <div class="box">
                    <img src={img4} alt=""></img>
                    <h2 class="h-secondary center">Home Painting</h2>
                    <p class="center">Here at Fixician, we offer painting services such as full house painting, exterior painting, texture painting, wallpapers and waterproofing performed by trained professionals!</p>
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

export default Services;
