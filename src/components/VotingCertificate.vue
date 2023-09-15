<template>
    <div class="certificate">
        <h2>VOTING CERTIFICATE</h2>
        <h3 class="period-text">Voting period ends</h3>
        <h3 class="due-date">november 20 2023</h3>
        <div class="voted-trainees">
            <div class="voted-trainee" v-for="(trainee, index) in trainees" :key="index">
                <div class="trainee-data-box">
                    <div class="trainee-picture">
                        <img v-if="trainee && trainee.photo" :src="require(`@/assets/${trainee.photo}`)" :alt="trainee.name">
                    </div>
                    <div class="trainee-info">
                        <h5>{{ trainee.name }}</h5>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <h4>Your vote is now complete</h4>
        <h4>{{ voteDate }}</h4>
        <h4 class="notice">This certificate validates your vote for the final voting round of PRODUCE 48. Votes will be verified by third party organizations.</h4>
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
    },
    computed: {
        voteDate() {
            const now = new Date();

            const day = String(now.getDate()).padStart(2, '0');
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const year = String(now.getFullYear()).slice(-2);

            const formattedDate = `${day}.${month}.${year}`;

            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');

            const formattedTime = `${hours}.${minutes} (GMT)`;

            return `${formattedDate} ${formattedTime}`;
        }
    }
})
</script>

<style lang="scss" scoped>
.certificate {
    background:
    repeating-conic-gradient(from 30deg,#0000 0 120deg,rgba(238, 91, 201, 0.11) 0 180deg) 
    60px 34.62px,
    repeating-conic-gradient(from 30deg,rgba(255, 66, 164, 0.2) 0 60deg,rgba(255,168,213,0.2) 0 120deg,rgba(238, 92, 206, 0.2) 0 0deg);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    // border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 15px;

    .period-text {
        font-weight: 300;
        font-size: 1.1em;
        color: #00000033;
    }

    .due-date {
        font-weight: 700;
        color: rgba(214, 135, 194, 0.76);
        font-size: 1.4em;
    }

    h2 {
        text-align: center;
        margin-top: 25px;
        margin-bottom: 20px;
        font-size: 2.5em;
        color: rgba(214, 135, 194, 0.76);
        // text-shadow: #fa40a08c 0px 0 35px;
        line-height: 1.25em;
    }

    h3 {
        margin: 0;
        text-align: center;
        color: rgb(0, 0, 0);
        font-weight: 100;
    }

    h4 {
        margin: 0;
        font-weight: 500;
        color: #00000044;
        text-align: center;
    }

    h4.notice {
        margin-bottom: 10px;
        margin-top: 10px;
        font-weight: 400;
        color: #00000033;
        font-size: 0.8em;
        width: 80%;
    }
    
    hr {
        border: 1px solid rgba(255, 40, 183, 0.342);
        width: 90%;
        margin-bottom: 15px;
    }

    .voted-trainees {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
        gap: 10px;
        margin-top: 35px;
        margin-bottom: 35px;

        .voted-trainee {
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            align-self: stretch;

            .trainee-data-box {
                .trainee-picture {
                    padding: 10px;
                    background-color: white;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;

                    img {
                        width: 100%;
                    }
                }
                .trainee-info {
                    text-align: center;
                    padding: 5px;
                    background-color: #fa40a0;
                    border-bottom-left-radius: 10px;
                    border-bottom-right-radius: 10px;

                    h5 {
                        margin: 0;
                        font-weight: 700;
                        word-spacing:9999px;
                        line-height: 18px;
                        color: white;
                    }
                }
            }
        }
    }
}
</style>
  