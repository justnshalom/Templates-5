// JavaScript Document
var _g = globals = {};

/**
 * @desc Main app namespace.
 * @namespace
*/
var app = app || {};  //Évite d'overwritter des plugins si il y en a. 

/**
 * @desc Master app class.
 * @constructor
*/
app.Master = function(){
	var self = this;
	self.browserDimensions = [0,0];
	self.ie = false;
	//--- functions -----------------
	self.mapDOM_();	
	self.init_();
	self.bindEvents_();
};
/**
 * @desc Maps the DOM in the "dom" object.
*/
app.Master.prototype.mapDOM_ = function() {
	var self = this;
	self.dom = {};
	self.dom.w = window;
    self.dom.d = document;
    self.dom.b = self.dom.d.body;
	self.dom.wrapper = $('#wrapper');
	self.dom.page = $('#page');
	self.dom.header = $('header');
	self.dom.content = $('#content');
	self.dom.footer = $('footer');
};
/**
 * @desc Initialize the class/app.
*/
app.Master.prototype.init_ = function() {
	var self = this;
	if ($.browser.msie) {
		self.ie = true;
	}
};
/**
 * @desc Binds the events to the DOM
*/
app.Master.prototype.bindEvents_ = function() {
	var self = this;
};