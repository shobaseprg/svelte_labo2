<script lang="ts">
  import Router, { push } from "svelte-spa-router";
  import routes from "../../router";
  import Button from "../module/Button.svelte";
  import { movePage } from "../../functions/routerFunc";
</script>

<header class="bg-gray-300 p-2">
  <Button title={"HOME"} on:buttonClick={() => movePage({ path: "/" })} />
</header>

<style lang="postcss">
</style>
