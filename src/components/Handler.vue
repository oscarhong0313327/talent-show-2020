<template>
  <div class="section" id="handler">
    <div data-aos="fade-up">
      <div class="section-title">籌辦團隊</div>
      <div class="section-content container" data-aos="zoom-in" data-aos-delay="400">
        <div class="lead-text mb-4">
          <span class="highlight pl-4 pr-4">Leader</span>
        </div>
        <div class="row h-center">
          <div class="col-12 col-md-4 mb-5" v-for="(leader, $index) in leaders" :key="$index">
            <img width="100rem" class="handler-img" v-lazy="require(`@/assets/handlers/${leader.englishName}.png`)" @click="openModal(leader)">
            <div class="leader-content">
              {{ leader.englishName }}<br />
              <span v-html="leader.position"></span>
            </div>
          </div>
        </div>

        <div class="handle-text mb-4">
          <span class="highlight pl-3 pr-3">19 IBMer</span>
        </div>
        <div class="row h-center">
          <div class="col-12 col-md-4 mb-5" v-for="(handler, $index) in handlers" :key="$index">
            <img width="100rem" class="handler-img" v-lazy="require(`@/assets/handlers/${handler.englishName}.png`)" @click="openModal(handler)">
            <div class="leader-content">
              {{ handler.englishName }}<br />
              {{ handler.serviceLine }}<br />
              {{ handler.position }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <sweet-modal ref="modal">
      <template v-if="selectedPerson">
        <img width="150rem" v-lazy="require(`@/assets/handlers/${selectedPerson.englishName}.png`)">
        <div class="mt-3">
          {{ selectedPerson.englishName || '' }}<br />
          {{ selectedPerson.serviceLine || '' }}<br />
          <span v-html="selectedPerson.position">{{ selectedPerson.position || '' }}</span><br />
          {{ selectedPerson.email || '' }}
        </div>
      </template>
    </sweet-modal>

    <sweet-modal ref="wordcloud" width="100%">
      <wordcloud
        v-if="wordcloud.showWordcloud"
        :data="wordcloud.defaultWords"
        :color="wordcloud.myColors"
        nameKey="name"
        valueKey="value"
        :showTooltip="false"
        :wordClick="wordClickHandler"
        :rotate="{ from: 0, to: 0, numOfOrientation: 0 }"
        :wordPadding="10">
      </wordcloud>
      <button class="btn btn-info" @click="refreshWordcloud">重新</button>
    </sweet-modal>

  </div>
</template>

<script>
import wordcloud from 'vue-wordcloud';
// import VueWordCloud from 'vuewordcloud';

export default {
  name: 'Handler',
  components: { wordcloud },
  data() {
    return {
      selectedPerson: null,
      leaders: [
        {
          englishName: 'Jack Hsiao',
          serviceLine: 'CPR',
          position: 'Partner<br />CPT Growth Platform Leader',
          email: 'cchsiao@tw.ibm.com',
        },
        {
          englishName: 'Elisa Lin',
          serviceLine: 'CPR',
          position: 'Managing Consultant<br />GBS TW FSS Cluster',
          email: 'elisal@tw.ibm.com',
        },
        {
          englishName: 'Valen Chang',
          serviceLine: 'CPR',
          position: 'Managing Consultant<br />GBS TW CPR',
          email: 'valench@tw.ibm.com',
        },
      ],
      handlers: [
        {
          englishName: 'Alice Liu',
          serviceLine: 'iX',
          position: 'Application Developer',
          email: 'Alice.IS.Liu@ibm.com',
        },
        {
          englishName: 'Cindy Liu',
          serviceLine: 'CAS',
          position: 'Application Consultant',
          email: 'Cindy.TJ.Liu@ibm.com',
        },
        {
          englishName: 'Jane Pan',
          serviceLine: 'EA',
          position: 'Associate Package Solution Consultant',
          email: 'jane.pan@ibm.com',
        },
        {
          englishName: 'Kevin Ying',
          serviceLine: 'CPR',
          position: 'Application Consultant',
          email: 'kevin.js.ying@ibm.com',
        },
        {
          englishName: 'Peter Chien',
          serviceLine: 'CBDS',
          position: 'Application Consultant',
          email: 'peter.chien@ibm.com',
        },
        {
          englishName: 'Yachu Yang',
          serviceLine: 'CPR',
          position: 'Business Consultant',
          email: 'Yaya.Yang@ibm.com',
        },
      ],
      wordcloud: {
        showWordcloud: false,
        myColors: ['#3E92FC', '#E03B5B', '#729B79', '#FDB604'],
        // eslint-disable-next-line
        thanksWords: ['感謝Benson總是可以激發組內更多的思考與討論，接下開發小組長領導大家，表現超好! 喜歡你勇於承擔與負責任的態度! 無論是在開發、討論、報告、領導上都辛苦啦(抱) 很開心英業達有你:)', '感謝 Benson 期中後就帶著開發小組把 IntelliQ 生出來，每次開會都能看到寶寶慢慢茁壯的感覺著實感動>< 謝謝滿哥！ ', '感謝Benson！！！很開心可以一起完成Talent Show 之後要再約慶功 歐耶🎉', '"苡甄~感謝你總是幫忙各種大小事，開box，行事曆，提醒組長各種代辦XD，做簡報也很細心，每次在大家討論僵住的時候都會跳出來提供想法超棒的，也都會主動幫忙組內統整簡報，真低感謝你~。TS壓力山大也都可以跟你聊天，慶幸也感謝副組長是你XD。"', 'POC很棒喔ㄏㄏ', '謝謝妳 很罩!!', '謝謝苡甄姐姐的努力付出~', '報告能力真的強欸', '謝謝Nancy，報告都很穩又很厲害，每次討論都可以有很多東西可以產出，雖然工作很爆炸，但總能在時間內完成討論的內容，很開心能有機會合作~謝謝妳，辛苦了!!', '期末報告開場太穩了吧~~感謝你的carry<3', '這陣子辛苦了～～', 'Great', '組長猛', '組長，辛苦了呀！謝謝你默默扛下很多事，並為團隊貢獻，從你身上也學習到很多，你真的很優秀！很開心能與你一起共事，最後，慶功宴時好好一起慶功吧！未來一起加油！', '感謝秉楠在final一直設立停損點，才能讓我們在超有限的時間內完成報告，也會不時逗樂大家，身為組長真的辛苦了!', '很高興認識各位<3', '謝謝 Nicole 主導 POC 的開發，報告給予的建議也都相當實用～', '感謝Carry POC~', '期末報告表現超穩，整個游刃有餘。感謝Fanny總是樂意主動多分擔組內的任務，遇到問題也會積極的尋求組員間的討論與解答，把工作交給妳總是讓人放心~是故視線小組不可或缺的成員之一，能一起合作真的好開心!!! (BTW 尾牙真的超辣der', '謝謝 Fanny 過程中提供很多想法，最後期末報告台風也超穩！！直接收服台下卓董巫總', 'Fanny讚哦！期末報告的很棒～', '很開心可以成為英業達小組的一員 非常感謝大家！！！', 'wwwww', '謝謝你擔任組長', '妳人好好~ 感謝妳!!!', '謝謝妳願意當組長帶著大家前進', '超棒的組長，高效率的完成talent show', '組長大辛苦了', '謝謝Nick，超級罩的組長，強大的Developer，不可或缺的靈魂人物，謝謝你總是在組內盡心盡力，又很照顧組員，很高興能有機會合作，謝謝你，辛苦了!!', '身為組長/CTO/CIO/精神領袖，沒什麼好說的，就是大感謝尼哥你辣!!', '謝謝Nick帶領我們持續前進。每次當我們很累時，都願意自己跳出來保護大家，真心感謝尼哥', 'Thanks leader', 'Jason謝啦', 'POC資料庫辛苦了！"', '請加油好ㄇ', '三個月來辛苦了！一起加班、週末都來公司，終於到一個段落啦～ 感謝Jason幫忙想效益、報告，辛苦了！未來一起加油！', 'Jason感謝你midterm時幫忙站出來簡報, 也加入POC實作與效益分析的討論，從一開始就沒有把你當作嫩Jason在看，一直覺得你是一定是可以input更多idea的, 所以在每次開會的過程中，都嘗試著分配適合你的工作，也發現你的大幅進步!! 在IBM一定要對自己有自信，就算心裏是害怕的，還是要在這未知的旅途前進 期待未來在CAS有機會一起合作!', 'Jason很會找資料，也都在過程中默默的幫每個人，報告的時候也很有自信! 讚讚', '辛苦了', '愛你(這邊幫我加顆愛心謝謝)', '很高興認識各位<3', '感謝 Ario 當我們這組的資料大師，從一開始搜集資料到後面貼標都很 carry ！', '英業達最強的的Developer，POC因為Davin凱瑞一波，我們team的小主管在我們期末報告完後，非常讚賞地問我們這個系統是怎麼開發出來的(他說看得很心動)。Davin是組內的一股安定力量，做事有原則，能分清楚優先順序，並在自己負責的工作上全力以赴，感謝Davin為Talent Show的付出，能夠一起合作真的很開心~英業達有你真好:)', '感謝強大的開發王 Davin !! 每次亂想一些新功能都有點心虛，但隔幾天就會看到 Davin 把這些功能做出來真的感動QQ 謝謝 Davin 讓我們能露出滿意的微笑', 'Davin大神！沒有你開發小組怎摸辦・゜・(PД`q｡)・゜・', '感謝Davin！！！很開心可以一起完成Talent Show 之後要再約慶功 歐耶🎉', '"Ken~感謝你一路上提供好多資源XD也提出很多新的想法，是解決方案的大支柱！也會在大家膠著的時候突破盲腸，一開始見到你還以為很有距離感，後面覺得你超有趣的XD，像是叫TS暫停跟Jason把拔哈哈哈哈，總之感謝你對2組的付出"', '就我自己啊= =', '感謝~', '整組ㄉ大腦', 'solution expert超專業', '謝謝Edison，兩地疫情奔波下，在報告中也給了許多的建議，很高興能有機會合作，謝謝你，辛苦了!! 期待早早在疫情下的安全回歸。', '顧問R!感謝您位公司奉獻犧牲去大陸奮鬥，隔離辛苦了QQ', '感謝你的遠端support~~~', 'Good job', '琬棻讚讚 PPT跟報告都很猛', 'Silvia 謝謝你一直為團隊提供很多點子，刺激團隊有更多的想法，能和你共事，我覺得很幸運！最後，一起好好慶功，未來一起加油！', 'Silvia從整個talent show初期到結束都end to end幫助了好多事情，雖然我們中間出現了一些磨合，但說出來總是好的！非常感謝妳常常給予很多很棒的想法，只是出於時間及壓力下，常常無法實現妳心中想要的東西，或許未來我們在其他專案有機會合作，可以再來實現這個夢想! ', '常常都可以在一個晚上生出很厲害的簡報，也都可以講出自己的想法、邏輯說服別人，簡報能力也很讚~', '辛苦了', '很高興認識各位<3', '我們最辛苦的組長大大！真的太感謝你的付出！不過還是要記得吃晚餐ㄛ～不要搞壞身體', 'Nickie老大真的太強了!!!', '總是熱情給予Feedback的Ashley，是帶著大家一起成長的關鍵人物，從妳身上學到策略顧問的專業與視角，也看見了妳在團隊中與人合作溝通的能力，能夠一起經歷整個人才秀真的好開心，謝謝Jshley帶給我和其他人的一切，英業達有妳真好:)', '簡報女神！簡報太美了，也從你們大家身上學到很多～', '感謝Ashley ！！！很開心可以一起完成Talent Show 之後要再約慶功 歐耶🎉', '感謝Jacob為整組貢獻超多的，想故事線真的很不容易，而且很會適時帶動整個團隊的士氣？感謝每次不管跟mentor還是sector過都很凱瑞～每次也從大老遠趕來現場報告（Michelle真的快緊張死哈哈哈）總之感謝你在第二組～', '感謝有你', '感謝你在我搞不清楚狀況的時候耐心說明 很抱歉沒幫上什麼~ 很感謝你', '扛得住', '故事線邏輯很清晰，總能帶領大家高效完成討論', '大姊真的強', '謝謝Karen，總能想出很厲害的東西，和源源不絕的創意，給報告增添許多趣味和豐富度，也很會帶動氣氛，high起來~很開心能跟妳一起合作，謝謝妳，辛苦了!!', '謝謝這四個月的自己還撐著', '簡報小達人，不管自己專案有多炸裂，都願意幫忙美化簡報', '這陣子辛苦囉～～～', '謝謝Karen, 你超棒的啦！', 'POC真的心酸', '你真的很厲害耶！這麼快就能做好POC,超會寫程式的啦！很開心能和你共事，一起度過這三個月，最後，一起好好慶功，未來一起加油！', '哇 little ching 我實在不知道要跟你講什麼好了, 感謝你POC真D罩,真D在短時間內刻一版出來...QQQ 辛苦你了>< ', '一個禮拜可以生出Kmini真的超強，好險最後有堅持PG的自尊XD，是我們的最強PG！', '辛苦了', '覺得你總是很認真、願意付出，而且很像吉祥物XDDD', '很高興認識各位<3', 'JEFF真的很認真&負責~ 辛苦了', '鄉村巨巨！都沒實體跟你開過會～～每次跟你討論一下隔天就有超豐富的簡報實在超級驚人，謝謝你在台中那麼遠還是十分盡力負責', '想跟自己說辛苦了~很開心我們從來沒有吵架，大家的投入與付出都是心甘情願，沒有誰強迫誰，也就不會有誰多做少做的不平衡心態，很開心英業達小組的每個人都遵守了我們當初訂下的約定，因此我們才能這麼和諧順利地走過人才秀，並且在彼此心中都留下了美好的第"二"名回憶，大家都辛苦了XD', '真的謝謝 Andrea!! 永遠是我們組最棒的支柱，不管是期中或是期末，當大家有卡住的時候都能適時提出一些想法帶領大家，也謝謝 Andrea 總是像天使一樣協調與 Dylan、Kate、mentor 的會議時間、揪大家訂 ubereats、還有後期各種忙碌時你的那句沒問題及那晚粉圓，有你真好~~~', '偉大的組長Jandrea，希望未來還有多多合作的機會～', '感謝Andrea！！！很開心可以一起完成Talent Show 之後要再約慶功 歐耶🎉', '感謝Roger在最後POC的報告超好的~也感謝你每次在組內有時卡住的時候都會提好的點子~常常報告也會主動幫忙記筆記，超細心的XD，總之感謝你這三個月的付出', '謝謝~', 'Demo大師', '報告總能臨危不亂超厲害', '專案這麼忙還是很CARRY 辛苦了', '謝謝Vivian，專案和talent show同時的大爆炸辛苦了，謝謝妳在技術面給了很多厲害的建議，很開心能跟妳一起合作，謝謝妳，辛苦了!!', '太厲害了吧CTO~專案跟才藝秀還要兼顧，辛苦你了!好好休息喔~', '這陣子你辛苦囉～專案在燒沒關係～我們多幫忙就好', 'Nancy幽默又可靠 效益分析王！', '三個月來辛苦了！一起加班、週末都來公司，終於到一個段落啦～ 感謝Nancy幫忙想效益、報告，辛苦了！未來一起加油！', 'Nancy感謝你最後hold住效益這段啦 覺得你整理資料以及紀錄都做的很詳細很完善，簡報的台風以及臨場唬爛(?)的技巧很厲害，期待之後有機會再合作!!!', '辛苦了', '很高興認識各位<3', '感謝Tiffany每次都自發地做筆記&整理筆記，因為妳的細心，讓故事線小組準備Deck時得以事半功倍。在開發上感謝妳做出了這麼美麗與兼顧細節的畫面~ 另外，討論過程中妳的投入與思索過後的Feedback都是讓我們報告更好的重要因素，我都有看見~辛苦啦! 英業達有妳真好:)', '謝謝 Tiffany 和開發小組幫我們一起生出 IntelliQ，美感與設計兼併的蒂芬妮幫我們把 IntelliQ 版面維持得美美的，也謝謝 Tiffany 每次討論都最準時哈哈哈', 'Tiffany終於可以早點睡覺了，可喜可賀！！！´-ω-)b', '感謝Tiffany！！！很開心可以一起完成Talent Show 之後要再約慶功 歐耶🎉', '聖謙～桃園的好夥伴XD，一開始在做流程梳理的時候感謝有你跟Ken一起討論，你真的都好快進入狀況跟提出有癥結問題，最後POC也超狂整個扛下來，希望那天可以再一起出去玩XD(雖然桃園現在有點難哈哈）"', 'POC大功臣超厲害', '台風很棒', 'Flora辛苦了~一個新的里程碑，和厲害的人在一起發現有很多需要進步的地方，繼續努力up up up~', '報告也太66666了吧，感謝你在大家迷路時給予希望與加油', '這陣子辛苦囉～～', '非常棒喔～', '潔西卡辛苦了！後期有你Hold住大家討論的節奏 PPT也被你設計的超爆美 讚讚！', 'Jessica真的辛苦你了QQ 從初期簡報就參與很多銀行domain的討論，很多銀行業的知識也是要靠妳才能得知，中後期也一併參與POC，midterm也看到妳報告從有點害怕到上台台風穩健，真的進步了好多！！也非常謝謝一直都有個責任感完成每一項我們分配的任務，期待未來還有機會合作!! 你是我Figma老師~~~', '感謝Jessica在Final loading超重但依然幫大家生出這麼美的簡報，也常常給大家精神鼓勵~但又不忘督促大家 超棒!', '很高興認識各位<3', '辛苦了Jasmine簡報都超可愛<3', '謝謝 Ginny 在 Talent Show 的付出～很喜歡你在 figma 出的 UI 圖，風格很可愛！'],
        defaultWords: [],
      },
    };
  },
  methods: {
    openModal(data) {
      this.wordcloud.showWordcloud = true;
      this.wordcloud.defaultWords = [];
      if (data.englishName === 'Kevin Ying') {
        this.$refs.wordcloud.open();
        this.shuffleArray(this.wordcloud.thanksWords).forEach((word, index) => {
          if (index < 20) {
            this.wordcloud.defaultWords.push(
              {
                name: word,
                value: Math.floor(Math.random() * (30 - 20 + 1)) + 20,
              },
            );
          }
        });
      } else {
        this.selectedPerson = data;
        this.$refs.modal.open();
      }
    },
    shuffleArray(arr) {
      const newArr = arr.slice();
      for (let i = newArr.length - 1; i > 0; i -= 1) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
      }
      return newArr;
    },
    wordClickHandler() { },
    refreshWordcloud() {
      this.wordcloud.defaultWords = [];
      this.shuffleArray(this.wordcloud.thanksWords).forEach((word, index) => {
        if (index < 20) {
          this.wordcloud.defaultWords.push(
            {
              name: word,
              value: Math.floor(Math.random() * (30 - 20 + 1)) + 20,
            },
          );
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import "../color.scss";

div.tooltip {
  display: none;
}

.sweet-modal {
  .text {
    font-weight: 700;
    font-family: "IBMPlexMono-Medium", "PingFangTC-Regular", "微軟正黑體", "Microsoft JhengHei" !important;
  }

  // .btn-info {
  //   background-color: $special-blue;

  //   &:hover {
  //     background-color: $special-blue;
  //   }
  // }
}

#handler {
  padding-bottom: 0;

  .highlight {
    width: 3rem;
    background-color: $special-blue;
  }

  img {
    border-radius: 50%;
    // border: 3px solid $base-pink-light;
  }

  .lead-text {
    color: $base-pink;
    font-weight: 700;
  }

  .leader-content {
    font-size: 0.9rem;
    margin-top: 0.5rem;
    line-height: 25px;
    // color: $base-pink-light;
  }

  .handler-img {
    cursor: pointer;
  }

  .handle-text {
    color: $base-blue;
    font-weight: 700;
  }
}
</style>
