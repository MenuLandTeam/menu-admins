<script>
import {mapActions} from "vuex";

export default {
  name: "Global_Item_User_Group",
  props : ['user','groups'],
  mounted() {
    this.Group_Option_Generate();
    if (this.user.group){
      this.items.id = this.user.group.id;
      this.items.is_admin = this.user.group.is_admin;
      this.items.description = this.user.group.description;
    }
  },
  data(){
    return{
      dialog_edit:false,
      loading:false,
      group_option:[],
      admin_options:[
        {
          label : "بله",
          value : 1,
        },
        {
          label : "خیر",
          value : 0,
        }

      ],
      items:{
        id:null,
        is_admin:0,
        description:null
      }
    }
  },
  methods : {
    ...mapActions([
        "Module_User_Action_Group_Update"
    ]),
    Group_Option_Generate(){
      if (this.groups.length){
        this.group_option=[];
        this.groups.forEach(item => {
          this.group_option.push({
            label : item.name,
            value : item.id,
            color_code : item.color_code
          })
        })
      }
    },
    Filter_Group_Select (val, update, abort) {
      update(() => {
        if (val){
          this.group_option =  this.group_option.filter(item => {
            return item.label !== null && item.label.match(val)
          })
        }else {
          this.Group_Option_Generate();
        }
      })
    },
    Edit_Group(){
      this.loading = true;
      let items = {
        id : this.user.id,
        group_id : this.items.id,
        is_admin : this.items.is_admin,
        description : this.items.description
      }
      this.Module_User_Action_Group_Update(items).then(res => {
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

  <template v-if="user.group">
    <q-btn @click="dialog_edit=true" class="q-px-sm" size="11px" rounded v-if="user.group.is_admin" icon="fas fa-crown font-14 text-yellow-13" :label="user.group.group.name" text-color="white" :style="'background-color:'+user.group.group.color_code"></q-btn>
    <q-btn @click="dialog_edit=true" class="q-px-sm" size="11px" rounded v-else :label="user.group.group.name" text-color="white" :style="'background-color:'+user.group.group.color_code"></q-btn>
  </template>
  <template v-else>
    <q-btn @click="dialog_edit=true" color="grey-7" class="q-px-md" size="11px" rounded label="بدون گروه" text-color="white"></q-btn>
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
        <div class="q-mb-lg">
          <q-select
              outlined
              transition-show="flip-up"
              transition-hide="flip-down"
              v-model="items.id"
              label="انتخاب گروه"
              :options="group_option"
              @filter="Filter_Group_Select"
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
                <q-item-section avatar>
                  <q-chip :style="'background-color:'+scope.opt.color_code"></q-chip>
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ scope.opt.label }}</q-item-label>
                </q-item-section>
              </q-item>
            </template>
            <template v-slot:error>

            </template>
          </q-select>
        </div>
        <div class="q-mb-lg">
          <q-select
              outlined
              transition-show="flip-up"
              transition-hide="flip-down"
              v-model="items.is_admin"
              label="سرگروه باشد ؟"
              :options="admin_options"
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

          </q-select>
        </div>
        <div class="q-mb-lg">
          <q-input outlined v-model="items.description" type="textarea" label="توضیحات" rows="3">

          </q-input>
        </div>
      </q-card-section>
      <q-card-actions align="right" class="bg-white q-mb-sm">
        <q-btn glossy label="بستن" color="red-8" v-close-popup icon="fas fa-times"/>
        <q-btn @click="Edit_Group" :loading="loading" glossy label="ویرایش اطلاعات" color="teal-7" icon="fas fa-check" />
      </q-card-actions>
    </q-card>
  </q-dialog>


</template>

<style scoped>

</style>