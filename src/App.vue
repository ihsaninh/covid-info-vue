<template>
  <div id="app">
    <b-navbar toggleable="lg" type="light" variant="faded" class="navbar-white" fixed="top">
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
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>
<style>
#app {
  font-family: 'IBM Plex Sans';
}
th {
  font-weight: 500;
  font-size: 15px;
}
td {
  font-size: 14px !important;
}
body {
  background-color: #f7fafc !important;
}
.navbar-white {
  background-color: rgba(255, 255, 255, 0.85) !important;
  box-shadow:0 0 32px -4px rgba(0,0,0,.15);
  border-bottom: 1px solid #eaedf1;
  backdrop-filter: saturate(180%) blur(20px);
  }
.navbar-brand {
  font-weight: 500 !important;
  font-size: 25px
  }
.navbar {
  height: 70px;
}
</style>
