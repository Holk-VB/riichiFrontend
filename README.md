# Vue 3 + TypeScript + Vite

This school project is developed using Vue 3, TypeScript and Vite to build a frontend accessing the backend Mahjong API.

Vue 3 views all uses `<script setup>`, `<template>` and `<style>`:
1. `<script setup>` contains all constants and functions that will be used in the view, for more info check out [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup).
2. `<template>`is an HTML based template that allow you to bind data from script onto DOM elements, for more info check out [template docs](https://vuejs.org/guide/essentials/template-syntax.html#basic-syntax). 
3. `<style>`which contains all the CSS of the page.

This frontend is very basic and uses bootstrap to get some easy to use css classes.

Yet it can be used as a reference to understand how the different Vue elements interact with each other. Components are parts of views that can be used in many pages. Creating components serves the same purpose as creating functions for repeated lines of code. 

## Vue-router + Vuex + Axios

Some addons were needed to make use of the backend API properly:

1. Vue-router is used to create the routes of the frontend and to navigate between pages, its corresponding configuration file is router.ts. [here are the docs](https://router.vuejs.org/guide/).
2. Vuex is used to store data onto the frontend here it is used to store player and game data between API calls, its corresponding configuration file is vuex.ts. [here are the docs](https://vuex.vuejs.org/guide/)
3. Axios is used to make API calls with a specific header which permit user authentication via token, its corresponding configuration file is axios-api.ts. [here are the docs](https://axios-http.com/docs/api_intro)

## TODO

1. Implement a **visually pleasing** game interface