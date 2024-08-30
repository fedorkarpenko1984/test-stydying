import { createRouter, createWebHashHistory } from "vue-router"

import Home from "../pages/Home.vue"
import Todo from "../pages/Notes.vue"
import Canban from "../pages/Canban.vue"

const routes = [
  {
	path: "/",
	name: "home",
	component: Home
  },
  {
	path: "/todo",
	name: "todo",
	component: Todo
  },
  {
	path: "/canban",
	name: "user",
	component: Canban,
	meta: {
	  layout: 'empty',
	}
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router