<template>
  <div
    v-show="indexStore.isLoading"
    class="loader-page"
    :class="{
      'page-enter-active': indexStore.isLoading,
      'page-leave-active': !indexStore.isLoading,
    }"
  >
    <div
      wire:loading
      class="
        fixed
        top-0
        left-0
        right-0
        bottom-0
        w-full
        h-screen
        z-10
        overflow-hidden
        bg-gray-700
        opacity-80
        flex flex-col
        items-center
        justify-center
      "
    >
      <div
        class="
          loader
          border-t-blue-500
          ease-linear
          rounded-full
          border-4 border-t-4 border-gray-200
          h-12
          w-12
          mb-4
        "
      ></div>
      <h2 class="text-center text-white text-xl font-semibold">
        {{ t("loading") }}
      </h2>
      <p class="w-1/3 text-center text-white">
        {{ t("loading_memo") }}
      </p>
    </div>
  </div>
</template>

<script>
import { useIndexStore } from "@/stores/index";
import { useI18n } from "vue-i18n";

export default {
  name: "LoadingIndex",
  setup() {
    const indexStore = useIndexStore();
    const { t } = useI18n();

    return {
      indexStore,
      t
    };
  },
};
</script>

<style lang="scss">
.loader-page {
  .loader {
    -webkit-animation: spinner 1.5s linear infinite;
    animation: spinner 1.5s linear infinite;
    &.page-enter-active {
      transition: all 0.25s ease-in;
      z-index: 900 !important;
    }
    &.page-leave-active {
      opacity: 0;
      transition: all 0.25s ease-out;
      z-index: 0 !important;
    }
  }

  @-webkit-keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}
</style>