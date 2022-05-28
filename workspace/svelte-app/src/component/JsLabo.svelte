<script lang="ts">
  import Button from "./module/Button.svelte";

  function dynamicObjectKey() {
    const keyList = ["one", "two", "three"];

    const obj = {
      ["no." + keyList[0]]: "ichi",
      ["no." + keyList[1]]: "ni",
      ["no." + keyList[2]]: "san",
    };

    console.log(obj);
  }

  function checkKeyExist() {
    const obj = {
      a:"a",
      b:"b",
    }
    if("a" in obj){
      console.log("【ログ: 存在するよ】");
    }else{
      console.log("【ログ: 増殖存在しないよ】");
    }
  }

</script>

<div>js labo</div>
<Button title="dynamic object key" on:buttonClick={dynamicObjectKey} />
<Button title="object key check " on:buttonClick={checkKeyExist} />


<style lang="postcss">
</style>
