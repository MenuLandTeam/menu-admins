<script>
import {Stores_Auth} from "@/stores/auth/auth.js";

export default {
  name:'Authentication',
  mounted() {
    document.body.classList.add("auth-background");
  },
  unmounted() {
    document.body.classList.remove("auth-background");
  },
  data(){
    return {
      loading:false,
      login : {
        email: null,
        password: null
      }
    }
  },
  methods:{
    Login(){
      this.loading = true;
      axios.post('/users/auth/login',this.login).then(res=>{
        Stores_Auth().AuthLogin(res.data.result.user,res.data.result.token)
        this.Methods_Notify_Message_Success("باموفقیت وارد حساب کاربری شدید")
        this.$router.push('/');
      }).catch(err=>{
        if(err.response.status === 401){
          this.Methods_Notify_Message_Error("اطلاعات ورود به حساب نادرست است")
        }else {
          this.Methods_Notify_Error_Server();
        }
        this.loading = false;

      })


    }
  }


}

</script>

<template>
  <div class="row justify-center" style="margin-top: 160px">
    <div class="col-md-6 col-sm-12 col-xs-12">
      <q-card class="auth-box">
        <q-card-section>
          <div class="text-center index-title font-lalezar text-white q-mt-sm">
            ... آیت کافی ...
          </div>
          <div class="text-center subtitle text-white q-mt-md">
            ورود به مدیریت کافه
          </div>
        </q-card-section>
        <q-card-section>
          <div class="row justify-center q-mt-sm q-mb-lg">
            <div class="col-md-6 col-sm-12 col-xs-12 text-white">
              <div dir="ltr">
                <q-input v-model="login.email" class="bg-input font-16" rounded outlined color="blue-grey-3" input-style="color:#ffffff">
                  <template v-slot:append>
                      <q-icon name="fa-duotone fa-solid fa-user-tie" color="white"></q-icon>
                  </template>
                </q-input>
              </div>
              <div class="q-mt-lg" dir="ltr">
                <q-input v-model="login.password" type="password" class="bg-input font-16" rounded outlined color="blue-grey-3" input-style="color:#ffffff">
                  <template v-slot:append>
                      <q-icon name="fa-duotone fa-solid fa-lock" color="white"></q-icon>
                  </template>
                </q-input>
              </div>
              <div class="q-mt-xl text-right">
                <q-btn :loading="loading" @click="Login" glossy label="ورود به مدیریت" color="blue-8" rounded class="font-16" icon="fas fa-check"></q-btn>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>

  </div>




</template>

<style scoped>
.auth-box{
  background-color: rgba(0, 0, 0, 0.65);
}
.index-title{
  font-size: 38px;
}
.subtitle{
  font-size: 22px;
}
.bg-input{
  background-color: rgba(255, 255, 255, 0.28);
  border-radius: 30px;
}
@media only screen and (max-width: 768px) {
  .index-title{
    font-size: 28px;
  }

}
</style>