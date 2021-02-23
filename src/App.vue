<template>
  <div id="app">
    <!-- Nav bar -->
    <header class="navbar mx-2 mt-2">
      <section class="navbar-section">
        <router-link to="/" class="navbar-brand">Coloc</router-link>
        <!-- <router-link to="/about" class="btn btn-link">Docs</router-link> -->
      </section>
      <section class="navbar-section">
        <router-link to="/login" class="btn btn-primary mr-2"
          >Login</router-link
        >
        <router-link to="/register" class="btn">Register</router-link>
      </section>
    </header>

    <!-- content -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
