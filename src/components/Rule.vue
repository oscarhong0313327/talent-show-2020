<template>
  <div class="section section-blue-gray" id="rule">
    <div class="section-content" id="text">
      <div class="row">
        <div class="col-12" :class="{ 'col-lg-8': windowWidth > 1600 }" data-aos="fade-right">
          <div id="title">
            <span>賽制說明</span>
          </div>
          <ol>
            <li v-for="(desc, $index) in descList" :key="$index">
              <span v-html="desc"></span>
            </li>
          </ol>
        </div>
        <div class="col-12 col-lg-4 v-center" v-if="windowWidth > 1600" data-aos="zoom-in">
          <img height="300px" src="@/assets/rule.png">
        </div>
        <div class="col-12 text-center" v-else data-aos="zoom-in">
          <img height="300px" src="@/assets/rule.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rule',
  components: { },
  data() {
    return {
      windowWidth: null,
      descList: [
        '不同專業與職稱的 Young Talents 會被平均分配至各組，每組 6-7 人，<span class="highlight orange">共 6 組</span>。',
        '每組皆會有<span class="highlight orange">1 名 Sector</span> 與 <span class="highlight orange">2 名 Mentors</span>，協助各組在每個 Tasks 與 Milestones 中的表現。',
        '每組須於 Talent Show 的 Final Presentaion，針對各自的客戶與其面臨的問題，提出完整的解決方案，解決方案應涵蓋 <span class="highlight orange">50% Engagement + 50% POC 成果</span>。當天會由長官們與現場觀眾給予最終評價；權重為 7:3。',
      ],
    };
  },
  mounted() {
    this.windowWidth = window.innerWidth;

    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth;
    });
  },
};
</script>

<style lang="scss">
@import '../color.scss';

#rule {
  #text {
    text-align: justify;
  }

  #title {
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 1.3rem;

    // span {
    //   border-bottom: 2px solid $special-blue;
    //   padding: 0.5rem 1rem;
    // }
  }

  ol {
    list-style: none;
    counter-reset: steps;
    padding-left: 0px;
  }

  ol li {
    counter-increment: steps;
    margin-bottom: 1.3rem;
  }

  ol li::before {
    content: counter(steps);
    margin-right: 0.5rem;
    background: $base-orange-dark;
    color: white;
    width: 1.2em;
    height: 1.2em;
    border-radius: 50%;
    display: inline-grid;
    place-items: center;
    line-height: 1.2em;
  }
}

@media only screen and (max-width: 768px) {
  #rule {
    img {
      height: 200px;
    }
  }
}
</style>
