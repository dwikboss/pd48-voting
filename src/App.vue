<template>
	<MenuHeader/>
	<router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuHeader from '@/components/MenuHeader.vue'

export default defineComponent({
    name: 'App',
	components: {
		MenuHeader: MenuHeader
	}
})

</script>

<style lang="scss">
#app {
	font-family: 'Poppins';
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	display: flex;
	flex-direction: column;
    justify-content: space-between;
    height: 100vh;
}

body, html {
	margin: 0;
	background: rgb(218,54,139);
	background: linear-gradient(315deg, rgba(218,54,139,0.10688025210084029) 0%, rgba(255,255,255,1) 100%);
}
</style>
