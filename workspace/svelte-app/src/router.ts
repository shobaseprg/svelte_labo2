import PropsLabo from './component/PropsLabo/Parent.svelte'
import Home from "./component/Home.svelte"
import JsLabo from "./component/JsLabo.svelte"
import DomLaboHome from "./component/domLabo/DomHome.svelte"
import DomLaboTable from "./component/domLabo/DomTable.svelte"

let routes = {
  '/': Home,
  '/props_labo': PropsLabo,
  '/js_labo':JsLabo,
  '/dom_labo/home': DomLaboHome,
  '/dom_labo/table':DomLaboTable
}
 export default routes;
