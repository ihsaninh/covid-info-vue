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
      <h6 class="text-center">Copyright 2020 | Ihsan Nurul Habib</h6>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
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
  background-color: #fff;
  border-top: 1px solid #f1f1f1;
}
.footer h6 {
  padding-top: 35px;
  padding-bottom: 30px;
  font-weight: 400;
  font-size: 15px;
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
