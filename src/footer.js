import React from 'react';
import './App.css';

const Footer = () => {
    return(
        <>
      
		<footer class="footer-distributed">
 
			<div class="footer-left">
 
				<h3>E-<span>COMMERACE</span></h3>
 
				<p class="footer-links">
					<a href="#">Home</a>
					·
					<a href="#">Blog</a>
					·
					<a href="#">Pricing</a>
					·
					<a href="#">About</a>
					·
					<a href="#">Faq</a>
					·
					<a href="#">Contact</a>
				</p>
 
				<p class="footer-company-name">E-Commerace &copy; 2020</p>
			</div>
 
			<div class="footer-center">
 
				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>#2/4/2-1, 6th main basavalingappa nagar billekhali bangalore-76</span> Karnataka, India</p>
				</div>
 
				<div>
					<i class="fa fa-phone"></i>
					<p>+91-9886226470</p>
				</div>
 
				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">contact@E-Commerace.com</a></p>
				</div>
 
			</div>
 
			<div class="footer-right">
 
				<p class="footer-company-about">
					<span>About the company</span>
					E-Commerace is a blog for web developers &amp; SEO Learner.
				</p>
 
				<div class="footer-icons">
 
					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>
 
				</div>
 
			</div>
 
		</footer>
        </>
    )
}

export default Footer;