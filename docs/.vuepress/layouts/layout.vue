<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
        <hr>
        <div class="footer">AsusRouter integration, library and webpage are maintained by <a href="https://github.com/Vaskivskyi" target="_blank">@Vaskivskyi</a><br/><br/><a href="https://www.buymeacoffee.com/vaskivskyi" target="_blank">-= Support development =-</a></div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.footer {
  text-align: center;
}
</style>
