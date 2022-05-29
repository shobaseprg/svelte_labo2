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
      a: "a",
      b: "b",
    };
    if ("a" in obj) {
      console.log("【ログ: 存在するよ】");
    } else {
      console.log("【ログ: 増殖存在しないよ】");
    }
  }

  function checkThis() {
    const obj = {
      name: "taro",
      sayName() {
        console.log("【ログ: this.name】", this.name);
      },
      sayThis() {
        console.log("【ログ: this】", this);
      },
    };
    obj.sayName();
    obj.sayThis();
  }

  function checkThis2() {
    function makeUser() {
      return {
        name: "John",
        ref: this,
      };
    }

    let user = makeUser();

    console.log("【ログ: {user.ref.name}】", user.ref.name);
  }

  function haveThisMethod() {
    const calculator = {
      firstValue: 0,
      secondValue: 0,
      sum() {
        alert(this.firstValue + this.secondValue);
      },
      mul() {
        alert(this.firstValue - this.secondValue);
      },
      read() {
        this.firstValue = prompt("a?", "0");
        this.secondValue = prompt("b?", "0");
      },
    };
    calculator.read();
    calculator.sum();
    calculator.mul();
  }

  function chaneMethod() {
    let ladder = {
      step: 0,
      up() {
        this.step++;
        return this;
      },
      down() {
        this.step--;
        return this;
      },
      showStep: function () {
        alert(this.step);
      },
    };
    ladder.up().up().up().up().up().down().showStep();
  }

  function optionalChaining() {
    let obj2;
    console.log("【ログ: {a}】", obj2?.a);
  }
</script>

<div>js labo</div>
<Button title="dynamic object key" on:buttonClick={dynamicObjectKey} />
<Button title="object key check " on:buttonClick={checkKeyExist} />
<Button title="check this" on:buttonClick={checkThis} />
<Button title="check this 2" on:buttonClick={checkThis2} />
<Button title="haveThisMethod" on:buttonClick={haveThisMethod} />
<Button title="chaneMethod" on:buttonClick={chaneMethod} />
<Button title="optional chaining" on:buttonClick={optionalChaining} />

<style lang="postcss">
</style>
