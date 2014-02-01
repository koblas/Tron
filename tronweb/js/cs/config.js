// Generated by CoffeeScript 1.7.1
(function() {
  var NamespaceListEntryView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.NamespaceList = (function(_super) {
    __extends(NamespaceList, _super);

    function NamespaceList() {
      return NamespaceList.__super__.constructor.apply(this, arguments);
    }

    NamespaceList.prototype.url = "/";

    return NamespaceList;

  })(Backbone.Model);

  window.Config = (function(_super) {
    __extends(Config, _super);

    function Config() {
      this.url = __bind(this.url, this);
      return Config.__super__.constructor.apply(this, arguments);
    }

    Config.prototype.url = function() {
      return "/config?name=" + this.get('name');
    };

    return Config;

  })(Backbone.Model);

  NamespaceListEntryView = (function(_super) {
    __extends(NamespaceListEntryView, _super);

    function NamespaceListEntryView() {
      return NamespaceListEntryView.__super__.constructor.apply(this, arguments);
    }

    NamespaceListEntryView.prototype.tagName = "tr";

    NamespaceListEntryView.prototype.template = _.template("<td>\n    <a href=\"#config/<%= name %>\">\n        <span class=\"label label-inverse\"><%= name %></span>\n    </a>\n</td>");

    NamespaceListEntryView.prototype.render = function() {
      this.$el.html(this.template({
        name: this.model
      }));
      return this;
    };

    return NamespaceListEntryView;

  })(ClickableListEntry);

  window.NamespaceListView = (function(_super) {
    __extends(NamespaceListView, _super);

    function NamespaceListView() {
      this.render = __bind(this.render, this);
      this.initialize = __bind(this.initialize, this);
      return NamespaceListView.__super__.constructor.apply(this, arguments);
    }

    NamespaceListView.prototype.initialize = function(options) {
      return this.listenTo(this.model, "sync", this.render);
    };

    NamespaceListView.prototype.tagName = "div";

    NamespaceListView.prototype.className = "span8";

    NamespaceListView.prototype.template = _.template("<h1>\n    <i class=\"icon-wrench icon-white\"></i>\n    Configuration Namespaces\n</h1>\n<div class=\"outline-block\">\n<table class=\"table table-hover table-outline\">\n  <thead class=\"header\">\n    <tr>\n      <th>Name</th>\n    </tr>\n  </thead>\n  <tbody>\n  </tbody>\n</table>\n</div>");

    NamespaceListView.prototype.render = function() {
      var entry, name;
      this.$el.html(this.template());
      entry = function(name) {
        return new NamespaceListEntryView({
          model: name
        }).render().el;
      };
      this.$('tbody').append((function() {
        var _i, _len, _ref, _results;
        _ref = this.model.get('namespaces');
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          name = _ref[_i];
          _results.push(entry(name));
        }
        return _results;
      }).call(this));
      return this;
    };

    return NamespaceListView;

  })(Backbone.View);

  window.ConfigView = (function(_super) {
    __extends(ConfigView, _super);

    function ConfigView() {
      this.render = __bind(this.render, this);
      this.initialize = __bind(this.initialize, this);
      return ConfigView.__super__.constructor.apply(this, arguments);
    }

    ConfigView.prototype.initialize = function(options) {
      return this.listenTo(this.model, "change", this.render);
    };

    ConfigView.prototype.tagName = "div";

    ConfigView.prototype.className = "span12";

    ConfigView.prototype.template = _.template("<h1><small>Config</small> <%= name %></h1>\n<div class=\"outline-block\"><div class=\"border-top\">\n    <textarea class=\"config-block\"><%= config %></textarea>\n</div></div>");

    ConfigView.prototype.render = function() {
      this.$el.html(this.template(this.model.attributes));
      CodeMirror.fromTextArea(this.$('textarea').get(0), {
        readOnly: true
      });
      return this;
    };

    return ConfigView;

  })(Backbone.View);

}).call(this);