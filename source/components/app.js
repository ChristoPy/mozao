import StyleComponent from "./style-component.js";
import Form from "./form.js";
import AppStyle from "./../styles/app-style.js";

export default {

	name: "App",
	components: {StyleComponent, Form},
	template: `
		<div class="container">
			<StyleComponent>${AppStyle}</StyleComponent>
			<Form></Form>
		</div>
	`
};