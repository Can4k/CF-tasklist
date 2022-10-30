<template>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>

<script>
const accepted_hrefs = [
    '/'
]
export default {
  name: "App",
  mounted() {
    if (accepted_hrefs.indexOf(location.pathname) === -1) {
      location.replace('/');
    }
  }
}
</script>