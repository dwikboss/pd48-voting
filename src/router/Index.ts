import { createRouter, createWebHistory } from 'vue-router'
import CertificateView from '@/views/CertificateView.vue';

export default createRouter({
	history: createWebHistory(),
	routes: [
	{
		path: '/confirm-votes',
		component: CertificateView,
	}
	],
})
  