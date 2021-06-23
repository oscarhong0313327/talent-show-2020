<template>
  <div class="section section-blue-gray" id="task">
    <div class="section-title">
      任務
    </div>
    <div class="section-content container">
      <div class="row">
        <div class="col-12 col-md-4 mb-4" v-for="(task, $index) in taskList" :key="$index">
          <div class="task-panel" v-if="task.show">
            Task {{ $index + 1 }}
            <div class="title">
              {{ task.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Task',
  components: { },
  data() {
    return {
      taskList: [
        {
          name: '全面蒐集資料',
          show: true,
          actived: true,
        },
        {
          name: '聚焦切入 & 創意發想',
          show: false,
          actived: false,
        },
        {
          name: '提出可行解決方案',
          show: false,
          actived: false,
        },
        {
          name: '實作驗證',
          show: false,
          actived: false,
        },
        {
          name: '解決方案的成本效益分析',
          show: false,
          actived: false,
        },
        {
          name: '最終評價準備',
          show: false,
          actived: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '../color.scss';

#task {
  .task-panel {
    background-color: $base-orange;
    padding: 1rem 1rem;
    cursor: pointer;
  }
}
</style>
