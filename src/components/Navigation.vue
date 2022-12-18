<script setup lang="ts">
import {computed} from "vue"
import {useStore} from "vuex"
import { useRouter } from "vue-router"

const store = useStore()
const router = useRouter()

const user = computed(()=>store.getters.user)

async function logOut(){
  localStorage.removeItem('auth-token')
  await store.dispatch('user', null)
  await router.push('login')
  location.reload()
}
</script>


<template>

  <nav class="navbar navbar-expand navbar-light fixed-top">
    <div class="container">
      <router-link to="home" class="navbar-brand">Home</router-link>
      <div class="collapse navbar-collapse">
        <ul v-if="user" class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="javascript:void(0)" @click="logOut" class="nav-link">Log out</a>
          </li>
        </ul>
        <ul v-if="!user" class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="register" class="nav-link">Sign Up</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>