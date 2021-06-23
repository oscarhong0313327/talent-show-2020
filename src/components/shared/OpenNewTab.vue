<template>
  <div id="open-new-tab">
    <div class="v-center">
      <a :href="poster" target="_blank">
        <svg width="1.0625em" height="1em" viewBox="0 0 17 16" class="bi bi-image" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M14.002 2h-12a1 1 0 0 0-1 1v9l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094L15.002 9.5V3a1 1 0 0 0-1-1zm-12-1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm4 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
        </svg>
      </a>
      <a :href="poster" target="_blank" class="ml-2">海報大圖</a>
      <div class="ml-4" v-if="video">
        <a :href="video" target="_blank">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-camera-video" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175l3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1
              0 0 0 1-1V5a1 1 0 0 0-1-1H2z"/>
          </svg>
        </a>
        <a :href="video" target="_blank" class="ml-2">當日影片回放</a>
      </div>
    </div>
    <div id="video-pw" v-if="videoPW">（影片回放密碼：{{ videoPW }}）</div>
  </div>
</template>

<script>
export default {
  name: 'OpenNewTab',

  components: {
  },

  props: ['poster', 'video', 'videoPW'],

  data() {
    return {

    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../color.scss';

#open-new-tab {
  margin-bottom: 1rem;

  a {
    color: $gray-green;

    &:hover {
      color: $gray-green-light;
    }
  }

  #video-pw {
    font-size: 0.9rem;
  }
}
</style>
