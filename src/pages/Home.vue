<template>
  <div class="book-list-age">
    <app-form>
      <template v-slot:menu-left>
        <i18n-btn />
      </template>
      <template v-slot:title>
        {{ t("book_list") }}
      </template>
      <template v-slot:menu-right>
        <router-link to="/books/add">
          <img class="w-8 h-8 p-1" :src="require('@/assets/img/plus.png')" />
        </router-link>
      </template>
      <template v-slot:area>
        <div class="flex justify-center">
          <img
            class="w-24 h-24 mt-10"
            :src="require('@/assets/img/robot.png')"
          />
        </div>
        <div class="flex justify-center">
          <input
            name="author"
            v-model.trim="search"
            class="
              mt-6
              p-3
              bg-white
              border
              shadow-sm
              border-slate-300
              placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-sky-500
              block
              w-72
              rounded-md
              sm:text-sm
              focus:ring-1
            "
            :placeholder="t('plz_typing_book_or_autrhor')"
          />
        </div>
        <div
          class="
            grid
            xl:grid-cols-6
            lg:grid-cols-4
            sm:grid-cols-2
            gap-4
            p-6
            min-h-12
          "
        >
          <div v-for="(book, idx) in formatList" :key="`book-list-${idx}`">
            <router-link :to="`/books/${book.id}`">
              <div
                class="
                  book-card
                  rounded-md
                  bg-neutral-100
                  h-72
                  p-6
                  transition-all
                  hover:shadow-lg hover:scale-90
                  cursor-pointer
                "
              >
                <div class="flex justify-center">
                  <img
                    class="w-24 h-24 my-3"
                    :src="require('@/assets/img/book-stack.png')"
                  />
                </div>
                <div class="divide-y divide-gray-400">
                  <div class="font-medium text-sm text-center">
                    -{{ book.title || t("unname") }}-
                  </div>
                  <div class="font-bold text-sm text-center py-3">
                    {{ book.author || t("unnote") }}
                  </div>
                </div>
              </div>
            </router-link>
            <!-- <button
              @click="deleteBook(book.id)"
              class="
                inline-block
                mt-2
                px-4
                py-1.5
                bg-red-500
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded-full
                shadow-md
                focus:shadow-lg focus:outline-none focus:ring-0
                active:shadow-lg
                transition
                duration-150
                ease-in-out
              "
            >
              Delete
            </button> -->
          </div>
        </div>
        <div v-show="!formatList.length" class="w-full text-center">
          <div class="flex justify-center">
            <img
              class="w-12 h-12 my-3"
              :src="require('@/assets/img/interrogation.png')"
            />
          </div>
          {{ t("no_data") }}
        </div>
      </template>
    </app-form>
  </div>
</template>

<script>
import AppForm from "@/components/AppForm";
import i18nBtn from "@/components/I18nBtn";

import { ref, onMounted, computed } from "vue";
import { useI18n } from "vue-i18n";
import { getListsBook, deleteBook } from "@/api/books";
import { useIndexStore } from "@/stores/index";

export default {
  name: "HomeIndex",
  components: {
    AppForm,
    i18nBtn,
  },
  setup() {
    const { t } = useI18n();
    const indexStore = useIndexStore();
    const bookLists = ref([]);
    const search = ref("");

    let formatList = computed(() => {
      return bookLists.value.filter((list) => {
        if (
          !search.value ||
          (list.title && list.title.toLowerCase().indexOf(search.value.toLowerCase()) !== -1) ||
          (list.author && list.author.toLowerCase().indexOf(search.value.toLowerCase()) !==-1)
        ) {
          return true;
        }
      });
    });

    onMounted(() => {
      indexStore.loadingStart();
      getListsBook().then((res) => {
        const resp = res.data;
        bookLists.value = resp;
        indexStore.loadingEnd();
      });
    });

    return {
      bookLists,
      search,
      formatList,
      deleteBook,
      t,
    };
  },
};
</script>
