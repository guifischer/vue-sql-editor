<template>
  <div class="bg-white overflow-hidden shadow rounded-lg h-full">
    <div class="px-4 py-5 sm:p-6 h-full">
      <textarea ref="text-editor" class="h-full w-full border-0 m-0 text-xs" @input="textHandler"></textarea>
    </div>
  </div>

  <div class="rounded-md bg-white absolute px-2 py-1 shadow text-xs" v-bind:style="modalStyle" ref="modal">Modal</div>
</template>

<script>
import getPosition from "../helpers/textareaCursorPosition";

export default {
  name: "Editor",
  data() {
    return {
      modalStyle: {
        top: "0",
        left: "0",
        display: "none",
      },
    };
  },
  computed: {
    modalOptions() {
      let textarea = this.$refs["text-editor"];
      let lastWord = this.getLastWord(textarea.value);

      return [].map((item) => item.includes(lastWord));
    },
  },
  methods: {
    textHandler() {
      let textarea = this.$refs["text-editor"];
      let position = { x: 0, y: 0 };
      let display = "none";

      if (!this.isLastCharacterSpace(textarea.value)) {
        display = "block";
        position = getPosition(textarea);
      }

      this.modalStyle = {
        top: position.y + "px",
        left: position.x + "px",
        display: display,
      };
    },
    getLastWord(text) {
      var words = text.split(" ");
      return words[words.length - 1];
    },
    isLastCharacterSpace(string) {
      if (string.length == 0) {
        return true;
      }

      return /\s+$/.test(string);
    },
  },
};
</script>
