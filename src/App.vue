<template>
  <div id="app">
    <h1>Word Finder</h1>
    <SearchForm
    :synonyms='this.synonyms' 
    @find-words='findWords'/>
    <WordList 
    :synonyms='this.synonyms'
    :findWords='findWords'
    />
  </div>
</template>

<script>
import SearchForm from './components/SearchForm/SearchForm'
import WordList from './components/WordList/WordList'
import {getWords} from '../apiCalls/apiCalls'

export default {
  name: 'app',
  components: {
    SearchForm,
    WordList
  },
  data() {
    return {
      synonyms: []
    }
  },
  methods: {
    findWords: async function(word) {
      const response = await getWords(word);
      const synonyms = response.syns[0];
      this.synonyms = synonyms
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
