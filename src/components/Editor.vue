<template>
  <div class="bg-white overflow-hidden shadow rounded-lg h-full">
    <div class="h-full flex">
      <textarea
        class="h-full w-12 border-0 m-0 text-xs resize-none bg-gray-200 text-right overflow-hidden"
        ref="numbers-editor"
        value="1"
        readonly
      ></textarea>
      <textarea
        class="h-full w-75 border-0 m-0 text-xs resize-none flex-grow"
        ref="text-editor"
        v-model="sql"
        @input="textHandler"
        @keydown="checkForTab"
        @scroll="scrollsync()"
      ></textarea>
    </div>
  </div>

  <div class="rounded-sm bg-white absolute shadow text-xs font-medium p-1" v-bind:style="modalStyle" ref="modal">
    <ul>
      <li class="rounded-sm px-2 py-1 cursor-pointer hover:bg-gray-300" @click="addModalOption(modalOption)">
        {{ modalOption }}
      </li>
    </ul>
  </div>
</template>

<script>
import getPosition from "../helpers/textareaCursorPosition";
import { commands } from "../helpers/sql";

export default {
  name: "Editor",
  emits: ["sqlQuery"],
  data() {
    return {
      modalStyle: {
        top: "0",
        left: "0",
        display: "none",
      },
      sql: "",
    };
  },
  computed: {
    modalOption() {
      let lastWord = this.getLastWord(this.sql).toLowerCase();
      let option = commands.find((item) => {
        let itemLowerCase = item.toLowerCase();
        return itemLowerCase.includes(lastWord);
      });

      if (option == null || lastWord == "") {
        return "";
      }

      return option;
    },
  },
  methods: {
    textHandler() {
      let textarea = this.$refs["text-editor"];
      let position = { x: 0, y: 0 };
      let display = "none";

      if (!this.isLastCharacterSpace(textarea.value) && this.modalOption != "") {
        display = "block";
        position = getPosition(textarea);
      }

      this.modalStyle = {
        top: position.y + "px",
        left: position.x + "px",
        display: display,
      };

      this.checkRows();
      this.$emit("sqlQuery", this.sql);
    },
    checkForTab(event) {
      if (event.key === "Tab" && !event.shiftKey) {
        if (this.modalOption != "") {
          this.addModalOption(this.modalOption);
        }

        event.preventDefault();
        return false;
      }
    },
    addModalOption(modalOption) {
      let sql = this.sql;
      let lastIndex = sql.lastIndexOf(" ") + 1;

      this.sql = sql.substring(0, lastIndex) + modalOption;
      this.modalStyle = {
        ...this.modalStyle,
        display: "none",
      };
    },
    getLastWord(text) {
      var words = text.replace(/[\[\]?.,\/#!$%\^&\*;:{}=\\|_~()\n]/g, " ").split(" ");
      return words[words.length - 1];
    },
    isLastCharacterSpace(string) {
      if (string.length == 0) {
        return true;
      }

      return /\s+$/.test(string);
    },

    checkRows() {
      let numbers = this.$refs["numbers-editor"];
      let textarea = this.$refs["text-editor"];

      let countLine = this.countLines(textarea.value);
      if (countLine == 0) {
        countLine = 1;
      }

      this.populateRows(numbers, countLine);
      this.scrollSync();
    },

    scrollSync() {
      let textarea = this.$refs["text-editor"];
      let numbers = this.$refs["numbers-editor"];

      numbers.scrollTop = textarea.scrollTop;
    },

    populateRows(obj, countLine) {
      let txt = "";
      for (let i = 1; i <= countLine; i++) {
        txt = txt + i.toString() + "\n";
      }
      obj.value = txt;
    },

    countLines(txt) {
      if (txt == "") {
        return 1;
      }
      return txt.split("\n").length;
    },
  },
};
</script>
