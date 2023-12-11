const header = `
<nav class="navbar">
    <!-- LOGO -->
    <a href="./index.html" class="navbar-logo"><img src="./img/paradise-logo.png" alt="logo" /><span class="logo-text">Paradise EL</span></a> 
    
    <!-- NAVIGATION MENU -->
    <section class="nav-links">
    
      <!-- USING CHECKBOX HACK -->
      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>
    
      <!-- NAVIGATION MENUS -->
      <section class="menu">
    
        <ul class="social-media-icons">
          <li><a href="index.html"><img src="./img/sm_icons/fb.png"  ></a></li>
          <li><a href="index.html"><img src="./img/sm_icons/instagram.png"  ></a></li>
          <li><a href="index.html"><img src="./img/sm_icons/youtube.png"  ></a>
        </ul>
        <nav class="nav-menu"><li><a href="./about_us.html">About</a></li>
          <li class="services">
            <a href="#">Services</a>
            <!-- DROPDOWN MENU -->
            <ul class="dropdown">
              <li><a href="./services_education.html">Education</a></li>
              <li><a href="./services_childcare.html">Childcare</a></li>
              <!-- <li><a href="#">Engagement</a></li>
              <li><a href="#">Enrichment</a></li> -->
              <li><a href="./services_support.html">Support</a></li>
            </ul>
          </li>
    
          <li><a href="./pricing.html">Pricing</a></li>
          <li><a href="./contact.html">Contact</a></li>
        </nav> 
        
    
      </section>
    </section>
    </nav>
`;
export default header;
