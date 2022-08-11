<script setup lang="ts">
import PageMeta from '@theme/PageMeta.vue'
import PageNav from '@theme/PageNav.vue'
</script>

<template>
  <main class="page">
    <slot name="top"/>

    <div class="theme-default-content">
      <div class="content">
        <slot name="content-top"/>

        <Content/>

        <slot name="content-bottom"/>
      </div>

    </div>

    <PageMeta/>

    <PageNav/>

    <slot name="bottom"/>
  </main>
</template>
<style lang="scss">
.page {
  .theme-default-content {
    margin: 0;
    display: flex;
    justify-content: space-between;
    .content{
      flex: 1;
      max-width: 900px;
    }

  }
}
</style>
