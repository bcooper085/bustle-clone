import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    articleForm() {
          this.set('articleForm', true);
        },
        update(rental) {
          var params = {
            author: this.get('author'),
            article: this.get('article'),
            heading: this.get('heading'),
            image: this.get('image'),
            date: this.get('date'),
          };
          this.set('articleForm', false);
          this.sendAction('update', article, params);

    delete(article) {
      if (confirm('Are you sure?')) {
        this.sendAction('deleteArticle', article);
      }
    }
  }
});
