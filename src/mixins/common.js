export default {
mounted () {
console.log(this.$store.getters.users)
},
methods: {
sort(type)  {
let tempUsers = this.$store.getters.users;
if(type == 'asc') {
return tempUsers.sort();
} else {
tempUsers.sort()
return tempUsers.reverse()
}
}
}
}