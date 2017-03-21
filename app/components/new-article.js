import Ember from 'ember';

export default Ember.Component.extend({
  addArticle: false,
  actions: {
    articleForm() {
      this.set('addArticle', true);
    },
    saveArticle() {
      var params = {
        author: this.get('author'),
        heading: this.get('heading'),
        image: this.get('image'),
        article: this.get('article'),
        date: this.get('date'),
      };
      this.set('addArticle', false);
      this.sendAction('saveArticle', params);
    }
  }
});
