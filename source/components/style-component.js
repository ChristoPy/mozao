export default {

	name: "StyleComponent",
	data () {

		return {

			Style: ""
		}
	},
	created () {

		this.$slots.default.forEach (Value => this.Style += Value.text);
	},
	mounted () {

		const Style = document.createElement ("style");
		const StyleText = document.createTextNode (this.Style);

		Style.append (StyleText);
		this.$el.replaceWith (Style);
	},
	template:"<span></span>"
}