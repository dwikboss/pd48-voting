<template>
	<div id="home-screen">
		<div class="header">
			<h1>GLOBAL VOTE</h1>
			<h4>Vote for your 3 favorite trainees to make their debut!</h4>
		</div>
		<div class="contestants">
			<TraineeTile v-for="trainee in trainees" :key="trainee.id" :trainee="trainee"/>
		</div>
		<SelectedHolder/>
	</div>
</template>

<script lang="ts">
import TraineeTile from '@/components/TraineeTile.vue'
import SelectedHolder from '@/components/SelectedHolder.vue'
import { defineComponent } from 'vue';
import { Trainee } from '@/interfaces/Trainee';
import { getTrainees } from '@/trainees.api';

export default defineComponent({
	name: 'HomeView',
	data() {
		return {
			trainees: [] as Trainee[],
		};
	},
	created() {
		this.fetchTrainees();
	},
	methods: {
		async fetchTrainees(this: { trainees: Trainee[] }) {
			try {
				const trainees = await getTrainees();
				this.trainees = trainees;
			} catch (error) {
				console.error('Error fetching trainees:', error);
			}
		},
	},
	components: {
		TraineeTile: TraineeTile,
		SelectedHolder: SelectedHolder,
	},
});
</script>

<style lang="scss">
#app {
	font-family: 'Poppins';
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

#home-screen {
	text-align: center;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	justify-content: space-between;

	.header {
		height: 15vh;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background: rgb(255,134,195);
		background: linear-gradient(180deg, rgba(255,134,195,1) 0%, rgba(252,169,212,1) 100%);
		border-bottom-left-radius: 35px;
		border-bottom-right-radius: 35px;

		h1 {
			color: white;
			font-size: 1.8em;
			margin: 0;
		}

		h4 {
			margin: 0;
			font-weight: 500;
			width: 60%;
			font-size: 0.8em;
			color: white;
		}
	}

	.contestants {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 10px 20px 10px 20px;
		overflow: scroll;
		height: 60vh;
	}
}
</style>