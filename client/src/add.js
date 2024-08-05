import './App.css';
import wrench from './images/wrench.png';

function Add() {
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

        <section id="book">
            <h1 class="h-primary center">Book Your Services</h1>
            <div id="contact-box">
                <form method="POST" action="/add">
                    <div class="form-group">
                        <label for="name">Name: </label>
                        <input type="text" name="name" id="name" placeholder="Enter your name" required></input>
                    </div>
                    <div class="form-group">
                        <label for="email">Email: </label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" required></input>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number: </label>
                        <input type="phone" name="phone" id="phone" placeholder="Enter your phone" required></input>
                    </div>
                    <div class="form-group">
                        <label for="message">Address: </label>
                        <textarea name="address" id="address" cols="30" rows="10" required></textarea>
                    </div>
                    <div class="form-group">
                        <label for="message">Service Required: </label>
                        <select name="services" id="services">
                            <option value="cleaning">Cleaning and Pest Control</option>
                            <option value="plumbers">Plumbers, Electricians and Carpenters</option>
                            <option value="repair">Appliance Repair</option>
                            <option value="painting">Home Painting</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="message">Date:</label>
                        <input type="date" id="date" name="date"></input>
                    </div>
                    <div class="form-group">
                        <label for="message">Time Slot: </label>
                        <select name="time" id="time">
                            <option value="morning">7:00 AM to 11:00 AM</option>
                            <option value="afternoon">11:00 AM to 2:00 PM</option>
                            <option value="evening">2:00 PM to 5:00 PM</option>
                            <option value="night">5:00 PM to 8:00 PM</option>
                        </select>
                    </div>
                    <input type="submit" value="Book Now" id="submit"></input>
                </form>
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

export default Add;
