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
      @change="setLang"
    >
      <option value="zh-TW">{{ t("zh-TW") }}</option>
      <option value="en-US">{{ t("en-US") }}</option>
    </select>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import cookies from 'js-cookie';

export default {
  name: "i18nBtn",
  setup() {
    const { t, locale } = useI18n();
    const setLang = () => {
      cookies.set('lang', locale.value)
    }
    return {
      t,
      locale,
      setLang
    };
  },
};
</script>
