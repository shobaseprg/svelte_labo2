<script lang="ts">
  import Router, { push } from "svelte-spa-router";
  import routes from "../../router";
  import Button from "../module/Button.svelte";
  import { movePage } from "../../functions/routerFunc";

</script>

<header class="bg-gray-300">
  <Button on:buttonClick={()=>movePage("/")}>home</Button>
</header>

<style lang="postcss">
</style>
