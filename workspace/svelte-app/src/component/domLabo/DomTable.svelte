<script lang="ts">
import { onMount } from "svelte";

  import { movePage } from "../../functions/routerFunc";
  import Button from "../module/Button.svelte";

  function redGiagnalLine() {
    const tableDom = document.getElementById("table-dom");
    for (let i = 0; i < tableDom.childElementCount; i++) {
      let tr = tableDom.children[i];
      let td = tr.children[i];
      td.innerHTML = "<div class='bg-green-200'>";
    }
  }
  function dir(){
    console.dir(document.body);
  }
</script>

<Button
  title="go to DomTable"
  on:buttonClick={() => {
    movePage({ path: "/dom_labo/home" });
  }}
/>

<table class="m-2" id="table-dom">
  {#each Array(5) as _, x}
    <tr class="border-2">
      {#each Array(5) as _, y}
        <td class="border-2">{`${x}:${y}`}</td>
      {/each}
    </tr>
  {/each}
</table>

<Button title="red giagonal line" on:buttonClick={redGiagnalLine} />

<div class="border-2 w-full">
  <form class="border-2" name="search">
    <label
    >Search the site:
    <input type="text" name="search" />
  </label>
  <input type="submit" value="Search!" />
</form>

<form class="w-96" name="search-person">
  Search the visitors:
  <table class="border-2" id="age-table">
    <tr class="border-2">
      <td class="border-2">Age:</td>
      <td class="border-2" id="age-list">
        <label>
          <input type="radio" name="age" value="young" />less than 18</label
        >
        <label> <input type="radio" name="age" value="mature" />18-50</label>
        <label>
          <input type="radio" name="age" value="senior" />more than 50</label
          >
        </td>
      </tr>

      <tr class="border-2">
        <td class="border-2">Additionally:</td>
        <td class="border-2">
          <input type="text" name="info[0]" />
          <input type="text" name="info[1]" />
          <input type="text" name="info[2]" />
        </td>
      </tr>
    </table>

    <input type="submit" value="Search!" />
  </form>
</div>

<Button title="dir" on:buttonClick={dir} />


<style lang="postcss">
</style>
