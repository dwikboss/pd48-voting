<template>
    <div class="header">
        <div class="header-menu">
			<ul class="menu-list">
				<router-link to="/vote" active-class="active">
					<li>VOTE</li>
				</router-link>
				<router-link to="/certificate" active-class="active">
					<li>CERTIFICATE</li>
				</router-link>
			</ul>
        </div>
    </div>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'MenuHeader',
	data() {
		return {
		};
	},
});
</script>

<style lang="scss">
	.header {
		background: rgb(255,134,195);
		background: linear-gradient(180deg, rgba(255,134,195,1) 0%, rgba(252,169,212,1) 100%);
		// border-bottom-left-radius: 20px;
		// border-bottom-right-radius: 20px;
		// padding: 20px 20px 0 20px;
		height: 10vh;

        .header-menu {
            display: flex;
            align-items: center;
            justify-content: space-around;
			height: 100%;

			.menu-list {
				display: flex;
				list-style: none;
				margin: 0;
				padding: 0;
				width: 100%;
				height: 100%;

				.active {
					color: rgb(255, 255, 255);
					border-bottom: 5px solid #fa40a081;
				}

				a {
					width: 50%;
					text-align: center;
					border-bottom: 5px solid #fa40a023;
					display: flex;
					justify-content: center;
					align-items: flex-end;
					padding-bottom: 10px;
					font-size: 0.8em;
					font-weight: 600;
					color: rgba(255, 255, 255, 0.425);
					text-decoration: none;
				}
			}
        }

        .header-logo-white {
            width: 20%;
        }

        .pd-logo-white {
            width: 18%;
        }

		h1 {
			color: white;
			font-size: 1.2em;
			margin: 0;
            font-weight: 600;
		}

		h4 {
			margin: 0;
			font-weight: 500;
			width: 60%;
			font-size: 0.8em;
			color: white;
		}
	}
</style>