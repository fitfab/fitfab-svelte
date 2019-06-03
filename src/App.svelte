<script>
  export let name;
  export let author;
  export let email;
  export let svelteVersion;

  document.title = `${name} by ${author}`;
</script>

<style>
  h1 {
    color: rgb(255, 65, 88);
  }
</style>

<h1>
  {name}
  <span>by {author}</span>
</h1>
<p>contact: {email}</p>
<p>svelte version: {svelteVersion}</p>
