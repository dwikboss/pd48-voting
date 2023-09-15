<template>
    <div class="header">
        <img class="header-logo-white" src="@/assets/img/mnet-logo.png">
        <h1>PRODUCE 48</h1>
        <img class="pd-logo-white" src="@/assets/img/produce48-logo-white.png">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'MenuHeader',
	data() {
		return {
		};
	},
});
</script>

<style lang="scss">
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: rgb(255,134,195);
		background: linear-gradient(180deg, rgba(255,134,195,1) 0%, rgba(252,169,212,1) 100%);
		// border-bottom-left-radius: 20px;
		// border-bottom-right-radius: 20px;
		padding: 20px;

        .header-logo-white {
            width: 20%;
        }

        .pd-logo-white {
            width: 18%;
        }

		h1 {
			color: white;
			font-size: 1.2em;
			margin: 0;
            font-weight: 600;
		}

		h4 {
			margin: 0;
			font-weight: 500;
			width: 60%;
			font-size: 0.8em;
			color: white;
		}
	}
</style>