<template>
  <div class="h-screen flex overflow-hidden bg-gray-100">
    <MobileMenu :navigation="navigation" :sidebarOpen="sidebarOpen" @closeSidebar="sidebarOpen = false" />
    <div class="hidden md:flex md:flex-shrink-0">
      <Menu :navigation="navigation" class="w-64" />
    </div>

    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <Navbar @openSidebar="sidebarOpen = true" @run="getData" />

      <div class="flex-1 relative z-0 flex overflow-hidden">
        <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-first">
          <div class="absolute inset-0 pl-5 pr-4">
            <div class="h-2/5 py-5">
              <Editor @sqlQuery="updateQuery" />
            </div>
            <div class="h-3/5 pb-5">
              <TableQuery :dataContent="dataContent" :dataHeaders="dataHeaders" :loading="loading" />
            </div>
          </div>
        </main>
        <aside class="hidden relative xl:order-last xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200">
          <Helper />
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import Helper from "../components/Helper.vue";
import Navbar from "../components/Navbar.vue";
import Menu from "../components/Menu.vue";
import MobileMenu from "../components/MobileMenu.vue";
import Editor from "../components/Editor.vue";
import TableQuery from "../components/TableQuery.vue";

import { axios } from "@bundled-es-modules/axios";

export default {
  name: "Home",
  components: {
    Helper,
    Navbar,
    Menu,
    MobileMenu,
    Editor,
    TableQuery,
  },
  data() {
    return {
      sidebarOpen: false,
      loading: false,
      query: "",
      dataContent: [],
      dataHeaders: [],
      navigation: [
        {
          name: "Database 01",
          current: true,
          submenus: [
            {
              name: "Tables",
              children: [
                "categories",
                "customers",
                "employee_territories",
                "employees",
                "order_details",
                "orders",
                "products",
                "regions",
                "shippers",
                "suppliers",
                "territories",
              ],
            },
            { name: "Schema", children: [] },
            { name: "Queries", children: [] },
            { name: "Backup", children: [] },
            { name: "Configuration", children: [] },
          ],
        },
        { name: "Database 02", current: false, submenus: [] },
        { name: "Database 03", current: false, submenus: [] },
      ],
    };
  },
  methods: {
    updateQuery(value) {
      this.query = value;
    },
    async getData() {
      /*
       * If we had an backend part in this project we would get the data in here sending the query.
       * Since it is just an example, I just created some predefined queries here to match certain
       * csv files.
       */
      this.loading = true;
      let response = { data: "" };
      let query = this.query.toLowerCase().trim();

      switch (query) {
        case "select * from categories":
          response = await axios.get(
            "https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/categories.csv"
          );
          break;

        case "select * from orders":
          response = await axios.get(
            "https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/orders.csv"
          );
          break;

        case "select * from products":
          response = await axios.get(
            "https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/products.csv"
          );
          break;
      }
      let json = this.csvJSON(response.data);

      this.dataContent = json.content;
      this.dataHeaders = json.headers;
      this.loading = false;
    },
    csvJSON(csv) {
      let lines = csv.split("\n");

      let content = [];
      let headers = lines[0].split(",");

      for (let i = 1; i < lines.length; i++) {
        let obj = [];
        let currentLine = lines[i].split(",");

        for (let j = 0; j < headers.length; j++) {
          obj.push(currentLine[j]);
        }

        content.push(obj);
      }

      return { headers: headers, content: content };
    },
  },
};
</script>
