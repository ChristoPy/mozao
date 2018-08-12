import StyleComponent from "./style-component.js";
import Slides from "./slides.js";
import FormStyle from "./../styles/form-style.js";


export default {

	name: "Form",
	data () {

		return {

			Password: "senha",
			TypedPassword: "",
			Disabled: true,
			Granted: false
		}
	},
	components: {Slides, StyleComponent},
	methods: {

		BindTypedPassword (Event) {

			this.TypedPassword = Event.target.value;

			(this.TypedPassword ? this.Disabled = false : this.Disabled = true);
		},
		Login (Event) {

			Event.preventDefault ();

			(this.TypedPassword === this.Password ? this.Granted = true : this.Granted = false);
		}
	},
	template: `
		<div>
			<template v-if="Granted"><Slides></Slides></template>
			<template v-else="">
				<form class="form-signin">
					<StyleComponent>${FormStyle}</StyleComponent>

					<h1 class="h3 mb-3 font-weight-normal text-center">Qual a senha?</h1>
					<input type="password" id="inputPassword" class="form-control mb-3" placeholder="Senha" required="" @input="BindTypedPassword">
					<button class="btn btn-lg btn-primary btn-block" type="submit" @click="Login" :disabled="Disabled">Entrar</button>
				</form>
			</template>
		</div>
    `
};