<script>
import {mapActions} from "vuex";

export default {
  name: "Global_Item_User_Role",
  props : ['user','roles'],
  created() {
    this.role_id = this.user.role_id;
  },
  mounted() {
    this.Role_Option_Generate();

  },
  data(){
    return{
      dialog_edit:false,
      loading:false,
      role_option:[],
      role_id : null
    }
  },
  methods : {
    ...mapActions([
        "Module_User_Action_Role_Update"
    ]),
    Role_Option_Generate(){
      if (this.roles.length){
        this.role_option=[];
        this.roles.forEach(item => {
          this.role_option.push({
            label : item.name,
            value : item.id,
          })
        })
      }
    },
    Filter_Role_Select (val, update, abort) {
      update(() => {
        if (val){
          this.role_option =  this.role_option.filter(item => {
            return item.label !== null && item.label.match(val)
          })
        }else {
          this.Role_Option_Generate();
        }
      })
    },
    Edit_Role(){
      this.loading = true;
      let items = {
        role_id : this.role_id,
        user : this.user.id
      }
      this.Module_User_Action_Role_Update(items).then(res => {
        this.$emit("Done")
        this.loading=false;
        this.dialog_edit=false;
        this.Methods_Notify_Update();
      }).catch(error => {
        this.loading=false;
        return this.Methods_Notify_Error_Server();
      })

    }

  }
}
</script>

<template>

  <template v-if="user.role">
    <q-btn @click="dialog_edit=true" class="q-px-sm" color="deep-orange-7" size="11px" rounded :label="user.role.name" ></q-btn>
  </template>
  <template v-else>
    <q-btn @click="dialog_edit=true" color="grey-7" class="q-px-md" size="11px" rounded label="بدون نقش" text-color="white"></q-btn>
  </template>

  <q-dialog
      position="top"
      v-model="dialog_edit"
  >
    <q-card style="width: 700px; max-width: 80vw;">
      <q-card-section>
        <strong class="font-15">
          ویرایش گروه کابر : <strong class="text-red-7">{{user.name}}</strong>
        </strong>
      </q-card-section>
      <q-separator/>
      <q-card-section >
        <div class="q-mb-lg" v-if="user">
          <q-select
              outlined
              transition-show="flip-up"
              transition-hide="flip-down"
              v-model="role_id"
              label="انتخاب نقش"
              :options="role_option"
              @filter="Filter_Role_Select"
              emit-value
              map-options
              use-input
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-red">
                  گزینه ای یافت نشد
                </q-item-section>
              </q-item>
            </template>
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps">
                <q-item-section>
                  <q-item-label>{{ scope.opt.label }}</q-item-label>
                </q-item-section>
              </q-item>
            </template>
            <template v-slot:error>

            </template>
          </q-select>
        </div>
      </q-card-section>
      <q-card-actions align="right" class="bg-white q-mb-sm">
        <q-btn glossy label="بستن" color="red-8" v-close-popup icon="fas fa-times"/>
        <q-btn @click="Edit_Role" :loading="loading" glossy label="ویرایش اطلاعات" color="teal-7" icon="fas fa-check" />
      </q-card-actions>
    </q-card>
  </q-dialog>


</template>

<style scoped>

</style>