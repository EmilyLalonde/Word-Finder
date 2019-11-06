<template>
  <div id="searchForm">
    <input
      placeholder="Search ..."
      v-model="word"
      @keyup.enter.prevent="handleSubmit(word)"
    />
    <button @click.prevent="handleSubmit(word)">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'form',
  props: {
    findWords: { type: Function }
  },
  data() {
    return {
      word: ''
    }
  },
  methods: {
    handleSubmit(word) {
      this.$emit('find-words', word)
      this.word = ''
    }
  }
}
</script>

<style scoped>
</style>