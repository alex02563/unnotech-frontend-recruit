<template>
  <div class="mx-auto  bg-neutral-200 min-h-screen">
    <div class="default-page">
      <loading />
      <router-view />
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
export default {
  name: "DefaultIndex",
  components: {
    Loading,
  }
};
</script>

<style lang="scss">
.default-page {
  background: url('@/assets/img/book-bg.png') center center repeat;
  background-size: 70px auto;
}
</style>
