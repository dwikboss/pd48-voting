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
    
    img {
        margin: 25px;
        width: 35%;
    }

    .certificate-container {
        padding: 0 10px 0 10px;
    }
}

img {
    width: 50%;
}
</style>