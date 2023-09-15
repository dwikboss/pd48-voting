import { createRouter, createWebHistory } from 'vue-router'
import CertificateView from '@/views/CertificateView.vue';
import HomeView from '@/views/HomeView.vue';

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: HomeView
		},
		{
			path: '/vote',
			component: HomeView,
			children: [
				{
					path: 'confirm',
					component: CertificateView,
				},
			],
		},
		{
			path: '/certificate',
			component: CertificateView
		}
	]
})