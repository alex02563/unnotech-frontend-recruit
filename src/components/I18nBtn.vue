<template>
  <div>
    <select
      v-model="locale"
      class="
        block
        p-1
        w-24
        text-sm text-gray-900
        bg-gray-200
        rounded-lg
        border border-gray-300
        focus:border-blue-700
      "
    >
      <option value="zh-TW">{{ t("zh-TW") }}</option>
      <option value="en-US">{{ t("en-US") }}</option>
    </select>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
export default {
  name: "i18nBtn",
  setup() {
    const { t, locale } = useI18n();
    return {
      t,
      locale,
    };
  },
};
</script>
