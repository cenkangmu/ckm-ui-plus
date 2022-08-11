<template>
  <div class="page">
    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      基础用法
    </c-dividing-line>
    <div class="block">
      <c-score v-model="value1"/>
      <span style="margin-left: 5px">{{ value1 }} 分</span>
    </div>

    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      样式修改
    </c-dividing-line>

    <div class="block">
      <div>
        图标颜色
        <c-score v-model="value1" :color="'#00aeff'"/>
        <span style="margin-left: 5px">{{ value1 }} 分</span>
      </div>
      <div>
        图标大小
        <c-score v-model="value1" size="20px"/>
        <span style="margin-left: 5px">{{ value1 }} 分</span>
      </div>
    </div>

    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      禁用评分
    </c-dividing-line>

    <div class="block">
      <div>
        <c-score v-model="value1" disable/>
        <span style="margin-left: 5px">{{ value1 }} 分</span>
      </div>
    </div>

    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      修改星星数量
    </c-dividing-line>
    <div class="block">
      <c-score v-model="value2" :number="7"/>
      <span style="margin-left: 5px">{{ value2 }} 分</span>
    </div>

    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      修改最大评分为 10
    </c-dividing-line>
    <div class="block">
      <c-score v-model="value3" :max="10"/>
      <span style="margin-left: 5px">{{ value3 }} 分</span>
    </div>

    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      自定义图标
    </c-dividing-line>
    <div class="block">
      <div>
        <c-score v-model="value1">
          <template v-slot:select>y</template>
          <template v-slot:noSelect>n</template>
        </c-score>
        <span style="margin-left: 5px">{{ value1 }} 分</span>
      </div>
      <div>
        <c-score v-model="value1">
          <template v-slot:select>
            <img width="20" src="@/assets/images/score02.png"/>
          </template>
          <template v-slot:noSelect>
            <img width="20" src="@/assets/images/score01.png"/>
          </template>
        </c-score>
        <span style="margin-left: 5px">{{ value1 }} 分</span>
      </div>

    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue'

let value1 = ref(2)
let value2 = ref(2)
let value3 = ref(2)

</script>
<script>
export default {
  name: 'Score/评分',
}
</script>
<style scoped>
.fsb {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
}
</style>