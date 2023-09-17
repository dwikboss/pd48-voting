<template>
	<!-- <router-view></router-view> -->
	<div id="home-screen">
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
#home-screen {
	text-align: center;
	display: flex;
	flex-direction: column;
	min-height: 90vh;
	justify-content: space-between;

	.contestants {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 10px 20px 10px 20px;
		overflow: scroll;
		height: 0;
		flex-grow: 1;
	}
}
</style>