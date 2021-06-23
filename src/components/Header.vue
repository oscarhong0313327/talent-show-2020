<template>
  <div class="v-center" id="header">
    <div class="row h-center">
      <div class="col-12 col-md-5" data-aos="zoom-in">
        <img width="100%" :src="require('@/assets/header4.png')">
      </div>
      <div class="col-12 col-md-5 mb-5 mb-md-0 v-center" data-aos="zoom-in">
        <div id="header-content">
          Talent Show 2020
          <div id="small">
            Brave the Stage and Show Talent !
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',

  components: {
  },

  data() {
    return {
      windowHeight: window.innerHeight,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../color.scss";

#header {
  background-color: $base-header;
  padding-top: 4rem;

  #header-content {
    color: white;
    font-size: 2.5rem;
    font-weight: 700;

    #small {
      font-size: 1.6rem;
      font-weight: 400;
    }
  }
}

@media only screen and (min-width: 1600px) {
  #header {
    #header-content {
      #small {
        margin-top: 1rem;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  #header {
    #header-content {
      font-size: 2rem;

      #small {
        font-size: 1.4rem;
      }
    }

    .row {
      margin-left: 0;
      margin-right: 0;
    }
  }
}

@media only screen and (max-width: 414px) {
  #header {
    #header-content {
      #small {
        font-size: 1.3rem;
      }
    }
  }
}
</style>
