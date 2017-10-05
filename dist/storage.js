"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,s,r){return s&&e(t.prototype,s),r&&e(t,r),t}}(),isDef=function(e){return void 0!==e&&null!==e},getObjectType=function(e){return Object.prototype.toString.call(e).slice(8,-1)},Storage=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(_classCallCheck(this,e),"String"===getObjectType(t))this.defaults={use:t,pre:"",strict:!0,expire:null};else{if("Object"!==getObjectType(t))throw new Error("Wrong storage option");this.defaults={use:t.use,pre:"String"===getObjectType(t.pre)?t.pre:"",strict:"Boolean"!==getObjectType(t.strict)||t.strict,expire:"Number"===getObjectType(t.expire)?t.expire:null}}this.$ls=window.localStorage,this.$ss=window.sessionStorage,this.$s="s"===this.defaults.use&&"session"===this.defaults.use&&"sessionStorage"===this.defaults.use?this.$ss:this.$ls}return _createClass(e,[{key:"get",value:function(e){if(isDef(e))if(e=""+this.defaults.pre+e,this.defaults.strict){var t=this.$s.getItem(e);if(null===t)return null;try{return(t=JSON.parse(t)).expire&&t.expire>(new Date).getTime()||null===t.expire?t.data:(this.$s.removeItem(e),null)}catch(t){this.$s.removeItem(e),console.log("Wrong get storage")}}else try{return JSON.parse(this.$s.getItem(e))}catch(t){return this.$s.getItem(e)}else console.log("Wrong get storage")}},{key:"set",value:function(e,t){if(Array.isArray(e))for(var s in e)this._set(e[s].key,e[s].value);else this._set(e,t)}},{key:"remove",value:function(e){if(Array.isArray(e))for(var t in e)this._remove(e[t]);else this._remove(e)}},{key:"clear",value:function(){if(this.defaults.pre){for(var e in this.$ls)0===this.$ls.key(e).indexOf(this.defaults.pre)&&this.$ls.removeItem(this.$ls.key(e));for(var t in this.$ss)0===this.$ss.key(t).indexOf(this.defaults.pre)&&this.$ss.removeItem(this.$ss.key(t))}else this.$ss.clear(),this.$ls.clear()}},{key:"_set",value:function(e,t){isDef(e)?(e=""+this.defaults.pre+e,isDef(t)?this.defaults.strict?this.$s.setItem(e,JSON.stringify({data:t,expire:this.defaults.expire,type:getObjectType(t)})):"String"===getObjectType(t)||"Number"===getObjectType(t)?this.$s.setItem(e,t):this.$s.setItem(e,JSON.stringify(t)):this.$s.removeItem(e)):console.log("Wrong set storage")}},{key:"_remove",value:function(e){e?this.$s.removeItem(""+this.defaults.pre+e):console.log("Wrong remove storage")}}]),e}();exports.default=Storage;