webpackJsonp([0],{

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teacher_component__ = __webpack_require__(326);
/* harmony export (binding) */ __webpack_require__.d(exports, "TeacherModule", function() { return TeacherModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeacherModule = (function () {
    function TeacherModule() {
    }
    TeacherModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_2__teacher_component__["a" /* TeacherComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__teacher_component__["a" /* TeacherComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TeacherModule);
    return TeacherModule;
}());


/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Subjects; });
var Subjects = [
    'Math',
    'Earth Science',
    'Biology',
    'Economics'
];


/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Subjects__ = __webpack_require__(325);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TeacherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeacherComponent = (function () {
    function TeacherComponent() {
        this.subjects = __WEBPACK_IMPORTED_MODULE_1__Subjects__["a" /* Subjects */];
    }
    TeacherComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'teacher',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* ViewEncapsulation */].None,
            template: "<div>This is the teacher component.\n            <ul *ngFor=\"let subject of subjects\">\n                <li>{{subject}}</li>\n            </ul>\n        </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], TeacherComponent);
    return TeacherComponent;
}());


/***/ }

});