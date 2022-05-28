<script lang="ts">
import Router, {push} from 'svelte-spa-router'
import routes from "./router";

</script>


<header><button class="bg-red-300"  on:click={()=>push("/")}>home</button></header>
<main>
<Router {routes}/>
</main>

<style global lang="postcss">

</style>
