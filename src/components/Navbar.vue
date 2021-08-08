<template>
  <div class="relative z-10 flex-shrink-0 flex h-16 bg-white shadow items-center">
    <button class="px-4 border-r border-gray-200 text-gray-500 md:hidden" @click="$emit('openSidebar')">
      <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
    </button>

    <div class="flex-1 px-4 flex items-center">
      <button type="button" :class="[btnClass, 'text-gray-400']" v-for="(item, key) in menu" :key="key">
        <component :is="item.icon" class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
        {{ item.name }}
      </button>
    </div>

    <button type="button" :class="[btnClass, 'font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700']">
      Run
    </button>
  </div>
</template>

<script>
import { MenuAlt2Icon, SaveIcon, ArchiveIcon, RefreshIcon } from "@heroicons/vue/outline";

export default {
  name: "Navbar",
  components: { MenuAlt2Icon, SaveIcon, ArchiveIcon, RefreshIcon },
  emits: ["openSidebar"],
  data() {
    return {
      menu: [
        { name: "Export", icon: SaveIcon },
        { name: "Save", icon: ArchiveIcon },
        { name: "Refresh", icon: RefreshIcon },
      ],
      btnClass:
        "inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-xs rounded-md bg-gray-100 hover:bg-gray-300 hover:text-gray-100 mr-2",
    };
  },
};
</script>
