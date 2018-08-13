<template>
  <div class="app">
    <Home />
    <Navigation />
    <AboutMe />
    <Resume />
    <Skills />
  </div>
</template>
<script>
import Home from '@/components/Home.vue';
import Navigation from '@/components/Navigation.vue';
import AboutMe from '@/components/AboutMe.vue';
import Resume from '@/components/Resume.vue';
import Skills from '@/components/Skills.vue';

export default {
  components: {
    Home,
    Navigation,
    AboutMe,
    Resume,
    Skills,
  }
}
</script>