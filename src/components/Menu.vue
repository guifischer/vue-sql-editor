<template>
  <div class="flex flex-col">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div class="flex flex-col h-0 flex-1">
      <div class="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
        <img class="h-8 w-auto mx-auto" src="../assets/images/logo.png" />
      </div>
      <div class="flex-1 flex flex-col overflow-y-auto">
        <nav class="flex-1 p-3 bg-gray-800 space-y-2">
          <div
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            :class="[
              item.current ? 'bg-gray-900 pb-5' : 'bg-gray-900 opacity-25 hover:opacity-50 cursor-pointer',
              'p-3 rounded-md',
            ]"
          >
            <div
              :class="[
                item.current ? 'text-white' : 'text-gray-400',
                'group flex items-center text-sm font-medium cursor-pointer',
              ]"
            >
              <DatabaseIcon :class="['mr-2 flex-shrink-0 h-5 w-5']" aria-hidden="true" />
              {{ item.name }}
            </div>
            <div v-if="item.childrens" class="mt-4">
              <div class="mb-3 ml-7 flex text-xs font-medium text-gray-400">Tables</div>
              <div class="mt-2 ml-9 flex text-xs text-gray-500 hover:text-gray-400 cursor-pointer">
                <TableIcon :class="['flex-shrink-0 h-4 w-4 mr-1']" aria-hidden="true" />
                users
              </div>
              <div class="mt-2 ml-9 flex text-xs text-gray-500 hover:text-gray-400 cursor-pointer">
                <TableIcon :class="['flex-shrink-0 h-4 w-4 mr-1']" aria-hidden="true" />companies
              </div>
              <div class="mt-2 ml-9 flex text-xs text-gray-500 hover:text-gray-400 cursor-pointer">
                <TableIcon :class="['flex-shrink-0 h-4 w-4 mr-1']" aria-hidden="true" />tasks
              </div>
              <div class="mt-2 ml-9 flex text-xs text-gray-500 hover:text-gray-400 cursor-pointer">
                <TableIcon :class="['flex-shrink-0 h-4 w-4 mr-1']" aria-hidden="true" />projects
              </div>

              <div class="mt-5 ml-7 flex text-xs font-medium text-gray-400">Schema</div>
              <div class="mt-3 ml-7 flex text-xs font-medium text-gray-400">Queries</div>
              <div class="mt-3 ml-7 flex text-xs font-medium text-gray-400">Backup</div>
              <div class="mt-3 ml-7 flex text-xs font-medium text-gray-400">Configuration</div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { TableIcon, DatabaseIcon } from "@heroicons/vue/outline";

export default {
  name: "Menu",
  components: { TableIcon, DatabaseIcon },
  props: ["navigation"],
};
</script>
