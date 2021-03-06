define([
	'underscore',
	'text!templates/grid-docs.html',
	'text!pages/grid-options-showHeader.html',
	'dobygrid'
], function (_, template, page, DobyGrid) {
	"use strict";
	
	return Backbone.DobyView.extend({
		
		events: function () {
			return _.extend({}, Backbone.DobyView.prototype.events, {
				"change #option-value":		"changeOption"
			});
		},
		
		initialize: function () {
			var html = _.template(template)({page: page});
			
			this.$el.append(html);
		},
		
		render: function (value) {
			if (this.grid) this.grid.destroy();
			
			var columns = [{
				id: 'id',
				field: 'id',
				name: 'ID',
				removable: true,
				width: 15
			}, {
				id: 'name',
				field: 'name',
				name: 'Name',
				removable: true
			}, {
				id: 'age',
				field: 'age',
				name: 'Age',
				removable: true,
				width: 15
			}];
			
			this.grid = new DobyGrid({
				columns: columns,
				data: [{
					id: 1,
					data: {
						id: 1,
						name: "Abraham",
						age: 20
					}
				}, {
					id: 2,
					data: {
						id: 2,          
						name: "Bobby",
						age: 20
					}
				}, {
					id: 3,
					data: {
						id: 3,          
						name: "James",
						age: 21
					}
				}, {
					id: 4,
					data: {
						id: 4,          
						name: "Steve",
						age: 30
					}
				}],
				rowHeight: 35,
				showHeader: value
			}).appendTo('#demo-grid');
		},
		
		
		changeOption: function (event) {
			// Get value
			var value = $(event.currentTarget).val();
			
			// Set value
			this.render(value === 'false' ? false : true);
		}
	});
});