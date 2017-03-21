import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('article', params.article_id);
  },
  actions: {
    saveArticle(params) {
      var newArticle = this.store.createRecord('article', params);
      newArticle.save();
      this.transitionTo('admin');
    },
  }
});
