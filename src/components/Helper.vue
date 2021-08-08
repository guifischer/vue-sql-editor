<template>
  <div class="h-full px-1 pr-5 py-5 overflow-auto">
    <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6 text-sm text-gray-500">
      <h2 id="timeline-title" class="text-md font-medium text-gray-900">Readme</h2>

      <p class="mt-3">
        This is an open source project to exemplify some frontend programming. This is only a single small page that
        utilizes different components for the development.
      </p>

      <p class="mt-5">
        It uses <span class="font-medium text-gray-900">Vue.js</span> as the default framework of programming language
        and <span class="font-medium text-gray-900">TailwindCSS</span> for the styles.
      </p>

      <p class="text-xs mt-5">Overall page load ( dev mode ): <span class="font-medium text-green-500">599 ms</span></p>
      <p class="text-xs mt-1">
        Project:
        <a href="https://github.com/guifischer/vue-sql-editor" target="__blank" class="font-medium text-blue-500"
          >github.com/guifischer/vue-sql-editor</a
        >
      </p>
    </div>

    <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6 mt-3 text-sm text-gray-500">
      <h2 id="timeline-title" class="text-md font-medium text-gray-900">SQL Queries</h2>

      <p class="mt-3">
        As is it an example project, some pieces of the page won't work. This example has the main propose to show how
        we can create an page using components and create a simple and elegant layout.
      </p>

      <p class="mt-5">
        If we would turn this in to a software would be necessary to do some coding to add some features as:
      </p>
      <ul class="text-xs mt-3 space-y-1">
        <li>- Connect to different databases</li>
        <li>- Save queries for the logged user</li>
        <li>- Export the content based on the current query</li>
        <li>- Query the info with the backend based changes</li>
        <li>- Add functionalities to check table schemas, backup, configurations and lots more.</li>
      </ul>

      <p class="mt-5">
        I created some standart queries for this example. You can play around with the editor or use the following to
        display results:
      </p>

      <div class="overflow-hidden rounded-md bg-light-blue-500 mt-5">
        <pre
          class="scrollbar-none overflow-x-auto text-xs text-white bg-black bg-opacity-75 p-2"
        ><span>SELECT * FROM categories</span></pre>
      </div>

      <div class="overflow-hidden rounded-md bg-light-blue-500 mt-3">
        <pre
          class="scrollbar-none overflow-x-auto text-xs text-white bg-black bg-opacity-75 p-2"
        ><span>SELECT * FROM orders</span></pre>
      </div>

      <div class="overflow-hidden rounded-md bg-light-blue-500 mt-3">
        <pre
          class="scrollbar-none overflow-x-auto text-xs text-white bg-black bg-opacity-75 p-2"
        ><span>SELECT * FROM products</span></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Helper",
};
</script>
