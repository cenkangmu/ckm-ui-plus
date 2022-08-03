<template>
  <div class="page">
    <c-dividing-line :line-color="'#74bcff'" :text-color="'#0089ff'">
      基础用法
    </c-dividing-line>

    <c-button>default</c-button>
    <br/>
    <c-button type="primary">primary</c-button>
    <br/>
    <c-button type="success">success</c-button>
    <br/>
    <c-button type="warn">warn</c-button>
    <br/>
    <c-button type="error">error</c-button>
    <br/>


    <c-dividing-line :line-color="'#74bcff'" :text-color="'#0089ff'">
      边框型按钮：show-type = border
    </c-dividing-line>

    <c-button show-type="border">default</c-button>
    <br/>
    <c-button show-type="border" type="primary">primary</c-button>
    <br/>
    <c-button show-type="border" type="success">success</c-button>
    <br/>
    <c-button show-type="border" type="warn">warn</c-button>
    <br/>
    <c-button show-type="border" type="error">error</c-button>
    <br/>


    <c-dividing-line :line-color="'#74bcff'" :text-color="'#0089ff'">
      禁用按钮：disable = true
    </c-dividing-line>

    <c-button disable>default</c-button>
    <br/>
    <c-button disable type="primary">primary</c-button>
    <br/>
    <c-button disable type="success">success</c-button>
    <br/>
    <c-button disable type="warn">warn</c-button>
    <br/>
    <c-button disable type="error">error</c-button>
    <br/>

    <c-button disable show-type="border">default</c-button>
    <br/>
    <c-button disable show-type="border" type="primary">primary</c-button>
    <br/>
    <c-button disable show-type="border" type="success">success</c-button>
    <br/>
    <c-button disable show-type="border" type="warn">warn</c-button>
    <br/>
    <c-button disable show-type="border" type="error">error</c-button>
    <br/>

    <c-dividing-line :line-color="'#74bcff'" :text-color="'#0089ff'">
      样式修改
    </c-dividing-line>

    <c-button type="primary" width="200px">width="200px"</c-button>
    <br/>
    <c-button type="primary" height="60px">height="60px"</c-button>
    <br/>
    <c-button type="primary" color="#333">color="#333"</c-button>
    <br/>
    <c-button type="primary" font-size="12px"> font-size="12px"</c-button>
    <br/>
    <c-button type="primary" background="#333">background="#333"</c-button>
    <br/>
    <c-button type="primary" radius="100px">radius="100px"</c-button>
  </div>
</template>
<script>
export default {
  name: 'Button/按钮'
}
</script>
<style scoped>

</style>