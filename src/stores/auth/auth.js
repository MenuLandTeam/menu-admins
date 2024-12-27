import { defineStore } from 'pinia'
export const Stores_Auth = defineStore('auth',{
    state : ()=>({
        user : null,
        token : null
    }),
    actions : {
        AuthLogin(user,token){
            this.user = user;
            this.token = token
            localStorage.setItem('menu_token', token)
            localStorage.setItem('menu_user', JSON.stringify(user));
        },

        AuthSyncData(){
            if (localStorage.getItem('menu_token')){
                this.token = localStorage.getItem('menu_token');
            }
            if (localStorage.getItem('menu_user')){
                this.user = JSON.parse(localStorage.getItem('menu_user'));
            }
        }
    },
    getters :{
        AuthGetUser(){
            return this.user;
        },
        AuthGetCheckAuth(){
            return !!this.token;
        }




    }




})