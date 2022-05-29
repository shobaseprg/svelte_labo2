<script lang="ts">
  import { push } from "svelte-spa-router";
import Button from "./module/Button.svelte";
import {movePage} from "../functions/routerFunc"
</script>
  <Button title={"props_labo"} on:buttonClick={() => movePage({ path: "/props_labo" })} />
  <Button title={"js_labo"} on:buttonClick={() => movePage({ path: "/js_labo" })} />
  <Button title={"dom_labo"} on:buttonClick={() => movePage({ path: "/dom_labo/home" })} />
