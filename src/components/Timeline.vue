<template>
  <div class="section" id="timeline">
    <div data-aos="fade-up">
      <div class="section-title">
        時程
      </div>
      <div class="section-content container">
        <div id="description">
          <template v-if="windowWidth >= 768">
            <div class="circle pink"></div> Milestone <div class="ml-4 circle orange"></div> Task <div class="ml-4 circle blue"></div> Sharing
          </template>
          <template v-else>
            <div class="circle pink"></div> Milestone<br/>
            <div class="circle orange"></div> Task<br/>
            <div class="circle blue"></div> Sharing<br/>
          </template>
        </div>
        <template v-for="(event, $index) in eventList">
          <div class="row mb-0 mb-md-4" :key="$index" v-if="event.type !== '' && event.type.split(' ')[0] !== 'Milestone'" data-aos="zoom-in">
            <div class="col-12 col-md-5 mb-md-0 v-center" :class="{ 'mb-4 panel task-panel': event.task, 'not-ready': !isEventReady(event, 'task') }" @click="openModal(event, 'left', isEventReady(event, 'task'))">
              <div>
                <template v-if="event.task">
                  <div class="panel-title">
                    {{ event.taskContent }}
                  </div>
                  <div class="panel-content">
                    <div class="type">
                      {{ event.task }}
                    </div>
                    <div class="date-time">
                      {{ event.taskTime }}
                    </div>
                  </div>
                </template>
              </div>
            </div>
            <div class="col-12 col-md-2 mb-md-0 time-node" :class="{ 'mb-2': event.nodeName }">
              <div class="text" v-if="event.nodeName">{{ event.nodeName }}</div>
              <div class="circle" v-if="!event.nodeName && windowWidth >= 768"></div>
            </div>
            <div class="col-12 col-md-5 mb-md-0" :class="{ 'mb-4 panel right-panel': event.name, 'not-ready': !isEventReady(event, 'right') }" @click="openModal(event, 'right', isEventReady(event, 'right'))">
              <template v-if="event.name">
                <div class="panel-title" v-html="event.name">
                </div>
                <div class="panel-content">
                  <div class="type">
                    {{ event.type }}
                  </div>
                  <div class="date-time" v-if="event.date">
                    <calendar class="mr-2"></calendar>
                    {{ event.date }} {{ event.time }}
                    <geo class="ml-3 mr-2"></geo>
                    {{ event.place }}
                  </div>
                </div>
              </template>
            </div>
          </div>
          <div class="row mb-0 mb-md-4" :key="$index" v-else data-aos="zoom-in">
            <div class="col-12 mb-2 time-node" v-if="windowWidth < 768 && event.nodeName">
              <div class="text" v-if="event.nodeName">{{ event.nodeName }}</div>
              <div class="circle" v-else></div>
            </div>
            <div class="col-12 col-md-5 mb-4 mb-md-0 panel left-panel" :class="{ 'not-ready': !isEventReady(event, 'left') }" @click="openModal(event, 'left', isEventReady(event, 'left'))">
              <div class="panel-title">
                {{ event.name }}
                <div class="panel-content">
                  <div class="type">
                    {{ event.type }}
                  </div>
                  <div class="date-time" v-if="event.date">
                    <calendar class="mr-2"></calendar>
                    {{ event.date }} {{ event.time }}
                    <geo class="ml-3 mr-2"></geo>
                    {{ event.place }}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-2 time-node" v-if="windowWidth >= 768">
              <div class="text" v-if="event.nodeName">{{ event.nodeName }}</div>
              <div class="circle" v-else></div>
            </div>
            <div class="col-12 col-md-5"></div>
          </div>
        </template>
      </div>
    </div>

    <sweet-modal ref="modal" >
      <!-- Task -->
      <template v-if="selectedEvent.event && selectedEvent.event.task && selectedEvent.position === 'left'">
        <open-new-tab :poster="require('@/assets/tasks/' + selectedEvent.event.taskImg)" />
        <div v-if="selectedEvent.event.taskImg">
          <img width="100%" :alt="selectedEvent.event.taskImg" v-lazy="require('@/assets/tasks/' + selectedEvent.event.taskImg)">
        </div>
      </template>

      <!-- Milestone or Sharing -->
      <template v-if="selectedEvent.event && (!selectedEvent.event.task || (selectedEvent.event.task && selectedEvent.position === 'right'))">
        <div v-if="selectedEvent.event.eventImg">
          <div v-if="selectedEvent.position === 'left'">
            <open-new-tab :poster="require('@/assets/milestones/' + selectedEvent.event.eventImg)" :video="selectedEvent.event.eventVideo" :videoPW="selectedEvent.event.eventVideoPW"/>
            <img width="100%" :alt="selectedEvent.event.eventImg" v-lazy="require('@/assets/milestones/' + selectedEvent.event.eventImg)">
          </div>
          <div v-if="selectedEvent.position === 'right'">
            <open-new-tab :poster="require('@/assets/sharings/' + selectedEvent.event.eventImg)" :video="selectedEvent.event.eventVideo" />
            <img width="100%" :alt="selectedEvent.event.eventImg" v-lazy="require('@/assets/sharings/' + selectedEvent.event.eventImg)">
          </div>
        </div>
      </template>
    </sweet-modal>
  </div>
