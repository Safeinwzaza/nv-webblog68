<template>
  <div>
    <h2>Get all users</h2>
    <h4>จำนวนผู้ใช้งาน {{users.length}}</h4>
    <div v-for="user in users" v-bind:key="user.id">
      <p>id: {{ user.id }}</p>
      <p>ชื่อ-นามสกุล: {{ user.name }} - {{ user.lastname }}</p>
      <p>email: {{ user.email }}</p>
      <p>password: {{ user.password }}</p>
      <p><button v-on:click="navigateTo('/user/'+user.id)">ดูข้อมูลผู้ใช้</button></p>
      <hr>
    </div>
  </div>
</template>

<script>
import UsersService from '../../services/UsersService'

export default {
    data () {
        return {
            users: []
        }
    },
    async created () {
        try {
            this.users = (await UsersService.index()).data
            console.log(this.users)
        } catch (error) {
            console.log(error)
        }
    },


  // Logic จะเขียนตรงนี้
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },


};
</script>

<style scoped>
/* CSS เฉพาะหน้านี้ */
</style>
