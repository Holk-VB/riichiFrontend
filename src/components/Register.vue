<script setup lang="ts">
import { ref } from 'vue'
import { getToken } from "../axios-api";

const first_name = ref<String>('')
const last_name = ref<String>('')
const email = ref<String>('')
const password = ref<String>('')
const confirm_password = ref<String>('')

function submitRegister(){
  const data = {
    first_name: first_name.value,
    last_name: last_name.value,
    email: email.value,
    password: password.value,
    confirm_password: confirm_password.value,
  }
  getToken.post('register/', data)
}
</script>

<template>
  <form @submit.prevent="submitRegister">
    <h3>Sign Up</h3>

    <div  class="form-group">
      <label>First Name</label>
      <input type="text" class="form-control" v-model="first_name" placeholder="First Name"/>
    </div>

    <div  class="form-group">
      <label>Last Name</label>
      <input type="text" class="form-control" v-model="last_name" placeholder="Last Name"/>
    </div>

    <div  class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" v-model="email" placeholder="Email"/>
    </div>

    <div  class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" v-model="password" placeholder="Password"/>
    </div>

    <div  class="form-group">
      <label>Confirm Password</label>
      <input type="password" class="form-control" v-model="confirm_password" placeholder="Confirm Password"/>
    </div>

    <button class="btn btn-primary btn-block">Sign Up</button>
  </form>
</template>