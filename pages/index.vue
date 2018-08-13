<template>
  <div class="app">
    <Home />
    <Navigation />
    <AboutMe />
    <Resume />
    <Skills />
    <Publications />
    <GetHired />
    <Contact />
  </div>
</template>
<script>
import Home from '@/components/Home.vue';
import Navigation from '@/components/Navigation.vue';
import AboutMe from '@/components/AboutMe.vue';
import Resume from '@/components/Resume.vue';
import Skills from '@/components/Skills.vue';
import Publications from '@/components/Publications.vue';
import GetHired from '@/components/GetHired.vue';
import Contact from '@/components/Contact.vue';

export default {
  components: {
    Home,
    Navigation,
    AboutMe,
    Resume,
    Skills,
    Publications,
    GetHired,
    Contact,
  }
}
</script>