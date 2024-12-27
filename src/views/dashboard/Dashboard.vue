<script>
import { Stores_Auth } from "/src/stores/auth/auth.js"
export default {
  name: "Dashboard",
  mounted() {
    // Stores_Auth().AuthLogin('medhi','sdbfhsdgfjsdvfj')
    console.log(Stores_Auth().AuthGetUser);


  }


}
</script>

<template>
<h1>
  test
</h1>

</template>

<style scoped>

</style>