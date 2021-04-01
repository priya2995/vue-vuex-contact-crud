<template>

<b-container class="bv-example-row">
<b-row>
  <nav-bar></nav-bar>
</b-row>
<b-row>
<b-col md="6">
<b-list-group>
<b-list-group-item v-for="(favourite, index) in favourites" :key="index">
<b-card class="card">
  <!-- Card body -->
  <b-row align-v="center">
    <b-col md="auto">
      <!-- Avatar -->
      <a href="javascript:;" class="avatar avatar-xl" >
        <b-img alt="Image placeholder" :src="favourite.avatar" height="50" width="50" rounded="circle"></b-img>
      </a>
    </b-col>
    <b-col>
      <h4 class="mb-0">
        <a href="javascript:;">{{favourite.first_name}} {{favourite.last_name}}</a>
      </h4>
      <p class="text-sm text-muted mb-0">{{favourite.email}}</p>
      <span class="text-success">● </span>
      <small>Active</small>
      <b-button variant="success" class="ml-2" @click="deleteFavourite(favourite)">Delete Favourite</b-button>
    </b-col>
  </b-row>
</b-card>
</b-list-group-item>
</b-list-group>
</b-col>
</b-row>
</b-container>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
name: 'FavouritesList',
components: {
    'nav-bar': Navbar
},
computed: {
  favourites() {
    return this.$store.state.favourites
  }
},
methods: {
  deleteFavourite(favourite) {
    this.$store.dispatch('removeFavourites', favourite)
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  margin-bottom: 30px;
  border: 0;
  box-shadow: 0 0 2rem 0 rgba(136,152,170,.15);
}
</style>
