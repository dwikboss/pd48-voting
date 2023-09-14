<template>
    <div class="certificate-screen">
        <img src="@/assets/img/produce48-logo.png">
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
    align-items: center;
    height: 100vh;
    justify-content: space-between;
    background-image: radial-gradient(#fa40a036 2px, transparent 2px);
    background-size: 45px 45px;
    background-color: #ffffff;
    
    img {
        margin: 25px;
        width: 35%;
    }

    .certificate-container {
        padding: 0 10px 0 10px;
        margin-bottom: -2px;
    }
}

img {
    width: 50%;
}
</style>