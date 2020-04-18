<template>
  <div id="app">
    <b-navbar
      toggleable="lg"
      type="light"
      variant="faded"
      class="navbar-white"
      fixed="top"
    >
      <b-container>
        <b-navbar-brand to="/" style="navbar-brand">COVID-19</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
              <b-nav-item class="mr-4" to="/" exact>Beranda</b-nav-item>
              <b-nav-item class="mr-4" to="/news" exact>Berita</b-nav-item>
              <b-nav-item class="mr-1" to="/about" disabled>Tentang</b-nav-item>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>

      </b-container>
    </b-navbar>
    <router-view />
    <footer class="mt-5 footer">
      <h6 class="text-center">Copyright 2020 <a href="https://github.com/ihsaninh">Ihsan Nurul Habib</a> | Sumber data berasal dari API <a href="https://github.com/mathdroid/covid-19-api">Mathdroid</a></h6>
    </footer>
    <vm-back-top timing="ease">
      <button class="btn-to-top">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="icon-to-top">
          <path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z">
          </path>
        </svg>
      </button>
    </vm-back-top>
  </div>
</template>

<script>
import VmBackTop from 'vue-multiple-back-top'

export default {
  name: 'App',
  components: {
    VmBackTop
  }
};
</script>
<style>
#app {
  font-family: 'Roboto';
}
th {
  font-weight: 500;
  font-size: 15px;
}
td {
  font-size: 14px !important;
}
body {
  background-color: #fefefe !important;
}
.navbar-white {
  background-color: rgba(255, 255, 255, 0.7) !important;
  box-shadow: 0 0 32px -4px rgba(0, 0, 0, 0.080);
  backdrop-filter: saturate(180%) blur(20px);
}
.navbar-brand {
  font-weight: 500 !important;
  font-size: 22px !important;
}
.footer {
  padding-top: 35px;
  padding-bottom: 30px;
  background-color: #fff;
  border-top: 1px solid #f1f1f1;
}
.footer h6 {
  font-weight: 400;
  font-size: 15px;
}

.btn-to-top {
  width: 60px;
  height: 60px;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
  background-color: #5aaa4e;
  color: white;
  outline: none !important;
  border: none;
}

.icon-to-top {
  width: 20px;
}

@media only screen and (min-width: 768px) {
  .navbar {
    height: 70px;
  }
}
@media only screen and (max-width: 768px) {
  h6 {
    font-size: 13px !important;
  }
}
</style>
