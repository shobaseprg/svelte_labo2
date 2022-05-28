<script lang="ts">
  import Router, { push } from "svelte-spa-router";
  import routes from "./router";
</script>

<header class="bg-gray-300"><button class="bg-green-200" on:click={() => push("/")}>home</button></header>
<main>
  <Router {routes} />
</main>

<style global lang="postcss">
</style>
