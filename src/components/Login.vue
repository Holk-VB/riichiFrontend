<script setup lang="ts">
import { ref } from 'vue'
import {getAPI, getToken} from "../axios-api"
import { useRouter } from "vue-router"
const router = useRouter()

const username = ref<String>('')
const password = ref<String>('')

async function submitLogin(){
  try{
    const response = await getToken.post('api-token-auth/', {
      username: username.value,
      password: password.value,
    })
    await localStorage.setItem('auth-token', response.data.token)
    getAPI.defaults.headers.common['Authorization'] = 'Token ' + response.data.token
    await router.push('home')
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <form @submit.prevent="submitLogin">
    <h3>Login</h3>

    <div  class="form-group">
      <label>Username</label>
      <input type="text" class="form-control" v-model="username" placeholder="Username"/>
    </div>

    <div  class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" v-model="password" placeholder="Password"/>
    </div>

    <button class="btn btn-primary btn-block">Login</button>
  </form>
</template>

<style scoped>
</style>