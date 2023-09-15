<template>
    <div class="selected-container">
        <h5>Your 3 chosen dreamgirls</h5>
        <div class="container-row">
            <img :class="{ 'diamond': true, 'enter-left': !isActive }" class="diamond" src="@/assets/img/diamonds.png" alt="">
            <div class="contestant-wrapper">
                <div class="selected-box" v-for="(trainee, index) in formattedTrainees" :key="index">
                    <img v-if="trainee && trainee.photo" :src="require(`@/assets/${trainee.photo}`)" :alt="trainee.name">
                    <span v-else></span>
                </div>
            </div>
            <img :class="{ 'diamond': true, 'enter-right': !isActive }" class="diamond" src="@/assets/img/diamonds.png" alt="">
        </div>
        <router-link to="/certificate" custom v-slot="{ navigate }">
            <button :disabled="!isActive" :class="{ 'vote-btn': true, 'disabled': !isActive }" @click="navigate" role="link">VOTE</button>
        </router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSelectedTraineesStore } from '@/store/chosen';
import { Trainee } from '@/interfaces/Trainee';

export default defineComponent({
    name: 'SelectedHolder',
    computed: {
        formattedTrainees(): (Trainee)[] {
            const placeholderTrainee: Trainee = {
                id: -1,
                name: '',
                photo: '',
                full_photo: '',
                agency: '',
                rank: -1,
                votes: -1,
            };
 
            const traineeStore = useSelectedTraineesStore();
            const placeholdersCount = 3;
            const trainees = traineeStore.getSelectedTrainees() ? traineeStore.getSelectedTrainees().slice(0, placeholdersCount) : [];

            while (trainees.length < placeholdersCount) {
                trainees.push(placeholderTrainee);
            }
            
            return trainees;
        },
        isActive(): boolean {
            return this.formattedTrainees.filter(trainee => trainee && trainee.id !== -1).length === 3;
        }
    }
})
</script>


<style lang="scss" scoped>
.selected-container {
    background: rgb(255,134,195);
    background: linear-gradient(0deg, rgba(255,134,195,1) 0%, rgba(254,198,227,1) 100%);
    width: 100%;
    height: 23vh;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;

    .container-row {
        display: flex;
        gap: 20px;
        align-items: center;

        .diamond {
            height: 25px;
            transform: translateX(0);
            transition: all 300ms;
        }
        .enter-right {
            transform: translateX(75px);
            height: 0px;
        }
        .enter-left {
            transform: translateX(-75px);
            height: 0px;
        }
    }

    .disabled {
        background-color: #6d6d6d63 !important;
    }


    h4 {
        color: #ffffff;
        margin: 0;
        font-weight: 300;
    }

    h5 {
        margin: 0;
        color: white;
        font-weight: 400;
        font-size: 16px;
    }

    .contestant-wrapper {
        display: flex;
        gap: 12px;
        justify-content: center;
    }

    .selected-box {
        border-radius: 50%;
        width: 65px;
        height: 65px;
        padding: 3px;
        background-color: #da368b31;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            max-width: 100%;
            max-height: 100%;
            transition: all 400ms;
            animation: grow-image 100ms cubic-bezier(0, 1.1, 1, 1);
        }
    }

    .vote-btn {
        background-color: #fe42a3b6;
        color: white;
        font-weight: 700;
        border: none;
        border-radius: 999px;
        width: 6em;
        padding: 5px 0 5px 0;
        font-family: 'Poppins';
    }
}

@keyframes grow-image {
    0% {
        width: 0%;
    }
    100% {
        width: 100%;
    }
}
</style>
  