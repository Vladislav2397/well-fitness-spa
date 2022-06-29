import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    // @ts-ignore
    scrollBehavior (to, from, savedPosition) {
        // Exists when Browser's back/forward pressed
        if (savedPosition) {
            return savedPosition
            // For anchors
        } else if (to.hash) {
            return {selector: to.hash}
            // By changing queries we are still in the same component,
            // so "from.path" === "to.path"
            // (new query changes just "to.fullPath", but not "to.path").
        } else if (from.path === to.path) {
            return {}
        }

        // Scroll to top
        return {x: 0, y: 0}
    },
    routes,
})

export default router
