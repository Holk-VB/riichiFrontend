<script setup lang="ts">
import { getAPI } from "../axios-api"
import { useStore } from "vuex"
import { useRouter } from "vue-router"

const store = useStore()
const router = useRouter()

async function createGame(){
  try{
    const response = await getAPI.post('games/create')
    await store.dispatch('player', response.data.player)
    await store.dispatch('game', response.data.game)
    await router.push('game/'+response.data.game.id.toString())
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <button @click="createGame" class="btn-dark">Create Game</button>
</template>