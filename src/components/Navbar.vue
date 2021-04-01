<template>

<b-container class="bv-example-row">
<b-row>
  <b-col md="6">
     <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Contacts App</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item active>
            <router-link to="/list" style="text-decoration: none;color:#fff">List</router-link>
          </b-nav-item>
          <b-nav-item active>
            <router-link to="/favourite" style="text-decoration: none;color:#fff">Favourites</router-link>
          </b-nav-item>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
  </b-col>

</b-row>
</b-container>
</template>
<script>
 export default {
  name:"NavBar"
}
</script>

