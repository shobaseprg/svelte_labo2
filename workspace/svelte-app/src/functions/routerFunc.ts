import Router, { push } from "svelte-spa-router";
import routes from "../router"

function movePage({ path }: { path: string }) {
  push(path);
}

export { movePage }
