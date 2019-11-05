<template>
  <div id="wordList">
    <ul>
      <li
        v-for="(synonym, index) in this.synonyms"
        v-bind:key="index"
        @click.prevent="findWords(synonym)">
        {{synonym}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: ['synonyms', 'findWords']
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>