<template>
  <b-navbar toggleable="lg" type="light" variant="faded" class="navbar-white" fixed="top">
    <b-container>
      <b-navbar-brand href="#" style="navbar-brand">COVID-19</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-navbar-nav>
            <b-nav-item class="mr-4" href="#" active>Beranda</b-nav-item>
            <b-nav-item class="mr-4" href="#">Berita</b-nav-item>
            <b-nav-item class="mr-1" href="#">Tentang</b-nav-item>
          </b-navbar-nav>

        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
   
  }
}
</script>

<style scoped>
  .navbar-white {
    background-color: rgba(255, 255, 255, 0.65) !important;
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075) !important;
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