</template>

<script>
import Geo from './shared/Geo.vue';
import Calendar from './shared/Calendar.vue';
import OpenNewTab from './shared/OpenNewTab.vue';

export default {
  name: 'Timeline',
  components: {
    Geo,
    Calendar,
    OpenNewTab,
  },
  data() {
    return {
      windowWidth: null,
      selectedEvent: {
        event: null,
        position: null,
      },
      eventList: [
        {
          name: 'Kick Off',
          type: '',
          place: 'CFC 3F cafe',
          date: '10/13',
          time: '19:00',
          eventImg: 'Kick Off Poster.png',
          nodeName: '十月',
        },
        {
          name: 'WPG Sharing -<br>Digital Transformation in Supply Chain',
          type: 'Sharing 1',
          place: 'CFC 3F cafe',
          date: '10/22',
          time: '19:30',
          eventImg: '01.jpg',
          nodeName: null,
          task: 'Task 1',
          taskContent: '#1 全面性蒐集資料',
          taskTime: '10/13 - 10/25',
          taskImg: '01.jpg',
        },
        {
          name: 'Consulting Skill -<br>How to Tell a Great Story',
          type: 'Sharing 2',
          place: 'CFC 401',
          date: '10/29',
          time: '19:30',
          eventImg: '02.jpg',
          eventVideo: 'https://ibm.webex.com/ibm/lsr.php?RCID=5d8d8d6a080d124fbbfb120f2bee712a',
          nodeName: null,
          task: 'Task 2',
          taskContent: '#2 聚焦切入 & 創意發想',
          taskTime: '10/26 - 11/11',
          taskImg: '02.jpg',
        },
        {
          name: 'Sector Round Table',
          type: 'Milestone 1',
          place: 'CFC 3F cafe',
          date: '11/12',
          time: '19:00',
          eventImg: 'Round Table.png',
          nodeName: '十一月',
        },
        {
          name: 'Big Data in Digital Transformation',
          type: 'Sharing 3',
          place: 'CFC 401',
          date: '11/20',
          time: '19:30',
          eventImg: '03.jpg',
          nodeName: null,
          task: 'Task 3',
          taskContent: '#3 提出可行解決方案',
          taskTime: '11/16 - 11/29',
          taskImg: '03.png',
        },
        {
          name: null,
          type: 'Task 4',
          place: null,
          date: null,
          time: null,
          nodeName: null,
          task: 'Task 4-1',
          taskContent: '#4-1 實作驗證',
          taskTime: '11/30 - 12/09',
          taskImg: '04-1.jpg',
        },
        {
          name: 'Industry-based Solution Sharing',
          type: 'Sharing 4',
          place: 'CFC C401',
          date: '12/3',
          time: '19:30',
          eventImg: '04.jpg',
          eventVideo: 'https://ibm.webex.com/ibm/lsr.php?RCID=94c12fb9a06597ab0e41655c7efe6027',
          nodeName: '十二月',
        },
        {
          name: 'Midterm Presentation',
          type: 'Milestone 2',
          place: 'CFC 3F cafe',
          date: '12/10',
          time: '19:30',
          eventImg: 'Midterm.png',
          eventVideo: 'https://ibm.webex.com/ibm/lsr.php?RCID=0ff342732b771bca3a3ad17f362e0251',
          nodeName: null,
        },
        {
          name: 'Solution Sharing',
          type: 'Sharing 5',
          place: 'CFC C401',
          date: '2020/12/22',
          time: '19:30',
          nodeName: null,
          eventImg: '05.jpg',
          task: 'Task 4-2',
          taskContent: '#4-2 POC實作驗證',
          taskTime: '12/14 - 12/25',
          taskImg: '04-2.jpg',
        },
        {
          name: null,
          type: 'Task 5',
          place: null,
          date: null,
          time: null,
          nodeName: null,
          task: 'Task 5',
          taskContent: '#5 解決方案的成本效益分析',
          taskTime: '12/28 - 01/03',
          taskImg: '05.png',
        },
        {
          name: 'Pre-Final Presentation',
          type: 'Milestone 3',
          place: 'CFC 3F cafe',
          date: '2021/01/07',
          time: '19:00',
          nodeName: '一月',
          eventImg: 'Pre Final.png',
          eventVideo: 'https://ibm.webex.com/ibm/ldr.php?RCID=0b50251a15399ce5f0c83df535b770fe',
          eventVideoPW: '3KgMfX7G',
        },
        {
          name: null,
          type: 'Task 6',
          place: null,
          date: null,
          time: null,
          nodeName: null,
          task: 'Task 6',
          taskContent: '#6 最終評價準備',
          taskTime: '01/04 - 01/13',
          taskImg: '06.png',
        },
        {
          name: 'Final Presentation',
          type: 'Milestone 4',
          place: 'CFC 3F cafe',
          date: '2021/01/14',
          time: '19:00',
          nodeName: null,
          eventImg: 'Final.jpg',
          eventVideo: 'https://ibm.webex.com/ibm/ldr.php?RCID=804420ae1914b3c87d9b40f6077f2d32',
          eventVideoPW: '3MrKFWfX',
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
    openModal(event, position, isReady) {
      this.selectedEvent = {
        event,
        position,
      };

      if (isReady) {
        this.$refs.modal.open();
      }
    },
    isEventReady(event, position) {
      if (position === 'task' && event.taskImg) {
        return true;
      }

      if (event.eventImg || (position === 'left' && event.taskImg)) {
        return true;
      }

      return false;
    },
  },
};
</script>

<style lang="scss">
@import '../color.scss';

#timeline {
  #description {
    margin-bottom: 3rem;
    font-size: 1.2rem;

    .circle {
      width: 0.7rem;
      height: 0.7rem;
      border-radius: 50%;
      display: inline-block;

      &.pink {
        background-color: $base-pink;
      }

      &.orange {
        background-color: $base-orange;
      }

      &.blue {
        background-color: $base-blue;
      }
    }
  }

  .panel {
    padding: 1rem 1rem 0.8rem 1rem;
    color: white;
    border-radius: 15px;
    cursor: pointer;

    &.not-ready {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .left-panel {
    background-color: $base-pink;
  }

  .right-panel {
    background-color: $base-blue;
  }

  .task-panel {
    background-color: $base-orange;
    color: black;
  }

  .panel-title {
    line-height: 30px;
  }

  .panel-content {
    font-size: 1rem;
    margin-top: 0.3rem;

    .type {
      line-height: 20px;
    }

    .date-time {
      margin-top: 0.5rem;
      line-height: 20px;
      display: flex;
      align-items: center; /* align vertical */
      justify-content: center;
    }

    .place {
      margin-top: 0.25rem;
      line-height: 20px;
      display: flex;
      align-items: center; /* align vertical */
      justify-content: center;
    }
  }

  .time-node {
    display: flex;
    align-items: center; /* align vertical */
    justify-content: center;

    .text {
      color: $base-orange;
      font-weight: 700;
    }

    .circle {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: $base-orange;
    }
  }

  .modal-title {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
}

@media only screen and (max-width: 768px) {
  #timeline {
    .container {
      padding-right: 15px;
      padding-left: 15px;
    }
  }
}
</style>
