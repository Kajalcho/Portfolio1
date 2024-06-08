# Portfolio1
Kajal Kumari Portfolio Website
@Created By:
Name: Kajal Kumari
Email: kajal143698@gmail.com
🚀 Overview:
This project is a personal portfolio website for Kajal Kumari. It showcases her skills, projects, and contact information. Below is a detailed description of the code structure and its components.

🚀 Level 1:
1. HTML Structure
The HTML file provides the skeleton of the website. Key sections include the header, home, about, services, skills, portfolio, and contact.

Basic Structure: The HTML document is structured with the DOCTYPE declaration, html, head, and body tags.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kajal Kumari Portfolio</title>
    <link rel="stylesheet" href="style.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
</head>
<body>
    ...
</body>
</html>
Header: The header includes the logo and navigation links.

<header class="header">
    <a href="#" class="logo">kajal</a>
    <nav class="navbar">
        <a href="#home" style=" --1:1" class="active">Home</a>
        <a href="#about" style=" --1:2" class="">About</a>
        ...
    </nav>
</header>
Home Section: The home section introduces the user.

<section class="home" id="home">
    <div class="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Kajal Kumari</h1>
        ...
    </div>
</section>
About Section: Provides detailed information about the user.

<section class="about" id="about">
    <div class="about-img">
        <img src="image/img0.jpg" alt="">
    </div>
    <div class="about-text">
        <h2>About <span>Me</span></h2>
        <h4>Full Stack Developer</h4>
        ...
    </div>
</section>
Services Section: Describes the services offered.

<section class="services" id="services">
    <div class="container">
        <h1 class="sub-title">My <span>Services</span></h1>
        <div class="services-list">
            <div>
                <i class='bx bx-code' style='color:#0303f9'></i>
                <h2>Web Developer</h2>
                ...
            </div>
            ...
        </div>
    </div>
</section>
Skills Section: Highlights technical and professional skills.

<h1 class="sub-titles">My <span>Skills</span></h1>
<section>
    <div class="flexs">
        <div class="container1" id="Skills">
            <h1 class="heading1">Technical skills</h1>
            ...
        </div>
        ...
    </div>
</section>
Portfolio Section: Displays projects.

<section class="portfolio" id="portfolio">
    <div class="container">
        <h1 class="sub-title">My <span>Portfolio</span></h1>
        <div class="portfolio-list">
            <div class="portfolio-item">
                <img src="image/img1.png" alt="">
                ...
            </div>
            ...
        </div>
    </div>
</section>
Contact Section: Allows users to get in touch.

<section class="contact" id="contact">
    <div class="container">
        <h1 class="sub-title">Contact <span>Me</span></h1>
        <div class="contact-content">
            <div class="contact-info">
                <div class="contact-item">
                    <i class='bx bxs-map'></i>
                    <div>
                        <h5>Address</h5>
                        <p>New Delhi, India</p>
                    </div>
                </div>
                <div class="contact-item">
                    <i class='bx bxs-envelope'></i>
                    <div>
                        <h5>Email</h5>
                        <p>kajal143698@gmail.com</p>
                    </div>
                </div>
                ...
            </div>
            <div class="contact-form">
                <form>
                    <input type="text" name="name" placeholder="Your Name" required>
                    <input type="email" name="email" placeholder="Your Email" required>
                    <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                    <button type="submit" class="btn-box">Send Message</button>
                </form>
            </div>
        </div>
    </div>
</section>
2. CSS Styling
The CSS file provides the styling for the website, ensuring it is visually appealing and responsive.

Base Styles: Set up basic styles for the entire document.

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
body {
    line-height: 1.5;
    background-color: #f3f3f3;
}
Header: Styles for the navigation bar.

.header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 1000;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.header .logo {
    font-size: 30px;
    font-weight: bold;
    padding: 15px 30px;
}
.header .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
}
.header .navbar a {
    padding: 15px 30px;
    color: #333;
    text-decoration: none;
    transition: color 0.3s ease;
}
.header .navbar a.active, .header .navbar a:hover {
    color: #007bff;
}
Home Section: Styles for the home section.

.home {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: url('images/home-bg.jpg') no-repeat center center/cover;
}
.home .home-content {
    text-align: center;
    color: #fff;
}
.home .home-content h3, .home .home-content h1, .home .home-content h3 span {
    margin-bottom: 20px;
}
.home .home-content h1 {
    font-size: 60px;
}
.home .home-content .text {
    color: #007bff;
}
.home .home-content .btn-box {
    margin-top: 30px;
    padding: 15px 30px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
.home .home-content .btn-box:hover {
    background-color: #0056b3;
}
About Section: Styles for the about section.

.about {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
    background-color: #fff;
}
.about .about-img {
    flex: 1;
    text-align: center;
}
.about .about-img img {
    max-width: 100%;
    border-radius: 10px;
}
.about .about-text {
    flex: 2;
    padding: 0 50px;
}
.about .about-text h2 {
    font-size: 36px;
    margin-bottom: 20px;
}
.about .about-text h4 {
    font-size: 24px;
    margin-bottom: 20px;
}
.about .about-text p {
    margin-bottom: 20px;
}
.about .about-text .btn-box {
    padding: 15px 30px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
.about .about-text .btn-box:hover {
    background-color: #0056b3;
}
Services Section

: Styles for the services section.

.services {
    background-color: #f3f3f3;
    padding: 50px 0;
}
.services .container {
    text-align: center;
}
.services .sub-title {
    font-size: 36px;
    margin-bottom: 30px;
}
.services .services-list {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
}
.services .services-list div {
    flex: 1;
    padding: 20px;
    margin: 20px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}
.services .services-list div i {
    font-size: 50px;
    margin-bottom: 20px;
    color: #007bff;
}
.services .services-list div h2 {
    font-size: 24px;
    margin-bottom: 20px;
}
.services .services-list div p {
    color: #666;
    line-height: 1.6;
}
JavaScript Code
The JavaScript file includes functionality for the typing animation on the home page.

var typed = new Typed(".auto-type", {
    strings: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});
This code uses the Typed.js library to create a typing animation effect on the homepage.

Conclusion
This project demonstrates a well-structured and styled portfolio website using HTML, CSS, and JavaScript. The website is responsive and includes sections for showcasing personal information, skills, services, portfolio projects, and contact details.
