<template>
  <b-container class="bv-example-row">
    
    <b-row>  
      <nav-bar></nav-bar>
      <b-col md="6">
          <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="my-table"
            ></b-pagination>
        </b-col>
      </b-row>
    
      <b-row>
        <b-col md="6">
          <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
        <b-list-group>
        <b-list-group-item v-for="(user, index) in displayedContacts" :key="index">
        <b-card class="card" @click="contactDetail(user.id)">
          <!-- Card body -->
          <b-row align-v="center">
            <b-col md="auto">
              <!-- Avatar -->
              <a href="javascript:;" class="avatar avatar-xl" >
                <b-img alt="Image placeholder" :src="user.avatar" height="50" width="50" rounded="circle"></b-img>
              </a>
            </b-col>
            <b-col>
              <h4 class="mb-0">
                <a href="javascript:;">{{user.first_name}} {{user.last_name}}</a>
              </h4>
              <p class="text-sm text-muted mb-0">{{user.email}}</p>
              <span class="text-success">● </span>
              <small>Active</small>
              <b-button variant="success" class="ml-2" @click="addFavourites(user)">Make Favourite</b-button>
            </b-col>
          </b-row>
        </b-card>
        </b-list-group-item>
        </b-list-group>
        </b-jumbotron>
        </b-col>
        </b-row>
  </b-container>
</template>

<script>
import _ from 'lodash'
import Navbar from './Navbar.vue'

export default {
name: 'ContactList',
data() {
  return {
    perPage: 3,
    currentPage: 1,
    pages: [],
    list: [],
  }
},
components: {
    'nav-bar': Navbar
},
mounted () {
this.$store.dispatch('fetchUsers')
},
computed: {
      rows() {
        return this.$store.getters.users.data.length
      },
      displayedContacts () {
         return this.paginate(this.$store.getters.users.data);
      }
},
 watch: {
    list () {
            this.setPages();
        }
  },
methods: {
getUserName: function (firstName, lastName) {
return firstName.concat(lastName)
},
contactDetail(userId) {
this.$router.push({ path: `/detail/${userId}` }) 
},
addFavourites(user) {
  this.$store.dispatch('setFavourites', user)
},
setPages () {
    let numberOfPages = Math.ceil(this.$store.getters.users.data.length / this.perPage);
    for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
    }
},
paginate (contacts) {
    let page = this.currentPage;
    let perPage = this.perPage;
    let from = (page * perPage) - perPage;
    let to = (page * perPage);
    return  contacts.slice(from, to);
},
sortContact(type) {
  let contacts = this.$store.getters.users.data;
  if(type == 'asc') {
    this.$store.getters.users.data = _.orderBy(contacts, 'first_name', 'asc')
  } else {
    this.$store.getters.users.data = _.orderBy(contacts, 'first_name', 'desc')
  }
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
