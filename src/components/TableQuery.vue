<template>
  <div
    class="h-full shadow border-b border-gray-200 rounded-lg flex items-center justify-center bg-gray-200"
    v-if="dataContent.length == 0 || loading"
  >
    <svg
      class="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-600"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      v-if="loading"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    <p class="text-xs text-center py-5 text-gray-500" v-else>Sorry, No results with this query</p>
  </div>
  <div class="h-full overflow-auto shadow border-b border-gray-200 rounded-lg bg-gray-200" v-else>
    <div class="overflow-auto">
      <table class="min-w-full relative">
        <thead class="bg-gray-200 sticky top-0">
          <tr>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500"
              v-for="(header, index) in dataHeaders"
              :key="`data-header-${index}`"
            >
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, rowIndex) in dataContent"
            :key="`data-row-${rowIndex}`"
            :class="rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
          >
            <td
              class="px-6 py-4 whitespace-nowrap text-xs text-gray-900"
              v-for="(column, index) in row"
              :key="`data-col-${rowIndex}-${index}`"
            >
              {{ column }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="text-xs text-center py-5 text-gray-500">Query executed. {{ dataContent.length }} itens displayed.</p>
  </div>
</template>

<script>
export default {
  name: "TableQuery",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    dataContent: {
      type: Array,
      default: [],
    },
    dataHeaders: {
      type: Array,
      default: [],
    },
  },
};
</script>
