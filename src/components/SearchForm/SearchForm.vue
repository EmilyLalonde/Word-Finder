<template>
  <div id="searchForm">
    <input
      placeholder="Search ..."
      v-model="word"
      @keyup.enter.prevent="handleSubmit(word)"
      :class="{ 'has-error': submitting && emptyInput }"
    />
    <button @click.prevent="handleSubmit(word)">Submit</button>
    <p v-if="error && submitting" class="error-message">Please look up a word!</p>
  </div>
</template>

<script>
export default {
  name: "form",
  props: ['synonyms', 'findWords'],
  data() {
    return {
      word: "",
      submitting: false,
      error: false
    };
  },
  methods: {
    handleSubmit(word) {
      this.submitting = true;
      this.clearStatus();

      if (this.emptyInput) {
        this.error = true;
        return;
      }

      this.$emit("find-words", word);
      this.word = "";

      this.error = false;
      this.submitting = false;
    },
    clearStatus() {
      this.error = false;
    }
  },
  computed: {
    emptyInput() {
      return this.word === "";
    }
  }
};
</script>

<style scoped>
[class*="-message"] {
  font-weight: 500;
}

.error-message {
  color: #d33c40;
}
</style>