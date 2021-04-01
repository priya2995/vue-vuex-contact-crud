<template>
	<div class="home">
		<b-container class="bv-example-row">
			<b-row>
				<contact-list></contact-list>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import contactList from '../components/ContactList.vue'
export default {
name: 'Home',
components: {
	'contact-list': contactList
},
}
</script>
