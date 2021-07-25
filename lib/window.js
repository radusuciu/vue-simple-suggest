import VueSimpleSuggest from './vue-simple-suggest.vue'

if (Vue || (window && window['Vue'])) {
  app.component('vue-simple-suggest', VueSimpleSuggest);
}

export default VueSimpleSuggest
