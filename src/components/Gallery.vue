<template>
  <div class="section" id="gallery">
    <div class="section-title" data-aos="fade-up">
      活動照片
    </div>
    <div class="section-content">
      <CoolLightBox
        :items="items"
        :index="index"
        :effect="'fade'"
        @close="index = null">
      </CoolLightBox>
      <div class="row" id="img-row">
        <template v-for="(image, $index) in items">
          <div class="col-4 col-md-2 mb-4 v-center" :key="$index"
            v-if="$index <= numOfShowImg">
            <div>
              <img width="100%" :alt="image.description" v-lazy="image.src" @click="index = $index">
              <div class="image-title">{{ image.title }}</div>
            </div>
          </div>
          <div class="col-4 col-md-2 mb-4 v-center" :key="$index"
            v-if="$index <= numOfSeeMoreImg && $index === numOfSeeMoreImg" id="see-more-photos">
            <div>
              <img width="100%" :alt="image.description" v-lazy="image.src" @click="index = $index">
              <div id="text" @click="seeMoreImg()" v-if="$index !== (items.length - 1)">
                看更多
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-zoom-in" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                  <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
                  <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
              </div>
              <div class="image-title" v-else>{{ image.title }}</div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
export default {
  name: 'Gallery',
  components: { },
  data() {
    return {
      windowWidth: null,
      index: null,
      items: [
        {
          title: 'Final Presentation',
          description: '2021/01/14',
          src: require('@/assets/gallery/final_all.jpg'),
        },
        {
          title: 'Final - 籌辦團隊',
          description: '2021/01/14',
          src: require('@/assets/gallery/final_staff.jpg'),
        },
        {
          title: 'Final - First Place - 凱基銀行',
          description: '2021/01/14',
          src: require('@/assets/gallery/final_first_place.jpg'),
        },
        {
          title: 'Final - Second Place - 英業達',
          description: '2021/01/14',
          src: require('@/assets/gallery/final_second_place.jpg'),
        },
        {
          title: 'Final - Third Place - 台北 101',
          description: '2021/01/14',
          src: require('@/assets/gallery/final_third_place.jpg'),
        },
        {
          title: 'Final - Mentors',
          description: '2021/01/14',
          src: require('@/assets/gallery/final_mentor.jpg'),
        },
        {
          title: 'Final - Buffet',
          description: '2021/01/14',
          src: require('@/assets/gallery/final_food2.jpg'),
        },
        {
          title: 'Final - Buffet',
          description: '2021/01/14',
          src: require('@/assets/gallery/final_food1.jpg'),
        },
        {
          title: 'Pre-Final Presentation',
          description: '2021/01/07',
          src: require('@/assets/gallery/pre-final_all.jpg'),
        },
        {
          title: 'Sharing 5\n19 Solution',
          description: '2020/12/22',
          src: require('@/assets/gallery/sharing5_all.jpg'),
        },
        {
          title: 'Midterm Presentation',
          description: '2020/12/11',
          src: require('@/assets/gallery/midterm_all.jpg'),
        },
        {
          title: 'Sharing 4\nIndustry-based Solution',
          description: '2020/12/03',
          src: require('@/assets/gallery/sharing4_all.jpg'),
        },
        {
          title: 'Sharing 3 - 籌辦團隊',
          description: '2020/11/20',
          src: require('@/assets/gallery/sharing3_handler.jpg'),
        },
        {
          title: 'Sharing 3\nBig Data in Digital Transformation',
          description: '2020/11/20',
          src: require('@/assets/gallery/sharing3_all.jpg'),
        },
        {
          title: 'Round Table Workshop',
          description: '2020/11/12',
          src: require('@/assets/gallery/20201112 Round Table Workshop_all.jpg'),
        },
        {
          title: 'Sharing 2\nConsulting Skill',
          description: '2020/10/29',
          src: require('@/assets/gallery/sharing2.jpg'),
        },
        {
          title: 'Sharing 1\nDigital Transformation in Supply Chain',
          description: '2020/10/22',
          src: require('@/assets/gallery/S__25763847.jpg'),
        },
        {
          title: 'Kick Off - 玉山銀行',
          description: '2020/10/13',
          src: require('@/assets/gallery/S__5873850.jpg'),
        },
        {
          title: 'Kick Off - 英業達',
          description: '2020/10/13',
          src: require('@/assets/gallery/S__5873849.jpg'),
        },
        {
          title: 'Kick Off - 第一銀行',
          description: '2020/10/13',
          src: require('@/assets/gallery/S__5873848.jpg'),
        },
        {
          title: 'Kick Off - 啟碁科技',
          description: '2020/10/13',
          src: require('@/assets/gallery/S__5873847.jpg'),
        },
        {
          title: 'Kick Off - 凱基銀行',
          description: '2020/10/13',
          src: require('@/assets/gallery/S__5873846.jpg'),
        },
        {
          title: 'Kick Off - 台北 101',
          description: '2020/10/13',
          src: require('@/assets/gallery/S__5873845.jpg'),
        },
        {
          title: 'Kick Off - mentors',
          description: '2020/10/13',
          src: require('@/assets/gallery/S__5873844.jpg'),
        },
        {
          title: 'Kick Off - Jack',
          description: '2020/10/13',
          src: require('@/assets/gallery/S__5873843.jpg'),
        },
        {
          title: 'Kick Off - Hong',
          description: '2020/10/13',
          src: require('@/assets/gallery/S__5873841.jpg'),
        },
        {
          title: 'Kick Off',
          description: '2020/10/13',
          src: require('@/assets/gallery/kick-off.jpg'),
        },
        {
          title: '19 IBMer Brainstorming',
          description: '2020/7/14',
          src: require('@/assets/gallery/IMG_8336.jpg'),
        },
        {
          title: '19 籌辦團隊',
          description: '2020/7/14',
          src: require('@/assets/gallery/IMG_8337.jpg'),
        },
      ],
      numOfShowImg: 10,
      numOfSeeMoreImg: 11,
    };
  },
  mounted() {
    this.windowWidth = window.innerWidth;

    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth;
    });
  },
  methods: {
    seeMoreImg() {
      this.numOfSeeMoreImg = this.items.length - 1;
      this.numOfShowImg = this.numOfSeeMoreImg - 1;
    },
  },
};
</script>

<style lang="scss">
@import '../color.scss';

#gallery {
  #img-row {
    img {
      cursor: pointer;
      border-radius: 15px;
    }
  }

  .image-title {
    font-size: 0.9rem;
    line-height: normal;
    margin-top: 5px;
    white-space: pre-line;
  }

  #see-more-photos {
    #text {
      font-weight: 700;
      font-size: 0.9rem;
      z-index: 10;
      cursor: pointer;
    }
  }
}
</style>
