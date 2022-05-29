<script lang="ts">
  import Button from "../module/Button.svelte";
  import { movePage } from "../../functions/routerFunc";

  function checkLocation() {
    console.log("【ログ: location】", location);
  }

  function checkNavigator() {
    console.log("【ログ: navigator】", navigator);
  }

  let flgBgcIsRed = false;

  function changeBGcolor({ flg }: { flg: boolean }) {
    const targetColor = flgBgcIsRed ? "" : "red";
    flgBgcIsRed = !flgBgcIsRed;
    document.body.style.backgroundColor = targetColor;
  }

  function checkHtml() {
    console.log("【ログ: document.documentElement】", document.documentElement);
  }

  function checkDocument() {
    console.log("【ログ: document", document);
  }

  function allNodeConsole() {
    for (let i = 0; i < document.body.childNodes.length; i++) {
      console.log(
        "【ログ: document.body.childNodes】",
        document.body.childNodes[i]
      );
    }
  }

  function allElemConsole() {
    for (let i = 0; i < document.body.children.length; i++) {
      console.log(
        "【ログ: document.body.children】",
        document.body.children[i]
      );
    }
  }

  function innerHTML() {
    const parent1 = document.getElementById("parent1");
    parent1.innerHTML = "<p>child</p>";
  }

  function outerHTML() {
    const parent2 = document.getElementById("parent2");
    parent2.outerHTML = "<p>child</p>";
    console.log("【ログ: parent2】", parent2);
  }
  function logTextContent() {
    const el = document.getElementById("textContent");
    console.log("【ログ: el.textContent】", el.textContent);
  }

  function countDescendants() {
     for (let li of document.querySelectorAll('li')) {
      // get the title from the text node
      let title = li.firstChild.nodeValue;

      title = title.trim(); // remove extra spaces from ends

      // get the descendants count
      let count = li.getElementsByTagName('li').length;

      alert(title + ': ' + count);
    }
  }
</script>

  <h1>domhome</h1>
  <div class="m-3">
    <Button
      title="go to DomTable"
      on:buttonClick={() => {
        movePage({ path: "/dom_labo/table" });
      }}
    />
  </div>
  <div class="m-3">
    <Button title="checkLocation" on:buttonClick={checkLocation} />
    <Button title="checkNavigator" on:buttonClick={checkNavigator} />
    <Button
      title="changeBGcolor"
      on:buttonClick={() => {
        changeBGcolor({ flg: flgBgcIsRed });
      }}
    />
    <Button title="checkDocument" on:buttonClick={checkDocument} />
    <Button title="allNodeConsole" on:buttonClick={allNodeConsole} />
    <Button title="allElemConsole" on:buttonClick={allElemConsole} />
  </div>

  <hr class="m-1" />

  <div id="parent1">parent</div>
  <Button title="innerHTML" on:buttonClick={innerHTML} />

  <hr class="m-1" />
  <div id="parent2">parent</div>
  <Button title="outerHTML" on:buttonClick={outerHTML} />

  <hr class="m-1" />
  <div id="textContent">
    aaa<span>bbb</span>ccc
    <p>ddd</p>
  </div>
  <Button title="logTextContent" on:buttonClick={logTextContent} />

  <hr class="m-1" />
  <!----------  ---------->
  <ul>
    <li>
      Animals
      <ul>
        <li>
          Mammals
          <ul>
            <li>Cows</li>
            <li>Donkeys</li>
            <li>Dogs</li>
            <li>Tigers</li>
          </ul>
        </li>
        <li>
          Other
          <ul>
            <li>Snakes</li>
            <li>Birds</li>
            <li>Lizards</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      Fishes
      <ul>
        <li>
          Aquarium
          <ul>
            <li>Guppy</li>
            <li>Angelfish</li>
          </ul>
        </li>
        <li>
          Sea
          <ul>
            <li>Sea trout</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>

<Button title="countDescendants" on:buttonClick={countDescendants} />

<style lang="postcss">
</style>
