// JavaScript Document
var _g = globals = {};
var app = app || {};

/*=== Constructor ==============================*/
app = function(){
	var self = this;
	//--- functions -----------------
	self.mapDOM_();	
	self.init_();
	self.bindEvents_();
};

/*=== Dom ==============================*/
app.prototype.mapDOM_ = function() {
	var self = this;
	self.dom = {};
	self.dom.wrapper = $('#wrapper');
	self.dom.content = $('#content');
};

/*=== Init ==============================*/
app.prototype.init_ = function() {
	var self = this;
};

/*=== Bind ==============================*/
app.prototype.bindEvents_ = function() {
	var self = this;
};
