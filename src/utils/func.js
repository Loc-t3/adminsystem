
exports.install = function (Vue, options) {
  Vue.prototype.$trans = function (title){
    const suffix = title.split('.').pop();
    return this.$te(title) ? this.$t(title) : suffix;
  };

  Vue.prototype.$trans_menu = function (title){
    const key = 'menu.' + title;
    return this.$te(key) ? this.$t(key) : title;
  };

  Vue.prototype.$trans_btn = function (title){
    const key = 'btn.' + title;
    return this.$te(key) ? this.$t(key) : title;
  };
};
