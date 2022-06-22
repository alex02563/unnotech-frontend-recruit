<template>
  <div class="app-form">
    <div
      class="
        font-bold
        text-2xl text-center
        text-zinc-900
        bg-neutral-100
        p-3
      "
    >
      <div class="grid grid-flow-col relative">
        <div class="col-span-1 absolute left-0">
          <slot name="menu-left"></slot>
        </div>
        <div class="col-span-10">
          <slot name="title"></slot>
        </div>
        <div class="col-span-1 absolute right-0">
          <slot name="menu-right"></slot>
        </div>
      </div>
    </div>
    <div class="area">
      <slot name="area"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppForm"
};
</script>
