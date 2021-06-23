<template>
  <div class="section section-blue-gray" id="footer">
    The two illustrations in this website are designed by <a href="http://www.freepik.com" target="_blank">pch.vector / Freepik</a>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  components: { },
};
</script>

<style lang="scss">
@import '../color.scss';

#footer {
  padding: 1rem 1rem;
  color: $base-gray;
  line-height: 25px;

  a {
    color: $base-gray;

    &:hover {
      color: $base-gray;
    }
  }
}
</style>
