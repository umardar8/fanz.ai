import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function WebFooter() {
  return (
    <div class="pg-footer">
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-content-column">
            <div class="footer-menu">
              <div class="custom-select">
                <select>
                  <option value="0">English</option>
                  <option value="1">Audi</option>
                  <option value="2">BMW</option>
                  <option value="3">Citroen</option>
                </select>
              </div>
            </div>
          </div>
          <div class="footer-content-column">
            <div class="footer-menu">
              <h2 class="footer-menu-name"> NAVIGATION</h2>
              <ul id="menu-company" class="footer-menu-list">
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Home</a>
                </li>
                <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                  <a href="#">FAQ</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Terms & Conditions</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Trends</a>
                </li>
                <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                  <a href="#">About Us</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Help Center</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-content-column">
            <div class="footer-call-to-action">
              <h2 class="footer-call-to-action-title">Legal</h2>
              <ul id="menu-company" class="footer-menu-list">
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Privacy Policy</a>
                </li>
                <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                  <a href="#">Terms Of service</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Cookie Preferences</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Corporate Information</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-content-column">
            <div class="footer-menu">
              <h2 class="footer-menu-name"> TALK TO US</h2>
              <ul id="menu-quick-links" class="footer-menu-list">
                <li class="menu-item menu-item-type-custom menu-item-object-custom">
                  <a target="_blank" rel="noopener noreferrer" href="#">
                    support@Fanz.ai
                  </a>
                </li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom">
                  <a target="_blank" rel="noopener noreferrer" href="#">
                    +11 8236816 90
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-content-column">
            <div class="footer-call-to-action">
              <h2 class="footer-call-to-action-title"> FOLLOW US</h2>
              <div className="social-icons-container">
                <div className="social-icon facebook">
                  <FontAwesomeIcon icon={faFacebookF} className="icon" />
                </div>

                <div className="social-icon linkedin">
                  <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
                </div>

                <div className="social-icon twitter">
                  <FontAwesomeIcon icon={faTwitter} className="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="footer-copyright-wrapper">
            <p class="footer-copyright-text">
              <a class="footer-copyright-link" href="#" target="_self">
                {" "}
                ©2023. FANz.ai All rights reserved.{" "}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
