<template>
  <div class="app">
    <Home />
    <Navigation />
    <AboutMe />
  </div>
</template>
<script>
import Home from '@/components/Home.vue'
import Navigation from '@/components/Navigation.vue'
import AboutMe from '@/components/AboutMe.vue'

export default {
  components: {
    Home,
    Navigation,
    AboutMe,
  }
}
</script>