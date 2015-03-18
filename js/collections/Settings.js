define([
  'underscore',
  'backbone',
  'backbone.localStorage',
  'models/Setting'
], function(_, Backbone, LocalStorage, Setting){
	var Settings = Backbone.Collection.extend({
	  model: Setting,
	  localStorage: new LocalStorage("settings"),
	  getValue : function(key) {
	  	var setting = this.findWhere({key: key});
		return (setting != undefined)?setting.get('value'):null;
	  },
	  setValue : function(key, value) {
	  	var setting = this.findWhere({key: key});
		if (setting != undefined) {
			setting.set({value:value});
			setting.save();	
		} else {
			setting = new Setting({key:key, value:value});
			this.create(setting);
			setting.save();		
		}
	  } 
	});
	
	return new Settings;
});