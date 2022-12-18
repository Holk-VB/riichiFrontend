<script setup lang="ts">
import {computed, onMounted} from "vue"
import Navigation from "../components/Navigation.vue"
import GameCreate from "../components/GameCreate.vue"
import GameGoTo from "../components/GameGoTo.vue"
import {getAPI} from "../axios-api"
import { useStore } from "vuex"
import { useRouter } from "vue-router"

const store = useStore()
const router = useRouter()

async function loadUser(){
  try {
    const response = await getAPI.get('api/user/')
    await store.dispatch('user', response.data)
  } catch (error) {
    await store.dispatch('user', null)
  }
}

const user = computed(() => store.getters.user)

onMounted(async ()=>{
  await loadUser()
  if (!user.value) {
    await router.push('login')
  }
})
</script>

<template>
  <Navigation/>

  <div v-if="user">
    <GameCreate/>
    <GameGoTo/>
  </div>
</template>

<style scoped>
</style>