<template>
  <div class="book-detail-page">
    <app-form>
      <template v-slot:menu-left>
        <router-link v-show="type !== 'edit'" to="/books">
          <img
            class="w-8 h-8 p-1"
            :src="require('@/assets/img/angle-left.png')"
          />
        </router-link>
      </template>
      <template v-slot:title>
        <div v-show="type !== 'add'">
          {{ info.title || t("unname") }}
        </div>
        <div v-show="type === 'add'">{{ t("add_book") }}</div>
      </template>
      <template v-slot:menu-right>
        <img
          v-show="type !== 'add' && type !== 'edit'"
          class="w-8 h-8 p-1 cursor-pointer"
          :src="require('@/assets/img/pencil.png')"
          @click="toEdit"
        />
      </template>
      <template v-slot:area>
        <div class="grid justify-items-stretch p-6">
          <div
            class="
              book-card
              grid
              justify-self-center
              lg:w-1/3
              md:w-1/2
              w-full
              h-full
              bg-neutral-100
              p-6
            "
          >
            <div class="flex justify-center items-center">
              <img
                class="w-24 h-24 my-6"
                :src="require('@/assets/img/book-stack.png')"
              />
            </div>

            <div>
              <label class="block p-2">
                <span
                  class="
                    after:content-['*'] after:ml-0.5 after:text-red-500
                    block
                    text-sm
                    font-medium
                    text-slate-700
                  "
                >
                  {{ t("name") }}
                </span>
                <input
                  name="title"
                  v-model="infoEdit.title"
                  :disabled="type !== 'add' && type !== 'edit'"
                  class="
                    mt-1
                    px-3
                    py-2
                    bg-white
                    border
                    shadow-sm
                    border-slate-300
                    placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-sky-500
                    block
                    w-full
                    rounded-md
                    sm:text-sm
                    focus:ring-1
                  "
                  :class="{
                    'bg-gray-300 bg-clip-padding border border-solid border-gray-300':
                      type !== 'add' && type !== 'edit',
                  }"
                  :placeholder="t('typing_name')"
                />
              </label>
              <label class="block p-2">
                <span
                  class="
                    after:content-['*'] after:ml-0.5 after:text-red-500
                    block
                    text-sm
                    font-medium
                    text-slate-700
                  "
                >
                  {{ t("author") }}
                </span>
                <input
                  name="author"
                  v-model="infoEdit.author"
                  :disabled="type !== 'add' && type !== 'edit'"
                  class="
                    mt-1
                    px-3
                    py-2
                    bg-white
                    border
                    shadow-sm
                    border-slate-300
                    placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-sky-500
                    block
                    w-full
                    rounded-md
                    sm:text-sm
                    focus:ring-1
                  "
                  :class="{
                    'bg-gray-300 bg-clip-padding border border-solid border-gray-300':
                      type !== 'add' && type !== 'edit',
                  }"
                  :placeholder="t('typing_author')"
                />
              </label>
              <label class="block p-2">
                <span
                  class="
                    after:content-['*'] after:ml-0.5 after:text-red-500
                    block
                    text-sm
                    font-medium
                    text-slate-700
                  "
                >
                  {{ t("description") }}
                </span>
                <textarea
                  name="description"
                  v-model="infoEdit.description"
                  :disabled="type !== 'add' && type !== 'edit'"
                  class="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700
                    focus:bg-white
                    focus:border-blue-600
                    focus:outline-none
                  "
                  :class="{
                    'bg-gray-300 bg-clip-padding border border-solid border-gray-300':
                      type !== 'add' && type !== 'edit',
                  }"
                  rows="10"
                  :placeholder="t('typing_description')"
                ></textarea>
              </label>
              <div
                v-show="type === 'add' || type === 'edit'"
                class="flex space-x-6 mt-4 justify-center"
              >
                <button
                  type="button"
                  @click="cancel"
                  class="
                    inline-block
                    px-6
                    py-2.5
                    bg-gray-200
                    text-gray-700
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded-full
                    shadow-md
                    hover:bg-gray-300 hover:shadow-lg
                    focus:bg-gray-300
                    focus:shadow-lg
                    focus:outline-none
                    focus:ring-0
                    active:bg-gray-400 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out
                  "
                >
                  {{ t("cancel") }}
                </button>
                <button
                  v-show="type === 'add'"
                  type="button"
                  @click="addBook"
                  class="
                    inline-block
                    px-6
                    py-2.5
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded-full
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700
                    focus:shadow-lg
                    focus:outline-none
                    focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out
                  "
                >
                  {{ t("create") }}
                </button>
                <button
                  v-show="type === 'edit'"
                  type="button"
                  @click="editBookInfo"
                  class="
                    inline-block
                    px-6
                    py-2.5
                    bg-blue-500
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded-full
                    shadow-md
                    hover:bg-blue-500 hover:shadow-lg
                    focus:bg-blue-500
                    focus:shadow-lg
                    focus:outline-none
                    focus:ring-0
                    active:bg-blue-600 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out
                  "
                >
                  {{ t("edit") }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </app-form>
  </div>
</template>

<script>
import AppForm from "@/components/AppForm";

import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
import { getListsBookInfo, addNewBook, editBook } from "@/api/books";
import { useIndexStore } from "@/stores/index";

export default {
  name: "InfoId",
  components: {
    AppForm,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const indexStore = useIndexStore();
    const { t } = useI18n();

    let info = ref({
      title: "",
      author: "",
      description: "",
    });
    let infoEdit = ref({});

    const bookId = ref(route.params.bookId);
    let type = ref(route.params.bookId);

    const deepClone = (data) => {
      var type = typeof data;
      var obj;
      if (type === "array") {
        obj = [];
      } else if (type === "object") {
        obj = {};
      } else {
        return data;
      }
      if (type === "array") {
        for (let i = 0, len = data.length; i < len; i++) {
          obj.push(deepClone(data[i]));
        }
      } else if (type === "object") {
        for (var key in data) {
          obj[key] = deepClone(data[key]);
        }
      }
      return obj;
    };

    const getBookInfo = () => {
      if (type.value !== "add" && type.value !== "edit") {
        indexStore.loadingStart();
        getListsBookInfo(route.params.bookId).then((res) => {
          if (res.status !== 200) {
            router.push("/404");
          }
          const { data } = res;
          info.value = data;
          infoEdit.value = deepClone(info.value);
          indexStore.loadingEnd();
        });
      }
    };

    const addBook = () => {
      if (
        infoEdit.value.title &&
        infoEdit.value.author &&
        infoEdit.value.description
      ) {
        indexStore.loadingStart();
        addNewBook(infoEdit.value).then(() => {
          indexStore.loadingEnd();
          router.push("/books");
        });
      } else {
        alert(t("plz_required"));
      }
    };

    const toEdit = () => {
      type.value = "edit";
    };

    const editBookInfo = () => {
      if (
        infoEdit.value.title &&
        infoEdit.value.author &&
        infoEdit.value.description
      ) {
        indexStore.loadingStart();
        editBook(infoEdit.value).then((res) => {
          const { data } = res;
          info.value = data;
          cancel();
          indexStore.loadingEnd();
        });
      } else {
        alert(t("plz_required"));
      }
    };

    const cancel = () => {
      if (type.value === "edit") {
        type.value = bookId;
        infoEdit.value = deepClone(info.value);
      } else {
        router.push("/books");
      }
    };

    onMounted(() => {
      getBookInfo();
    });

    return {
      info,
      infoEdit,
      type,
      addBook,
      toEdit,
      editBookInfo,
      cancel,
      t,
    };
  },
};
</script>