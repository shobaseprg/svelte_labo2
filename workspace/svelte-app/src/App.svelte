<script lang="ts">
  import Router, { push } from "svelte-spa-router";
  import Header from "./component/layout/Header.svelte";
  import routes from "./router";
</script>

<Header />
<main>
  <Router {routes} />
</main>

<style global lang="postcss">
</style>
