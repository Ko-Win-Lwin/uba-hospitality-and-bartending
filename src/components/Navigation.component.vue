<template>
  <header id="header" class="header d-flex align-items-center sticky-top">
    <div
      class="container-fluid position-relative d-flex align-items-center justify-content-between"
    >
      <RouterLink to="/" class="logo d-flex align-items-center me-auto me-xl-0">
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <h1 class="sitename">UBA Institute</h1>
      </RouterLink>

      <nav id="navmenu" class="navmenu mx-lg-auto">
        <ul>
          <li><RouterLink to="/home">Home</RouterLink></li>

          <li><RouterLink to="/about">About</RouterLink></li>

          <li><RouterLink to="/gallery">Gallery</RouterLink></li>
          <li class="dropdown">
            <RouterLink to="/services"
              ><span>Courses</span>
              <i class="bi bi-chevron-down toggle-dropdown"></i
            ></RouterLink>
            <ul>
              <li><RouterLink to="#1">F&B Service </RouterLink></li>
              <li><RouterLink to="#2">Mixologist and Bartending</RouterLink></li>
              <li><RouterLink to="#3">Hotel Housekeeping Courses</RouterLink></li>
              <li><RouterLink to="#4">Hotel English Courses</RouterLink></li>
            </ul>
          </li>
          <li><RouterLink to="/contact">Contact Us</RouterLink></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style>
</style>