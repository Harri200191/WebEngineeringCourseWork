<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bonsai Pets - Contact Us</title>
    @vite(['resources/css/styles.css', 'resources/js/contact.js'])
</head>
<body>

<header>
    <h1>Bonsai Pets</h1>
    <p>Contact Us for any inquiries or information!</p>
</header>

<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/service">Services/Products</a>
    <a href="/contact">Contact</a>
</nav>

<div class="container">
    <section>
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out through the form below!</p>

        <form id="contactForm" action="#" method="post" novalidate>
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name">
            <span class="error-message" id="nameError"></span><br><br>

            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email">
            <span class="error-message" id="emailError"></span><br><br>

            <label for="phone">Phone Number:</label><br>
            <input type="text" id="phone" name="phone">
            <span class="error-message" id="phoneError"></span><br><br>

            <label for="petType">Pet Type:</label><br>
            <select id="petType" name="petType">
                <option value="">Select a pet</option>
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
                <option value="bird">Bird</option>
            </select>
            <span class="error-message" id="petTypeError"></span><br><br>

            <button type="button" id="submitBtn">Submit</button>
            <span class="success-message" id="successMessage"></span>
        </form>
    </section>
</div>

<footer>
    <p>&copy; 2024 Bonsai Pets | Follow us on 
        <a href="#" class="social-link">Facebook</a>, 
        <a href="#" class="social-link">Instagram</a>, 
        <a href="#" class="social-link">Twitter</a>
    </p>
</footer>

</body>
</html>


