export default async ({ redirect }) => {
	window.addEventListener("click", event => {
		if (!event.target.matches("a[data-nuxt-link]")) return;
		event.preventDefault();
		redirect(event.target.pathname);
	}, false);
};
