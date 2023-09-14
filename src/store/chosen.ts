import { defineStore } from 'pinia'
import { Trainee } from '@/interfaces/Trainee';

export const useSelectedTraineesStore = defineStore('trainees', {
    state: () => ({
        selectedTrainees: [] as Trainee[]
    }),

    actions: {
        addSelectedTrainee(trainee: Trainee) {
            this.selectedTrainees.push(trainee);
        },
        removeSelectedTrainee(traineeId: number) {
            const index = traineeId;
            this.selectedTrainees.splice(index, 1);
        },
        getSelectedTrainees() {
            return this.selectedTrainees;
        }
    }
});