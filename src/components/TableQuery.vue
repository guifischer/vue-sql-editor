<template>
  <div class="h-full overflow-auto shadow border-b border-gray-200 rounded-lg">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Title
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Email
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Role
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(person, personIdx) in people"
          :key="person.email"
          :class="personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
        >
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {{ person.name }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ person.title }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ person.email }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ person.role }}
          </td>
        </tr>
      </tbody>
    </table>
    <p class="text-xs text-center py-5 text-gray-500">No more results</p>
  </div>
</template>

<script>
export default {
  name: "TableQuery",
  data() {
    return {
      people: [
        {
          name: "Jane Cooper",
          title: "Regional Paradigm Technician",
          role: "Admin",
          email: "jane.cooper@example.com",
        },
        {
          name: "Cody Fisher",
          title: "Product Directives Officer",
          role: "Owner",
          email: "cody.fisher@example.com",
        },
        {
          name: "Cody Fisher",
          title: "Product Directives Officer",
          role: "Owner",
          email: "cody.fisher@example.com",
        },
        {
          name: "Cody Fisher",
          title: "Product Directives Officer",
          role: "Owner",
          email: "cody.fisher@example.com",
        },
        {
          name: "Cody Fisher",
          title: "Product Directives Officer",
          role: "Owner",
          email: "cody.fisher@example.com",
        },
        {
          name: "Cody Fisher",
          title: "Product Directives Officer",
          role: "Owner",
          email: "cody.fisher@example.com",
        },
        {
          name: "Cody Fisher",
          title: "Product Directives Officer",
          role: "Owner",
          email: "cody.fisher@example.com",
        },
        {
          name: "Cody Fisher",
          title: "Product Directives Officer",
          role: "Owner",
          email: "cody.fisher@example.com",
        },
      ],
    };
  },
};
</script>
