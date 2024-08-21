<template>
  <footer id="footer" class="footer position-relative">
    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-4 col-md-12 footer-about">
          <a href="index.html" class="logo d-flex align-items-center">
            <span class="sitename">UBA Instutite</span>
          </a>
          <p>
            Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada
            terra videa magna derita valies darta donna mare fermentum iaculis
            eu non diam phasellus.
          </p>
          <div class="social-links d-flex mt-4">
            <a href=""><i class="bi bi-twitter-x"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/about">About us</RouterLink></li>
            <li><RouterLink to="/courses">Courses</RouterLink></li>
            <li><RouterLink to="/gallery">Gallery</RouterLink></li>
          </ul>
        </div>

        <div class="col-lg-3 col-6 footer-links">
          <h4>Our Courses</h4>
          <ul>
            <li><RouterLink to="#">F&B Service</RouterLink></li>
            <li><RouterLink to="#">Mixologist and Bartending</RouterLink></li>
            <li><RouterLink to="#">Hotel Housekeeping Courses</RouterLink></li>
            <li><RouterLink to="#">Hotel English Courses</RouterLink></li>
          </ul>
        </div>

        <div
          class="col-lg-3 col-md-12 col-12 footer-contact text-center text-md-start"
        >
          <h4>Contact Us</h4>
          <p>249. Zabuthiri 8<sup>th</sup> Street, 6 West Qtr, Thaketa</p>
          <p>Yangon</p>
          <p>Myanmar</p>
          <p class="mt-4">
            <strong>Phone:</strong> <a href="tel:+95 9740828924">+95 9740828924</a>
          </p>
          <p><strong>Email:</strong> <a href="mailto:prejamkc@gmail.com">prejamkc@gmail.com</a></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { RouterLink } from 'vue-router';

</script>

<style>
</style>