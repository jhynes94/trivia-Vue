<template>
  <div id="app">
       <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
         <div class="navbar-header">
            <a class="navbar-brand">Bar trivia v0.1</a>
         </div>
      </div>
   </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
