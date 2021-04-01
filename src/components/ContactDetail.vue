<template>

<b-container class="bv-example-row">
  <nav-bar></nav-bar>
<b-row>
  <b-col md="6">
  <b-card no-body img-src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/img-1-1000x600.jpg" img-top class="card-profile">
  <b-row class="justify-content-center">
    <b-col lg="3"  class="order-lg-2">
      <div class="card-profile-image mt-n5">
        <a href="javascript:;">
          <b-img :src="user.avatar" rounded="circle" />
        </a>
      </div>
    </b-col>
  </b-row>

  <b-card-body class="pt-2">
    <div class="text-center">
      <h5 class="h3">
        {{user.first_name}} {{user.last_name}}
      </h5>
      <div><span style="font-size:12px">Designer, cat lover, backworm apple pie fanatic and nature enthusiast :)</span></div>
      <div class="h5 font-weight-300">
        <i class="bi bi-laptop-fill mr-2"></i>Bucharest, Romania
      </div>
    </div>
    <b-button variant="success" class="ml-2" @click="addFavourites(user)">Make Favourite</b-button>
  </b-card-body>
</b-card>
</b-col>
</b-row>
</b-container>
</template>

<script>
  import Navbar from './Navbar.vue'
export default {
  name: 'ContactDetail',
  components: {
    'nav-bar': Navbar
  },
  mounted () {
  this.$store.dispatch('fetchUser',this.$route.params.id);
  },
  computed: {
    user() {
      return this.$store.getters.user.data;
    }
  },
  methods: {
    addFavourites(user) {
    this.$store.dispatch('setFavourites', user)
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
