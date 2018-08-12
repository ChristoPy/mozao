import StyleComponent from "./style-component.js";
import FormStyle from "./../styles/form-style.js";


export default {

	name: "Form",
	data () {

		return {

			Password: "",
			TypedPassword: "",
			Disabled: true,
			Granted: false
		}
	},
	components: {StyleComponent},
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
		<div class="container">
			<template v-if="Granted"></template>
			<template v-else="">
				<StyleComponent>${FormStyle}</StyleComponent>

				<form class="form-signin">
					<h1 class="h3 mb-3 font-weight-normal text-center">Qual a senha?</h1>
					<input type="password" id="inputPassword" class="form-control mb-3" placeholder="Senha" required="" @input="BindTypedPassword">
					<button class="btn btn-lg btn-primary btn-block" type="submit" @click="Login" :disabled="Disabled">Entrar</button>
				</form>
			</template>
		</div>
    `
};