<template>
  <TransitionRoot as="template" :show="sidebarOpen">
    <Dialog
      as="div"
      static
      class="fixed inset-0 flex z-40 md:hidden"
      @close="$emit('closeSidebar')"
      :open="sidebarOpen"
    >
      <TransitionChild
        as="template"
        enter="transition-opacity ease-linear duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
      </TransitionChild>
      <TransitionChild
        as="template"
        enter="transition ease-in-out duration-300 transform"
        enter-from="-translate-x-full"
        enter-to="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leave-from="translate-x-0"
        leave-to="-translate-x-full"
      >
        <div class="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
          <TransitionChild
            as="template"
            enter="ease-in-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in-out duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="absolute top-0 right-0 -mr-12 pt-2">
              <button
                class="
                  ml-1
                  flex
                  items-center
                  justify-center
                  h-10
                  w-10
                  rounded-full
                  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
                "
                @click="$emit('closeSidebar')"
              >
                <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </TransitionChild>
          <Menu :navigation="navigation" />
        </div>
      </TransitionChild>
      <div class="flex-shrink-0 w-14" aria-hidden="true" />
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { TableIcon, DatabaseIcon, XIcon } from "@heroicons/vue/outline";
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from "@headlessui/vue";
import Menu from "./Menu.vue";

export default {
  name: "MobileMenu",
  emits: ["closeSidebar"],
  components: { TableIcon, DatabaseIcon, XIcon, Dialog, DialogOverlay, TransitionChild, TransitionRoot, Menu },
  props: ["navigation", "sidebarOpen"],
};
</script>
