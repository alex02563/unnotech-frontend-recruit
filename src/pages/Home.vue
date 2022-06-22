<template>
  <div class="book-list-age">
    <app-form>
      <template v-slot:title> 書本列表 </template>
      <template v-slot:menu-right>
        <router-link to="/books/add">
          <img class="w-8 h-8 p-1" :src="require('@/assets/img/plus.png')" />
        </router-link>
      </template>
      <template v-slot:area>
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
          <div v-for="(book, idx) in data.bookLists" :key="`book-list-${idx}`">
            <router-link :to="`/books/${book.id}`">
              <div
                class="
                  book-card
                  rounded-md
                  bg-neutral-100
                  h-72
                  p-6
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
                  <div class="font-bold text-md text-center">
                    {{ book.title || "未命名" }}
                  </div>
                  <div class="text-md text-center pt-1">
                    {{ book.author || "未註名" }}
                  </div>
                </div>
              </div>
            </router-link>
            <!-- <button @click="deleteBook(book.id)"
              class="inline-block mt-2 px-4 py-1.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
              Delete
            </button> -->
          </div>
        </div>
      </template>
    </app-form>
  </div>
</template>

<script>
import AppForm from "@/components/AppForm";

import { reactive, onMounted } from "vue";
import { getListsBook, deleteBook } from "@/api/books";
import { useIndexStore } from "@/stores/index";

export default {
  name: "HomeIndex",
  components: {
    AppForm,
  },
  setup() {
    const data = reactive({
      bookLists: [],
      search: "",
    });
    const indexStore = useIndexStore();
    indexStore.loadingStart();

    onMounted(async () => {
      await getListsBook().then((res) => {
        const resp = res.data;
        data.bookLists = resp;
        indexStore.loadingEnd();
      });
    });

    return {
      data,
      deleteBook,
    };
  },
};
</script>
