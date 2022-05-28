<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  function onclickHundle() {
    dispatch("buttonClick");
  }
</script>

<button class="bg-green-200" on:click={onclickHundle}>home</button>

<style lang="postcss">
</style>
