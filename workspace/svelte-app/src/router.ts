import PropsLabo from './component/PropsLabo/Parent.svelte'
import Home from "./component/Home.svelte"
import JsLabo from "./component/JsLabo.svelte"

let routes = {
  '/': Home,
  '/props_labo': PropsLabo,
  '/js_labo':JsLabo

}
 export default routes;
