<template>
  <div id="navbar">
    <scrollactive :offset="windowWidth < 768 ? 56 : 72" class="my-nav">
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark" :class="{ 'bg-transparent': scrollPosition < 200, 'bg-dark': scrollPosition >= 200 }">
        <a href="#header" class="navbar-brand scrollactive-item">Talent Show 2020</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          ref="navbarTogglerButton">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item ml-3" v-for="(navItem, $index) in navItemList" :key="$index">
              <a :href="'#' + navItem.id" class="nav-link scrollactive-item" @click="toggleNav()">{{ navItem.name }}</a>
            </li>
          </ul>
        </div>
      </nav>
    </scrollactive>
  </div>
</template>

<script>
export default {
  name: 'Navmar',
  components: {},
  data() {
    return {
      scrollPosition: 0,
      windowWidth: null,
      navItemList: [
        {
          name: '宗旨',
          id: 'intro',
        },
        {
          name: '時程',
          id: 'timeline',
        },
        {
          name: '分組名單',
          id: 'group',
        },
        {
          name: '活動照片',
          id: 'gallery',
        },
        {
          name: '常見問題',
          id: 'faq',
        },
        {
          name: '籌辦團隊',
          id: 'handler',
        },
      ],
    };
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll, true);

    this.windowWidth = window.innerWidth;

    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth;
    });
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    toggleNav() {
      if (this.windowWidth < 768) {
        this.$refs.navbarTogglerButton.click();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../color.scss";

@media only screen and (min-width: 600px) {
  .navbar {
    padding: 1rem 5rem 1rem 6rem;

    .navbar-brand,
    .navbar-nav {
      font-weight: 700;
    }
  }
}

#navbar {
  a {
    cursor: pointer;
  }

  .bg-dark {
    background-color: $base-header !important;
    transition: background-color 300ms linear;
  }

  .bg-transparent {
    background-color: $base-header !important;
    transition: background-color 300ms linear;
  }

  .navbar-dark {
    .navbar-nav {
      .nav-link {
        &.is-active {
          color: $special-blue;
          background-color: white;
          border-radius: 10px;

          &:hover {
            color: $special-blue;
          }
        }

        &:hover {
          color: rgba(255,255,255,.5);
        }
      }
    }
  }
}
</style>
