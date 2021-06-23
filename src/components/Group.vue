<template>
  <div class="section section-blue-gray" id="group">
    <div data-aos="fade-up">
      <div class="section-title">分組名單</div>
      <div class="section-content">
        <!-- <div class="mb-4">
          分組名單將在 Kick Off 活動後更新！
        </div>
        <div class="row" data-aos="zoom-in" data-aos-delay="400">
          <div class="col-4 mb-4" :class="{ 'col-md-1': windowWidth > 1600, 'col-md-2': windowWidth <= 1600}" v-for="(member, $index) in memberList" :key="$index">
            <img width="80rem" v-lazy="loadMemberImage(member.englishName)">
            <div class="member-content">
              {{ member.englishName }}<br />
              {{ member.serviceLine }}
            </div>
          </div>
        </div> -->
        <div class="row">
          <div class="col-12 group-outline" v-for="(group, $groupIndex) in groupList" :key="$groupIndex">
            <div data-aos="fade-up">
              <div class="group-no-client-row">
                <span class="group-no">
                  {{ '0' + ($groupIndex + 1) }}
                </span>
                <span class="client">
                  {{ group.client }}
                </span>
              </div>
              <div class="question">{{ group.question }}</div>
              <div class="advisor">
                <span class="highlight pink ml-0">Sector</span>
                <template v-for="(sector, $sectorIndex) in group.sectors">
                  <span class="ml-1 sector-name" :key="'sector' + $sectorIndex" @click="openModal(getSectorData(sector), 'sector')">{{ getSectorData(sector).englishName }}</span>
                </template>
                <div style="height: 5px;" v-if="windowWidth <= 768"></div>
                <span class="highlight blue" :class="{ 'ml-3': windowWidth > 768, 'ml-0': windowWidth <= 768 }">Mentor</span>
                <template v-for="(mentor, $mentorIndex) in group.mentors">
                  <span class="ml-1 mentor-name" :key="'mentor' + $mentorIndex" @click="openModal(getMentorData(mentor), 'mentor')">{{ getMentorData(mentor).englishName }} {{ group.mentors[$mentorIndex + 1] ? ', ' : '' }}</span>
                </template>
              </div>
              <div class="row h-center mt-2">
                <div class="col mb-2" v-for="(member, $memberIndex) in group.members" :key="'member' + $memberIndex">
                  <img width="70rem" class="member-img" v-lazy="loadMemberImage(member)" @click="openModal(getMemberData(member), 'member')">
                  <div class="englishName">
                    {{ getMemberData(member).englishName }}<br />
                    {{ getMemberData(member).serviceLine }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <sweet-modal ref="modal" v-on:close="selectedPerson = null">
        <template v-if="selectedPerson">
          <img width="150rem" v-lazy="loadSectorImage(selectedPerson.email)" v-if="selectedPerson.type === 'sector'">
          <img width="150rem" v-lazy="loadMentorImage(selectedPerson.email)" v-if="selectedPerson.type === 'mentor'">
          <img width="150rem" v-lazy="loadMemberImage(selectedPerson.email)" v-if="selectedPerson.type === 'member'">
          <div class="mt-3">
            {{ selectedPerson.englishName || '' }}<br />
            {{ selectedPerson.serviceLine || '' }}<br />
            {{ selectedPerson.position || '' }}<br />
            {{ selectedPerson.email || '' }}
          </div>
        </template>
      </sweet-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Group',
  components: {},
  data() {
    return {
      windowWidth: null,
      selectedPerson: null,
      groupList: [
        {
          question: '如何打造「即時、透明、可視」的系統協助高階管理層做更多預警的決策，以因應不確定因素對製造業造成的嚴重影響？',
          type: '製造',
          client: '英業達',
          sectors: ['kateliao@tw.ibm.com'],
          mentors: ['amy.lu1@ibm.com', 'kai.hung@ibm.com'],
          members: ['Benson.Chen@ibm.com', 'Fanny.Hsu@ibm.com', 'Davin.Lin@ibm.com', 'Ashley.YH.Lai@ibm.com', 'andrea.tsai@ibm.com', 'Tiffany.Jung@ibm.com'],
        },
        {
          question: '如何協助客戶為中小企業平台打造流程自動化？',
          type: '銀行',
          client: '玉山銀行',
          sectors: ['elisal@tw.ibm.com'],
          mentors: ['angel.chen1@ibm.com', 'dada.hsieh@ibm.com'],
          members: ['Michelle.YC.Hsu@ibm.com', 'Charlene.Chen@ibm.com', 'kenwu@ibm.com', 'Jacob.Lee@ibm.com', 'Roger.PY.Chu@ibm.com', 'Michelle.SC.Hsu@ibm.com', 'Lisa.Hsu@ibm.com'],
        },
        {
          question: '如何透過數位平台吸引在地消費者，同時蒐集使用者的聲音，來活化更多潛在客戶?',
          type: '零售',
          client: '台北101',
          sectors: ['coco.lin@tw.ibm.com'],
          mentors: ['Felix.kuan@ibm.com', 'yvonne.yf.chiu@ibm.com'],
          members: ['Nancy.Fan@ibm.com', 'Nick.Liao@ibm.com', 'edison.yen@ibm.com', 'Karen.Hsiao@ibm.com', 'Vivian.CE.Chiang@ibm.com', 'Flora.Peng@ibm.com'],
        },
        {
          question: '如何以服務創新角度，提升凱基銀行的使用者體驗？',
          type: '銀行',
          client: '凱基銀行',
          sectors: ['yupinghuang@ibm.com'],
          mentors: ['anna.jj.yang@ibm.com', 'shyuan.chang@ibm.com'],
          members: ['kevin.bn.chou@ibm.com', 'jason.hsieh@ibm.com', 'Silvia.Yang@ibm.com', 'Clay.Lin@ibm.com', 'Nancy.Wen@ibm.com', 'Jessica.CE.Chen@ibm.com'],
        },
        {
          question: '如何以資料治理做為三年數位轉型的起點，來創造營收與提升收益？',
          type: '製造',
          client: '啟碁科技',
          sectors: ['kujimmy@tw.ibm.com'],
          mentors: ['bryant.chen1@ibm.com', 'Bucky.YH.Lee@ibm.com'],
          members: ['Jack.CC.Chang@ibm.com', 'Tia.Huang@ibm.com', 'Miko.Wang@ibm.com', 'Jeff.Jian@ibm.com', 'Jeff.Hsu@ibm.com', 'Jasmine.WH.Shen@ibm.com'],
        },
        {
          question: '如何藉由技術解決方案，整合各情境數據，以因應即時性的分析需求？',
          type: '銀行',
          client: '第一銀行',
          sectors: ['Egan.Chen@ibm.com'],
          mentors: ['cindy.cheng1@ibm.com', 'susanh@tw.ibm.com'],
          members: ['Nicole.YJ.Li@ibm.con', 'ario.chen@ibm.com', 'Nickie.Li@ibm.com', 'Nick.JA.Lu@ibm.com', 'Cathy.Yang@ibm.com', 'Ginny.Huang@ibm.com'],
        },
      ],
      mentorList: [
        {
          englishName: 'Susan Huang',
          serviceLine: 'CBDS',
          position: 'IT Specialist',
          noteID: 'Susan Huang/Taiwan/IBM',
          email: 'susanh@tw.ibm.com',
        },
        {
          englishName: 'Shyuan Chang',
          serviceLine: 'iX',
          position: 'IT Specialist - BA/SA',
          noteID: 'Shyuan Chang/Taiwan/IBM',
          email: 'shyuan.chang@ibm.com',
        },
        {
          englishName: 'Dada Hsieh',
          serviceLine: 'CPR',
          position: 'Application Developer',
          noteID: 'Dada Hsieh/Taiwan/IBM',
          email: 'dada.hsieh@ibm.com',
        },
        {
          englishName: 'Cindy Cheng',
          serviceLine: 'iX',
          position: 'IT Specialist - BA/SA',
          noteID: 'Cindy Cheng1/Taiwan/IBM',
          email: 'cindy.cheng1@ibm.com',
        },
        {
          englishName: 'Bucky Lee',
          serviceLine: 'CBDS',
          position: 'IT Specialist',
          noteID: 'Bucky YH Lee/Taiwan/IBM',
          email: 'Bucky.YH.Lee@ibm.com',
        },
        {
          englishName: 'Kai Hung',
          serviceLine: 'CBDS',
          position: 'Data Scientist',
          noteID: 'Kai Hung/Taiwan/IBM',
          email: 'kai.hung@ibm.com',
        },
        {
          englishName: 'Angel Chen',
          serviceLine: 'EA',
          position: 'Associate Package Solution Consultant',
          noteID: 'Angel Chen1/Taiwan/IBM',
          email: 'angel.chen1@ibm.com',
        },
        {
          englishName: 'Amy Lu',
          serviceLine: 'EA',
          position: 'Associate Package Solution Consultant',
          noteID: 'Amy Lu1/Taiwan/IBM',
          email: 'amy.lu1@ibm.com',
        },
        {
          englishName: 'Bryant Chen',
          serviceLine: 'CPR',
          position: 'Application Consultant',
          noteID: 'Bryant Chen1/Taiwan/IBM',
          email: 'bryant.chen1@ibm.com',
        },
        {
          englishName: 'Felix Kuan',
          serviceLine: 'DS',
          position: 'Strategy Consultant',
          noteID: 'Felix CF Kuan/Taiwan/IBM',
          email: 'Felix.kuan@ibm.com',
        },
        {
          englishName: 'Yvonne Chiu',
          serviceLine: 'iX',
          position: 'UX designer',
          noteID: 'yvonne yf chiu/Taiwan/IBM',
          email: 'yvonne.yf.chiu@ibm.com',
        },
        {
          englishName: 'Anna Yang',
          serviceLine: 'iX',
          position: 'IT Specialist - BA/SA',
          noteID: 'Anna Jj Yang/Taiwan/IBM',
          email: 'anna.jj.yang@ibm.com',
        },
      ],
      sectorList: [
        {
          englishName: 'Kate Liao',
          serviceLine: '',
          position: 'Senior Managing Consultant',
          noteID: 'Kate TY Liao/Taiwan/IBM',
          email: 'kateliao@tw.ibm.com',
        },
        {
          englishName: 'Jimmy Ku',
          serviceLine: '',
          position: 'Senior Managing Consultant',
          noteID: 'Jimmy Ku/Taiwan/IBM',
          email: 'kujimmy@tw.ibm.com',
        },
        {
          englishName: 'Elisa Lin',
          serviceLine: '',
          position: 'Senior Managing Consultant',
          noteID: 'Elisa KJ Lin/Taiwan/IBM',
          email: 'elisal@tw.ibm.com',
        },
        {
          englishName: 'Coco Lin',
          serviceLine: '',
          position: 'Senior Managing Consultant',
          noteID: 'Coco Lin/Taiwan/IBM',
          email: 'coco.lin@tw.ibm.com',
        },
        {
          englishName: 'Yu Ping Huang',
          serviceLine: '',
          position: 'Managing Consultant',
          noteID: 'Yu Ping Huang/Taiwan/IBM',
          email: 'yupinghuang@ibm.com',
        },
        {
          englishName: 'Egan Chen',
          serviceLine: '',
          position: 'Managing Consultant',
          noteID: 'Egan Chen/Taiwan/IBM',
          email: 'Egan.Chen@ibm.com',
        },
      ],
      memberList: [
        {
          englishName: 'Andrea Tsai',
          serviceLine: 'EA',
          position: 'Associate Consultant',
          noteID: 'Andrea Tsai/Taiwan/IBM',
          email: 'andrea.tsai@ibm.com',
        },
        {
          englishName: 'Ario Chen',
          serviceLine: 'CBDS',
          position: 'Associate Data Scientist',
          noteID: 'Ario YA Chen/Taiwan/IBM',
          email: 'ario.chen@ibm.com',
        },
        {
          englishName: 'Ashley Lai',
          serviceLine: 'ES',
          position: 'Associate Consultant',
          noteID: 'Ashley YH Lai/Taiwan/IBM',
          email: 'Ashley.YH.Lai@ibm.com',
        },
        {
          englishName: 'Benson Chen',
          serviceLine: 'CAS',
          position: 'Associate Developer',
          noteID: 'Benson Chen/Taiwan/IBM',
          email: 'Benson.Chen@ibm.com',
        },
        {
          englishName: 'Cathy Yang',
          serviceLine: 'iX',
          position: 'Associate Consultant',
          noteID: 'Cathy Yang/Taiwan/IBM',
          email: 'Cathy.Yang@ibm.com',
        },
        {
          englishName: 'Charlene Chen',
          serviceLine: 'CBDS',
          position: 'Associate Developer',
          noteID: '',
          email: 'Charlene.Chen@ibm.com',
        },
        {
          englishName: 'Clay Lin',
          serviceLine: 'CPR',
          position: 'Associate Developer',
          noteID: 'Clay YC Lin/Taiwan/IBM',
          email: 'Clay.Lin@ibm.com',
        },
        {
          englishName: 'Davin Lin',
          serviceLine: 'CPR',
          position: 'Associate IT Specialist',
          noteID: 'Davin Lin/Taiwan/IBM',
          email: 'Davin.Lin@ibm.com',
        },
        {
          englishName: 'Edison Yen',
          serviceLine: 'EA',
          position: 'Associate Consultant',
          noteID: 'Edison Yen/Taiwan/IBM',
          email: 'edison.yen@ibm.com',
        },
        {
          englishName: 'Fanny Hsu',
          serviceLine: 'CAS',
          position: 'Associate IT Specialist',
          noteID: 'Fanny FY Hsu/Taiwan/IBM',
          email: 'Fanny.Hsu@ibm.com',
        },
        {
          englishName: 'Ginny Huang',
          serviceLine: 'iX',
          position: 'Associate IT Specialist',
          noteID: 'Ginny YY Huang/Taiwan/IBM',
          email: 'Ginny.Huang@ibm.com',
        },
        // {
        //   englishName: 'Hank Huang',
        //   serviceLine: 'iX',
        //   position: 'Associate Developer',
        //   noteID: 'Hank HJ Huang/Taiwan/IBM',
        //   email: 'Hank.HJ.Huang@ibm.com',
        // },
        {
          englishName: 'Jack Chang',
          serviceLine: 'CAS',
          position: 'Associate Consultant',
          noteID: 'Chieh Chang/Taiwan/IBM',
          email: 'Jack.CC.Chang@ibm.com',
        },
        {
          englishName: 'Jacob Lee',
          serviceLine: 'ES',
          position: 'Associate Consultant',
          noteID: 'Jacob Lee/Taiwan/IBM',
          email: 'Jacob.Lee@ibm.com',
        },
        {
          englishName: 'Jasmine Shen',
          serviceLine: 'iX',
          position: 'Associate Consultant',
          noteID: 'Jasmine WH Shen/Taiwan/IBM',
          email: 'Jasmine.WH.Shen@ibm.com',
        },
        {
          englishName: 'Jason Hsieh',
          serviceLine: 'CAS',
          position: 'Associate IT Specialist',
          noteID: 'Jason PH Hsieh/Taiwan/IBM',
          email: 'jason.hsieh@ibm.com',
        },
        {
          englishName: 'Jeff Hsu',
          serviceLine: 'EA',
          position: 'Associate Consultant',
          noteID: 'Jeff TS Hsu/Taiwan/IBM',
          email: 'Jeff.Hsu@ibm.com',
        },
        {
          englishName: 'Jeff Jian',
          serviceLine: 'CPR',
          position: 'Associate Developer',
          noteID: 'Jeff JH Jian/Taiwan/IBM',
          email: 'Jeff.Jian@ibm.com',
        },
        {
          englishName: 'Jessica Chen',
          serviceLine: 'iX',
          position: 'Associate Designer',
          noteID: 'Jessica CE Chen/Taiwan/IBM',
          email: 'Jessica.CE.Chen@ibm.com',
        },
        {
          englishName: 'Karen Hsiao',
          serviceLine: 'iX',
          position: 'Associate IT Specialist',
          noteID: 'Karen CC Hsaio/Taiwan/IBM',
          email: 'Karen.Hsiao@ibm.com',
        },
        {
          englishName: 'Ken Wu',
          serviceLine: 'CPR',
          position: 'Associate Developer',
          noteID: 'Ken YC Wu/Taiwan/IBM',
          email: 'kenwu@ibm.com',
        },
        {
          englishName: 'Kevin Chou',
          serviceLine: 'CAS',
          position: 'Associate Consultant',
          noteID: 'Kevin BN Chou/Taiwan/IBM',
          email: 'kevin.bn.chou@ibm.com',
        },
        {
          englishName: 'Michelle YC Hsu',
          serviceLine: 'CAS',
          position: 'Associate IT Specialist',
          noteID: 'Michelle YC Hsu/Taiwan/IBM',
          email: 'Michelle.YC.Hsu@ibm.com',
        },
        {
          englishName: 'Michelle SC Hsu',
          serviceLine: 'iX',
          position: 'Associate Developer',
          noteID: 'Michelle SC Hsu/Taiwan/IBM',
          email: 'Michelle.SC.Hsu@ibm.com',
        },
        {
          englishName: 'Miko Wang',
          serviceLine: 'CPR',
          position: 'Associate IT Specialist',
          noteID: 'Miko ML Wang/Tainwan/IBM',
          email: 'Miko.Wang@ibm.com',
        },
        {
          englishName: 'Nancy Fan',
          serviceLine: 'CAS',
          position: 'Associate IT Specialist',
          noteID: 'Nancy YH Fan/Taiwan/IBM',
          email: 'Nancy.Fan@ibm.com',
        },
        {
          englishName: 'Nancy Wen',
          serviceLine: 'EA',
          position: 'Associate Consultant',
          noteID: 'Nancy Wen/Taiwan/IBM',
          email: 'Nancy.Wen@ibm.com',
        },
        {
          englishName: 'Nick Liao',
          serviceLine: 'CPR',
          position: 'Associate Developer',
          noteID: 'Nick CH Liao/Taiwan/IBM',
          email: 'Nick.Liao@ibm.com',
        },
        {
          englishName: 'Nick Lu',
          serviceLine: 'EA',
          position: 'Associate Consultant',
          noteID: 'Nick JA Lu/Taiwan/IBM',
          email: 'Nick.JA.Lu@ibm.com',
        },
        {
          englishName: 'Nickie Li',
          serviceLine: 'CPR',
          position: 'Associate IT Specialist',
          noteID: 'Nickie FY Li/Taiwan/IBM',
          email: 'Nickie.Li@ibm.com',
        },
        {
          englishName: 'Nicole Li',
          serviceLine: 'CAS',
          position: 'Associate Developer',
          noteID: 'Nicole YJ Li/Taiwan/IBM',
          email: 'Nicole.YJ.Li@ibm.con',
        },
        {
          englishName: 'Roger Chu',
          serviceLine: 'EA',
          position: 'Associate Consultant',
          noteID: 'Roger PY Chu/Taiwan/IBM',
          email: 'Roger.PY.Chu@ibm.com',
        },
        {
          englishName: 'Silvia Yang',
          serviceLine: 'CBDS',
          position: 'Associate IT Specialist',
          noteID: 'Silvia Yang/Taiwan/IBM',
          email: 'Silvia.Yang@ibm.com',
        },
        {
          englishName: 'Tia Huang',
          serviceLine: 'CBDS',
          position: 'Associate IT Specialist',
          noteID: 'Tia WT Huang/Taiwan/IBM',
          email: 'Tia.Huang@ibm.com',
        },
        {
          englishName: 'Tiffany Jung',
          serviceLine: 'iX',
          position: 'Associate Developer',
          noteID: 'Tiffany Jung/Taiwan/IBM',
          email: 'Tiffany.Jung@ibm.com',
        },
        {
          englishName: 'Vivian Chiang',
          serviceLine: 'iX',
          position: 'Associate Developer',
          noteID: '',
          email: 'Vivian.CE.Chiang@ibm.com',
        },
        {
          englishName: 'Flora Peng',
          serviceLine: 'T&T',
          position: 'Associate Consultant',
          noteID: '',
          email: 'Flora.Peng@ibm.com',
        },
        {
          englishName: 'Lisa Hsu',
          serviceLine: 'iX',
          position: 'IT specialist',
          noteID: '',
          email: 'Lisa.Hsu@ibm.com',
        },
      ],
    };
  },
  mounted() {
    this.windowWidth = window.innerWidth;

    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth;
    });
  },
  methods: {
    loadSectorImage(email) {
      // eslint-disable-next-line prefer-destructuring
      const englishName = this.sectorList.filter((sector) => sector.email === email)[0].englishName;
      try {
        // eslint-disable-next-line import/no-dynamic-require, global-require
        return require(`@/assets/sectors/${englishName}.png`);
      } catch (e) {
        // eslint-disable-next-line global-require
        return require('@/assets/members/default.png');
      }
    },
    getSectorData(email) {
      return this.sectorList.filter((sector) => sector.email === email)[0];
    },
    loadMentorImage(email) {
      // eslint-disable-next-line prefer-destructuring
      const englishName = this.mentorList.filter((mentor) => mentor.email === email)[0].englishName;
      try {
        // eslint-disable-next-line import/no-dynamic-require, global-require
        return require(`@/assets/mentors/${englishName}.png`);
      } catch (e) {
        // eslint-disable-next-line global-require
        return require('@/assets/members/default.png');
      }
    },
    getMentorData(email) {
      return this.mentorList.filter((mentor) => mentor.email === email)[0];
    },
    loadMemberImage(email) {
      // eslint-disable-next-line prefer-destructuring
      const englishName = this.memberList.filter((member) => member.email === email)[0].englishName;
      try {
        // eslint-disable-next-line import/no-dynamic-require, global-require
        return require(`@/assets/members/${englishName}.png`);
      } catch (e) {
        // eslint-disable-next-line global-require
        return require('@/assets/members/default.png');
      }
    },
    getMemberData(email) {
      return this.memberList.filter((member) => member.email === email)[0];
    },
    openModal(data, type) {
      // console.log(data);
      this.selectedPerson = data;
      this.selectedPerson.type = type;
      // console.log(this.selectedPerson);
      this.$refs.modal.open();
    },
  },
};
</script>

<style lang="scss">
@import "../color.scss";

#group {
  padding-bottom: 1rem;

  img {
    border-radius: 50%;
  }

  .group-outline {
    border: 2px solid $gray-green;
    border-radius: 15px;
    margin-bottom: 1rem;

    .group-no-client-row {
      text-align: left;
      margin-top: 0.7rem;
    }

    .group-no {
      text-align: center;
      background-color: $gray-green;
      color: white;
      padding: 0.3rem 0rem 0.3rem 0.6rem;
      margin-right: 0.7rem;
    }

    .client {
      color: $gray-green;
      font-weight: 700;
    }

    .question {
      font-size: 1rem;
      text-align: left;
      line-height: 25px;
      margin: 0.5rem 0rem;
      font-weight: 700;
    }

    .advisor {
      font-size: 1rem;
      text-align: left;
      line-height: 25px;
      margin-bottom: 1.5rem;
    }

    .englishName {
      font-size: 0.9rem;
      margin-top: 0.5rem;
      line-height: 25px;
    }

    .sector-name, .mentor-name, .member-img {
      cursor: pointer;
    }
  }
}

@media only screen and (max-width: 768px) {
  #group {
    .row {
      padding-right: 15px;
      padding-left: 15px;
    }
  }
}
</style>
