webpackJsonp([1,4],{

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\" style=\"background-color:white;margin-bottom:2%;\">\n<img src=\"./assets/slogo.png\" class=\"img img-fluid\" alt=\"Responsive image\" style=\"width:10%;\">\n<img src=\"./assets/logo.png\" class=\"img img-fluid\" alt=\"Responsive image\" style=\"width:40%;\">\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\r\n  <strong>Oh snap!</strong> Please select your section.\r\n</div>\r\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"electiveer\">\r\n  <strong>Oh snap!</strong> Select your another elective.\r\n</div>\r\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"data.getbacksec\">\r\n  <strong>Oh snap!</strong> You requested for a full section Choose another section\r\n</div>\r\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"data.getbackele\">\r\n  <strong>Oh snap!</strong> You requested for full elective Choose another section\r\n</div>\r\n</div>\r\n<div class=\"row\" style=\"padding-left:4%;padding-right:4%;\">\r\n<div class=\"col-md-6\">\r\n\r\n<div class=\"card\">\r\n  <h4 class=\"card-header\" style=\"background-color:#1F3D63;color:white\">\r\n    <i>Profile</i>\r\n  </h4>\r\n  <div class=\"card-block\">\r\n  <div class=\"form-group row\">\r\n       <label for=\"example-text-input\" class=\"col-3 col-form-label\">Name</label>\r\n       <div class=\"col-3\">\r\n    <input class=\"form-control\" type=\"text\" placeholder=\"{{data.studetails.name}}\" readonly>\r\n    </div>\r\n    <label for=\"example-text-input\" class=\"col-3 col-form-label\">Register No</label>\r\n           <div class=\"col-3\">\r\n        <input class=\"form-control\" type=\"text\" placeholder=\"{{data.studetails.registerno}}\" readonly>\r\n        </div>\r\n\r\n\r\n\r\n    </div>\r\n     <div class=\"form-group row\">\r\n           <label for=\"example-text-input\" class=\"col-3 col-form-label\">Branch</label>\r\n           <div class=\"col-3\">\r\n        <input class=\"form-control\" type=\"text\" placeholder=\"{{data.studetails.branch}}\" readonly>\r\n        </div>\r\n        <label for=\"example-text-input\" class=\"col-3 col-form-label\">Semester</label>\r\n               <div class=\"col-3\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"{{data.studetails.semester}}\" readonly>\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n          <div class=\"form-group row\">\r\n                   <label for=\"example-text-input\" class=\"col-3 col-form-label\">Year</label>\r\n                   <div class=\"col-3\">\r\n                <input class=\"form-control\" type=\"text\" placeholder=\"{{data.studetails.year}}\" readonly>\r\n                </div>\r\n\r\n\r\n\r\n                </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"check()\"></div>\r\n<div class=\"card\">\r\n  <h4 class=\"card-header\" style=\"background-color:#1F3D63;color:white\">\r\n      <i>Section Selection</i>\r\n    </h4>\r\n  <div class=\"card-block secselect\" >\r\n\r\n  </div>\r\n</div>\r\n</div>\r\n<div class=\"col-md-6\" style=\"font-size:smaller;\">\r\n<div class=\"card\">\r\n  <h4 class=\"card-header\" style=\"background-color:#1F3D63;color:white\">\r\n       <i>Elective Selection</i>\r\n     </h4>\r\n  <div class=\"card-block electiveselect\" style=\"padding:0\">\r\n\r\n  </div>\r\n</div>\r\n\r\n</div>\r\n</div>\r\n\r\n<button *ngIf=\"!this.data.studetails.section\" type=\"button\" class=\"btn btn-success\" (click)=\"saves()\" style=\"display: inline-block; position: fixed; top: 87%; min-width: 10%; z-index: 99999; left: 2%;\">Save Class</button>\r\n<button *ngIf=\"this.data.studetails.section && !this.data.studetails.elective\" type=\"button\" class=\"btn btn-success\" (click)=\"saves()\" style=\"display: inline-block; position: fixed; top: 87%; min-width: 10%; z-index: 99999; left: 2%;\">Save Elective</button>\r\n<button  type=\"button\" class=\"btn btn-danger\" (click)=\"logout()\" style=\"display: inline-block; position: fixed; top: 94%; min-width: 10%; z-index: 99999; left: 2%;\">Logout</button>\r\n\r\n\r\n"

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top:10%;\">\r\n\r\n<div class=\"col-md-4 card offset-4 text-center\" style=\"padding:0\">\r\n\r\n  <h3 class=\"card-header\" style=\"background-color:#1F3D63;color:white\">\r\n   <i>Login</i>\r\n  </h3>\r\n\r\n  <div class=\"card-block\">\r\n\r\n  <form  [formGroup]=\"loginform\">\r\n\r\n   <div class=\"form-group row\">\r\n     <label for=\"example-text-input\" class=\"col-4 col-form-label\">Register No</label>\r\n     <div class=\"col-8\">\r\n       <input class=\"form-control\" formControlName=\"registerno\" type=\"text\" placeholder=\"Register No\" id=\"example-text-input\">\r\n     </div>\r\n   </div>\r\n   <div class=\"form-group row\">\r\n     <label for=\"example-search-input\" class=\"col-4 col-form-label\">Password</label>\r\n     <div class=\"col-8\">\r\n       <input class=\"form-control\" type=\"password\" formControlName=\"password\" placeholder=\"Date of Birth (ddmmyyyy)\" id=\"example-search-input\">\r\n     </div>\r\n   </div>\r\n</form>\r\n    <button  class=\"btn btn-primary\" (click)=\"onLoginSubmit()\" [disabled]=\"loginform.invalid\">Login</button>\r\n  </div>\r\n\r\n  <div class=\"card-footer text-muted\">\r\n <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"data.rev\">\r\n   <strong>Oh snap!</strong> Enter your details correctly.\r\n </div>\r\n    Please Make sure  you enter correctly\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(86);


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var dataService = (function () {
    function dataService(router) {
        this.router = router;
        this.rev = false;
        this.secdet = {};
        this.change = false;
        this.getbacksec = false;
        this.getbackele = false;
    }
    dataService.prototype.ngOnInit = function () {
        this.secdet = {};
    };
    ////////////////////////////////////////////
    dataService.prototype.updates = function (sec) {
        var _this = this;
        console.log(sec);
        firebase.database().ref('sections/' + this.key + "/section/" + sec).child("number").transaction(function (search, err) {
            if (err)
                throw err;
            console.log(search);
            if (search > 0) {
                search = search - 1;
                firebase.database().ref('details/' + _this.stukey).update({
                    'section': true,
                    'sectionname': String.fromCharCode(sec + 65),
                });
                _this.getbacksec = false;
            }
            else {
                _this.getbacksec = true;
            }
            return search;
        });
    };
    ////////////////////////////////////////////
    dataService.prototype.update = function (sec, elec, ar) {
        var _this = this;
        if (sec < 5) {
            console.log("asdfasdf");
            firebase.database().ref('sections/' + this.key + "/section/" + sec).child("number").transaction(function (search, err) {
                if (err)
                    throw err;
                console.log(search);
                if (search > 0) {
                    search = search - 1;
                }
                return search;
            });
        }
        console.log(ar.length);
        var _loop_1 = function (i) {
            console.log(ar[i]);
            firebase.database().ref().child('sections/' + this_1.key + '/elective').child(i + "/").orderByChild("subjectcode").equalTo(ar[i]).once('value', function (snapshot) {
                var ss = Object.keys(snapshot.val())[0];
                firebase.database().ref().child('sections/' + _this.key + '/elective').child(i + "/" + ss + "/teachers").orderByChild("name").equalTo(elec[i]).once('value', function (snapshot) {
                    firebase.database().ref('sections/' + _this.key + '/elective').child(i + "/" + ss + "/teachers/" + Object.keys(snapshot.val())[0] + "/").child("num").transaction(function (snapshot) {
                        console.log(snapshot);
                        if (snapshot > 0) {
                            _this.getbackele = false;
                            snapshot = snapshot - 1;
                            if (sec < 5) {
                                console.log(sec);
                                firebase.database().ref('details/' + _this.stukey).update({
                                    'section': true,
                                    'sectionname': String.fromCharCode(sec + 65),
                                    'elective': true,
                                    'electivedet': {
                                        'names': ar,
                                        'teach': elec
                                    }
                                });
                            }
                            else {
                                firebase.database().ref('details/' + _this.stukey).update({
                                    'section': true,
                                    'elective': true,
                                    'electivedet': {
                                        'names': ar,
                                        'teach': elec
                                    }
                                });
                            }
                        }
                        else {
                            _this.getbackele = true;
                        }
                        return snapshot;
                    });
                });
            });
        };
        var this_1 = this;
        for (var i = 0; i < ar.length; i++) {
            _loop_1(i);
        }
    };
    ///////////////////////////////////////////////
    dataService.prototype.getdata = function () {
        var _this = this;
        firebase.database().ref().child('sections').orderByChild('year').equalTo(this.studetails.branch + this.studetails.year).on('value', function (snapshot) {
            console.log("this");
            _this.key = Object.keys(snapshot.val())[0];
            _this.secdet = snapshot.val()[snapshot.val().length - 1];
            _this.change = true;
        });
    };
    dataService.prototype.onsubmit = function (s) {
        var _this = this;
        // localStorage.setItem("registerno", s.registerno);
        var reg = s.registerno;
        firebase.database().ref().child('details').orderByChild('registerno').equalTo(reg).on('value', function (snapshot) {
            var det = snapshot.val();
            _this.stukey = Object.keys(snapshot.val())[0];
            det = Object.keys(det).map(function (k) {
                return det[k];
            });
            det = det[0];
            if (det.password == s.password) {
                localStorage.setItem('registerno', det.registerno);
                _this.studetails = {
                    registerno: det.registerno,
                    year: det.year,
                    branch: det.branches,
                    name: det.Name,
                    semester: det.semester,
                    section: det.section,
                    elective: det.elective
                };
                if (det.electivedet.names != '') {
                    _this.studetails.electivedet = det.electivedet.names;
                }
                if (det.sectionname != undefined) {
                    _this.studetails.sectionname = det.sectionname;
                }
                _this.change = true;
                console.log(_this.studetails);
                _this.router.navigate(['../home']);
            }
            else {
                _this.rev = true;
            }
        });
    };
    return dataService;
}());
dataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], dataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 85;


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(97);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        window.onbeforeunload = function () {
            localStorage.clear();
            return '';
        };
        window.onunload = function () {
            localStorage.clear();
            return '';
        };
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(152),
        styles: [__webpack_require__(151)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dataservice_data_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dataservice_auth_guard__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_component__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_9__login_component__["a" /* LoginComponent */]
        ],
        imports: [__WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot([
                { path: '', redirectTo: '/login', pathMatch: 'full' },
                { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__login_component__["a" /* LoginComponent */] },
                { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__dataservice_auth_guard__["a" /* AuthGuard */]] }
            ]), __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__dataservice_data_service__["a" /* dataService */], __WEBPACK_IMPORTED_MODULE_7__dataservice_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        exports: []
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        console.log(localStorage.getItem("registerno"));
        if (localStorage.getItem("registerno") == null) {
            return false;
        }
        else {
            return true;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataservice_data_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(data, router) {
        this.data = data;
        this.router = router;
        this.count = 0;
        this.grps = 0;
        this.error = false;
        this.electiveer = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.data.getdata();
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setInterval(function () {
            _this.data.change = false;
        }, 5000);
    };
    HomeComponent.prototype.saves = function () {
        var _this = this;
        var g = 13;
        console.log();
        if (!this.data.studetails.section) {
            var section = $('input[name="secselection"]:checked').val();
            if (section == 'A') {
                g = 0;
            }
            else if (section == 'B') {
                g = 1;
            }
            else if (section == 'C') {
                g = 2;
            }
            else if (section == 'D') {
                g = 3;
            }
            else {
                this.error = true;
                setTimeout(function () {
                    _this.error = false;
                    _this.electiveer = false;
                }, 5000);
            }
        }
        var arr = [], arr1 = [];
        var size = 0;
        for (var i = 0; i < this.grps; i++) {
            var st = 'input[name=' + "elecselection" + i + ']:checked';
            if ($(st).attr("data-det") == undefined) {
                size = size + 1;
            }
            arr1.push($(st).attr("data-det"));
            arr.push($(st).val());
        }
        console.log(size);
        if (size == this.grps && !this.error && !this.data.studetails.section) {
            console.log("updating");
            this.data.updates(g);
        }
        else {
            if (size == 0 && !this.error) {
                this.data.update(g, arr, arr1);
            }
            else {
                this.electiveer = true;
                setTimeout(function () {
                    _this.electiveer = false;
                }, 5000);
            }
        }
    };
    HomeComponent.prototype.check = function () {
        var _this = this;
        if (this.data.secdet && this.data.change) {
            var str_1;
            var i_1;
            if (this.data.studetails.section) {
                str_1 = '<div class="alert alert-success" role="alert"><strong>Well done!</strong> You have  successfully selected ' + this.data.studetails.sectionname + '.</div>';
            }
            else {
                str_1 = '<table class="table-sm table" style="text-align:center;"><thead><tr><th>S.no</th><th style="text-align: center;">Section Name</th><th style="text-align: center;">Remaining</th><th style="text-align: center;">Choose</th></tr></thead><tbody>';
                i_1 = 0;
                this.data.secdet.section.forEach(function (datae) {
                    str_1 = str_1 + '<tr><th scope="row">' + (i_1 + 1) + '</th>';
                    i_1 = i_1 + 1;
                    str_1 = str_1 + '<td>' + datae.name + '</td>';
                    str_1 = str_1 + '<td>' + datae.number + '</td>';
                    if (datae.number == 0) {
                        str_1 = str_1 + '<td>Filled</td>';
                    }
                    else {
                        str_1 = str_1 + "<td>" + '<div   class="form-check text-center"><label class="form-check-label"><input class="form-check-input secclass" type="radio" name="secselection" id="sections' + datae.name + '" value="' + datae.name + '"></label></div></tr>';
                    }
                });
                str_1 = str_1 + "</tbody></table>";
            }
            $('.secselect').html(str_1);
            if (this.data.studetails.elective) {
                str_1 = '<div style="margin:2%" class="alert alert-success" role="alert"><strong>Well done!</strong> You have  successfully selected ';
                this.data.studetails.electivedet.forEach(function (ed) {
                    str_1 = str_1 + "<b>---" + ed + "----</b>";
                });
                str_1 = str_1 + '.</div>';
            }
            else {
                str_1 = '';
                console.log(this.data.secdet.elective);
                var grp_1 = 0;
                var redd_1 = 236;
                var gree_1 = 232;
                var bll_1 = 232;
                this.data.secdet.elective.forEach(function (datae) {
                    console.log(datae);
                    str_1 = str_1 + '<table class="table table-responsive" style="padding:2px;background-color:rgb(' + redd_1 + "," + gree_1 + ',' + bll_1 + ');text-align: center;margin-bottom: 0;"><thead><tr><th>S.no</th><th style="text-align: center;">Subject Code</th><th style="text-align: center;">Subject Name</th><th style="text-align: center;">Details</th></tr></thead><tbody>';
                    i_1 = 0;
                    datae.forEach(function (er) {
                        str_1 = str_1 + '<tr><th scope="row">' + (i_1 + 1) + '</th>';
                        i_1 = i_1 + 1;
                        str_1 = str_1 + '<td style="vertical-align: middle">' + er.subjectcode + '</td>';
                        str_1 = str_1 + '<td style="vertical-align: middle">' + er.name + '</td>';
                        str_1 = str_1 + '<td><table class="table-sm table table-responsive" style="background-color:rgb(' + redd_1 + "," + gree_1 + ',' + bll_1 + ');text-align: center;margin: 0"><thead><tr><th style="text-align: center;">Staff Name</th><th style="text-align: center;">Remaining</th><th style="text-align: center;">Choose</th></tr></thead><tbody>';
                        var seee = 0;
                        er.teachers.forEach(function (ee) {
                            str_1 = str_1 + '<td style="width:80%;">' + ee.name + '</td>';
                            str_1 = str_1 + '<td>' + ee.num + '</td>';
                            if (ee.num == 0) {
                                str_1 = str_1 + '<td>Filled</td></tr>';
                            }
                            else {
                                str_1 = str_1 + "<td>" + '  <div class="form-check text-center"><label class="form-check-label"><input class="form-check-input elecclass" type="radio" name="elecselection' + grp_1 + '" id="electi' + ee.id + seee + '" value="' + ee.name + '" data-det="' + er.subjectcode + '"></label></div></tr>';
                            }
                            seee = seee + 1;
                        });
                        str_1 = str_1 + '</tbody></table></td></tr>';
                    });
                    gree_1 = gree_1 - 16;
                    bll_1 = bll_1 - 16;
                    str_1 = str_1 + "</tbody></table>";
                    grp_1 = grp_1 + 1;
                });
                this.grps = grp_1;
                console.log(this.grps);
            }
            $('.electiveselect').html(str_1);
            console.log(localStorage.getItem("section"));
            if (localStorage.getItem("section")) {
                var or = "input[value=" + localStorage.getItem("section") + "]";
                $(or).prop("checked", true);
            }
            for (var i_2 = 0; i_2 < this.grps; i_2++) {
                var str_2 = 'elective' + i_2;
                var st = 'input[value="' + localStorage.getItem(str_2) + '"]';
                if (localStorage.getItem(str_2)) {
                    $(st).prop("checked", true);
                }
            }
            $('.secclass').change(function () {
                var section = $('input[name="secselection"]:checked').val();
                localStorage.setItem("section", section);
            });
            $('.elecclass').change(function () {
                console.log(_this.grps);
                for (var i_3 = 0; i_3 < _this.grps; i_3++) {
                    var st = 'input[name=' + "elecselection" + i_3 + ']:checked';
                    var str_3 = 'elective' + i_3;
                    localStorage.setItem(str_3, $(st).val());
                }
            });
            this.data.change = false;
            return true;
        }
        else {
            return false;
        }
    };
    HomeComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['../login']);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'home-root',
        template: __webpack_require__(153)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dataservice_data_service__["a" /* dataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dataservice_data_service__["a" /* dataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dataservice_data_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by harsh on 28-06-2017.
 */



var LoginComponent = (function () {
    function LoginComponent(data) {
        this.data = data;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginform = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'registerno': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern("^[0-9]*$"), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(9)]),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern("^[0-9]*$"), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(8)])
        });
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        console.log("asdfasdfas");
        this.data.onsubmit(this.loginform.value);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'login-root',
        template: __webpack_require__(154)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__dataservice_data_service__["a" /* dataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dataservice_data_service__["a" /* dataService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[185]);
//# sourceMappingURL=main.bundle.js.map