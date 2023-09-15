<template>
    <div class="certificate-screen">
        <!-- <img src="@/assets/img/produce48-logo.png"> -->
        <div class="certificate-container">
            <VotingCertificate/>
        </div>
    </div>
</template>

<script lang="ts">
import VotingCertificate from '@/components/VotingCertificate.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CertificateView',
    components: { VotingCertificate }
})
</script>

<style lang="scss" scoped>
.certificate-screen {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 50px;
    flex-grow: 1;
    background-image: radial-gradient(#fa40a036 2px, transparent 2px);
    background-size: 45px 45px;
    background-color: #ffffff;
    
    img {
        margin: 50px;
        width: 35%;
    }

    .certificate-container {
        padding: 0 10px 0 10px;
        animation: showCertificate 800ms cubic-bezier(0, 0.29, 0, 0.98);
    }
}

img {
    width: 50%;
}

@keyframes showCertificate {
    0% {
        transform: translateY(50vh);
    }
    100% {
        transform: translateY(0);
    }
}
</style>