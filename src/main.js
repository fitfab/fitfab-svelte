import App from "./App.svelte";
import svelte from "svelte/compiler";

const app = new App({
  target: document.body,
  props: {
    name: "fitfab",
    author: "miguel julio",
    email: "migueljulio.developer@gmail.com",
    svelteVersion: `${svelte.VERSION}`
  }
});

export default app;
