import Vue from 'vue'
import Router from 'vue-router'
import { routing } from '@/config'
import bus from '@/eventbus'

Vue.use(Router)
var router = new Router({
  mode: 'history',
  routes: routing
})

router.afterEach((to, from) => {
  if (to.name === 'ap-landing') {
    bus.$emit('backdrop-dark')
    bus.$emit('nav-hide')
    // Close the navigation menu and remove it's backdrop
    let backdrop = document.getElementById('navigation-backdrop')
    let toggle = document.querySelector('.nav-toggle')
    let menu = document.querySelector('.nav-menu')
    if (backdrop) backdrop.remove()
    if (toggle.classList.contains('is-active')) toggle.classList.remove('is-active')
    if (menu.classList.toggle('is-active')) menu.classList.remove('is-active')
  } else {
    bus.$emit('backdrop-light')
    bus.$emit('nav-show')
  }
  document.title = to.meta.title
  // Reseting the navigation menu
  let toggle = document.querySelector('.nav-toggle')
  let menu = document.querySelector('.nav-menu')
  let navigationBackdrop = document.getElementById('navigation-backdrop')
  if (navigationBackdrop) navigationBackdrop.remove()
  if (toggle) { if (toggle.classList.contains('is-active')) toggle.classList.remove('is-active') }
  if (menu) { if (menu.classList.contains('is-active')) menu.classList.remove('is-active') }
})
export default router
