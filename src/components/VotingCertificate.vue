<template>
    <div class="certificate">
        <div class="traineeBox" v-for="(trainee, index) in trainees" :key="index">
            {{ trainee.name }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSelectedTraineesStore } from '@/store/chosen';
import { Trainee } from '@/interfaces/Trainee';

export default defineComponent({
    name: 'VotingCertificate',
    data () {
		return {
			trainees: [] as Trainee[],
		};
    },
    created () {
        this.loadSelectedTrainees();
    },
    methods: {
        loadSelectedTrainees() {
            const traineeStore = useSelectedTraineesStore();
            this.trainees = traineeStore.getSelectedTrainees();
        }
    }
})
</script>

<style lang="scss" scoped>
    .certificate {
        background-color: red;
    }
</style>
  