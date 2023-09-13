<template>
    <div @click="selectTrainee" class="trainee-tile" :class="isSelected ? 'selected' : 'deselected'">
        <div class="tile-left">
            <!-- <span class="trainee-rank">{{ traineeData.rank }}</span> -->
            <h3 class="trainee-name">{{ trainee.name }}</h3>
            <h3 class="trainee-agency">{{ trainee.agency }}</h3>
        </div>
        <div class="tile-right" :style="{ 'background-image': 'url(' + require(`@/assets/${trainee.full_photo}`) + ')' }">
        </div>
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { Trainee } from '@/interfaces/Trainee';

export default defineComponent({
    name: 'TraineeTile',
    data () {
        return {
            isSelected: false
        }
    },
    methods: {
        selectTrainee() {
            this.$emit('toggle-trainee', this.trainee.id);
            this.isSelected = !this.isSelected;
        }
    },
    props: {
        trainee: {
            type: Object as PropType<Trainee>,
            required: true
        }
    },
})
</script>

<style lang="scss" scoped>
.selected {
    opacity: 1;
    border: 1px solid #fe42a36b;
    transform: scale(1.035);
    transition: 200ms all;
}

.deselected {
    opacity: 0.5;
    border: 1px solid #ffffff;
    transition: 200ms all;
}

.trainee-tile {
    background:
      repeating-conic-gradient(from 30deg,#0000 0 120deg,rgba(255,255,255,0.05) 0 180deg) 
       60px 34.62px,
      repeating-conic-gradient(from 30deg,rgba(255, 66, 164, 0.05) 0 60deg,rgba(255,168,213,0.05) 0 120deg,rgba(255,255,255,0.05) 0 180deg);
    background-size: 120px 69px;
    display: flex;
    justify-content: space-between;
    border-radius: 12px;
    position: relative;

    .trainee-rank {
        position: absolute;
        font-size: 7em;
        font-weight: 700;
        color: #f300d31a;
        top: 0;
        bottom: 0;
        left: 15px;
        margin: auto 0;
        z-index: -1;
    }

    h3 {
        text-align: left;
        color: black;
        margin: 0;
    }

    img {
        height: 75px;
    }

    .tile-left {
        padding: 20px 0 20px 20px;
        overflow: hidden;

        .trainee-name {
            font-weight: 700;
            color: #fe42a3a6;
            font-size: 1.3em;
        }

        .trainee-agency {
            font-weight: 300;
            color: #fe42a3a6;
            font-size: 1em;
        }
    }

    .tile-right {
        display: flex;
        align-items: center;
        padding: 0 15px 0 0;
        width: 35%;
        background-size: 150%;
        background-position: -30px 35%;
    }

}
</style>
