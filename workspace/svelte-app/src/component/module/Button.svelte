<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let title: string;

  const dispatch = createEventDispatcher();
  function onclickHundle() {
    dispatch("buttonClick");
  }
</script>

<button class="bg-green-200" on:click={onclickHundle}>{title}</button>

<style lang="postcss">
</style>
