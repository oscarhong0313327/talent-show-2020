<template>
  <div class="section section-blue-gray" id="faq">
    <div data-aos="fade-up">
      <div class="section-title">
        常見問題
      </div>
      <div class="section-content container">
        <div class="row h-center">
          <div class="col-12 col-md-6 mb-4" v-for="(faq, $index) in faqList" :key="$index" data-aos="zoom-in" data-aos-delay="400">
            <div class="faq-panel" @click="openModal(faq)">
              <div class="title">
                #{{ faq.title }}
              </div>
              <div class="content">
                {{ faq.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <sweet-modal ref="feedback">
      <p>對活動有任何想法和建議嗎？</p>
      <p>希望聽到你的建議，會讓我們變得更好，也能讓大家的 Talent Show 進行地更加順利！</p>
      <p><a href="https://forms.gle/PSNDqDtnLDxdhvWk8" target="_blank" rel="noopener noreferrer">歡迎回饋！（另開新視窗）</a></p>
    </sweet-modal>

    <sweet-modal ref="taskFeedback">
      <p>Mentor 定期回報小組表現。</p>
      <p>我們希望從 mentor 得到 young talent 的表現與需要，讓 young talent 能夠變得更好！<br />每組只需推派一位 mentor 填表。記得活動結束前記得上傳投影片！</p>
      <p><a href="https://docs.google.com/forms/d/e/1FAIpQLScEtpW6Xw_S3BwDnTaWDPFD7B2As0nH7XCcLFI0oKJhN5mQaA/viewform" target="_blank" rel="noopener noreferrer">點我回報（另開新視窗）</a></p>
    </sweet-modal>

    <sweet-modal ref="resource">
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead class="thead-light">
            <tr>
              <th scope="col">Classification</th>
              <th scope="col">Website</th>
              <th scope="col">Introduction</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="2">Industry Analysis & Reports</td>
              <td><a href="https://ibv.dst.ibm.com/" target="_blank">IBV</a></td>
              <td>Industry specific research and analysis and cross industry functional areas.</td>
            </tr>
            <tr>
              <td><a href="https://w3.ibm.com/marketing/bluemine/" target="_blank">Bluemine</a></td>
              <td>External Reports: IDC, Gartner, Forrester, FirstRain, MarketandMarket…etc.</td>
            </tr>
            <tr>
              <td rowspan="2">Financial Reports & Benchmark</td>
              <td><a href="https://financial-selling.yourlearning.ibm.com/" target="_blank">CBV</a></td>
              <td>IBM Financial Selling Portfolio, including listed company analysis, industry analysis, prospecting, and value modeler.</td>
            </tr>
            <tr>
              <td><a href="https://w3.ibm.com/services/bcs/competency/benchmarking/wizard/protect/bmwizard.wss/showHomePage2" target="_blank">Performance Benchmark Wizard</a></td>
              <td>Metrics and practices grouped by industry and business function.</td>
            </tr>
            <tr>
              <td rowspan="4">IBM Solutions</td>
              <td><a href="https://w3.ibm.com/services/lighthouse/spotlight" target="_blank">Lighthouse</a></td>
              <td>Project assets, enablement and delivery materials, engagement decks…etc.</td>
            </tr>
            <tr>
              <td><a href="https://w3.ibm.com/services/solutiongateway/home" target="_blank">Solution Gateway</a></td>
              <td>Solutions catalogs, including GBS offerings, GTS services, Watson solutions…etc.</td>
            </tr>
            <tr>
              <td><a href="https://sldcmwas.gps.ihost.com/vantage/web/index.html#/" target="_blank">Client Vantage</a></td>
              <td>Materials and official  reports categorized by topics, client locations, and client industries.</td>
            </tr>
            <tr>
              <td><a href="https://community.ibm.com/community/user/home" target="_blank">Community</a></td>
              <td>Search by topic or solution on w3 page.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </sweet-modal>

    <sweet-modal ref="expert">
      Industry Advisory List / Sector
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead class="thead-light">
            <tr>
              <th scope="col">Banking</th>
              <th scope="col">Industrial</th>
              <th scope="col">Distribution</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Elisa Lin</td>
              <td>Kate Liao</td>
              <td>Coco Lin</td>
            </tr>
            <tr>
              <td>Yu Ping Huang</td>
              <td>Jimmy Ku</td>
              <td></td>
            </tr>
            <tr>
              <td>Egan Chen</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      Solution Advisory List / Solution Expert
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead class="thead-light">
            <tr>
              <th scope="col"></th>
              <th scope="col">Key Solution / Service</th>
              <th scope="col">IBM Expert</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="2"><br>CAS</td>
              <td>Cloud Advisory</td>
              <td>Ada Hsieh</td>
            </tr>
            <tr>
              <td>Core Modernization</td>
              <td>Will Tseng</td>
            </tr>
            <tr>
              <td rowspan="2"><br>CBDS</td>
              <td>AML</td>
              <td>Sonia Yang</td>
            </tr>
            <tr>
              <td>Data Related Solution</td>
              <td>Caitlin Chang</td>
            </tr>
            <tr>
              <td rowspan="3"><br>iX</td>
              <td>Microservice</td>
              <td>Jesse Ko</td>
            </tr>
            <tr>
              <td>IB/MB</td>
              <td>Lily Hsu</td>
            </tr>
            <tr>
              <td>Marketing</td>
              <td>John Tang</td>
            </tr>
            <tr>
              <td rowspan="5"><br>CPR</td>
              <td>Core Banking System</td>
              <td>Pauline Liu</td>
            </tr>
            <tr>
              <td>RPA</td>
              <td rowspan="2"><br>Ian Chien</td>
            </tr>
            <tr>
              <td>Chatbot</td>
            </tr>
            <tr>
              <td>eLoan</td>
              <td>Vincent Chen</td>
            </tr>
            <tr>
              <td>Intelligent Workflow</td>
              <td>Daisy Wu</td>
            </tr>
            <tr>
              <td rowspan="2"><br>ES</td>
              <td>Digital Business Strategy</td>
              <td rowspan="2"><br>Jennifer Chen</td>
            </tr>
            <tr>
              <td>Operation Strategy</td>
            </tr>
            <tr>
              <td rowspan="2"><br>EA</td>
              <td rowspan="2"><br>ERP(SAP)</td>
              <td>Stanley Chou</td>
            </tr>
            <tr>
              <td>Alex Chen</td>
            </tr>
          </tbody>
        </table>
      </div>
    </sweet-modal>

    <sweet-modal ref="goalOfMilestone">
      <img width="90%" v-lazy="require('@/assets/faq/goal-of-milestone.png')">
    </sweet-modal>

    <sweet-modal ref="taskReview">
      <img width="100%" v-lazy="require('@/assets/faq/task-review.png')">
    </sweet-modal>
  </div>
</template>

<script>
export default {
  name: 'FAQ',
  components: { },
  data() {
    return {
      faqList: [
        {
          title: '想回饋',
          content: '對活動有任何想法與建議嗎？',
          id: 'feedback',
        },
        {
          title: 'Task 回報',
          content: 'Mentor 定期回報小組表現。',
          id: 'task-feedback',
        },
        {
          title: '找資源',
          content: '公司無窮盡的資源一次呈現給你！',
          id: 'resource',
        },
        {
          title: '找專家',
          content: 'TW GBS 各領域的資深顧問給你建議！',
          id: 'expert',
        },
        {
          title: 'Goal of Milestone',
          content: '各項 milestones 中的目標？',
          id: 'goal-of-milestone',
        },
        {
          title: 'Task Review Item',
          content: '各項 tasks 中的著重項目？',
          id: 'task-review',
        },
      ],
    };
  },
  methods: {
    openModal(faq) {
      if (faq.id === 'feedback') {
        this.$refs.feedback.open();
      } else if (faq.id === 'task-feedback') {
        this.$refs.taskFeedback.open();
      } else if (faq.id === 'resource') {
        this.$refs.resource.open();
      } else if (faq.id === 'expert') {
        this.$refs.expert.open();
      } else if (faq.id === 'goal-of-milestone') {
        this.$refs.goalOfMilestone.open();
      } else if (faq.id === 'task-review') {
        this.$refs.taskReview.open();
      }
    },
  },
};
</script>

<style lang="scss">
@import '../color.scss';

#faq {
  a {
    color: $gray-green;

    &:hover {
      color: $gray-green-light;
    }
  }

  .faq-panel {
    transition: background-color 200ms linear;
    border: 2px solid $gray-green-light;
    color: $gray-green;
    padding: 0.8rem 0.4rem;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
      background-color: $gray-green-light;
      color: white;
      transition: background-color 200ms linear;
    }

    .title {
      font-size: 1.2rem;
      font-weight: 700;
    }

    .content {
      font-size: 1rem;
    }
  }

  th {
    background: $gray-green-light;
    color: white;
  }
}

@media only screen and (min-width: 768px) {
  #faq {
    .sweet-modal {
      width: 70%;
      max-width: none;
    }
  }
}
</style>
