<template>
    <div class="selected-container">
        <h5>Your 3 chosen dreamgirls</h5>
        <div class="contestant-wrapper">
            <div class="selected-box" v-for="(trainee, index) in formattedTrainees" :key="index">
            <img v-if="trainee" :src="require(`@/assets/${trainee.photo}`)" :alt="trainee.name">
            <span v-else></span>
        </div>
        </div>
        <button class="vote-btn">LOCK IN</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Trainee } from '@/interfaces/Trainee';

export default defineComponent({
    name: 'SelectedHolder',
    props: {
        selectedTrainees: Array as PropType<Array<Trainee | null>>,
    },
    computed: {
        formattedTrainees(): (Trainee | null)[] {
            const placeholdersCount = 3;
            const trainees = this.selectedTrainees ? this.selectedTrainees.slice(0, placeholdersCount) : [];

            while (trainees.length < placeholdersCount) {
                trainees.push(null);
            }
            return trainees;
        }
    }
})
</script>

<style lang="scss" scoped>
.selected-container {
    background: rgb(255,134,195);
    background: linear-gradient(0deg, rgba(255,134,195,1) 0%, rgba(254,198,227,1) 100%);
    width: 100%;
    height: 22vh;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

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
        width: 75px;
        height: 75px;
        padding: 3px;
        background-color: #da368b31;

        img {
            max-width: 100%;
            max-height: 100%;
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
</style>
  