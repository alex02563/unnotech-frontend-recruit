<template>
  <div class="mx-auto p-12 pt-0 h-screen grid gap-4 content-around">
    <div class="text-center">
      <div class="flex justify-center">
        <img
          class="w-12 h-12 my-3"
          :src="require('@/assets/img/interrogation.png')"
        />
      </div>
      <p class="pt-6 font-large text-lg">{{ t("title_404") }}</p>
      <div class="mt-2 font-medium text-md">
        <router-link to="/"> -{{ t("back_home") }}- </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: "NotFound",
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>