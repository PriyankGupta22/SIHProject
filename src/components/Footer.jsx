import "./Footer.css";
import loctionIcon from "../assets/location3.svg";
import telephoneIcon from "../assets/telephone.svg";
import emailIcon from "../assets/mail.svg";
import facebookIcon from "../assets/facebook.svg";
import twitterIcon from "../assets/X.svg";
import instagramIcon from "../assets/instagram.svg";
import youtubeIcon from "../assets/youtube.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">

          {/* Column 1: Branding */}
          <div className="footer-col">
            <div className="footer-brand">
              <div className="brand-icon">
                <img className="invert" src={loctionIcon} alt="Location" />
              </div>
              <span className="brand-title">Jharkhand Tourism</span>
            </div>
            <p className="gov-text">Government of Jharkhand</p>
            <p className="tagline">
              Experience the land of forests, culture, and natural wonders
            </p>
            <div className="social-links">
              <a href="#" className="social-btn">
                <img className="invert" src={facebookIcon} alt="Facebook" />
              </a>
              <a href="#" className="social-btn">
                <img className="invert" src={twitterIcon} alt="Twitter" />
              </a>
              <a href="#" className="social-btn">
                <img className="invert" src={instagramIcon} alt="Instagram" />
              </a>
              <a href="#" className="social-btn">
                <img className="invert" src={youtubeIcon} alt="YouTube" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">Top Destinations</a></li>
              <li><a href="#">Cultural Heritage</a></li>
              <li><a href="#">Activities</a></li>
              <li><a href="#">Plan Trip</a></li>
              <li><a href="#">Accommodation</a></li>
              <li><a href="#">Transportation</a></li>
            </ul>
          </div>

          {/* Column 3: Tourist Information */}
          <div className="footer-col">
            <h3 className="footer-heading">Tourist Information</h3>
            <ul className="footer-links">
              <li><a href="#">Travel Guidelines</a></li>
              <li><a href="#">Permits</a></li>
              <li><a href="#">Weather Info</a></li>
              <li><a href="#">Safety Tips</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Feedback</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer-col">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <img className="invert" src={loctionIcon} alt="Location" /> Directorate of Tourism, Government of Jharkhand, Ranchi
              </div>
              <div className="contact-item">
                <img className="invert" src={telephoneIcon} alt="Phone" /> +91-651-1234567 / Toll Free: 1800-123-456
              </div>
              <div className="contact-item">
                <img className="invert" src={emailIcon} alt="Email" /> tourism@jharkhand.gov.in
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
