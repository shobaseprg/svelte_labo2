<script lang="ts">
import Child from "./Child.svelte"

let name = "Taro";
let age = 18;
let gender = "man"
 </script>

 <Child {name} {age} {gender}/>

<style lang="postcss">
</style>
