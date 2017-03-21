import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  heading: DS.attr(),
  image: DS.attr(),
  article: DS.attr(),
  date: DS.attr()
});
