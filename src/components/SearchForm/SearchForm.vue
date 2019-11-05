<template>
  <div id="searchForm">
    <input
      placeholder="Search ..."
      v-model="word"
      @keyup.enter.prevent="findWords(word)"
    />
    <button @click.prevent="findWords(word)">Submit</button>
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
  }
}
</script>

<style scoped>
</style>