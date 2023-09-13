<template>
	<router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App',
})

</script>

<style lang="scss">
body, html {
	height: 100%;
	margin: 0;
	background: rgb(218,54,139);
	background: linear-gradient(315deg, rgba(218,54,139,0.10688025210084029) 0%, rgba(255,255,255,1) 100%);
}
</style>
