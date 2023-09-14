<template>
    <h1>Thank you for voting!</h1>
    <VotingCertificate/>
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

</style>