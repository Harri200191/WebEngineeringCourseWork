<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bonsai Pets - Home</title>
    @vite(['resources/css/styles.css', 'resources/js/home.js'])
</head>
<body>

<header>
    <h1>Bonsai Pets</h1>
    <p>Your one-stop shop for Bonsai pets!</p>
</header>

<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/service">Services/Products</a>
    <a href="/contact">Contact</a>
</nav>
<div class="container">
    <section id="welcomeSection">
        <h2>Welcome to Bonsai Pets</h2>
        <p id="welcomeText">Discover the joy of owning a Bonsai pet! We offer various Bonsai animals that are cute and easy to take care of.</p>
        <div class="button-group">
            <button id="changeStyleBtn" class="styled-button">Change Text Style</button>
            <button id="resetStyleBtn" class="styled-button">Reset Text Style</button>
        </div>
    </section>

    <section>
        <h2>Customer Testimonials</h2>
        <blockquote>
            “I didn't realize how easy it was to get started with a Bonsai pet! The tutorials were great, and the website made it so easy to follow along.”
        </blockquote>
        <blockquote>
            “I loved how I could customize my Bonsai pet journey by booking workshops. The DIY kits were fun too!”
        </blockquote>
    </section>

    <section>
        <h2>Picture Gallery</h2>
        <div class="image-gallery">
            <img src="assets/images/pet2.jpg" alt="Bonsai Pet 1">
            <img src="./assets/images/pet3 (1).jpeg" alt="Bonsai Pet 2">
        </div>
    </section>    
</div>

<footer>
    <p> 2024 Bonsai Pets | Follow us on 
        <a href="#" class="social-link">Facebook</a>
        <a href="#" class="social-link">Instagram</a>
        <a href="#" class="social-link">Twitter</a>
    </p>
</footer>

</body>
</html>
