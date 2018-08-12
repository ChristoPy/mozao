import StyleComponent from "./style-component.js";
import SlidesStyle from "./../styles/slides-style.js";


export default {

	name: "Slides",
	data () {

		return {

			Images: [],
			Slides: undefined
		}
	},
	components: {StyleComponent},
	template: `
		<div>
			<StyleComponent></StyleComponent>

			<div class="Slides">
				<template v-for="Image of Images">
					<img :src="Image" alt="" />
				</template>
			</div>
		</div>
    `,
    mounted () {

		this.Slides = new tns ({

			container: ".Slides",
			items: 1,
			autoplay: true,
			controls: false,
			nav: false,
			autoplayButton: false,
			autoplayButtonOutput: false
		});
    }
};