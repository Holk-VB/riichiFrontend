<script setup lang="ts">
import { getAPI } from "../axios-api"
import { useStore } from "vuex"
import { useRouter, useRoute } from "vue-router"
import {computed, onMounted, onUnmounted} from "vue";

const store = useStore()
const router = useRouter()
const route = useRoute()

const player = computed(() => store.getters.player)
const game = computed(() => store.getters.game)

let timer: number | null = null
let is_spectator: boolean | null = null
let selected_tile: number | null = null
let selected_call_id: number | null = null

async function loadGameData(){
  try{
    const response = await getAPI.get('games/'+route.params.gameId)
    await store.dispatch('game', response.data.game)
    if (response.data.player){ // does not exist if the user is not a part of the game
      is_spectator = false
      await store.dispatch('player', response.data.player)
    } else {
      is_spectator = true
    }
  } catch (error) {
    console.log(error)
  }
}

async function joinGame(){
  try{
    const response = await getAPI.post('games/'+route.params.gameId+'/join')
    await store.dispatch('player', response.data.player)
    await store.dispatch('game', response.data.game)
    is_spectator = false
  } catch (error) {
    console.log(error)
  }
}

async function discardTile(selected_tile: number){
  try{
    await getAPI.post('games/'+route.params.gameId+'/discard/'+selected_tile)
  } catch (error) {
    console.log(error)
  }
}

async function callInCallPhase(call_id: number){
  try{
    const data = {
      call: player.value.possible_calls[call_id]
    }
    await getAPI.post('games/'+route.params.gameId+'/call_in_call_phase', data)
    selected_call_id = null
  } catch (error) {
    console.log(error)
  }
}

async function callInTurnPhase(call_id: number){
  try{
    const data = {
      call: player.value.possible_calls[call_id]
    }
    await getAPI.post('games/'+route.params.gameId+'/call_in_turn_phase', data)
    selected_call_id = null
  } catch (error) {
    console.log(error)
  }
}

onMounted(async ()=>{
  await loadGameData()

  timer = setInterval(() => {
    loadGameData().then(()=>console.log('done'))
  }, 500)
})

onUnmounted(() => {
  if (timer){
    clearInterval(timer)
  }
})
</script>

<template>
  <div v-if="game">
    <div>----- Player JSON serialized -----</div>
    <div v-if="is_spectator === true && game.is_full === false" class="container">
      <button @click="joinGame" class="btn-dark">Join Game</button>
    </div>
    <div v-if="is_spectator === false && player.can_play === true" class="container">
      <button @click="discardTile(selected_tile)" class="btn-dark">Discard</button>
      <input type="number" v-model="selected_tile" placeholder="SelectedTile"/>
    </div>
    <div class="container">
      {{ player }}
    </div>
    <br>
    <div>----- Game JSON serialized -----</div>
    <div class="container">
      {{ game }}
    </div>
    <div v-if="game.current_round && player">
      <div v-if="is_spectator === false && game.current_round.current_hand.in_call_phase === true" class="container">
        <br>
        <div>----- Call Phase Call Choice -----</div>
        <button @click="callInCallPhase(selected_call_id)" class="btn-dark">Call</button>
        <input type="number" v-model="selected_call_id" placeholder="SelectedCall"/>
      </div>
      <div v-if="player.can_play === true" class="container">
        <br>
        <div>----- Call Phase Call Choice -----</div>
        <button @click="callInTurnPhase(selected_call_id)" class="btn-dark">Call</button>
        <input type="number" v-model="selected_call_id" placeholder="SelectedCall"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
