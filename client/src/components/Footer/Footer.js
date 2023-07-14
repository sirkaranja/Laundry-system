import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './footer.css'
// Rest of the component code...


function Footer() {
  return (
    <div class="footer">
    <div class="container">     
        <div class="row">                       
            <div class="col-lg-4 col-sm-4 col-xs-12">
                <div class="single_footer">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#">Commercial and Industrial Laundry</a></li>
                        <li><a href="#">Pick-up and Delivery</a></li>
                        <li><a href="#">Dry Cleaning </a></li>
                        <li><a href="#">Specialty Items</a></li>
                        <li><a href="#">Ironing/Pressing</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="single_footer single_footer_address">
                    <h4>Opening Hours</h4>
                    <ul>
                        <li><td><i class="far fa-clock"></i>   Monday -Friday</td>
                                <td>8:00am - 6:00pm</td></li>
                        <li> <td><i class="far fa-clock"></i>    Saturday</td>
                                <td>9:00am - 5:30pm</td></li>
                        <li><td><i class="far fa-clock"></i>     Sunday</td>
                                <td>9:30am - 12:00pm</td></li>
                        <li><td><i class="far fa-clock"></i>    Holidays</td>
                                <td>9:30am - 12:00pm</td></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="single_footer single_footer_address">
                    <h4>Subscribe today</h4>
                    <div class="signup_form">                           
                        <form action="#" class="subscribe">
                            <input type="text" class="subscribe__input" placeholder="Enter Email Address" />
                            <button type="button" class="subscribe__btn"><i class="fas fa-paper-plane"></i></button>
                        </form>
                    </div>
                </div>
                <div class="social_profile">
                    <ul>
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>                          
            </div>         
        </div> 
        <div class="row">
            <div class="col-lg-12 col-sm-12 col-xs-12">
                <p class="copyright">&copy; {new Date().getFullYear()}  <a href="#">Skyliq Solutions. All rights reserved.</a>.</p>
            </div>               
        </div>              
    </div>
</div>
    
   
  )
}

export default Footer