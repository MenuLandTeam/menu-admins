import { createRouter, createWebHistory } from 'vue-router'
//import routes
import auth from "@/router/routes/auth/auth.js"
import dashboard from "@/router/routes/dashboard/dashboard.js";
import {Stores_Auth} from "@/stores/auth/auth.js";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      ...auth,
      ...dashboard
  ],
})






// Check Authenticate
router.beforeEach((to, from, next) => {
    // trying to access a restricted page + not logged in
    // redirect to login page
    if (to.path !== '/authentication' && !Stores_Auth().AuthGetCheckAuth) {
        next('/authentication');
    }else if (to.path === '/authentication' && Stores_Auth().AuthGetCheckAuth){
        next('/');
    }
    else {
        next();
    }
});

export default router
