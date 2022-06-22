<template>
  <div class="mx-auto bg-neutral-200 min-h-screen">
    <loading />
    <router-view />
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
export default {
  name: "DefaultIndex",
  components: {
    Loading,
  },
  setup() {},
};
</script>