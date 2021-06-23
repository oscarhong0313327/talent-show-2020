<template>
  <div id="app">
    <Navbar></Navbar>
    <Header></Header>
    <Intro></Intro>
    <Rule></Rule>
    <Timeline></Timeline>
    <Group></Group>
    <Gallery></Gallery>
    <FAQ></FAQ>
    <Handler></Handler>
    <Footer></Footer>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '@/components/Navbar.vue';
import Header from '@/components/Header.vue';
import Intro from '@/components/Intro.vue';
import Rule from '@/components/Rule.vue';
import Timeline from '@/components/Timeline.vue';
import Group from '@/components/Group.vue';
import Gallery from '@/components/Gallery.vue';
import FAQ from '@/components/FAQ.vue';
import Handler from '@/components/Handler.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Header,
    Intro,
    Rule,
    Timeline,
    Group,
    FAQ,
    Handler,
    Footer,
    Gallery,
  },
  mounted() {
    AOS.init({
      duration: 1500,
      once: true,
      anchorPlacement: 'top-bottom',
    });
  },
};

</script>

<style lang="scss">
@import 'color.scss';

html {
  overflow-x: hidden;
}

#app {
  font-family: "IBMPlexMono-Medium", "PingFangTC-Regular", "微軟正黑體", "Microsoft JhengHei";
  text-align: center;
  color: $base-dark;
}

.h-center {
  display: flex;
  justify-content: center;
}

img[lazy=loading] {
  width: 32px;
  height: 32px;
}

.v-center {
  display: flex;
  align-items: center; /* align vertical */
  justify-content: center;
}

.section {
  padding: 3rem 7rem;
  line-height: 40px;
  letter-spacing: 0.1rem;
}

.section-title {
  font-size: 2.0rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
}

.section-content {
  font-size: 1.2rem;
}

.section-dark {
  background-color: black;

  .section-title {
    color: white;
  }
  .section-content {
    color: white;
  }
}

.section-orange {
  background-color: $base-orange;
}

.section-blue-gray {
  background-color: $blue-gray;
}

.section-title::after {
  content: '';
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 20px;
  display: block;
  width: 40px;
  height: 3px;
  background: #47b2e4;
}

span.highlight {
  color: white;
  border-radius: 5px;
  padding: 0px 0.3rem;
  margin: 0px 0.3rem;

  &.blue {
    background-color: $base-blue;
  }

  &.pink {
    background-color: $base-pink;
  }

  &.orange {
    background-color: $base-orange;
    color: black;
  }

  &.green {
    background-color: $gray-green;
  }

  &.special-blue {
    background-color: $special-blue;
  }
}

.sweet-modal-overlay {
  background: rgba(255, 255, 255, 0.7);
}

.sweet-modal {
  .sweet-box-actions {
    z-index: 10001;

    .sweet-action-close {
      z-index: 10000;

      &:hover {
        background: $special-blue;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .section {
    padding: 3rem 1.5rem;

    .container {
      padding-right: 0;
      padding-left: 0;
    }
  }

  .section-title {
    font-size: 1.8rem;
  }

  .section-content {
    font-size: 1.2rem;
  }
}
</style>
