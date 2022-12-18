<script setup lang="ts">
import { getAPI } from "../axios-api"
import { useStore } from "vuex"
import { useRouter } from "vue-router"

const store = useStore()
const router = useRouter()

let selected_game_id: number | null = null

async function goToGame(selected_game_id: number){
  try{
    await router.push('game/'+selected_game_id.toString())
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div>
    <button @click="goToGame(selected_game_id)" class="btn-dark">Go To Game</button>
    <input type="number" v-model="selected_game_id" placeholder="SelectedGameId"/>
  </div>
</template>