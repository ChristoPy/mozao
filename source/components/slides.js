import StyleComponent from "./style-component.js";
import SlidesStyle from "./../styles/slides-style.js";


export default {

	name: "Slides",
	data () {

		return {

			Slides: [],
			TinySlider: undefined
		}
	},
	components: {StyleComponent},
	template: `
		<div>
			<StyleComponent>${SlidesStyle}</StyleComponent>

			<div class="Slides">
				<template v-for="Slide of Slides">
					<div>
						<img :src="Slide.Image" class="img-fluid" alt=""/>

						<template v-if="Slide.Text">
							<div class="SlideText">
								{{Slide.Text}}
							</div>
						</template>
					</div>
				</template>
			</div>
		</div>
    `,
    mounted () {

		this.TinySlider = new tns ({

			container: ".Slides",
			items: 1,
			autoplay: true,
			controls: false,
			nav: false,
			autoplayButton: false,
			autoplayButtonOutput: false,
			speed: 600
		});
    }
};