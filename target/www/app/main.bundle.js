webpackJsonp([0],{

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/account/password/password-strength-bar.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/* ==========================================================================\nstart Password strength bar style\n========================================================================== */\nul#strength {\n  display: inline;\n  list-style: none;\n  margin: 0;\n  margin-left: 15px;\n  padding: 0;\n  vertical-align: 2px; }\n\n.point {\n  background: #DDD;\n  border-radius: 2px;\n  display: inline-block;\n  height: 5px;\n  margin-right: 1px;\n  width: 20px; }\n  .point:last {\n    margin: 0 !important; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/home/home.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/* ==========================================================================\nMain page styles\n========================================================================== */\n.hipster {\n  display: inline-block;\n  width: 347px;\n  height: 497px;\n  background: url(" + __webpack_require__("./src/main/webapp/content/images/hipster.png") + ") no-repeat center top;\n  background-size: contain; }\n\n/* wait autoprefixer update to allow simple generation of high pixel density media query */\n@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2 / 1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {\n  .hipster {\n    background: url(" + __webpack_require__("./src/main/webapp/content/images/hipster2x.png") + ") no-repeat center top;\n    background-size: contain; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/layouts/navbar/navbar.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/* ==========================================================================\nNavbar\n========================================================================== */\n.navbar-version {\n  font-size: 10px;\n  color: #ccc; }\n\n.jh-navbar {\n  background-color: #353d47;\n  padding: .2em 1em; }\n  .jh-navbar .profile-image {\n    margin: -10px 0px;\n    height: 40px;\n    width: 40px;\n    border-radius: 50%; }\n  .jh-navbar .dropdown-item.active, .jh-navbar .dropdown-item.active:focus, .jh-navbar .dropdown-item.active:hover {\n    background-color: #353d47; }\n  .jh-navbar .dropdown-toggle::after {\n    margin-left: 0.15em; }\n  .jh-navbar ul.navbar-nav {\n    padding: 0.5em; }\n    .jh-navbar ul.navbar-nav .nav-item {\n      margin-left: 1.5rem; }\n  .jh-navbar a.nav-link {\n    font-weight: 400; }\n  .jh-navbar .jh-navbar-toggler {\n    color: #ccc;\n    font-size: 1.5em;\n    padding: 10px; }\n    .jh-navbar .jh-navbar-toggler:hover {\n      color: #fff; }\n\n@media screen and (max-width: 992px) {\n  .jh-logo-container {\n    width: 100%; } }\n\n.navbar-title {\n  display: inline-block;\n  vertical-align: middle; }\n\n/* ==========================================================================\nLogo styles\n========================================================================== */\n.navbar-brand.logo {\n  padding: 5px 15px; }\n  .navbar-brand.logo .logo-img {\n    height: 45px;\n    width: 70px;\n    display: inline-block;\n    vertical-align: middle;\n    background: url(" + __webpack_require__("./src/main/webapp/content/images/logo-jhipster.png") + ") no-repeat center center;\n    background-size: contain; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/layouts/profiles/page-ribbon.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/* ==========================================================================\nDevelopement Ribbon\n========================================================================== */\n.ribbon {\n  background-color: rgba(170, 0, 0, 0.5);\n  left: -3.5em;\n  moz-transform: rotate(-45deg);\n  ms-transform: rotate(-45deg);\n  o-transform: rotate(-45deg);\n  webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  overflow: hidden;\n  position: absolute;\n  top: 40px;\n  white-space: nowrap;\n  width: 15em;\n  z-index: 9999;\n  pointer-events: none;\n  opacity: 0.75; }\n  .ribbon a {\n    color: #fff;\n    display: block;\n    font-weight: 400;\n    margin: 1px 0;\n    padding: 10px 50px;\n    text-align: center;\n    text-decoration: none;\n    text-shadow: 0 0 5px #444;\n    pointer-events: none; }\n", ""]);

// exports


/***/ }),

/***/ "./src/main/webapp/app/account/account.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var _1 = __webpack_require__("./src/main/webapp/app/account/index.ts");
var NeojhipsterAccountModule = (function () {
    function NeojhipsterAccountModule() {
    }
    return NeojhipsterAccountModule;
}());
NeojhipsterAccountModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.NeojhipsterSharedModule,
            router_1.RouterModule.forRoot(_1.accountState, { useHash: true })
        ],
        declarations: [
            _1.ActivateComponent,
            _1.RegisterComponent,
            _1.PasswordComponent,
            _1.PasswordStrengthBarComponent,
            _1.PasswordResetInitComponent,
            _1.PasswordResetFinishComponent,
            _1.SettingsComponent
        ],
        providers: [
            _1.Register,
            _1.ActivateService,
            _1.PasswordService,
            _1.PasswordResetInitService,
            _1.PasswordResetFinishService
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], NeojhipsterAccountModule);
exports.NeojhipsterAccountModule = NeojhipsterAccountModule;


/***/ }),

/***/ "./src/main/webapp/app/account/account.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__("./src/main/webapp/app/account/index.ts");
var ACCOUNT_ROUTES = [
    _1.activateRoute,
    _1.passwordRoute,
    _1.passwordResetFinishRoute,
    _1.passwordResetInitRoute,
    _1.registerRoute,
    _1.settingsRoute
];
exports.accountState = [{
        path: '',
        children: ACCOUNT_ROUTES
    }];


/***/ }),

/***/ "./src/main/webapp/app/account/activate/activate.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-8 offset-md-2\"> <h1 jhiTranslate=\"activate.title\">Activation</h1> <div class=\"alert alert-success\" *ngIf=\"success\"> <span jhiTranslate=\"activate.messages.success\"><strong>Your user account has been activated.</strong> Please </span> <a class=\"alert-link\" (click)=\"login()\" jhiTranslate=\"global.messages.info.authenticated.link\">sign in</a>. </div> <div class=\"alert alert-danger\" *ngIf=\"error\" jhiTranslate=\"activate.messages.error\"> <strong>Your user could not be activated.</strong> Please use the registration form to sign up. </div> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/activate/activate.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var activate_service_1 = __webpack_require__("./src/main/webapp/app/account/activate/activate.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var ActivateComponent = (function () {
    function ActivateComponent(activateService, loginModalService, route) {
        this.activateService = activateService;
        this.loginModalService = loginModalService;
        this.route = route;
    }
    ActivateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.activateService.get(params['key']).subscribe(function () {
                _this.error = null;
                _this.success = 'OK';
            }, function () {
                _this.success = null;
                _this.error = 'ERROR';
            });
        });
    };
    ActivateComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    return ActivateComponent;
}());
ActivateComponent = __decorate([
    core_1.Component({
        selector: 'jhi-activate',
        template: __webpack_require__("./src/main/webapp/app/account/activate/activate.component.html")
    }),
    __metadata("design:paramtypes", [activate_service_1.ActivateService,
        shared_1.LoginModalService,
        router_1.ActivatedRoute])
], ActivateComponent);
exports.ActivateComponent = ActivateComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/activate/activate.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var activate_component_1 = __webpack_require__("./src/main/webapp/app/account/activate/activate.component.ts");
exports.activateRoute = {
    path: 'activate',
    component: activate_component_1.ActivateComponent,
    data: {
        authorities: [],
        pageTitle: 'activate.title'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/activate/activate.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var ActivateService = (function () {
    function ActivateService(http) {
        this.http = http;
    }
    ActivateService.prototype.get = function (key) {
        var params = new http_1.URLSearchParams();
        params.set('key', key);
        return this.http.get('api/activate', {
            search: params
        }).map(function (res) { return res; });
    };
    return ActivateService;
}());
ActivateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ActivateService);
exports.ActivateService = ActivateService;


/***/ }),

/***/ "./src/main/webapp/app/account/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/account/activate/activate.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/activate/activate.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/activate/activate.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password/password.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password/password-strength-bar.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password/password.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password/password.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/register/register.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/register/register.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/register/register.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/settings/settings.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/settings/settings.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/account.route.ts"));


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-4 col-md-offset-4\"> <h1 jhiTranslate=\"reset.finish.title\">Reset password</h1> <div class=\"alert alert-danger\" jhiTranslate=\"reset.finish.messages.keymissing\" *ngIf=\"keyMissing\"> <strong>The password reset key is missing.</strong> </div> <div class=\"alert alert-warning\" *ngIf=\"!success && !keyMissing\"> <p jhiTranslate=\"reset.finish.messages.info\">Choose a new password</p> </div> <div class=\"alert alert-danger\" *ngIf=\"error\"> <p jhiTranslate=\"reset.finish.messages.error\">Your password couldn't be reset. Remember a password request is only valid for 24 hours.</p> </div> <p class=\"alert alert-success\" *ngIf=\"success\"> <span jhiTranslate=\"reset.finish.messages.success\"><strong>Your password has been reset.</strong> Please </span> <a class=\"alert-link\" (click)=\"login()\" jhiTranslate=\"global.messages.info.authenticated.link\">sign in</a>. </p> <div class=\"alert alert-danger\" *ngIf=\"doNotMatch\" jhiTranslate=\"global.messages.error.dontmatch\"> The password and its confirmation do not match! </div> <div *ngIf=\"!keyMissing\"> <form *ngIf=\"!success\" name=\"form\" role=\"form\" (ngSubmit)=\"finishReset()\" #passwordForm=\"ngForm\"> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"password\" jhiTranslate=\"global.form.newpassword\">New password</label> <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" #passwordInput=\"ngModel\" placeholder=\"{{'global.form.newpassword.placeholder' | translate}}\" [(ngModel)]=\"resetAccount.password\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"passwordInput.dirty && passwordInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.required\" jhiTranslate=\"global.messages.validate.newpassword.required\"> Your password is required. </small> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.minlength\" jhiTranslate=\"global.messages.validate.newpassword.minlength\"> Your password is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.maxlength\" jhiTranslate=\"global.messages.validate.newpassword.maxlength\"> Your password cannot be longer than 50 characters. </small> </div> <jhi-password-strength-bar [passwordToCheck]=\"resetAccount.password\"></jhi-password-strength-bar> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"confirmPassword\" jhiTranslate=\"global.form.confirmpassword\">New password confirmation</label> <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" name=\"confirmPassword\" #confirmPasswordInput=\"ngModel\" placeholder=\"{{'global.form.confirmpassword.placeholder' | translate}}\" [(ngModel)]=\"confirmPassword\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"confirmPasswordInput.dirty && confirmPasswordInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.required\" jhiTranslate=\"global.messages.validate.confirmpassword.required\"> Your password confirmation is required. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.minlength\" jhiTranslate=\"global.messages.validate.confirmpassword.minlength\"> Your password confirmation is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.maxlength\" jhiTranslate=\"global.messages.validate.confirmpassword.maxlength\"> Your password confirmation cannot be longer than 50 characters. </small> </div> </div> <button type=\"submit\" [disabled]=\"passwordForm.form.invalid\" class=\"btn btn-primary\" jhiTranslate=\"reset.finish.form.button\">Reset Password</button> </form> </div> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var password_reset_finish_service_1 = __webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var PasswordResetFinishComponent = (function () {
    function PasswordResetFinishComponent(passwordResetFinishService, loginModalService, route, elementRef, renderer) {
        this.passwordResetFinishService = passwordResetFinishService;
        this.loginModalService = loginModalService;
        this.route = route;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    PasswordResetFinishComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.key = params['key'];
        });
        this.resetAccount = {};
        this.keyMissing = !this.key;
    };
    PasswordResetFinishComponent.prototype.ngAfterViewInit = function () {
        if (this.elementRef.nativeElement.querySelector('#password') != null) {
            this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#password'), 'focus', []);
        }
    };
    PasswordResetFinishComponent.prototype.finishReset = function () {
        var _this = this;
        this.doNotMatch = null;
        this.error = null;
        if (this.resetAccount.password !== this.confirmPassword) {
            this.doNotMatch = 'ERROR';
        }
        else {
            this.passwordResetFinishService.save({ key: this.key, newPassword: this.resetAccount.password }).subscribe(function () {
                _this.success = 'OK';
            }, function () {
                _this.success = null;
                _this.error = 'ERROR';
            });
        }
    };
    PasswordResetFinishComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    return PasswordResetFinishComponent;
}());
PasswordResetFinishComponent = __decorate([
    core_1.Component({
        selector: 'jhi-password-reset-finish',
        template: __webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.html")
    }),
    __metadata("design:paramtypes", [password_reset_finish_service_1.PasswordResetFinishService,
        shared_1.LoginModalService,
        router_1.ActivatedRoute,
        core_1.ElementRef, core_1.Renderer])
], PasswordResetFinishComponent);
exports.PasswordResetFinishComponent = PasswordResetFinishComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/finish/password-reset-finish.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var password_reset_finish_component_1 = __webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.ts");
exports.passwordResetFinishRoute = {
    path: 'reset/finish',
    component: password_reset_finish_component_1.PasswordResetFinishComponent,
    data: {
        authorities: [],
        pageTitle: 'global.menu.account.password'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/finish/password-reset-finish.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var PasswordResetFinishService = (function () {
    function PasswordResetFinishService(http) {
        this.http = http;
    }
    PasswordResetFinishService.prototype.save = function (keyAndPassword) {
        return this.http.post('api/account/reset_password/finish', keyAndPassword);
    };
    return PasswordResetFinishService;
}());
PasswordResetFinishService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PasswordResetFinishService);
exports.PasswordResetFinishService = PasswordResetFinishService;


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/init/password-reset-init.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-8 offset-md-2\"> <h1 jhiTranslate=\"reset.request.title\">Reset your password</h1> <div class=\"alert alert-danger\" jhiTranslate=\"reset.request.messages.notfound\" *ngIf=\"errorEmailNotExists\"> <strong>Email address isn't registered!</strong> Please check and try again. </div> <div class=\"alert alert-warning\" *ngIf=\"!success\"> <p jhiTranslate=\"reset.request.messages.info\">Enter the email address you used to register.</p> </div> <div class=\"alert alert-success\" *ngIf=\"success === 'OK'\"> <p jhiTranslate=\"reset.request.messages.success\">Check your emails for details on how to reset your password.</p> </div> <form *ngIf=\"!success\" name=\"form\" role=\"form\" (ngSubmit)=\"requestReset()\" #resetRequestForm=\"ngForm\"> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"email\" jhiTranslate=\"global.form.email\">Email</label> <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"{{'global.form.email.placeholder' | translate}}\" [(ngModel)]=\"resetAccount.email\" minlength=\"5\" maxlength=\"100\" #emailInput=\"ngModel\" required> <div *ngIf=\"emailInput.dirty && emailInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.required\" jhiTranslate=\"global.messages.validate.email.required\"> Your email is required. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.email\" jhiTranslate=\"global.messages.validate.email.invalid\"> Your email is invalid. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.minlength\" jhiTranslate=\"global.messages.validate.email.minlength\"> Your email is required to be at least 5 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.maxlength\" jhiTranslate=\"global.messages.validate.email.maxlength\"> Your email cannot be longer than 100 characters. </small> </div> </div> <button type=\"submit\" [disabled]=\"resetRequestForm.form.invalid\" class=\"btn btn-primary\" jhiTranslate=\"reset.request.form.button\">Reset</button> </form> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/init/password-reset-init.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var password_reset_init_service_1 = __webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.service.ts");
var PasswordResetInitComponent = (function () {
    function PasswordResetInitComponent(passwordResetInitService, elementRef, renderer) {
        this.passwordResetInitService = passwordResetInitService;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    PasswordResetInitComponent.prototype.ngOnInit = function () {
        this.resetAccount = {};
    };
    PasswordResetInitComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#email'), 'focus', []);
    };
    PasswordResetInitComponent.prototype.requestReset = function () {
        var _this = this;
        this.error = null;
        this.errorEmailNotExists = null;
        this.passwordResetInitService.save(this.resetAccount.email).subscribe(function () {
            _this.success = 'OK';
        }, function (response) {
            _this.success = null;
            if (response.status === 400 && response.data === 'email address not registered') {
                _this.errorEmailNotExists = 'ERROR';
            }
            else {
                _this.error = 'ERROR';
            }
        });
    };
    return PasswordResetInitComponent;
}());
PasswordResetInitComponent = __decorate([
    core_1.Component({
        selector: 'jhi-password-reset-init',
        template: __webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.component.html")
    }),
    __metadata("design:paramtypes", [password_reset_init_service_1.PasswordResetInitService,
        core_1.ElementRef,
        core_1.Renderer])
], PasswordResetInitComponent);
exports.PasswordResetInitComponent = PasswordResetInitComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/init/password-reset-init.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var password_reset_init_component_1 = __webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.component.ts");
exports.passwordResetInitRoute = {
    path: 'reset/request',
    component: password_reset_init_component_1.PasswordResetInitComponent,
    data: {
        authorities: [],
        pageTitle: 'global.menu.account.password'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/init/password-reset-init.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var PasswordResetInitService = (function () {
    function PasswordResetInitService(http) {
        this.http = http;
    }
    PasswordResetInitService.prototype.save = function (mail) {
        return this.http.post('api/account/reset_password/init', mail);
    };
    return PasswordResetInitService;
}());
PasswordResetInitService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PasswordResetInitService);
exports.PasswordResetInitService = PasswordResetInitService;


/***/ }),

/***/ "./src/main/webapp/app/account/password/password-strength-bar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var PasswordStrengthBarComponent = (function () {
    function PasswordStrengthBarComponent(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.colors = ['#F00', '#F90', '#FF0', '#9F0', '#0F0'];
    }
    PasswordStrengthBarComponent.prototype.measureStrength = function (p) {
        var force = 0;
        var regex = /[$-/:-?{-~!"^_`\[\]]/g; // "
        var lowerLetters = /[a-z]+/.test(p);
        var upperLetters = /[A-Z]+/.test(p);
        var numbers = /[0-9]+/.test(p);
        var symbols = regex.test(p);
        var flags = [lowerLetters, upperLetters, numbers, symbols];
        var passedMatches = flags.filter(function (isMatchedFlag) {
            return isMatchedFlag === true;
        }).length;
        force += 2 * p.length + ((p.length >= 10) ? 1 : 0);
        force += passedMatches * 10;
        // penality (short password)
        force = (p.length <= 6) ? Math.min(force, 10) : force;
        // penality (poor variety of characters)
        force = (passedMatches === 1) ? Math.min(force, 10) : force;
        force = (passedMatches === 2) ? Math.min(force, 20) : force;
        force = (passedMatches === 3) ? Math.min(force, 40) : force;
        return force;
    };
    ;
    PasswordStrengthBarComponent.prototype.getColor = function (s) {
        var idx = 0;
        if (s <= 10) {
            idx = 0;
        }
        else if (s <= 20) {
            idx = 1;
        }
        else if (s <= 30) {
            idx = 2;
        }
        else if (s <= 40) {
            idx = 3;
        }
        else {
            idx = 4;
        }
        return { idx: idx + 1, col: this.colors[idx] };
    };
    ;
    Object.defineProperty(PasswordStrengthBarComponent.prototype, "passwordToCheck", {
        set: function (password) {
            if (password) {
                var c = this.getColor(this.measureStrength(password));
                var element = this.elementRef.nativeElement;
                if (element.className) {
                    this.renderer.setElementClass(element, element.className, false);
                }
                var lis = element.getElementsByTagName('li');
                for (var i = 0; i < lis.length; i++) {
                    if (i < c.idx) {
                        this.renderer.setElementStyle(lis[i], 'backgroundColor', c.col);
                    }
                    else {
                        this.renderer.setElementStyle(lis[i], 'backgroundColor', '#DDD');
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    return PasswordStrengthBarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], PasswordStrengthBarComponent.prototype, "passwordToCheck", null);
PasswordStrengthBarComponent = __decorate([
    core_1.Component({
        selector: 'jhi-password-strength-bar',
        template: "\n        <div id=\"strength\">\n            <small jhiTranslate=\"global.messages.validate.newpassword.strength\">Password strength:</small>\n            <ul id=\"strengthBar\">\n                <li class=\"point\"></li>\n                <li class=\"point\"></li>\n                <li class=\"point\"></li>\n                <li class=\"point\"></li>\n                <li class=\"point\"></li>\n            </ul>\n        </div>",
        styles: [
            __webpack_require__("./src/main/webapp/app/account/password/password-strength-bar.scss")
        ]
    }),
    __metadata("design:paramtypes", [core_1.Renderer, core_1.ElementRef])
], PasswordStrengthBarComponent);
exports.PasswordStrengthBarComponent = PasswordStrengthBarComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/password/password-strength-bar.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/account/password/password-strength-bar.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/account/password/password.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-8 offset-md-2\"> <h2 jhiTranslate=\"password.title\" translateValues=\"{username: '{{account.login}}'}\" *ngIf=\"account\">Password for [<b>{{account.login}}</b>]</h2> <div class=\"alert alert-success\" *ngIf=\"success\" jhiTranslate=\"password.messages.success\"> <strong>Password changed!</strong> </div> <div class=\"alert alert-danger\" *ngIf=\"error\" jhiTranslate=\"password.messages.error\"> <strong>An error has occurred!</strong> The password could not be changed. </div> <div class=\"alert alert-danger\" *ngIf=\"doNotMatch\" jhiTranslate=\"global.messages.error.dontmatch\"> The password and its confirmation do not match! </div> <form name=\"form\" role=\"form\" (ngSubmit)=\"changePassword()\" #passwordForm=\"ngForm\"> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"password\" jhiTranslate=\"global.form.newpassword\">New password</label> <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" #passwordInput=\"ngModel\" placeholder=\"{{'global.form.newpassword.placeholder' | translate}}\" [(ngModel)]=\"password\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"passwordInput.dirty && passwordInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.required\" jhiTranslate=\"global.messages.validate.newpassword.required\"> Your password is required. </small> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.minlength\" jhiTranslate=\"global.messages.validate.newpassword.minlength\"> Your password is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.maxlength\" jhiTranslate=\"global.messages.validate.newpassword.maxlength\"> Your password cannot be longer than 50 characters. </small> </div> <jhi-password-strength-bar [passwordToCheck]=\"password\"></jhi-password-strength-bar> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"confirmPassword\" jhiTranslate=\"global.form.confirmpassword\">New password confirmation</label> <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" name=\"confirmPassword\" #confirmPasswordInput=\"ngModel\" placeholder=\"{{'global.form.confirmpassword.placeholder' | translate}}\" [(ngModel)]=\"confirmPassword\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"confirmPasswordInput.dirty && confirmPasswordInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.required\" jhiTranslate=\"global.messages.validate.confirmpassword.required\"> Your confirmation password is required. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.minlength\" jhiTranslate=\"global.messages.validate.confirmpassword.minlength\"> Your confirmation password is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.maxlength\" jhiTranslate=\"global.messages.validate.confirmpassword.maxlength\"> Your confirmation password cannot be longer than 50 characters. </small> </div> </div> <button type=\"submit\" [disabled]=\"passwordForm.form.invalid\" class=\"btn btn-primary\" jhiTranslate=\"password.form.button\">Save</button> </form> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/password/password.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var password_service_1 = __webpack_require__("./src/main/webapp/app/account/password/password.service.ts");
var PasswordComponent = (function () {
    function PasswordComponent(passwordService, principal) {
        this.passwordService = passwordService;
        this.principal = principal;
    }
    PasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.account = account;
        });
    };
    PasswordComponent.prototype.changePassword = function () {
        var _this = this;
        if (this.password !== this.confirmPassword) {
            this.error = null;
            this.success = null;
            this.doNotMatch = 'ERROR';
        }
        else {
            this.doNotMatch = null;
            this.passwordService.save(this.password).subscribe(function () {
                _this.error = null;
                _this.success = 'OK';
            }, function () {
                _this.success = null;
                _this.error = 'ERROR';
            });
        }
    };
    return PasswordComponent;
}());
PasswordComponent = __decorate([
    core_1.Component({
        selector: 'jhi-password',
        template: __webpack_require__("./src/main/webapp/app/account/password/password.component.html")
    }),
    __metadata("design:paramtypes", [password_service_1.PasswordService,
        shared_1.Principal])
], PasswordComponent);
exports.PasswordComponent = PasswordComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/password/password.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var password_component_1 = __webpack_require__("./src/main/webapp/app/account/password/password.component.ts");
exports.passwordRoute = {
    path: 'password',
    component: password_component_1.PasswordComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'global.menu.account.password'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/password/password.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var PasswordService = (function () {
    function PasswordService(http) {
        this.http = http;
    }
    PasswordService.prototype.save = function (newPassword) {
        return this.http.post('api/account/change_password', newPassword);
    };
    return PasswordService;
}());
PasswordService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PasswordService);
exports.PasswordService = PasswordService;


/***/ }),

/***/ "./src/main/webapp/app/account/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-8 offset-md-2\"> <h1 jhiTranslate=\"register.title\">Registration</h1> <div class=\"alert alert-success\" *ngIf=\"success\" jhiTranslate=\"register.messages.success\"> <strong>Registration saved!</strong> Please check your email for confirmation. </div> <div class=\"alert alert-danger\" *ngIf=\"error\" jhiTranslate=\"register.messages.error.fail\"> <strong>Registration failed!</strong> Please try again later. </div> <div class=\"alert alert-danger\" *ngIf=\"errorUserExists\" jhiTranslate=\"register.messages.error.userexists\"> <strong>Login name already registered!</strong> Please choose another one. </div> <div class=\"alert alert-danger\" *ngIf=\"errorEmailExists\" jhiTranslate=\"register.messages.error.emailexists\"> <strong>Email is already in use!</strong> Please choose another one. </div> <div class=\"alert alert-danger\" *ngIf=\"doNotMatch\" jhiTranslate=\"global.messages.error.dontmatch\"> The password and its confirmation do not match! </div> </div> <div class=\"col-md-8 offset-md-2\"> <form name=\"form\" role=\"form\" (ngSubmit)=\"register()\" #registerForm=\"ngForm\" *ngIf=\"!success\"> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"login\" jhiTranslate=\"global.form.username\">Username</label> <input type=\"text\" class=\"form-control\" [(ngModel)]=\"registerAccount.login\" id=\"login\" name=\"login\" #login=\"ngModel\" placeholder=\"{{'global.form.username.placeholder' | translate}}\" required minlength=\"1\" maxlength=\"50\" pattern=\"^[_'.@A-Za-z0-9-]*$\"> <div *ngIf=\"login.dirty && login.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"login.errors.required\" jhiTranslate=\"register.messages.validate.login.required\"> Your username is required. </small> <small class=\"form-text text-danger\" *ngIf=\"login.errors.minlength\" jhiTranslate=\"register.messages.validate.login.minlength\"> Your username is required to be at least 1 character. </small> <small class=\"form-text text-danger\" *ngIf=\"login.errors.maxlength\" jhiTranslate=\"register.messages.validate.login.maxlength\"> Your username cannot be longer than 50 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"login.errors.pattern\" jhiTranslate=\"register.messages.validate.login.pattern\"> Your username can only contain lower-case letters and digits. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"email\" jhiTranslate=\"global.form.email\">Email</label> <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" #email=\"ngModel\" placeholder=\"{{'global.form.email.placeholder' | translate}}\" [(ngModel)]=\"registerAccount.email\" minlength=\"5\" maxlength=\"100\" required> <div *ngIf=\"email.dirty && email.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"email.errors.required\" jhiTranslate=\"global.messages.validate.email.required\"> Your email is required. </small> <small class=\"form-text text-danger\" *ngIf=\"email.errors.invalid\" jhiTranslate=\"global.messages.validate.email.invalid\"> Your email is invalid. </small> <small class=\"form-text text-danger\" *ngIf=\"email.errors.minlength\" jhiTranslate=\"global.messages.validate.email.minlength\"> Your email is required to be at least 5 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"email.errors.maxlength\" jhiTranslate=\"global.messages.validate.email.maxlength\"> Your email cannot be longer than 100 characters. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"password\" jhiTranslate=\"global.form.newpassword\">New password</label> <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" #password=\"ngModel\" placeholder=\"{{'global.form.newpassword.placeholder' | translate}}\" [(ngModel)]=\"registerAccount.password\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"password.dirty && password.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"password.errors.required\" jhiTranslate=\"global.messages.validate.newpassword.required\"> Your password is required. </small> <small class=\"form-text text-danger\" *ngIf=\"password.errors.minlength\" jhiTranslate=\"global.messages.validate.newpassword.minlength\"> Your password is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"password.errors.maxlength\" jhiTranslate=\"global.messages.validate.newpassword.maxlength\"> Your password cannot be longer than 50 characters. </small> </div> <jhi-password-strength-bar [passwordToCheck]=\"registerAccount.password\"></jhi-password-strength-bar> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"confirmPassword\" jhiTranslate=\"global.form.confirmpassword\">New password confirmation</label> <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" name=\"confirmPassword\" #confirmPasswordInput=\"ngModel\" placeholder=\"{{'global.form.confirmpassword.placeholder' | translate}}\" [(ngModel)]=\"confirmPassword\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"confirmPasswordInput.dirty && confirmPasswordInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.required\" jhiTranslate=\"global.messages.validate.confirmpassword.required\"> Your confirmation password is required. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.minlength\" jhiTranslate=\"global.messages.validate.confirmpassword.minlength\"> Your confirmation password is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.maxlength\" jhiTranslate=\"global.messages.validate.confirmpassword.maxlength\"> Your confirmation password cannot be longer than 50 characters. </small> </div> </div> <button type=\"submit\" [disabled]=\"registerForm.form.invalid\" class=\"btn btn-primary\" jhiTranslate=\"register.form.button\">Register</button> </form> <p></p> <div class=\"alert alert-warning\"> <span jhiTranslate=\"global.messages.info.authenticated.prefix\">If you want to </span> <a class=\"alert-link\" (click)=\"openLogin()\" jhiTranslate=\"global.messages.info.authenticated.link\">sign in</a><span jhiTranslate=\"global.messages.info.authenticated.suffix\">, you can try the default accounts:<br/>- Administrator (login=\"admin\" and password=\"admin\") <br/>- User (login=\"user\" and password=\"user\").</span> </div> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(2);
var register_service_1 = __webpack_require__("./src/main/webapp/app/account/register/register.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var RegisterComponent = (function () {
    function RegisterComponent(languageService, loginModalService, registerService, elementRef, renderer) {
        this.languageService = languageService;
        this.loginModalService = loginModalService;
        this.registerService = registerService;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.success = false;
        this.registerAccount = {};
    };
    RegisterComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#login'), 'focus', []);
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.registerAccount.password !== this.confirmPassword) {
            this.doNotMatch = 'ERROR';
        }
        else {
            this.doNotMatch = null;
            this.error = null;
            this.errorUserExists = null;
            this.errorEmailExists = null;
            this.languageService.getCurrent().then(function (key) {
                _this.registerAccount.langKey = key;
                _this.registerService.save(_this.registerAccount).subscribe(function () {
                    _this.success = true;
                }, function (response) { return _this.processError(response); });
            });
        }
    };
    RegisterComponent.prototype.openLogin = function () {
        this.modalRef = this.loginModalService.open();
    };
    RegisterComponent.prototype.processError = function (response) {
        this.success = null;
        if (response.status === 400 && response._body === 'login already in use') {
            this.errorUserExists = 'ERROR';
        }
        else if (response.status === 400 && response._body === 'email address already in use') {
            this.errorEmailExists = 'ERROR';
        }
        else {
            this.error = 'ERROR';
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'jhi-register',
        template: __webpack_require__("./src/main/webapp/app/account/register/register.component.html")
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        shared_1.LoginModalService,
        register_service_1.Register,
        core_1.ElementRef,
        core_1.Renderer])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/register/register.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var register_component_1 = __webpack_require__("./src/main/webapp/app/account/register/register.component.ts");
exports.registerRoute = {
    path: 'register',
    component: register_component_1.RegisterComponent,
    data: {
        authorities: [],
        pageTitle: 'register.title'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/register/register.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var Register = (function () {
    function Register(http) {
        this.http = http;
    }
    Register.prototype.save = function (account) {
        return this.http.post('api/register', account);
    };
    return Register;
}());
Register = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Register);
exports.Register = Register;


/***/ }),

/***/ "./src/main/webapp/app/account/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-8 offset-md-2\"> <h2 jhiTranslate=\"settings.title\" translateValues=\"{username: '{{settingsAccount.login}}'}\" *ngIf=\"settingsAccount\">User settings for [<b>{{settingsAccount.login}}</b>]</h2> <div class=\"alert alert-success\" *ngIf=\"success\" jhiTranslate=\"settings.messages.success\"> <strong>Settings saved!</strong> </div> <jhi-alert-error></jhi-alert-error> <form name=\"form\" role=\"form\" (ngSubmit)=\"save()\" #settingsForm=\"ngForm\" *ngIf=\"settingsAccount\" novalidate> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"firstName\" jhiTranslate=\"settings.form.firstname\">First Name</label> <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" placeholder=\"{{'settings.form.firstname.placeholder' | translate}}\" [(ngModel)]=\"settingsAccount.firstName\" minlength=\"1\" maxlength=\"50\" #firstNameInput=\"ngModel\" required> <div *ngIf=\"firstNameInput.dirty && firstNameInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"firstNameInput.errors.required\" jhiTranslate=\"settings.messages.validate.firstname.required\"> Your first name is required. </small> <small class=\"form-text text-danger\" *ngIf=\"firstNameInput.errors.minlength\" jhiTranslate=\"settings.messages.validate.firstname.minlength\"> Your first name is required to be at least 1 character. </small> <small class=\"form-text text-danger\" *ngIf=\"firstNameInput.errors.maxlength\" jhiTranslate=\"settings.messages.validate.firstname.maxlength\"> Your first name cannot be longer than 50 characters. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"lastName\" jhiTranslate=\"settings.form.lastname\">Last Name</label> <input type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" placeholder=\"{{'settings.form.lastname.placeholder' | translate}}\" [(ngModel)]=\"settingsAccount.lastName\" minlength=\"1\" maxlength=\"50\" #lastNameInput=\"ngModel\" required> <div *ngIf=\"lastNameInput.dirty && lastNameInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"lastNameInput.errors.required\" jhiTranslate=\"settings.messages.validate.lastname.required\"> Your last name is required. </small> <small class=\"form-text text-danger\" *ngIf=\"lastNameInput.errors.minlength\" jhiTranslate=\"settings.messages.validate.lastname.minlength\"> Your last name is required to be at least 1 character. </small> <small class=\"form-text text-danger\" *ngIf=\"lastNameInput.errors.maxlength\" jhiTranslate=\"settings.messages.validate.lastname.maxlength\"> Your last name cannot be longer than 50 characters. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"email\" jhiTranslate=\"global.form.email\">Email</label> <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"{{'global.form.email.placeholder' | translate}}\" [(ngModel)]=\"settingsAccount.email\" minlength=\"5\" maxlength=\"100\" #emailInput=\"ngModel\" required> <div *ngIf=\"emailInput.dirty && emailInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.required\" jhiTranslate=\"global.messages.validate.email.required\"> Your email is required. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.email\" jhiTranslate=\"global.messages.validate.email.invalid\"> Your email is invalid. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.minlength\" jhiTranslate=\"global.messages.validate.email.minlength\"> Your email is required to be at least 5 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.maxlength\" jhiTranslate=\"global.messages.validate.email.maxlength\"> Your email cannot be longer than 100 characters. </small> </div> </div> <div class=\"form-group\" *ngIf=\"languages && languages.length > 0\"> <label for=\"langKey\" jhiTranslate=\"settings.form.language\">Language</label> <select class=\"form-control\" id=\"langKey\" name=\"langKey\" [(ngModel)]=\"settingsAccount.langKey\"> <option *ngFor=\"let language of languages\" [value]=\"language\">{{language | findLanguageFromKey}}</option> </select> </div> <button type=\"submit\" [disabled]=\"settingsForm.form.invalid\" class=\"btn btn-primary\" jhiTranslate=\"settings.form.button\">Save</button> </form> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/settings/settings.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(2);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var SettingsComponent = (function () {
    function SettingsComponent(account, principal, languageService, languageHelper) {
        this.account = account;
        this.principal = principal;
        this.languageService = languageService;
        this.languageHelper = languageHelper;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.settingsAccount = _this.copyAccount(account);
        });
        this.languageHelper.getAll().then(function (languages) {
            _this.languages = languages;
        });
    };
    SettingsComponent.prototype.save = function () {
        var _this = this;
        this.account.save(this.settingsAccount).subscribe(function () {
            _this.error = null;
            _this.success = 'OK';
            _this.principal.identity(true).then(function (account) {
                _this.settingsAccount = _this.copyAccount(account);
            });
            _this.languageService.getCurrent().then(function (current) {
                if (_this.settingsAccount.langKey !== current) {
                    _this.languageService.changeLanguage(_this.settingsAccount.langKey);
                }
            });
        }, function () {
            _this.success = null;
            _this.error = 'ERROR';
        });
    };
    SettingsComponent.prototype.copyAccount = function (account) {
        return {
            activated: account.activated,
            email: account.email,
            firstName: account.firstName,
            langKey: account.langKey,
            lastName: account.lastName,
            login: account.login,
            imageUrl: account.imageUrl
        };
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-settings',
        template: __webpack_require__("./src/main/webapp/app/account/settings/settings.component.html")
    }),
    __metadata("design:paramtypes", [shared_1.AccountService,
        shared_1.Principal,
        ng_jhipster_1.JhiLanguageService,
        shared_1.JhiLanguageHelper])
], SettingsComponent);
exports.SettingsComponent = SettingsComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/settings/settings.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var settings_component_1 = __webpack_require__("./src/main/webapp/app/account/settings/settings.component.ts");
exports.settingsRoute = {
    path: 'settings',
    component: settings_component_1.SettingsComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'global.menu.account.settings'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/admin/admin.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */
var _1 = __webpack_require__("./src/main/webapp/app/admin/index.ts");
var NeojhipsterAdminModule = (function () {
    function NeojhipsterAdminModule() {
    }
    return NeojhipsterAdminModule;
}());
NeojhipsterAdminModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.NeojhipsterSharedModule,
            router_1.RouterModule.forRoot(_1.adminState, { useHash: true }),
        ],
        declarations: [
            _1.AuditsComponent,
            _1.UserMgmtComponent,
            _1.UserDialogComponent,
            _1.UserDeleteDialogComponent,
            _1.UserMgmtDetailComponent,
            _1.UserMgmtDialogComponent,
            _1.UserMgmtDeleteDialogComponent,
            _1.LogsComponent,
            _1.JhiConfigurationComponent,
            _1.JhiHealthCheckComponent,
            _1.JhiHealthModalComponent,
            _1.JhiDocsComponent,
            _1.JhiMetricsMonitoringComponent,
            _1.JhiMetricsMonitoringModalComponent
        ],
        entryComponents: [
            _1.UserMgmtDialogComponent,
            _1.UserMgmtDeleteDialogComponent,
            _1.JhiHealthModalComponent,
            _1.JhiMetricsMonitoringModalComponent,
        ],
        providers: [
            _1.AuditsService,
            _1.JhiConfigurationService,
            _1.JhiHealthService,
            _1.JhiMetricsService,
            _1.LogsService,
            _1.UserResolvePagingParams,
            _1.UserResolve,
            _1.UserModalService
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], NeojhipsterAdminModule);
exports.NeojhipsterAdminModule = NeojhipsterAdminModule;


/***/ }),

/***/ "./src/main/webapp/app/admin/admin.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__("./src/main/webapp/app/admin/index.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var ADMIN_ROUTES = [
    _1.auditsRoute,
    _1.configurationRoute,
    _1.docsRoute,
    _1.healthRoute,
    _1.logsRoute
].concat(_1.userMgmtRoute, [
    _1.metricsRoute
]);
exports.adminState = [{
        path: '',
        data: {
            authorities: ['ROLE_ADMIN']
        },
        canActivate: [shared_1.UserRouteAccessService],
        children: ADMIN_ROUTES
    }].concat(_1.userDialogRoute);


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audit-data.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AuditData = (function () {
    function AuditData(remoteAddress, sessionId) {
        this.remoteAddress = remoteAddress;
        this.sessionId = sessionId;
    }
    return AuditData;
}());
exports.AuditData = AuditData;


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audit.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Audit = (function () {
    function Audit(data, principal, timestamp, type) {
        this.data = data;
        this.principal = principal;
        this.timestamp = timestamp;
        this.type = type;
    }
    return Audit;
}());
exports.Audit = Audit;


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audits.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"audits\"> <h2 jhiTranslate=\"audits.title\">Audits</h2> <div class=\"row\"> <div class=\"col-md-5\"> <h4 jhiTranslate=\"audits.filter.title\">Filter by date</h4> <p class=\"d-flex\"> <span jhiTranslate=\"audits.filter.from\" class=\"input-group-addon\">from</span> <input type=\"date\" class=\"form-control\" name=\"start\" [(ngModel)]=\"fromDate\" (ngModelChange)=\"onChangeDate($event)\" required/> <span jhiTranslate=\"audits.filter.to\" class=\"input-group-addon\">to</span> <input type=\"date\" class=\"form-control\" name=\"end\" [(ngModel)]=\"toDate\" (ngModelChange)=\"onChangeDate($event)\" required/> </p> </div> </div> <div class=\"table-responsive\"> <table class=\"table table-condensed table-striped table-bordered\"> <thead> <tr> <th (click)=\"orderProp = 'timestamp'; reverse=!reverse\"><span jhiTranslate=\"audits.table.header.date\">Date</span></th> <th (click)=\"orderProp = 'principal'; reverse=!reverse\"><span jhiTranslate=\"audits.table.header.principal\">User</span></th> <th (click)=\"orderProp = 'type'; reverse=!reverse\"><span jhiTranslate=\"audits.table.header.status\">State</span></th> <th (click)=\"orderProp = 'data.message'; reverse=!reverse\"><span jhiTranslate=\"audits.table.header.data\">Extra data</span></th> </tr> </thead> <tr *ngFor=\"let audit of getAudits()\"> <td><span>{{audit.timestamp| date:'medium'}}</span></td> <td><small>{{audit.principal}}</small></td> <td>{{audit.type}}</td> <td> <span *ngIf=\"audit.data\" ng-show=\"audit.data.message\">{{audit.data.message}}</span> <span *ngIf=\"audit.data\" ng-show=\"audit.data.remoteAddress\"><span jhiTranslate=\"audits.table.data.remoteAddress\">Remote Address</span> {{audit.data.remoteAddress}}</span> </td> </tr> </table> </div> <div *ngIf=\"audits\"> <div class=\"row justify-content-center\"> <jhi-item-count [page]=\"page\" [total]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\"></jhi-item-count> </div> <div class=\"row justify-content-center\"> <ngb-pagination [collectionSize]=\"totalItems\" [(page)]=\"page\" (pageChange)=\"loadPage(page)\"></ngb-pagination> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audits.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(11);
var ng_jhipster_1 = __webpack_require__(2);
var audits_service_1 = __webpack_require__("./src/main/webapp/app/admin/audits/audits.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var uib_pagination_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/uib-pagination.config.ts");
var AuditsComponent = (function () {
    function AuditsComponent(auditsService, parseLinks, paginationConfig, datePipe) {
        this.auditsService = auditsService;
        this.parseLinks = parseLinks;
        this.paginationConfig = paginationConfig;
        this.datePipe = datePipe;
        this.itemsPerPage = shared_1.ITEMS_PER_PAGE;
        this.page = 1;
        this.reverse = false;
        this.orderProp = 'timestamp';
    }
    AuditsComponent.prototype.getAudits = function () {
        return this.sortAudits(this.audits);
    };
    AuditsComponent.prototype.loadPage = function (page) {
        this.page = page;
        this.onChangeDate();
    };
    AuditsComponent.prototype.ngOnInit = function () {
        this.today();
        this.previousMonth();
        this.onChangeDate();
    };
    AuditsComponent.prototype.onChangeDate = function () {
        var _this = this;
        this.auditsService.query({ page: this.page - 1, size: this.itemsPerPage,
            fromDate: this.fromDate, toDate: this.toDate }).subscribe(function (res) {
            _this.audits = res.json();
            _this.links = _this.parseLinks.parse(res.headers.get('link'));
            _this.totalItems = +res.headers.get('X-Total-Count');
        });
    };
    AuditsComponent.prototype.previousMonth = function () {
        var dateFormat = 'yyyy-MM-dd';
        var fromDate = new Date();
        if (fromDate.getMonth() === 0) {
            fromDate = new Date(fromDate.getFullYear() - 1, 11, fromDate.getDate());
        }
        else {
            fromDate = new Date(fromDate.getFullYear(), fromDate.getMonth() - 1, fromDate.getDate());
        }
        this.fromDate = this.datePipe.transform(fromDate, dateFormat);
    };
    AuditsComponent.prototype.today = function () {
        var dateFormat = 'yyyy-MM-dd';
        // Today + 1 day - needed if the current day must be included
        var today = new Date();
        today.setDate(today.getDate() + 1);
        var date = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        this.toDate = this.datePipe.transform(date, dateFormat);
    };
    AuditsComponent.prototype.sortAudits = function (audits) {
        var _this = this;
        audits = audits.slice(0).sort(function (a, b) {
            if (a[_this.orderProp] < b[_this.orderProp]) {
                return -1;
            }
            else if (true) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return this.reverse ? audits.reverse() : audits;
    };
    return AuditsComponent;
}());
AuditsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-audit',
        template: __webpack_require__("./src/main/webapp/app/admin/audits/audits.component.html")
    }),
    __metadata("design:paramtypes", [audits_service_1.AuditsService,
        ng_jhipster_1.JhiParseLinks,
        uib_pagination_config_1.PaginationConfig,
        common_1.DatePipe])
], AuditsComponent);
exports.AuditsComponent = AuditsComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audits.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var audits_component_1 = __webpack_require__("./src/main/webapp/app/admin/audits/audits.component.ts");
exports.auditsRoute = {
    path: 'audits',
    component: audits_component_1.AuditsComponent,
    data: {
        pageTitle: 'audits.title'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audits.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var AuditsService = (function () {
    function AuditsService(http) {
        this.http = http;
    }
    AuditsService.prototype.query = function (req) {
        var params = new http_1.URLSearchParams();
        params.set('fromDate', req.fromDate);
        params.set('toDate', req.toDate);
        params.set('page', req.page);
        params.set('size', req.size);
        params.set('sort', req.sort);
        var options = {
            search: params
        };
        return this.http.get('management/audits', options);
    };
    return AuditsService;
}());
AuditsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuditsService);
exports.AuditsService = AuditsService;


/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"allConfiguration && configuration\"> <h2 jhiTranslate=\"configuration.title\">Configuration</h2> <span jhiTranslate=\"configuration.filter\">Filter (by prefix)</span> <input type=\"text\" [(ngModel)]=\"filter\" class=\"form-control\"> <label>Spring configuration</label> <table class=\"table table-striped table-bordered table-responsive d-table\"> <thead> <tr> <th class=\"w-40\" (click)=\"orderProp = 'prefix'; reverse=!reverse\"><span jhiTranslate=\"configuration.table.prefix\">Prefix</span></th> <th class=\"w-60\" (click)=\"orderProp = 'properties'; reverse=!reverse\"><span jhiTranslate=\"configuration.table.properties\">Properties</span></th> </tr> </thead> <tbody> <tr *ngFor=\"let entry of (configuration | pureFilter:filter:'prefix' | orderBy:orderProp:reverse)\"> <td><span>{{entry.prefix}}</span></td> <td> <div class=\"row\" *ngFor=\"let key of keys(entry.properties)\"> <div class=\"col-md-4\">{{key}}</div> <div class=\"col-md-8\"> <span class=\"float-right badge badge-default break\">{{entry.properties[key] | json}}</span> </div> </div> </td> </tr> </tbody> </table> <div *ngFor=\"let key of keys(allConfiguration)\"> <label><span>{{key}}</span></label> <table class=\"table table-sm table-striped table-bordered table-responsive d-table\"> <thead> <tr> <th class=\"w-40\">Property</th> <th class=\"w-60\">Value</th> </tr> </thead> <tbody> <tr *ngFor=\"let item of allConfiguration[key]\"> <td class=\"break\">{{item.key}}</td> <td class=\"break\"> <span class=\"float-right badge badge-default break\">{{item.val}}</span> </td> </tr> </tbody> </table> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var configuration_service_1 = __webpack_require__("./src/main/webapp/app/admin/configuration/configuration.service.ts");
var JhiConfigurationComponent = (function () {
    function JhiConfigurationComponent(configurationService) {
        this.configurationService = configurationService;
        this.allConfiguration = null;
        this.configuration = null;
        this.configKeys = [];
        this.filter = '';
        this.orderProp = 'prefix';
        this.reverse = false;
    }
    JhiConfigurationComponent.prototype.keys = function (dict) {
        return (dict === undefined) ? [] : Object.keys(dict);
    };
    JhiConfigurationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configurationService.get().subscribe(function (configuration) {
            _this.configuration = configuration;
            for (var _i = 0, configuration_1 = configuration; _i < configuration_1.length; _i++) {
                var config = configuration_1[_i];
                if (config.properties !== undefined) {
                    _this.configKeys.push(Object.keys(config.properties));
                }
            }
        });
        this.configurationService.getEnv().subscribe(function (configuration) {
            _this.allConfiguration = configuration;
        });
    };
    return JhiConfigurationComponent;
}());
JhiConfigurationComponent = __decorate([
    core_1.Component({
        selector: 'jhi-configuration',
        template: __webpack_require__("./src/main/webapp/app/admin/configuration/configuration.component.html")
    }),
    __metadata("design:paramtypes", [configuration_service_1.JhiConfigurationService])
], JhiConfigurationComponent);
exports.JhiConfigurationComponent = JhiConfigurationComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var configuration_component_1 = __webpack_require__("./src/main/webapp/app/admin/configuration/configuration.component.ts");
exports.configurationRoute = {
    path: 'jhi-configuration',
    component: configuration_component_1.JhiConfigurationComponent,
    data: {
        pageTitle: 'configuration.title'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var JhiConfigurationService = (function () {
    function JhiConfigurationService(http) {
        this.http = http;
    }
    JhiConfigurationService.prototype.get = function () {
        return this.http.get('management/configprops').map(function (res) {
            var properties = [];
            var propertiesObject = res.json();
            for (var key in propertiesObject) {
                if (propertiesObject.hasOwnProperty(key)) {
                    properties.push(propertiesObject[key]);
                }
            }
            return properties.sort(function (propertyA, propertyB) {
                return (propertyA.prefix === propertyB.prefix) ? 0 :
                    (propertyA.prefix < propertyB.prefix) ? -1 : 1;
            });
        });
    };
    JhiConfigurationService.prototype.getEnv = function () {
        return this.http.get('management/env').map(function (res) {
            var properties = {};
            var propertiesObject = res.json();
            for (var key in propertiesObject) {
                if (propertiesObject.hasOwnProperty(key)) {
                    var valsObject = propertiesObject[key];
                    var vals = [];
                    for (var valKey in valsObject) {
                        if (valsObject.hasOwnProperty(valKey)) {
                            vals.push({ key: valKey, val: valsObject[valKey] });
                        }
                    }
                    properties[key] = vals;
                }
            }
            return properties;
        });
    };
    return JhiConfigurationService;
}());
JhiConfigurationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JhiConfigurationService);
exports.JhiConfigurationService = JhiConfigurationService;


/***/ }),

/***/ "./src/main/webapp/app/admin/docs/docs.component.html":
/***/ (function(module, exports) {

module.exports = "<iframe src=\"swagger-ui/index.html\" width=\"100%\" height=\"900\" seamless target=\"_top\" title=\"Swagger UI\" class=\"border-0\"></iframe> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/docs/docs.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var JhiDocsComponent = (function () {
    function JhiDocsComponent() {
    }
    return JhiDocsComponent;
}());
JhiDocsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-docs',
        template: __webpack_require__("./src/main/webapp/app/admin/docs/docs.component.html")
    }),
    __metadata("design:paramtypes", [])
], JhiDocsComponent);
exports.JhiDocsComponent = JhiDocsComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/docs/docs.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var docs_component_1 = __webpack_require__("./src/main/webapp/app/admin/docs/docs.component.ts");
exports.docsRoute = {
    path: 'docs',
    component: docs_component_1.JhiDocsComponent,
    data: {
        pageTitle: 'global.menu.admin.apidocs'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\"> <h4 class=\"modal-title\" id=\"showHealthLabel\"> {{'health.indicator.' + baseName(currentHealth.name) | translate}} {{subSystemName(currentHealth.name)}} </h4> <button aria-label=\"Close\" data-dismiss=\"modal\" class=\"close\" type=\"button\" (click)=\"activeModal.dismiss('closed')\"><span aria-hidden=\"true\">&times;</span> </button> </div> <div class=\"modal-body pad\"> <div *ngIf=\"currentHealth.details\"> <h5 jhiTranslate=\"health.details.properties\">Properties</h5> <div class=\"table-responsive\"> <table class=\"table table-striped\"> <thead> <tr> <th class=\"text-left\" jhiTranslate=\"health.details.name\">Name</th> <th class=\"text-left\" jhiTranslate=\"health.details.value\">Value</th> </tr> </thead> <tbody> <tr *ngFor=\"let entry of currentHealth.details | keys\"> <td class=\"text-left\">{{entry.key}}</td> <td class=\"text-left\">{{readableValue(entry.value)}}</td> </tr> </tbody> </table> </div> </div> <div *ngIf=\"currentHealth.error\"> <h4 jhiTranslate=\"health.details.error\">Error</h4> <pre>{{currentHealth.error}}</pre> </div> </div> <div class=\"modal-footer\"> <button data-dismiss=\"modal\" class=\"btn btn-secondary float-left\" type=\"button\" (click)=\"activeModal.dismiss('closed')\">Done</button> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/health/health-modal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(5);
var health_service_1 = __webpack_require__("./src/main/webapp/app/admin/health/health.service.ts");
var JhiHealthModalComponent = (function () {
    function JhiHealthModalComponent(healthService, activeModal) {
        this.healthService = healthService;
        this.activeModal = activeModal;
    }
    JhiHealthModalComponent.prototype.baseName = function (name) {
        return this.healthService.getBaseName(name);
    };
    JhiHealthModalComponent.prototype.subSystemName = function (name) {
        return this.healthService.getSubSystemName(name);
    };
    JhiHealthModalComponent.prototype.readableValue = function (value) {
        if (this.currentHealth.name !== 'diskSpace') {
            return value.toString();
        }
        // Should display storage space in an human readable unit
        var val = value / 1073741824;
        if (val > 1) {
            return val.toFixed(2) + ' GB';
        }
        else {
            return (value / 1048576).toFixed(2) + ' MB';
        }
    };
    return JhiHealthModalComponent;
}());
JhiHealthModalComponent = __decorate([
    core_1.Component({
        selector: 'jhi-health-modal',
        template: __webpack_require__("./src/main/webapp/app/admin/health/health-modal.component.html")
    }),
    __metadata("design:paramtypes", [health_service_1.JhiHealthService, ng_bootstrap_1.NgbActiveModal])
], JhiHealthModalComponent);
exports.JhiHealthModalComponent = JhiHealthModalComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <h2> <span jhiTranslate=\"health.title\">Health Checks</span> <button class=\"btn btn-primary float-right\" (click)=\"refresh()\"> <span class=\"fa fa-refresh\"></span> <span jhiTranslate=\"health.refresh.button\">Refresh</span> </button> </h2> <div class=\"table-responsive\"> <table id=\"healthCheck\" class=\"table table-striped\"> <thead> <tr> <th jhiTranslate=\"health.table.service\">Service Name</th> <th class=\"text-center\" jhiTranslate=\"health.table.status\">Status</th> <th class=\"text-center\" jhiTranslate=\"health.details.details\">Details</th> </tr> </thead> <tbody> <tr *ngFor=\"let health of healthData\"> <td>{{'health.indicator.' + baseName(health.name) | translate}} {{subSystemName(health.name)}}</td> <td class=\"text-center\"> <span class=\"badge\" [ngClass]=\"getBadgeClass(health.status)\" jhiTranslate=\"{{'health.status.' + health.status}}\"> {{health.status}} </span> </td> <td class=\"text-center\"> <a class=\"hand\" (click)=\"showHealth(health)\" *ngIf=\"health.details || health.error\"> <i class=\"fa fa-eye\"></i> </a> </td> </tr> </tbody> </table> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(5);
var health_service_1 = __webpack_require__("./src/main/webapp/app/admin/health/health.service.ts");
var health_modal_component_1 = __webpack_require__("./src/main/webapp/app/admin/health/health-modal.component.ts");
var JhiHealthCheckComponent = (function () {
    function JhiHealthCheckComponent(modalService, healthService) {
        this.modalService = modalService;
        this.healthService = healthService;
    }
    JhiHealthCheckComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    JhiHealthCheckComponent.prototype.baseName = function (name) {
        return this.healthService.getBaseName(name);
    };
    JhiHealthCheckComponent.prototype.getBadgeClass = function (statusState) {
        if (statusState === 'UP') {
            return 'badge-success';
        }
        else {
            return 'badge-danger';
        }
    };
    JhiHealthCheckComponent.prototype.refresh = function () {
        var _this = this;
        this.updatingHealth = true;
        this.healthService.checkHealth().subscribe(function (health) {
            _this.healthData = _this.healthService.transformHealthData(health);
            _this.updatingHealth = false;
        }, function (error) {
            if (error.status === 503) {
                _this.healthData = _this.healthService.transformHealthData(error.json());
                _this.updatingHealth = false;
            }
        });
    };
    JhiHealthCheckComponent.prototype.showHealth = function (health) {
        var modalRef = this.modalService.open(health_modal_component_1.JhiHealthModalComponent);
        modalRef.componentInstance.currentHealth = health;
        modalRef.result.then(function (result) {
            // Left blank intentionally, nothing to do here
        }, function (reason) {
            // Left blank intentionally, nothing to do here
        });
    };
    JhiHealthCheckComponent.prototype.subSystemName = function (name) {
        return this.healthService.getSubSystemName(name);
    };
    return JhiHealthCheckComponent;
}());
JhiHealthCheckComponent = __decorate([
    core_1.Component({
        selector: 'jhi-health',
        template: __webpack_require__("./src/main/webapp/app/admin/health/health.component.html")
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        health_service_1.JhiHealthService])
], JhiHealthCheckComponent);
exports.JhiHealthCheckComponent = JhiHealthCheckComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var health_component_1 = __webpack_require__("./src/main/webapp/app/admin/health/health.component.ts");
exports.healthRoute = {
    path: 'jhi-health',
    component: health_component_1.JhiHealthCheckComponent,
    data: {
        pageTitle: 'health.title'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var JhiHealthService = (function () {
    function JhiHealthService(http) {
        this.http = http;
        this.separator = '.';
    }
    JhiHealthService.prototype.checkHealth = function () {
        return this.http.get('management/health').map(function (res) { return res.json(); });
    };
    JhiHealthService.prototype.transformHealthData = function (data) {
        var response = [];
        this.flattenHealthData(response, null, data);
        return response;
    };
    JhiHealthService.prototype.getBaseName = function (name) {
        if (name) {
            var split = name.split('.');
            return split[0];
        }
    };
    JhiHealthService.prototype.getSubSystemName = function (name) {
        if (name) {
            var split = name.split('.');
            split.splice(0, 1);
            var remainder = split.join('.');
            return remainder ? ' - ' + remainder : '';
        }
    };
    /* private methods */
    JhiHealthService.prototype.addHealthObject = function (result, isLeaf, healthObject, name) {
        var healthData = {
            name: name
        };
        var details = {};
        var hasDetails = false;
        for (var key in healthObject) {
            if (healthObject.hasOwnProperty(key)) {
                var value = healthObject[key];
                if (key === 'status' || key === 'error') {
                    healthData[key] = value;
                }
                else {
                    if (!this.isHealthObject(value)) {
                        details[key] = value;
                        hasDetails = true;
                    }
                }
            }
        }
        // Add the details
        if (hasDetails) {
            healthData.details = details;
        }
        // Only add nodes if they provide additional information
        if (isLeaf || hasDetails || healthData.error) {
            result.push(healthData);
        }
        return healthData;
    };
    JhiHealthService.prototype.flattenHealthData = function (result, path, data) {
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var value = data[key];
                if (this.isHealthObject(value)) {
                    if (this.hasSubSystem(value)) {
                        this.addHealthObject(result, false, value, this.getModuleName(path, key));
                        this.flattenHealthData(result, this.getModuleName(path, key), value);
                    }
                    else {
                        this.addHealthObject(result, true, value, this.getModuleName(path, key));
                    }
                }
            }
        }
        return result;
    };
    JhiHealthService.prototype.getModuleName = function (path, name) {
        var result;
        if (path && name) {
            result = path + this.separator + name;
        }
        else if (path) {
            result = path;
        }
        else if (name) {
            result = name;
        }
        else {
            result = '';
        }
        return result;
    };
    JhiHealthService.prototype.hasSubSystem = function (healthObject) {
        var result = false;
        for (var key in healthObject) {
            if (healthObject.hasOwnProperty(key)) {
                var value = healthObject[key];
                if (value && value.status) {
                    result = true;
                }
            }
        }
        return result;
    };
    JhiHealthService.prototype.isHealthObject = function (healthObject) {
        var result = false;
        for (var key in healthObject) {
            if (healthObject.hasOwnProperty(key)) {
                if (key === 'status') {
                    result = true;
                }
            }
        }
        return result;
    };
    return JhiHealthService;
}());
JhiHealthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JhiHealthService);
exports.JhiHealthService = JhiHealthService;


/***/ }),

/***/ "./src/main/webapp/app/admin/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audits.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audits.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audits.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audit.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audit-data.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/configuration/configuration.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/configuration/configuration.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/configuration/configuration.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/docs/docs.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/docs/docs.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/health/health.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/health/health-modal.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/health/health.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/health/health.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logs/logs.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logs/logs.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logs/logs.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logs/log.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/metrics/metrics.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/metrics/metrics-modal.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/metrics/metrics.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/metrics/metrics.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management-dialog.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management-detail.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-modal.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/admin.route.ts"));


/***/ }),

/***/ "./src/main/webapp/app/admin/logs/log.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Log = (function () {
    function Log(name, level) {
        this.name = name;
        this.level = level;
    }
    return Log;
}());
exports.Log = Log;


/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\" *ngIf=\"loggers\"> <h2 jhiTranslate=\"logs.title\">Logs</h2> <p jhiTranslate=\"logs.nbloggers\" translateValues=\"{total: '{{ loggers.length }}'}\">There are {{ loggers.length }} loggers.</p> <span jhiTranslate=\"logs.filter\">Filter</span> <input type=\"text\" [(ngModel)]=\"filter\" class=\"form-control\"> <table class=\"table table-condensed table-striped table-bordered\"> <thead> <tr title=\"click to order\"> <th (click)=\"orderProp = 'name'; reverse=!reverse\"><span jhiTranslate=\"logs.table.name\">Name</span></th> <th (click)=\"orderProp = 'level'; reverse=!reverse\"><span jhiTranslate=\"logs.table.level\">Level</span></th> </tr> </thead> <tr *ngFor=\"let logger of (loggers | pureFilter:filter:'name' | orderBy:orderProp:reverse)\"> <td><small>{{logger.name | slice:0:140}}</small></td> <td> <button (click)=\"changeLevel(logger.name, 'TRACE')\" [ngClass]=\"(logger.level=='TRACE') ? 'btn-danger' : 'btn-secondary'\" class=\"btn btn-sm\">TRACE</button> <button (click)=\"changeLevel(logger.name, 'DEBUG')\" [ngClass]=\"(logger.level=='DEBUG') ? 'btn-warning' : 'btn-secondary'\" class=\"btn btn-sm\">DEBUG</button> <button (click)=\"changeLevel(logger.name, 'INFO')\" [ngClass]=\"(logger.level=='INFO') ? 'btn-info' : 'btn-secondary'\" class=\"btn btn-sm\">INFO</button> <button (click)=\"changeLevel(logger.name, 'WARN')\" [ngClass]=\"(logger.level=='WARN') ? 'btn-success' : 'btn-secondary'\" class=\"btn btn-sm\">WARN</button> <button (click)=\"changeLevel(logger.name, 'ERROR')\" [ngClass]=\"(logger.level=='ERROR') ? 'btn-primary' : 'btn-secondary'\" class=\"btn btn-sm\">ERROR</button> </td> </tr> </table> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var log_model_1 = __webpack_require__("./src/main/webapp/app/admin/logs/log.model.ts");
var logs_service_1 = __webpack_require__("./src/main/webapp/app/admin/logs/logs.service.ts");
var LogsComponent = (function () {
    function LogsComponent(logsService) {
        this.logsService = logsService;
        this.filter = '';
        this.orderProp = 'name';
        this.reverse = false;
    }
    LogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logsService.findAll().subscribe(function (loggers) { return _this.loggers = loggers; });
    };
    LogsComponent.prototype.changeLevel = function (name, level) {
        var _this = this;
        var log = new log_model_1.Log(name, level);
        this.logsService.changeLevel(log).subscribe(function () {
            _this.logsService.findAll().subscribe(function (loggers) { return _this.loggers = loggers; });
        });
    };
    return LogsComponent;
}());
LogsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-logs',
        template: __webpack_require__("./src/main/webapp/app/admin/logs/logs.component.html"),
    }),
    __metadata("design:paramtypes", [logs_service_1.LogsService])
], LogsComponent);
exports.LogsComponent = LogsComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var logs_component_1 = __webpack_require__("./src/main/webapp/app/admin/logs/logs.component.ts");
exports.logsRoute = {
    path: 'logs',
    component: logs_component_1.LogsComponent,
    data: {
        pageTitle: 'logs.title'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var LogsService = (function () {
    function LogsService(http) {
        this.http = http;
    }
    LogsService.prototype.changeLevel = function (log) {
        return this.http.put('management/logs', log);
    };
    LogsService.prototype.findAll = function () {
        return this.http.get('management/logs').map(function (res) { return res.json(); });
    };
    return LogsService;
}());
LogsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LogsService);
exports.LogsService = LogsService;


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics-modal.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"modal-header\"> <h4 class=\"modal-title\" jhiTranslate=\"metrics.jvm.threads.dump.title\">Threads dump</h4> <button type=\"button\" class=\"close\" (click)=\"activeModal.dismiss('closed')\">&times;</button> </div> <div class=\"modal-body\"> <span class=\"badge badge-primary\" (click)=\"threadDumpFilter = {}\">All&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpAll}}</span></span>&nbsp; <span class=\"badge badge-success\" (click)=\"threadDumpFilter = {threadState: 'RUNNABLE'}\">Runnable&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpRunnable}}</span></span>&nbsp; <span class=\"badge badge-info\" (click)=\"threadDumpFilter = {threadState: 'WAITING'}\">Waiting&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpWaiting}}</span></span>&nbsp; <span class=\"badge badge-warning\" (click)=\"threadDumpFilter = {threadState: 'TIMED_WAITING'}\">Timed Waiting&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpTimedWaiting}}</span></span>&nbsp; <span class=\"badge badge-danger\" (click)=\"threadDumpFilter = {threadState: 'BLOCKED'}\">Blocked&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpBlocked}}</span></span>&nbsp; <div class=\"mt-2\">&nbsp;</div> Filter <input type=\"text\" [(ngModel)]=\"threadDumpFilter\" class=\"form-control\"> <div class=\"pad\" *ngFor=\"let entry of threadDump | pureFilter:threadDumpFilter:'lockName' | keys\"> <h6> <span class=\"badge\" [ngClass]=\"getBadgeClass(entry.value.threadState)\">{{entry.value.threadState}}</span>&nbsp;{{entry.value.threadName}} (ID {{entry.value.threadId}}) <a (click)=\"entry.show = !entry.show\" href=\"javascript:void(0);\"> <span [hidden]=\"entry.show\" jhiTranslate=\"metrics.jvm.threads.dump.show\">Show StackTrace</span> <span [hidden]=\"!entry.show\" jhiTranslate=\"metrics.jvm.threads.dump.hide\">Hide StackTrace</span> </a> </h6> <div class=\"card\" [hidden]=\"!entry.show\"> <div class=\"card-block\"> <div *ngFor=\"let st of entry.value.stackTrace | keys\" class=\"break\"> <samp>{{st.value.className}}.{{st.value.methodName}}(<code>{{st.value.fileName}}:{{st.value.lineNumber}}</code>)</samp> <span class=\"mt-1\"></span> </div> </div> </div> <table class=\"table table-sm table-responsive\"> <thead> <tr> <th class=\"text-right\" jhiTranslate=\"metrics.jvm.threads.dump.blockedtime\">Blocked Time</th> <th class=\"text-right\" jhiTranslate=\"metrics.jvm.threads.dump.blockedcount\">Blocked Count</th> <th class=\"text-right\" jhiTranslate=\"metrics.jvm.threads.dump.waitedtime\">Waited Time</th> <th class=\"text-right\" jhiTranslate=\"metrics.jvm.threads.dump.waitedcount\">Waited Count</th> <th jhiTranslate=\"metrics.jvm.threads.dump.lockname\">Lock Name</th> </tr> </thead> <tbody> <tr> <td>{{entry.value.blockedTime}}</td> <td>{{entry.value.blockedCount}}</td> <td>{{entry.value.waitedTime}}</td> <td>{{entry.value.waitedCount}}</td> <td><code>{{entry.value.lockName}}</code></td> </tr> </tbody> </table> </div> </div> <div class=\"modal-footer\"> <button type=\"button\" class=\"btn btn-secondary pull-left\" data-dismiss=\"modal\" (click)=\"activeModal.dismiss('closed')\">Done</button> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics-modal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(5);
var JhiMetricsMonitoringModalComponent = (function () {
    function JhiMetricsMonitoringModalComponent(activeModal) {
        this.activeModal = activeModal;
        this.threadDumpAll = 0;
        this.threadDumpBlocked = 0;
        this.threadDumpRunnable = 0;
        this.threadDumpTimedWaiting = 0;
        this.threadDumpWaiting = 0;
    }
    JhiMetricsMonitoringModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.threadDump.forEach(function (value) {
            if (value.threadState === 'RUNNABLE') {
                _this.threadDumpRunnable += 1;
            }
            else if (value.threadState === 'WAITING') {
                _this.threadDumpWaiting += 1;
            }
            else if (value.threadState === 'TIMED_WAITING') {
                _this.threadDumpTimedWaiting += 1;
            }
            else if (value.threadState === 'BLOCKED') {
                _this.threadDumpBlocked += 1;
            }
        });
        this.threadDumpAll = this.threadDumpRunnable + this.threadDumpWaiting +
            this.threadDumpTimedWaiting + this.threadDumpBlocked;
    };
    JhiMetricsMonitoringModalComponent.prototype.getBadgeClass = function (threadState) {
        if (threadState === 'RUNNABLE') {
            return 'badge-success';
        }
        else if (threadState === 'WAITING') {
            return 'badge-info';
        }
        else if (threadState === 'TIMED_WAITING') {
            return 'badge-warning';
        }
        else if (threadState === 'BLOCKED') {
            return 'badge-danger';
        }
    };
    return JhiMetricsMonitoringModalComponent;
}());
JhiMetricsMonitoringModalComponent = __decorate([
    core_1.Component({
        selector: 'jhi-metrics-modal',
        template: __webpack_require__("./src/main/webapp/app/admin/metrics/metrics-modal.component.html")
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
], JhiMetricsMonitoringModalComponent);
exports.JhiMetricsMonitoringModalComponent = JhiMetricsMonitoringModalComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <h2> <span jhiTranslate=\"metrics.title\">Application Metrics</span> <button class=\"btn btn-primary float-right\" (click)=\"refresh()\"> <span class=\"fa fa-refresh\"></span> <span jhiTranslate=\"metrics.refresh.button\">Refresh</span> </button> </h2> <h3 jhiTranslate=\"metrics.jvm.title\">JVM Metrics</h3> <div class=\"row\" *ngIf=\"!updatingMetrics\"> <div class=\"col-md-4\"> <b jhiTranslate=\"metrics.jvm.memory.title\">Memory</b> <p><span jhiTranslate=\"metrics.jvm.memory.total\">Total Memory</span> ({{metrics.gauges['jvm.memory.total.used'].value / 1000000 | number:'1.0-0'}}M / {{metrics.gauges['jvm.memory.total.max'].value / 1000000 | number:'1.0-0'}}M)</p> <ngb-progressbar type=\"success\" [max]=\"metrics.gauges['jvm.memory.total.max'].value\" [value]=\"metrics.gauges['jvm.memory.total.used'].value\" [striped]=\"true\" [animated]=\"true\"> <span>{{metrics.gauges['jvm.memory.total.used'].value * 100 / metrics.gauges['jvm.memory.total.max'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span jhiTranslate=\"metrics.jvm.memory.heap\">Heap Memory</span> ({{metrics.gauges['jvm.memory.heap.used'].value / 1000000 | number:'1.0-0'}}M / {{metrics.gauges['jvm.memory.heap.max'].value / 1000000 | number:'1.0-0'}}M)</p> <ngb-progressbar [max]=\"metrics.gauges['jvm.memory.heap.max'].value\" [value]=\"metrics.gauges['jvm.memory.heap.used'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['jvm.memory.heap.used'].value * 100 / metrics.gauges['jvm.memory.heap.max'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span jhiTranslate=\"metrics.jvm.memory.nonheap\">Non-Heap Memory</span> ({{metrics.gauges['jvm.memory.non-heap.used'].value / 1000000 | number:'1.0-0'}}M / {{metrics.gauges['jvm.memory.non-heap.committed'].value / 1000000 | number:'1.0-0'}}M)</p> <ngb-progressbar [max]=\"metrics.gauges['jvm.memory.non-heap.committed'].value\" [value]=\"metrics.gauges['jvm.memory.non-heap.used'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['jvm.memory.non-heap.used'].value * 100 / metrics.gauges['jvm.memory.non-heap.committed'].value | number:'1.0-0'}}%</span> </ngb-progressbar> </div> <div class=\"col-md-4\"> <b jhiTranslate=\"metrics.jvm.threads.title\">Threads</b> (Total: {{metrics.gauges['jvm.threads.count'].value}}) <a class=\"hand\" (click)=\"refreshThreadDumpData()\" data-toggle=\"modal\" data-target=\"#threadDump\"><i class=\"fa fa-eye\"></i></a> <p><span jhiTranslate=\"metrics.jvm.threads.runnable\">Runnable</span> {{metrics.gauges['jvm.threads.runnable.count'].value}}</p> <ngb-progressbar [value]=\"metrics.gauges['jvm.threads.runnable.count'].value\" [max]=\"metrics.gauges['jvm.threads.count'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['jvm.threads.runnable.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span jhiTranslate=\"metrics.jvm.threads.timedwaiting\">Timed Waiting</span> ({{metrics.gauges['jvm.threads.timed_waiting.count'].value}})</p> <ngb-progressbar [value]=\"metrics.gauges['jvm.threads.timed_waiting.count'].value\" [max]=\"metrics.gauges['jvm.threads.count'].value\" [striped]=\"true\" [animated]=\"true\" type=\"warning\"> <span>{{metrics.gauges['jvm.threads.timed_waiting.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span jhiTranslate=\"metrics.jvm.threads.waiting\">Waiting</span> ({{metrics.gauges['jvm.threads.waiting.count'].value}})</p> <ngb-progressbar [value]=\"metrics.gauges['jvm.threads.waiting.count'].value\" [max]=\"metrics.gauges['jvm.threads.count'].value\" [striped]=\"true\" [animated]=\"true\" type=\"warning\"> <span>{{metrics.gauges['jvm.threads.waiting.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span jhiTranslate=\"metrics.jvm.threads.blocked\">Blocked</span> ({{metrics.gauges['jvm.threads.blocked.count'].value}})</p> <ngb-progressbar [value]=\"metrics.gauges['jvm.threads.blocked.count'].value\" [max]=\"metrics.gauges['jvm.threads.count'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['jvm.threads.blocked.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:'1.0-0'}}%</span> </ngb-progressbar> </div> <div class=\"col-md-4\"> <b jhiTranslate=\"metrics.jvm.gc.title\">Garbage collections</b> <div class=\"row\" *ngIf=\"metrics.gauges['jvm.garbage.PS-MarkSweep.count']\"> <div class=\"col-md-9\" jhiTranslate=\"metrics.jvm.gc.marksweepcount\">Mark Sweep count</div> <div class=\"col-md-3 text-right\">{{metrics.gauges['jvm.garbage.PS-MarkSweep.count'].value}}</div> </div> <div class=\"row\" *ngIf=\"metrics.gauges['jvm.garbage.PS-MarkSweep.time']\"> <div class=\"col-md-9\" jhiTranslate=\"metrics.jvm.gc.marksweeptime\">Mark Sweep time</div> <div class=\"col-md-3 text-right\">{{metrics.gauges['jvm.garbage.PS-MarkSweep.time'].value}}ms</div> </div> <div class=\"row\" *ngIf=\"metrics.gauges['jvm.garbage.PS-Scavenge.count']\"> <div class=\"col-md-9\" jhiTranslate=\"metrics.jvm.gc.scavengecount\">Scavenge count</div> <div class=\"col-md-3 text-right\">{{metrics.gauges['jvm.garbage.PS-Scavenge.count'].value}}</div> </div> <div class=\"row\" *ngIf=\"metrics.gauges['jvm.garbage.PS-Scavenge.time']\"> <div class=\"col-md-9\" jhiTranslate=\"metrics.jvm.gc.scavengetime\">Scavenge time</div> <div class=\"col-md-3 text-right\">{{metrics.gauges['jvm.garbage.PS-Scavenge.time'].value}}ms</div> </div> </div> </div> <div class=\"well well-lg\" *ngIf=\"updatingMetrics\" jhiTranslate=\"metrics.updating\">Updating...</div> <h3 jhiTranslate=\"metrics.jvm.http.title\">HTTP requests (events per second)</h3> <p *ngIf=\"metrics.counters\"> <span jhiTranslate=\"metrics.jvm.http.active\">Active requests</span> <b>{{metrics.counters['com.codahale.metrics.servlet.InstrumentedFilter.activeRequests'].count | number:'1.0-0'}}</b> - <span jhiTranslate=\"metrics.jvm.http.total\">Total requests</span> <b>{{metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count | number:'1.0-0'}}</b> </p> <div class=\"table-responsive\" *ngIf=\"!updatingMetrics\"> <table class=\"table table-striped\"> <thead> <tr> <th jhiTranslate=\"metrics.jvm.http.table.code\">Code</th> <th jhiTranslate=\"metrics.jvm.http.table.count\">Count</th> <th class=\"text-right\" jhiTranslate=\"metrics.jvm.http.table.mean\">Mean</th> <th class=\"text-right\"><span jhiTranslate=\"metrics.jvm.http.table.average\">Average</span> (1 min)</th> <th class=\"text-right\"><span jhiTranslate=\"metrics.jvm.http.table.average\">Average</span> (5 min)</th> <th class=\"text-right\"><span jhiTranslate=\"metrics.jvm.http.table.average\">Average</span> (15 min)</th> </tr> </thead> <tbody> <tr> <td jhiTranslate=\"metrics.jvm.http.code.ok\">OK</td> <td> <ngb-progressbar [max]=\"metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count\" [value]=\"metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].count\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].count}}</span> </ngb-progressbar> </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].mean_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].m1_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].m5_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].m15_rate) | number:'1.0-2'}} </td> </tr> <tr> <td jhiTranslate=\"metrics.jvm.http.code.notfound\">Not Found</td> <td> <ngb-progressbar [max]=\"metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count\" [value]=\"metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].count\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].count}}</span> </ngb-progressbar> </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].mean_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].m1_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].m5_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].m15_rate) | number:'1.0-2'}} </td> </tr> <tr> <td jhiTranslate=\"metrics.jvm.http.code.servererror\">Server error</td> <td> <ngb-progressbar [max]=\"metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count\" [value]=\"metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].count\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].count}}</span> </ngb-progressbar> </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].mean_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].m1_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].m5_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].m15_rate) | number:'1.0-2'}} </td> </tr> </tbody> </table> </div> <h3 jhiTranslate=\"metrics.servicesstats.title\">Services statistics (time in millisecond)</h3> <div class=\"table-responsive\" *ngIf=\"!updatingMetrics\"> <table class=\"table table-striped\"> <thead> <tr> <th jhiTranslate=\"metrics.servicesstats.table.name\">Service name</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.count\">Count</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.mean\">Mean</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.min\">Min</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.p50\">p50</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.p75\">p75</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.p95\">p95</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.p99\">p99</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.max\">Max</th> </tr> </thead> <tbody> <tr *ngFor=\"let entry of servicesStats | keys\"> <td>{{entry.key}}</td> <td class=\"text-right\">{{entry.value.count}}</td> <td class=\"text-right\">{{entry.value.mean * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.min * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.p50 * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.p75 * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.p95 * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.p99 * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.max * 1000 | number:'1.0-0'}}</td> </tr> </tbody> </table> </div> <h3 jhiTranslate=\"metrics.datasource.title\" *ngIf=\"metrics.gauges && metrics.gauges['HikariPool-1.pool.TotalConnections'] && metrics.gauges['HikariPool-1.pool.TotalConnections'].value > 0\">DataSource statistics (time in millisecond)</h3> <div class=\"table-responsive\" *ngIf=\"!updatingMetrics && metrics.gauges && metrics.gauges['HikariPool-1.pool.TotalConnections'] && metrics.gauges['HikariPool-1.pool.TotalConnections'].value > 0\"> <table class=\"table table-striped\"> <thead> <tr> <th><span jhiTranslate=\"metrics.datasource.usage\">Usage</span> ({{metrics.gauges['HikariPool-1.pool.ActiveConnections'].value}} / {{metrics.gauges['HikariPool-1.pool.TotalConnections'].value}})</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.count\">Count</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.mean\">Mean</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.min\">Min</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.p50\">p50</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.p75\">p75</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.p95\">p95</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.p99\">p99</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.max\">Max</th> </tr> </thead> <tbody> <tr> <td> <div class=\"progress progress-striped\"> <ngb-progressbar [max]=\"metrics.gauges['HikariPool-1.pool.TotalConnections'].value\" [value]=\"metrics.gauges['HikariPool-1.pool.ActiveConnections'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['HikariPool-1.pool.ActiveConnections'].value * 100 / metrics.gauges['HikariPool-1.pool.TotalConnections'].value | number:'1.0-0'}}%</span> </ngb-progressbar> </div> </td> <td class=\"text-right\">{{metrics.histograms['HikariPool-1.pool.Usage'].count}}</td> <td class=\"text-right\">{{filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].mean) | number:'1.0-2'}}</td> <td class=\"text-right\">{{filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].min) | number:'1.0-2'}}</td> <td class=\"text-right\">{{filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].p50) | number:'1.0-2'}}</td> <td class=\"text-right\">{{filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].p75) | number:'1.0-2'}}</td> <td class=\"text-right\">{{filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].p95) | number:'1.0-2'}}</td> <td class=\"text-right\">{{filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].p99) | number:'1.0-2'}}</td> <td class=\"text-right\">{{filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].max) | number:'1.0-2'}}</td> </tr> </tbody> </table> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(5);
var metrics_modal_component_1 = __webpack_require__("./src/main/webapp/app/admin/metrics/metrics-modal.component.ts");
var metrics_service_1 = __webpack_require__("./src/main/webapp/app/admin/metrics/metrics.service.ts");
var JhiMetricsMonitoringComponent = (function () {
    function JhiMetricsMonitoringComponent(modalService, metricsService) {
        this.modalService = modalService;
        this.metricsService = metricsService;
        this.metrics = {};
        this.cachesStats = {};
        this.servicesStats = {};
        this.updatingMetrics = true;
        this.JCACHE_KEY = 'jcache.statistics';
    }
    JhiMetricsMonitoringComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    JhiMetricsMonitoringComponent.prototype.refresh = function () {
        var _this = this;
        this.updatingMetrics = true;
        this.metricsService.getMetrics().subscribe(function (metrics) {
            _this.metrics = metrics;
            _this.updatingMetrics = false;
            _this.servicesStats = {};
            _this.cachesStats = {};
            Object.keys(metrics.timers).forEach(function (key) {
                var value = metrics.timers[key];
                if (key.indexOf('web.rest') !== -1 || key.indexOf('service') !== -1) {
                    _this.servicesStats[key] = value;
                }
            });
            Object.keys(metrics.gauges).forEach(function (key) {
                if (key.indexOf('jcache.statistics') !== -1) {
                    var value = metrics.gauges[key].value;
                    // remove gets or puts
                    var index = key.lastIndexOf('.');
                    var newKey = key.substr(0, index);
                    // Keep the name of the domain
                    _this.cachesStats[newKey] = {
                        'name': _this.JCACHE_KEY.length,
                        'value': value
                    };
                }
            });
        });
    };
    JhiMetricsMonitoringComponent.prototype.refreshThreadDumpData = function () {
        var _this = this;
        this.metricsService.threadDump().subscribe(function (data) {
            var modalRef = _this.modalService.open(metrics_modal_component_1.JhiMetricsMonitoringModalComponent, { size: 'lg' });
            modalRef.componentInstance.threadDump = data;
            modalRef.result.then(function (result) {
                // Left blank intentionally, nothing to do here
            }, function (reason) {
                // Left blank intentionally, nothing to do here
            });
        });
    };
    JhiMetricsMonitoringComponent.prototype.filterNaN = function (input) {
        if (isNaN(input)) {
            return 0;
        }
        return input;
    };
    return JhiMetricsMonitoringComponent;
}());
JhiMetricsMonitoringComponent = __decorate([
    core_1.Component({
        selector: 'jhi-metrics',
        template: __webpack_require__("./src/main/webapp/app/admin/metrics/metrics.component.html")
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        metrics_service_1.JhiMetricsService])
], JhiMetricsMonitoringComponent);
exports.JhiMetricsMonitoringComponent = JhiMetricsMonitoringComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metrics_component_1 = __webpack_require__("./src/main/webapp/app/admin/metrics/metrics.component.ts");
exports.metricsRoute = {
    path: 'jhi-metrics',
    component: metrics_component_1.JhiMetricsMonitoringComponent,
    data: {
        pageTitle: 'metrics.title'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var JhiMetricsService = (function () {
    function JhiMetricsService(http) {
        this.http = http;
    }
    JhiMetricsService.prototype.getMetrics = function () {
        return this.http.get('management/metrics').map(function (res) { return res.json(); });
    };
    JhiMetricsService.prototype.threadDump = function () {
        return this.http.get('management/dump').map(function (res) { return res.json(); });
    };
    return JhiMetricsService;
}());
JhiMetricsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JhiMetricsService);
exports.JhiMetricsService = JhiMetricsService;


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<form name=\"deleteForm\" (ngSubmit)=\"confirmDelete(user.login)\"> <div class=\"modal-header\"> <h4 class=\"modal-title\" jhiTranslate=\"entity.delete.title\">Confirm delete operation</h4> <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"clear()\">&times;</button> </div> <div class=\"modal-body\"> <jhi-alert-error></jhi-alert-error> <p jhiTranslate=\"userManagement.delete.question\" translateValues=\"{login: '{{user.login}}'}\">Are you sure you want to delete this User?</p> </div> <div class=\"modal-footer\"> <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"clear()\"> <span class=\"fa fa-ban\"></span>&nbsp;<span jhiTranslate=\"entity.action.cancel\">Cancel</span> </button> <button type=\"submit\" class=\"btn btn-danger\"> <span class=\"fa fa-remove\"></span>&nbsp;<span jhiTranslate=\"entity.action.delete\">Delete</span> </button> </div> </form> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var ng_bootstrap_1 = __webpack_require__(5);
var ng_jhipster_1 = __webpack_require__(2);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var user_modal_service_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-modal.service.ts");
var UserMgmtDeleteDialogComponent = (function () {
    function UserMgmtDeleteDialogComponent(userService, activeModal, alertService, eventManager) {
        this.userService = userService;
        this.activeModal = activeModal;
        this.alertService = alertService;
        this.eventManager = eventManager;
    }
    UserMgmtDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    UserMgmtDeleteDialogComponent.prototype.confirmDelete = function (login) {
        var _this = this;
        this.userService.delete(login).subscribe(function (response) {
            _this.eventManager.broadcast({ name: 'userListModification',
                content: 'Deleted a user' });
            _this.activeModal.dismiss(true);
        });
        this.alertService.success('userManagement.deleted', { param: login }, null);
    };
    return UserMgmtDeleteDialogComponent;
}());
UserMgmtDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-mgmt-delete-dialog',
        template: __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.html")
    }),
    __metadata("design:paramtypes", [shared_1.UserService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiAlertService,
        ng_jhipster_1.JhiEventManager])
], UserMgmtDeleteDialogComponent);
exports.UserMgmtDeleteDialogComponent = UserMgmtDeleteDialogComponent;
var UserDeleteDialogComponent = (function () {
    function UserDeleteDialogComponent(route, userModalService) {
        this.route = route;
        this.userModalService = userModalService;
    }
    UserDeleteDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.userModalService.open(UserMgmtDeleteDialogComponent, params['login']);
        });
    };
    UserDeleteDialogComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return UserDeleteDialogComponent;
}());
UserDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-delete-dialog',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        user_modal_service_1.UserModalService])
], UserDeleteDialogComponent);
exports.UserDeleteDialogComponent = UserDeleteDialogComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\"> <h2> <span jhiTranslate=\"userManagement.detail.title\">User</span> [<b>{{user.login}}</b>] </h2> <dl class=\"row-md jh-entity-details\"> <dt><span jhiTranslate=\"userManagement.login\">Login</span></dt> <dd> <span>{{user.login}}</span> <span class=\"badge badge-danger\" *ngIf=\"!user.activated\" jhiTranslate=\"userManagement.deactivated\">Deactivated</span> <span class=\"badge badge-success\" *ngIf=\"user.activated\" jhiTranslate=\"userManagement.activated\">Activated</span> </dd> <dt><span jhiTranslate=\"userManagement.firstName\">First Name</span></dt> <dd>{{user.firstName}}</dd> <dt><span jhiTranslate=\"userManagement.lastName\">Last Name</span></dt> <dd>{{user.lastName}}</dd> <dt><span jhiTranslate=\"userManagement.email\">Email</span></dt> <dd>{{user.email}}</dd> <dt><span jhiTranslate=\"userManagement.langKey\">Lang Key</span></dt> <dd>{{user.langKey}}</dd> <dt><span jhiTranslate=\"userManagement.createdBy\">Created By</span></dt> <dd>{{user.createdBy}}</dd> <dt><span jhiTranslate=\"userManagement.createdDate\">Created Date</span></dt> <dd>{{user.createdDate | date:'dd/MM/yy HH:mm' }}</dd> <dt><span jhiTranslate=\"userManagement.lastModifiedBy\">Last Modified By</span></dt> <dd>{{user.lastModifiedBy}}</dd> <dt><span jhiTranslate=\"userManagement.lastModifiedDate\">Last Modified Date</span></dt> <dd>{{user.lastModifiedDate | date:'dd/MM/yy HH:mm'}}</dd> <dt><span jhiTranslate=\"userManagement.profiles\">Profiles</span></dt> <dd> <ul class=\"list-unstyled\"> <li *ngFor=\"let authority of user.authorities\"> <span class=\"badge badge-info\">{{authority}}</span> </li> </ul> </dd> </dl> <button type=\"submit\" routerLink=\"/user-management\" class=\"btn btn-info\"> <span class=\"fa fa-arrow-left\"></span>&nbsp;<span jhiTranslate=\"entity.action.back\"> Back</span> </button> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var UserMgmtDetailComponent = (function () {
    function UserMgmtDetailComponent(userService, route) {
        this.userService = userService;
        this.route = route;
    }
    UserMgmtDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['login']);
        });
    };
    UserMgmtDetailComponent.prototype.load = function (login) {
        var _this = this;
        this.userService.find(login).subscribe(function (user) {
            _this.user = user;
        });
    };
    UserMgmtDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return UserMgmtDetailComponent;
}());
UserMgmtDetailComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-mgmt-detail',
        template: __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-detail.component.html")
    }),
    __metadata("design:paramtypes", [shared_1.UserService,
        router_1.ActivatedRoute])
], UserMgmtDetailComponent);
exports.UserMgmtDetailComponent = UserMgmtDetailComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<form name=\"editForm\" role=\"form\" novalidate (ngSubmit)=\"save()\" #editForm=\"ngForm\"> <div class=\"modal-header\"> <h4 class=\"modal-title\" id=\"myUserLabel\" jhiTranslate=\"userManagement.home.createOrEditLabel\"> Create or edit a User</h4> <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"clear()\">&times;</button> </div> <div class=\"modal-body\"> <jhi-alert-error></jhi-alert-error> <div class=\"form-group\"> <label jhiTranslate=\"global.field.id\">ID</label> <input type=\"text\" class=\"form-control\" name=\"id\" [(ngModel)]=\"user.id\" readonly=\"readonly\"> </div> <div class=\"form-group\"> <label class=\"form-control-label\" jhiTranslate=\"userManagement.login\">Login</label> <input type=\"text\" class=\"form-control\" name=\"login\" #loginInput=\"ngModel\" [(ngModel)]=\"user.login\" required minlength=\"1\" maxlength=\"50\" pattern=\"^[_'.@A-Za-z0-9-]*$\"> <div *ngIf=\"loginInput.dirty && loginInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"loginInput.errors.required\" jhiTranslate=\"entity.validation.required\"> This field is required. </small> <small class=\"form-text text-danger\" *ngIf=\"loginInput.errors.maxlength\" jhiTranslate=\"entity.validation.maxlength\" translate-value-max=\"50\"> This field cannot be longer than 50 characters. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\" jhiTranslate=\"userManagement.firstName\">First Name</label> <input type=\"text\" class=\"form-control\" name=\"firstName\" #firstNameInput=\"ngModel\" [(ngModel)]=\"user.firstName\" maxlength=\"50\"> <div *ngIf=\"firstNameInput.dirty && firstNameInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"firstNameInput.errors.maxlength\" jhiTranslate=\"entity.validation.maxlength\" translate-value-max=\"50\"> This field cannot be longer than 50 characters. </small> </div> </div> <div class=\"form-group\"> <label jhiTranslate=\"userManagement.lastName\">Last Name</label> <input type=\"text\" class=\"form-control\" name=\"lastName\" #lastNameInput=\"ngModel\" [(ngModel)]=\"user.lastName\" maxlength=\"50\"> <div *ngIf=\"lastNameInput.dirty && lastNameInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"lastNameInput.errors.maxlength\" jhiTranslate=\"entity.validation.maxlength\" translate-value-max=\"50\"> This field cannot be longer than 50 characters. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\" jhiTranslate=\"userManagement.email\">Email</label> <input type=\"email\" class=\"form-control\" name=\"email\" #emailInput=\"ngModel\" [(ngModel)]=\"user.email\" minlength=\"5\" required maxlength=\"100\"> <div *ngIf=\"emailInput.dirty && emailInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.required\" jhiTranslate=\"entity.validation.required\"> This field is required. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.maxlength\" jhiTranslate=\"entity.validation.maxlength\" translate-value-max=\"100\"> This field cannot be longer than 100 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.minlength\" jhiTranslate=\"entity.validation.minlength\" translate-value-min=\"5\"> This field is required to be at least 5 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.email\" jhiTranslate=\"global.messages.validate.email.invalid\"> Your email is invalid. </small> </div> </div> <div class=\"form-check\"> <label class=\"form-check-label\" for=\"activated\"> <input class=\"form-check-input\" [disabled]=\"user.id === null\" type=\"checkbox\" id=\"activated\" name=\"activated\" [(ngModel)]=\"user.activated\"> <span jhiTranslate=\"userManagement.activated\">Activated</span> </label> </div> <div class=\"form-group\" *ngIf=\"languages && languages.length > 0\"> <label jhiTranslate=\"userManagement.langKey\">Lang Key</label> <select class=\"form-control\" id=\"langKey\" name=\"langKey\" [(ngModel)]=\"user.langKey\"> <option *ngFor=\"let language of languages\" [value]=\"language\">{{language | findLanguageFromKey}}</option> </select> </div> <div class=\"form-group\"> <label jhiTranslate=\"userManagement.profiles\">Profiles</label> <select class=\"form-control\" multiple=\"multiple\" name=\"authority\" [(ngModel)]=\"user.authorities\"> <option *ngFor=\"let authority of authorities\" [value]=\"authority\">{{authority}}</option> </select> </div> </div> <div class=\"modal-footer\"> <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"clear()\"> <span class=\"fa fa-ban\"></span>&nbsp;<span jhiTranslate=\"entity.action.cancel\">Cancel</span> </button> <button type=\"submit\" [disabled]=\"editForm.form.invalid || isSaving\" class=\"btn btn-primary\"> <span class=\"fa fa-floppy-o\"></span>&nbsp;<span jhiTranslate=\"entity.action.save\">Save</span> </button> </div> </form> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-dialog.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var ng_bootstrap_1 = __webpack_require__(5);
var ng_jhipster_1 = __webpack_require__(2);
var user_modal_service_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-modal.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var UserMgmtDialogComponent = (function () {
    function UserMgmtDialogComponent(activeModal, languageHelper, userService, alertService, eventManager) {
        this.activeModal = activeModal;
        this.languageHelper = languageHelper;
        this.userService = userService;
        this.alertService = alertService;
        this.eventManager = eventManager;
    }
    UserMgmtDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSaving = false;
        this.authorities = [];
        this.userService.authorities().subscribe(function (authorities) {
            _this.authorities = authorities;
        });
        this.languageHelper.getAll().then(function (languages) {
            _this.languages = languages;
        });
    };
    UserMgmtDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    UserMgmtDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.user.id !== null) {
            this.userService.update(this.user).subscribe(function (response) { return _this.onSaveSuccess(response, false); }, function () { return _this.onSaveError(); });
        }
        else {
            this.userService.create(this.user).subscribe(function (response) { return _this.onSaveSuccess(response, true); }, function () { return _this.onSaveError(); });
        }
    };
    UserMgmtDialogComponent.prototype.onSaveSuccess = function (result, isCreated) {
        this.alertService.success(isCreated ? 'userManagement.created'
            : 'userManagement.updated', { param: result.json.login }, null);
        this.eventManager.broadcast({ name: 'userListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
    };
    UserMgmtDialogComponent.prototype.onSaveError = function () {
        this.isSaving = false;
    };
    return UserMgmtDialogComponent;
}());
UserMgmtDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-mgmt-dialog',
        template: __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-dialog.component.html")
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        shared_1.JhiLanguageHelper,
        shared_1.UserService,
        ng_jhipster_1.JhiAlertService,
        ng_jhipster_1.JhiEventManager])
], UserMgmtDialogComponent);
exports.UserMgmtDialogComponent = UserMgmtDialogComponent;
var UserDialogComponent = (function () {
    function UserDialogComponent(route, userModalService) {
        this.route = route;
        this.userModalService = userModalService;
    }
    UserDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['login']) {
                _this.modalRef = _this.userModalService.open(UserMgmtDialogComponent, params['login']);
            }
            else {
                _this.modalRef = _this.userModalService.open(UserMgmtDialogComponent);
            }
        });
    };
    UserDialogComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return UserDialogComponent;
}());
UserDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-dialog',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        user_modal_service_1.UserModalService])
], UserDialogComponent);
exports.UserDialogComponent = UserDialogComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <h2> <span jhiTranslate=\"userManagement.home.title\">Users</span> <button class=\"btn btn-primary float-right\" [routerLink]=\"['/', { outlets: { popup: ['user-management-new'] } }]\"> <span class=\"fa fa-plus\"></span> <span jhiTranslate=\"userManagement.home.createLabel\">Create a new User</span> </button> </h2> <jhi-alert></jhi-alert> <div class=\"table-responsive\" *ngIf=\"users\"> <table class=\"table table-striped\"> <thead> <tr jhiSort [(predicate)]=\"predicate\" [(ascending)]=\"reverse\" [callback]=\"transition.bind(this)\"> <th jhiSortBy=\"id\"><span jhiTranslate=\"global.field.id\">ID</span><span class=\"fa fa-sort\"></span></th> <th jhiSortBy=\"login\"><span jhiTranslate=\"userManagement.login\">Login</span> <span class=\"fa fa-sort\"></span></th> <th jhiSortBy=\"email\"><span jhiTranslate=\"userManagement.email\">Email</span> <span class=\"fa fa-sort\"></span></th> <th></th> <th jhiSortBy=\"langKey\"> <span jhiTranslate=\"userManagement.langKey\">Lang Key</span> <span class=\"fa fa-sort\"></span></th> <th><span jhiTranslate=\"userManagement.profiles\">Profiles</span></th> <th jhiSortBy=\"createdDate\"><span jhiTranslate=\"userManagement.createdDate\">Created Date</span> <span class=\"fa fa-sort\"></span></th> <th jhiSortBy=\"lastModifiedBy\"><span jhiTranslate=\"userManagement.lastModifiedBy\">Last Modified By</span> <span class=\"fa fa-sort\"></span></th> <th jhiSortBy=\"lastModifiedDate\"><span jhiTranslate=\"userManagement.lastModifiedDate\">Last Modified Date</span> <span class=\"fa fa-sort\"></span></th> <th></th> </tr> </thead> <tbody *ngIf=\"users\"> <tr *ngFor=\"let user of users; trackBy: trackIdentity\"> <td><a [routerLink]=\"['../user-management', user.login]\">{{user.id}}</a></td> <td>{{user.login}}</td> <td>{{user.email}}</td> <td> <span class=\"badge badge-danger hand\" (click)=\"setActive(user, true)\" *ngIf=\"!user.activated\" jhiTranslate=\"userManagement.deactivated\">Deactivated</span> <span class=\"badge badge-success hand\" (click)=\"setActive(user, false)\" *ngIf=\"user.activated\" jhiTranslate=\"userManagement.activated\">Activated</span> </td> <td>{{user.langKey}}</td> <td> <div *ngFor=\"let authority of user.authorities\"> <span class=\"tag tag-info\">{{ authority }}</span> </div> </td> <td>{{user.createdDate | date:'dd/MM/yy HH:mm'}}</td> <td>{{user.lastModifiedBy}}</td> <td>{{user.lastModifiedDate | date:'dd/MM/yy HH:mm'}}</td> <td class=\"text-right\"> <div class=\"btn-group flex-btn-group-container\"> <button type=\"submit\" [routerLink]=\"['../user-management', user.login]\" class=\"btn btn-info btn-sm\"> <span class=\"fa fa-eye\"></span> <span class=\"hidden-md-down\" jhiTranslate=\"entity.action.view\">View</span> </button> <button type=\"submit\" [routerLink]=\"['/', { outlets: { popup: 'user-management/'+ user.login + '/edit'} }]\" replaceUrl=\"true\" class=\"btn btn-primary btn-sm\"> <span class=\"fa fa-pencil\"></span> <span class=\"hidden-md-down\" jhiTranslate=\"entity.action.edit\">Edit</span> </button> <button type=\"submit\" [routerLink]=\"['/', { outlets: { popup: 'user-management/'+ user.login + '/delete'} }]\" replaceUrl=\"true\" class=\"btn btn-danger btn-sm\" [disabled]=\"currentAccount.login==user.login\"> <span class=\"fa fa-remove\"></span> <span class=\"hidden-md-down\" jhiTranslate=\"entity.action.delete\">Delete</span> </button> </div> </td> </tr> </tbody> </table> </div> <div *ngIf=\"users\"> <div class=\"row justify-content-center\"> <jhi-item-count [page]=\"page\" [total]=\"queryCount\" [itemsPerPage]=\"itemsPerPage\"></jhi-item-count> </div> <div class=\"row justify-content-center\"> <ngb-pagination [collectionSize]=\"totalItems\" [(page)]=\"page\" (pageChange)=\"loadPage(page)\"></ngb-pagination> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var ng_jhipster_1 = __webpack_require__(2);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var uib_pagination_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/uib-pagination.config.ts");
var UserMgmtComponent = (function () {
    function UserMgmtComponent(userService, parseLinks, alertService, principal, eventManager, paginationUtil, paginationConfig, activatedRoute, router) {
        var _this = this;
        this.userService = userService;
        this.parseLinks = parseLinks;
        this.alertService = alertService;
        this.principal = principal;
        this.eventManager = eventManager;
        this.paginationUtil = paginationUtil;
        this.paginationConfig = paginationConfig;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.itemsPerPage = shared_1.ITEMS_PER_PAGE;
        this.routeData = this.activatedRoute.data.subscribe(function (data) {
            _this.page = data['pagingParams'].page;
            _this.previousPage = data['pagingParams'].page;
            _this.reverse = data['pagingParams'].ascending;
            _this.predicate = data['pagingParams'].predicate;
        });
    }
    UserMgmtComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
            _this.loadAll();
            _this.registerChangeInUsers();
        });
    };
    UserMgmtComponent.prototype.ngOnDestroy = function () {
        this.routeData.unsubscribe();
    };
    UserMgmtComponent.prototype.registerChangeInUsers = function () {
        var _this = this;
        this.eventManager.subscribe('userListModification', function (response) { return _this.loadAll(); });
    };
    UserMgmtComponent.prototype.setActive = function (user, isActivated) {
        var _this = this;
        user.activated = isActivated;
        this.userService.update(user).subscribe(function (response) {
            if (response.status === 200) {
                _this.error = null;
                _this.success = 'OK';
                _this.loadAll();
            }
            else {
                _this.success = null;
                _this.error = 'ERROR';
            }
        });
    };
    UserMgmtComponent.prototype.loadAll = function () {
        var _this = this;
        this.userService.query({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort()
        }).subscribe(function (res) { return _this.onSuccess(res.json, res.headers); }, function (res) { return _this.onError(res.json); });
    };
    UserMgmtComponent.prototype.trackIdentity = function (index, item) {
        return item.id;
    };
    UserMgmtComponent.prototype.sort = function () {
        var result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    };
    UserMgmtComponent.prototype.loadPage = function (page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    };
    UserMgmtComponent.prototype.transition = function () {
        this.router.navigate(['/user-management'], {
            queryParams: {
                page: this.page,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }
        });
        this.loadAll();
    };
    UserMgmtComponent.prototype.onSuccess = function (data, headers) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = headers.get('X-Total-Count');
        this.queryCount = this.totalItems;
        this.users = data;
    };
    UserMgmtComponent.prototype.onError = function (error) {
        this.alertService.error(error.error, error.message, null);
    };
    return UserMgmtComponent;
}());
UserMgmtComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-mgmt',
        template: __webpack_require__("./src/main/webapp/app/admin/user-management/user-management.component.html")
    }),
    __metadata("design:paramtypes", [shared_1.UserService,
        ng_jhipster_1.JhiParseLinks,
        ng_jhipster_1.JhiAlertService,
        shared_1.Principal,
        ng_jhipster_1.JhiEventManager,
        ng_jhipster_1.JhiPaginationUtil,
        uib_pagination_config_1.PaginationConfig,
        router_1.ActivatedRoute,
        router_1.Router])
], UserMgmtComponent);
exports.UserMgmtComponent = UserMgmtComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(2);
var user_management_component_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-management.component.ts");
var user_management_detail_component_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-detail.component.ts");
var user_management_dialog_component_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-dialog.component.ts");
var user_management_delete_dialog_component_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var UserResolve = (function () {
    function UserResolve(principal) {
        this.principal = principal;
    }
    UserResolve.prototype.canActivate = function () {
        var _this = this;
        return this.principal.identity().then(function (account) { return _this.principal.hasAnyAuthority(['ROLE_ADMIN']); });
    };
    return UserResolve;
}());
UserResolve = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [shared_1.Principal])
], UserResolve);
exports.UserResolve = UserResolve;
var UserResolvePagingParams = (function () {
    function UserResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    UserResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return UserResolvePagingParams;
}());
UserResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiPaginationUtil])
], UserResolvePagingParams);
exports.UserResolvePagingParams = UserResolvePagingParams;
exports.userMgmtRoute = [
    {
        path: 'user-management',
        component: user_management_component_1.UserMgmtComponent,
        resolve: {
            'pagingParams': UserResolvePagingParams
        },
        data: {
            pageTitle: 'userManagement.home.title'
        }
    },
    {
        path: 'user-management/:login',
        component: user_management_detail_component_1.UserMgmtDetailComponent,
        data: {
            pageTitle: 'userManagement.home.title'
        }
    }
];
exports.userDialogRoute = [
    {
        path: 'user-management-new',
        component: user_management_dialog_component_1.UserDialogComponent,
        outlet: 'popup'
    },
    {
        path: 'user-management/:login/edit',
        component: user_management_dialog_component_1.UserDialogComponent,
        outlet: 'popup'
    },
    {
        path: 'user-management/:login/delete',
        component: user_management_delete_dialog_component_1.UserDeleteDialogComponent,
        outlet: 'popup'
    }
];


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-modal.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var ng_bootstrap_1 = __webpack_require__(5);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var UserModalService = (function () {
    function UserModalService(modalService, router, userService) {
        this.modalService = modalService;
        this.router = router;
        this.userService = userService;
        this.isOpen = false;
    }
    UserModalService.prototype.open = function (component, login) {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (login) {
            this.userService.find(login).subscribe(function (user) { return _this.userModalRef(component, user); });
        }
        else {
            return this.userModalRef(component, new shared_1.User());
        }
    };
    UserModalService.prototype.userModalRef = function (component, user) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.user = user;
        modalRef.result.then(function (result) {
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.isOpen = false;
        }, function (reason) {
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.isOpen = false;
        });
        return modalRef;
    };
    return UserModalService;
}());
UserModalService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        router_1.Router,
        shared_1.UserService])
], UserModalService);
exports.UserModalService = UserModalService;


/***/ }),

/***/ "./src/main/webapp/app/app.constants.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// DO NOT EDIT THIS FILE, EDIT THE WEBPACK COMMON CONFIG INSTEAD, WHICH WILL MODIFY THIS FILE
/* tslint:disable */
var _VERSION = '0.0.1-SNAPSHOT'; // This value will be overwritten by webpack
var _DEBUG_INFO_ENABLED = true; // This value will be overwritten by webpack
_VERSION = '0.0.1-SNAPSHOT';
_DEBUG_INFO_ENABLED = true;
/* tslint:enable */
exports.VERSION = _VERSION;
exports.DEBUG_INFO_ENABLED = _DEBUG_INFO_ENABLED;


/***/ }),

/***/ "./src/main/webapp/app/app.main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__(14);
var prod_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/prod.config.ts");
var app_module_1 = __webpack_require__("./src/main/webapp/app/app.module.ts");
prod_config_1.ProdConfig();
if (false) {
    module['hot'].accept();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.NeojhipsterAppModule)
    .then(function (success) { return console.log("Application started"); })
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/main/webapp/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(18);
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(9);
var ng2_webstorage_1 = __webpack_require__(7);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var home_module_1 = __webpack_require__("./src/main/webapp/app/home/home.module.ts");
var admin_module_1 = __webpack_require__("./src/main/webapp/app/admin/admin.module.ts");
var account_module_1 = __webpack_require__("./src/main/webapp/app/account/account.module.ts");
var entity_module_1 = __webpack_require__("./src/main/webapp/app/entities/entity.module.ts");
var http_provider_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/http.provider.ts");
var uib_pagination_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/uib-pagination.config.ts");
var layouts_1 = __webpack_require__("./src/main/webapp/app/layouts/index.ts");
var NeojhipsterAppModule = (function () {
    function NeojhipsterAppModule() {
    }
    return NeojhipsterAppModule;
}());
NeojhipsterAppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            layouts_1.LayoutRoutingModule,
            ng2_webstorage_1.Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
            shared_1.NeojhipsterSharedModule,
            home_module_1.NeojhipsterHomeModule,
            admin_module_1.NeojhipsterAdminModule,
            account_module_1.NeojhipsterAccountModule,
            entity_module_1.NeojhipsterEntityModule
        ],
        declarations: [
            layouts_1.JhiMainComponent,
            layouts_1.NavbarComponent,
            layouts_1.ErrorComponent,
            layouts_1.PageRibbonComponent,
            layouts_1.ActiveMenuDirective,
            layouts_1.FooterComponent
        ],
        providers: [
            layouts_1.ProfileService,
            http_provider_1.customHttpProvider(),
            uib_pagination_config_1.PaginationConfig,
            shared_1.UserRouteAccessService
        ],
        bootstrap: [layouts_1.JhiMainComponent]
    })
], NeojhipsterAppModule);
exports.NeojhipsterAppModule = NeojhipsterAppModule;


/***/ }),

/***/ "./src/main/webapp/app/app.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var layouts_1 = __webpack_require__("./src/main/webapp/app/layouts/index.ts");
exports.navbarRoute = {
    path: '',
    component: layouts_1.NavbarComponent,
    outlet: 'navbar'
};


/***/ }),

/***/ "./src/main/webapp/app/blocks/config/prod.config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var app_constants_1 = __webpack_require__("./src/main/webapp/app/app.constants.ts");
function ProdConfig() {
    // disable debug data on prod profile to improve performance
    if (!app_constants_1.DEBUG_INFO_ENABLED) {
        core_1.enableProdMode();
    }
}
exports.ProdConfig = ProdConfig;


/***/ }),

/***/ "./src/main/webapp/app/blocks/config/uib-pagination.config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(5);
var PaginationConfig = (function () {
    function PaginationConfig(config) {
        this.config = config;
        config.boundaryLinks = true;
        config.maxSize = 5;
        config.pageSize = shared_1.ITEMS_PER_PAGE;
        config.size = 'sm';
    }
    return PaginationConfig;
}());
PaginationConfig = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbPaginationConfig])
], PaginationConfig);
exports.PaginationConfig = PaginationConfig;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/auth-expired.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ng_jhipster_1 = __webpack_require__(2);
var Observable_1 = __webpack_require__(8);
var login_service_1 = __webpack_require__("./src/main/webapp/app/shared/login/login.service.ts");
var AuthExpiredInterceptor = (function (_super) {
    __extends(AuthExpiredInterceptor, _super);
    function AuthExpiredInterceptor(injector) {
        var _this = _super.call(this) || this;
        _this.injector = injector;
        return _this;
    }
    AuthExpiredInterceptor.prototype.requestIntercept = function (options) {
        return options;
    };
    AuthExpiredInterceptor.prototype.responseIntercept = function (observable) {
        var _this = this;
        return observable.catch(function (error, source) {
            if (error.status === 401) {
                var loginService = _this.injector.get(login_service_1.LoginService);
                loginService.logout();
            }
            return Observable_1.Observable.throw(error);
        });
    };
    return AuthExpiredInterceptor;
}(ng_jhipster_1.JhiHttpInterceptor));
exports.AuthExpiredInterceptor = AuthExpiredInterceptor;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/auth.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ng_jhipster_1 = __webpack_require__(2);
var AuthInterceptor = (function (_super) {
    __extends(AuthInterceptor, _super);
    function AuthInterceptor(localStorage, sessionStorage) {
        var _this = _super.call(this) || this;
        _this.localStorage = localStorage;
        _this.sessionStorage = sessionStorage;
        return _this;
    }
    AuthInterceptor.prototype.requestIntercept = function (options) {
        var token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
        if (!!token) {
            options.headers.append('Authorization', 'Bearer ' + token);
        }
        return options;
    };
    AuthInterceptor.prototype.responseIntercept = function (observable) {
        return observable; // by pass
    };
    return AuthInterceptor;
}(ng_jhipster_1.JhiHttpInterceptor));
exports.AuthInterceptor = AuthInterceptor;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/errorhandler.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ng_jhipster_1 = __webpack_require__(2);
var Observable_1 = __webpack_require__(8);
var ErrorHandlerInterceptor = (function (_super) {
    __extends(ErrorHandlerInterceptor, _super);
    function ErrorHandlerInterceptor(eventManager) {
        var _this = _super.call(this) || this;
        _this.eventManager = eventManager;
        return _this;
    }
    ErrorHandlerInterceptor.prototype.requestIntercept = function (options) {
        return options;
    };
    ErrorHandlerInterceptor.prototype.responseIntercept = function (observable) {
        var _this = this;
        return observable.catch(function (error) {
            if (!(error.status === 401 && (error.text() === '' ||
                (error.json().path && error.json().path.indexOf('/api/account') === 0)))) {
                _this.eventManager.broadcast({ name: 'neojhipsterApp.httpError', content: error });
            }
            return Observable_1.Observable.throw(error);
        });
    };
    return ErrorHandlerInterceptor;
}(ng_jhipster_1.JhiHttpInterceptor));
exports.ErrorHandlerInterceptor = ErrorHandlerInterceptor;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/http.provider.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var ng_jhipster_1 = __webpack_require__(2);
var auth_interceptor_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/auth.interceptor.ts");
var ng2_webstorage_1 = __webpack_require__(7);
var auth_expired_interceptor_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/auth-expired.interceptor.ts");
var errorhandler_interceptor_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/errorhandler.interceptor.ts");
var notification_interceptor_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/notification.interceptor.ts");
function interceptableFactory(backend, defaultOptions, localStorage, sessionStorage, injector, eventManager) {
    return new ng_jhipster_1.JhiInterceptableHttp(backend, defaultOptions, [
        new auth_interceptor_1.AuthInterceptor(localStorage, sessionStorage),
        new auth_expired_interceptor_1.AuthExpiredInterceptor(injector),
        // Other interceptors can be added here
        new errorhandler_interceptor_1.ErrorHandlerInterceptor(eventManager),
        new notification_interceptor_1.NotificationInterceptor()
    ]);
}
exports.interceptableFactory = interceptableFactory;
;
function customHttpProvider() {
    return {
        provide: http_1.Http,
        useFactory: interceptableFactory,
        deps: [
            http_1.XHRBackend,
            http_1.RequestOptions,
            ng2_webstorage_1.LocalStorageService,
            ng2_webstorage_1.SessionStorageService,
            core_1.Injector,
            ng_jhipster_1.JhiEventManager
        ]
    };
}
exports.customHttpProvider = customHttpProvider;
;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/notification.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ng_jhipster_1 = __webpack_require__(2);
var Observable_1 = __webpack_require__(8);
var NotificationInterceptor = (function (_super) {
    __extends(NotificationInterceptor, _super);
    function NotificationInterceptor() {
        return _super.call(this) || this;
    }
    NotificationInterceptor.prototype.requestIntercept = function (options) {
        return options;
    };
    NotificationInterceptor.prototype.responseIntercept = function (observable) {
        return observable.catch(function (error) {
            var arr = Array.from(error.headers._headers);
            var headers = [];
            var i;
            for (i = 0; i < arr.length; i++) {
                if (arr[i][0].endsWith('app-alert') || arr[i][0].endsWith('app-params')) {
                    headers.push(arr[i][0]);
                }
            }
            headers.sort();
            var alertKey = headers.length >= 1 ? error.headers.get(headers[0]) : null;
            if (typeof alertKey === 'string') {
                // TODO
                // JhiAlertService.success(alertKey, { param: response.headers(headers[1])});
            }
            return Observable_1.Observable.throw(error);
        });
    };
    return NotificationInterceptor;
}(ng_jhipster_1.JhiHttpInterceptor));
exports.NotificationInterceptor = NotificationInterceptor;


/***/ }),

/***/ "./src/main/webapp/app/entities/entity.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */
var NeojhipsterEntityModule = (function () {
    function NeojhipsterEntityModule() {
    }
    return NeojhipsterEntityModule;
}());
NeojhipsterEntityModule = __decorate([
    core_1.NgModule({
        imports: [],
        declarations: [],
        entryComponents: [],
        providers: [],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], NeojhipsterEntityModule);
exports.NeojhipsterEntityModule = NeojhipsterEntityModule;


/***/ }),

/***/ "./src/main/webapp/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\"> <div class=\"col-md-3\"> <span class=\"hipster img-fluid img-rounded\"></span> </div> <div class=\"col-md-9\"> <h1 class=\"display-4\" jhiTranslate=\"home.title\">Welcome, Java Hipster!</h1> <p class=\"lead\" jhiTranslate=\"home.subtitle\">This is your homepage</p> <div [ngSwitch]=\"isAuthenticated()\"> <div class=\"alert alert-success\" *ngSwitchCase=\"true\"> <span *ngIf=\"account\" jhiTranslate=\"home.logged.message\" translateValues=\"{username: '{{account.login}}'}\"> You are logged in as user \"{{account.login}}\". </span> </div> <div class=\"alert alert-warning\" *ngSwitchCase=\"false\"> <span jhiTranslate=\"global.messages.info.authenticated.prefix\">If you want to </span> <a class=\"alert-link\" (click)=\"login()\" jhiTranslate=\"global.messages.info.authenticated.link\">sign in</a><span jhiTranslate=\"global.messages.info.authenticated.suffix\">, you can try the default accounts:<br/>- Administrator (login=\"admin\" and password=\"admin\") <br/>- User (login=\"user\" and password=\"user\").</span> </div> <div class=\"alert alert-warning\" *ngSwitchCase=\"false\"> <span jhiTranslate=\"global.messages.info.register.noaccount\">You don't have an account yet?</span> <a class=\"alert-link\" routerLink=\"register\" jhiTranslate=\"global.messages.info.register.link\">Register a new account</a> </div> </div> <p jhiTranslate=\"home.question\"> If you have any question on JHipster: </p> <ul> <li><a href=\"http://jhipster.github.io/\" target=\"_blank\" rel=\"noopener\" jhiTranslate=\"home.link.homepage\">JHipster homepage</a></li> <li><a href=\"http://stackoverflow.com/tags/jhipster/info\" target=\"_blank\" rel=\"noopener\" jhiTranslate=\"home.link.stackoverflow\">JHipster on Stack Overflow</a></li> <li><a href=\"https://github.com/jhipster/generator-jhipster/issues?state=open\" target=\"_blank\" rel=\"noopener\" jhiTranslate=\"home.link.bugtracker\">JHipster bug tracker</a></li> <li><a href=\"https://gitter.im/jhipster/generator-jhipster\" target=\"_blank\" rel=\"noopener\" jhiTranslate=\"home.link.chat\">JHipster public chat room</a></li> <li><a href=\"https://twitter.com/java_hipster\" target=\"_blank\" rel=\"noopener\" jhiTranslate=\"home.link.follow\">follow @java_hipster on Twitter</a></li> </ul> <p> <span jhiTranslate=\"home.like\">If you like JHipster, don't forget to give us a star on</span> <a href=\"https://github.com/jhipster/generator-jhipster\" target=\"_blank\" rel=\"noopener\" jhiTranslate=\"home.github\">Github</a>! </p> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(2);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var HomeComponent = (function () {
    function HomeComponent(principal, loginModalService, eventManager) {
        this.principal = principal;
        this.loginModalService = loginModalService;
        this.eventManager = eventManager;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.account = account;
        });
        this.registerAuthenticationSuccess();
    };
    HomeComponent.prototype.registerAuthenticationSuccess = function () {
        var _this = this;
        this.eventManager.subscribe('authenticationSuccess', function (message) {
            _this.principal.identity().then(function (account) {
                _this.account = account;
            });
        });
    };
    HomeComponent.prototype.isAuthenticated = function () {
        return this.principal.isAuthenticated();
    };
    HomeComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'jhi-home',
        template: __webpack_require__("./src/main/webapp/app/home/home.component.html"),
        styles: [
            __webpack_require__("./src/main/webapp/app/home/home.scss")
        ]
    }),
    __metadata("design:paramtypes", [shared_1.Principal,
        shared_1.LoginModalService,
        ng_jhipster_1.JhiEventManager])
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/main/webapp/app/home/home.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var _1 = __webpack_require__("./src/main/webapp/app/home/index.ts");
var NeojhipsterHomeModule = (function () {
    function NeojhipsterHomeModule() {
    }
    return NeojhipsterHomeModule;
}());
NeojhipsterHomeModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.NeojhipsterSharedModule,
            router_1.RouterModule.forRoot([_1.HOME_ROUTE], { useHash: true })
        ],
        declarations: [
            _1.HomeComponent,
        ],
        entryComponents: [],
        providers: [],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], NeojhipsterHomeModule);
exports.NeojhipsterHomeModule = NeojhipsterHomeModule;


/***/ }),

/***/ "./src/main/webapp/app/home/home.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__("./src/main/webapp/app/home/index.ts");
exports.HOME_ROUTE = {
    path: '',
    component: _1.HomeComponent,
    data: {
        authorities: [],
        pageTitle: 'home.title'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/home/home.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/home/home.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/home/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/home/home.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/home/home.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/home/home.module.ts"));


/***/ }),

/***/ "./src/main/webapp/app/layouts/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-4\"> <span class=\"hipster img-fluid img-rounded\"></span> </div> <div class=\"col-md-8\"> <h1 jhiTranslate=\"error.title\">Error Page!</h1> <div [hidden]=\"!errorMessage\"> <div class=\"alert alert-danger\">{{errorMessage}} </div> </div> <div [hidden]=\"!error403\" class=\"alert alert-danger\" jhiTranslate=\"error.403\">You are not authorized to access the page. </div> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/layouts/error/error.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var ErrorComponent = (function () {
    function ErrorComponent(route) {
        this.route = route;
    }
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (routeData) {
            if (routeData.error403) {
                _this.error403 = routeData.error403;
            }
            if (routeData.errorMessage) {
                _this.errorMessage = routeData.errorMessage;
            }
        });
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    core_1.Component({
        selector: 'jhi-error',
        template: __webpack_require__("./src/main/webapp/app/layouts/error/error.component.html")
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], ErrorComponent);
exports.ErrorComponent = ErrorComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/error/error.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var error_component_1 = __webpack_require__("./src/main/webapp/app/layouts/error/error.component.ts");
exports.errorRoute = [
    {
        path: 'error',
        component: error_component_1.ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'error.title'
        },
    },
    {
        path: 'accessdenied',
        component: error_component_1.ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'error.title',
            error403: true
        },
    }
];


/***/ }),

/***/ "./src/main/webapp/app/layouts/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\"> <p jhiTranslate=\"footer\">This is your footer</p> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/layouts/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        selector: 'jhi-footer',
        template: __webpack_require__("./src/main/webapp/app/layouts/footer/footer.component.html")
    })
], FooterComponent);
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/layouts/error/error.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/error/error.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/main/main.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/footer/footer.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/navbar/navbar.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/navbar/active-menu.directive.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/profiles/page-ribbon.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/profiles/profile.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/profiles/profile-info.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/layout-routing.module.ts"));


/***/ }),

/***/ "./src/main/webapp/app/layouts/layout-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var app_route_1 = __webpack_require__("./src/main/webapp/app/app.route.ts");
var _1 = __webpack_require__("./src/main/webapp/app/layouts/index.ts");
var LAYOUT_ROUTES = [
    app_route_1.navbarRoute
].concat(_1.errorRoute);
var LayoutRoutingModule = (function () {
    function LayoutRoutingModule() {
    }
    return LayoutRoutingModule;
}());
LayoutRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true })
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], LayoutRoutingModule);
exports.LayoutRoutingModule = LayoutRoutingModule;


/***/ }),

/***/ "./src/main/webapp/app/layouts/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<jhi-page-ribbon></jhi-page-ribbon> <div> <router-outlet name=\"navbar\"></router-outlet> </div> <div class=\"container-fluid\"> <div class=\"card jh-card\"> <router-outlet></router-outlet> <router-outlet name=\"popup\"></router-outlet> </div> <jhi-footer></jhi-footer> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/layouts/main/main.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var JhiMainComponent = (function () {
    function JhiMainComponent(jhiLanguageHelper, router, $storageService) {
        this.jhiLanguageHelper = jhiLanguageHelper;
        this.router = router;
        this.$storageService = $storageService;
    }
    JhiMainComponent.prototype.getPageTitle = function (routeSnapshot) {
        var title = (routeSnapshot.data && routeSnapshot.data['pageTitle']) ? routeSnapshot.data['pageTitle'] : 'neojhipsterApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    };
    JhiMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.jhiLanguageHelper.updateTitle(_this.getPageTitle(_this.router.routerState.snapshot.root));
            }
        });
    };
    return JhiMainComponent;
}());
JhiMainComponent = __decorate([
    core_1.Component({
        selector: 'jhi-main',
        template: __webpack_require__("./src/main/webapp/app/layouts/main/main.component.html")
    }),
    __metadata("design:paramtypes", [shared_1.JhiLanguageHelper,
        router_1.Router,
        shared_1.StateStorageService])
], JhiMainComponent);
exports.JhiMainComponent = JhiMainComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/navbar/active-menu.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var core_2 = __webpack_require__(10);
var ActiveMenuDirective = (function () {
    function ActiveMenuDirective(el, renderer, translateService) {
        this.el = el;
        this.renderer = renderer;
        this.translateService = translateService;
    }
    ActiveMenuDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.translateService.onLangChange.subscribe(function (event) {
            _this.updateActiveFlag(event.lang);
        });
        this.updateActiveFlag(this.translateService.currentLang);
    };
    ActiveMenuDirective.prototype.updateActiveFlag = function (selectedLanguage) {
        if (this.jhiActiveMenu === selectedLanguage) {
            this.renderer.setElementClass(this.el.nativeElement, 'active', true);
        }
        else {
            this.renderer.setElementClass(this.el.nativeElement, 'active', false);
        }
    };
    return ActiveMenuDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ActiveMenuDirective.prototype, "jhiActiveMenu", void 0);
ActiveMenuDirective = __decorate([
    core_1.Directive({
        selector: '[jhiActiveMenu]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_2.TranslateService])
], ActiveMenuDirective);
exports.ActiveMenuDirective = ActiveMenuDirective;


/***/ }),

/***/ "./src/main/webapp/app/layouts/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-toggleable-md jh-navbar\"> <div class=\"jh-logo-container float-left\"> <a class=\"jh-navbar-toggler hidden-lg-up float-right\" href=\"javascript:void(0);\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleNavbar()\"> <i class=\"fa fa-bars\"></i> </a> <a class=\"navbar-brand logo float-left\" routerLink=\"/\" (click)=\"collapseNavbar()\"> <span class=\"logo-img\"></span> <span jhiTranslate=\"global.title\" class=\"navbar-title\">Neojhipster</span> <span class=\"navbar-version\">{{version}}</span> </a> </div> <div class=\"navbar-collapse collapse\" id=\"navbarResponsive\" [ngbCollapse]=\"isNavbarCollapsed\" [ngSwitch]=\"isAuthenticated()\"> <ul class=\"navbar-nav ml-auto\"> <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"> <a class=\"nav-link\" routerLink=\"/\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-home\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.home\">Home</span> </a> </li> <li *ngSwitchCase=\"true\" ngbDropdown class=\"nav-item dropdown pointer\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"> <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"entity-menu\"> <span> <i class=\"fa fa-th-list\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.entities.main\"> Entities </span> <b class=\"caret\"></b> </span> </a> <ul class=\"dropdown-menu\" ngbDropdownMenu> </ul> </li> <li *jhiHasAnyAuthority=\"'ROLE_ADMIN'\" ngbDropdown class=\"nav-item dropdown pointer\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"> <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"admin-menu\"> <span> <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.main\">Administration</span> <b class=\"caret\"></b> </span> </a> <ul class=\"dropdown-menu\" ngbDropdownMenu> <li> <a class=\"dropdown-item\" routerLink=\"user-management\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-user\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.userManagement\">User management</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"jhi-metrics\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-tachometer\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.metrics\">Metrics</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"jhi-health\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-heart\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.health\">Health</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"jhi-configuration\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-list\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.configuration\">Configuration</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"audits\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-bell\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.audits\">Audits</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"logs\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-tasks\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.logs\">Logs</span> </a> </li> <li *ngIf=\"swaggerEnabled\"> <a class=\"dropdown-item\" routerLink=\"docs\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-book\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.apidocs\">API</span> </a> </li> </ul> </li> <li ngbDropdown class=\"nav-item dropdown pointer\" *ngIf=\"languages\"> <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"languagesnavBarDropdown\" *ngIf=\"languages.length > 1\"> <span> <i class=\"fa fa-flag\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.language\">Language</span> <b class=\"caret\"></b> </span> </a> <ul class=\"dropdown-menu\" ngbDropdownMenu *ngIf=\"languages.length > 1\"> <li *ngFor=\"let language of languages\"> <a class=\"dropdown-item\" [jhiActiveMenu]=\"language\" href=\"javascript:void(0);\" (click)=\"changeLanguage(language);collapseNavbar();\">{{language | findLanguageFromKey}}</a> </li> </ul> </li> <li ngbDropdown class=\"nav-item dropdown pointer\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"> <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"account-menu\"> <span *ngIf=\"!getImageUrl()\"> <i class=\"fa fa-user\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.account.main\"> Account </span> <b class=\"caret\"></b> </span> <span *ngIf=\"getImageUrl()\"> <img [src]=\"getImageUrl()\" class=\"profile-image img-circle\" alt=\"Avatar\"> </span> </a> <ul class=\"dropdown-menu dropdown-menu-right\" ngbDropdownMenu> <li *ngSwitchCase=\"true\"> <a class=\"dropdown-item\" routerLink=\"settings\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-wrench\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.account.settings\">Settings</span> </a> </li> <li *ngSwitchCase=\"true\"> <a class=\"dropdown-item\" routerLink=\"password\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-clock-o\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.account.password\">Password</span> </a> </li> <li *ngSwitchCase=\"true\"> <a class=\"dropdown-item\" (click)=\"logout()\" id=\"logout\"> <i class=\"fa fa-fw fa-sign-out\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.account.logout\">Sign out</span> </a> </li> <li *ngSwitchCase=\"false\"> <a class=\"dropdown-item\" (click)=\"login()\" id=\"login\"> <i class=\"fa fa-fw fa-sign-in\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.account.login\">Sign in</span> </a> </li> <li *ngSwitchCase=\"false\"> <a class=\"dropdown-item\" routerLink=\"register\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-registered\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.account.register\">Register</span> </a> </li> </ul> </li> </ul> </div> </nav> ";

/***/ }),

/***/ "./src/main/webapp/app/layouts/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var ng_jhipster_1 = __webpack_require__(2);
var profile_service_1 = __webpack_require__("./src/main/webapp/app/layouts/profiles/profile.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var app_constants_1 = __webpack_require__("./src/main/webapp/app/app.constants.ts");
var NavbarComponent = (function () {
    function NavbarComponent(loginService, languageService, languageHelper, principal, loginModalService, profileService, router) {
        this.loginService = loginService;
        this.languageService = languageService;
        this.languageHelper = languageHelper;
        this.principal = principal;
        this.loginModalService = loginModalService;
        this.profileService = profileService;
        this.router = router;
        this.version = app_constants_1.VERSION ? 'v' + app_constants_1.VERSION : '';
        this.isNavbarCollapsed = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.languageHelper.getAll().then(function (languages) {
            _this.languages = languages;
        });
        this.profileService.getProfileInfo().subscribe(function (profileInfo) {
            _this.inProduction = profileInfo.inProduction;
            _this.swaggerEnabled = profileInfo.swaggerEnabled;
        });
    };
    NavbarComponent.prototype.changeLanguage = function (languageKey) {
        this.languageService.changeLanguage(languageKey);
    };
    NavbarComponent.prototype.collapseNavbar = function () {
        this.isNavbarCollapsed = true;
    };
    NavbarComponent.prototype.isAuthenticated = function () {
        return this.principal.isAuthenticated();
    };
    NavbarComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    NavbarComponent.prototype.logout = function () {
        this.collapseNavbar();
        this.loginService.logout();
        this.router.navigate(['']);
    };
    NavbarComponent.prototype.toggleNavbar = function () {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    };
    NavbarComponent.prototype.getImageUrl = function () {
        return this.isAuthenticated() ? this.principal.getImageUrl() : null;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'jhi-navbar',
        template: __webpack_require__("./src/main/webapp/app/layouts/navbar/navbar.component.html"),
        styles: [
            __webpack_require__("./src/main/webapp/app/layouts/navbar/navbar.scss")
        ]
    }),
    __metadata("design:paramtypes", [shared_1.LoginService,
        ng_jhipster_1.JhiLanguageService,
        shared_1.JhiLanguageHelper,
        shared_1.Principal,
        shared_1.LoginModalService,
        profile_service_1.ProfileService,
        router_1.Router])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/navbar/navbar.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/layouts/navbar/navbar.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/layouts/profiles/page-ribbon.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var profile_service_1 = __webpack_require__("./src/main/webapp/app/layouts/profiles/profile.service.ts");
var PageRibbonComponent = (function () {
    function PageRibbonComponent(profileService) {
        this.profileService = profileService;
    }
    PageRibbonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getProfileInfo().subscribe(function (profileInfo) {
            _this.profileInfo = profileInfo;
            _this.ribbonEnv = profileInfo.ribbonEnv;
        });
    };
    return PageRibbonComponent;
}());
PageRibbonComponent = __decorate([
    core_1.Component({
        selector: 'jhi-page-ribbon',
        template: "<div class=\"ribbon\" *ngIf=\"ribbonEnv\"><a href=\"\" jhiTranslate=\"global.ribbon.{{ribbonEnv}}\">{{ribbonEnv}}</a></div>",
        styles: [
            __webpack_require__("./src/main/webapp/app/layouts/profiles/page-ribbon.scss")
        ]
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], PageRibbonComponent);
exports.PageRibbonComponent = PageRibbonComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/profiles/page-ribbon.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/layouts/profiles/page-ribbon.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/layouts/profiles/profile-info.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ProfileInfo = (function () {
    function ProfileInfo() {
    }
    return ProfileInfo;
}());
exports.ProfileInfo = ProfileInfo;


/***/ }),

/***/ "./src/main/webapp/app/layouts/profiles/profile.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var profile_info_model_1 = __webpack_require__("./src/main/webapp/app/layouts/profiles/profile-info.model.ts");
var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
        this.profileInfoUrl = 'api/profile-info';
    }
    ProfileService.prototype.getProfileInfo = function () {
        return this.http.get(this.profileInfoUrl)
            .map(function (res) {
            var data = res.json();
            var pi = new profile_info_model_1.ProfileInfo();
            pi.activeProfiles = data.activeProfiles;
            pi.ribbonEnv = data.ribbonEnv;
            pi.inProduction = data.activeProfiles.indexOf('prod') !== -1;
            pi.swaggerEnabled = data.activeProfiles.indexOf('swagger') !== -1;
            return pi;
        });
    };
    return ProfileService;
}());
ProfileService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProfileService);
exports.ProfileService = ProfileService;


/***/ }),

/***/ "./src/main/webapp/app/shared/alert/alert-error.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var core_2 = __webpack_require__(10);
var ng_jhipster_1 = __webpack_require__(2);
var JhiAlertErrorComponent = (function () {
    function JhiAlertErrorComponent(alertService, eventManager, translateService) {
        var _this = this;
        this.alertService = alertService;
        this.eventManager = eventManager;
        this.translateService = translateService;
        this.alerts = [];
        this.cleanHttpErrorListener = eventManager.subscribe('neojhipsterApp.httpError', function (response) {
            var i;
            var httpResponse = response.content;
            switch (httpResponse.status) {
                // connection refused, server not reachable
                case 0:
                    _this.addErrorAlert('Server not reachable', 'error.server.not.reachable');
                    break;
                case 400:
                    var arr = Array.from(httpResponse.headers._headers);
                    var headers = [];
                    for (i = 0; i < arr.length; i++) {
                        if (arr[i][0].endsWith('app-error') || arr[i][0].endsWith('app-params')) {
                            headers.push(arr[i][0]);
                        }
                    }
                    headers.sort();
                    var errorHeader = null;
                    var entityKey = null;
                    if (headers.length > 1) {
                        errorHeader = httpResponse.headers.get(headers[0]);
                        entityKey = httpResponse.headers.get(headers[1]);
                    }
                    if (errorHeader) {
                        var entityName = translateService.instant('global.menu.entities.' + entityKey);
                        _this.addErrorAlert(errorHeader, errorHeader, { entityName: entityName });
                    }
                    else if (httpResponse.text() !== '' && httpResponse.json() && httpResponse.json().fieldErrors) {
                        var fieldErrors = httpResponse.json().fieldErrors;
                        for (i = 0; i < fieldErrors.length; i++) {
                            var fieldError = fieldErrors[i];
                            // convert 'something[14].other[4].id' to 'something[].other[].id' so translations can be written to it
                            var convertedField = fieldError.field.replace(/\[\d*\]/g, '[]');
                            var fieldName = translateService.instant('neojhipsterApp.' +
                                fieldError.objectName + '.' + convertedField);
                            _this.addErrorAlert('Error on field "' + fieldName + '"', 'error.' + fieldError.message, { fieldName: fieldName });
                        }
                    }
                    else if (httpResponse.text() !== '' && httpResponse.json() && httpResponse.json().message) {
                        _this.addErrorAlert(httpResponse.json().message, httpResponse.json().message, httpResponse.json().params);
                    }
                    else {
                        _this.addErrorAlert(httpResponse.text());
                    }
                    break;
                case 404:
                    _this.addErrorAlert('Not found', 'error.url.not.found');
                    break;
                default:
                    if (httpResponse.text() !== '' && httpResponse.json() && httpResponse.json().message) {
                        _this.addErrorAlert(httpResponse.json().message);
                    }
                    else {
                        _this.addErrorAlert(httpResponse.text());
                    }
            }
        });
    }
    JhiAlertErrorComponent.prototype.ngOnDestroy = function () {
        if (this.cleanHttpErrorListener !== undefined && this.cleanHttpErrorListener !== null) {
            this.eventManager.destroy(this.cleanHttpErrorListener);
            this.alerts = [];
        }
    };
    JhiAlertErrorComponent.prototype.addErrorAlert = function (message, key, data) {
        key = (key && key !== null) ? key : message;
        this.alerts.push(this.alertService.addAlert({
            type: 'danger',
            msg: key,
            params: data,
            timeout: 5000,
            toast: this.alertService.isToast(),
            scoped: true
        }, this.alerts));
    };
    return JhiAlertErrorComponent;
}());
JhiAlertErrorComponent = __decorate([
    core_1.Component({
        selector: 'jhi-alert-error',
        template: "\n        <div class=\"alerts\" role=\"alert\">\n            <div *ngFor=\"let alert of alerts\"  [ngClass]=\"{'alert.position': true, 'toast': alert.toast}\">\n                <ngb-alert *ngIf=\"alert && alert.type && alert.msg\" [type]=\"alert.type\" (close)=\"alert.close(alerts)\">\n                    <pre [innerHTML]=\"alert.msg\"></pre>\n                </ngb-alert>\n            </div>\n        </div>"
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiAlertService, ng_jhipster_1.JhiEventManager, core_2.TranslateService])
], JhiAlertErrorComponent);
exports.JhiAlertErrorComponent = JhiAlertErrorComponent;


/***/ }),

/***/ "./src/main/webapp/app/shared/alert/alert.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(2);
var JhiAlertComponent = (function () {
    function JhiAlertComponent(alertService) {
        this.alertService = alertService;
    }
    JhiAlertComponent.prototype.ngOnInit = function () {
        this.alerts = this.alertService.get();
    };
    JhiAlertComponent.prototype.ngOnDestroy = function () {
        this.alerts = [];
    };
    return JhiAlertComponent;
}());
JhiAlertComponent = __decorate([
    core_1.Component({
        selector: 'jhi-alert',
        template: "\n        <div class=\"alerts\" role=\"alert\">\n            <div *ngFor=\"let alert of alerts\" [ngClass]=\"{'alert.position': true, 'toast': alert.toast}\">\n                <ngb-alert *ngIf=\"alert && alert.type && alert.msg\" [type]=\"alert.type\" (close)=\"alert.close(alerts)\">\n                    <pre [innerHTML]=\"alert.msg\"></pre>\n                </ngb-alert>\n            </div>\n        </div>"
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiAlertService])
], JhiAlertComponent);
exports.JhiAlertComponent = JhiAlertComponent;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/account.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var AccountService = (function () {
    function AccountService(http) {
        this.http = http;
    }
    AccountService.prototype.get = function () {
        return this.http.get('api/account').map(function (res) { return res.json(); });
    };
    AccountService.prototype.save = function (account) {
        return this.http.post('api/account', account);
    };
    return AccountService;
}());
AccountService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AccountService);
exports.AccountService = AccountService;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/auth-jwt.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var Rx_1 = __webpack_require__(21);
var ng2_webstorage_1 = __webpack_require__(7);
var AuthServerProvider = (function () {
    function AuthServerProvider(http, $localStorage, $sessionStorage) {
        this.http = http;
        this.$localStorage = $localStorage;
        this.$sessionStorage = $sessionStorage;
    }
    AuthServerProvider.prototype.getToken = function () {
        return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken');
    };
    AuthServerProvider.prototype.login = function (credentials) {
        var data = {
            username: credentials.username,
            password: credentials.password,
            rememberMe: credentials.rememberMe
        };
        return this.http.post('api/authenticate', data).map(authenticateSuccess.bind(this));
        function authenticateSuccess(resp) {
            var bearerToken = resp.headers.get('Authorization');
            if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
                var jwt = bearerToken.slice(7, bearerToken.length);
                this.storeAuthenticationToken(jwt, credentials.rememberMe);
                return jwt;
            }
        }
    };
    AuthServerProvider.prototype.loginWithToken = function (jwt, rememberMe) {
        if (jwt) {
            this.storeAuthenticationToken(jwt, rememberMe);
            return Promise.resolve(jwt);
        }
        else {
            return Promise.reject('auth-jwt-service Promise reject'); // Put appropriate error message here
        }
    };
    AuthServerProvider.prototype.storeAuthenticationToken = function (jwt, rememberMe) {
        if (rememberMe) {
            this.$localStorage.store('authenticationToken', jwt);
        }
        else {
            this.$sessionStorage.store('authenticationToken', jwt);
        }
    };
    AuthServerProvider.prototype.logout = function () {
        var _this = this;
        return new Rx_1.Observable(function (observer) {
            _this.$localStorage.clear('authenticationToken');
            _this.$sessionStorage.clear('authenticationToken');
            observer.complete();
        });
    };
    return AuthServerProvider;
}());
AuthServerProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        ng2_webstorage_1.LocalStorageService,
        ng2_webstorage_1.SessionStorageService])
], AuthServerProvider);
exports.AuthServerProvider = AuthServerProvider;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/csrf.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ngx_cookie_1 = __webpack_require__(12);
var CSRFService = (function () {
    function CSRFService(cookieService) {
        this.cookieService = cookieService;
    }
    CSRFService.prototype.getCSRF = function (name) {
        name = "" + (name ? name : 'XSRF-TOKEN');
        return this.cookieService.get(name);
    };
    return CSRFService;
}());
CSRFService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ngx_cookie_1.CookieService])
], CSRFService);
exports.CSRFService = CSRFService;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/has-any-authority.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var principal_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/principal.service.ts");
/**
 * @whatItDoes Conditionally includes an HTML element if current user has any
 * of the authorities passed as the `expression`.
 *
 * @howToUse
 * ```
 *     <some-element *jhiHasAnyAuthority="'ROLE_ADMIN'">...</some-element>
 *
 *     <some-element *jhiHasAnyAuthority="['ROLE_ADMIN', 'ROLE_USER']">...</some-element>
 * ```
 */
var HasAnyAuthorityDirective = (function () {
    function HasAnyAuthorityDirective(principal, templateRef, viewContainerRef) {
        this.principal = principal;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
    }
    Object.defineProperty(HasAnyAuthorityDirective.prototype, "jhiHasAnyAuthority", {
        set: function (value) {
            var _this = this;
            this.authorities = typeof value === 'string' ? [value] : value;
            this.updateView();
            // Get notified each time authentication state changes.
            this.principal.getAuthenticationState().subscribe(function (identity) { return _this.updateView(); });
        },
        enumerable: true,
        configurable: true
    });
    HasAnyAuthorityDirective.prototype.updateView = function () {
        var _this = this;
        this.principal.hasAnyAuthority(this.authorities).then(function (result) {
            _this.viewContainerRef.clear();
            if (result) {
                _this.viewContainerRef.createEmbeddedView(_this.templateRef);
            }
        });
    };
    return HasAnyAuthorityDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], HasAnyAuthorityDirective.prototype, "jhiHasAnyAuthority", null);
HasAnyAuthorityDirective = __decorate([
    core_1.Directive({
        selector: '[jhiHasAnyAuthority]'
    }),
    __metadata("design:paramtypes", [principal_service_1.Principal, core_1.TemplateRef, core_1.ViewContainerRef])
], HasAnyAuthorityDirective);
exports.HasAnyAuthorityDirective = HasAnyAuthorityDirective;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/principal.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var Subject_1 = __webpack_require__(20);
var account_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/account.service.ts");
var Principal = (function () {
    function Principal(account) {
        this.account = account;
        this.authenticated = false;
        this.authenticationState = new Subject_1.Subject();
    }
    Principal.prototype.authenticate = function (identity) {
        this.userIdentity = identity;
        this.authenticated = identity !== null;
        this.authenticationState.next(this.userIdentity);
    };
    Principal.prototype.hasAnyAuthority = function (authorities) {
        return Promise.resolve(this.hasAnyAuthorityDirect(authorities));
    };
    Principal.prototype.hasAnyAuthorityDirect = function (authorities) {
        if (!this.authenticated || !this.userIdentity || !this.userIdentity.authorities) {
            return false;
        }
        for (var i = 0; i < authorities.length; i++) {
            if (this.userIdentity.authorities.indexOf(authorities[i]) !== -1) {
                return true;
            }
        }
        return false;
    };
    Principal.prototype.hasAuthority = function (authority) {
        if (!this.authenticated) {
            return Promise.resolve(false);
        }
        return this.identity().then(function (id) {
            return Promise.resolve(id.authorities && id.authorities.indexOf(authority) !== -1);
        }, function () {
            return Promise.resolve(false);
        });
    };
    Principal.prototype.identity = function (force) {
        var _this = this;
        if (force === true) {
            this.userIdentity = undefined;
        }
        // check and see if we have retrieved the userIdentity data from the server.
        // if we have, reuse it by immediately resolving
        if (this.userIdentity) {
            return Promise.resolve(this.userIdentity);
        }
        // retrieve the userIdentity data from the server, update the identity object, and then resolve.
        return this.account.get().toPromise().then(function (account) {
            if (account) {
                _this.userIdentity = account;
                _this.authenticated = true;
            }
            else {
                _this.userIdentity = null;
                _this.authenticated = false;
            }
            _this.authenticationState.next(_this.userIdentity);
            return _this.userIdentity;
        }).catch(function (err) {
            _this.userIdentity = null;
            _this.authenticated = false;
            _this.authenticationState.next(_this.userIdentity);
            return null;
        });
    };
    Principal.prototype.isAuthenticated = function () {
        return this.authenticated;
    };
    Principal.prototype.isIdentityResolved = function () {
        return this.userIdentity !== undefined;
    };
    Principal.prototype.getAuthenticationState = function () {
        return this.authenticationState.asObservable();
    };
    Principal.prototype.getImageUrl = function () {
        return this.isIdentityResolved() ? this.userIdentity.imageUrl : null;
    };
    return Principal;
}());
Principal = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], Principal);
exports.Principal = Principal;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/state-storage.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng2_webstorage_1 = __webpack_require__(7);
var StateStorageService = (function () {
    function StateStorageService($sessionStorage) {
        this.$sessionStorage = $sessionStorage;
    }
    StateStorageService.prototype.getPreviousState = function () {
        return this.$sessionStorage.retrieve('previousState');
    };
    StateStorageService.prototype.resetPreviousState = function () {
        this.$sessionStorage.clear('previousState');
    };
    StateStorageService.prototype.storePreviousState = function (previousStateName, previousStateParams) {
        var previousState = { 'name': previousStateName, 'params': previousStateParams };
        this.$sessionStorage.store('previousState', previousState);
    };
    StateStorageService.prototype.getDestinationState = function () {
        return this.$sessionStorage.retrieve('destinationState');
    };
    StateStorageService.prototype.storeUrl = function (url) {
        this.$sessionStorage.store('previousUrl', url);
    };
    StateStorageService.prototype.getUrl = function () {
        return this.$sessionStorage.retrieve('previousUrl');
    };
    StateStorageService.prototype.storeDestinationState = function (destinationState, destinationStateParams, fromState) {
        var destinationInfo = {
            'destination': {
                'name': destinationState.name,
                'data': destinationState.data,
            },
            'params': destinationStateParams,
            'from': {
                'name': fromState.name,
            }
        };
        this.$sessionStorage.store('destinationState', destinationInfo);
    };
    return StateStorageService;
}());
StateStorageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng2_webstorage_1.SessionStorageService])
], StateStorageService);
exports.StateStorageService = StateStorageService;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/user-route-access-service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var _1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var login_modal_service_1 = __webpack_require__("./src/main/webapp/app/shared/login/login-modal.service.ts");
var state_storage_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/state-storage.service.ts");
var UserRouteAccessService = (function () {
    function UserRouteAccessService(router, loginModalService, principal, stateStorageService) {
        this.router = router;
        this.loginModalService = loginModalService;
        this.principal = principal;
        this.stateStorageService = stateStorageService;
    }
    UserRouteAccessService.prototype.canActivate = function (route, state) {
        var authorities = route.data['authorities'];
        if (!authorities || authorities.length === 0) {
            return true;
        }
        return this.checkLogin(authorities, state.url);
    };
    UserRouteAccessService.prototype.checkLogin = function (authorities, url) {
        var _this = this;
        var principal = this.principal;
        return Promise.resolve(principal.identity().then(function (account) {
            if (account && principal.hasAnyAuthorityDirect(authorities)) {
                return true;
            }
            _this.stateStorageService.storeUrl(url);
            _this.router.navigate(['accessdenied']).then(function () {
                // only show the login dialog, if the user hasn't logged in yet
                if (!account) {
                    _this.loginModalService.open();
                }
            });
            return false;
        }));
    };
    return UserRouteAccessService;
}());
UserRouteAccessService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        login_modal_service_1.LoginModalService,
        _1.Principal,
        state_storage_service_1.StateStorageService])
], UserRouteAccessService);
exports.UserRouteAccessService = UserRouteAccessService;


/***/ }),

/***/ "./src/main/webapp/app/shared/constants/pagination.constants.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ITEMS_PER_PAGE = 20;


/***/ }),

/***/ "./src/main/webapp/app/shared/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/shared/constants/pagination.constants.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/alert/alert.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/alert/alert-error.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/csrf.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/state-storage.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/account.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/auth-jwt.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/principal.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/has-any-authority.directive.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/user-route-access-service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/language/language.constants.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/language/language.helper.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/language/find-language-from-key.pipe.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/login/login.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/login/login.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/login/login-modal.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/user/account.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/user/user.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/user/user.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/model/response-wrapper.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/model/request-util.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/shared-libs.module.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/shared-common.module.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/shared.module.ts"));


/***/ }),

/***/ "./src/main/webapp/app/shared/language/find-language-from-key.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var FindLanguageFromKeyPipe = (function () {
    function FindLanguageFromKeyPipe() {
        this.languages = {
            'ca': 'Català',
            'cs': 'Český',
            'da': 'Dansk',
            'de': 'Deutsch',
            'el': 'Ελληνικά',
            'en': 'English',
            'es': 'Español',
            'et': 'Eesti',
            'fr': 'Français',
            'gl': 'Galego',
            'hu': 'Magyar',
            'hi': 'हिंदी',
            'hy': 'Հայերեն',
            'it': 'Italiano',
            'ja': '日本語',
            'ko': '한국어',
            'mr': 'मराठी',
            'nl': 'Nederlands',
            'pl': 'Polski',
            'pt-br': 'Português (Brasil)',
            'pt-pt': 'Português',
            'ro': 'Română',
            'ru': 'Русский',
            'sk': 'Slovenský',
            'sr': 'Srpski',
            'sv': 'Svenska',
            'ta': 'தமிழ்',
            'th': 'ไทย',
            'tr': 'Türkçe',
            'ua': 'Українська',
            'vi': 'Tiếng Việt',
            'zh-cn': '中文（简体）',
            'zh-tw': '繁體中文'
        };
    }
    FindLanguageFromKeyPipe.prototype.transform = function (lang) {
        return this.languages[lang];
    };
    return FindLanguageFromKeyPipe;
}());
FindLanguageFromKeyPipe = __decorate([
    core_1.Pipe({ name: 'findLanguageFromKey' })
], FindLanguageFromKeyPipe);
exports.FindLanguageFromKeyPipe = FindLanguageFromKeyPipe;


/***/ }),

/***/ "./src/main/webapp/app/shared/language/language.constants.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
    Languages codes are ISO_639-1 codes, see http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
    They are written in English to avoid character encoding issues (not a perfect solution)
*/
exports.LANGUAGES = [
    'en'
    // jhipster-needle-i18n-language-constant - JHipster will add/remove languages in this array
];


/***/ }),

/***/ "./src/main/webapp/app/shared/language/language.helper.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(9);
var router_1 = __webpack_require__(3);
var core_2 = __webpack_require__(10);
var language_constants_1 = __webpack_require__("./src/main/webapp/app/shared/language/language.constants.ts");
var JhiLanguageHelper = (function () {
    function JhiLanguageHelper(translateService, titleService, router) {
        this.translateService = translateService;
        this.titleService = titleService;
        this.router = router;
        this.init();
    }
    JhiLanguageHelper.prototype.getAll = function () {
        return Promise.resolve(language_constants_1.LANGUAGES);
    };
    /**
     * Update the window title using params in the following
     * order:
     * 1. titleKey parameter
     * 2. $state.$current.data.pageTitle (current state page title)
     * 3. 'global.title'
     */
    JhiLanguageHelper.prototype.updateTitle = function (titleKey) {
        var _this = this;
        if (!titleKey) {
            titleKey = this.getPageTitle(this.router.routerState.snapshot.root);
        }
        this.translateService.get(titleKey).subscribe(function (title) {
            _this.titleService.setTitle(title);
        });
    };
    JhiLanguageHelper.prototype.init = function () {
        var _this = this;
        this.translateService.onTranslationChange.subscribe(function (event) {
            _this.updateTitle();
        });
        this.translateService.onLangChange.subscribe(function (event) {
            _this.updateTitle();
        });
    };
    JhiLanguageHelper.prototype.getPageTitle = function (routeSnapshot) {
        var title = (routeSnapshot.data && routeSnapshot.data['pageTitle']) ? routeSnapshot.data['pageTitle'] : 'neojhipsterApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    };
    return JhiLanguageHelper;
}());
JhiLanguageHelper = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_2.TranslateService, platform_browser_1.Title, router_1.Router])
], JhiLanguageHelper);
exports.JhiLanguageHelper = JhiLanguageHelper;


/***/ }),

/***/ "./src/main/webapp/app/shared/login/login-modal.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(5);
var login_component_1 = __webpack_require__("./src/main/webapp/app/shared/login/login.component.ts");
var LoginModalService = (function () {
    function LoginModalService(modalService) {
        this.modalService = modalService;
        this.isOpen = false;
    }
    LoginModalService.prototype.open = function () {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        var modalRef = this.modalService.open(login_component_1.JhiLoginModalComponent, {
            container: 'nav'
        });
        modalRef.result.then(function (result) {
            _this.isOpen = false;
        }, function (reason) {
            _this.isOpen = false;
        });
        return modalRef;
    };
    return LoginModalService;
}());
LoginModalService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal])
], LoginModalService);
exports.LoginModalService = LoginModalService;


/***/ }),

/***/ "./src/main/webapp/app/shared/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\"> <h4 class=\"modal-title\" jhiTranslate=\"login.title\">Sign in</h4> <button aria-label=\"Close\" data-dismiss=\"modal\" class=\"close\" type=\"button\" (click)=\"activeModal.dismiss('closed')\"><span aria-hidden=\"true\">x</span> </button> </div> <div class=\"modal-body\"> <div class=\"row\"> <div class=\"col-md-8 offset-md-2\"> <div class=\"alert alert-danger\" *ngIf=\"authenticationError\" jhiTranslate=\"login.messages.error.authentication\"> <strong>Failed to sign in!</strong> Please check your credentials and try again. </div> </div> <div class=\"col-md-8 offset-md-2\"> <form class=\"form\" role=\"form\" (ngSubmit)=\"login()\"> <div class=\"form-group\"> <label for=\"username\" jhiTranslate=\"global.form.username\">Login</label> <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" placeholder=\"{{'global.form.username.placeholder' | translate}}\" [(ngModel)]=\"username\"> </div> <div class=\"form-group\"> <label for=\"password\" jhiTranslate=\"login.form.password\">Password</label> <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"{{'login.form.password.placeholder' | translate}}\" [(ngModel)]=\"password\"> </div> <div class=\"form-check\"> <label class=\"form-check-label\" for=\"rememberMe\"> <input class=\"form-check-input\" type=\"checkbox\" name=\"rememberMe\" id=\"rememberMe\" [(ngModel)]=\"rememberMe\" checked=\"checked\"> <span jhiTranslate=\"login.form.rememberme\">Remember me</span> </label> </div> <button type=\"submit\" class=\"btn btn-primary\" jhiTranslate=\"login.form.button\">Sign in</button> </form> <p></p> <div class=\"alert alert-warning\"> <a class=\"alert-link\" (click)=\"requestResetPassword()\" jhiTranslate=\"login.password.forgot\">Did you forget your password?</a> </div> <div class=\"alert alert-warning\"> <span jhiTranslate=\"global.messages.info.register.noaccount\">You don't have an account yet?</span> <a class=\"alert-link\" (click)=\"register()\" jhiTranslate=\"global.messages.info.register.link\">Register a new account</a> </div> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/shared/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(5);
var router_1 = __webpack_require__(3);
var ng_jhipster_1 = __webpack_require__(2);
var login_service_1 = __webpack_require__("./src/main/webapp/app/shared/login/login.service.ts");
var state_storage_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/state-storage.service.ts");
var JhiLoginModalComponent = (function () {
    function JhiLoginModalComponent(eventManager, loginService, stateStorageService, elementRef, renderer, router, activeModal) {
        this.eventManager = eventManager;
        this.loginService = loginService;
        this.stateStorageService = stateStorageService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.router = router;
        this.activeModal = activeModal;
        this.credentials = {};
    }
    JhiLoginModalComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#username'), 'focus', []);
    };
    JhiLoginModalComponent.prototype.cancel = function () {
        this.credentials = {
            username: null,
            password: null,
            rememberMe: true
        };
        this.authenticationError = false;
        this.activeModal.dismiss('cancel');
    };
    JhiLoginModalComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login({
            username: this.username,
            password: this.password,
            rememberMe: this.rememberMe
        }).then(function () {
            _this.authenticationError = false;
            _this.activeModal.dismiss('login success');
            if (_this.router.url === '/register' || (/activate/.test(_this.router.url)) ||
                _this.router.url === '/finishReset' || _this.router.url === '/requestReset') {
                _this.router.navigate(['']);
            }
            _this.eventManager.broadcast({
                name: 'authenticationSuccess',
                content: 'Sending Authentication Success'
            });
            // // previousState was set in the authExpiredInterceptor before being redirected to login modal.
            // // since login is succesful, go to stored previousState and clear previousState
            var redirect = _this.stateStorageService.getUrl();
            if (redirect) {
                _this.router.navigate([redirect]);
            }
        }).catch(function () {
            _this.authenticationError = true;
        });
    };
    JhiLoginModalComponent.prototype.register = function () {
        this.activeModal.dismiss('to state register');
        this.router.navigate(['/register']);
    };
    JhiLoginModalComponent.prototype.requestResetPassword = function () {
        this.activeModal.dismiss('to state requestReset');
        this.router.navigate(['/reset', 'request']);
    };
    return JhiLoginModalComponent;
}());
JhiLoginModalComponent = __decorate([
    core_1.Component({
        selector: 'jhi-login-modal',
        template: __webpack_require__("./src/main/webapp/app/shared/login/login.component.html")
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiEventManager,
        login_service_1.LoginService,
        state_storage_service_1.StateStorageService,
        core_1.ElementRef,
        core_1.Renderer,
        router_1.Router,
        ng_bootstrap_1.NgbActiveModal])
], JhiLoginModalComponent);
exports.JhiLoginModalComponent = JhiLoginModalComponent;


/***/ }),

/***/ "./src/main/webapp/app/shared/login/login.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(2);
var principal_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/principal.service.ts");
var auth_jwt_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/auth-jwt.service.ts");
var LoginService = (function () {
    function LoginService(languageService, principal, authServerProvider) {
        this.languageService = languageService;
        this.principal = principal;
        this.authServerProvider = authServerProvider;
    }
    LoginService.prototype.login = function (credentials, callback) {
        var _this = this;
        var cb = callback || function () { };
        return new Promise(function (resolve, reject) {
            _this.authServerProvider.login(credentials).subscribe(function (data) {
                _this.principal.identity(true).then(function (account) {
                    // After the login the language will be changed to
                    // the language selected by the user during his registration
                    if (account !== null) {
                        _this.languageService.changeLanguage(account.langKey);
                    }
                    resolve(data);
                });
                return cb();
            }, function (err) {
                _this.logout();
                reject(err);
                return cb(err);
            });
        });
    };
    LoginService.prototype.loginWithToken = function (jwt, rememberMe) {
        return this.authServerProvider.loginWithToken(jwt, rememberMe);
    };
    LoginService.prototype.logout = function () {
        this.authServerProvider.logout().subscribe();
        this.principal.authenticate(null);
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        principal_service_1.Principal,
        auth_jwt_service_1.AuthServerProvider])
], LoginService);
exports.LoginService = LoginService;


/***/ }),

/***/ "./src/main/webapp/app/shared/model/request-util.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(4);
exports.createRequestOption = function (req) {
    var options = new http_1.BaseRequestOptions();
    if (req) {
        var params = new http_1.URLSearchParams();
        params.set('page', req.page);
        params.set('size', req.size);
        if (req.sort) {
            params.paramsMap.set('sort', req.sort);
        }
        params.set('query', req.query);
        options.params = params;
    }
    return options;
};


/***/ }),

/***/ "./src/main/webapp/app/shared/model/response-wrapper.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ResponseWrapper = (function () {
    function ResponseWrapper(headers, json, status) {
        this.headers = headers;
        this.json = json;
        this.status = status;
    }
    return ResponseWrapper;
}());
exports.ResponseWrapper = ResponseWrapper;


/***/ }),

/***/ "./src/main/webapp/app/shared/shared-common.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(9);
var _1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var NeojhipsterSharedCommonModule = (function () {
    function NeojhipsterSharedCommonModule() {
    }
    return NeojhipsterSharedCommonModule;
}());
NeojhipsterSharedCommonModule = __decorate([
    core_1.NgModule({
        imports: [
            _1.NeojhipsterSharedLibsModule
        ],
        declarations: [
            _1.FindLanguageFromKeyPipe,
            _1.JhiAlertComponent,
            _1.JhiAlertErrorComponent
        ],
        providers: [
            _1.JhiLanguageHelper,
            platform_browser_1.Title
        ],
        exports: [
            _1.NeojhipsterSharedLibsModule,
            _1.FindLanguageFromKeyPipe,
            _1.JhiAlertComponent,
            _1.JhiAlertErrorComponent
        ]
    })
], NeojhipsterSharedCommonModule);
exports.NeojhipsterSharedCommonModule = NeojhipsterSharedCommonModule;


/***/ }),

/***/ "./src/main/webapp/app/shared/shared-libs.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(16);
var http_1 = __webpack_require__(4);
var common_1 = __webpack_require__(11);
var ng_bootstrap_1 = __webpack_require__(5);
var ng_jhipster_1 = __webpack_require__(2);
var ngx_infinite_scroll_1 = __webpack_require__(17);
var ngx_cookie_1 = __webpack_require__(12);
var NeojhipsterSharedLibsModule = (function () {
    function NeojhipsterSharedLibsModule() {
    }
    return NeojhipsterSharedLibsModule;
}());
NeojhipsterSharedLibsModule = __decorate([
    core_1.NgModule({
        imports: [
            ng_bootstrap_1.NgbModule.forRoot(),
            ng_jhipster_1.NgJhipsterModule.forRoot({
                // set below to true to make alerts look like toast
                alertAsToast: false,
                i18nEnabled: true,
                defaultI18nLang: 'en'
            }),
            ngx_infinite_scroll_1.InfiniteScrollModule,
            ngx_cookie_1.CookieModule.forRoot()
        ],
        exports: [
            forms_1.FormsModule,
            http_1.HttpModule,
            common_1.CommonModule,
            ng_bootstrap_1.NgbModule,
            ng_jhipster_1.NgJhipsterModule,
            ngx_infinite_scroll_1.InfiniteScrollModule
        ]
    })
], NeojhipsterSharedLibsModule);
exports.NeojhipsterSharedLibsModule = NeojhipsterSharedLibsModule;


/***/ }),

/***/ "./src/main/webapp/app/shared/shared.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(11);
var _1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var NeojhipsterSharedModule = (function () {
    function NeojhipsterSharedModule() {
    }
    return NeojhipsterSharedModule;
}());
NeojhipsterSharedModule = __decorate([
    core_1.NgModule({
        imports: [
            _1.NeojhipsterSharedLibsModule,
            _1.NeojhipsterSharedCommonModule
        ],
        declarations: [
            _1.JhiLoginModalComponent,
            _1.HasAnyAuthorityDirective
        ],
        providers: [
            _1.LoginService,
            _1.LoginModalService,
            _1.AccountService,
            _1.StateStorageService,
            _1.Principal,
            _1.CSRFService,
            _1.AuthServerProvider,
            _1.UserService,
            common_1.DatePipe
        ],
        entryComponents: [_1.JhiLoginModalComponent],
        exports: [
            _1.NeojhipsterSharedCommonModule,
            _1.JhiLoginModalComponent,
            _1.HasAnyAuthorityDirective,
            common_1.DatePipe
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], NeojhipsterSharedModule);
exports.NeojhipsterSharedModule = NeojhipsterSharedModule;


/***/ }),

/***/ "./src/main/webapp/app/shared/user/account.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Account = (function () {
    function Account(activated, authorities, email, firstName, langKey, lastName, login, imageUrl) {
        this.activated = activated;
        this.authorities = authorities;
        this.email = email;
        this.firstName = firstName;
        this.langKey = langKey;
        this.lastName = lastName;
        this.login = login;
        this.imageUrl = imageUrl;
    }
    return Account;
}());
exports.Account = Account;


/***/ }),

/***/ "./src/main/webapp/app/shared/user/user.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(id, login, firstName, lastName, email, activated, langKey, authorities, createdBy, createdDate, lastModifiedBy, lastModifiedDate, password) {
        this.id = id ? id : null;
        this.login = login ? login : null;
        this.firstName = firstName ? firstName : null;
        this.lastName = lastName ? lastName : null;
        this.email = email ? email : null;
        this.activated = activated ? activated : false;
        this.langKey = langKey ? langKey : null;
        this.authorities = authorities ? authorities : null;
        this.createdBy = createdBy ? createdBy : null;
        this.createdDate = createdDate ? createdDate : null;
        this.lastModifiedBy = lastModifiedBy ? lastModifiedBy : null;
        this.lastModifiedDate = lastModifiedDate ? lastModifiedDate : null;
        this.password = password ? password : null;
    }
    return User;
}());
exports.User = User;


/***/ }),

/***/ "./src/main/webapp/app/shared/user/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var response_wrapper_model_1 = __webpack_require__("./src/main/webapp/app/shared/model/response-wrapper.model.ts");
var request_util_1 = __webpack_require__("./src/main/webapp/app/shared/model/request-util.ts");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.resourceUrl = 'api/users';
    }
    UserService.prototype.create = function (user) {
        var _this = this;
        return this.http.post(this.resourceUrl, user)
            .map(function (res) { return _this.convertResponse(res); });
    };
    UserService.prototype.update = function (user) {
        var _this = this;
        return this.http.put(this.resourceUrl, user)
            .map(function (res) { return _this.convertResponse(res); });
    };
    UserService.prototype.find = function (login) {
        return this.http.get(this.resourceUrl + "/" + login).map(function (res) { return res.json(); });
    };
    UserService.prototype.query = function (req) {
        var _this = this;
        var options = request_util_1.createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map(function (res) { return _this.convertResponse(res); });
    };
    UserService.prototype.delete = function (login) {
        return this.http.delete(this.resourceUrl + "/" + login);
    };
    UserService.prototype.authorities = function () {
        return this.http.get('api/users/authorities').map(function (res) {
            var json = res.json();
            return json;
        });
    };
    UserService.prototype.convertResponse = function (res) {
        var jsonResponse = res.json();
        return new response_wrapper_model_1.ResponseWrapper(res.headers, jsonResponse, res.status);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ "./src/main/webapp/content/images/hipster.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "content/ca854e6d0785ba4b9d715049c0bdbcb3.png";

/***/ }),

/***/ "./src/main/webapp/content/images/hipster2x.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "content/1cd3a1d782e85ba37677c1a2099bc002.png";

/***/ }),

/***/ "./src/main/webapp/content/images/logo-jhipster.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "content/a30deb26b4eb1521433021e326cbcc2c.png";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1);

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(66);

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(7);

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(212);

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(206);

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(13);

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(213);

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(214);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(210);

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(5);

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(85);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(207);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(49);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(208);

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(211);

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(0);

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(24);

/***/ })

},["./src/main/webapp/app/app.main.ts"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQtc3RyZW5ndGgtYmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9wcm9maWxlcy9wYWdlLXJpYmJvbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY2NvdW50Lm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWNjb3VudC5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWN0aXZhdGUvYWN0aXZhdGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2FjdGl2YXRlL2FjdGl2YXRlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWN0aXZhdGUvYWN0aXZhdGUucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2FjdGl2YXRlL2FjdGl2YXRlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9maW5pc2gvcGFzc3dvcmQtcmVzZXQtZmluaXNoLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9maW5pc2gvcGFzc3dvcmQtcmVzZXQtZmluaXNoLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvZmluaXNoL3Bhc3N3b3JkLXJlc2V0LWZpbmlzaC5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvZmluaXNoL3Bhc3N3b3JkLXJlc2V0LWZpbmlzaC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9pbml0L3Bhc3N3b3JkLXJlc2V0LWluaXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2luaXQvcGFzc3dvcmQtcmVzZXQtaW5pdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2luaXQvcGFzc3dvcmQtcmVzZXQtaW5pdC5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvaW5pdC9wYXNzd29yZC1yZXNldC1pbml0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLXN0cmVuZ3RoLWJhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLXN0cmVuZ3RoLWJhci5zY3NzP2Y5MTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9yZWdpc3Rlci9yZWdpc3Rlci5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvc2V0dGluZ3Mvc2V0dGluZ3Mucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hZG1pbi5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hZG1pbi5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdC1kYXRhLm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYXVkaXRzL2F1ZGl0Lm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYXVkaXRzL2F1ZGl0cy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYXVkaXRzL2F1ZGl0cy5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdHMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24ucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2RvY3MvZG9jcy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2RvY3MvZG9jcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9kb2NzL2RvY3Mucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9oZWFsdGgvaGVhbHRoLW1vZGFsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC1tb2RhbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9oZWFsdGgvaGVhbHRoLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9oZWFsdGgvaGVhbHRoLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZy5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ3MvbG9ncy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ3MvbG9ncy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZ3Mucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZ3Muc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy1tb2RhbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy1tb2RhbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3MuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3MuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbWV0cmljcy9tZXRyaWNzLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbWV0cmljcy9tZXRyaWNzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZXRhaWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRldGFpbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRpYWxvZy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGlhbG9nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tb2RhbC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYXBwLmNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9jb25maWcvcHJvZC5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvY29uZmlnL3VpYi1wYWdpbmF0aW9uLmNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9pbnRlcmNlcHRvci9hdXRoLWV4cGlyZWQuaW50ZXJjZXB0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3IvYXV0aC5pbnRlcmNlcHRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9pbnRlcmNlcHRvci9lcnJvcmhhbmRsZXIuaW50ZXJjZXB0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3IvaHR0cC5wcm92aWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9pbnRlcmNlcHRvci9ub3RpZmljYXRpb24uaW50ZXJjZXB0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9lbnRpdHkubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuc2Nzcz80NjMzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvZXJyb3IvZXJyb3IuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvZXJyb3IvZXJyb3Iucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbGF5b3V0LXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9tYWluL21haW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL21haW4vbWFpbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9hY3RpdmUtbWVudS5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLnNjc3M/YzdkOSIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvcHJvZmlsZXMvcGFnZS1yaWJib24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9wcm9maWxlcy9wYWdlLXJpYmJvbi5zY3NzP2QwNjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3Byb2ZpbGVzL3Byb2ZpbGUtaW5mby5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvcHJvZmlsZXMvcHJvZmlsZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2FsZXJ0L2FsZXJ0LWVycm9yLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hbGVydC9hbGVydC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYXV0aC9hY2NvdW50LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYXV0aC9hdXRoLWp3dC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvY3NyZi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvaGFzLWFueS1hdXRob3JpdHkuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvcHJpbmNpcGFsLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYXV0aC9zdGF0ZS1zdG9yYWdlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYXV0aC91c2VyLXJvdXRlLWFjY2Vzcy1zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2NvbnN0YW50cy9wYWdpbmF0aW9uLmNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9sYW5ndWFnZS9maW5kLWxhbmd1YWdlLWZyb20ta2V5LnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbGFuZ3VhZ2UvbGFuZ3VhZ2UuY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xhbmd1YWdlL2xhbmd1YWdlLmhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9sb2dpbi9sb2dpbi1tb2RhbC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9sb2dpbi9sb2dpbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL21vZGVsL3JlcXVlc3QtdXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9tb2RlbC9yZXNwb25zZS13cmFwcGVyLm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3NoYXJlZC1jb21tb24ubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3NoYXJlZC1saWJzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3VzZXIvYWNjb3VudC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC91c2VyL3VzZXIubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvaW1hZ2VzL2hpcHN0ZXIucG5nIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9jb250ZW50L2ltYWdlcy9oaXBzdGVyMngucG5nIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9jb250ZW50L2ltYWdlcy9sb2dvLWpoaXBzdGVyLnBuZyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvQGFuZ3VsYXIvY29yZS5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0BuZ3gtdHJhbnNsYXRlL2NvcmUvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvbW1vbi9AYW5ndWxhci9jb21tb24uZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9uZ3gtY29va2llL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvZm9ybXMvQGFuZ3VsYXIvZm9ybXMuZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9uZ3gtaW5maW5pdGUtc2Nyb2xsL21vZHVsZXMvbmd4LWluZmluaXRlLXNjcm9sbC5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vc3JjL21haW4vd2ViYXBwL2FwcC92ZW5kb3IudHMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL25nLWpoaXBzdGVyL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL1N1YmplY3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvUnguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3JvdXRlci9AYW5ndWxhci9yb3V0ZXIuZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9odHRwL0Bhbmd1bGFyL2h0dHAuZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmcyLXdlYnN0b3JhZ2UvZGlzdC9hcHAuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvT2JzZXJ2YWJsZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7O0FBR0E7QUFDQSx1T0FBd08sb0JBQW9CLHFCQUFxQixjQUFjLHNCQUFzQixlQUFlLHdCQUF3QixFQUFFLFlBQVkscUJBQXFCLHVCQUF1QiwwQkFBMEIsZ0JBQWdCLHNCQUFzQixnQkFBZ0Is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LCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbnN0YXJ0IFBhc3N3b3JkIHN0cmVuZ3RoIGJhciBzdHlsZVxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxudWwjc3RyZW5ndGgge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgcGFkZGluZzogMDtcXG4gIHZlcnRpY2FsLWFsaWduOiAycHg7IH1cXG5cXG4ucG9pbnQge1xcbiAgYmFja2dyb3VuZDogI0RERDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XFxuICB3aWR0aDogMjBweDsgfVxcbiAgLnBvaW50Omxhc3Qge1xcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLXN0cmVuZ3RoLWJhci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQtc3RyZW5ndGgtYmFyLnNjc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5NYWluIHBhZ2Ugc3R5bGVzXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uaGlwc3RlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMzQ3cHg7XFxuICBoZWlnaHQ6IDQ5N3B4O1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgcmVxdWlyZShcIi4uLy4uL2NvbnRlbnQvaW1hZ2VzL2hpcHN0ZXIucG5nXCIpICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyB9XFxuXFxuLyogd2FpdCBhdXRvcHJlZml4ZXIgdXBkYXRlIHRvIGFsbG93IHNpbXBsZSBnZW5lcmF0aW9uIG9mIGhpZ2ggcGl4ZWwgZGVuc2l0eSBtZWRpYSBxdWVyeSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIG9ubHkgc2NyZWVuIGFuZCAobWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwgb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyIC8gMSksIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSksIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDJkcHB4KSB7XFxuICAuaGlwc3RlciB7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIHJlcXVpcmUoXCIuLi8uLi9jb250ZW50L2ltYWdlcy9oaXBzdGVyMngucG5nXCIpICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47IH0gfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbk5hdmJhclxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLm5hdmJhci12ZXJzaW9uIHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGNvbG9yOiAjY2NjOyB9XFxuXFxuLmpoLW5hdmJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzZDQ3O1xcbiAgcGFkZGluZzogLjJlbSAxZW07IH1cXG4gIC5qaC1uYXZiYXIgLnByb2ZpbGUtaW1hZ2Uge1xcbiAgICBtYXJnaW46IC0xMHB4IDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyB9XFxuICAuamgtbmF2YmFyIC5kcm9wZG93bi1pdGVtLmFjdGl2ZSwgLmpoLW5hdmJhciAuZHJvcGRvd24taXRlbS5hY3RpdmU6Zm9jdXMsIC5qaC1uYXZiYXIgLmRyb3Bkb3duLWl0ZW0uYWN0aXZlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1M2Q0NzsgfVxcbiAgLmpoLW5hdmJhciAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjE1ZW07IH1cXG4gIC5qaC1uYXZiYXIgdWwubmF2YmFyLW5hdiB7XFxuICAgIHBhZGRpbmc6IDAuNWVtOyB9XFxuICAgIC5qaC1uYXZiYXIgdWwubmF2YmFyLW5hdiAubmF2LWl0ZW0ge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07IH1cXG4gIC5qaC1uYXZiYXIgYS5uYXYtbGluayB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7IH1cXG4gIC5qaC1uYXZiYXIgLmpoLW5hdmJhci10b2dnbGVyIHtcXG4gICAgY29sb3I6ICNjY2M7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIHBhZGRpbmc6IDEwcHg7IH1cXG4gICAgLmpoLW5hdmJhciAuamgtbmF2YmFyLXRvZ2dsZXI6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjZmZmOyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcXG4gIC5qaC1sb2dvLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlOyB9IH1cXG5cXG4ubmF2YmFyLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbkxvZ28gc3R5bGVzXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4ubmF2YmFyLWJyYW5kLmxvZ28ge1xcbiAgcGFkZGluZzogNXB4IDE1cHg7IH1cXG4gIC5uYXZiYXItYnJhbmQubG9nbyAubG9nby1pbWcge1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIHJlcXVpcmUoXCIuLi8uLi8uLi9jb250ZW50L2ltYWdlcy9sb2dvLWpoaXBzdGVyLnBuZ1wiKSArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuRGV2ZWxvcGVtZW50IFJpYmJvblxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLnJpYmJvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MCwgMCwgMCwgMC41KTtcXG4gIGxlZnQ6IC0zLjVlbTtcXG4gIG1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIG8tdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIHdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQwcHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgd2lkdGg6IDE1ZW07XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwLjc1OyB9XFxuICAucmliYm9uIGEge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIG1hcmdpbjogMXB4IDA7XFxuICAgIHBhZGRpbmc6IDEwcHggNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICM0NDQ7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvcHJvZmlsZXMvcGFnZS1yaWJib24uc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3Byb2ZpbGVzL3BhZ2UtcmliYm9uLnNjc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE5lb2poaXBzdGVyU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkJztcblxuaW1wb3J0IHtcbiAgICBSZWdpc3RlcixcbiAgICBBY3RpdmF0ZVNlcnZpY2UsXG4gICAgUGFzc3dvcmRTZXJ2aWNlLFxuICAgIFBhc3N3b3JkUmVzZXRJbml0U2VydmljZSxcbiAgICBQYXNzd29yZFJlc2V0RmluaXNoU2VydmljZSxcbiAgICBQYXNzd29yZFN0cmVuZ3RoQmFyQ29tcG9uZW50LFxuICAgIFJlZ2lzdGVyQ29tcG9uZW50LFxuICAgIEFjdGl2YXRlQ29tcG9uZW50LFxuICAgIFBhc3N3b3JkQ29tcG9uZW50LFxuICAgIFBhc3N3b3JkUmVzZXRJbml0Q29tcG9uZW50LFxuICAgIFBhc3N3b3JkUmVzZXRGaW5pc2hDb21wb25lbnQsXG4gICAgU2V0dGluZ3NDb21wb25lbnQsXG4gICAgYWNjb3VudFN0YXRlXG59IGZyb20gJy4vJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5lb2poaXBzdGVyU2hhcmVkTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChhY2NvdW50U3RhdGUsIHsgdXNlSGFzaDogdHJ1ZSB9KVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFjdGl2YXRlQ29tcG9uZW50LFxuICAgICAgICBSZWdpc3RlckNvbXBvbmVudCxcbiAgICAgICAgUGFzc3dvcmRDb21wb25lbnQsXG4gICAgICAgIFBhc3N3b3JkU3RyZW5ndGhCYXJDb21wb25lbnQsXG4gICAgICAgIFBhc3N3b3JkUmVzZXRJbml0Q29tcG9uZW50LFxuICAgICAgICBQYXNzd29yZFJlc2V0RmluaXNoQ29tcG9uZW50LFxuICAgICAgICBTZXR0aW5nc0NvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFJlZ2lzdGVyLFxuICAgICAgICBBY3RpdmF0ZVNlcnZpY2UsXG4gICAgICAgIFBhc3N3b3JkU2VydmljZSxcbiAgICAgICAgUGFzc3dvcmRSZXNldEluaXRTZXJ2aWNlLFxuICAgICAgICBQYXNzd29yZFJlc2V0RmluaXNoU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIE5lb2poaXBzdGVyQWNjb3VudE1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2FjY291bnQubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtcbiAgICBhY3RpdmF0ZVJvdXRlLFxuICAgIHBhc3N3b3JkUm91dGUsXG4gICAgcGFzc3dvcmRSZXNldEZpbmlzaFJvdXRlLFxuICAgIHBhc3N3b3JkUmVzZXRJbml0Um91dGUsXG4gICAgcmVnaXN0ZXJSb3V0ZSxcbiAgICBzZXR0aW5nc1JvdXRlXG59IGZyb20gJy4vJztcblxuY29uc3QgQUNDT1VOVF9ST1VURVMgPSBbXG4gICAgYWN0aXZhdGVSb3V0ZSxcbiAgICBwYXNzd29yZFJvdXRlLFxuICAgIHBhc3N3b3JkUmVzZXRGaW5pc2hSb3V0ZSxcbiAgICBwYXNzd29yZFJlc2V0SW5pdFJvdXRlLFxuICAgIHJlZ2lzdGVyUm91dGUsXG4gICAgc2V0dGluZ3NSb3V0ZVxuXTtcblxuZXhwb3J0IGNvbnN0IGFjY291bnRTdGF0ZTogUm91dGVzID0gW3tcbiAgICBwYXRoOiAnJyxcbiAgICBjaGlsZHJlbjogQUNDT1VOVF9ST1VURVNcbn1dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2FjY291bnQucm91dGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj4gPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTggb2Zmc2V0LW1kLTJcXFwiPiA8aDEgamhpVHJhbnNsYXRlPVxcXCJhY3RpdmF0ZS50aXRsZVxcXCI+QWN0aXZhdGlvbjwvaDE+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcXFwiICpuZ0lmPVxcXCJzdWNjZXNzXFxcIj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJhY3RpdmF0ZS5tZXNzYWdlcy5zdWNjZXNzXFxcIj48c3Ryb25nPllvdXIgdXNlciBhY2NvdW50IGhhcyBiZWVuIGFjdGl2YXRlZC48L3N0cm9uZz4gUGxlYXNlIDwvc3Bhbj4gPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIChjbGljayk9XFxcImxvZ2luKClcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLmluZm8uYXV0aGVudGljYXRlZC5saW5rXFxcIj5zaWduIGluPC9hPi4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVycm9yXFxcIiBqaGlUcmFuc2xhdGU9XFxcImFjdGl2YXRlLm1lc3NhZ2VzLmVycm9yXFxcIj4gPHN0cm9uZz5Zb3VyIHVzZXIgY291bGQgbm90IGJlIGFjdGl2YXRlZC48L3N0cm9uZz4gUGxlYXNlIHVzZSB0aGUgcmVnaXN0cmF0aW9uIGZvcm0gdG8gc2lnbiB1cC4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2FjdGl2YXRlL2FjdGl2YXRlLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY3RpdmF0ZS9hY3RpdmF0ZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFjdGl2YXRlU2VydmljZSB9IGZyb20gJy4vYWN0aXZhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBMb2dpbk1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWFjdGl2YXRlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWN0aXZhdGUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2YXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBlcnJvcjogc3RyaW5nO1xuICAgIHN1Y2Nlc3M6IHN0cmluZztcbiAgICBtb2RhbFJlZjogTmdiTW9kYWxSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZVNlcnZpY2U6IEFjdGl2YXRlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBsb2dpbk1vZGFsU2VydmljZTogTG9naW5Nb2RhbFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVTZXJ2aWNlLmdldChwYXJhbXNbJ2tleSddKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9ICdPSyc7XG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gJ0VSUk9SJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMubG9naW5Nb2RhbFNlcnZpY2Uub3BlbigpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY3RpdmF0ZS9hY3RpdmF0ZS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFVzZXJSb3V0ZUFjY2Vzc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgQWN0aXZhdGVDb21wb25lbnQgfSBmcm9tICcuL2FjdGl2YXRlLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBhY3RpdmF0ZVJvdXRlOiBSb3V0ZSA9IHtcbiAgICBwYXRoOiAnYWN0aXZhdGUnLFxuICAgIGNvbXBvbmVudDogQWN0aXZhdGVDb21wb25lbnQsXG4gICAgZGF0YToge1xuICAgICAgICBhdXRob3JpdGllczogW10sXG4gICAgICAgIHBhZ2VUaXRsZTogJ2FjdGl2YXRlLnRpdGxlJ1xuICAgIH0sXG4gICAgY2FuQWN0aXZhdGU6IFtVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlXVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY3RpdmF0ZS9hY3RpdmF0ZS5yb3V0ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjdGl2YXRlU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XG5cbiAgICBnZXQoa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBjb25zdCBwYXJhbXM6IFVSTFNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgcGFyYW1zLnNldCgna2V5Jywga2V5KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnYXBpL2FjdGl2YXRlJywge1xuICAgICAgICAgICAgc2VhcmNoOiBwYXJhbXNcbiAgICAgICAgfSkubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY3RpdmF0ZS9hY3RpdmF0ZS5zZXJ2aWNlLnRzIiwiZXhwb3J0ICogZnJvbSAnLi9hY3RpdmF0ZS9hY3RpdmF0ZS5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9hY3RpdmF0ZS9hY3RpdmF0ZS5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYWN0aXZhdGUvYWN0aXZhdGUucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXNzd29yZC9wYXNzd29yZC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXNzd29yZC9wYXNzd29yZC1zdHJlbmd0aC1iYXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vcGFzc3dvcmQvcGFzc3dvcmQuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3Bhc3N3b3JkL3Bhc3N3b3JkLnJvdXRlJztcbmV4cG9ydCAqIGZyb20gJy4vcGFzc3dvcmQtcmVzZXQvZmluaXNoL3Bhc3N3b3JkLXJlc2V0LWZpbmlzaC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXNzd29yZC1yZXNldC9maW5pc2gvcGFzc3dvcmQtcmVzZXQtZmluaXNoLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXNzd29yZC1yZXNldC9maW5pc2gvcGFzc3dvcmQtcmVzZXQtZmluaXNoLnJvdXRlJztcbmV4cG9ydCAqIGZyb20gJy4vcGFzc3dvcmQtcmVzZXQvaW5pdC9wYXNzd29yZC1yZXNldC1pbml0LmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3Bhc3N3b3JkLXJlc2V0L2luaXQvcGFzc3dvcmQtcmVzZXQtaW5pdC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcGFzc3dvcmQtcmVzZXQvaW5pdC9wYXNzd29yZC1yZXNldC1pbml0LnJvdXRlJztcbmV4cG9ydCAqIGZyb20gJy4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vcmVnaXN0ZXIvcmVnaXN0ZXIuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3JlZ2lzdGVyL3JlZ2lzdGVyLnJvdXRlJztcbmV4cG9ydCAqIGZyb20gJy4vc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vc2V0dGluZ3Mvc2V0dGluZ3Mucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9hY2NvdW50LnJvdXRlJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9pbmRleC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNCBjb2wtbWQtb2Zmc2V0LTRcXFwiPiA8aDEgamhpVHJhbnNsYXRlPVxcXCJyZXNldC5maW5pc2gudGl0bGVcXFwiPlJlc2V0IHBhc3N3b3JkPC9oMT4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiBqaGlUcmFuc2xhdGU9XFxcInJlc2V0LmZpbmlzaC5tZXNzYWdlcy5rZXltaXNzaW5nXFxcIiAqbmdJZj1cXFwia2V5TWlzc2luZ1xcXCI+IDxzdHJvbmc+VGhlIHBhc3N3b3JkIHJlc2V0IGtleSBpcyBtaXNzaW5nLjwvc3Ryb25nPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtd2FybmluZ1xcXCIgKm5nSWY9XFxcIiFzdWNjZXNzICYmICFrZXlNaXNzaW5nXFxcIj4gPHAgamhpVHJhbnNsYXRlPVxcXCJyZXNldC5maW5pc2gubWVzc2FnZXMuaW5mb1xcXCI+Q2hvb3NlIGEgbmV3IHBhc3N3b3JkPC9wPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZXJyb3JcXFwiPiA8cCBqaGlUcmFuc2xhdGU9XFxcInJlc2V0LmZpbmlzaC5tZXNzYWdlcy5lcnJvclxcXCI+WW91ciBwYXNzd29yZCBjb3VsZG4ndCBiZSByZXNldC4gUmVtZW1iZXIgYSBwYXNzd29yZCByZXF1ZXN0IGlzIG9ubHkgdmFsaWQgZm9yIDI0IGhvdXJzLjwvcD4gPC9kaXY+IDxwIGNsYXNzPVxcXCJhbGVydCBhbGVydC1zdWNjZXNzXFxcIiAqbmdJZj1cXFwic3VjY2Vzc1xcXCI+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwicmVzZXQuZmluaXNoLm1lc3NhZ2VzLnN1Y2Nlc3NcXFwiPjxzdHJvbmc+WW91ciBwYXNzd29yZCBoYXMgYmVlbiByZXNldC48L3N0cm9uZz4gUGxlYXNlIDwvc3Bhbj4gPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIChjbGljayk9XFxcImxvZ2luKClcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLmluZm8uYXV0aGVudGljYXRlZC5saW5rXFxcIj5zaWduIGluPC9hPi4gPC9wPiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJkb05vdE1hdGNoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy5lcnJvci5kb250bWF0Y2hcXFwiPiBUaGUgcGFzc3dvcmQgYW5kIGl0cyBjb25maXJtYXRpb24gZG8gbm90IG1hdGNoISA8L2Rpdj4gPGRpdiAqbmdJZj1cXFwiIWtleU1pc3NpbmdcXFwiPiA8Zm9ybSAqbmdJZj1cXFwiIXN1Y2Nlc3NcXFwiIG5hbWU9XFxcImZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcImZpbmlzaFJlc2V0KClcXFwiICNwYXNzd29yZEZvcm09XFxcIm5nRm9ybVxcXCI+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJwYXNzd29yZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwuZm9ybS5uZXdwYXNzd29yZFxcXCI+TmV3IHBhc3N3b3JkPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiAjcGFzc3dvcmRJbnB1dD1cXFwibmdNb2RlbFxcXCIgcGxhY2Vob2xkZXI9XFxcInt7J2dsb2JhbC5mb3JtLm5ld3Bhc3N3b3JkLnBsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZX19XFxcIiBbKG5nTW9kZWwpXT1cXFwicmVzZXRBY2NvdW50LnBhc3N3b3JkXFxcIiBtaW5sZW5ndGg9XFxcIjRcXFwiIG1heGxlbmd0aD1cXFwiNTBcXFwiIHJlcXVpcmVkPiA8ZGl2ICpuZ0lmPVxcXCJwYXNzd29yZElucHV0LmRpcnR5ICYmIHBhc3N3b3JkSW5wdXQuaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwicGFzc3dvcmRJbnB1dC5lcnJvcnMucmVxdWlyZWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLm5ld3Bhc3N3b3JkLnJlcXVpcmVkXFxcIj4gWW91ciBwYXNzd29yZCBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJwYXNzd29yZElucHV0LmVycm9ycy5taW5sZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLm5ld3Bhc3N3b3JkLm1pbmxlbmd0aFxcXCI+IFlvdXIgcGFzc3dvcmQgaXMgcmVxdWlyZWQgdG8gYmUgYXQgbGVhc3QgNCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcInBhc3N3b3JkSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUubmV3cGFzc3dvcmQubWF4bGVuZ3RoXFxcIj4gWW91ciBwYXNzd29yZCBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gNTAgY2hhcmFjdGVycy4gPC9zbWFsbD4gPC9kaXY+IDxqaGktcGFzc3dvcmQtc3RyZW5ndGgtYmFyIFtwYXNzd29yZFRvQ2hlY2tdPVxcXCJyZXNldEFjY291bnQucGFzc3dvcmRcXFwiPjwvamhpLXBhc3N3b3JkLXN0cmVuZ3RoLWJhcj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLmZvcm0uY29uZmlybXBhc3N3b3JkXFxcIj5OZXcgcGFzc3dvcmQgY29uZmlybWF0aW9uPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBuYW1lPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiICNjb25maXJtUGFzc3dvcmRJbnB1dD1cXFwibmdNb2RlbFxcXCIgcGxhY2Vob2xkZXI9XFxcInt7J2dsb2JhbC5mb3JtLmNvbmZpcm1wYXNzd29yZC5wbGFjZWhvbGRlcicgfCB0cmFuc2xhdGV9fVxcXCIgWyhuZ01vZGVsKV09XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgbWlubGVuZ3RoPVxcXCI0XFxcIiBtYXhsZW5ndGg9XFxcIjUwXFxcIiByZXF1aXJlZD4gPGRpdiAqbmdJZj1cXFwiY29uZmlybVBhc3N3b3JkSW5wdXQuZGlydHkgJiYgY29uZmlybVBhc3N3b3JkSW5wdXQuaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiY29uZmlybVBhc3N3b3JkSW5wdXQuZXJyb3JzLnJlcXVpcmVkXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5jb25maXJtcGFzc3dvcmQucmVxdWlyZWRcXFwiPiBZb3VyIHBhc3N3b3JkIGNvbmZpcm1hdGlvbiBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJjb25maXJtUGFzc3dvcmRJbnB1dC5lcnJvcnMubWlubGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5jb25maXJtcGFzc3dvcmQubWlubGVuZ3RoXFxcIj4gWW91ciBwYXNzd29yZCBjb25maXJtYXRpb24gaXMgcmVxdWlyZWQgdG8gYmUgYXQgbGVhc3QgNCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImNvbmZpcm1QYXNzd29yZElucHV0LmVycm9ycy5tYXhsZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmNvbmZpcm1wYXNzd29yZC5tYXhsZW5ndGhcXFwiPiBZb3VyIHBhc3N3b3JkIGNvbmZpcm1hdGlvbiBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gNTAgY2hhcmFjdGVycy4gPC9zbWFsbD4gPC9kaXY+IDwvZGl2PiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwicGFzc3dvcmRGb3JtLmZvcm0uaW52YWxpZFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgamhpVHJhbnNsYXRlPVxcXCJyZXNldC5maW5pc2guZm9ybS5idXR0b25cXFwiPlJlc2V0IFBhc3N3b3JkPC9idXR0b24+IDwvZm9ybT4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2ZpbmlzaC9wYXNzd29yZC1yZXNldC1maW5pc2guY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2ZpbmlzaC9wYXNzd29yZC1yZXNldC1maW5pc2guY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIFJlbmRlcmVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbFJlZiB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgUGFzc3dvcmRSZXNldEZpbmlzaFNlcnZpY2UgfSBmcm9tICcuL3Bhc3N3b3JkLXJlc2V0LWZpbmlzaC5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2luTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktcGFzc3dvcmQtcmVzZXQtZmluaXNoJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGFzc3dvcmQtcmVzZXQtZmluaXNoLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBQYXNzd29yZFJlc2V0RmluaXNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgICBjb25maXJtUGFzc3dvcmQ6IHN0cmluZztcbiAgICBkb05vdE1hdGNoOiBzdHJpbmc7XG4gICAgZXJyb3I6IHN0cmluZztcbiAgICBrZXlNaXNzaW5nOiBib29sZWFuO1xuICAgIHJlc2V0QWNjb3VudDogYW55O1xuICAgIHN1Y2Nlc3M6IHN0cmluZztcbiAgICBtb2RhbFJlZjogTmdiTW9kYWxSZWY7XG4gICAga2V5OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwYXNzd29yZFJlc2V0RmluaXNoU2VydmljZTogUGFzc3dvcmRSZXNldEZpbmlzaFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbG9naW5Nb2RhbFNlcnZpY2U6IExvZ2luTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlclxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmtleSA9IHBhcmFtc1sna2V5J107XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlc2V0QWNjb3VudCA9IHt9O1xuICAgICAgICB0aGlzLmtleU1pc3NpbmcgPSAhdGhpcy5rZXk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkJykgIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQnKSwgJ2ZvY3VzJywgW10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluaXNoUmVzZXQoKSB7XG4gICAgICAgIHRoaXMuZG9Ob3RNYXRjaCA9IG51bGw7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5yZXNldEFjY291bnQucGFzc3dvcmQgIT09IHRoaXMuY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgICAgICB0aGlzLmRvTm90TWF0Y2ggPSAnRVJST1InO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wYXNzd29yZFJlc2V0RmluaXNoU2VydmljZS5zYXZlKHtrZXk6IHRoaXMua2V5LCBuZXdQYXNzd29yZDogdGhpcy5yZXNldEFjY291bnQucGFzc3dvcmR9KS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9ICdPSyc7XG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gJ0VSUk9SJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9naW4oKSB7XG4gICAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLmxvZ2luTW9kYWxTZXJ2aWNlLm9wZW4oKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvZmluaXNoL3Bhc3N3b3JkLXJlc2V0LWZpbmlzaC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFVzZXJSb3V0ZUFjY2Vzc1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgUGFzc3dvcmRSZXNldEZpbmlzaENvbXBvbmVudCB9IGZyb20gJy4vcGFzc3dvcmQtcmVzZXQtZmluaXNoLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBwYXNzd29yZFJlc2V0RmluaXNoUm91dGU6IFJvdXRlID0ge1xuICAgIHBhdGg6ICdyZXNldC9maW5pc2gnLFxuICAgIGNvbXBvbmVudDogUGFzc3dvcmRSZXNldEZpbmlzaENvbXBvbmVudCxcbiAgICBkYXRhOiB7XG4gICAgICAgIGF1dGhvcml0aWVzOiBbXSxcbiAgICAgICAgcGFnZVRpdGxlOiAnZ2xvYmFsLm1lbnUuYWNjb3VudC5wYXNzd29yZCdcbiAgICB9LFxuICAgIGNhbkFjdGl2YXRlOiBbVXNlclJvdXRlQWNjZXNzU2VydmljZV1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvZmluaXNoL3Bhc3N3b3JkLXJlc2V0LWZpbmlzaC5yb3V0ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkUmVzZXRGaW5pc2hTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICAgIHNhdmUoa2V5QW5kUGFzc3dvcmQ6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnYXBpL2FjY291bnQvcmVzZXRfcGFzc3dvcmQvZmluaXNoJywga2V5QW5kUGFzc3dvcmQpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9maW5pc2gvcGFzc3dvcmQtcmVzZXQtZmluaXNoLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj4gPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTggb2Zmc2V0LW1kLTJcXFwiPiA8aDEgamhpVHJhbnNsYXRlPVxcXCJyZXNldC5yZXF1ZXN0LnRpdGxlXFxcIj5SZXNldCB5b3VyIHBhc3N3b3JkPC9oMT4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiBqaGlUcmFuc2xhdGU9XFxcInJlc2V0LnJlcXVlc3QubWVzc2FnZXMubm90Zm91bmRcXFwiICpuZ0lmPVxcXCJlcnJvckVtYWlsTm90RXhpc3RzXFxcIj4gPHN0cm9uZz5FbWFpbCBhZGRyZXNzIGlzbid0IHJlZ2lzdGVyZWQhPC9zdHJvbmc+IFBsZWFzZSBjaGVjayBhbmQgdHJ5IGFnYWluLiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtd2FybmluZ1xcXCIgKm5nSWY9XFxcIiFzdWNjZXNzXFxcIj4gPHAgamhpVHJhbnNsYXRlPVxcXCJyZXNldC5yZXF1ZXN0Lm1lc3NhZ2VzLmluZm9cXFwiPkVudGVyIHRoZSBlbWFpbCBhZGRyZXNzIHlvdSB1c2VkIHRvIHJlZ2lzdGVyLjwvcD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcXFwiICpuZ0lmPVxcXCJzdWNjZXNzID09PSAnT0snXFxcIj4gPHAgamhpVHJhbnNsYXRlPVxcXCJyZXNldC5yZXF1ZXN0Lm1lc3NhZ2VzLnN1Y2Nlc3NcXFwiPkNoZWNrIHlvdXIgZW1haWxzIGZvciBkZXRhaWxzIG9uIGhvdyB0byByZXNldCB5b3VyIHBhc3N3b3JkLjwvcD4gPC9kaXY+IDxmb3JtICpuZ0lmPVxcXCIhc3VjY2Vzc1xcXCIgbmFtZT1cXFwiZm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgKG5nU3VibWl0KT1cXFwicmVxdWVzdFJlc2V0KClcXFwiICNyZXNldFJlcXVlc3RGb3JtPVxcXCJuZ0Zvcm1cXFwiPiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZW1haWxcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLmZvcm0uZW1haWxcXFwiPkVtYWlsPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZW1haWxcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiBwbGFjZWhvbGRlcj1cXFwie3snZ2xvYmFsLmZvcm0uZW1haWwucGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlfX1cXFwiIFsobmdNb2RlbCldPVxcXCJyZXNldEFjY291bnQuZW1haWxcXFwiIG1pbmxlbmd0aD1cXFwiNVxcXCIgbWF4bGVuZ3RoPVxcXCIxMDBcXFwiICNlbWFpbElucHV0PVxcXCJuZ01vZGVsXFxcIiByZXF1aXJlZD4gPGRpdiAqbmdJZj1cXFwiZW1haWxJbnB1dC5kaXJ0eSAmJiBlbWFpbElucHV0LmludmFsaWRcXFwiPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVtYWlsSW5wdXQuZXJyb3JzLnJlcXVpcmVkXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5lbWFpbC5yZXF1aXJlZFxcXCI+IFlvdXIgZW1haWwgaXMgcmVxdWlyZWQuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZW1haWxJbnB1dC5lcnJvcnMuZW1haWxcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmVtYWlsLmludmFsaWRcXFwiPiBZb3VyIGVtYWlsIGlzIGludmFsaWQuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZW1haWxJbnB1dC5lcnJvcnMubWlubGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5lbWFpbC5taW5sZW5ndGhcXFwiPiBZb3VyIGVtYWlsIGlzIHJlcXVpcmVkIHRvIGJlIGF0IGxlYXN0IDUgY2hhcmFjdGVycy4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbElucHV0LmVycm9ycy5tYXhsZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmVtYWlsLm1heGxlbmd0aFxcXCI+IFlvdXIgZW1haWwgY2Fubm90IGJlIGxvbmdlciB0aGFuIDEwMCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8L2Rpdj4gPC9kaXY+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbZGlzYWJsZWRdPVxcXCJyZXNldFJlcXVlc3RGb3JtLmZvcm0uaW52YWxpZFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgamhpVHJhbnNsYXRlPVxcXCJyZXNldC5yZXF1ZXN0LmZvcm0uYnV0dG9uXFxcIj5SZXNldDwvYnV0dG9uPiA8L2Zvcm0+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2luaXQvcGFzc3dvcmQtcmVzZXQtaW5pdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvaW5pdC9wYXNzd29yZC1yZXNldC1pbml0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBSZW5kZXJlciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYXNzd29yZFJlc2V0SW5pdFNlcnZpY2UgfSBmcm9tICcuL3Bhc3N3b3JkLXJlc2V0LWluaXQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXBhc3N3b3JkLXJlc2V0LWluaXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wYXNzd29yZC1yZXNldC1pbml0LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBQYXNzd29yZFJlc2V0SW5pdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgZXJyb3I6IHN0cmluZztcbiAgICBlcnJvckVtYWlsTm90RXhpc3RzOiBzdHJpbmc7XG4gICAgcmVzZXRBY2NvdW50OiBhbnk7XG4gICAgc3VjY2Vzczogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcGFzc3dvcmRSZXNldEluaXRTZXJ2aWNlOiBQYXNzd29yZFJlc2V0SW5pdFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXJcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yZXNldEFjY291bnQgPSB7fTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZW1haWwnKSwgJ2ZvY3VzJywgW10pO1xuICAgIH1cblxuICAgIHJlcXVlc3RSZXNldCgpIHtcbiAgICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICAgIHRoaXMuZXJyb3JFbWFpbE5vdEV4aXN0cyA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5wYXNzd29yZFJlc2V0SW5pdFNlcnZpY2Uuc2F2ZSh0aGlzLnJlc2V0QWNjb3VudC5lbWFpbCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9ICdPSyc7XG4gICAgICAgIH0sIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMCAmJiByZXNwb25zZS5kYXRhID09PSAnZW1haWwgYWRkcmVzcyBub3QgcmVnaXN0ZXJlZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yRW1haWxOb3RFeGlzdHMgPSAnRVJST1InO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gJ0VSUk9SJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2luaXQvcGFzc3dvcmQtcmVzZXQtaW5pdC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFVzZXJSb3V0ZUFjY2Vzc1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgUGFzc3dvcmRSZXNldEluaXRDb21wb25lbnQgfSBmcm9tICcuL3Bhc3N3b3JkLXJlc2V0LWluaXQuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IHBhc3N3b3JkUmVzZXRJbml0Um91dGU6IFJvdXRlID0ge1xuICAgIHBhdGg6ICdyZXNldC9yZXF1ZXN0JyxcbiAgICBjb21wb25lbnQ6IFBhc3N3b3JkUmVzZXRJbml0Q29tcG9uZW50LFxuICAgIGRhdGE6IHtcbiAgICAgICAgYXV0aG9yaXRpZXM6IFtdLFxuICAgICAgICBwYWdlVGl0bGU6ICdnbG9iYWwubWVudS5hY2NvdW50LnBhc3N3b3JkJ1xuICAgIH0sXG4gICAgY2FuQWN0aXZhdGU6IFtVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlXVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9pbml0L3Bhc3N3b3JkLXJlc2V0LWluaXQucm91dGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYXNzd29yZFJlc2V0SW5pdFNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gICAgc2F2ZShtYWlsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2FwaS9hY2NvdW50L3Jlc2V0X3Bhc3N3b3JkL2luaXQnLCBtYWlsKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvaW5pdC9wYXNzd29yZC1yZXNldC1pbml0LnNlcnZpY2UudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1wYXNzd29yZC1zdHJlbmd0aC1iYXInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgaWQ9XCJzdHJlbmd0aFwiPlxuICAgICAgICAgICAgPHNtYWxsIGpoaVRyYW5zbGF0ZT1cImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5uZXdwYXNzd29yZC5zdHJlbmd0aFwiPlBhc3N3b3JkIHN0cmVuZ3RoOjwvc21hbGw+XG4gICAgICAgICAgICA8dWwgaWQ9XCJzdHJlbmd0aEJhclwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBvaW50XCI+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwb2ludFwiPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicG9pbnRcIj48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBvaW50XCI+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwb2ludFwiPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5gLFxuICAgIHN0eWxlVXJsczogW1xuICAgICAgICAncGFzc3dvcmQtc3RyZW5ndGgtYmFyLnNjc3MnXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQYXNzd29yZFN0cmVuZ3RoQmFyQ29tcG9uZW50IHtcblxuICAgIGNvbG9ycyA9IFsnI0YwMCcsICcjRjkwJywgJyNGRjAnLCAnIzlGMCcsICcjMEYwJ107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlciwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cblxuICAgIG1lYXN1cmVTdHJlbmd0aChwOiBzdHJpbmcpOiBudW1iZXIge1xuXG4gICAgICAgIGxldCBmb3JjZSA9IDA7XG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gL1skLS86LT97LX4hXCJeX2BcXFtcXF1dL2c7IC8vIFwiXG4gICAgICAgIGNvbnN0IGxvd2VyTGV0dGVycyA9IC9bYS16XSsvLnRlc3QocCk7XG4gICAgICAgIGNvbnN0IHVwcGVyTGV0dGVycyA9IC9bQS1aXSsvLnRlc3QocCk7XG4gICAgICAgIGNvbnN0IG51bWJlcnMgPSAvWzAtOV0rLy50ZXN0KHApO1xuICAgICAgICBjb25zdCBzeW1ib2xzID0gcmVnZXgudGVzdChwKTtcblxuICAgICAgICBjb25zdCBmbGFncyA9IFtsb3dlckxldHRlcnMsIHVwcGVyTGV0dGVycywgbnVtYmVycywgc3ltYm9sc107XG4gICAgICAgIGNvbnN0IHBhc3NlZE1hdGNoZXMgPSBmbGFncy5maWx0ZXIoIChpc01hdGNoZWRGbGFnOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXNNYXRjaGVkRmxhZyA9PT0gdHJ1ZTtcbiAgICAgICAgfSkubGVuZ3RoO1xuXG4gICAgICAgIGZvcmNlICs9IDIgKiBwLmxlbmd0aCArICgocC5sZW5ndGggPj0gMTApID8gMSA6IDApO1xuICAgICAgICBmb3JjZSArPSBwYXNzZWRNYXRjaGVzICogMTA7XG5cbiAgICAgICAgLy8gcGVuYWxpdHkgKHNob3J0IHBhc3N3b3JkKVxuICAgICAgICBmb3JjZSA9IChwLmxlbmd0aCA8PSA2KSA/IE1hdGgubWluKGZvcmNlLCAxMCkgOiBmb3JjZTtcblxuICAgICAgICAvLyBwZW5hbGl0eSAocG9vciB2YXJpZXR5IG9mIGNoYXJhY3RlcnMpXG4gICAgICAgIGZvcmNlID0gKHBhc3NlZE1hdGNoZXMgPT09IDEpID8gTWF0aC5taW4oZm9yY2UsIDEwKSA6IGZvcmNlO1xuICAgICAgICBmb3JjZSA9IChwYXNzZWRNYXRjaGVzID09PSAyKSA/IE1hdGgubWluKGZvcmNlLCAyMCkgOiBmb3JjZTtcbiAgICAgICAgZm9yY2UgPSAocGFzc2VkTWF0Y2hlcyA9PT0gMykgPyBNYXRoLm1pbihmb3JjZSwgNDApIDogZm9yY2U7XG5cbiAgICAgICAgcmV0dXJuIGZvcmNlO1xuICAgIH07XG5cbiAgICBnZXRDb2xvcihzOiBudW1iZXIpOiBhbnkge1xuICAgICAgICBsZXQgaWR4ID0gMDtcbiAgICAgICAgaWYgKHMgPD0gMTApIHtcbiAgICAgICAgICAgIGlkeCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAocyA8PSAyMCkge1xuICAgICAgICAgICAgaWR4ID0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChzIDw9IDMwKSB7XG4gICAgICAgICAgICBpZHggPSAyO1xuICAgICAgICB9IGVsc2UgaWYgKHMgPD0gNDApIHtcbiAgICAgICAgICAgIGlkeCA9IDM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZHggPSA0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7aWR4OiBpZHggKyAxLCBjb2w6IHRoaXMuY29sb3JzW2lkeF19O1xuICAgIH07XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBwYXNzd29yZFRvQ2hlY2socGFzc3dvcmQ6IHN0cmluZykge1xuICAgICAgICBpZiAocGFzc3dvcmQpIHtcbiAgICAgICAgICAgIGNvbnN0IGMgPSB0aGlzLmdldENvbG9yKHRoaXMubWVhc3VyZVN0cmVuZ3RoKHBhc3N3b3JkKSk7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAoIGVsZW1lbnQuY2xhc3NOYW1lICkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKGVsZW1lbnQsIGVsZW1lbnQuY2xhc3NOYW1lICwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbGlzID0gZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGknKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPCBjLmlkeCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZShsaXNbaV0sICdiYWNrZ3JvdW5kQ29sb3InLCBjLmNvbCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUobGlzW2ldLCAnYmFja2dyb3VuZENvbG9yJywgJyNEREQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQtc3RyZW5ndGgtYmFyLmNvbXBvbmVudC50cyIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9wYXNzd29yZC1zdHJlbmd0aC1iYXIuc2Nzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQtc3RyZW5ndGgtYmFyLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLXN0cmVuZ3RoLWJhci5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOCBvZmZzZXQtbWQtMlxcXCI+IDxoMiBqaGlUcmFuc2xhdGU9XFxcInBhc3N3b3JkLnRpdGxlXFxcIiB0cmFuc2xhdGVWYWx1ZXM9XFxcInt1c2VybmFtZTogJ3t7YWNjb3VudC5sb2dpbn19J31cXFwiICpuZ0lmPVxcXCJhY2NvdW50XFxcIj5QYXNzd29yZCBmb3IgWzxiPnt7YWNjb3VudC5sb2dpbn19PC9iPl08L2gyPiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1zdWNjZXNzXFxcIiAqbmdJZj1cXFwic3VjY2Vzc1xcXCIgamhpVHJhbnNsYXRlPVxcXCJwYXNzd29yZC5tZXNzYWdlcy5zdWNjZXNzXFxcIj4gPHN0cm9uZz5QYXNzd29yZCBjaGFuZ2VkITwvc3Ryb25nPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZXJyb3JcXFwiIGpoaVRyYW5zbGF0ZT1cXFwicGFzc3dvcmQubWVzc2FnZXMuZXJyb3JcXFwiPiA8c3Ryb25nPkFuIGVycm9yIGhhcyBvY2N1cnJlZCE8L3N0cm9uZz4gVGhlIHBhc3N3b3JkIGNvdWxkIG5vdCBiZSBjaGFuZ2VkLiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZG9Ob3RNYXRjaFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMuZXJyb3IuZG9udG1hdGNoXFxcIj4gVGhlIHBhc3N3b3JkIGFuZCBpdHMgY29uZmlybWF0aW9uIGRvIG5vdCBtYXRjaCEgPC9kaXY+IDxmb3JtIG5hbWU9XFxcImZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcImNoYW5nZVBhc3N3b3JkKClcXFwiICNwYXNzd29yZEZvcm09XFxcIm5nRm9ybVxcXCI+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJwYXNzd29yZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwuZm9ybS5uZXdwYXNzd29yZFxcXCI+TmV3IHBhc3N3b3JkPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiAjcGFzc3dvcmRJbnB1dD1cXFwibmdNb2RlbFxcXCIgcGxhY2Vob2xkZXI9XFxcInt7J2dsb2JhbC5mb3JtLm5ld3Bhc3N3b3JkLnBsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZX19XFxcIiBbKG5nTW9kZWwpXT1cXFwicGFzc3dvcmRcXFwiIG1pbmxlbmd0aD1cXFwiNFxcXCIgbWF4bGVuZ3RoPVxcXCI1MFxcXCIgcmVxdWlyZWQ+IDxkaXYgKm5nSWY9XFxcInBhc3N3b3JkSW5wdXQuZGlydHkgJiYgcGFzc3dvcmRJbnB1dC5pbnZhbGlkXFxcIj4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJwYXNzd29yZElucHV0LmVycm9ycy5yZXF1aXJlZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUubmV3cGFzc3dvcmQucmVxdWlyZWRcXFwiPiBZb3VyIHBhc3N3b3JkIGlzIHJlcXVpcmVkLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcInBhc3N3b3JkSW5wdXQuZXJyb3JzLm1pbmxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUubmV3cGFzc3dvcmQubWlubGVuZ3RoXFxcIj4gWW91ciBwYXNzd29yZCBpcyByZXF1aXJlZCB0byBiZSBhdCBsZWFzdCA0IGNoYXJhY3RlcnMuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwicGFzc3dvcmRJbnB1dC5lcnJvcnMubWF4bGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5uZXdwYXNzd29yZC5tYXhsZW5ndGhcXFwiPiBZb3VyIHBhc3N3b3JkIGNhbm5vdCBiZSBsb25nZXIgdGhhbiA1MCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8L2Rpdj4gPGpoaS1wYXNzd29yZC1zdHJlbmd0aC1iYXIgW3Bhc3N3b3JkVG9DaGVja109XFxcInBhc3N3b3JkXFxcIj48L2poaS1wYXNzd29yZC1zdHJlbmd0aC1iYXI+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5mb3JtLmNvbmZpcm1wYXNzd29yZFxcXCI+TmV3IHBhc3N3b3JkIGNvbmZpcm1hdGlvbjwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgbmFtZT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiAjY29uZmlybVBhc3N3b3JkSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7eydnbG9iYWwuZm9ybS5jb25maXJtcGFzc3dvcmQucGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlfX1cXFwiIFsobmdNb2RlbCldPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIG1pbmxlbmd0aD1cXFwiNFxcXCIgbWF4bGVuZ3RoPVxcXCI1MFxcXCIgcmVxdWlyZWQ+IDxkaXYgKm5nSWY9XFxcImNvbmZpcm1QYXNzd29yZElucHV0LmRpcnR5ICYmIGNvbmZpcm1QYXNzd29yZElucHV0LmludmFsaWRcXFwiPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImNvbmZpcm1QYXNzd29yZElucHV0LmVycm9ycy5yZXF1aXJlZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuY29uZmlybXBhc3N3b3JkLnJlcXVpcmVkXFxcIj4gWW91ciBjb25maXJtYXRpb24gcGFzc3dvcmQgaXMgcmVxdWlyZWQuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiY29uZmlybVBhc3N3b3JkSW5wdXQuZXJyb3JzLm1pbmxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuY29uZmlybXBhc3N3b3JkLm1pbmxlbmd0aFxcXCI+IFlvdXIgY29uZmlybWF0aW9uIHBhc3N3b3JkIGlzIHJlcXVpcmVkIHRvIGJlIGF0IGxlYXN0IDQgY2hhcmFjdGVycy4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJjb25maXJtUGFzc3dvcmRJbnB1dC5lcnJvcnMubWF4bGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5jb25maXJtcGFzc3dvcmQubWF4bGVuZ3RoXFxcIj4gWW91ciBjb25maXJtYXRpb24gcGFzc3dvcmQgY2Fubm90IGJlIGxvbmdlciB0aGFuIDUwIGNoYXJhY3RlcnMuIDwvc21hbGw+IDwvZGl2PiA8L2Rpdj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcInBhc3N3b3JkRm9ybS5mb3JtLmludmFsaWRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGpoaVRyYW5zbGF0ZT1cXFwicGFzc3dvcmQuZm9ybS5idXR0b25cXFwiPlNhdmU8L2J1dHRvbj4gPC9mb3JtPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUHJpbmNpcGFsIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IFBhc3N3b3JkU2VydmljZSB9IGZyb20gJy4vcGFzc3dvcmQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXBhc3N3b3JkJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBkb05vdE1hdGNoOiBzdHJpbmc7XG4gICAgZXJyb3I6IHN0cmluZztcbiAgICBzdWNjZXNzOiBzdHJpbmc7XG4gICAgYWNjb3VudDogYW55O1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgY29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBwcmluY2lwYWw6IFByaW5jaXBhbFxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnByaW5jaXBhbC5pZGVudGl0eSgpLnRoZW4oKGFjY291bnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudCA9IGFjY291bnQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoYW5nZVBhc3N3b3JkKCkge1xuICAgICAgICBpZiAodGhpcy5wYXNzd29yZCAhPT0gdGhpcy5jb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZG9Ob3RNYXRjaCA9ICdFUlJPUic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRvTm90TWF0Y2ggPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5wYXNzd29yZFNlcnZpY2Uuc2F2ZSh0aGlzLnBhc3N3b3JkKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9ICdPSyc7XG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gJ0VSUk9SJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBQYXNzd29yZENvbXBvbmVudCB9IGZyb20gJy4vcGFzc3dvcmQuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IHBhc3N3b3JkUm91dGU6IFJvdXRlID0ge1xuICAgIHBhdGg6ICdwYXNzd29yZCcsXG4gICAgY29tcG9uZW50OiBQYXNzd29yZENvbXBvbmVudCxcbiAgICBkYXRhOiB7XG4gICAgICAgIGF1dGhvcml0aWVzOiBbJ1JPTEVfVVNFUiddLFxuICAgICAgICBwYWdlVGl0bGU6ICdnbG9iYWwubWVudS5hY2NvdW50LnBhc3N3b3JkJ1xuICAgIH0sXG4gICAgY2FuQWN0aXZhdGU6IFtVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlXVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC5yb3V0ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XG5cbiAgICBzYXZlKG5ld1Bhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2FwaS9hY2NvdW50L2NoYW5nZV9wYXNzd29yZCcsIG5ld1Bhc3N3b3JkKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOCBvZmZzZXQtbWQtMlxcXCI+IDxoMSBqaGlUcmFuc2xhdGU9XFxcInJlZ2lzdGVyLnRpdGxlXFxcIj5SZWdpc3RyYXRpb248L2gxPiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1zdWNjZXNzXFxcIiAqbmdJZj1cXFwic3VjY2Vzc1xcXCIgamhpVHJhbnNsYXRlPVxcXCJyZWdpc3Rlci5tZXNzYWdlcy5zdWNjZXNzXFxcIj4gPHN0cm9uZz5SZWdpc3RyYXRpb24gc2F2ZWQhPC9zdHJvbmc+IFBsZWFzZSBjaGVjayB5b3VyIGVtYWlsIGZvciBjb25maXJtYXRpb24uIDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlcnJvclxcXCIgamhpVHJhbnNsYXRlPVxcXCJyZWdpc3Rlci5tZXNzYWdlcy5lcnJvci5mYWlsXFxcIj4gPHN0cm9uZz5SZWdpc3RyYXRpb24gZmFpbGVkITwvc3Ryb25nPiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZXJyb3JVc2VyRXhpc3RzXFxcIiBqaGlUcmFuc2xhdGU9XFxcInJlZ2lzdGVyLm1lc3NhZ2VzLmVycm9yLnVzZXJleGlzdHNcXFwiPiA8c3Ryb25nPkxvZ2luIG5hbWUgYWxyZWFkeSByZWdpc3RlcmVkITwvc3Ryb25nPiBQbGVhc2UgY2hvb3NlIGFub3RoZXIgb25lLiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZXJyb3JFbWFpbEV4aXN0c1xcXCIgamhpVHJhbnNsYXRlPVxcXCJyZWdpc3Rlci5tZXNzYWdlcy5lcnJvci5lbWFpbGV4aXN0c1xcXCI+IDxzdHJvbmc+RW1haWwgaXMgYWxyZWFkeSBpbiB1c2UhPC9zdHJvbmc+IFBsZWFzZSBjaG9vc2UgYW5vdGhlciBvbmUuIDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJkb05vdE1hdGNoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy5lcnJvci5kb250bWF0Y2hcXFwiPiBUaGUgcGFzc3dvcmQgYW5kIGl0cyBjb25maXJtYXRpb24gZG8gbm90IG1hdGNoISA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC04IG9mZnNldC1tZC0yXFxcIj4gPGZvcm0gbmFtZT1cXFwiZm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgKG5nU3VibWl0KT1cXFwicmVnaXN0ZXIoKVxcXCIgI3JlZ2lzdGVyRm9ybT1cXFwibmdGb3JtXFxcIiAqbmdJZj1cXFwiIXN1Y2Nlc3NcXFwiPiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibG9naW5cXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLmZvcm0udXNlcm5hbWVcXFwiPlVzZXJuYW1lPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJyZWdpc3RlckFjY291bnQubG9naW5cXFwiIGlkPVxcXCJsb2dpblxcXCIgbmFtZT1cXFwibG9naW5cXFwiICNsb2dpbj1cXFwibmdNb2RlbFxcXCIgcGxhY2Vob2xkZXI9XFxcInt7J2dsb2JhbC5mb3JtLnVzZXJuYW1lLnBsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZX19XFxcIiByZXF1aXJlZCBtaW5sZW5ndGg9XFxcIjFcXFwiIG1heGxlbmd0aD1cXFwiNTBcXFwiIHBhdHRlcm49XFxcIl5bXycuQEEtWmEtejAtOS1dKiRcXFwiPiA8ZGl2ICpuZ0lmPVxcXCJsb2dpbi5kaXJ0eSAmJiBsb2dpbi5pbnZhbGlkXFxcIj4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJsb2dpbi5lcnJvcnMucmVxdWlyZWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwicmVnaXN0ZXIubWVzc2FnZXMudmFsaWRhdGUubG9naW4ucmVxdWlyZWRcXFwiPiBZb3VyIHVzZXJuYW1lIGlzIHJlcXVpcmVkLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImxvZ2luLmVycm9ycy5taW5sZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwicmVnaXN0ZXIubWVzc2FnZXMudmFsaWRhdGUubG9naW4ubWlubGVuZ3RoXFxcIj4gWW91ciB1c2VybmFtZSBpcyByZXF1aXJlZCB0byBiZSBhdCBsZWFzdCAxIGNoYXJhY3Rlci4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJsb2dpbi5lcnJvcnMubWF4bGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcInJlZ2lzdGVyLm1lc3NhZ2VzLnZhbGlkYXRlLmxvZ2luLm1heGxlbmd0aFxcXCI+IFlvdXIgdXNlcm5hbWUgY2Fubm90IGJlIGxvbmdlciB0aGFuIDUwIGNoYXJhY3RlcnMuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibG9naW4uZXJyb3JzLnBhdHRlcm5cXFwiIGpoaVRyYW5zbGF0ZT1cXFwicmVnaXN0ZXIubWVzc2FnZXMudmFsaWRhdGUubG9naW4ucGF0dGVyblxcXCI+IFlvdXIgdXNlcm5hbWUgY2FuIG9ubHkgY29udGFpbiBsb3dlci1jYXNlIGxldHRlcnMgYW5kIGRpZ2l0cy4gPC9zbWFsbD4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZW1haWxcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLmZvcm0uZW1haWxcXFwiPkVtYWlsPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZW1haWxcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiAjZW1haWw9XFxcIm5nTW9kZWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7eydnbG9iYWwuZm9ybS5lbWFpbC5wbGFjZWhvbGRlcicgfCB0cmFuc2xhdGV9fVxcXCIgWyhuZ01vZGVsKV09XFxcInJlZ2lzdGVyQWNjb3VudC5lbWFpbFxcXCIgbWlubGVuZ3RoPVxcXCI1XFxcIiBtYXhsZW5ndGg9XFxcIjEwMFxcXCIgcmVxdWlyZWQ+IDxkaXYgKm5nSWY9XFxcImVtYWlsLmRpcnR5ICYmIGVtYWlsLmludmFsaWRcXFwiPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVtYWlsLmVycm9ycy5yZXF1aXJlZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuZW1haWwucmVxdWlyZWRcXFwiPiBZb3VyIGVtYWlsIGlzIHJlcXVpcmVkLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVtYWlsLmVycm9ycy5pbnZhbGlkXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5lbWFpbC5pbnZhbGlkXFxcIj4gWW91ciBlbWFpbCBpcyBpbnZhbGlkLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVtYWlsLmVycm9ycy5taW5sZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmVtYWlsLm1pbmxlbmd0aFxcXCI+IFlvdXIgZW1haWwgaXMgcmVxdWlyZWQgdG8gYmUgYXQgbGVhc3QgNSBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVtYWlsLmVycm9ycy5tYXhsZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmVtYWlsLm1heGxlbmd0aFxcXCI+IFlvdXIgZW1haWwgY2Fubm90IGJlIGxvbmdlciB0aGFuIDEwMCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJwYXNzd29yZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwuZm9ybS5uZXdwYXNzd29yZFxcXCI+TmV3IHBhc3N3b3JkPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiAjcGFzc3dvcmQ9XFxcIm5nTW9kZWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7eydnbG9iYWwuZm9ybS5uZXdwYXNzd29yZC5wbGFjZWhvbGRlcicgfCB0cmFuc2xhdGV9fVxcXCIgWyhuZ01vZGVsKV09XFxcInJlZ2lzdGVyQWNjb3VudC5wYXNzd29yZFxcXCIgbWlubGVuZ3RoPVxcXCI0XFxcIiBtYXhsZW5ndGg9XFxcIjUwXFxcIiByZXF1aXJlZD4gPGRpdiAqbmdJZj1cXFwicGFzc3dvcmQuZGlydHkgJiYgcGFzc3dvcmQuaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwicGFzc3dvcmQuZXJyb3JzLnJlcXVpcmVkXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5uZXdwYXNzd29yZC5yZXF1aXJlZFxcXCI+IFlvdXIgcGFzc3dvcmQgaXMgcmVxdWlyZWQuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwicGFzc3dvcmQuZXJyb3JzLm1pbmxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUubmV3cGFzc3dvcmQubWlubGVuZ3RoXFxcIj4gWW91ciBwYXNzd29yZCBpcyByZXF1aXJlZCB0byBiZSBhdCBsZWFzdCA0IGNoYXJhY3RlcnMuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwicGFzc3dvcmQuZXJyb3JzLm1heGxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUubmV3cGFzc3dvcmQubWF4bGVuZ3RoXFxcIj4gWW91ciBwYXNzd29yZCBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gNTAgY2hhcmFjdGVycy4gPC9zbWFsbD4gPC9kaXY+IDxqaGktcGFzc3dvcmQtc3RyZW5ndGgtYmFyIFtwYXNzd29yZFRvQ2hlY2tdPVxcXCJyZWdpc3RlckFjY291bnQucGFzc3dvcmRcXFwiPjwvamhpLXBhc3N3b3JkLXN0cmVuZ3RoLWJhcj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLmZvcm0uY29uZmlybXBhc3N3b3JkXFxcIj5OZXcgcGFzc3dvcmQgY29uZmlybWF0aW9uPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBuYW1lPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiICNjb25maXJtUGFzc3dvcmRJbnB1dD1cXFwibmdNb2RlbFxcXCIgcGxhY2Vob2xkZXI9XFxcInt7J2dsb2JhbC5mb3JtLmNvbmZpcm1wYXNzd29yZC5wbGFjZWhvbGRlcicgfCB0cmFuc2xhdGV9fVxcXCIgWyhuZ01vZGVsKV09XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgbWlubGVuZ3RoPVxcXCI0XFxcIiBtYXhsZW5ndGg9XFxcIjUwXFxcIiByZXF1aXJlZD4gPGRpdiAqbmdJZj1cXFwiY29uZmlybVBhc3N3b3JkSW5wdXQuZGlydHkgJiYgY29uZmlybVBhc3N3b3JkSW5wdXQuaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiY29uZmlybVBhc3N3b3JkSW5wdXQuZXJyb3JzLnJlcXVpcmVkXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5jb25maXJtcGFzc3dvcmQucmVxdWlyZWRcXFwiPiBZb3VyIGNvbmZpcm1hdGlvbiBwYXNzd29yZCBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJjb25maXJtUGFzc3dvcmRJbnB1dC5lcnJvcnMubWlubGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5jb25maXJtcGFzc3dvcmQubWlubGVuZ3RoXFxcIj4gWW91ciBjb25maXJtYXRpb24gcGFzc3dvcmQgaXMgcmVxdWlyZWQgdG8gYmUgYXQgbGVhc3QgNCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImNvbmZpcm1QYXNzd29yZElucHV0LmVycm9ycy5tYXhsZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmNvbmZpcm1wYXNzd29yZC5tYXhsZW5ndGhcXFwiPiBZb3VyIGNvbmZpcm1hdGlvbiBwYXNzd29yZCBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gNTAgY2hhcmFjdGVycy4gPC9zbWFsbD4gPC9kaXY+IDwvZGl2PiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwicmVnaXN0ZXJGb3JtLmZvcm0uaW52YWxpZFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgamhpVHJhbnNsYXRlPVxcXCJyZWdpc3Rlci5mb3JtLmJ1dHRvblxcXCI+UmVnaXN0ZXI8L2J1dHRvbj4gPC9mb3JtPiA8cD48L3A+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXdhcm5pbmdcXFwiPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy5pbmZvLmF1dGhlbnRpY2F0ZWQucHJlZml4XFxcIj5JZiB5b3Ugd2FudCB0byA8L3NwYW4+IDxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiAoY2xpY2spPVxcXCJvcGVuTG9naW4oKVxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMuaW5mby5hdXRoZW50aWNhdGVkLmxpbmtcXFwiPnNpZ24gaW48L2E+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMuaW5mby5hdXRoZW50aWNhdGVkLnN1ZmZpeFxcXCI+LCB5b3UgY2FuIHRyeSB0aGUgZGVmYXVsdCBhY2NvdW50czo8YnIvPi0gQWRtaW5pc3RyYXRvciAobG9naW49XFxcImFkbWluXFxcIiBhbmQgcGFzc3dvcmQ9XFxcImFkbWluXFxcIikgPGJyLz4tIFVzZXIgKGxvZ2luPVxcXCJ1c2VyXFxcIiBhbmQgcGFzc3dvcmQ9XFxcInVzZXJcXFwiKS48L3NwYW4+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIFJlbmRlcmVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbFJlZiB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IEpoaUxhbmd1YWdlU2VydmljZSB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgUmVnaXN0ZXIgfSBmcm9tICcuL3JlZ2lzdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9naW5Nb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1yZWdpc3RlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBjb25maXJtUGFzc3dvcmQ6IHN0cmluZztcbiAgICBkb05vdE1hdGNoOiBzdHJpbmc7XG4gICAgZXJyb3I6IHN0cmluZztcbiAgICBlcnJvckVtYWlsRXhpc3RzOiBzdHJpbmc7XG4gICAgZXJyb3JVc2VyRXhpc3RzOiBzdHJpbmc7XG4gICAgcmVnaXN0ZXJBY2NvdW50OiBhbnk7XG4gICAgc3VjY2VzczogYm9vbGVhbjtcbiAgICBtb2RhbFJlZjogTmdiTW9kYWxSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IEpoaUxhbmd1YWdlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBsb2dpbk1vZGFsU2VydmljZTogTG9naW5Nb2RhbFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcmVnaXN0ZXJTZXJ2aWNlOiBSZWdpc3RlcixcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlclxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckFjY291bnQgPSB7fTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjbG9naW4nKSwgJ2ZvY3VzJywgW10pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKCkge1xuICAgICAgICBpZiAodGhpcy5yZWdpc3RlckFjY291bnQucGFzc3dvcmQgIT09IHRoaXMuY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgICAgICB0aGlzLmRvTm90TWF0Y2ggPSAnRVJST1InO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kb05vdE1hdGNoID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5lcnJvclVzZXJFeGlzdHMgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5lcnJvckVtYWlsRXhpc3RzID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLmdldEN1cnJlbnQoKS50aGVuKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQWNjb3VudC5sYW5nS2V5ID0ga2V5O1xuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJTZXJ2aWNlLnNhdmUodGhpcy5yZWdpc3RlckFjY291bnQpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSwgKHJlc3BvbnNlKSA9PiB0aGlzLnByb2Nlc3NFcnJvcihyZXNwb25zZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuTG9naW4oKSB7XG4gICAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLmxvZ2luTW9kYWxTZXJ2aWNlLm9wZW4oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHByb2Nlc3NFcnJvcihyZXNwb25zZSkge1xuICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBudWxsO1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDAgJiYgcmVzcG9uc2UuX2JvZHkgPT09ICdsb2dpbiBhbHJlYWR5IGluIHVzZScpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JVc2VyRXhpc3RzID0gJ0VSUk9SJztcbiAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMCAmJiByZXNwb25zZS5fYm9keSA9PT0gJ2VtYWlsIGFkZHJlc3MgYWxyZWFkeSBpbiB1c2UnKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yRW1haWxFeGlzdHMgPSAnRVJST1InO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9ICdFUlJPUic7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9yZWdpc3Rlci5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJSb3V0ZTogUm91dGUgPSB7XG4gICAgcGF0aDogJ3JlZ2lzdGVyJyxcbiAgICBjb21wb25lbnQ6IFJlZ2lzdGVyQ29tcG9uZW50LFxuICAgIGRhdGE6IHtcbiAgICAgICAgYXV0aG9yaXRpZXM6IFtdLFxuICAgICAgICBwYWdlVGl0bGU6ICdyZWdpc3Rlci50aXRsZSdcbiAgICB9LFxuICAgIGNhbkFjdGl2YXRlOiBbVXNlclJvdXRlQWNjZXNzU2VydmljZV1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIucm91dGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZWdpc3RlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XG5cbiAgICBzYXZlKGFjY291bnQ6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnYXBpL3JlZ2lzdGVyJywgYWNjb3VudCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3JlZ2lzdGVyL3JlZ2lzdGVyLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj4gPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTggb2Zmc2V0LW1kLTJcXFwiPiA8aDIgamhpVHJhbnNsYXRlPVxcXCJzZXR0aW5ncy50aXRsZVxcXCIgdHJhbnNsYXRlVmFsdWVzPVxcXCJ7dXNlcm5hbWU6ICd7e3NldHRpbmdzQWNjb3VudC5sb2dpbn19J31cXFwiICpuZ0lmPVxcXCJzZXR0aW5nc0FjY291bnRcXFwiPlVzZXIgc2V0dGluZ3MgZm9yIFs8Yj57e3NldHRpbmdzQWNjb3VudC5sb2dpbn19PC9iPl08L2gyPiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1zdWNjZXNzXFxcIiAqbmdJZj1cXFwic3VjY2Vzc1xcXCIgamhpVHJhbnNsYXRlPVxcXCJzZXR0aW5ncy5tZXNzYWdlcy5zdWNjZXNzXFxcIj4gPHN0cm9uZz5TZXR0aW5ncyBzYXZlZCE8L3N0cm9uZz4gPC9kaXY+IDxqaGktYWxlcnQtZXJyb3I+PC9qaGktYWxlcnQtZXJyb3I+IDxmb3JtIG5hbWU9XFxcImZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcInNhdmUoKVxcXCIgI3NldHRpbmdzRm9ybT1cXFwibmdGb3JtXFxcIiAqbmdJZj1cXFwic2V0dGluZ3NBY2NvdW50XFxcIiBub3ZhbGlkYXRlPiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZmlyc3ROYW1lXFxcIiBqaGlUcmFuc2xhdGU9XFxcInNldHRpbmdzLmZvcm0uZmlyc3RuYW1lXFxcIj5GaXJzdCBOYW1lPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJmaXJzdE5hbWVcXFwiIG5hbWU9XFxcImZpcnN0TmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcInt7J3NldHRpbmdzLmZvcm0uZmlyc3RuYW1lLnBsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZX19XFxcIiBbKG5nTW9kZWwpXT1cXFwic2V0dGluZ3NBY2NvdW50LmZpcnN0TmFtZVxcXCIgbWlubGVuZ3RoPVxcXCIxXFxcIiBtYXhsZW5ndGg9XFxcIjUwXFxcIiAjZmlyc3ROYW1lSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkPiA8ZGl2ICpuZ0lmPVxcXCJmaXJzdE5hbWVJbnB1dC5kaXJ0eSAmJiBmaXJzdE5hbWVJbnB1dC5pbnZhbGlkXFxcIj4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJmaXJzdE5hbWVJbnB1dC5lcnJvcnMucmVxdWlyZWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwic2V0dGluZ3MubWVzc2FnZXMudmFsaWRhdGUuZmlyc3RuYW1lLnJlcXVpcmVkXFxcIj4gWW91ciBmaXJzdCBuYW1lIGlzIHJlcXVpcmVkLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImZpcnN0TmFtZUlucHV0LmVycm9ycy5taW5sZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwic2V0dGluZ3MubWVzc2FnZXMudmFsaWRhdGUuZmlyc3RuYW1lLm1pbmxlbmd0aFxcXCI+IFlvdXIgZmlyc3QgbmFtZSBpcyByZXF1aXJlZCB0byBiZSBhdCBsZWFzdCAxIGNoYXJhY3Rlci4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJmaXJzdE5hbWVJbnB1dC5lcnJvcnMubWF4bGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcInNldHRpbmdzLm1lc3NhZ2VzLnZhbGlkYXRlLmZpcnN0bmFtZS5tYXhsZW5ndGhcXFwiPiBZb3VyIGZpcnN0IG5hbWUgY2Fubm90IGJlIGxvbmdlciB0aGFuIDUwIGNoYXJhY3RlcnMuIDwvc21hbGw+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImxhc3ROYW1lXFxcIiBqaGlUcmFuc2xhdGU9XFxcInNldHRpbmdzLmZvcm0ubGFzdG5hbWVcXFwiPkxhc3QgTmFtZTwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwibGFzdE5hbWVcXFwiIG5hbWU9XFxcImxhc3ROYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwie3snc2V0dGluZ3MuZm9ybS5sYXN0bmFtZS5wbGFjZWhvbGRlcicgfCB0cmFuc2xhdGV9fVxcXCIgWyhuZ01vZGVsKV09XFxcInNldHRpbmdzQWNjb3VudC5sYXN0TmFtZVxcXCIgbWlubGVuZ3RoPVxcXCIxXFxcIiBtYXhsZW5ndGg9XFxcIjUwXFxcIiAjbGFzdE5hbWVJbnB1dD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQ+IDxkaXYgKm5nSWY9XFxcImxhc3ROYW1lSW5wdXQuZGlydHkgJiYgbGFzdE5hbWVJbnB1dC5pbnZhbGlkXFxcIj4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJsYXN0TmFtZUlucHV0LmVycm9ycy5yZXF1aXJlZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJzZXR0aW5ncy5tZXNzYWdlcy52YWxpZGF0ZS5sYXN0bmFtZS5yZXF1aXJlZFxcXCI+IFlvdXIgbGFzdCBuYW1lIGlzIHJlcXVpcmVkLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImxhc3ROYW1lSW5wdXQuZXJyb3JzLm1pbmxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJzZXR0aW5ncy5tZXNzYWdlcy52YWxpZGF0ZS5sYXN0bmFtZS5taW5sZW5ndGhcXFwiPiBZb3VyIGxhc3QgbmFtZSBpcyByZXF1aXJlZCB0byBiZSBhdCBsZWFzdCAxIGNoYXJhY3Rlci4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJsYXN0TmFtZUlucHV0LmVycm9ycy5tYXhsZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwic2V0dGluZ3MubWVzc2FnZXMudmFsaWRhdGUubGFzdG5hbWUubWF4bGVuZ3RoXFxcIj4gWW91ciBsYXN0IG5hbWUgY2Fubm90IGJlIGxvbmdlciB0aGFuIDUwIGNoYXJhY3RlcnMuIDwvc21hbGw+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImVtYWlsXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5mb3JtLmVtYWlsXFxcIj5FbWFpbDwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgcGxhY2Vob2xkZXI9XFxcInt7J2dsb2JhbC5mb3JtLmVtYWlsLnBsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZX19XFxcIiBbKG5nTW9kZWwpXT1cXFwic2V0dGluZ3NBY2NvdW50LmVtYWlsXFxcIiBtaW5sZW5ndGg9XFxcIjVcXFwiIG1heGxlbmd0aD1cXFwiMTAwXFxcIiAjZW1haWxJbnB1dD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQ+IDxkaXYgKm5nSWY9XFxcImVtYWlsSW5wdXQuZGlydHkgJiYgZW1haWxJbnB1dC5pbnZhbGlkXFxcIj4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbElucHV0LmVycm9ycy5yZXF1aXJlZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuZW1haWwucmVxdWlyZWRcXFwiPiBZb3VyIGVtYWlsIGlzIHJlcXVpcmVkLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVtYWlsSW5wdXQuZXJyb3JzLmVtYWlsXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5lbWFpbC5pbnZhbGlkXFxcIj4gWW91ciBlbWFpbCBpcyBpbnZhbGlkLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVtYWlsSW5wdXQuZXJyb3JzLm1pbmxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuZW1haWwubWlubGVuZ3RoXFxcIj4gWW91ciBlbWFpbCBpcyByZXF1aXJlZCB0byBiZSBhdCBsZWFzdCA1IGNoYXJhY3RlcnMuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZW1haWxJbnB1dC5lcnJvcnMubWF4bGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5lbWFpbC5tYXhsZW5ndGhcXFwiPiBZb3VyIGVtYWlsIGNhbm5vdCBiZSBsb25nZXIgdGhhbiAxMDAgY2hhcmFjdGVycy4gPC9zbWFsbD4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiAqbmdJZj1cXFwibGFuZ3VhZ2VzICYmIGxhbmd1YWdlcy5sZW5ndGggPiAwXFxcIj4gPGxhYmVsIGZvcj1cXFwibGFuZ0tleVxcXCIgamhpVHJhbnNsYXRlPVxcXCJzZXR0aW5ncy5mb3JtLmxhbmd1YWdlXFxcIj5MYW5ndWFnZTwvbGFiZWw+IDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImxhbmdLZXlcXFwiIG5hbWU9XFxcImxhbmdLZXlcXFwiIFsobmdNb2RlbCldPVxcXCJzZXR0aW5nc0FjY291bnQubGFuZ0tleVxcXCI+IDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgbGFuZ3VhZ2Ugb2YgbGFuZ3VhZ2VzXFxcIiBbdmFsdWVdPVxcXCJsYW5ndWFnZVxcXCI+e3tsYW5ndWFnZSB8IGZpbmRMYW5ndWFnZUZyb21LZXl9fTwvb3B0aW9uPiA8L3NlbGVjdD4gPC9kaXY+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbZGlzYWJsZWRdPVxcXCJzZXR0aW5nc0Zvcm0uZm9ybS5pbnZhbGlkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBqaGlUcmFuc2xhdGU9XFxcInNldHRpbmdzLmZvcm0uYnV0dG9uXFxcIj5TYXZlPC9idXR0b24+IDwvZm9ybT4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBKaGlMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IFByaW5jaXBhbCwgQWNjb3VudFNlcnZpY2UsIEpoaUxhbmd1YWdlSGVscGVyIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktc2V0dGluZ3MnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zZXR0aW5ncy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGVycm9yOiBzdHJpbmc7XG4gICAgc3VjY2Vzczogc3RyaW5nO1xuICAgIHNldHRpbmdzQWNjb3VudDogYW55O1xuICAgIGxhbmd1YWdlczogYW55W107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhY2NvdW50OiBBY2NvdW50U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBwcmluY2lwYWw6IFByaW5jaXBhbCxcbiAgICAgICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IEpoaUxhbmd1YWdlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBsYW5ndWFnZUhlbHBlcjogSmhpTGFuZ3VhZ2VIZWxwZXJcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wcmluY2lwYWwuaWRlbnRpdHkoKS50aGVuKChhY2NvdW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzQWNjb3VudCA9IHRoaXMuY29weUFjY291bnQoYWNjb3VudCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxhbmd1YWdlSGVscGVyLmdldEFsbCgpLnRoZW4oKGxhbmd1YWdlcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZXMgPSBsYW5ndWFnZXM7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNhdmUoKSB7XG4gICAgICAgIHRoaXMuYWNjb3VudC5zYXZlKHRoaXMuc2V0dGluZ3NBY2NvdW50KS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSAnT0snO1xuICAgICAgICAgICAgdGhpcy5wcmluY2lwYWwuaWRlbnRpdHkodHJ1ZSkudGhlbigoYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3NBY2NvdW50ID0gdGhpcy5jb3B5QWNjb3VudChhY2NvdW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZVNlcnZpY2UuZ2V0Q3VycmVudCgpLnRoZW4oKGN1cnJlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5nc0FjY291bnQubGFuZ0tleSAhPT0gY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlU2VydmljZS5jaGFuZ2VMYW5ndWFnZSh0aGlzLnNldHRpbmdzQWNjb3VudC5sYW5nS2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSAnRVJST1InO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb3B5QWNjb3VudChhY2NvdW50KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY3RpdmF0ZWQ6IGFjY291bnQuYWN0aXZhdGVkLFxuICAgICAgICAgICAgZW1haWw6IGFjY291bnQuZW1haWwsXG4gICAgICAgICAgICBmaXJzdE5hbWU6IGFjY291bnQuZmlyc3ROYW1lLFxuICAgICAgICAgICAgbGFuZ0tleTogYWNjb3VudC5sYW5nS2V5LFxuICAgICAgICAgICAgbGFzdE5hbWU6IGFjY291bnQubGFzdE5hbWUsXG4gICAgICAgICAgICBsb2dpbjogYWNjb3VudC5sb2dpbixcbiAgICAgICAgICAgIGltYWdlVXJsOiBhY2NvdW50LmltYWdlVXJsXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBTZXR0aW5nc0NvbXBvbmVudCB9IGZyb20gJy4vc2V0dGluZ3MuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IHNldHRpbmdzUm91dGU6IFJvdXRlID0ge1xuICAgIHBhdGg6ICdzZXR0aW5ncycsXG4gICAgY29tcG9uZW50OiBTZXR0aW5nc0NvbXBvbmVudCxcbiAgICBkYXRhOiB7XG4gICAgICAgIGF1dGhvcml0aWVzOiBbJ1JPTEVfVVNFUiddLFxuICAgICAgICBwYWdlVGl0bGU6ICdnbG9iYWwubWVudS5hY2NvdW50LnNldHRpbmdzJ1xuICAgIH0sXG4gICAgY2FuQWN0aXZhdGU6IFtVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlXVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9zZXR0aW5ncy9zZXR0aW5ncy5yb3V0ZS50cyIsImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBOZW9qaGlwc3RlclNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZCc7XG4vKiBqaGlwc3Rlci1uZWVkbGUtYWRkLWFkbWluLW1vZHVsZS1pbXBvcnQgLSBKSGlwc3RlciB3aWxsIGFkZCBhZG1pbiBtb2R1bGVzIGltcG9ydHMgaGVyZSAqL1xuXG5pbXBvcnQge1xuICAgIGFkbWluU3RhdGUsXG4gICAgQXVkaXRzQ29tcG9uZW50LFxuICAgIFVzZXJNZ210Q29tcG9uZW50LFxuICAgIFVzZXJEaWFsb2dDb21wb25lbnQsXG4gICAgVXNlckRlbGV0ZURpYWxvZ0NvbXBvbmVudCxcbiAgICBVc2VyTWdtdERldGFpbENvbXBvbmVudCxcbiAgICBVc2VyTWdtdERpYWxvZ0NvbXBvbmVudCxcbiAgICBVc2VyTWdtdERlbGV0ZURpYWxvZ0NvbXBvbmVudCxcbiAgICBMb2dzQ29tcG9uZW50LFxuICAgIEpoaU1ldHJpY3NNb25pdG9yaW5nTW9kYWxDb21wb25lbnQsXG4gICAgSmhpTWV0cmljc01vbml0b3JpbmdDb21wb25lbnQsXG4gICAgSmhpSGVhbHRoTW9kYWxDb21wb25lbnQsXG4gICAgSmhpSGVhbHRoQ2hlY2tDb21wb25lbnQsXG4gICAgSmhpQ29uZmlndXJhdGlvbkNvbXBvbmVudCxcbiAgICBKaGlEb2NzQ29tcG9uZW50LFxuICAgIEF1ZGl0c1NlcnZpY2UsXG4gICAgSmhpQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgSmhpSGVhbHRoU2VydmljZSxcbiAgICBKaGlNZXRyaWNzU2VydmljZSxcbiAgICBMb2dzU2VydmljZSxcbiAgICBVc2VyUmVzb2x2ZVBhZ2luZ1BhcmFtcyxcbiAgICBVc2VyUmVzb2x2ZSxcbiAgICBVc2VyTW9kYWxTZXJ2aWNlXG59IGZyb20gJy4vJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5lb2poaXBzdGVyU2hhcmVkTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChhZG1pblN0YXRlLCB7IHVzZUhhc2g6IHRydWUgfSksXG4gICAgICAgIC8qIGpoaXBzdGVyLW5lZWRsZS1hZGQtYWRtaW4tbW9kdWxlIC0gSkhpcHN0ZXIgd2lsbCBhZGQgYWRtaW4gbW9kdWxlcyBoZXJlICovXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXVkaXRzQ29tcG9uZW50LFxuICAgICAgICBVc2VyTWdtdENvbXBvbmVudCxcbiAgICAgICAgVXNlckRpYWxvZ0NvbXBvbmVudCxcbiAgICAgICAgVXNlckRlbGV0ZURpYWxvZ0NvbXBvbmVudCxcbiAgICAgICAgVXNlck1nbXREZXRhaWxDb21wb25lbnQsXG4gICAgICAgIFVzZXJNZ210RGlhbG9nQ29tcG9uZW50LFxuICAgICAgICBVc2VyTWdtdERlbGV0ZURpYWxvZ0NvbXBvbmVudCxcbiAgICAgICAgTG9nc0NvbXBvbmVudCxcbiAgICAgICAgSmhpQ29uZmlndXJhdGlvbkNvbXBvbmVudCxcbiAgICAgICAgSmhpSGVhbHRoQ2hlY2tDb21wb25lbnQsXG4gICAgICAgIEpoaUhlYWx0aE1vZGFsQ29tcG9uZW50LFxuICAgICAgICBKaGlEb2NzQ29tcG9uZW50LFxuICAgICAgICBKaGlNZXRyaWNzTW9uaXRvcmluZ0NvbXBvbmVudCxcbiAgICAgICAgSmhpTWV0cmljc01vbml0b3JpbmdNb2RhbENvbXBvbmVudFxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIFVzZXJNZ210RGlhbG9nQ29tcG9uZW50LFxuICAgICAgICBVc2VyTWdtdERlbGV0ZURpYWxvZ0NvbXBvbmVudCxcbiAgICAgICAgSmhpSGVhbHRoTW9kYWxDb21wb25lbnQsXG4gICAgICAgIEpoaU1ldHJpY3NNb25pdG9yaW5nTW9kYWxDb21wb25lbnQsXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQXVkaXRzU2VydmljZSxcbiAgICAgICAgSmhpQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgICAgIEpoaUhlYWx0aFNlcnZpY2UsXG4gICAgICAgIEpoaU1ldHJpY3NTZXJ2aWNlLFxuICAgICAgICBMb2dzU2VydmljZSxcbiAgICAgICAgVXNlclJlc29sdmVQYWdpbmdQYXJhbXMsXG4gICAgICAgIFVzZXJSZXNvbHZlLFxuICAgICAgICBVc2VyTW9kYWxTZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgTmVvamhpcHN0ZXJBZG1pbk1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hZG1pbi5tb2R1bGUudHMiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge1xuICAgIGF1ZGl0c1JvdXRlLFxuICAgIGNvbmZpZ3VyYXRpb25Sb3V0ZSxcbiAgICBkb2NzUm91dGUsXG4gICAgaGVhbHRoUm91dGUsXG4gICAgbG9nc1JvdXRlLFxuICAgIG1ldHJpY3NSb3V0ZSxcbiAgICB1c2VyTWdtdFJvdXRlLFxuICAgIHVzZXJEaWFsb2dSb3V0ZVxufSBmcm9tICcuLyc7XG5cbmltcG9ydCB7IFVzZXJSb3V0ZUFjY2Vzc1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQnO1xuXG5jb25zdCBBRE1JTl9ST1VURVMgPSBbXG4gICAgYXVkaXRzUm91dGUsXG4gICAgY29uZmlndXJhdGlvblJvdXRlLFxuICAgIGRvY3NSb3V0ZSxcbiAgICBoZWFsdGhSb3V0ZSxcbiAgICBsb2dzUm91dGUsXG4gICAgLi4udXNlck1nbXRSb3V0ZSxcbiAgICBtZXRyaWNzUm91dGVcbl07XG5cbmV4cG9ydCBjb25zdCBhZG1pblN0YXRlOiBSb3V0ZXMgPSBbe1xuICAgIHBhdGg6ICcnLFxuICAgIGRhdGE6IHtcbiAgICAgICAgYXV0aG9yaXRpZXM6IFsnUk9MRV9BRE1JTiddXG4gICAgfSxcbiAgICBjYW5BY3RpdmF0ZTogW1VzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VdLFxuICAgIGNoaWxkcmVuOiBBRE1JTl9ST1VURVNcbn0sXG4gICAgLi4udXNlckRpYWxvZ1JvdXRlXG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hZG1pbi5yb3V0ZS50cyIsImV4cG9ydCBjbGFzcyBBdWRpdERhdGEge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgcmVtb3RlQWRkcmVzczogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgc2Vzc2lvbklkOiBzdHJpbmdcbiAgICApIHsgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hdWRpdHMvYXVkaXQtZGF0YS5tb2RlbC50cyIsImltcG9ydCB7IEF1ZGl0RGF0YSB9IGZyb20gJy4vYXVkaXQtZGF0YS5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBBdWRpdCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBkYXRhOiBBdWRpdERhdGEsXG4gICAgICAgIHB1YmxpYyBwcmluY2lwYWw6IHN0cmluZyxcbiAgICAgICAgcHVibGljIHRpbWVzdGFtcDogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgdHlwZTogc3RyaW5nXG4gICAgKSB7wqB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdC5tb2RlbC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2ICpuZ0lmPVxcXCJhdWRpdHNcXFwiPiA8aDIgamhpVHJhbnNsYXRlPVxcXCJhdWRpdHMudGl0bGVcXFwiPkF1ZGl0czwvaDI+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC01XFxcIj4gPGg0IGpoaVRyYW5zbGF0ZT1cXFwiYXVkaXRzLmZpbHRlci50aXRsZVxcXCI+RmlsdGVyIGJ5IGRhdGU8L2g0PiA8cCBjbGFzcz1cXFwiZC1mbGV4XFxcIj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJhdWRpdHMuZmlsdGVyLmZyb21cXFwiIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+ZnJvbTwvc3Bhbj4gPGlucHV0IHR5cGU9XFxcImRhdGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInN0YXJ0XFxcIiBbKG5nTW9kZWwpXT1cXFwiZnJvbURhdGVcXFwiIChuZ01vZGVsQ2hhbmdlKT1cXFwib25DaGFuZ2VEYXRlKCRldmVudClcXFwiIHJlcXVpcmVkLz4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJhdWRpdHMuZmlsdGVyLnRvXFxcIiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPnRvPC9zcGFuPiA8aW5wdXQgdHlwZT1cXFwiZGF0ZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiZW5kXFxcIiBbKG5nTW9kZWwpXT1cXFwidG9EYXRlXFxcIiAobmdNb2RlbENoYW5nZSk9XFxcIm9uQ2hhbmdlRGF0ZSgkZXZlbnQpXFxcIiByZXF1aXJlZC8+IDwvcD4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1jb25kZW5zZWQgdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZFxcXCI+IDx0aGVhZD4gPHRyPiA8dGggKGNsaWNrKT1cXFwib3JkZXJQcm9wID0gJ3RpbWVzdGFtcCc7IHJldmVyc2U9IXJldmVyc2VcXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiYXVkaXRzLnRhYmxlLmhlYWRlci5kYXRlXFxcIj5EYXRlPC9zcGFuPjwvdGg+IDx0aCAoY2xpY2spPVxcXCJvcmRlclByb3AgPSAncHJpbmNpcGFsJzsgcmV2ZXJzZT0hcmV2ZXJzZVxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJhdWRpdHMudGFibGUuaGVhZGVyLnByaW5jaXBhbFxcXCI+VXNlcjwvc3Bhbj48L3RoPiA8dGggKGNsaWNrKT1cXFwib3JkZXJQcm9wID0gJ3R5cGUnOyByZXZlcnNlPSFyZXZlcnNlXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImF1ZGl0cy50YWJsZS5oZWFkZXIuc3RhdHVzXFxcIj5TdGF0ZTwvc3Bhbj48L3RoPiA8dGggKGNsaWNrKT1cXFwib3JkZXJQcm9wID0gJ2RhdGEubWVzc2FnZSc7IHJldmVyc2U9IXJldmVyc2VcXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiYXVkaXRzLnRhYmxlLmhlYWRlci5kYXRhXFxcIj5FeHRyYSBkYXRhPC9zcGFuPjwvdGg+IDwvdHI+IDwvdGhlYWQ+IDx0ciAqbmdGb3I9XFxcImxldCBhdWRpdCBvZiBnZXRBdWRpdHMoKVxcXCI+IDx0ZD48c3Bhbj57e2F1ZGl0LnRpbWVzdGFtcHwgZGF0ZTonbWVkaXVtJ319PC9zcGFuPjwvdGQ+IDx0ZD48c21hbGw+e3thdWRpdC5wcmluY2lwYWx9fTwvc21hbGw+PC90ZD4gPHRkPnt7YXVkaXQudHlwZX19PC90ZD4gPHRkPiA8c3BhbiAqbmdJZj1cXFwiYXVkaXQuZGF0YVxcXCIgbmctc2hvdz1cXFwiYXVkaXQuZGF0YS5tZXNzYWdlXFxcIj57e2F1ZGl0LmRhdGEubWVzc2FnZX19PC9zcGFuPiA8c3BhbiAqbmdJZj1cXFwiYXVkaXQuZGF0YVxcXCIgbmctc2hvdz1cXFwiYXVkaXQuZGF0YS5yZW1vdGVBZGRyZXNzXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImF1ZGl0cy50YWJsZS5kYXRhLnJlbW90ZUFkZHJlc3NcXFwiPlJlbW90ZSBBZGRyZXNzPC9zcGFuPiB7e2F1ZGl0LmRhdGEucmVtb3RlQWRkcmVzc319PC9zcGFuPiA8L3RkPiA8L3RyPiA8L3RhYmxlPiA8L2Rpdj4gPGRpdiAqbmdJZj1cXFwiYXVkaXRzXFxcIj4gPGRpdiBjbGFzcz1cXFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcXFwiPiA8amhpLWl0ZW0tY291bnQgW3BhZ2VdPVxcXCJwYWdlXFxcIiBbdG90YWxdPVxcXCJ0b3RhbEl0ZW1zXFxcIiBbaXRlbXNQZXJQYWdlXT1cXFwiaXRlbXNQZXJQYWdlXFxcIj48L2poaS1pdGVtLWNvdW50PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcXFwiPiA8bmdiLXBhZ2luYXRpb24gW2NvbGxlY3Rpb25TaXplXT1cXFwidG90YWxJdGVtc1xcXCIgWyhwYWdlKV09XFxcInBhZ2VcXFwiIChwYWdlQ2hhbmdlKT1cXFwibG9hZFBhZ2UocGFnZSlcXFwiPjwvbmdiLXBhZ2luYXRpb24+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hdWRpdHMvYXVkaXRzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYXVkaXRzL2F1ZGl0cy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSmhpUGFyc2VMaW5rcyB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgQXVkaXQgfSBmcm9tICcuL2F1ZGl0Lm1vZGVsJztcbmltcG9ydCB7IEF1ZGl0c1NlcnZpY2UgfSBmcm9tICcuL2F1ZGl0cy5zZXJ2aWNlJztcbmltcG9ydCB7IElURU1TX1BFUl9QQUdFIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IFBhZ2luYXRpb25Db25maWcgfSBmcm9tICcuLi8uLi9ibG9ja3MvY29uZmlnL3VpYi1wYWdpbmF0aW9uLmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2poaS1hdWRpdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdWRpdHMuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEF1ZGl0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgYXVkaXRzOiBBdWRpdFtdO1xuICAgIGZyb21EYXRlOiBzdHJpbmc7XG4gICAgaXRlbXNQZXJQYWdlOiBhbnk7XG4gICAgbGlua3M6IGFueTtcbiAgICBwYWdlOiBudW1iZXI7XG4gICAgb3JkZXJQcm9wOiBzdHJpbmc7XG4gICAgcmV2ZXJzZTogYm9vbGVhbjtcbiAgICB0b0RhdGU6IHN0cmluZztcbiAgICB0b3RhbEl0ZW1zOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhdWRpdHNTZXJ2aWNlOiBBdWRpdHNTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHBhcnNlTGlua3M6IEpoaVBhcnNlTGlua3MsXG4gICAgICAgIHByaXZhdGUgcGFnaW5hdGlvbkNvbmZpZzogUGFnaW5hdGlvbkNvbmZpZyxcbiAgICAgICAgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGVcbiAgICApIHtcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSBJVEVNU19QRVJfUEFHRTtcbiAgICAgICAgdGhpcy5wYWdlID0gMTtcbiAgICAgICAgdGhpcy5yZXZlcnNlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub3JkZXJQcm9wID0gJ3RpbWVzdGFtcCc7XG4gICAgfVxuXG4gICAgZ2V0QXVkaXRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zb3J0QXVkaXRzKHRoaXMuYXVkaXRzKTtcbiAgICB9XG5cbiAgICBsb2FkUGFnZShwYWdlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZURhdGUoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy50b2RheSgpO1xuICAgICAgICB0aGlzLnByZXZpb3VzTW9udGgoKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZURhdGUoKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZURhdGUoKSB7XG4gICAgICAgIHRoaXMuYXVkaXRzU2VydmljZS5xdWVyeSh7cGFnZTogdGhpcy5wYWdlIC0gMSwgc2l6ZTogdGhpcy5pdGVtc1BlclBhZ2UsXG4gICAgICAgICAgICBmcm9tRGF0ZTogdGhpcy5mcm9tRGF0ZSwgdG9EYXRlOiB0aGlzLnRvRGF0ZX0pLnN1YnNjcmliZSgocmVzKSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuYXVkaXRzID0gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIHRoaXMubGlua3MgPSB0aGlzLnBhcnNlTGlua3MucGFyc2UocmVzLmhlYWRlcnMuZ2V0KCdsaW5rJykpO1xuICAgICAgICAgICAgdGhpcy50b3RhbEl0ZW1zID0gKyByZXMuaGVhZGVycy5nZXQoJ1gtVG90YWwtQ291bnQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJldmlvdXNNb250aCgpIHtcbiAgICAgICAgY29uc3QgZGF0ZUZvcm1hdCA9ICd5eXl5LU1NLWRkJztcbiAgICAgICAgbGV0IGZyb21EYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICBpZiAoZnJvbURhdGUuZ2V0TW9udGgoKSA9PT0gMCkge1xuICAgICAgICAgICAgZnJvbURhdGUgPSBuZXcgRGF0ZShmcm9tRGF0ZS5nZXRGdWxsWWVhcigpIC0gMSwgMTEsIGZyb21EYXRlLmdldERhdGUoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmcm9tRGF0ZSA9IG5ldyBEYXRlKGZyb21EYXRlLmdldEZ1bGxZZWFyKCksIGZyb21EYXRlLmdldE1vbnRoKCkgLSAxLCBmcm9tRGF0ZS5nZXREYXRlKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mcm9tRGF0ZSA9IHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKGZyb21EYXRlLCBkYXRlRm9ybWF0KTtcbiAgICB9XG5cbiAgICB0b2RheSgpIHtcbiAgICAgICAgY29uc3QgZGF0ZUZvcm1hdCA9ICd5eXl5LU1NLWRkJztcbiAgICAgICAgLy8gVG9kYXkgKyAxIGRheSAtIG5lZWRlZCBpZiB0aGUgY3VycmVudCBkYXkgbXVzdCBiZSBpbmNsdWRlZFxuICAgICAgICBjb25zdCB0b2RheTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRvZGF5LnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgMSk7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCB0b2RheS5nZXRNb250aCgpLCB0b2RheS5nZXREYXRlKCkpO1xuICAgICAgICB0aGlzLnRvRGF0ZSA9IHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKGRhdGUsIGRhdGVGb3JtYXQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc29ydEF1ZGl0cyhhdWRpdHM6IEF1ZGl0W10pIHtcbiAgICAgICAgYXVkaXRzID0gYXVkaXRzLnNsaWNlKDApLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhW3RoaXMub3JkZXJQcm9wXSA8IGJbdGhpcy5vcmRlclByb3BdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChbYlt0aGlzLm9yZGVyUHJvcF0gPCBhW3RoaXMub3JkZXJQcm9wXV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJldmVyc2UgPyBhdWRpdHMucmV2ZXJzZSgpIDogYXVkaXRzO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYXVkaXRzL2F1ZGl0cy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEF1ZGl0c0NvbXBvbmVudCB9IGZyb20gJy4vYXVkaXRzLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBhdWRpdHNSb3V0ZTogUm91dGUgPSB7XG4gICAgcGF0aDogJ2F1ZGl0cycsXG4gICAgY29tcG9uZW50OiBBdWRpdHNDb21wb25lbnQsXG4gICAgZGF0YToge1xuICAgICAgICBwYWdlVGl0bGU6ICdhdWRpdHMudGl0bGUnXG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYXVkaXRzL2F1ZGl0cy5yb3V0ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1ZGl0c1NlcnZpY2UgIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG4gICAgcXVlcnkocmVxOiBhbnkpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIGNvbnN0IHBhcmFtczogVVJMU2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICBwYXJhbXMuc2V0KCdmcm9tRGF0ZScsIHJlcS5mcm9tRGF0ZSk7XG4gICAgICAgIHBhcmFtcy5zZXQoJ3RvRGF0ZScsIHJlcS50b0RhdGUpO1xuICAgICAgICBwYXJhbXMuc2V0KCdwYWdlJywgcmVxLnBhZ2UpO1xuICAgICAgICBwYXJhbXMuc2V0KCdzaXplJywgcmVxLnNpemUpO1xuICAgICAgICBwYXJhbXMuc2V0KCdzb3J0JywgcmVxLnNvcnQpO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBzZWFyY2g6IHBhcmFtc1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdtYW5hZ2VtZW50L2F1ZGl0cycsIG9wdGlvbnMpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYXVkaXRzL2F1ZGl0cy5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgKm5nSWY9XFxcImFsbENvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvblxcXCI+IDxoMiBqaGlUcmFuc2xhdGU9XFxcImNvbmZpZ3VyYXRpb24udGl0bGVcXFwiPkNvbmZpZ3VyYXRpb248L2gyPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImNvbmZpZ3VyYXRpb24uZmlsdGVyXFxcIj5GaWx0ZXIgKGJ5IHByZWZpeCk8L3NwYW4+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwiZmlsdGVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj4gPGxhYmVsPlNwcmluZyBjb25maWd1cmF0aW9uPC9sYWJlbD4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXJlc3BvbnNpdmUgZC10YWJsZVxcXCI+IDx0aGVhZD4gPHRyPiA8dGggY2xhc3M9XFxcInctNDBcXFwiIChjbGljayk9XFxcIm9yZGVyUHJvcCA9ICdwcmVmaXgnOyByZXZlcnNlPSFyZXZlcnNlXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImNvbmZpZ3VyYXRpb24udGFibGUucHJlZml4XFxcIj5QcmVmaXg8L3NwYW4+PC90aD4gPHRoIGNsYXNzPVxcXCJ3LTYwXFxcIiAoY2xpY2spPVxcXCJvcmRlclByb3AgPSAncHJvcGVydGllcyc7IHJldmVyc2U9IXJldmVyc2VcXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiY29uZmlndXJhdGlvbi50YWJsZS5wcm9wZXJ0aWVzXFxcIj5Qcm9wZXJ0aWVzPC9zcGFuPjwvdGg+IDwvdHI+IDwvdGhlYWQ+IDx0Ym9keT4gPHRyICpuZ0Zvcj1cXFwibGV0IGVudHJ5IG9mIChjb25maWd1cmF0aW9uIHwgcHVyZUZpbHRlcjpmaWx0ZXI6J3ByZWZpeCcgfCBvcmRlckJ5Om9yZGVyUHJvcDpyZXZlcnNlKVxcXCI+IDx0ZD48c3Bhbj57e2VudHJ5LnByZWZpeH19PC9zcGFuPjwvdGQ+IDx0ZD4gPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdGb3I9XFxcImxldCBrZXkgb2Yga2V5cyhlbnRyeS5wcm9wZXJ0aWVzKVxcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj57e2tleX19PC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC04XFxcIj4gPHNwYW4gY2xhc3M9XFxcImZsb2F0LXJpZ2h0IGJhZGdlIGJhZGdlLWRlZmF1bHQgYnJlYWtcXFwiPnt7ZW50cnkucHJvcGVydGllc1trZXldIHwganNvbn19PC9zcGFuPiA8L2Rpdj4gPC9kaXY+IDwvdGQ+IDwvdHI+IDwvdGJvZHk+IDwvdGFibGU+IDxkaXYgKm5nRm9yPVxcXCJsZXQga2V5IG9mIGtleXMoYWxsQ29uZmlndXJhdGlvbilcXFwiPiA8bGFiZWw+PHNwYW4+e3trZXl9fTwvc3Bhbj48L2xhYmVsPiA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXNtIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWQgdGFibGUtcmVzcG9uc2l2ZSBkLXRhYmxlXFxcIj4gPHRoZWFkPiA8dHI+IDx0aCBjbGFzcz1cXFwidy00MFxcXCI+UHJvcGVydHk8L3RoPiA8dGggY2xhc3M9XFxcInctNjBcXFwiPlZhbHVlPC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHIgKm5nRm9yPVxcXCJsZXQgaXRlbSBvZiBhbGxDb25maWd1cmF0aW9uW2tleV1cXFwiPiA8dGQgY2xhc3M9XFxcImJyZWFrXFxcIj57e2l0ZW0ua2V5fX08L3RkPiA8dGQgY2xhc3M9XFxcImJyZWFrXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZsb2F0LXJpZ2h0IGJhZGdlIGJhZGdlLWRlZmF1bHQgYnJlYWtcXFwiPnt7aXRlbS52YWx9fTwvc3Bhbj4gPC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEpoaUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1jb25maWd1cmF0aW9uJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29uZmlndXJhdGlvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSmhpQ29uZmlndXJhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgYWxsQ29uZmlndXJhdGlvbjogYW55ID0gbnVsbDtcbiAgICBjb25maWd1cmF0aW9uOiBhbnkgPSBudWxsO1xuICAgIGNvbmZpZ0tleXM6IGFueVtdO1xuICAgIGZpbHRlcjogc3RyaW5nO1xuICAgIG9yZGVyUHJvcDogc3RyaW5nO1xuICAgIHJldmVyc2U6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogSmhpQ29uZmlndXJhdGlvblNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy5jb25maWdLZXlzID0gW107XG4gICAgICAgIHRoaXMuZmlsdGVyID0gJyc7XG4gICAgICAgIHRoaXMub3JkZXJQcm9wID0gJ3ByZWZpeCc7XG4gICAgICAgIHRoaXMucmV2ZXJzZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGtleXMoZGljdCk6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gKGRpY3QgPT09IHVuZGVmaW5lZCkgPyBbXSA6IE9iamVjdC5rZXlzKGRpY3QpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmdldCgpLnN1YnNjcmliZSgoY29uZmlndXJhdGlvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBjb25maWcgb2YgY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChjb25maWcucHJvcGVydGllcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnS2V5cy5wdXNoKE9iamVjdC5rZXlzKGNvbmZpZy5wcm9wZXJ0aWVzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmdldEVudigpLnN1YnNjcmliZSgoY29uZmlndXJhdGlvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbGxDb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBKaGlDb25maWd1cmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb25maWd1cmF0aW9uLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBjb25maWd1cmF0aW9uUm91dGU6IFJvdXRlID0ge1xuICAgIHBhdGg6ICdqaGktY29uZmlndXJhdGlvbicsXG4gICAgY29tcG9uZW50OiBKaGlDb25maWd1cmF0aW9uQ29tcG9uZW50LFxuICAgIGRhdGE6IHtcbiAgICAgICAgcGFnZVRpdGxlOiAnY29uZmlndXJhdGlvbi50aXRsZSdcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24ucm91dGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSmhpQ29uZmlndXJhdGlvblNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgfVxuXG4gICAgZ2V0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdtYW5hZ2VtZW50L2NvbmZpZ3Byb3BzJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzOiBhbnlbXSA9IFtdO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzT2JqZWN0ID0gcmVzLmpzb24oKTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcHJvcGVydGllc09iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzT2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5wdXNoKHByb3BlcnRpZXNPYmplY3Rba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcHJvcGVydGllcy5zb3J0KChwcm9wZXJ0eUEsIHByb3BlcnR5QikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAocHJvcGVydHlBLnByZWZpeCA9PT0gcHJvcGVydHlCLnByZWZpeCkgPyAwIDpcbiAgICAgICAgICAgICAgICAgICAgICAgKHByb3BlcnR5QS5wcmVmaXggPCBwcm9wZXJ0eUIucHJlZml4KSA/IC0xIDogMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRFbnYoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ21hbmFnZW1lbnQvZW52JykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzOiBhbnkgPSB7fTtcblxuICAgICAgICAgICAgY29uc3QgcHJvcGVydGllc09iamVjdCA9IHJlcy5qc29uKCk7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHByb3BlcnRpZXNPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllc09iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHNPYmplY3QgPSBwcm9wZXJ0aWVzT2JqZWN0W2tleV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHM6IGFueVtdID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB2YWxLZXkgaW4gdmFsc09iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHNPYmplY3QuaGFzT3duUHJvcGVydHkodmFsS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHMucHVzaCh7a2V5OiB2YWxLZXksIHZhbDogdmFsc09iamVjdFt2YWxLZXldfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllc1trZXldID0gdmFscztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0aWVzO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxpZnJhbWUgc3JjPVxcXCJzd2FnZ2VyLXVpL2luZGV4Lmh0bWxcXFwiIHdpZHRoPVxcXCIxMDAlXFxcIiBoZWlnaHQ9XFxcIjkwMFxcXCIgc2VhbWxlc3MgdGFyZ2V0PVxcXCJfdG9wXFxcIiB0aXRsZT1cXFwiU3dhZ2dlciBVSVxcXCIgY2xhc3M9XFxcImJvcmRlci0wXFxcIj48L2lmcmFtZT4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2RvY3MvZG9jcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2RvY3MvZG9jcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktZG9jcycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RvY3MuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEpoaURvY3NDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICkge1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vZG9jcy9kb2NzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSmhpRG9jc0NvbXBvbmVudCB9IGZyb20gJy4vZG9jcy5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgZG9jc1JvdXRlOiBSb3V0ZSA9IHtcbiAgICBwYXRoOiAnZG9jcycsXG4gICAgY29tcG9uZW50OiBKaGlEb2NzQ29tcG9uZW50LFxuICAgIGRhdGE6IHtcbiAgICAgICAgcGFnZVRpdGxlOiAnZ2xvYmFsLm1lbnUuYWRtaW4uYXBpZG9jcydcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9kb2NzL2RvY3Mucm91dGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj4gPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCIgaWQ9XFxcInNob3dIZWFsdGhMYWJlbFxcXCI+IHt7J2hlYWx0aC5pbmRpY2F0b3IuJyArIGJhc2VOYW1lKGN1cnJlbnRIZWFsdGgubmFtZSkgfCB0cmFuc2xhdGV9fSB7e3N1YlN5c3RlbU5hbWUoY3VycmVudEhlYWx0aC5uYW1lKX19IDwvaDQ+IDxidXR0b24gYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJhY3RpdmVNb2RhbC5kaXNtaXNzKCdjbG9zZWQnKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keSBwYWRcXFwiPiA8ZGl2ICpuZ0lmPVxcXCJjdXJyZW50SGVhbHRoLmRldGFpbHNcXFwiPiA8aDUgamhpVHJhbnNsYXRlPVxcXCJoZWFsdGguZGV0YWlscy5wcm9wZXJ0aWVzXFxcIj5Qcm9wZXJ0aWVzPC9oNT4gPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCI+IDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+IDx0aGVhZD4gPHRyPiA8dGggY2xhc3M9XFxcInRleHQtbGVmdFxcXCIgamhpVHJhbnNsYXRlPVxcXCJoZWFsdGguZGV0YWlscy5uYW1lXFxcIj5OYW1lPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LWxlZnRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiaGVhbHRoLmRldGFpbHMudmFsdWVcXFwiPlZhbHVlPC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHIgKm5nRm9yPVxcXCJsZXQgZW50cnkgb2YgY3VycmVudEhlYWx0aC5kZXRhaWxzIHwga2V5c1xcXCI+IDx0ZCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj57e2VudHJ5LmtleX19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LWxlZnRcXFwiPnt7cmVhZGFibGVWYWx1ZShlbnRyeS52YWx1ZSl9fTwvdGQ+IDwvdHI+IDwvdGJvZHk+IDwvdGFibGU+IDwvZGl2PiA8L2Rpdj4gPGRpdiAqbmdJZj1cXFwiY3VycmVudEhlYWx0aC5lcnJvclxcXCI+IDxoNCBqaGlUcmFuc2xhdGU9XFxcImhlYWx0aC5kZXRhaWxzLmVycm9yXFxcIj5FcnJvcjwvaDQ+IDxwcmU+e3tjdXJyZW50SGVhbHRoLmVycm9yfX08L3ByZT4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPiA8YnV0dG9uIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeSBmbG9hdC1sZWZ0XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcImFjdGl2ZU1vZGFsLmRpc21pc3MoJ2Nsb3NlZCcpXFxcIj5Eb25lPC9idXR0b24+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC1tb2RhbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGgtbW9kYWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgSmhpSGVhbHRoU2VydmljZSB9IGZyb20gJy4vaGVhbHRoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1oZWFsdGgtbW9kYWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9oZWFsdGgtbW9kYWwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEpoaUhlYWx0aE1vZGFsQ29tcG9uZW50IHtcblxuICAgIGN1cnJlbnRIZWFsdGg6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaGVhbHRoU2VydmljZTogSmhpSGVhbHRoU2VydmljZSwgcHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCkge31cblxuICAgIGJhc2VOYW1lKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhbHRoU2VydmljZS5nZXRCYXNlTmFtZShuYW1lKTtcbiAgICB9XG5cbiAgICBzdWJTeXN0ZW1OYW1lKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhbHRoU2VydmljZS5nZXRTdWJTeXN0ZW1OYW1lKG5hbWUpO1xuICAgIH1cblxuICAgIHJlYWRhYmxlVmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50SGVhbHRoLm5hbWUgIT09ICdkaXNrU3BhY2UnKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNob3VsZCBkaXNwbGF5IHN0b3JhZ2Ugc3BhY2UgaW4gYW4gaHVtYW4gcmVhZGFibGUgdW5pdFxuICAgICAgICBjb25zdCB2YWwgPSB2YWx1ZSAvIDEwNzM3NDE4MjQ7XG4gICAgICAgIGlmICh2YWwgPiAxKSB7IC8vIFZhbHVlXG4gICAgICAgICAgICByZXR1cm4gdmFsLnRvRml4ZWQoMikgKyAnIEdCJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAodmFsdWUgLyAxMDQ4NTc2KS50b0ZpeGVkKDIpICsgJyBNQic7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGgtbW9kYWwuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+IDxoMj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJoZWFsdGgudGl0bGVcXFwiPkhlYWx0aCBDaGVja3M8L3NwYW4+IDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBmbG9hdC1yaWdodFxcXCIgKGNsaWNrKT1cXFwicmVmcmVzaCgpXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXJlZnJlc2hcXFwiPjwvc3Bhbj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJoZWFsdGgucmVmcmVzaC5idXR0b25cXFwiPlJlZnJlc2g8L3NwYW4+IDwvYnV0dG9uPiA8L2gyPiA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIj4gPHRhYmxlIGlkPVxcXCJoZWFsdGhDaGVja1xcXCIgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPiA8dGhlYWQ+IDx0cj4gPHRoIGpoaVRyYW5zbGF0ZT1cXFwiaGVhbHRoLnRhYmxlLnNlcnZpY2VcXFwiPlNlcnZpY2UgTmFtZTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiaGVhbHRoLnRhYmxlLnN0YXR1c1xcXCI+U3RhdHVzPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCIgamhpVHJhbnNsYXRlPVxcXCJoZWFsdGguZGV0YWlscy5kZXRhaWxzXFxcIj5EZXRhaWxzPC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHIgKm5nRm9yPVxcXCJsZXQgaGVhbHRoIG9mIGhlYWx0aERhdGFcXFwiPiA8dGQ+e3snaGVhbHRoLmluZGljYXRvci4nICsgYmFzZU5hbWUoaGVhbHRoLm5hbWUpIHwgdHJhbnNsYXRlfX0ge3tzdWJTeXN0ZW1OYW1lKGhlYWx0aC5uYW1lKX19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+IDxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCIgW25nQ2xhc3NdPVxcXCJnZXRCYWRnZUNsYXNzKGhlYWx0aC5zdGF0dXMpXFxcIiBqaGlUcmFuc2xhdGU9XFxcInt7J2hlYWx0aC5zdGF0dXMuJyArIGhlYWx0aC5zdGF0dXN9fVxcXCI+IHt7aGVhbHRoLnN0YXR1c319IDwvc3Bhbj4gPC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+IDxhIGNsYXNzPVxcXCJoYW5kXFxcIiAoY2xpY2spPVxcXCJzaG93SGVhbHRoKGhlYWx0aClcXFwiICpuZ0lmPVxcXCJoZWFsdGguZGV0YWlscyB8fCBoZWFsdGguZXJyb3JcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZXllXFxcIj48L2k+IDwvYT4gPC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGguY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYk1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBKaGlIZWFsdGhTZXJ2aWNlIH0gZnJvbSAnLi9oZWFsdGguc2VydmljZSc7XG5pbXBvcnQgeyBKaGlIZWFsdGhNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vaGVhbHRoLW1vZGFsLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWhlYWx0aCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hlYWx0aC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSmhpSGVhbHRoQ2hlY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGhlYWx0aERhdGE6IGFueTtcbiAgICB1cGRhdGluZ0hlYWx0aDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwsXG4gICAgICAgIHByaXZhdGUgaGVhbHRoU2VydmljZTogSmhpSGVhbHRoU2VydmljZVxuICAgICkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIGJhc2VOYW1lKG5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFsdGhTZXJ2aWNlLmdldEJhc2VOYW1lKG5hbWUpO1xuICAgIH1cblxuICAgIGdldEJhZGdlQ2xhc3Moc3RhdHVzU3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXR1c1N0YXRlID09PSAnVVAnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2JhZGdlLXN1Y2Nlc3MnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdiYWRnZS1kYW5nZXInO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGluZ0hlYWx0aCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5oZWFsdGhTZXJ2aWNlLmNoZWNrSGVhbHRoKCkuc3Vic2NyaWJlKChoZWFsdGgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoRGF0YSA9IHRoaXMuaGVhbHRoU2VydmljZS50cmFuc2Zvcm1IZWFsdGhEYXRhKGhlYWx0aCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0aW5nSGVhbHRoID0gZmFsc2U7XG4gICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNTAzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFsdGhEYXRhID0gdGhpcy5oZWFsdGhTZXJ2aWNlLnRyYW5zZm9ybUhlYWx0aERhdGEoZXJyb3IuanNvbigpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0aW5nSGVhbHRoID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dIZWFsdGgoaGVhbHRoOiBhbnkpIHtcbiAgICAgICAgY29uc3QgbW9kYWxSZWYgID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihKaGlIZWFsdGhNb2RhbENvbXBvbmVudCk7XG4gICAgICAgIG1vZGFsUmVmLmNvbXBvbmVudEluc3RhbmNlLmN1cnJlbnRIZWFsdGggPSBoZWFsdGg7XG4gICAgICAgIG1vZGFsUmVmLnJlc3VsdC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIC8vIExlZnQgYmxhbmsgaW50ZW50aW9uYWxseSwgbm90aGluZyB0byBkbyBoZXJlXG4gICAgICAgIH0sIChyZWFzb24pID0+IHtcbiAgICAgICAgICAgIC8vIExlZnQgYmxhbmsgaW50ZW50aW9uYWxseSwgbm90aGluZyB0byBkbyBoZXJlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN1YlN5c3RlbU5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWx0aFNlcnZpY2UuZ2V0U3ViU3lzdGVtTmFtZShuYW1lKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEpoaUhlYWx0aENoZWNrQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFsdGguY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IGhlYWx0aFJvdXRlOiBSb3V0ZSA9IHtcbiAgICBwYXRoOiAnamhpLWhlYWx0aCcsXG4gICAgY29tcG9uZW50OiBKaGlIZWFsdGhDaGVja0NvbXBvbmVudCxcbiAgICBkYXRhOiB7XG4gICAgICAgIHBhZ2VUaXRsZTogJ2hlYWx0aC50aXRsZSdcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9oZWFsdGgvaGVhbHRoLnJvdXRlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpoaUhlYWx0aFNlcnZpY2Uge1xuXG4gICAgc2VwYXJhdG9yOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgICAgICAgdGhpcy5zZXBhcmF0b3IgPSAnLic7XG4gICAgfVxuXG4gICAgY2hlY2tIZWFsdGgoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ21hbmFnZW1lbnQvaGVhbHRoJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm1IZWFsdGhEYXRhKGRhdGEpOiBhbnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IFtdO1xuICAgICAgICB0aGlzLmZsYXR0ZW5IZWFsdGhEYXRhKHJlc3BvbnNlLCBudWxsLCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cblxuICAgIGdldEJhc2VOYW1lKG5hbWUpOiBzdHJpbmcge1xuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgY29uc3Qgc3BsaXQgPSBuYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICByZXR1cm4gc3BsaXRbMF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTdWJTeXN0ZW1OYW1lKG5hbWUpOiBzdHJpbmcge1xuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgY29uc3Qgc3BsaXQgPSBuYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICBzcGxpdC5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICBjb25zdCByZW1haW5kZXIgPSBzcGxpdC5qb2luKCcuJyk7XG4gICAgICAgICAgICByZXR1cm4gcmVtYWluZGVyID8gJyAtICcgKyByZW1haW5kZXIgOiAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qIHByaXZhdGUgbWV0aG9kcyAqL1xuICAgIHByaXZhdGUgYWRkSGVhbHRoT2JqZWN0KHJlc3VsdCwgaXNMZWFmLCBoZWFsdGhPYmplY3QsIG5hbWUpOiBhbnkge1xuICAgICAgICBjb25zdCBoZWFsdGhEYXRhOiBhbnkgPSB7XG4gICAgICAgICAgICBuYW1lXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZGV0YWlscyA9IHt9O1xuICAgICAgICBsZXQgaGFzRGV0YWlscyA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGhlYWx0aE9iamVjdCkge1xuICAgICAgICAgICAgaWYgKGhlYWx0aE9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBoZWFsdGhPYmplY3Rba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnc3RhdHVzJyB8fCBrZXkgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhbHRoRGF0YVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzSGVhbHRoT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNEZXRhaWxzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCB0aGUgZGV0YWlsc1xuICAgICAgICBpZiAoaGFzRGV0YWlscykge1xuICAgICAgICAgICAgaGVhbHRoRGF0YS5kZXRhaWxzID0gZGV0YWlscztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9ubHkgYWRkIG5vZGVzIGlmIHRoZXkgcHJvdmlkZSBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gICAgICAgIGlmIChpc0xlYWYgfHwgaGFzRGV0YWlscyB8fCBoZWFsdGhEYXRhLmVycm9yKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChoZWFsdGhEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGVhbHRoRGF0YTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZsYXR0ZW5IZWFsdGhEYXRhKHJlc3VsdCwgcGF0aCwgZGF0YSk6IGFueSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0hlYWx0aE9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzU3ViU3lzdGVtKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRIZWFsdGhPYmplY3QocmVzdWx0LCBmYWxzZSwgdmFsdWUsIHRoaXMuZ2V0TW9kdWxlTmFtZShwYXRoLCBrZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxhdHRlbkhlYWx0aERhdGEocmVzdWx0LCB0aGlzLmdldE1vZHVsZU5hbWUocGF0aCwga2V5KSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRIZWFsdGhPYmplY3QocmVzdWx0LCB0cnVlLCB2YWx1ZSwgdGhpcy5nZXRNb2R1bGVOYW1lKHBhdGgsIGtleSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRNb2R1bGVOYW1lKHBhdGgsIG5hbWUpOiBzdHJpbmcge1xuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICBpZiAocGF0aCAmJiBuYW1lKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBwYXRoICsgdGhpcy5zZXBhcmF0b3IgKyBuYW1lO1xuICAgICAgICB9ICBlbHNlIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBwYXRoO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IG5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFzU3ViU3lzdGVtKGhlYWx0aE9iamVjdCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gaGVhbHRoT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoaGVhbHRoT2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGhlYWx0aE9iamVjdFtrZXldO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzSGVhbHRoT2JqZWN0KGhlYWx0aE9iamVjdCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gaGVhbHRoT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoaGVhbHRoT2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnc3RhdHVzJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5zZXJ2aWNlLnRzIiwiZXhwb3J0ICogZnJvbSAnLi9hdWRpdHMvYXVkaXRzLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2F1ZGl0cy9hdWRpdHMuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2F1ZGl0cy9hdWRpdHMucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9hdWRpdHMvYXVkaXQubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9hdWRpdHMvYXVkaXQtZGF0YS5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL2RvY3MvZG9jcy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9kb2NzL2RvY3Mucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9oZWFsdGgvaGVhbHRoLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2hlYWx0aC9oZWFsdGgtbW9kYWwuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vaGVhbHRoL2hlYWx0aC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vaGVhbHRoL2hlYWx0aC5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL2xvZ3MvbG9ncy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9sb2dzL2xvZ3Muc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2xvZ3MvbG9ncy5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL2xvZ3MvbG9nLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vbWV0cmljcy9tZXRyaWNzLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL21ldHJpY3MvbWV0cmljcy1tb2RhbC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXRyaWNzL21ldHJpY3Muc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL21ldHJpY3MvbWV0cmljcy5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGlhbG9nLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRldGFpbC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyLW1hbmFnZW1lbnQvdXNlci1tb2RhbC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYWRtaW4ucm91dGUnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9pbmRleC50cyIsImV4cG9ydCBjbGFzcyBMb2cge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgbGV2ZWw6IHN0cmluZ1xuICAgICkgeyB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ3MvbG9nLm1vZGVsLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiICpuZ0lmPVxcXCJsb2dnZXJzXFxcIj4gPGgyIGpoaVRyYW5zbGF0ZT1cXFwibG9ncy50aXRsZVxcXCI+TG9nczwvaDI+IDxwIGpoaVRyYW5zbGF0ZT1cXFwibG9ncy5uYmxvZ2dlcnNcXFwiIHRyYW5zbGF0ZVZhbHVlcz1cXFwie3RvdGFsOiAne3sgbG9nZ2Vycy5sZW5ndGggfX0nfVxcXCI+VGhlcmUgYXJlIHt7IGxvZ2dlcnMubGVuZ3RoIH19IGxvZ2dlcnMuPC9wPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImxvZ3MuZmlsdGVyXFxcIj5GaWx0ZXI8L3NwYW4+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwiZmlsdGVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1jb25kZW5zZWQgdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZFxcXCI+IDx0aGVhZD4gPHRyIHRpdGxlPVxcXCJjbGljayB0byBvcmRlclxcXCI+IDx0aCAoY2xpY2spPVxcXCJvcmRlclByb3AgPSAnbmFtZSc7IHJldmVyc2U9IXJldmVyc2VcXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwibG9ncy50YWJsZS5uYW1lXFxcIj5OYW1lPC9zcGFuPjwvdGg+IDx0aCAoY2xpY2spPVxcXCJvcmRlclByb3AgPSAnbGV2ZWwnOyByZXZlcnNlPSFyZXZlcnNlXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImxvZ3MudGFibGUubGV2ZWxcXFwiPkxldmVsPC9zcGFuPjwvdGg+IDwvdHI+IDwvdGhlYWQ+IDx0ciAqbmdGb3I9XFxcImxldCBsb2dnZXIgb2YgKGxvZ2dlcnMgfCBwdXJlRmlsdGVyOmZpbHRlcjonbmFtZScgfCBvcmRlckJ5Om9yZGVyUHJvcDpyZXZlcnNlKVxcXCI+IDx0ZD48c21hbGw+e3tsb2dnZXIubmFtZSB8IHNsaWNlOjA6MTQwfX08L3NtYWxsPjwvdGQ+IDx0ZD4gPGJ1dHRvbiAoY2xpY2spPVxcXCJjaGFuZ2VMZXZlbChsb2dnZXIubmFtZSwgJ1RSQUNFJylcXFwiIFtuZ0NsYXNzXT1cXFwiKGxvZ2dlci5sZXZlbD09J1RSQUNFJykgPyAnYnRuLWRhbmdlcicgOiAnYnRuLXNlY29uZGFyeSdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtXFxcIj5UUkFDRTwvYnV0dG9uPiA8YnV0dG9uIChjbGljayk9XFxcImNoYW5nZUxldmVsKGxvZ2dlci5uYW1lLCAnREVCVUcnKVxcXCIgW25nQ2xhc3NdPVxcXCIobG9nZ2VyLmxldmVsPT0nREVCVUcnKSA/ICdidG4td2FybmluZycgOiAnYnRuLXNlY29uZGFyeSdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtXFxcIj5ERUJVRzwvYnV0dG9uPiA8YnV0dG9uIChjbGljayk9XFxcImNoYW5nZUxldmVsKGxvZ2dlci5uYW1lLCAnSU5GTycpXFxcIiBbbmdDbGFzc109XFxcIihsb2dnZXIubGV2ZWw9PSdJTkZPJykgPyAnYnRuLWluZm8nIDogJ2J0bi1zZWNvbmRhcnknXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zbVxcXCI+SU5GTzwvYnV0dG9uPiA8YnV0dG9uIChjbGljayk9XFxcImNoYW5nZUxldmVsKGxvZ2dlci5uYW1lLCAnV0FSTicpXFxcIiBbbmdDbGFzc109XFxcIihsb2dnZXIubGV2ZWw9PSdXQVJOJykgPyAnYnRuLXN1Y2Nlc3MnIDogJ2J0bi1zZWNvbmRhcnknXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zbVxcXCI+V0FSTjwvYnV0dG9uPiA8YnV0dG9uIChjbGljayk9XFxcImNoYW5nZUxldmVsKGxvZ2dlci5uYW1lLCAnRVJST1InKVxcXCIgW25nQ2xhc3NdPVxcXCIobG9nZ2VyLmxldmVsPT0nRVJST1InKSA/ICdidG4tcHJpbWFyeScgOiAnYnRuLXNlY29uZGFyeSdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtXFxcIj5FUlJPUjwvYnV0dG9uPiA8L3RkPiA8L3RyPiA8L3RhYmxlPiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ3MvbG9ncy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ3MvbG9ncy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL2xvZy5tb2RlbCc7XG5pbXBvcnQgeyBMb2dzU2VydmljZSB9IGZyb20gJy4vbG9ncy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktbG9ncycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xvZ3MuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGxvZ2dlcnM6IExvZ1tdO1xuICAgIGZpbHRlcjogc3RyaW5nO1xuICAgIG9yZGVyUHJvcDogc3RyaW5nO1xuICAgIHJldmVyc2U6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBsb2dzU2VydmljZTogTG9nc1NlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSAnJztcbiAgICAgICAgdGhpcy5vcmRlclByb3AgPSAnbmFtZSc7XG4gICAgICAgIHRoaXMucmV2ZXJzZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmxvZ3NTZXJ2aWNlLmZpbmRBbGwoKS5zdWJzY3JpYmUoKGxvZ2dlcnMpID0+IHRoaXMubG9nZ2VycyA9IGxvZ2dlcnMpO1xuICAgIH1cblxuICAgIGNoYW5nZUxldmVsKG5hbWU6IHN0cmluZywgbGV2ZWw6IHN0cmluZykge1xuICAgICAgICBjb25zdCBsb2cgPSBuZXcgTG9nKG5hbWUsIGxldmVsKTtcbiAgICAgICAgdGhpcy5sb2dzU2VydmljZS5jaGFuZ2VMZXZlbChsb2cpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvZ3NTZXJ2aWNlLmZpbmRBbGwoKS5zdWJzY3JpYmUoKGxvZ2dlcnMpID0+IHRoaXMubG9nZ2VycyA9IGxvZ2dlcnMpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ3MvbG9ncy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IExvZ3NDb21wb25lbnQgfSBmcm9tICcuL2xvZ3MuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IGxvZ3NSb3V0ZTogUm91dGUgPSB7XG4gICAgcGF0aDogJ2xvZ3MnLFxuICAgIGNvbXBvbmVudDogTG9nc0NvbXBvbmVudCxcbiAgICBkYXRhOiB7XG4gICAgICAgIHBhZ2VUaXRsZTogJ2xvZ3MudGl0bGUnXG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9ncy9sb2dzLnJvdXRlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9sb2cubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9nc1NlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XG5cbiAgICBjaGFuZ2VMZXZlbChsb2c6IExvZyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoJ21hbmFnZW1lbnQvbG9ncycsIGxvZyk7XG4gICAgfVxuXG4gICAgZmluZEFsbCgpOiBPYnNlcnZhYmxlPExvZ1tdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdtYW5hZ2VtZW50L2xvZ3MnKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9ncy9sb2dzLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+IDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0udGhyZWFkcy5kdW1wLnRpdGxlXFxcIj5UaHJlYWRzIGR1bXA8L2g0PiA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiAoY2xpY2spPVxcXCJhY3RpdmVNb2RhbC5kaXNtaXNzKCdjbG9zZWQnKVxcXCI+JnRpbWVzOzwvYnV0dG9uPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJ0aHJlYWREdW1wRmlsdGVyID0ge31cXFwiPkFsbCZuYnNwOzxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLWRlZmF1bHRcXFwiPnt7dGhyZWFkRHVtcEFsbH19PC9zcGFuPjwvc3Bhbj4mbmJzcDsgPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLXN1Y2Nlc3NcXFwiIChjbGljayk9XFxcInRocmVhZER1bXBGaWx0ZXIgPSB7dGhyZWFkU3RhdGU6ICdSVU5OQUJMRSd9XFxcIj5SdW5uYWJsZSZuYnNwOzxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLWRlZmF1bHRcXFwiPnt7dGhyZWFkRHVtcFJ1bm5hYmxlfX08L3NwYW4+PC9zcGFuPiZuYnNwOyA8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtaW5mb1xcXCIgKGNsaWNrKT1cXFwidGhyZWFkRHVtcEZpbHRlciA9IHt0aHJlYWRTdGF0ZTogJ1dBSVRJTkcnfVxcXCI+V2FpdGluZyZuYnNwOzxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLWRlZmF1bHRcXFwiPnt7dGhyZWFkRHVtcFdhaXRpbmd9fTwvc3Bhbj48L3NwYW4+Jm5ic3A7IDxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS13YXJuaW5nXFxcIiAoY2xpY2spPVxcXCJ0aHJlYWREdW1wRmlsdGVyID0ge3RocmVhZFN0YXRlOiAnVElNRURfV0FJVElORyd9XFxcIj5UaW1lZCBXYWl0aW5nJm5ic3A7PHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLXBpbGwgYmFkZ2UtZGVmYXVsdFxcXCI+e3t0aHJlYWREdW1wVGltZWRXYWl0aW5nfX08L3NwYW4+PC9zcGFuPiZuYnNwOyA8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXFxcIiAoY2xpY2spPVxcXCJ0aHJlYWREdW1wRmlsdGVyID0ge3RocmVhZFN0YXRlOiAnQkxPQ0tFRCd9XFxcIj5CbG9ja2VkJm5ic3A7PHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLXBpbGwgYmFkZ2UtZGVmYXVsdFxcXCI+e3t0aHJlYWREdW1wQmxvY2tlZH19PC9zcGFuPjwvc3Bhbj4mbmJzcDsgPGRpdiBjbGFzcz1cXFwibXQtMlxcXCI+Jm5ic3A7PC9kaXY+IEZpbHRlciA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcInRocmVhZER1bXBGaWx0ZXJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPiA8ZGl2IGNsYXNzPVxcXCJwYWRcXFwiICpuZ0Zvcj1cXFwibGV0IGVudHJ5IG9mIHRocmVhZER1bXAgfCBwdXJlRmlsdGVyOnRocmVhZER1bXBGaWx0ZXI6J2xvY2tOYW1lJyB8IGtleXNcXFwiPiA8aDY+IDxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCIgW25nQ2xhc3NdPVxcXCJnZXRCYWRnZUNsYXNzKGVudHJ5LnZhbHVlLnRocmVhZFN0YXRlKVxcXCI+e3tlbnRyeS52YWx1ZS50aHJlYWRTdGF0ZX19PC9zcGFuPiZuYnNwO3t7ZW50cnkudmFsdWUudGhyZWFkTmFtZX19IChJRCB7e2VudHJ5LnZhbHVlLnRocmVhZElkfX0pIDxhIChjbGljayk9XFxcImVudHJ5LnNob3cgPSAhZW50cnkuc2hvd1xcXCIgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApO1xcXCI+IDxzcGFuIFtoaWRkZW5dPVxcXCJlbnRyeS5zaG93XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLnRocmVhZHMuZHVtcC5zaG93XFxcIj5TaG93IFN0YWNrVHJhY2U8L3NwYW4+IDxzcGFuIFtoaWRkZW5dPVxcXCIhZW50cnkuc2hvd1xcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS50aHJlYWRzLmR1bXAuaGlkZVxcXCI+SGlkZSBTdGFja1RyYWNlPC9zcGFuPiA8L2E+IDwvaDY+IDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiIFtoaWRkZW5dPVxcXCIhZW50cnkuc2hvd1xcXCI+IDxkaXYgY2xhc3M9XFxcImNhcmQtYmxvY2tcXFwiPiA8ZGl2ICpuZ0Zvcj1cXFwibGV0IHN0IG9mIGVudHJ5LnZhbHVlLnN0YWNrVHJhY2UgfCBrZXlzXFxcIiBjbGFzcz1cXFwiYnJlYWtcXFwiPiA8c2FtcD57e3N0LnZhbHVlLmNsYXNzTmFtZX19Lnt7c3QudmFsdWUubWV0aG9kTmFtZX19KDxjb2RlPnt7c3QudmFsdWUuZmlsZU5hbWV9fTp7e3N0LnZhbHVlLmxpbmVOdW1iZXJ9fTwvY29kZT4pPC9zYW1wPiA8c3BhbiBjbGFzcz1cXFwibXQtMVxcXCI+PC9zcGFuPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXNtIHRhYmxlLXJlc3BvbnNpdmVcXFwiPiA8dGhlYWQ+IDx0cj4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLnRocmVhZHMuZHVtcC5ibG9ja2VkdGltZVxcXCI+QmxvY2tlZCBUaW1lPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLnRocmVhZHMuZHVtcC5ibG9ja2VkY291bnRcXFwiPkJsb2NrZWQgQ291bnQ8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0udGhyZWFkcy5kdW1wLndhaXRlZHRpbWVcXFwiPldhaXRlZCBUaW1lPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLnRocmVhZHMuZHVtcC53YWl0ZWRjb3VudFxcXCI+V2FpdGVkIENvdW50PC90aD4gPHRoIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0udGhyZWFkcy5kdW1wLmxvY2tuYW1lXFxcIj5Mb2NrIE5hbWU8L3RoPiA8L3RyPiA8L3RoZWFkPiA8dGJvZHk+IDx0cj4gPHRkPnt7ZW50cnkudmFsdWUuYmxvY2tlZFRpbWV9fTwvdGQ+IDx0ZD57e2VudHJ5LnZhbHVlLmJsb2NrZWRDb3VudH19PC90ZD4gPHRkPnt7ZW50cnkudmFsdWUud2FpdGVkVGltZX19PC90ZD4gPHRkPnt7ZW50cnkudmFsdWUud2FpdGVkQ291bnR9fTwvdGQ+IDx0ZD48Y29kZT57e2VudHJ5LnZhbHVlLmxvY2tOYW1lfX08L2NvZGU+PC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPiA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5IHB1bGwtbGVmdFxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgKGNsaWNrKT1cXFwiYWN0aXZlTW9kYWwuZGlzbWlzcygnY2xvc2VkJylcXFwiPkRvbmU8L2J1dHRvbj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3MtbW9kYWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3MtbW9kYWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1tZXRyaWNzLW1vZGFsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbWV0cmljcy1tb2RhbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSmhpTWV0cmljc01vbml0b3JpbmdNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICB0aHJlYWREdW1wRmlsdGVyOiBhbnk7XG4gICAgdGhyZWFkRHVtcDogYW55O1xuICAgIHRocmVhZER1bXBBbGwgPSAwO1xuICAgIHRocmVhZER1bXBCbG9ja2VkID0gMDtcbiAgICB0aHJlYWREdW1wUnVubmFibGUgPSAwO1xuICAgIHRocmVhZER1bXBUaW1lZFdhaXRpbmcgPSAwO1xuICAgIHRocmVhZER1bXBXYWl0aW5nID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWwpIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy50aHJlYWREdW1wLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWUudGhyZWFkU3RhdGUgPT09ICdSVU5OQUJMRScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocmVhZER1bXBSdW5uYWJsZSArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS50aHJlYWRTdGF0ZSA9PT0gJ1dBSVRJTkcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJlYWREdW1wV2FpdGluZyArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS50aHJlYWRTdGF0ZSA9PT0gJ1RJTUVEX1dBSVRJTkcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJlYWREdW1wVGltZWRXYWl0aW5nICs9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnRocmVhZFN0YXRlID09PSAnQkxPQ0tFRCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocmVhZER1bXBCbG9ja2VkICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudGhyZWFkRHVtcEFsbCA9IHRoaXMudGhyZWFkRHVtcFJ1bm5hYmxlICsgdGhpcy50aHJlYWREdW1wV2FpdGluZyArXG4gICAgICAgICAgICB0aGlzLnRocmVhZER1bXBUaW1lZFdhaXRpbmcgKyB0aGlzLnRocmVhZER1bXBCbG9ja2VkO1xuICAgIH1cblxuICAgIGdldEJhZGdlQ2xhc3ModGhyZWFkU3RhdGUpIHtcbiAgICAgICAgaWYgKHRocmVhZFN0YXRlID09PSAnUlVOTkFCTEUnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2JhZGdlLXN1Y2Nlc3MnO1xuICAgICAgICB9IGVsc2UgaWYgKHRocmVhZFN0YXRlID09PSAnV0FJVElORycpIHtcbiAgICAgICAgICAgIHJldHVybiAnYmFkZ2UtaW5mbyc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhyZWFkU3RhdGUgPT09ICdUSU1FRF9XQUlUSU5HJykge1xuICAgICAgICAgICAgcmV0dXJuICdiYWRnZS13YXJuaW5nJztcbiAgICAgICAgfSBlbHNlIGlmICh0aHJlYWRTdGF0ZSA9PT0gJ0JMT0NLRUQnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2JhZGdlLWRhbmdlcic7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy1tb2RhbC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj4gPGgyPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MudGl0bGVcXFwiPkFwcGxpY2F0aW9uIE1ldHJpY3M8L3NwYW4+IDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBmbG9hdC1yaWdodFxcXCIgKGNsaWNrKT1cXFwicmVmcmVzaCgpXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXJlZnJlc2hcXFwiPjwvc3Bhbj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLnJlZnJlc2guYnV0dG9uXFxcIj5SZWZyZXNoPC9zcGFuPiA8L2J1dHRvbj4gPC9oMj4gPGgzIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0udGl0bGVcXFwiPkpWTSBNZXRyaWNzPC9oMz4gPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwiIXVwZGF0aW5nTWV0cmljc1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj4gPGIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5tZW1vcnkudGl0bGVcXFwiPk1lbW9yeTwvYj4gPHA+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5tZW1vcnkudG90YWxcXFwiPlRvdGFsIE1lbW9yeTwvc3Bhbj4gKHt7bWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkudG90YWwudXNlZCddLnZhbHVlIC8gMTAwMDAwMCB8IG51bWJlcjonMS4wLTAnfX1NIC8ge3ttZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS50b3RhbC5tYXgnXS52YWx1ZSAvIDEwMDAwMDAgfCBudW1iZXI6JzEuMC0wJ319TSk8L3A+IDxuZ2ItcHJvZ3Jlc3NiYXIgdHlwZT1cXFwic3VjY2Vzc1xcXCIgW21heF09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5LnRvdGFsLm1heCddLnZhbHVlXFxcIiBbdmFsdWVdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS50b3RhbC51c2VkJ10udmFsdWVcXFwiIFtzdHJpcGVkXT1cXFwidHJ1ZVxcXCIgW2FuaW1hdGVkXT1cXFwidHJ1ZVxcXCI+IDxzcGFuPnt7bWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkudG90YWwudXNlZCddLnZhbHVlICogMTAwIC8gbWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkudG90YWwubWF4J10udmFsdWUgfCBudW1iZXI6JzEuMC0wJ319JTwvc3Bhbj4gPC9uZ2ItcHJvZ3Jlc3NiYXI+IDxwPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0ubWVtb3J5LmhlYXBcXFwiPkhlYXAgTWVtb3J5PC9zcGFuPiAoe3ttZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5oZWFwLnVzZWQnXS52YWx1ZSAvIDEwMDAwMDAgfCBudW1iZXI6JzEuMC0wJ319TSAvIHt7bWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkuaGVhcC5tYXgnXS52YWx1ZSAvIDEwMDAwMDAgfCBudW1iZXI6JzEuMC0wJ319TSk8L3A+IDxuZ2ItcHJvZ3Jlc3NiYXIgW21heF09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5LmhlYXAubWF4J10udmFsdWVcXFwiIFt2YWx1ZV09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5LmhlYXAudXNlZCddLnZhbHVlXFxcIiBbc3RyaXBlZF09XFxcInRydWVcXFwiIFthbmltYXRlZF09XFxcInRydWVcXFwiIHR5cGU9XFxcInN1Y2Nlc3NcXFwiPiA8c3Bhbj57e21ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5LmhlYXAudXNlZCddLnZhbHVlICogMTAwIC8gbWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkuaGVhcC5tYXgnXS52YWx1ZSB8IG51bWJlcjonMS4wLTAnfX0lPC9zcGFuPiA8L25nYi1wcm9ncmVzc2Jhcj4gPHA+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5tZW1vcnkubm9uaGVhcFxcXCI+Tm9uLUhlYXAgTWVtb3J5PC9zcGFuPiAoe3ttZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5ub24taGVhcC51c2VkJ10udmFsdWUgLyAxMDAwMDAwIHwgbnVtYmVyOicxLjAtMCd9fU0gLyB7e21ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5Lm5vbi1oZWFwLmNvbW1pdHRlZCddLnZhbHVlIC8gMTAwMDAwMCB8IG51bWJlcjonMS4wLTAnfX1NKTwvcD4gPG5nYi1wcm9ncmVzc2JhciBbbWF4XT1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkubm9uLWhlYXAuY29tbWl0dGVkJ10udmFsdWVcXFwiIFt2YWx1ZV09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5Lm5vbi1oZWFwLnVzZWQnXS52YWx1ZVxcXCIgW3N0cmlwZWRdPVxcXCJ0cnVlXFxcIiBbYW5pbWF0ZWRdPVxcXCJ0cnVlXFxcIiB0eXBlPVxcXCJzdWNjZXNzXFxcIj4gPHNwYW4+e3ttZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5ub24taGVhcC51c2VkJ10udmFsdWUgKiAxMDAgLyBtZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5ub24taGVhcC5jb21taXR0ZWQnXS52YWx1ZSB8IG51bWJlcjonMS4wLTAnfX0lPC9zcGFuPiA8L25nYi1wcm9ncmVzc2Jhcj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj4gPGIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS50aHJlYWRzLnRpdGxlXFxcIj5UaHJlYWRzPC9iPiAoVG90YWw6IHt7bWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmNvdW50J10udmFsdWV9fSkgPGEgY2xhc3M9XFxcImhhbmRcXFwiIChjbGljayk9XFxcInJlZnJlc2hUaHJlYWREdW1wRGF0YSgpXFxcIiBkYXRhLXRvZ2dsZT1cXFwibW9kYWxcXFwiIGRhdGEtdGFyZ2V0PVxcXCIjdGhyZWFkRHVtcFxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWV5ZVxcXCI+PC9pPjwvYT4gPHA+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS50aHJlYWRzLnJ1bm5hYmxlXFxcIj5SdW5uYWJsZTwvc3Bhbj4ge3ttZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMucnVubmFibGUuY291bnQnXS52YWx1ZX19PC9wPiA8bmdiLXByb2dyZXNzYmFyIFt2YWx1ZV09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5ydW5uYWJsZS5jb3VudCddLnZhbHVlXFxcIiBbbWF4XT1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmNvdW50J10udmFsdWVcXFwiIFtzdHJpcGVkXT1cXFwidHJ1ZVxcXCIgW2FuaW1hdGVkXT1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwic3VjY2Vzc1xcXCI+IDxzcGFuPnt7bWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLnJ1bm5hYmxlLmNvdW50J10udmFsdWUgKiAxMDAgLyBtZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMuY291bnQnXS52YWx1ZSB8IG51bWJlcjonMS4wLTAnfX0lPC9zcGFuPiA8L25nYi1wcm9ncmVzc2Jhcj4gPHA+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS50aHJlYWRzLnRpbWVkd2FpdGluZ1xcXCI+VGltZWQgV2FpdGluZzwvc3Bhbj4gKHt7bWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLnRpbWVkX3dhaXRpbmcuY291bnQnXS52YWx1ZX19KTwvcD4gPG5nYi1wcm9ncmVzc2JhciBbdmFsdWVdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMudGltZWRfd2FpdGluZy5jb3VudCddLnZhbHVlXFxcIiBbbWF4XT1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmNvdW50J10udmFsdWVcXFwiIFtzdHJpcGVkXT1cXFwidHJ1ZVxcXCIgW2FuaW1hdGVkXT1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwid2FybmluZ1xcXCI+IDxzcGFuPnt7bWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLnRpbWVkX3dhaXRpbmcuY291bnQnXS52YWx1ZSAqIDEwMCAvIG1ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5jb3VudCddLnZhbHVlIHwgbnVtYmVyOicxLjAtMCd9fSU8L3NwYW4+IDwvbmdiLXByb2dyZXNzYmFyPiA8cD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLnRocmVhZHMud2FpdGluZ1xcXCI+V2FpdGluZzwvc3Bhbj4gKHt7bWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLndhaXRpbmcuY291bnQnXS52YWx1ZX19KTwvcD4gPG5nYi1wcm9ncmVzc2JhciBbdmFsdWVdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMud2FpdGluZy5jb3VudCddLnZhbHVlXFxcIiBbbWF4XT1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmNvdW50J10udmFsdWVcXFwiIFtzdHJpcGVkXT1cXFwidHJ1ZVxcXCIgW2FuaW1hdGVkXT1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwid2FybmluZ1xcXCI+IDxzcGFuPnt7bWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLndhaXRpbmcuY291bnQnXS52YWx1ZSAqIDEwMCAvIG1ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5jb3VudCddLnZhbHVlIHwgbnVtYmVyOicxLjAtMCd9fSU8L3NwYW4+IDwvbmdiLXByb2dyZXNzYmFyPiA8cD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLnRocmVhZHMuYmxvY2tlZFxcXCI+QmxvY2tlZDwvc3Bhbj4gKHt7bWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmJsb2NrZWQuY291bnQnXS52YWx1ZX19KTwvcD4gPG5nYi1wcm9ncmVzc2JhciBbdmFsdWVdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMuYmxvY2tlZC5jb3VudCddLnZhbHVlXFxcIiBbbWF4XT1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmNvdW50J10udmFsdWVcXFwiIFtzdHJpcGVkXT1cXFwidHJ1ZVxcXCIgW2FuaW1hdGVkXT1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwic3VjY2Vzc1xcXCI+IDxzcGFuPnt7bWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmJsb2NrZWQuY291bnQnXS52YWx1ZSAqIDEwMCAvIG1ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5jb3VudCddLnZhbHVlIHwgbnVtYmVyOicxLjAtMCd9fSU8L3NwYW4+IDwvbmdiLXByb2dyZXNzYmFyPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPiA8YiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLmdjLnRpdGxlXFxcIj5HYXJiYWdlIGNvbGxlY3Rpb25zPC9iPiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLmdhcmJhZ2UuUFMtTWFya1N3ZWVwLmNvdW50J11cXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOVxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5nYy5tYXJrc3dlZXBjb3VudFxcXCI+TWFyayBTd2VlcCBjb3VudDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMyB0ZXh0LXJpZ2h0XFxcIj57e21ldHJpY3MuZ2F1Z2VzWydqdm0uZ2FyYmFnZS5QUy1NYXJrU3dlZXAuY291bnQnXS52YWx1ZX19PC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLmdhcmJhZ2UuUFMtTWFya1N3ZWVwLnRpbWUnXVxcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC05XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLmdjLm1hcmtzd2VlcHRpbWVcXFwiPk1hcmsgU3dlZXAgdGltZTwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMyB0ZXh0LXJpZ2h0XFxcIj57e21ldHJpY3MuZ2F1Z2VzWydqdm0uZ2FyYmFnZS5QUy1NYXJrU3dlZXAudGltZSddLnZhbHVlfX1tczwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS5nYXJiYWdlLlBTLVNjYXZlbmdlLmNvdW50J11cXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOVxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5nYy5zY2F2ZW5nZWNvdW50XFxcIj5TY2F2ZW5nZSBjb3VudDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMyB0ZXh0LXJpZ2h0XFxcIj57e21ldHJpY3MuZ2F1Z2VzWydqdm0uZ2FyYmFnZS5QUy1TY2F2ZW5nZS5jb3VudCddLnZhbHVlfX08L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0uZ2FyYmFnZS5QUy1TY2F2ZW5nZS50aW1lJ11cXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOVxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5nYy5zY2F2ZW5nZXRpbWVcXFwiPlNjYXZlbmdlIHRpbWU8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTMgdGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1snanZtLmdhcmJhZ2UuUFMtU2NhdmVuZ2UudGltZSddLnZhbHVlfX1tczwvZGl2PiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJ3ZWxsIHdlbGwtbGdcXFwiICpuZ0lmPVxcXCJ1cGRhdGluZ01ldHJpY3NcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy51cGRhdGluZ1xcXCI+VXBkYXRpbmcuLi48L2Rpdj4gPGgzIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0uaHR0cC50aXRsZVxcXCI+SFRUUCByZXF1ZXN0cyAoZXZlbnRzIHBlciBzZWNvbmQpPC9oMz4gPHAgKm5nSWY9XFxcIm1ldHJpY3MuY291bnRlcnNcXFwiPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLmh0dHAuYWN0aXZlXFxcIj5BY3RpdmUgcmVxdWVzdHM8L3NwYW4+IDxiPnt7bWV0cmljcy5jb3VudGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIuYWN0aXZlUmVxdWVzdHMnXS5jb3VudCB8IG51bWJlcjonMS4wLTAnfX08L2I+IC0gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5odHRwLnRvdGFsXFxcIj5Ub3RhbCByZXF1ZXN0czwvc3Bhbj4gPGI+e3ttZXRyaWNzLnRpbWVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVxdWVzdHMnXS5jb3VudCB8IG51bWJlcjonMS4wLTAnfX08L2I+IDwvcD4gPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCIgKm5nSWY9XFxcIiF1cGRhdGluZ01ldHJpY3NcXFwiPiA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPiA8dGhlYWQ+IDx0cj4gPHRoIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0uaHR0cC50YWJsZS5jb2RlXFxcIj5Db2RlPC90aD4gPHRoIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0uaHR0cC50YWJsZS5jb3VudFxcXCI+Q291bnQ8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0uaHR0cC50YWJsZS5tZWFuXFxcIj5NZWFuPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLmh0dHAudGFibGUuYXZlcmFnZVxcXCI+QXZlcmFnZTwvc3Bhbj4gKDEgbWluKTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5odHRwLnRhYmxlLmF2ZXJhZ2VcXFwiPkF2ZXJhZ2U8L3NwYW4+ICg1IG1pbik8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0uaHR0cC50YWJsZS5hdmVyYWdlXFxcIj5BdmVyYWdlPC9zcGFuPiAoMTUgbWluKTwvdGg+IDwvdHI+IDwvdGhlYWQ+IDx0Ym9keT4gPHRyPiA8dGQgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5odHRwLmNvZGUub2tcXFwiPk9LPC90ZD4gPHRkPiA8bmdiLXByb2dyZXNzYmFyIFttYXhdPVxcXCJtZXRyaWNzLnRpbWVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVxdWVzdHMnXS5jb3VudFxcXCIgW3ZhbHVlXT1cXFwibWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMub2snXS5jb3VudFxcXCIgW3N0cmlwZWRdPVxcXCJ0cnVlXFxcIiBbYW5pbWF0ZWRdPVxcXCJ0cnVlXFxcIiB0eXBlPVxcXCJzdWNjZXNzXFxcIj4gPHNwYW4+e3ttZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5vayddLmNvdW50fX08L3NwYW4+IDwvbmdiLXByb2dyZXNzYmFyPiA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e2ZpbHRlck5hTihtZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5vayddLm1lYW5fcmF0ZSkgfCBudW1iZXI6JzEuMC0yJ319IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+IHt7ZmlsdGVyTmFOKG1ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLm9rJ10ubTFfcmF0ZSkgfCBudW1iZXI6JzEuMC0yJ319IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+IHt7ZmlsdGVyTmFOKG1ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLm9rJ10ubTVfcmF0ZSkgfCBudW1iZXI6JzEuMC0yJ319IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+IHt7ZmlsdGVyTmFOKG1ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLm9rJ10ubTE1X3JhdGUpIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8L3RyPiA8dHI+IDx0ZCBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLmh0dHAuY29kZS5ub3Rmb3VuZFxcXCI+Tm90IEZvdW5kPC90ZD4gPHRkPiA8bmdiLXByb2dyZXNzYmFyIFttYXhdPVxcXCJtZXRyaWNzLnRpbWVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVxdWVzdHMnXS5jb3VudFxcXCIgW3ZhbHVlXT1cXFwibWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMubm90Rm91bmQnXS5jb3VudFxcXCIgW3N0cmlwZWRdPVxcXCJ0cnVlXFxcIiBbYW5pbWF0ZWRdPVxcXCJ0cnVlXFxcIiB0eXBlPVxcXCJzdWNjZXNzXFxcIj4gPHNwYW4+e3ttZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5ub3RGb3VuZCddLmNvdW50fX08L3NwYW4+IDwvbmdiLXByb2dyZXNzYmFyPiA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e2ZpbHRlck5hTihtZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5ub3RGb3VuZCddLm1lYW5fcmF0ZSkgfCBudW1iZXI6JzEuMC0yJ319IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+IHt7ZmlsdGVyTmFOKG1ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLm5vdEZvdW5kJ10ubTFfcmF0ZSkgfCBudW1iZXI6JzEuMC0yJ319IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+IHt7ZmlsdGVyTmFOKG1ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLm5vdEZvdW5kJ10ubTVfcmF0ZSkgfCBudW1iZXI6JzEuMC0yJ319IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+IHt7ZmlsdGVyTmFOKG1ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLm5vdEZvdW5kJ10ubTE1X3JhdGUpIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8L3RyPiA8dHI+IDx0ZCBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLmh0dHAuY29kZS5zZXJ2ZXJlcnJvclxcXCI+U2VydmVyIGVycm9yPC90ZD4gPHRkPiA8bmdiLXByb2dyZXNzYmFyIFttYXhdPVxcXCJtZXRyaWNzLnRpbWVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVxdWVzdHMnXS5jb3VudFxcXCIgW3ZhbHVlXT1cXFwibWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMuc2VydmVyRXJyb3InXS5jb3VudFxcXCIgW3N0cmlwZWRdPVxcXCJ0cnVlXFxcIiBbYW5pbWF0ZWRdPVxcXCJ0cnVlXFxcIiB0eXBlPVxcXCJzdWNjZXNzXFxcIj4gPHNwYW4+e3ttZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5zZXJ2ZXJFcnJvciddLmNvdW50fX08L3NwYW4+IDwvbmdiLXByb2dyZXNzYmFyPiA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e2ZpbHRlck5hTihtZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5zZXJ2ZXJFcnJvciddLm1lYW5fcmF0ZSkgfCBudW1iZXI6JzEuMC0yJ319IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+IHt7ZmlsdGVyTmFOKG1ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLnNlcnZlckVycm9yJ10ubTFfcmF0ZSkgfCBudW1iZXI6JzEuMC0yJ319IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+IHt7ZmlsdGVyTmFOKG1ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLnNlcnZlckVycm9yJ10ubTVfcmF0ZSkgfCBudW1iZXI6JzEuMC0yJ319IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+IHt7ZmlsdGVyTmFOKG1ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLnNlcnZlckVycm9yJ10ubTE1X3JhdGUpIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8L3RyPiA8L3Rib2R5PiA8L3RhYmxlPiA8L2Rpdj4gPGgzIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5zZXJ2aWNlc3N0YXRzLnRpdGxlXFxcIj5TZXJ2aWNlcyBzdGF0aXN0aWNzICh0aW1lIGluIG1pbGxpc2Vjb25kKTwvaDM+IDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiICpuZ0lmPVxcXCIhdXBkYXRpbmdNZXRyaWNzXFxcIj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj4gPHRoZWFkPiA8dHI+IDx0aCBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3Muc2VydmljZXNzdGF0cy50YWJsZS5uYW1lXFxcIj5TZXJ2aWNlIG5hbWU8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5zZXJ2aWNlc3N0YXRzLnRhYmxlLmNvdW50XFxcIj5Db3VudDwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLnNlcnZpY2Vzc3RhdHMudGFibGUubWVhblxcXCI+TWVhbjwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLnNlcnZpY2Vzc3RhdHMudGFibGUubWluXFxcIj5NaW48L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5zZXJ2aWNlc3N0YXRzLnRhYmxlLnA1MFxcXCI+cDUwPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3Muc2VydmljZXNzdGF0cy50YWJsZS5wNzVcXFwiPnA3NTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLnNlcnZpY2Vzc3RhdHMudGFibGUucDk1XFxcIj5wOTU8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5zZXJ2aWNlc3N0YXRzLnRhYmxlLnA5OVxcXCI+cDk5PC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3Muc2VydmljZXNzdGF0cy50YWJsZS5tYXhcXFwiPk1heDwvdGg+IDwvdHI+IDwvdGhlYWQ+IDx0Ym9keT4gPHRyICpuZ0Zvcj1cXFwibGV0IGVudHJ5IG9mIHNlcnZpY2VzU3RhdHMgfCBrZXlzXFxcIj4gPHRkPnt7ZW50cnkua2V5fX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7ZW50cnkudmFsdWUuY291bnR9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3tlbnRyeS52YWx1ZS5tZWFuICogMTAwMCB8IG51bWJlcjonMS4wLTAnfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7ZW50cnkudmFsdWUubWluICogMTAwMCB8IG51bWJlcjonMS4wLTAnfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7ZW50cnkudmFsdWUucDUwICogMTAwMCB8IG51bWJlcjonMS4wLTAnfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7ZW50cnkudmFsdWUucDc1ICogMTAwMCB8IG51bWJlcjonMS4wLTAnfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7ZW50cnkudmFsdWUucDk1ICogMTAwMCB8IG51bWJlcjonMS4wLTAnfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7ZW50cnkudmFsdWUucDk5ICogMTAwMCB8IG51bWJlcjonMS4wLTAnfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7ZW50cnkudmFsdWUubWF4ICogMTAwMCB8IG51bWJlcjonMS4wLTAnfX08L3RkPiA8L3RyPiA8L3Rib2R5PiA8L3RhYmxlPiA8L2Rpdj4gPGgzIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5kYXRhc291cmNlLnRpdGxlXFxcIiAqbmdJZj1cXFwibWV0cmljcy5nYXVnZXMgJiYgbWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLlRvdGFsQ29ubmVjdGlvbnMnXSAmJiBtZXRyaWNzLmdhdWdlc1snSGlrYXJpUG9vbC0xLnBvb2wuVG90YWxDb25uZWN0aW9ucyddLnZhbHVlID4gMFxcXCI+RGF0YVNvdXJjZSBzdGF0aXN0aWNzICh0aW1lIGluIG1pbGxpc2Vjb25kKTwvaDM+IDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiICpuZ0lmPVxcXCIhdXBkYXRpbmdNZXRyaWNzICYmIG1ldHJpY3MuZ2F1Z2VzICYmIG1ldHJpY3MuZ2F1Z2VzWydIaWthcmlQb29sLTEucG9vbC5Ub3RhbENvbm5lY3Rpb25zJ10gJiYgbWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLlRvdGFsQ29ubmVjdGlvbnMnXS52YWx1ZSA+IDBcXFwiPiA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPiA8dGhlYWQ+IDx0cj4gPHRoPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5kYXRhc291cmNlLnVzYWdlXFxcIj5Vc2FnZTwvc3Bhbj4gKHt7bWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLkFjdGl2ZUNvbm5lY3Rpb25zJ10udmFsdWV9fSAvIHt7bWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLlRvdGFsQ29ubmVjdGlvbnMnXS52YWx1ZX19KTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmRhdGFzb3VyY2UuY291bnRcXFwiPkNvdW50PC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuZGF0YXNvdXJjZS5tZWFuXFxcIj5NZWFuPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuZGF0YXNvdXJjZS5taW5cXFwiPk1pbjwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmRhdGFzb3VyY2UucDUwXFxcIj5wNTA8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5kYXRhc291cmNlLnA3NVxcXCI+cDc1PC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuZGF0YXNvdXJjZS5wOTVcXFwiPnA5NTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmRhdGFzb3VyY2UucDk5XFxcIj5wOTk8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5kYXRhc291cmNlLm1heFxcXCI+TWF4PC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHI+IDx0ZD4gPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3MgcHJvZ3Jlc3Mtc3RyaXBlZFxcXCI+IDxuZ2ItcHJvZ3Jlc3NiYXIgW21heF09XFxcIm1ldHJpY3MuZ2F1Z2VzWydIaWthcmlQb29sLTEucG9vbC5Ub3RhbENvbm5lY3Rpb25zJ10udmFsdWVcXFwiIFt2YWx1ZV09XFxcIm1ldHJpY3MuZ2F1Z2VzWydIaWthcmlQb29sLTEucG9vbC5BY3RpdmVDb25uZWN0aW9ucyddLnZhbHVlXFxcIiBbc3RyaXBlZF09XFxcInRydWVcXFwiIFthbmltYXRlZF09XFxcInRydWVcXFwiIHR5cGU9XFxcInN1Y2Nlc3NcXFwiPiA8c3Bhbj57e21ldHJpY3MuZ2F1Z2VzWydIaWthcmlQb29sLTEucG9vbC5BY3RpdmVDb25uZWN0aW9ucyddLnZhbHVlICogMTAwIC8gbWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLlRvdGFsQ29ubmVjdGlvbnMnXS52YWx1ZSB8IG51bWJlcjonMS4wLTAnfX0lPC9zcGFuPiA8L25nYi1wcm9ncmVzc2Jhcj4gPC9kaXY+IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmhpc3RvZ3JhbXNbJ0hpa2FyaVBvb2wtMS5wb29sLlVzYWdlJ10uY291bnR9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3tmaWx0ZXJOYU4obWV0cmljcy5oaXN0b2dyYW1zWydIaWthcmlQb29sLTEucG9vbC5Vc2FnZSddLm1lYW4pIHwgbnVtYmVyOicxLjAtMid9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3tmaWx0ZXJOYU4obWV0cmljcy5oaXN0b2dyYW1zWydIaWthcmlQb29sLTEucG9vbC5Vc2FnZSddLm1pbikgfCBudW1iZXI6JzEuMC0yJ319PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2ZpbHRlck5hTihtZXRyaWNzLmhpc3RvZ3JhbXNbJ0hpa2FyaVBvb2wtMS5wb29sLlVzYWdlJ10ucDUwKSB8IG51bWJlcjonMS4wLTInfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7ZmlsdGVyTmFOKG1ldHJpY3MuaGlzdG9ncmFtc1snSGlrYXJpUG9vbC0xLnBvb2wuVXNhZ2UnXS5wNzUpIHwgbnVtYmVyOicxLjAtMid9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3tmaWx0ZXJOYU4obWV0cmljcy5oaXN0b2dyYW1zWydIaWthcmlQb29sLTEucG9vbC5Vc2FnZSddLnA5NSkgfCBudW1iZXI6JzEuMC0yJ319PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2ZpbHRlck5hTihtZXRyaWNzLmhpc3RvZ3JhbXNbJ0hpa2FyaVBvb2wtMS5wb29sLlVzYWdlJ10ucDk5KSB8IG51bWJlcjonMS4wLTInfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7ZmlsdGVyTmFOKG1ldHJpY3MuaGlzdG9ncmFtc1snSGlrYXJpUG9vbC0xLnBvb2wuVXNhZ2UnXS5tYXgpIHwgbnVtYmVyOicxLjAtMid9fTwvdGQ+IDwvdHI+IDwvdGJvZHk+IDwvdGFibGU+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IEpoaU1ldHJpY3NNb25pdG9yaW5nTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL21ldHJpY3MtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IEpoaU1ldHJpY3NTZXJ2aWNlIH0gZnJvbSAnLi9tZXRyaWNzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1tZXRyaWNzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbWV0cmljcy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSmhpTWV0cmljc01vbml0b3JpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIG1ldHJpY3M6IGFueSA9IHt9O1xuICAgIGNhY2hlc1N0YXRzOiBhbnkgPSB7fTtcbiAgICBzZXJ2aWNlc1N0YXRzOiBhbnkgPSB7fTtcbiAgICB1cGRhdGluZ01ldHJpY3MgPSB0cnVlO1xuICAgIEpDQUNIRV9LRVk6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwsXG4gICAgICAgIHByaXZhdGUgbWV0cmljc1NlcnZpY2U6IEpoaU1ldHJpY3NTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuSkNBQ0hFX0tFWSA9ICdqY2FjaGUuc3RhdGlzdGljcyc7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMudXBkYXRpbmdNZXRyaWNzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tZXRyaWNzU2VydmljZS5nZXRNZXRyaWNzKCkuc3Vic2NyaWJlKChtZXRyaWNzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1ldHJpY3MgPSBtZXRyaWNzO1xuICAgICAgICAgICAgdGhpcy51cGRhdGluZ01ldHJpY3MgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZXNTdGF0cyA9IHt9O1xuICAgICAgICAgICAgdGhpcy5jYWNoZXNTdGF0cyA9IHt9O1xuICAgICAgICAgICAgT2JqZWN0LmtleXMobWV0cmljcy50aW1lcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbWV0cmljcy50aW1lcnNba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ3dlYi5yZXN0JykgIT09IC0xIHx8IGtleS5pbmRleE9mKCdzZXJ2aWNlJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZXNTdGF0c1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhtZXRyaWNzLmdhdWdlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKCdqY2FjaGUuc3RhdGlzdGljcycpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG1ldHJpY3MuZ2F1Z2VzW2tleV0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBnZXRzIG9yIHB1dHNcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBrZXkubGFzdEluZGV4T2YoJy4nKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3S2V5ID0ga2V5LnN1YnN0cigwLCBpbmRleCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gS2VlcCB0aGUgbmFtZSBvZiB0aGUgZG9tYWluXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVzU3RhdHNbbmV3S2V5XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogdGhpcy5KQ0FDSEVfS0VZLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZnJlc2hUaHJlYWREdW1wRGF0YSgpIHtcbiAgICAgICAgdGhpcy5tZXRyaWNzU2VydmljZS50aHJlYWREdW1wKCkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb2RhbFJlZiAgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKEpoaU1ldHJpY3NNb25pdG9yaW5nTW9kYWxDb21wb25lbnQsIHsgc2l6ZTogJ2xnJ30pO1xuICAgICAgICAgICAgbW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2UudGhyZWFkRHVtcCA9IGRhdGE7XG4gICAgICAgICAgICBtb2RhbFJlZi5yZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gTGVmdCBibGFuayBpbnRlbnRpb25hbGx5LCBub3RoaW5nIHRvIGRvIGhlcmVcbiAgICAgICAgICAgIH0sIChyZWFzb24pID0+IHtcbiAgICAgICAgICAgICAgICAvLyBMZWZ0IGJsYW5rIGludGVudGlvbmFsbHksIG5vdGhpbmcgdG8gZG8gaGVyZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZpbHRlck5hTihpbnB1dCkge1xuICAgICAgICBpZiAoaXNOYU4oaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEpoaU1ldHJpY3NNb25pdG9yaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9tZXRyaWNzLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBtZXRyaWNzUm91dGU6IFJvdXRlID0ge1xuICAgIHBhdGg6ICdqaGktbWV0cmljcycsXG4gICAgY29tcG9uZW50OiBKaGlNZXRyaWNzTW9uaXRvcmluZ0NvbXBvbmVudCxcbiAgICBkYXRhOiB7XG4gICAgICAgIHBhZ2VUaXRsZTogJ21ldHJpY3MudGl0bGUnXG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbWV0cmljcy9tZXRyaWNzLnJvdXRlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpoaU1ldHJpY3NTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICAgIGdldE1ldHJpY3MoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ21hbmFnZW1lbnQvbWV0cmljcycpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG4gICAgdGhyZWFkRHVtcCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnbWFuYWdlbWVudC9kdW1wJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIG5hbWU9XFxcImRlbGV0ZUZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcImNvbmZpcm1EZWxldGUodXNlci5sb2dpbilcXFwiPiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPiA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5kZWxldGUudGl0bGVcXFwiPkNvbmZpcm0gZGVsZXRlIG9wZXJhdGlvbjwvaDQ+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiAoY2xpY2spPVxcXCJjbGVhcigpXFxcIj4mdGltZXM7PC9idXR0b24+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj4gPGpoaS1hbGVydC1lcnJvcj48L2poaS1hbGVydC1lcnJvcj4gPHAgamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5kZWxldGUucXVlc3Rpb25cXFwiIHRyYW5zbGF0ZVZhbHVlcz1cXFwie2xvZ2luOiAne3t1c2VyLmxvZ2lufX0nfVxcXCI+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIFVzZXI/PC9wPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgKGNsaWNrKT1cXFwiY2xlYXIoKVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1iYW5cXFwiPjwvc3Bhbj4mbmJzcDs8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24uY2FuY2VsXFxcIj5DYW5jZWw8L3NwYW4+IDwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXJlbW92ZVxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LmFjdGlvbi5kZWxldGVcXFwiPkRlbGV0ZTwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiA8L2Zvcm0+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwsIE5nYk1vZGFsUmVmIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgSmhpQWxlcnRTZXJ2aWNlLCBKaGlFdmVudE1hbmFnZXIgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IFVzZXIsIFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IFVzZXJNb2RhbFNlcnZpY2UgfSBmcm9tICcuL3VzZXItbW9kYWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXVzZXItbWdtdC1kZWxldGUtZGlhbG9nJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdXNlci1tYW5hZ2VtZW50LWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJNZ210RGVsZXRlRGlhbG9nQ29tcG9uZW50IHtcblxuICAgIHVzZXI6IFVzZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWwsXG4gICAgICAgIHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBKaGlBbGVydFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZXZlbnRNYW5hZ2VyOiBKaGlFdmVudE1hbmFnZXJcbiAgICApIHtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVNb2RhbC5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgICB9XG5cbiAgICBjb25maXJtRGVsZXRlKGxvZ2luKSB7XG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UuZGVsZXRlKGxvZ2luKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5icm9hZGNhc3QoeyBuYW1lOiAndXNlckxpc3RNb2RpZmljYXRpb24nLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdEZWxldGVkIGEgdXNlcid9KTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcyh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN1Y2Nlc3MoJ3VzZXJNYW5hZ2VtZW50LmRlbGV0ZWQnLCB7IHBhcmFtIDogbG9naW4gfSwgbnVsbCk7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS11c2VyLWRlbGV0ZS1kaWFsb2cnLFxuICAgIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBVc2VyRGVsZXRlRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgbW9kYWxSZWY6IE5nYk1vZGFsUmVmO1xuICAgIHJvdXRlU3ViOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgdXNlck1vZGFsU2VydmljZTogVXNlck1vZGFsU2VydmljZVxuICAgICkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJvdXRlU3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLnVzZXJNb2RhbFNlcnZpY2Uub3BlbihVc2VyTWdtdERlbGV0ZURpYWxvZ0NvbXBvbmVudCwgcGFyYW1zWydsb2dpbiddKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucm91dGVTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiAqbmdJZj1cXFwidXNlclxcXCI+IDxoMj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5kZXRhaWwudGl0bGVcXFwiPlVzZXI8L3NwYW4+IFs8Yj57e3VzZXIubG9naW59fTwvYj5dIDwvaDI+IDxkbCBjbGFzcz1cXFwicm93LW1kIGpoLWVudGl0eS1kZXRhaWxzXFxcIj4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQubG9naW5cXFwiPkxvZ2luPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3t1c2VyLmxvZ2lufX08L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1kYW5nZXJcXFwiICpuZ0lmPVxcXCIhdXNlci5hY3RpdmF0ZWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQuZGVhY3RpdmF0ZWRcXFwiPkRlYWN0aXZhdGVkPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2Utc3VjY2Vzc1xcXCIgKm5nSWY9XFxcInVzZXIuYWN0aXZhdGVkXFxcIiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50LmFjdGl2YXRlZFxcXCI+QWN0aXZhdGVkPC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5maXJzdE5hbWVcXFwiPkZpcnN0IE5hbWU8L3NwYW4+PC9kdD4gPGRkPnt7dXNlci5maXJzdE5hbWV9fTwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50Lmxhc3ROYW1lXFxcIj5MYXN0IE5hbWU8L3NwYW4+PC9kdD4gPGRkPnt7dXNlci5sYXN0TmFtZX19PC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQuZW1haWxcXFwiPkVtYWlsPC9zcGFuPjwvZHQ+IDxkZD57e3VzZXIuZW1haWx9fTwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50LmxhbmdLZXlcXFwiPkxhbmcgS2V5PC9zcGFuPjwvZHQ+IDxkZD57e3VzZXIubGFuZ0tleX19PC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQuY3JlYXRlZEJ5XFxcIj5DcmVhdGVkIEJ5PC9zcGFuPjwvZHQ+IDxkZD57e3VzZXIuY3JlYXRlZEJ5fX08L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5jcmVhdGVkRGF0ZVxcXCI+Q3JlYXRlZCBEYXRlPC9zcGFuPjwvZHQ+IDxkZD57e3VzZXIuY3JlYXRlZERhdGUgfCBkYXRlOidkZC9NTS95eSBISDptbScgfX08L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5sYXN0TW9kaWZpZWRCeVxcXCI+TGFzdCBNb2RpZmllZCBCeTwvc3Bhbj48L2R0PiA8ZGQ+e3t1c2VyLmxhc3RNb2RpZmllZEJ5fX08L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5sYXN0TW9kaWZpZWREYXRlXFxcIj5MYXN0IE1vZGlmaWVkIERhdGU8L3NwYW4+PC9kdD4gPGRkPnt7dXNlci5sYXN0TW9kaWZpZWREYXRlIHwgZGF0ZTonZGQvTU0veXkgSEg6bW0nfX08L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5wcm9maWxlc1xcXCI+UHJvZmlsZXM8L3NwYW4+PC9kdD4gPGRkPiA8dWwgY2xhc3M9XFxcImxpc3QtdW5zdHlsZWRcXFwiPiA8bGkgKm5nRm9yPVxcXCJsZXQgYXV0aG9yaXR5IG9mIHVzZXIuYXV0aG9yaXRpZXNcXFwiPiA8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtaW5mb1xcXCI+e3thdXRob3JpdHl9fTwvc3Bhbj4gPC9saT4gPC91bD4gPC9kZD4gPC9kbD4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIHJvdXRlckxpbms9XFxcIi91c2VyLW1hbmFnZW1lbnRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm9cXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctbGVmdFxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LmFjdGlvbi5iYWNrXFxcIj4gQmFjazwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZXRhaWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1J4JztcblxuaW1wb3J0IHsgVXNlciwgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS11c2VyLW1nbXQtZGV0YWlsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdXNlci1tYW5hZ2VtZW50LWRldGFpbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVXNlck1nbXREZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICB1c2VyOiBVc2VyO1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZChwYXJhbXNbJ2xvZ2luJ10pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkKGxvZ2luKSB7XG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UuZmluZChsb2dpbikuc3Vic2NyaWJlKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZXRhaWwuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIG5hbWU9XFxcImVkaXRGb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlIChuZ1N1Ym1pdCk9XFxcInNhdmUoKVxcXCIgI2VkaXRGb3JtPVxcXCJuZ0Zvcm1cXFwiPiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPiA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIiBpZD1cXFwibXlVc2VyTGFiZWxcXFwiIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQuaG9tZS5jcmVhdGVPckVkaXRMYWJlbFxcXCI+IENyZWF0ZSBvciBlZGl0IGEgVXNlcjwvaDQ+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiAoY2xpY2spPVxcXCJjbGVhcigpXFxcIj4mdGltZXM7PC9idXR0b24+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj4gPGpoaS1hbGVydC1lcnJvcj48L2poaS1hbGVydC1lcnJvcj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5maWVsZC5pZFxcXCI+SUQ8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiaWRcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmlkXFxcIiByZWFkb25seT1cXFwicmVhZG9ubHlcXFwiPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50LmxvZ2luXFxcIj5Mb2dpbjwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJsb2dpblxcXCIgI2xvZ2luSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmxvZ2luXFxcIiByZXF1aXJlZCBtaW5sZW5ndGg9XFxcIjFcXFwiIG1heGxlbmd0aD1cXFwiNTBcXFwiIHBhdHRlcm49XFxcIl5bXycuQEEtWmEtejAtOS1dKiRcXFwiPiA8ZGl2ICpuZ0lmPVxcXCJsb2dpbklucHV0LmRpcnR5ICYmIGxvZ2luSW5wdXQuaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibG9naW5JbnB1dC5lcnJvcnMucmVxdWlyZWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LnZhbGlkYXRpb24ucmVxdWlyZWRcXFwiPiBUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImxvZ2luSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkudmFsaWRhdGlvbi5tYXhsZW5ndGhcXFwiIHRyYW5zbGF0ZS12YWx1ZS1tYXg9XFxcIjUwXFxcIj4gVGhpcyBmaWVsZCBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gNTAgY2hhcmFjdGVycy4gPC9zbWFsbD4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQuZmlyc3ROYW1lXFxcIj5GaXJzdCBOYW1lPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImZpcnN0TmFtZVxcXCIgI2ZpcnN0TmFtZUlucHV0PVxcXCJuZ01vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5maXJzdE5hbWVcXFwiIG1heGxlbmd0aD1cXFwiNTBcXFwiPiA8ZGl2ICpuZ0lmPVxcXCJmaXJzdE5hbWVJbnB1dC5kaXJ0eSAmJiBmaXJzdE5hbWVJbnB1dC5pbnZhbGlkXFxcIj4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJmaXJzdE5hbWVJbnB1dC5lcnJvcnMubWF4bGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS52YWxpZGF0aW9uLm1heGxlbmd0aFxcXCIgdHJhbnNsYXRlLXZhbHVlLW1heD1cXFwiNTBcXFwiPiBUaGlzIGZpZWxkIGNhbm5vdCBiZSBsb25nZXIgdGhhbiA1MCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5sYXN0TmFtZVxcXCI+TGFzdCBOYW1lPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImxhc3ROYW1lXFxcIiAjbGFzdE5hbWVJbnB1dD1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIubGFzdE5hbWVcXFwiIG1heGxlbmd0aD1cXFwiNTBcXFwiPiA8ZGl2ICpuZ0lmPVxcXCJsYXN0TmFtZUlucHV0LmRpcnR5ICYmIGxhc3ROYW1lSW5wdXQuaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibGFzdE5hbWVJbnB1dC5lcnJvcnMubWF4bGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS52YWxpZGF0aW9uLm1heGxlbmd0aFxcXCIgdHJhbnNsYXRlLXZhbHVlLW1heD1cXFwiNTBcXFwiPiBUaGlzIGZpZWxkIGNhbm5vdCBiZSBsb25nZXIgdGhhbiA1MCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5lbWFpbFxcXCI+RW1haWw8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiAjZW1haWxJbnB1dD1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuZW1haWxcXFwiIG1pbmxlbmd0aD1cXFwiNVxcXCIgcmVxdWlyZWQgbWF4bGVuZ3RoPVxcXCIxMDBcXFwiPiA8ZGl2ICpuZ0lmPVxcXCJlbWFpbElucHV0LmRpcnR5ICYmIGVtYWlsSW5wdXQuaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZW1haWxJbnB1dC5lcnJvcnMucmVxdWlyZWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LnZhbGlkYXRpb24ucmVxdWlyZWRcXFwiPiBUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVtYWlsSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkudmFsaWRhdGlvbi5tYXhsZW5ndGhcXFwiIHRyYW5zbGF0ZS12YWx1ZS1tYXg9XFxcIjEwMFxcXCI+IFRoaXMgZmllbGQgY2Fubm90IGJlIGxvbmdlciB0aGFuIDEwMCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVtYWlsSW5wdXQuZXJyb3JzLm1pbmxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkudmFsaWRhdGlvbi5taW5sZW5ndGhcXFwiIHRyYW5zbGF0ZS12YWx1ZS1taW49XFxcIjVcXFwiPiBUaGlzIGZpZWxkIGlzIHJlcXVpcmVkIHRvIGJlIGF0IGxlYXN0IDUgY2hhcmFjdGVycy4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbElucHV0LmVycm9ycy5lbWFpbFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuZW1haWwuaW52YWxpZFxcXCI+IFlvdXIgZW1haWwgaXMgaW52YWxpZC4gPC9zbWFsbD4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWNoZWNrXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcImFjdGl2YXRlZFxcXCI+IDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgW2Rpc2FibGVkXT1cXFwidXNlci5pZCA9PT0gbnVsbFxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGlkPVxcXCJhY3RpdmF0ZWRcXFwiIG5hbWU9XFxcImFjdGl2YXRlZFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuYWN0aXZhdGVkXFxcIj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5hY3RpdmF0ZWRcXFwiPkFjdGl2YXRlZDwvc3Bhbj4gPC9sYWJlbD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiICpuZ0lmPVxcXCJsYW5ndWFnZXMgJiYgbGFuZ3VhZ2VzLmxlbmd0aCA+IDBcXFwiPiA8bGFiZWwgamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5sYW5nS2V5XFxcIj5MYW5nIEtleTwvbGFiZWw+IDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImxhbmdLZXlcXFwiIG5hbWU9XFxcImxhbmdLZXlcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmxhbmdLZXlcXFwiPiA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IGxhbmd1YWdlIG9mIGxhbmd1YWdlc1xcXCIgW3ZhbHVlXT1cXFwibGFuZ3VhZ2VcXFwiPnt7bGFuZ3VhZ2UgfCBmaW5kTGFuZ3VhZ2VGcm9tS2V5fX08L29wdGlvbj4gPC9zZWxlY3Q+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQucHJvZmlsZXNcXFwiPlByb2ZpbGVzPC9sYWJlbD4gPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBtdWx0aXBsZT1cXFwibXVsdGlwbGVcXFwiIG5hbWU9XFxcImF1dGhvcml0eVxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuYXV0aG9yaXRpZXNcXFwiPiA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IGF1dGhvcml0eSBvZiBhdXRob3JpdGllc1xcXCIgW3ZhbHVlXT1cXFwiYXV0aG9yaXR5XFxcIj57e2F1dGhvcml0eX19PC9vcHRpb24+IDwvc2VsZWN0PiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIChjbGljayk9XFxcImNsZWFyKClcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtYmFuXFxcIj48L3NwYW4+Jm5ic3A7PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkuYWN0aW9uLmNhbmNlbFxcXCI+Q2FuY2VsPC9zcGFuPiA8L2J1dHRvbj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcImVkaXRGb3JtLmZvcm0uaW52YWxpZCB8fCBpc1NhdmluZ1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1mbG9wcHktb1xcXCI+PC9zcGFuPiZuYnNwOzxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LmFjdGlvbi5zYXZlXFxcIj5TYXZlPC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IDwvZm9ybT4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGlhbG9nLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kaWFsb2cuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCwgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBKaGlBbGVydFNlcnZpY2UsIEpoaUV2ZW50TWFuYWdlciB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgVXNlck1vZGFsU2VydmljZSB9IGZyb20gJy4vdXNlci1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7IEpoaUxhbmd1YWdlSGVscGVyLCBVc2VyLCBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXVzZXItbWdtdC1kaWFsb2cnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi91c2VyLW1hbmFnZW1lbnQtZGlhbG9nLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBVc2VyTWdtdERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICB1c2VyOiBVc2VyO1xuICAgIGxhbmd1YWdlczogYW55W107XG4gICAgYXV0aG9yaXRpZXM6IGFueVtdO1xuICAgIGlzU2F2aW5nOiBCb29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWwsXG4gICAgICAgIHByaXZhdGUgbGFuZ3VhZ2VIZWxwZXI6IEpoaUxhbmd1YWdlSGVscGVyLFxuICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBhbGVydFNlcnZpY2U6IEpoaUFsZXJ0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBldmVudE1hbmFnZXI6IEpoaUV2ZW50TWFuYWdlclxuICAgICkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYXV0aG9yaXRpZXMgPSBbXTtcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5hdXRob3JpdGllcygpLnN1YnNjcmliZSgoYXV0aG9yaXRpZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXV0aG9yaXRpZXMgPSBhdXRob3JpdGllcztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2VIZWxwZXIuZ2V0QWxsKCkudGhlbigobGFuZ3VhZ2VzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlcyA9IGxhbmd1YWdlcztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygnY2FuY2VsJyk7XG4gICAgfVxuXG4gICAgc2F2ZSgpIHtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLnVzZXIuaWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UudXBkYXRlKHRoaXMudXNlcikuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4gdGhpcy5vblNhdmVTdWNjZXNzKHJlc3BvbnNlLCBmYWxzZSksICgpID0+IHRoaXMub25TYXZlRXJyb3IoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmNyZWF0ZSh0aGlzLnVzZXIpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHRoaXMub25TYXZlU3VjY2VzcyhyZXNwb25zZSwgdHJ1ZSksICgpID0+IHRoaXMub25TYXZlRXJyb3IoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU2F2ZVN1Y2Nlc3MocmVzdWx0LCBpc0NyZWF0ZWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3VjY2VzcyhcbiAgICAgICAgICAgIGlzQ3JlYXRlZCA/ICd1c2VyTWFuYWdlbWVudC5jcmVhdGVkJ1xuICAgICAgICAgICAgOiAndXNlck1hbmFnZW1lbnQudXBkYXRlZCcsXG4gICAgICAgICAgICB7IHBhcmFtIDogcmVzdWx0Lmpzb24ubG9naW4gfSwgbnVsbCk7XG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLmJyb2FkY2FzdCh7IG5hbWU6ICd1c2VyTGlzdE1vZGlmaWNhdGlvbicsIGNvbnRlbnQ6ICdPSycgfSk7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3RpdmVNb2RhbC5kaXNtaXNzKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNhdmVFcnJvcigpIHtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktdXNlci1kaWFsb2cnLFxuICAgIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBVc2VyRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgbW9kYWxSZWY6IE5nYk1vZGFsUmVmO1xuICAgIHJvdXRlU3ViOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgdXNlck1vZGFsU2VydmljZTogVXNlck1vZGFsU2VydmljZVxuICAgICkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJvdXRlU3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIGlmICggcGFyYW1zWydsb2dpbiddICkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLnVzZXJNb2RhbFNlcnZpY2Uub3BlbihVc2VyTWdtdERpYWxvZ0NvbXBvbmVudCwgcGFyYW1zWydsb2dpbiddKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMudXNlck1vZGFsU2VydmljZS5vcGVuKFVzZXJNZ210RGlhbG9nQ29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucm91dGVTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGlhbG9nLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8aDI+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQuaG9tZS50aXRsZVxcXCI+VXNlcnM8L3NwYW4+IDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBmbG9hdC1yaWdodFxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6IFsndXNlci1tYW5hZ2VtZW50LW5ldyddIH0gfV1cXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtcGx1c1xcXCI+PC9zcGFuPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50LmhvbWUuY3JlYXRlTGFiZWxcXFwiPkNyZWF0ZSBhIG5ldyBVc2VyPC9zcGFuPiA8L2J1dHRvbj4gPC9oMj4gPGpoaS1hbGVydD48L2poaS1hbGVydD4gPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCIgKm5nSWY9XFxcInVzZXJzXFxcIj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj4gPHRoZWFkPiA8dHIgamhpU29ydCBbKHByZWRpY2F0ZSldPVxcXCJwcmVkaWNhdGVcXFwiIFsoYXNjZW5kaW5nKV09XFxcInJldmVyc2VcXFwiIFtjYWxsYmFja109XFxcInRyYW5zaXRpb24uYmluZCh0aGlzKVxcXCI+IDx0aCBqaGlTb3J0Qnk9XFxcImlkXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5maWVsZC5pZFxcXCI+SUQ8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJsb2dpblxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5sb2dpblxcXCI+TG9naW48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zb3J0XFxcIj48L3NwYW4+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwiZW1haWxcXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQuZW1haWxcXFwiPkVtYWlsPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc29ydFxcXCI+PC9zcGFuPjwvdGg+IDx0aD48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJsYW5nS2V5XFxcIj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5sYW5nS2V5XFxcIj5MYW5nIEtleTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGg+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5wcm9maWxlc1xcXCI+UHJvZmlsZXM8L3NwYW4+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwiY3JlYXRlZERhdGVcXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQuY3JlYXRlZERhdGVcXFwiPkNyZWF0ZWQgRGF0ZTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJsYXN0TW9kaWZpZWRCeVxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5sYXN0TW9kaWZpZWRCeVxcXCI+TGFzdCBNb2RpZmllZCBCeTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJsYXN0TW9kaWZpZWREYXRlXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50Lmxhc3RNb2RpZmllZERhdGVcXFwiPkxhc3QgTW9kaWZpZWQgRGF0ZTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGg+PC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5ICpuZ0lmPVxcXCJ1c2Vyc1xcXCI+IDx0ciAqbmdGb3I9XFxcImxldCB1c2VyIG9mIHVzZXJzOyB0cmFja0J5OiB0cmFja0lkZW50aXR5XFxcIj4gPHRkPjxhIFtyb3V0ZXJMaW5rXT1cXFwiWycuLi91c2VyLW1hbmFnZW1lbnQnLCB1c2VyLmxvZ2luXVxcXCI+e3t1c2VyLmlkfX08L2E+PC90ZD4gPHRkPnt7dXNlci5sb2dpbn19PC90ZD4gPHRkPnt7dXNlci5lbWFpbH19PC90ZD4gPHRkPiA8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtZGFuZ2VyIGhhbmRcXFwiIChjbGljayk9XFxcInNldEFjdGl2ZSh1c2VyLCB0cnVlKVxcXCIgKm5nSWY9XFxcIiF1c2VyLmFjdGl2YXRlZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5kZWFjdGl2YXRlZFxcXCI+RGVhY3RpdmF0ZWQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1zdWNjZXNzIGhhbmRcXFwiIChjbGljayk9XFxcInNldEFjdGl2ZSh1c2VyLCBmYWxzZSlcXFwiICpuZ0lmPVxcXCJ1c2VyLmFjdGl2YXRlZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5hY3RpdmF0ZWRcXFwiPkFjdGl2YXRlZDwvc3Bhbj4gPC90ZD4gPHRkPnt7dXNlci5sYW5nS2V5fX08L3RkPiA8dGQ+IDxkaXYgKm5nRm9yPVxcXCJsZXQgYXV0aG9yaXR5IG9mIHVzZXIuYXV0aG9yaXRpZXNcXFwiPiA8c3BhbiBjbGFzcz1cXFwidGFnIHRhZy1pbmZvXFxcIj57eyBhdXRob3JpdHkgfX08L3NwYW4+IDwvZGl2PiA8L3RkPiA8dGQ+e3t1c2VyLmNyZWF0ZWREYXRlIHwgZGF0ZTonZGQvTU0veXkgSEg6bW0nfX08L3RkPiA8dGQ+e3t1c2VyLmxhc3RNb2RpZmllZEJ5fX08L3RkPiA8dGQ+e3t1c2VyLmxhc3RNb2RpZmllZERhdGUgfCBkYXRlOidkZC9NTS95eSBISDptbSd9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+IDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cCBmbGV4LWJ0bi1ncm91cC1jb250YWluZXJcXFwiPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy4uL3VzZXItbWFuYWdlbWVudCcsIHVzZXIubG9naW5dXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvIGJ0bi1zbVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1leWVcXFwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhpZGRlbi1tZC1kb3duXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24udmlld1xcXCI+Vmlldzwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbcm91dGVyTGlua109XFxcIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogJ3VzZXItbWFuYWdlbWVudC8nKyB1c2VyLmxvZ2luICsgJy9lZGl0J30gfV1cXFwiIHJlcGxhY2VVcmw9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXBlbmNpbFxcXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGlkZGVuLW1kLWRvd25cXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LmFjdGlvbi5lZGl0XFxcIj5FZGl0PC9zcGFuPiA8L2J1dHRvbj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgeyBvdXRsZXRzOiB7IHBvcHVwOiAndXNlci1tYW5hZ2VtZW50LycrIHVzZXIubG9naW4gKyAnL2RlbGV0ZSd9IH1dXFxcIiByZXBsYWNlVXJsPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXFxcIiBbZGlzYWJsZWRdPVxcXCJjdXJyZW50QWNjb3VudC5sb2dpbj09dXNlci5sb2dpblxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1yZW1vdmVcXFwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhpZGRlbi1tZC1kb3duXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24uZGVsZXRlXFxcIj5EZWxldGU8L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gPC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDxkaXYgKm5nSWY9XFxcInVzZXJzXFxcIj4gPGRpdiBjbGFzcz1cXFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcXFwiPiA8amhpLWl0ZW0tY291bnQgW3BhZ2VdPVxcXCJwYWdlXFxcIiBbdG90YWxdPVxcXCJxdWVyeUNvdW50XFxcIiBbaXRlbXNQZXJQYWdlXT1cXFwiaXRlbXNQZXJQYWdlXFxcIj48L2poaS1pdGVtLWNvdW50PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcXFwiPiA8bmdiLXBhZ2luYXRpb24gW2NvbGxlY3Rpb25TaXplXT1cXFwidG90YWxJdGVtc1xcXCIgWyhwYWdlKV09XFxcInBhZ2VcXFwiIChwYWdlQ2hhbmdlKT1cXFwibG9hZFBhZ2UocGFnZSlcXFwiPjwvbmdiLXBhZ2luYXRpb24+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBKaGlFdmVudE1hbmFnZXIsIEpoaVBhZ2luYXRpb25VdGlsLCBKaGlQYXJzZUxpbmtzLCBKaGlBbGVydFNlcnZpY2UgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IElURU1TX1BFUl9QQUdFLCBQcmluY2lwYWwsIFVzZXIsIFVzZXJTZXJ2aWNlLCBSZXNwb25zZVdyYXBwZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uL2Jsb2Nrcy9jb25maWcvdWliLXBhZ2luYXRpb24uY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktdXNlci1tZ210JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBVc2VyTWdtdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIGN1cnJlbnRBY2NvdW50OiBhbnk7XG4gICAgdXNlcnM6IFVzZXJbXTtcbiAgICBlcnJvcjogYW55O1xuICAgIHN1Y2Nlc3M6IGFueTtcbiAgICByb3V0ZURhdGE6IGFueTtcbiAgICBsaW5rczogYW55O1xuICAgIHRvdGFsSXRlbXM6IGFueTtcbiAgICBxdWVyeUNvdW50OiBhbnk7XG4gICAgaXRlbXNQZXJQYWdlOiBhbnk7XG4gICAgcGFnZTogYW55O1xuICAgIHByZWRpY2F0ZTogYW55O1xuICAgIHByZXZpb3VzUGFnZTogYW55O1xuICAgIHJldmVyc2U6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBwYXJzZUxpbmtzOiBKaGlQYXJzZUxpbmtzLFxuICAgICAgICBwcml2YXRlIGFsZXJ0U2VydmljZTogSmhpQWxlcnRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHByaW5jaXBhbDogUHJpbmNpcGFsLFxuICAgICAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogSmhpRXZlbnRNYW5hZ2VyLFxuICAgICAgICBwcml2YXRlIHBhZ2luYXRpb25VdGlsOiBKaGlQYWdpbmF0aW9uVXRpbCxcbiAgICAgICAgcHJpdmF0ZSBwYWdpbmF0aW9uQ29uZmlnOiBQYWdpbmF0aW9uQ29uZmlnLFxuICAgICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICAgICkge1xuICAgICAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IElURU1TX1BFUl9QQUdFO1xuICAgICAgICB0aGlzLnJvdXRlRGF0YSA9IHRoaXMuYWN0aXZhdGVkUm91dGUuZGF0YS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGFnZSA9IGRhdGFbJ3BhZ2luZ1BhcmFtcyddLnBhZ2U7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzUGFnZSA9IGRhdGFbJ3BhZ2luZ1BhcmFtcyddLnBhZ2U7XG4gICAgICAgICAgICB0aGlzLnJldmVyc2UgPSBkYXRhWydwYWdpbmdQYXJhbXMnXS5hc2NlbmRpbmc7XG4gICAgICAgICAgICB0aGlzLnByZWRpY2F0ZSA9IGRhdGFbJ3BhZ2luZ1BhcmFtcyddLnByZWRpY2F0ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KCkudGhlbigoYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWNjb3VudCA9IGFjY291bnQ7XG4gICAgICAgICAgICB0aGlzLmxvYWRBbGwoKTtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2VJblVzZXJzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnJvdXRlRGF0YS51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQ2hhbmdlSW5Vc2VycygpIHtcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuc3Vic2NyaWJlKCd1c2VyTGlzdE1vZGlmaWNhdGlvbicsIChyZXNwb25zZSkgPT4gdGhpcy5sb2FkQWxsKCkpO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZSh1c2VyLCBpc0FjdGl2YXRlZCkge1xuICAgICAgICB1c2VyLmFjdGl2YXRlZCA9IGlzQWN0aXZhdGVkO1xuXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UudXBkYXRlKHVzZXIpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gJ09LJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQWxsKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9ICdFUlJPUic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9hZEFsbCgpIHtcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5xdWVyeSh7XG4gICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2UgLSAxLFxuICAgICAgICAgICAgc2l6ZTogdGhpcy5pdGVtc1BlclBhZ2UsXG4gICAgICAgICAgICBzb3J0OiB0aGlzLnNvcnQoKX0pLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXM6IFJlc3BvbnNlV3JhcHBlcikgPT4gdGhpcy5vblN1Y2Nlc3MocmVzLmpzb24sIHJlcy5oZWFkZXJzKSxcbiAgICAgICAgICAgIChyZXM6IFJlc3BvbnNlV3JhcHBlcikgPT4gdGhpcy5vbkVycm9yKHJlcy5qc29uKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHRyYWNrSWRlbnRpdHkoaW5kZXgsIGl0ZW06IFVzZXIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uaWQ7XG4gICAgfVxuXG4gICAgc29ydCgpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW3RoaXMucHJlZGljYXRlICsgJywnICsgKHRoaXMucmV2ZXJzZSA/ICdhc2MnIDogJ2Rlc2MnKV07XG4gICAgICAgIGlmICh0aGlzLnByZWRpY2F0ZSAhPT0gJ2lkJykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goJ2lkJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBsb2FkUGFnZShwYWdlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHBhZ2UgIT09IHRoaXMucHJldmlvdXNQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzUGFnZSA9IHBhZ2U7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYW5zaXRpb24oKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3VzZXItbWFuYWdlbWVudCddLCB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgICAgICAgICAgICBzb3J0OiB0aGlzLnByZWRpY2F0ZSArICcsJyArICh0aGlzLnJldmVyc2UgPyAnYXNjJyA6ICdkZXNjJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubG9hZEFsbCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TdWNjZXNzKGRhdGEsIGhlYWRlcnMpIHtcbiAgICAgICAgdGhpcy5saW5rcyA9IHRoaXMucGFyc2VMaW5rcy5wYXJzZShoZWFkZXJzLmdldCgnbGluaycpKTtcbiAgICAgICAgdGhpcy50b3RhbEl0ZW1zID0gaGVhZGVycy5nZXQoJ1gtVG90YWwtQ291bnQnKTtcbiAgICAgICAgdGhpcy5xdWVyeUNvdW50ID0gdGhpcy50b3RhbEl0ZW1zO1xuICAgICAgICB0aGlzLnVzZXJzID0gZGF0YTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2UuZXJyb3IoZXJyb3IuZXJyb3IsIGVycm9yLm1lc3NhZ2UsIG51bGwpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNvbHZlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBSb3V0ZXMsIENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSmhpUGFnaW5hdGlvblV0aWwgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IFVzZXJNZ210Q29tcG9uZW50IH0gZnJvbSAnLi91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJNZ210RGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi91c2VyLW1hbmFnZW1lbnQtZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2VyRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi91c2VyLW1hbmFnZW1lbnQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2VyRGVsZXRlRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi91c2VyLW1hbmFnZW1lbnQtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBQcmluY2lwYWwgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclJlc29sdmUgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByaW5jaXBhbDogUHJpbmNpcGFsKSB7IH1cblxuICAgIGNhbkFjdGl2YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmluY2lwYWwuaWRlbnRpdHkoKS50aGVuKChhY2NvdW50KSA9PiB0aGlzLnByaW5jaXBhbC5oYXNBbnlBdXRob3JpdHkoWydST0xFX0FETUlOJ10pKTtcbiAgICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyUmVzb2x2ZVBhZ2luZ1BhcmFtcyBpbXBsZW1lbnRzIFJlc29sdmU8YW55PiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2luYXRpb25VdGlsOiBKaGlQYWdpbmF0aW9uVXRpbCkge31cblxuICAgIHJlc29sdmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KSB7XG4gICAgICAgIGNvbnN0IHBhZ2UgPSByb3V0ZS5xdWVyeVBhcmFtc1sncGFnZSddID8gcm91dGUucXVlcnlQYXJhbXNbJ3BhZ2UnXSA6ICcxJztcbiAgICAgICAgY29uc3Qgc29ydCA9IHJvdXRlLnF1ZXJ5UGFyYW1zWydzb3J0J10gPyByb3V0ZS5xdWVyeVBhcmFtc1snc29ydCddIDogJ2lkLGFzYyc7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2luYXRpb25VdGlsLnBhcnNlUGFnZShwYWdlKSxcbiAgICAgICAgICAgIHByZWRpY2F0ZTogdGhpcy5wYWdpbmF0aW9uVXRpbC5wYXJzZVByZWRpY2F0ZShzb3J0KSxcbiAgICAgICAgICAgIGFzY2VuZGluZzogdGhpcy5wYWdpbmF0aW9uVXRpbC5wYXJzZUFzY2VuZGluZyhzb3J0KVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZXJNZ210Um91dGU6IFJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6ICd1c2VyLW1hbmFnZW1lbnQnLFxuICAgICAgICBjb21wb25lbnQ6IFVzZXJNZ210Q29tcG9uZW50LFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgICAncGFnaW5nUGFyYW1zJzogVXNlclJlc29sdmVQYWdpbmdQYXJhbXNcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgcGFnZVRpdGxlOiAndXNlck1hbmFnZW1lbnQuaG9tZS50aXRsZSdcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAndXNlci1tYW5hZ2VtZW50Lzpsb2dpbicsXG4gICAgICAgIGNvbXBvbmVudDogVXNlck1nbXREZXRhaWxDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHBhZ2VUaXRsZTogJ3VzZXJNYW5hZ2VtZW50LmhvbWUudGl0bGUnXG4gICAgICAgIH1cbiAgICB9XG5dO1xuXG5leHBvcnQgY29uc3QgdXNlckRpYWxvZ1JvdXRlOiBSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiAndXNlci1tYW5hZ2VtZW50LW5ldycsXG4gICAgICAgIGNvbXBvbmVudDogVXNlckRpYWxvZ0NvbXBvbmVudCxcbiAgICAgICAgb3V0bGV0OiAncG9wdXAnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICd1c2VyLW1hbmFnZW1lbnQvOmxvZ2luL2VkaXQnLFxuICAgICAgICBjb21wb25lbnQ6IFVzZXJEaWFsb2dDb21wb25lbnQsXG4gICAgICAgIG91dGxldDogJ3BvcHVwJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAndXNlci1tYW5hZ2VtZW50Lzpsb2dpbi9kZWxldGUnLFxuICAgICAgICBjb21wb25lbnQ6IFVzZXJEZWxldGVEaWFsb2dDb21wb25lbnQsXG4gICAgICAgIG91dGxldDogJ3BvcHVwJ1xuICAgIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQucm91dGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZ2JNb2RhbCwgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IFVzZXIsIFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJNb2RhbFNlcnZpY2Uge1xuICAgIHByaXZhdGUgaXNPcGVuID0gZmFsc2U7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2VcbiAgICApIHt9XG5cbiAgICBvcGVuKGNvbXBvbmVudDogQ29tcG9uZW50LCBsb2dpbj86IHN0cmluZyk6IE5nYk1vZGFsUmVmIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuXG4gICAgICAgIGlmIChsb2dpbikge1xuICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5maW5kKGxvZ2luKS5zdWJzY3JpYmUoKHVzZXIpID0+IHRoaXMudXNlck1vZGFsUmVmKGNvbXBvbmVudCwgdXNlcikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlck1vZGFsUmVmKGNvbXBvbmVudCwgbmV3IFVzZXIoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VyTW9kYWxSZWYoY29tcG9uZW50OiBDb21wb25lbnQsIHVzZXI6IFVzZXIpOiBOZ2JNb2RhbFJlZiB7XG4gICAgICAgIGNvbnN0IG1vZGFsUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3Blbihjb21wb25lbnQsIHsgc2l6ZTogJ2xnJywgYmFja2Ryb3A6ICdzdGF0aWMnfSk7XG4gICAgICAgIG1vZGFsUmVmLmNvbXBvbmVudEluc3RhbmNlLnVzZXIgPSB1c2VyO1xuICAgICAgICBtb2RhbFJlZi5yZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbeyBvdXRsZXRzOiB7IHBvcHVwOiBudWxsIH19XSwgeyByZXBsYWNlVXJsOiB0cnVlIH0pO1xuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgfSwgKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3sgb3V0bGV0czogeyBwb3B1cDogbnVsbCB9fV0sIHsgcmVwbGFjZVVybDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbW9kYWxSZWY7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tb2RhbC5zZXJ2aWNlLnRzIiwiLy8gRE8gTk9UIEVESVQgVEhJUyBGSUxFLCBFRElUIFRIRSBXRUJQQUNLIENPTU1PTiBDT05GSUcgSU5TVEVBRCwgV0hJQ0ggV0lMTCBNT0RJRlkgVEhJUyBGSUxFXG4gLyogdHNsaW50OmRpc2FibGUgKi9cbmxldCBfVkVSU0lPTiA9ICcwLjAuMS1TTkFQU0hPVCc7IC8vIFRoaXMgdmFsdWUgd2lsbCBiZSBvdmVyd3JpdHRlbiBieSB3ZWJwYWNrXG5sZXQgX0RFQlVHX0lORk9fRU5BQkxFRCA9IHRydWU7IC8vIFRoaXMgdmFsdWUgd2lsbCBiZSBvdmVyd3JpdHRlbiBieSB3ZWJwYWNrXG5fVkVSU0lPTiA9ICcwLjAuMS1TTkFQU0hPVCc7XG5fREVCVUdfSU5GT19FTkFCTEVEID0gdHJ1ZTtcbi8qIHRzbGludDplbmFibGUgKi9cbmV4cG9ydCBjb25zdCBWRVJTSU9OID0gX1ZFUlNJT047XG5leHBvcnQgY29uc3QgREVCVUdfSU5GT19FTkFCTEVEID0gX0RFQlVHX0lORk9fRU5BQkxFRDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc3RyaW5nLXJlcGxhY2Utd2VicGFjay1wbHVnaW4vbG9hZGVyLmpzP2lkPWd4dXZic2s2NmE0IS4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hcHAuY29uc3RhbnRzLnRzIiwiaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQgeyBQcm9kQ29uZmlnIH0gZnJvbSAnLi9ibG9ja3MvY29uZmlnL3Byb2QuY29uZmlnJztcbmltcG9ydCB7IE5lb2poaXBzdGVyQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAubW9kdWxlJztcblxuUHJvZENvbmZpZygpO1xuXG5pZiAobW9kdWxlWydob3QnXSkge1xuICAgIG1vZHVsZVsnaG90J10uYWNjZXB0KCk7XG59XG5cbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoTmVvamhpcHN0ZXJBcHBNb2R1bGUpXG4udGhlbigoc3VjY2VzcykgPT4gY29uc29sZS5sb2coYEFwcGxpY2F0aW9uIHN0YXJ0ZWRgKSlcbi5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hcHAubWFpbi50cyIsImltcG9ydCAnLi92ZW5kb3IudHMnO1xuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTmcyV2Vic3RvcmFnZSB9IGZyb20gJ25nMi13ZWJzdG9yYWdlJztcblxuaW1wb3J0IHsgTmVvamhpcHN0ZXJTaGFyZWRNb2R1bGUsIFVzZXJSb3V0ZUFjY2Vzc1NlcnZpY2UgfSBmcm9tICcuL3NoYXJlZCc7XG5pbXBvcnQgeyBOZW9qaGlwc3RlckhvbWVNb2R1bGUgfSBmcm9tICcuL2hvbWUvaG9tZS5tb2R1bGUnO1xuaW1wb3J0IHsgTmVvamhpcHN0ZXJBZG1pbk1vZHVsZSB9IGZyb20gJy4vYWRtaW4vYWRtaW4ubW9kdWxlJztcbmltcG9ydCB7IE5lb2poaXBzdGVyQWNjb3VudE1vZHVsZSB9IGZyb20gJy4vYWNjb3VudC9hY2NvdW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBOZW9qaGlwc3RlckVudGl0eU1vZHVsZSB9IGZyb20gJy4vZW50aXRpZXMvZW50aXR5Lm1vZHVsZSc7XG5cbmltcG9ydCB7IGN1c3RvbUh0dHBQcm92aWRlciB9IGZyb20gJy4vYmxvY2tzL2ludGVyY2VwdG9yL2h0dHAucHJvdmlkZXInO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbmZpZyB9IGZyb20gJy4vYmxvY2tzL2NvbmZpZy91aWItcGFnaW5hdGlvbi5jb25maWcnO1xuXG5pbXBvcnQge1xuICAgIEpoaU1haW5Db21wb25lbnQsXG4gICAgTGF5b3V0Um91dGluZ01vZHVsZSxcbiAgICBOYXZiYXJDb21wb25lbnQsXG4gICAgRm9vdGVyQ29tcG9uZW50LFxuICAgIFByb2ZpbGVTZXJ2aWNlLFxuICAgIFBhZ2VSaWJib25Db21wb25lbnQsXG4gICAgQWN0aXZlTWVudURpcmVjdGl2ZSxcbiAgICBFcnJvckNvbXBvbmVudFxufSBmcm9tICcuL2xheW91dHMnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcbiAgICAgICAgTGF5b3V0Um91dGluZ01vZHVsZSxcbiAgICAgICAgTmcyV2Vic3RvcmFnZS5mb3JSb290KHsgcHJlZml4OiAnamhpJywgc2VwYXJhdG9yOiAnLSd9KSxcbiAgICAgICAgTmVvamhpcHN0ZXJTaGFyZWRNb2R1bGUsXG4gICAgICAgIE5lb2poaXBzdGVySG9tZU1vZHVsZSxcbiAgICAgICAgTmVvamhpcHN0ZXJBZG1pbk1vZHVsZSxcbiAgICAgICAgTmVvamhpcHN0ZXJBY2NvdW50TW9kdWxlLFxuICAgICAgICBOZW9qaGlwc3RlckVudGl0eU1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEpoaU1haW5Db21wb25lbnQsXG4gICAgICAgIE5hdmJhckNvbXBvbmVudCxcbiAgICAgICAgRXJyb3JDb21wb25lbnQsXG4gICAgICAgIFBhZ2VSaWJib25Db21wb25lbnQsXG4gICAgICAgIEFjdGl2ZU1lbnVEaXJlY3RpdmUsXG4gICAgICAgIEZvb3RlckNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFByb2ZpbGVTZXJ2aWNlLFxuICAgICAgICBjdXN0b21IdHRwUHJvdmlkZXIoKSxcbiAgICAgICAgUGFnaW5hdGlvbkNvbmZpZyxcbiAgICAgICAgVXNlclJvdXRlQWNjZXNzU2VydmljZVxuICAgIF0sXG4gICAgYm9vdHN0cmFwOiBbIEpoaU1haW5Db21wb25lbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBOZW9qaGlwc3RlckFwcE1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hcHAubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMnO1xuXG5leHBvcnQgY29uc3QgbmF2YmFyUm91dGU6IFJvdXRlID0ge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogTmF2YmFyQ29tcG9uZW50LFxuICAgIG91dGxldDogJ25hdmJhcidcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5yb3V0ZS50cyIsImltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBERUJVR19JTkZPX0VOQUJMRUQgfSBmcm9tICcuLi8uLi9hcHAuY29uc3RhbnRzJztcblxuZXhwb3J0IGZ1bmN0aW9uIFByb2RDb25maWcoKSB7XG4gICAgLy8gZGlzYWJsZSBkZWJ1ZyBkYXRhIG9uIHByb2QgcHJvZmlsZSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlXG4gICAgaWYgKCFERUJVR19JTkZPX0VOQUJMRUQpIHtcbiAgICAgICAgZW5hYmxlUHJvZE1vZGUoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9jb25maWcvcHJvZC5jb25maWcudHMiLCJpbXBvcnQgeyBJVEVNU19QRVJfUEFHRSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JQYWdpbmF0aW9uQ29uZmlnfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogTmdiUGFnaW5hdGlvbkNvbmZpZykge1xuICAgICAgICBjb25maWcuYm91bmRhcnlMaW5rcyA9IHRydWU7XG4gICAgICAgIGNvbmZpZy5tYXhTaXplID0gNTtcbiAgICAgICAgY29uZmlnLnBhZ2VTaXplID0gSVRFTVNfUEVSX1BBR0U7XG4gICAgICAgIGNvbmZpZy5zaXplID0gJ3NtJztcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9jb25maWcvdWliLXBhZ2luYXRpb24uY29uZmlnLnRzIiwiaW1wb3J0IHsgSmhpSHR0cEludGVyY2VwdG9yIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuaW1wb3J0IHsgUmVxdWVzdE9wdGlvbnNBcmdzLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgQXV0aEV4cGlyZWRJbnRlcmNlcHRvciBleHRlbmRzIEpoaUh0dHBJbnRlcmNlcHRvciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlcXVlc3RJbnRlcmNlcHQob3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IFJlcXVlc3RPcHRpb25zQXJncyB7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIHJlc3BvbnNlSW50ZXJjZXB0KG9ic2VydmFibGU6IE9ic2VydmFibGU8UmVzcG9uc2U+KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gPE9ic2VydmFibGU8UmVzcG9uc2U+PiBvYnNlcnZhYmxlLmNhdGNoKChlcnJvciwgc291cmNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KExvZ2luU2VydmljZSk7XG4gICAgICAgICAgICAgICAgbG9naW5TZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9pbnRlcmNlcHRvci9hdXRoLWV4cGlyZWQuaW50ZXJjZXB0b3IudHMiLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFJlcXVlc3RPcHRpb25zQXJncywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UsIFNlc3Npb25TdG9yYWdlU2VydmljZSB9IGZyb20gJ25nMi13ZWJzdG9yYWdlJztcbmltcG9ydCB7IEpoaUh0dHBJbnRlcmNlcHRvciB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuZXhwb3J0IGNsYXNzIEF1dGhJbnRlcmNlcHRvciBleHRlbmRzIEpoaUh0dHBJbnRlcmNlcHRvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBsb2NhbFN0b3JhZ2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgc2Vzc2lvblN0b3JhZ2U6IFNlc3Npb25TdG9yYWdlU2VydmljZVxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlcXVlc3RJbnRlcmNlcHQob3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IFJlcXVlc3RPcHRpb25zQXJncyB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sb2NhbFN0b3JhZ2UucmV0cmlldmUoJ2F1dGhlbnRpY2F0aW9uVG9rZW4nKSB8fCB0aGlzLnNlc3Npb25TdG9yYWdlLnJldHJpZXZlKCdhdXRoZW50aWNhdGlvblRva2VuJyk7XG4gICAgICAgIGlmICghIXRva2VuKSB7XG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgdG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIHJlc3BvbnNlSW50ZXJjZXB0KG9ic2VydmFibGU6IE9ic2VydmFibGU8UmVzcG9uc2U+KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTsgLy8gYnkgcGFzc1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3IvYXV0aC5pbnRlcmNlcHRvci50cyIsImltcG9ydCB7IEpoaUh0dHBJbnRlcmNlcHRvciwgSmhpRXZlbnRNYW5hZ2VyIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuaW1wb3J0IHsgUmVxdWVzdE9wdGlvbnNBcmdzLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBjbGFzcyBFcnJvckhhbmRsZXJJbnRlcmNlcHRvciBleHRlbmRzIEpoaUh0dHBJbnRlcmNlcHRvciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV2ZW50TWFuYWdlcjogSmhpRXZlbnRNYW5hZ2VyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdEludGVyY2VwdChvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogUmVxdWVzdE9wdGlvbnNBcmdzIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuXG4gICAgcmVzcG9uc2VJbnRlcmNlcHQob2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxSZXNwb25zZT4pOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiA8T2JzZXJ2YWJsZTxSZXNwb25zZT4+IG9ic2VydmFibGUuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoIShlcnJvci5zdGF0dXMgPT09IDQwMSAmJiAoZXJyb3IudGV4dCgpID09PSAnJyB8fFxuICAgICAgICAgICAgICAgIChlcnJvci5qc29uKCkucGF0aCAmJiBlcnJvci5qc29uKCkucGF0aC5pbmRleE9mKCcvYXBpL2FjY291bnQnKSA9PT0gMCApKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5icm9hZGNhc3QoIHtuYW1lOiAnbmVvamhpcHN0ZXJBcHAuaHR0cEVycm9yJywgY29udGVudDogZXJyb3J9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3IvZXJyb3JoYW5kbGVyLmludGVyY2VwdG9yLnRzIiwiaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFhIUkJhY2tlbmQsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBKaGlFdmVudE1hbmFnZXIsIEpoaUludGVyY2VwdGFibGVIdHRwIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBBdXRoSW50ZXJjZXB0b3IgfSBmcm9tICcuL2F1dGguaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSwgU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnbmcyLXdlYnN0b3JhZ2UnO1xuaW1wb3J0IHsgQXV0aEV4cGlyZWRJbnRlcmNlcHRvciB9IGZyb20gJy4vYXV0aC1leHBpcmVkLmludGVyY2VwdG9yJztcbmltcG9ydCB7IEVycm9ySGFuZGxlckludGVyY2VwdG9yIH0gZnJvbSAnLi9lcnJvcmhhbmRsZXIuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uSW50ZXJjZXB0b3IgfSBmcm9tICcuL25vdGlmaWNhdGlvbi5pbnRlcmNlcHRvcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcmNlcHRhYmxlRmFjdG9yeShcbiAgICBiYWNrZW5kOiBYSFJCYWNrZW5kLFxuICAgIGRlZmF1bHRPcHRpb25zOiBSZXF1ZXN0T3B0aW9ucyxcbiAgICBsb2NhbFN0b3JhZ2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsXG4gICAgc2Vzc2lvblN0b3JhZ2U6IFNlc3Npb25TdG9yYWdlU2VydmljZSxcbiAgICBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgZXZlbnRNYW5hZ2VyOiBKaGlFdmVudE1hbmFnZXJcbikge1xuICAgIHJldHVybiBuZXcgSmhpSW50ZXJjZXB0YWJsZUh0dHAoXG4gICAgICAgIGJhY2tlbmQsXG4gICAgICAgIGRlZmF1bHRPcHRpb25zLFxuICAgICAgICBbXG4gICAgICAgICAgICBuZXcgQXV0aEludGVyY2VwdG9yKGxvY2FsU3RvcmFnZSwgc2Vzc2lvblN0b3JhZ2UpLFxuICAgICAgICAgICAgbmV3IEF1dGhFeHBpcmVkSW50ZXJjZXB0b3IoaW5qZWN0b3IpLFxuICAgICAgICAgICAgLy8gT3RoZXIgaW50ZXJjZXB0b3JzIGNhbiBiZSBhZGRlZCBoZXJlXG4gICAgICAgICAgICBuZXcgRXJyb3JIYW5kbGVySW50ZXJjZXB0b3IoZXZlbnRNYW5hZ2VyKSxcbiAgICAgICAgICAgIG5ldyBOb3RpZmljYXRpb25JbnRlcmNlcHRvcigpXG4gICAgICAgIF1cbiAgICApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGN1c3RvbUh0dHBQcm92aWRlcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm92aWRlOiBIdHRwLFxuICAgICAgICB1c2VGYWN0b3J5OiBpbnRlcmNlcHRhYmxlRmFjdG9yeSxcbiAgICAgICAgZGVwczogW1xuICAgICAgICAgICAgWEhSQmFja2VuZCxcbiAgICAgICAgICAgIFJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZSxcbiAgICAgICAgICAgIFNlc3Npb25TdG9yYWdlU2VydmljZSxcbiAgICAgICAgICAgIEluamVjdG9yLFxuICAgICAgICAgICAgSmhpRXZlbnRNYW5hZ2VyXG4gICAgICAgIF1cbiAgICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2ludGVyY2VwdG9yL2h0dHAucHJvdmlkZXIudHMiLCJpbXBvcnQgeyBKaGlIdHRwSW50ZXJjZXB0b3IgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5pbXBvcnQgeyBSZXF1ZXN0T3B0aW9uc0FyZ3MsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbkludGVyY2VwdG9yIGV4dGVuZHMgSmhpSHR0cEludGVyY2VwdG9yIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlcXVlc3RJbnRlcmNlcHQob3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IFJlcXVlc3RPcHRpb25zQXJncyB7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIHJlc3BvbnNlSW50ZXJjZXB0KG9ic2VydmFibGU6IE9ic2VydmFibGU8UmVzcG9uc2U+KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gPE9ic2VydmFibGU8UmVzcG9uc2U+PiBvYnNlcnZhYmxlLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXJyID0gQXJyYXkuZnJvbShlcnJvci5oZWFkZXJzLl9oZWFkZXJzKTtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSBbXTtcbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChhcnJbaV1bMF0uZW5kc1dpdGgoJ2FwcC1hbGVydCcpIHx8IGFycltpXVswXS5lbmRzV2l0aCgnYXBwLXBhcmFtcycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnMucHVzaChhcnJbaV1bMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhlYWRlcnMuc29ydCgpO1xuICAgICAgICAgICAgY29uc3QgYWxlcnRLZXkgPSBoZWFkZXJzLmxlbmd0aCA+PSAxID8gZXJyb3IuaGVhZGVycy5nZXQoaGVhZGVyc1swXSkgOiBudWxsO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhbGVydEtleSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPXG4gICAgICAgICAgICAgICAgLy8gSmhpQWxlcnRTZXJ2aWNlLnN1Y2Nlc3MoYWxlcnRLZXksIHsgcGFyYW06IHJlc3BvbnNlLmhlYWRlcnMoaGVhZGVyc1sxXSl9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3Ivbm90aWZpY2F0aW9uLmludGVyY2VwdG9yLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyogamhpcHN0ZXItbmVlZGxlLWFkZC1lbnRpdHktbW9kdWxlLWltcG9ydCAtIEpIaXBzdGVyIHdpbGwgYWRkIGVudGl0eSBtb2R1bGVzIGltcG9ydHMgaGVyZSAqL1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgLyogamhpcHN0ZXItbmVlZGxlLWFkZC1lbnRpdHktbW9kdWxlIC0gSkhpcHN0ZXIgd2lsbCBhZGQgZW50aXR5IG1vZHVsZXMgaGVyZSAqL1xuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtdLFxuICAgIHByb3ZpZGVyczogW10sXG4gICAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIE5lb2poaXBzdGVyRW50aXR5TW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2VudGl0eS5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTNcXFwiPiA8c3BhbiBjbGFzcz1cXFwiaGlwc3RlciBpbWctZmx1aWQgaW1nLXJvdW5kZWRcXFwiPjwvc3Bhbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC05XFxcIj4gPGgxIGNsYXNzPVxcXCJkaXNwbGF5LTRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiaG9tZS50aXRsZVxcXCI+V2VsY29tZSwgSmF2YSBIaXBzdGVyITwvaDE+IDxwIGNsYXNzPVxcXCJsZWFkXFxcIiBqaGlUcmFuc2xhdGU9XFxcImhvbWUuc3VidGl0bGVcXFwiPlRoaXMgaXMgeW91ciBob21lcGFnZTwvcD4gPGRpdiBbbmdTd2l0Y2hdPVxcXCJpc0F1dGhlbnRpY2F0ZWQoKVxcXCI+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcXFwiICpuZ1N3aXRjaENhc2U9XFxcInRydWVcXFwiPiA8c3BhbiAqbmdJZj1cXFwiYWNjb3VudFxcXCIgamhpVHJhbnNsYXRlPVxcXCJob21lLmxvZ2dlZC5tZXNzYWdlXFxcIiB0cmFuc2xhdGVWYWx1ZXM9XFxcInt1c2VybmFtZTogJ3t7YWNjb3VudC5sb2dpbn19J31cXFwiPiBZb3UgYXJlIGxvZ2dlZCBpbiBhcyB1c2VyIFxcXCJ7e2FjY291bnQubG9naW59fVxcXCIuIDwvc3Bhbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXdhcm5pbmdcXFwiICpuZ1N3aXRjaENhc2U9XFxcImZhbHNlXFxcIj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMuaW5mby5hdXRoZW50aWNhdGVkLnByZWZpeFxcXCI+SWYgeW91IHdhbnQgdG8gPC9zcGFuPiA8YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgKGNsaWNrKT1cXFwibG9naW4oKVxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMuaW5mby5hdXRoZW50aWNhdGVkLmxpbmtcXFwiPnNpZ24gaW48L2E+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMuaW5mby5hdXRoZW50aWNhdGVkLnN1ZmZpeFxcXCI+LCB5b3UgY2FuIHRyeSB0aGUgZGVmYXVsdCBhY2NvdW50czo8YnIvPi0gQWRtaW5pc3RyYXRvciAobG9naW49XFxcImFkbWluXFxcIiBhbmQgcGFzc3dvcmQ9XFxcImFkbWluXFxcIikgPGJyLz4tIFVzZXIgKGxvZ2luPVxcXCJ1c2VyXFxcIiBhbmQgcGFzc3dvcmQ9XFxcInVzZXJcXFwiKS48L3NwYW4+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC13YXJuaW5nXFxcIiAqbmdTd2l0Y2hDYXNlPVxcXCJmYWxzZVxcXCI+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLmluZm8ucmVnaXN0ZXIubm9hY2NvdW50XFxcIj5Zb3UgZG9uJ3QgaGF2ZSBhbiBhY2NvdW50IHlldD88L3NwYW4+IDxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiByb3V0ZXJMaW5rPVxcXCJyZWdpc3RlclxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMuaW5mby5yZWdpc3Rlci5saW5rXFxcIj5SZWdpc3RlciBhIG5ldyBhY2NvdW50PC9hPiA8L2Rpdj4gPC9kaXY+IDxwIGpoaVRyYW5zbGF0ZT1cXFwiaG9tZS5xdWVzdGlvblxcXCI+IElmIHlvdSBoYXZlIGFueSBxdWVzdGlvbiBvbiBKSGlwc3RlcjogPC9wPiA8dWw+IDxsaT48YSBocmVmPVxcXCJodHRwOi8vamhpcHN0ZXIuZ2l0aHViLmlvL1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHJlbD1cXFwibm9vcGVuZXJcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiaG9tZS5saW5rLmhvbWVwYWdlXFxcIj5KSGlwc3RlciBob21lcGFnZTwvYT48L2xpPiA8bGk+PGEgaHJlZj1cXFwiaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3RhZ3MvamhpcHN0ZXIvaW5mb1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHJlbD1cXFwibm9vcGVuZXJcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiaG9tZS5saW5rLnN0YWNrb3ZlcmZsb3dcXFwiPkpIaXBzdGVyIG9uIFN0YWNrIE92ZXJmbG93PC9hPjwvbGk+IDxsaT48YSBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vamhpcHN0ZXIvZ2VuZXJhdG9yLWpoaXBzdGVyL2lzc3Vlcz9zdGF0ZT1vcGVuXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgcmVsPVxcXCJub29wZW5lclxcXCIgamhpVHJhbnNsYXRlPVxcXCJob21lLmxpbmsuYnVndHJhY2tlclxcXCI+SkhpcHN0ZXIgYnVnIHRyYWNrZXI8L2E+PC9saT4gPGxpPjxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0dGVyLmltL2poaXBzdGVyL2dlbmVyYXRvci1qaGlwc3RlclxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHJlbD1cXFwibm9vcGVuZXJcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiaG9tZS5saW5rLmNoYXRcXFwiPkpIaXBzdGVyIHB1YmxpYyBjaGF0IHJvb208L2E+PC9saT4gPGxpPjxhIGhyZWY9XFxcImh0dHBzOi8vdHdpdHRlci5jb20vamF2YV9oaXBzdGVyXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgcmVsPVxcXCJub29wZW5lclxcXCIgamhpVHJhbnNsYXRlPVxcXCJob21lLmxpbmsuZm9sbG93XFxcIj5mb2xsb3cgQGphdmFfaGlwc3RlciBvbiBUd2l0dGVyPC9hPjwvbGk+IDwvdWw+IDxwPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImhvbWUubGlrZVxcXCI+SWYgeW91IGxpa2UgSkhpcHN0ZXIsIGRvbid0IGZvcmdldCB0byBnaXZlIHVzIGEgc3RhciBvbjwvc3Bhbj4gPGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2poaXBzdGVyL2dlbmVyYXRvci1qaGlwc3RlclxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHJlbD1cXFwibm9vcGVuZXJcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiaG9tZS5naXRodWJcXFwiPkdpdGh1YjwvYT4hIDwvcD4gPC9kaXY+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbFJlZiB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IEpoaUV2ZW50TWFuYWdlciB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgQWNjb3VudCwgTG9naW5Nb2RhbFNlcnZpY2UsIFByaW5jaXBhbCB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWhvbWUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtcbiAgICAgICAgJ2hvbWUuc2NzcydcbiAgICBdXG5cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgYWNjb3VudDogQWNjb3VudDtcbiAgICBtb2RhbFJlZjogTmdiTW9kYWxSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwcmluY2lwYWw6IFByaW5jaXBhbCxcbiAgICAgICAgcHJpdmF0ZSBsb2dpbk1vZGFsU2VydmljZTogTG9naW5Nb2RhbFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZXZlbnRNYW5hZ2VyOiBKaGlFdmVudE1hbmFnZXJcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wcmluY2lwYWwuaWRlbnRpdHkoKS50aGVuKChhY2NvdW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFjY291bnQgPSBhY2NvdW50O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckF1dGhlbnRpY2F0aW9uU3VjY2VzcygpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQXV0aGVudGljYXRpb25TdWNjZXNzKCkge1xuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5zdWJzY3JpYmUoJ2F1dGhlbnRpY2F0aW9uU3VjY2VzcycsIChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByaW5jaXBhbC5pZGVudGl0eSgpLnRoZW4oKGFjY291bnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjY291bnQgPSBhY2NvdW50O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlzQXV0aGVudGljYXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpbmNpcGFsLmlzQXV0aGVudGljYXRlZCgpO1xuICAgIH1cblxuICAgIGxvZ2luKCkge1xuICAgICAgICB0aGlzLm1vZGFsUmVmID0gdGhpcy5sb2dpbk1vZGFsU2VydmljZS5vcGVuKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE5lb2poaXBzdGVyU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkJztcblxuaW1wb3J0IHsgSE9NRV9ST1VURSwgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5lb2poaXBzdGVyU2hhcmVkTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbIEhPTUVfUk9VVEUgXSwgeyB1c2VIYXNoOiB0cnVlIH0pXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgTmVvamhpcHN0ZXJIb21lTW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5tb2R1bGUudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFVzZXJSb3V0ZUFjY2Vzc1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vJztcblxuZXhwb3J0IGNvbnN0IEhPTUVfUk9VVEU6IFJvdXRlID0ge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCxcbiAgICBkYXRhOiB7XG4gICAgICAgIGF1dGhvcml0aWVzOiBbXSxcbiAgICAgICAgcGFnZVRpdGxlOiAnaG9tZS50aXRsZSdcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUucm91dGUudHMiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaG9tZS5zY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgKiBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vaG9tZS5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL2hvbWUubW9kdWxlJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9pbmRleC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+IDxzcGFuIGNsYXNzPVxcXCJoaXBzdGVyIGltZy1mbHVpZCBpbWctcm91bmRlZFxcXCI+PC9zcGFuPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLThcXFwiPiA8aDEgamhpVHJhbnNsYXRlPVxcXCJlcnJvci50aXRsZVxcXCI+RXJyb3IgUGFnZSE8L2gxPiA8ZGl2IFtoaWRkZW5dPVxcXCIhZXJyb3JNZXNzYWdlXFxcIj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIj57e2Vycm9yTWVzc2FnZX19IDwvZGl2PiA8L2Rpdj4gPGRpdiBbaGlkZGVuXT1cXFwiIWVycm9yNDAzXFxcIiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVycm9yLjQwM1xcXCI+WW91IGFyZSBub3QgYXV0aG9yaXplZCB0byBhY2Nlc3MgdGhlIHBhZ2UuIDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9lcnJvci9lcnJvci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvZXJyb3IvZXJyb3IuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktZXJyb3InLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9lcnJvci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRXJyb3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICAgIGVycm9yNDAzOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucm91dGUuZGF0YS5zdWJzY3JpYmUoKHJvdXRlRGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJvdXRlRGF0YS5lcnJvcjQwMykge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3I0MDMgPSByb3V0ZURhdGEuZXJyb3I0MDM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocm91dGVEYXRhLmVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcm91dGVEYXRhLmVycm9yTWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFVzZXJSb3V0ZUFjY2Vzc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2Vycm9yLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBlcnJvclJvdXRlOiBSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiAnZXJyb3InLFxuICAgICAgICBjb21wb25lbnQ6IEVycm9yQ29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBhdXRob3JpdGllczogW10sXG4gICAgICAgICAgICBwYWdlVGl0bGU6ICdlcnJvci50aXRsZSdcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJ2FjY2Vzc2RlbmllZCcsXG4gICAgICAgIGNvbXBvbmVudDogRXJyb3JDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGF1dGhvcml0aWVzOiBbXSxcbiAgICAgICAgICAgIHBhZ2VUaXRsZTogJ2Vycm9yLnRpdGxlJyxcbiAgICAgICAgICAgIGVycm9yNDAzOiB0cnVlXG4gICAgICAgIH0sXG4gICAgfVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9lcnJvci9lcnJvci5yb3V0ZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPiA8cCBqaGlUcmFuc2xhdGU9XFxcImZvb3RlclxcXCI+VGhpcyBpcyB5b3VyIGZvb3RlcjwvcD4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWZvb3RlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Zvb3Rlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29tcG9uZW50IHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiLCJleHBvcnQgKiBmcm9tICcuL2Vycm9yL2Vycm9yLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2Vycm9yL2Vycm9yLnJvdXRlJztcbmV4cG9ydCAqIGZyb20gJy4vbWFpbi9tYWluLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbmF2YmFyL25hdmJhci5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9uYXZiYXIvYWN0aXZlLW1lbnUuZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vcHJvZmlsZXMvcGFnZS1yaWJib24uY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vcHJvZmlsZXMvcHJvZmlsZS5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcHJvZmlsZXMvcHJvZmlsZS1pbmZvLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vbGF5b3V0LXJvdXRpbmcubW9kdWxlJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9pbmRleC50cyIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBuYXZiYXJSb3V0ZSB9IGZyb20gJy4uL2FwcC5yb3V0ZSc7XG5pbXBvcnQgeyBlcnJvclJvdXRlIH0gZnJvbSAnLi8nO1xuXG5jb25zdCBMQVlPVVRfUk9VVEVTID0gW1xuICAgIG5hdmJhclJvdXRlLFxuICAgIC4uLmVycm9yUm91dGVcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChMQVlPVVRfUk9VVEVTLCB7IHVzZUhhc2g6IHRydWUgfSlcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgUm91dGVyTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXRSb3V0aW5nTW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbGF5b3V0LXJvdXRpbmcubW9kdWxlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxqaGktcGFnZS1yaWJib24+PC9qaGktcGFnZS1yaWJib24+IDxkaXY+IDxyb3V0ZXItb3V0bGV0IG5hbWU9XFxcIm5hdmJhclxcXCI+PC9yb3V0ZXItb3V0bGV0PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj4gPGRpdiBjbGFzcz1cXFwiY2FyZCBqaC1jYXJkXFxcIj4gPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PiA8cm91dGVyLW91dGxldCBuYW1lPVxcXCJwb3B1cFxcXCI+PC9yb3V0ZXItb3V0bGV0PiA8L2Rpdj4gPGpoaS1mb290ZXI+PC9qaGktZm9vdGVyPiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbWFpbi9tYWluLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9tYWluL21haW4uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgTmF2aWdhdGlvbkVuZCwgUm91dGVzUmVjb2duaXplZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEpoaUxhbmd1YWdlSGVscGVyLCBTdGF0ZVN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktbWFpbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21haW4uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEpoaU1haW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgamhpTGFuZ3VhZ2VIZWxwZXI6IEpoaUxhbmd1YWdlSGVscGVyLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlICRzdG9yYWdlU2VydmljZTogU3RhdGVTdG9yYWdlU2VydmljZSxcbiAgICApIHt9XG5cbiAgICBwcml2YXRlIGdldFBhZ2VUaXRsZShyb3V0ZVNuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KSB7XG4gICAgICAgIGxldCB0aXRsZTogc3RyaW5nID0gKHJvdXRlU25hcHNob3QuZGF0YSAmJiByb3V0ZVNuYXBzaG90LmRhdGFbJ3BhZ2VUaXRsZSddKSA/IHJvdXRlU25hcHNob3QuZGF0YVsncGFnZVRpdGxlJ10gOiAnbmVvamhpcHN0ZXJBcHAnO1xuICAgICAgICBpZiAocm91dGVTbmFwc2hvdC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICB0aXRsZSA9IHRoaXMuZ2V0UGFnZVRpdGxlKHJvdXRlU25hcHNob3QuZmlyc3RDaGlsZCkgfHwgdGl0bGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRpdGxlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuamhpTGFuZ3VhZ2VIZWxwZXIudXBkYXRlVGl0bGUodGhpcy5nZXRQYWdlVGl0bGUodGhpcy5yb3V0ZXIucm91dGVyU3RhdGUuc25hcHNob3Qucm9vdCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbWFpbi9tYWluLmNvbXBvbmVudC50cyIsImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBFbGVtZW50UmVmLCBSZW5kZXJlciwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSwgTGFuZ0NoYW5nZUV2ZW50IH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2poaUFjdGl2ZU1lbnVdJ1xufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVNZW51RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBqaGlBY3RpdmVNZW51OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlciwgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25MYW5nQ2hhbmdlLnN1YnNjcmliZSgoZXZlbnQ6IExhbmdDaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVGbGFnKGV2ZW50LmxhbmcpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUZsYWcodGhpcy50cmFuc2xhdGVTZXJ2aWNlLmN1cnJlbnRMYW5nKTtcbiAgICB9XG5cbiAgICB1cGRhdGVBY3RpdmVGbGFnKHNlbGVjdGVkTGFuZ3VhZ2UpIHtcbiAgICAgIGlmICh0aGlzLmpoaUFjdGl2ZU1lbnUgPT09IHNlbGVjdGVkTGFuZ3VhZ2UpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdhY3RpdmUnLCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnYWN0aXZlJywgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9uYXZiYXIvYWN0aXZlLW1lbnUuZGlyZWN0aXZlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxuYXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItaW52ZXJzZSBuYXZiYXItdG9nZ2xlYWJsZS1tZCBqaC1uYXZiYXJcXFwiPiA8ZGl2IGNsYXNzPVxcXCJqaC1sb2dvLWNvbnRhaW5lciBmbG9hdC1sZWZ0XFxcIj4gPGEgY2xhc3M9XFxcImpoLW5hdmJhci10b2dnbGVyIGhpZGRlbi1sZy11cCBmbG9hdC1yaWdodFxcXCIgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApO1xcXCIgZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIiBkYXRhLXRhcmdldD1cXFwiI25hdmJhclJlc3BvbnNpdmVcXFwiIGFyaWEtY29udHJvbHM9XFxcIm5hdmJhclJlc3BvbnNpdmVcXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIiBhcmlhLWxhYmVsPVxcXCJUb2dnbGUgbmF2aWdhdGlvblxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtYmFyc1xcXCI+PC9pPiA8L2E+IDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmQgbG9nbyBmbG9hdC1sZWZ0XFxcIiByb3V0ZXJMaW5rPVxcXCIvXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPHNwYW4gY2xhc3M9XFxcImxvZ28taW1nXFxcIj48L3NwYW4+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLnRpdGxlXFxcIiBjbGFzcz1cXFwibmF2YmFyLXRpdGxlXFxcIj5OZW9qaGlwc3Rlcjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcIm5hdmJhci12ZXJzaW9uXFxcIj57e3ZlcnNpb259fTwvc3Bhbj4gPC9hPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwibmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlXFxcIiBpZD1cXFwibmF2YmFyUmVzcG9uc2l2ZVxcXCIgW25nYkNvbGxhcHNlXT1cXFwiaXNOYXZiYXJDb2xsYXBzZWRcXFwiIFtuZ1N3aXRjaF09XFxcImlzQXV0aGVudGljYXRlZCgpXFxcIj4gPHVsIGNsYXNzPVxcXCJuYXZiYXItbmF2IG1sLWF1dG9cXFwiPiA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIFtyb3V0ZXJMaW5rQWN0aXZlT3B0aW9uc109XFxcIntleGFjdDogdHJ1ZX1cXFwiPiA8YSBjbGFzcz1cXFwibmF2LWxpbmtcXFwiIHJvdXRlckxpbms9XFxcIi9cXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtaG9tZVxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVudS5ob21lXFxcIj5Ib21lPC9zcGFuPiA8L2E+IDwvbGk+IDxsaSAqbmdTd2l0Y2hDYXNlPVxcXCJ0cnVlXFxcIiBuZ2JEcm9wZG93biBjbGFzcz1cXFwibmF2LWl0ZW0gZHJvcGRvd24gcG9pbnRlclxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVxcXCJ7ZXhhY3Q6IHRydWV9XFxcIj4gPGEgY2xhc3M9XFxcIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVxcXCIgbmdiRHJvcGRvd25Ub2dnbGUgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApO1xcXCIgaWQ9XFxcImVudGl0eS1tZW51XFxcIj4gPHNwYW4+IDxpIGNsYXNzPVxcXCJmYSBmYS10aC1saXN0XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmVudGl0aWVzLm1haW5cXFwiPiBFbnRpdGllcyA8L3NwYW4+IDxiIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9iPiA8L3NwYW4+IDwvYT4gPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIiBuZ2JEcm9wZG93bk1lbnU+IDwvdWw+IDwvbGk+IDxsaSAqamhpSGFzQW55QXV0aG9yaXR5PVxcXCInUk9MRV9BRE1JTidcXFwiIG5nYkRyb3Bkb3duIGNsYXNzPVxcXCJuYXYtaXRlbSBkcm9wZG93biBwb2ludGVyXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIFtyb3V0ZXJMaW5rQWN0aXZlT3B0aW9uc109XFxcIntleGFjdDogdHJ1ZX1cXFwiPiA8YSBjbGFzcz1cXFwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXFxcIiBuZ2JEcm9wZG93blRvZ2dsZSBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMCk7XFxcIiBpZD1cXFwiYWRtaW4tbWVudVxcXCI+IDxzcGFuPiA8aSBjbGFzcz1cXFwiZmEgZmEtdXNlci1wbHVzXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmFkbWluLm1haW5cXFwiPkFkbWluaXN0cmF0aW9uPC9zcGFuPiA8YiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvYj4gPC9zcGFuPiA8L2E+IDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgbmdiRHJvcGRvd25NZW51PiA8bGk+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJ1c2VyLW1hbmFnZW1lbnRcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS11c2VyXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmFkbWluLnVzZXJNYW5hZ2VtZW50XFxcIj5Vc2VyIG1hbmFnZW1lbnQ8L3NwYW4+IDwvYT4gPC9saT4gPGxpPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwiamhpLW1ldHJpY3NcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS10YWNob21ldGVyXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmFkbWluLm1ldHJpY3NcXFwiPk1ldHJpY3M8L3NwYW4+IDwvYT4gPC9saT4gPGxpPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwiamhpLWhlYWx0aFxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLWhlYXJ0XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmFkbWluLmhlYWx0aFxcXCI+SGVhbHRoPC9zcGFuPiA8L2E+IDwvbGk+IDxsaT4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcImpoaS1jb25maWd1cmF0aW9uXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtbGlzdFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVudS5hZG1pbi5jb25maWd1cmF0aW9uXFxcIj5Db25maWd1cmF0aW9uPC9zcGFuPiA8L2E+IDwvbGk+IDxsaT4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcImF1ZGl0c1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLWJlbGxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lbnUuYWRtaW4uYXVkaXRzXFxcIj5BdWRpdHM8L3NwYW4+IDwvYT4gPC9saT4gPGxpPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwibG9nc1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLXRhc2tzXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmFkbWluLmxvZ3NcXFwiPkxvZ3M8L3NwYW4+IDwvYT4gPC9saT4gPGxpICpuZ0lmPVxcXCJzd2FnZ2VyRW5hYmxlZFxcXCI+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJkb2NzXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtYm9va1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVudS5hZG1pbi5hcGlkb2NzXFxcIj5BUEk8L3NwYW4+IDwvYT4gPC9saT4gPC91bD4gPC9saT4gPGxpIG5nYkRyb3Bkb3duIGNsYXNzPVxcXCJuYXYtaXRlbSBkcm9wZG93biBwb2ludGVyXFxcIiAqbmdJZj1cXFwibGFuZ3VhZ2VzXFxcIj4gPGEgY2xhc3M9XFxcIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVxcXCIgbmdiRHJvcGRvd25Ub2dnbGUgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApO1xcXCIgaWQ9XFxcImxhbmd1YWdlc25hdkJhckRyb3Bkb3duXFxcIiAqbmdJZj1cXFwibGFuZ3VhZ2VzLmxlbmd0aCA+IDFcXFwiPiA8c3Bhbj4gPGkgY2xhc3M9XFxcImZhIGZhLWZsYWdcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lbnUubGFuZ3VhZ2VcXFwiPkxhbmd1YWdlPC9zcGFuPiA8YiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvYj4gPC9zcGFuPiA8L2E+IDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgbmdiRHJvcGRvd25NZW51ICpuZ0lmPVxcXCJsYW5ndWFnZXMubGVuZ3RoID4gMVxcXCI+IDxsaSAqbmdGb3I9XFxcImxldCBsYW5ndWFnZSBvZiBsYW5ndWFnZXNcXFwiPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgW2poaUFjdGl2ZU1lbnVdPVxcXCJsYW5ndWFnZVxcXCIgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApO1xcXCIgKGNsaWNrKT1cXFwiY2hhbmdlTGFuZ3VhZ2UobGFuZ3VhZ2UpO2NvbGxhcHNlTmF2YmFyKCk7XFxcIj57e2xhbmd1YWdlIHwgZmluZExhbmd1YWdlRnJvbUtleX19PC9hPiA8L2xpPiA8L3VsPiA8L2xpPiA8bGkgbmdiRHJvcGRvd24gY2xhc3M9XFxcIm5hdi1pdGVtIGRyb3Bkb3duIHBvaW50ZXJcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cXFwie2V4YWN0OiB0cnVlfVxcXCI+IDxhIGNsYXNzPVxcXCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcXFwiIG5nYkRyb3Bkb3duVG9nZ2xlIGhyZWY9XFxcImphdmFzY3JpcHQ6dm9pZCgwKTtcXFwiIGlkPVxcXCJhY2NvdW50LW1lbnVcXFwiPiA8c3BhbiAqbmdJZj1cXFwiIWdldEltYWdlVXJsKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtdXNlclxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVudS5hY2NvdW50Lm1haW5cXFwiPiBBY2NvdW50IDwvc3Bhbj4gPGIgY2xhc3M9XFxcImNhcmV0XFxcIj48L2I+IDwvc3Bhbj4gPHNwYW4gKm5nSWY9XFxcImdldEltYWdlVXJsKClcXFwiPiA8aW1nIFtzcmNdPVxcXCJnZXRJbWFnZVVybCgpXFxcIiBjbGFzcz1cXFwicHJvZmlsZS1pbWFnZSBpbWctY2lyY2xlXFxcIiBhbHQ9XFxcIkF2YXRhclxcXCI+IDwvc3Bhbj4gPC9hPiA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFxcXCIgbmdiRHJvcGRvd25NZW51PiA8bGkgKm5nU3dpdGNoQ2FzZT1cXFwidHJ1ZVxcXCI+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJzZXR0aW5nc1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLXdyZW5jaFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVudS5hY2NvdW50LnNldHRpbmdzXFxcIj5TZXR0aW5nczwvc3Bhbj4gPC9hPiA8L2xpPiA8bGkgKm5nU3dpdGNoQ2FzZT1cXFwidHJ1ZVxcXCI+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJwYXNzd29yZFxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLWNsb2NrLW9cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lbnUuYWNjb3VudC5wYXNzd29yZFxcXCI+UGFzc3dvcmQ8L3NwYW4+IDwvYT4gPC9saT4gPGxpICpuZ1N3aXRjaENhc2U9XFxcInRydWVcXFwiPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgKGNsaWNrKT1cXFwibG9nb3V0KClcXFwiIGlkPVxcXCJsb2dvdXRcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtc2lnbi1vdXRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lbnUuYWNjb3VudC5sb2dvdXRcXFwiPlNpZ24gb3V0PC9zcGFuPiA8L2E+IDwvbGk+IDxsaSAqbmdTd2l0Y2hDYXNlPVxcXCJmYWxzZVxcXCI+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiAoY2xpY2spPVxcXCJsb2dpbigpXFxcIiBpZD1cXFwibG9naW5cXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtc2lnbi1pblxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVudS5hY2NvdW50LmxvZ2luXFxcIj5TaWduIGluPC9zcGFuPiA8L2E+IDwvbGk+IDxsaSAqbmdTd2l0Y2hDYXNlPVxcXCJmYWxzZVxcXCI+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJyZWdpc3RlclxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLXJlZ2lzdGVyZWRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lbnUuYWNjb3VudC5yZWdpc3RlclxcXCI+UmVnaXN0ZXI8L3NwYW4+IDwvYT4gPC9saT4gPC91bD4gPC9saT4gPC91bD4gPC9kaXY+IDwvbmF2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBKaGlMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IFByb2ZpbGVTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvZmlsZXMvcHJvZmlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IEpoaUxhbmd1YWdlSGVscGVyLCBQcmluY2lwYWwsIExvZ2luTW9kYWxTZXJ2aWNlLCBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuXG5pbXBvcnQgeyBWRVJTSU9OLCBERUJVR19JTkZPX0VOQUJMRUQgfSBmcm9tICcuLi8uLi9hcHAuY29uc3RhbnRzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktbmF2YmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmF2YmFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtcbiAgICAgICAgJ25hdmJhci5zY3NzJ1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmF2YmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGluUHJvZHVjdGlvbjogYm9vbGVhbjtcbiAgICBpc05hdmJhckNvbGxhcHNlZDogYm9vbGVhbjtcbiAgICBsYW5ndWFnZXM6IGFueVtdO1xuICAgIHN3YWdnZXJFbmFibGVkOiBib29sZWFuO1xuICAgIG1vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcbiAgICB2ZXJzaW9uOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IEpoaUxhbmd1YWdlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBsYW5ndWFnZUhlbHBlcjogSmhpTGFuZ3VhZ2VIZWxwZXIsXG4gICAgICAgIHByaXZhdGUgcHJpbmNpcGFsOiBQcmluY2lwYWwsXG4gICAgICAgIHByaXZhdGUgbG9naW5Nb2RhbFNlcnZpY2U6IExvZ2luTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHByb2ZpbGVTZXJ2aWNlOiBQcm9maWxlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICAgICkge1xuICAgICAgICB0aGlzLnZlcnNpb24gPSBWRVJTSU9OID8gJ3YnICsgVkVSU0lPTiA6ICcnO1xuICAgICAgICB0aGlzLmlzTmF2YmFyQ29sbGFwc2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5sYW5ndWFnZUhlbHBlci5nZXRBbGwoKS50aGVuKChsYW5ndWFnZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VzID0gbGFuZ3VhZ2VzO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByb2ZpbGVTZXJ2aWNlLmdldFByb2ZpbGVJbmZvKCkuc3Vic2NyaWJlKChwcm9maWxlSW5mbykgPT4ge1xuICAgICAgICAgICAgdGhpcy5pblByb2R1Y3Rpb24gPSBwcm9maWxlSW5mby5pblByb2R1Y3Rpb247XG4gICAgICAgICAgICB0aGlzLnN3YWdnZXJFbmFibGVkID0gcHJvZmlsZUluZm8uc3dhZ2dlckVuYWJsZWQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoYW5nZUxhbmd1YWdlKGxhbmd1YWdlS2V5OiBzdHJpbmcpIHtcbiAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLmNoYW5nZUxhbmd1YWdlKGxhbmd1YWdlS2V5KTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZU5hdmJhcigpIHtcbiAgICAgICAgdGhpcy5pc05hdmJhckNvbGxhcHNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaXNBdXRoZW50aWNhdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmluY2lwYWwuaXNBdXRoZW50aWNhdGVkKCk7XG4gICAgfVxuXG4gICAgbG9naW4oKSB7XG4gICAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLmxvZ2luTW9kYWxTZXJ2aWNlLm9wZW4oKTtcbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIHRoaXMuY29sbGFwc2VOYXZiYXIoKTtcbiAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UubG9nb3V0KCk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnJ10pO1xuICAgIH1cblxuICAgIHRvZ2dsZU5hdmJhcigpIHtcbiAgICAgICAgdGhpcy5pc05hdmJhckNvbGxhcHNlZCA9ICF0aGlzLmlzTmF2YmFyQ29sbGFwc2VkO1xuICAgIH1cblxuICAgIGdldEltYWdlVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0F1dGhlbnRpY2F0ZWQoKSA/IHRoaXMucHJpbmNpcGFsLmdldEltYWdlVXJsKCkgOiBudWxsO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9uYXZiYXIuc2Nzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLnNjc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2ZpbGVTZXJ2aWNlIH0gZnJvbSAnLi9wcm9maWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZmlsZUluZm8gfSBmcm9tICcuL3Byb2ZpbGUtaW5mby5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXBhZ2UtcmliYm9uJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJyaWJib25cIiAqbmdJZj1cInJpYmJvbkVudlwiPjxhIGhyZWY9XCJcIiBqaGlUcmFuc2xhdGU9XCJnbG9iYWwucmliYm9uLnt7cmliYm9uRW52fX1cIj57e3JpYmJvbkVudn19PC9hPjwvZGl2PmAsXG4gICAgc3R5bGVVcmxzOiBbXG4gICAgICAgICdwYWdlLXJpYmJvbi5zY3NzJ1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUGFnZVJpYmJvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcm9maWxlSW5mbzogUHJvZmlsZUluZm87XG4gICAgcmliYm9uRW52OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2ZpbGVTZXJ2aWNlOiBQcm9maWxlU2VydmljZSkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnByb2ZpbGVTZXJ2aWNlLmdldFByb2ZpbGVJbmZvKCkuc3Vic2NyaWJlKChwcm9maWxlSW5mbykgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9maWxlSW5mbyA9IHByb2ZpbGVJbmZvO1xuICAgICAgICAgICAgdGhpcy5yaWJib25FbnYgPSBwcm9maWxlSW5mby5yaWJib25FbnY7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9wcm9maWxlcy9wYWdlLXJpYmJvbi5jb21wb25lbnQudHMiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcGFnZS1yaWJib24uc2Nzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvcHJvZmlsZXMvcGFnZS1yaWJib24uc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvcHJvZmlsZXMvcGFnZS1yaWJib24uc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgUHJvZmlsZUluZm8ge1xuICAgIGFjdGl2ZVByb2ZpbGVzOiBzdHJpbmdbXTtcbiAgICByaWJib25FbnY6IHN0cmluZztcbiAgICBpblByb2R1Y3Rpb246IGJvb2xlYW47XG4gICAgc3dhZ2dlckVuYWJsZWQ6IGJvb2xlYW47XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvcHJvZmlsZXMvcHJvZmlsZS1pbmZvLm1vZGVsLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuaW1wb3J0IHsgUHJvZmlsZUluZm8gfSBmcm9tICcuL3Byb2ZpbGUtaW5mby5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9maWxlU2VydmljZSB7XG5cbiAgICBwcml2YXRlIHByb2ZpbGVJbmZvVXJsID0gJ2FwaS9wcm9maWxlLWluZm8nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICAgIGdldFByb2ZpbGVJbmZvKCk6IE9ic2VydmFibGU8UHJvZmlsZUluZm8+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5wcm9maWxlSW5mb1VybClcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzLmpzb24oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwaSA9IG5ldyBQcm9maWxlSW5mbygpO1xuICAgICAgICAgICAgICAgIHBpLmFjdGl2ZVByb2ZpbGVzID0gZGF0YS5hY3RpdmVQcm9maWxlcztcbiAgICAgICAgICAgICAgICBwaS5yaWJib25FbnYgPSBkYXRhLnJpYmJvbkVudjtcbiAgICAgICAgICAgICAgICBwaS5pblByb2R1Y3Rpb24gPSBkYXRhLmFjdGl2ZVByb2ZpbGVzLmluZGV4T2YoJ3Byb2QnKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgcGkuc3dhZ2dlckVuYWJsZWQgPSBkYXRhLmFjdGl2ZVByb2ZpbGVzLmluZGV4T2YoJ3N3YWdnZXInKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3Byb2ZpbGVzL3Byb2ZpbGUuc2VydmljZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBKaGlFdmVudE1hbmFnZXIsIEpoaUFsZXJ0U2VydmljZSB9IGZyb20gJ25nLWpoaXBzdGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvUngnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1hbGVydC1lcnJvcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0c1wiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgYWxlcnQgb2YgYWxlcnRzXCIgIFtuZ0NsYXNzXT1cIntcXCdhbGVydC5wb3NpdGlvblxcJzogdHJ1ZSwgXFwndG9hc3RcXCc6IGFsZXJ0LnRvYXN0fVwiPlxuICAgICAgICAgICAgICAgIDxuZ2ItYWxlcnQgKm5nSWY9XCJhbGVydCAmJiBhbGVydC50eXBlICYmIGFsZXJ0Lm1zZ1wiIFt0eXBlXT1cImFsZXJ0LnR5cGVcIiAoY2xvc2UpPVwiYWxlcnQuY2xvc2UoYWxlcnRzKVwiPlxuICAgICAgICAgICAgICAgICAgICA8cHJlIFtpbm5lckhUTUxdPVwiYWxlcnQubXNnXCI+PC9wcmU+XG4gICAgICAgICAgICAgICAgPC9uZ2ItYWxlcnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBKaGlBbGVydEVycm9yQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICAgIGFsZXJ0czogYW55W107XG4gICAgY2xlYW5IdHRwRXJyb3JMaXN0ZW5lcjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGVydFNlcnZpY2U6IEpoaUFsZXJ0U2VydmljZSwgcHJpdmF0ZSBldmVudE1hbmFnZXI6IEpoaUV2ZW50TWFuYWdlciwgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuYWxlcnRzID0gW107XG5cbiAgICAgICAgdGhpcy5jbGVhbkh0dHBFcnJvckxpc3RlbmVyID0gZXZlbnRNYW5hZ2VyLnN1YnNjcmliZSgnbmVvamhpcHN0ZXJBcHAuaHR0cEVycm9yJywgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICAgIGNvbnN0IGh0dHBSZXNwb25zZSA9IHJlc3BvbnNlLmNvbnRlbnQ7XG4gICAgICAgICAgICBzd2l0Y2ggKGh0dHBSZXNwb25zZS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25uZWN0aW9uIHJlZnVzZWQsIHNlcnZlciBub3QgcmVhY2hhYmxlXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVycm9yQWxlcnQoJ1NlcnZlciBub3QgcmVhY2hhYmxlJywgJ2Vycm9yLnNlcnZlci5ub3QucmVhY2hhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0MDA6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFyciA9IEFycmF5LmZyb20oaHR0cFJlc3BvbnNlLmhlYWRlcnMuX2hlYWRlcnMpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJbaV1bMF0uZW5kc1dpdGgoJ2FwcC1lcnJvcicpIHx8IGFycltpXVswXS5lbmRzV2l0aCgnYXBwLXBhcmFtcycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVycy5wdXNoKGFycltpXVswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVycy5zb3J0KCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlcnJvckhlYWRlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbnRpdHlLZXkgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGVhZGVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckhlYWRlciA9IGh0dHBSZXNwb25zZS5oZWFkZXJzLmdldChoZWFkZXJzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUtleSA9IGh0dHBSZXNwb25zZS5oZWFkZXJzLmdldChoZWFkZXJzWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JIZWFkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVudGl0eU5hbWUgPSB0cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ2dsb2JhbC5tZW51LmVudGl0aWVzLicgKyBlbnRpdHlLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFcnJvckFsZXJ0KGVycm9ySGVhZGVyLCBlcnJvckhlYWRlciwgeyBlbnRpdHlOYW1lIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGh0dHBSZXNwb25zZS50ZXh0KCkgIT09ICcnICYmIGh0dHBSZXNwb25zZS5qc29uKCkgJiYgaHR0cFJlc3BvbnNlLmpzb24oKS5maWVsZEVycm9ycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGRFcnJvcnMgPSBodHRwUmVzcG9uc2UuanNvbigpLmZpZWxkRXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGZpZWxkRXJyb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGRFcnJvciA9IGZpZWxkRXJyb3JzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnZlcnQgJ3NvbWV0aGluZ1sxNF0ub3RoZXJbNF0uaWQnIHRvICdzb21ldGhpbmdbXS5vdGhlcltdLmlkJyBzbyB0cmFuc2xhdGlvbnMgY2FuIGJlIHdyaXR0ZW4gdG8gaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb252ZXJ0ZWRGaWVsZCA9IGZpZWxkRXJyb3IuZmllbGQucmVwbGFjZSgvXFxbXFxkKlxcXS9nLCAnW10nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSB0cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ25lb2poaXBzdGVyQXBwLicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZEVycm9yLm9iamVjdE5hbWUgKyAnLicgKyBjb252ZXJ0ZWRGaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFcnJvckFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRXJyb3Igb24gZmllbGQgXCInICsgZmllbGROYW1lICsgJ1wiJywgJ2Vycm9yLicgKyBmaWVsZEVycm9yLm1lc3NhZ2UsIHsgZmllbGROYW1lIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGh0dHBSZXNwb25zZS50ZXh0KCkgIT09ICcnICYmIGh0dHBSZXNwb25zZS5qc29uKCkgJiYgaHR0cFJlc3BvbnNlLmpzb24oKS5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVycm9yQWxlcnQoaHR0cFJlc3BvbnNlLmpzb24oKS5tZXNzYWdlLCBodHRwUmVzcG9uc2UuanNvbigpLm1lc3NhZ2UsIGh0dHBSZXNwb25zZS5qc29uKCkucGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyb3JBbGVydChodHRwUmVzcG9uc2UudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDA0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVycm9yQWxlcnQoJ05vdCBmb3VuZCcsICdlcnJvci51cmwubm90LmZvdW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGh0dHBSZXNwb25zZS50ZXh0KCkgIT09ICcnICYmIGh0dHBSZXNwb25zZS5qc29uKCkgJiYgaHR0cFJlc3BvbnNlLmpzb24oKS5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVycm9yQWxlcnQoaHR0cFJlc3BvbnNlLmpzb24oKS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyb3JBbGVydChodHRwUmVzcG9uc2UudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xlYW5IdHRwRXJyb3JMaXN0ZW5lciAhPT0gdW5kZWZpbmVkICYmIHRoaXMuY2xlYW5IdHRwRXJyb3JMaXN0ZW5lciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuZGVzdHJveSh0aGlzLmNsZWFuSHR0cEVycm9yTGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5hbGVydHMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEVycm9yQWxlcnQobWVzc2FnZSwga2V5PywgZGF0YT8pIHtcbiAgICAgICAga2V5ID0gKGtleSAmJiBrZXkgIT09IG51bGwpID8ga2V5IDogbWVzc2FnZTtcbiAgICAgICAgdGhpcy5hbGVydHMucHVzaChcbiAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmFkZEFsZXJ0KFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RhbmdlcicsXG4gICAgICAgICAgICAgICAgICAgIG1zZzoga2V5LFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDUwMDAsXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0OiB0aGlzLmFsZXJ0U2VydmljZS5pc1RvYXN0KCksXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydHNcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hbGVydC9hbGVydC1lcnJvci5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBKaGlBbGVydFNlcnZpY2UgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWFsZXJ0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnRzXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBhbGVydCBvZiBhbGVydHNcIiBbbmdDbGFzc109XCJ7XFwnYWxlcnQucG9zaXRpb25cXCc6IHRydWUsIFxcJ3RvYXN0XFwnOiBhbGVydC50b2FzdH1cIj5cbiAgICAgICAgICAgICAgICA8bmdiLWFsZXJ0ICpuZ0lmPVwiYWxlcnQgJiYgYWxlcnQudHlwZSAmJiBhbGVydC5tc2dcIiBbdHlwZV09XCJhbGVydC50eXBlXCIgKGNsb3NlKT1cImFsZXJ0LmNsb3NlKGFsZXJ0cylcIj5cbiAgICAgICAgICAgICAgICAgICAgPHByZSBbaW5uZXJIVE1MXT1cImFsZXJ0Lm1zZ1wiPjwvcHJlPlxuICAgICAgICAgICAgICAgIDwvbmdiLWFsZXJ0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgSmhpQWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgYWxlcnRzOiBhbnlbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBKaGlBbGVydFNlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYWxlcnRzID0gdGhpcy5hbGVydFNlcnZpY2UuZ2V0KCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYWxlcnRzID0gW107XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hbGVydC9hbGVydC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWNjb3VudFNlcnZpY2UgIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG4gICAgZ2V0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdhcGkvYWNjb3VudCcpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG4gICAgc2F2ZShhY2NvdW50OiBhbnkpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnYXBpL2FjY291bnQnLCBhY2NvdW50KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL2FjY291bnQuc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzLCBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UsIFNlc3Npb25TdG9yYWdlU2VydmljZSB9IGZyb20gJ25nMi13ZWJzdG9yYWdlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2ZXJQcm92aWRlciB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cCxcbiAgICAgICAgcHJpdmF0ZSAkbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlICRzZXNzaW9uU3RvcmFnZTogU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlXG4gICAgKSB7fVxuXG4gICAgZ2V0VG9rZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRsb2NhbFN0b3JhZ2UucmV0cmlldmUoJ2F1dGhlbnRpY2F0aW9uVG9rZW4nKSB8fCB0aGlzLiRzZXNzaW9uU3RvcmFnZS5yZXRyaWV2ZSgnYXV0aGVudGljYXRpb25Ub2tlbicpO1xuICAgIH1cblxuICAgIGxvZ2luKGNyZWRlbnRpYWxzKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6IGNyZWRlbnRpYWxzLnVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxuICAgICAgICAgICAgcmVtZW1iZXJNZTogY3JlZGVudGlhbHMucmVtZW1iZXJNZVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2FwaS9hdXRoZW50aWNhdGUnLCBkYXRhKS5tYXAoYXV0aGVudGljYXRlU3VjY2Vzcy5iaW5kKHRoaXMpKTtcblxuICAgICAgICBmdW5jdGlvbiBhdXRoZW50aWNhdGVTdWNjZXNzKHJlc3ApIHtcbiAgICAgICAgICAgIGNvbnN0IGJlYXJlclRva2VuID0gcmVzcC5oZWFkZXJzLmdldCgnQXV0aG9yaXphdGlvbicpO1xuICAgICAgICAgICAgaWYgKGJlYXJlclRva2VuICYmIGJlYXJlclRva2VuLnNsaWNlKDAsIDcpID09PSAnQmVhcmVyICcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBqd3QgPSBiZWFyZXJUb2tlbi5zbGljZSg3LCBiZWFyZXJUb2tlbi5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVBdXRoZW50aWNhdGlvblRva2VuKGp3dCwgY3JlZGVudGlhbHMucmVtZW1iZXJNZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGp3dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvZ2luV2l0aFRva2VuKGp3dCwgcmVtZW1iZXJNZSkge1xuICAgICAgICBpZiAoand0KSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlQXV0aGVudGljYXRpb25Ub2tlbihqd3QsIHJlbWVtYmVyTWUpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShqd3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdhdXRoLWp3dC1zZXJ2aWNlIFByb21pc2UgcmVqZWN0Jyk7IC8vIFB1dCBhcHByb3ByaWF0ZSBlcnJvciBtZXNzYWdlIGhlcmVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0b3JlQXV0aGVudGljYXRpb25Ub2tlbihqd3QsIHJlbWVtYmVyTWUpIHtcbiAgICAgICAgaWYgKHJlbWVtYmVyTWUpIHtcbiAgICAgICAgICAgIHRoaXMuJGxvY2FsU3RvcmFnZS5zdG9yZSgnYXV0aGVudGljYXRpb25Ub2tlbicsIGp3dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRzZXNzaW9uU3RvcmFnZS5zdG9yZSgnYXV0aGVudGljYXRpb25Ub2tlbicsIGp3dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2dvdXQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy4kbG9jYWxTdG9yYWdlLmNsZWFyKCdhdXRoZW50aWNhdGlvblRva2VuJyk7XG4gICAgICAgICAgICB0aGlzLiRzZXNzaW9uU3RvcmFnZS5jbGVhcignYXV0aGVudGljYXRpb25Ub2tlbicpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYXV0aC9hdXRoLWp3dC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ1NSRlNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb29raWVTZXJ2aWNlOiBDb29raWVTZXJ2aWNlKSB7fVxuXG4gICAgZ2V0Q1NSRihuYW1lPzogc3RyaW5nKSB7XG4gICAgICAgIG5hbWUgPSBgJHtuYW1lID8gbmFtZSA6ICdYU1JGLVRPS0VOJ31gO1xuICAgICAgICByZXR1cm4gdGhpcy5jb29raWVTZXJ2aWNlLmdldChuYW1lKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL2NzcmYuc2VydmljZS50cyIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcmluY2lwYWwgfSBmcm9tICcuL3ByaW5jaXBhbC5zZXJ2aWNlJztcblxuLyoqXG4gKiBAd2hhdEl0RG9lcyBDb25kaXRpb25hbGx5IGluY2x1ZGVzIGFuIEhUTUwgZWxlbWVudCBpZiBjdXJyZW50IHVzZXIgaGFzIGFueVxuICogb2YgdGhlIGF1dGhvcml0aWVzIHBhc3NlZCBhcyB0aGUgYGV4cHJlc3Npb25gLlxuICpcbiAqIEBob3dUb1VzZVxuICogYGBgXG4gKiAgICAgPHNvbWUtZWxlbWVudCAqamhpSGFzQW55QXV0aG9yaXR5PVwiJ1JPTEVfQURNSU4nXCI+Li4uPC9zb21lLWVsZW1lbnQ+XG4gKlxuICogICAgIDxzb21lLWVsZW1lbnQgKmpoaUhhc0FueUF1dGhvcml0eT1cIlsnUk9MRV9BRE1JTicsICdST0xFX1VTRVInXVwiPi4uLjwvc29tZS1lbGVtZW50PlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2poaUhhc0FueUF1dGhvcml0eV0nXG59KVxuZXhwb3J0IGNsYXNzIEhhc0FueUF1dGhvcml0eURpcmVjdGl2ZSB7XG5cbiAgICBwcml2YXRlIGF1dGhvcml0aWVzOiBzdHJpbmdbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJpbmNpcGFsOiBQcmluY2lwYWwsIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGpoaUhhc0FueUF1dGhvcml0eSh2YWx1ZTogc3RyaW5nfHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuYXV0aG9yaXRpZXMgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gWyA8c3RyaW5nPiB2YWx1ZSBdIDogPHN0cmluZ1tdPiB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgICAgIC8vIEdldCBub3RpZmllZCBlYWNoIHRpbWUgYXV0aGVudGljYXRpb24gc3RhdGUgY2hhbmdlcy5cbiAgICAgICAgdGhpcy5wcmluY2lwYWwuZ2V0QXV0aGVudGljYXRpb25TdGF0ZSgpLnN1YnNjcmliZSgoaWRlbnRpdHkpID0+IHRoaXMudXBkYXRlVmlldygpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVZpZXcoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucHJpbmNpcGFsLmhhc0FueUF1dGhvcml0eSh0aGlzLmF1dGhvcml0aWVzKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvaGFzLWFueS1hdXRob3JpdHkuZGlyZWN0aXZlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0JztcbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSAnLi9hY2NvdW50LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJpbmNpcGFsIHtcbiAgICBwcml2YXRlIHVzZXJJZGVudGl0eTogYW55O1xuICAgIHByaXZhdGUgYXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25TdGF0ZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGFjY291bnQ6IEFjY291bnRTZXJ2aWNlXG4gICAgKSB7fVxuXG4gICAgYXV0aGVudGljYXRlKGlkZW50aXR5KSB7XG4gICAgICAgIHRoaXMudXNlcklkZW50aXR5ID0gaWRlbnRpdHk7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGlkZW50aXR5ICE9PSBudWxsO1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU3RhdGUubmV4dCh0aGlzLnVzZXJJZGVudGl0eSk7XG4gICAgfVxuXG4gICAgaGFzQW55QXV0aG9yaXR5KGF1dGhvcml0aWVzOiBzdHJpbmdbXSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuaGFzQW55QXV0aG9yaXR5RGlyZWN0KGF1dGhvcml0aWVzKSk7XG4gICAgfVxuXG4gICAgaGFzQW55QXV0aG9yaXR5RGlyZWN0KGF1dGhvcml0aWVzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRoaXMuYXV0aGVudGljYXRlZCB8fCAhdGhpcy51c2VySWRlbnRpdHkgfHwgIXRoaXMudXNlcklkZW50aXR5LmF1dGhvcml0aWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF1dGhvcml0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy51c2VySWRlbnRpdHkuYXV0aG9yaXRpZXMuaW5kZXhPZihhdXRob3JpdGllc1tpXSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaGFzQXV0aG9yaXR5KGF1dGhvcml0eTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIGlmICghdGhpcy5hdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaWRlbnRpdHkoKS50aGVuKChpZCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShpZC5hdXRob3JpdGllcyAmJiBpZC5hdXRob3JpdGllcy5pbmRleE9mKGF1dGhvcml0eSkgIT09IC0xKTtcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aXR5KGZvcmNlPzogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGlmIChmb3JjZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy51c2VySWRlbnRpdHkgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBhbmQgc2VlIGlmIHdlIGhhdmUgcmV0cmlldmVkIHRoZSB1c2VySWRlbnRpdHkgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAgICAgIC8vIGlmIHdlIGhhdmUsIHJldXNlIGl0IGJ5IGltbWVkaWF0ZWx5IHJlc29sdmluZ1xuICAgICAgICBpZiAodGhpcy51c2VySWRlbnRpdHkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy51c2VySWRlbnRpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmV0cmlldmUgdGhlIHVzZXJJZGVudGl0eSBkYXRhIGZyb20gdGhlIHNlcnZlciwgdXBkYXRlIHRoZSBpZGVudGl0eSBvYmplY3QsIGFuZCB0aGVuIHJlc29sdmUuXG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnQuZ2V0KCkudG9Qcm9taXNlKCkudGhlbigoYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGFjY291bnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJZGVudGl0eSA9IGFjY291bnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VySWRlbnRpdHkgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblN0YXRlLm5leHQodGhpcy51c2VySWRlbnRpdHkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlcklkZW50aXR5O1xuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXJJZGVudGl0eSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TdGF0ZS5uZXh0KHRoaXMudXNlcklkZW50aXR5KTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhlbnRpY2F0ZWQ7XG4gICAgfVxuXG4gICAgaXNJZGVudGl0eVJlc29sdmVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VySWRlbnRpdHkgIT09IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBnZXRBdXRoZW50aWNhdGlvblN0YXRlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhlbnRpY2F0aW9uU3RhdGUuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgZ2V0SW1hZ2VVcmwoKTogU3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJZGVudGl0eVJlc29sdmVkKCkgPyB0aGlzLnVzZXJJZGVudGl0eS5pbWFnZVVybCA6IG51bGw7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYXV0aC9wcmluY2lwYWwuc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlc3Npb25TdG9yYWdlU2VydmljZSB9IGZyb20gJ25nMi13ZWJzdG9yYWdlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0YXRlU3RvcmFnZVNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlICRzZXNzaW9uU3RvcmFnZTogU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlXG4gICAgKSB7fVxuXG4gICAgZ2V0UHJldmlvdXNTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHNlc3Npb25TdG9yYWdlLnJldHJpZXZlKCdwcmV2aW91c1N0YXRlJyk7XG4gICAgfVxuXG4gICAgcmVzZXRQcmV2aW91c1N0YXRlKCkge1xuICAgICAgICB0aGlzLiRzZXNzaW9uU3RvcmFnZS5jbGVhcigncHJldmlvdXNTdGF0ZScpO1xuICAgIH1cblxuICAgIHN0b3JlUHJldmlvdXNTdGF0ZShwcmV2aW91c1N0YXRlTmFtZSwgcHJldmlvdXNTdGF0ZVBhcmFtcykge1xuICAgICAgICBjb25zdCBwcmV2aW91c1N0YXRlID0geyAnbmFtZSc6IHByZXZpb3VzU3RhdGVOYW1lLCAncGFyYW1zJzogcHJldmlvdXNTdGF0ZVBhcmFtcyB9O1xuICAgICAgICB0aGlzLiRzZXNzaW9uU3RvcmFnZS5zdG9yZSgncHJldmlvdXNTdGF0ZScsIHByZXZpb3VzU3RhdGUpO1xuICAgIH1cblxuICAgIGdldERlc3RpbmF0aW9uU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzZXNzaW9uU3RvcmFnZS5yZXRyaWV2ZSgnZGVzdGluYXRpb25TdGF0ZScpO1xuICAgIH1cblxuICAgIHN0b3JlVXJsKHVybDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuJHNlc3Npb25TdG9yYWdlLnN0b3JlKCdwcmV2aW91c1VybCcsIHVybCk7XG4gICAgfVxuXG4gICAgZ2V0VXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kc2Vzc2lvblN0b3JhZ2UucmV0cmlldmUoJ3ByZXZpb3VzVXJsJyk7XG4gICAgfVxuXG4gICAgc3RvcmVEZXN0aW5hdGlvblN0YXRlKGRlc3RpbmF0aW9uU3RhdGUsIGRlc3RpbmF0aW9uU3RhdGVQYXJhbXMsIGZyb21TdGF0ZSkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbkluZm8gPSB7XG4gICAgICAgICAgICAnZGVzdGluYXRpb24nOiB7XG4gICAgICAgICAgICAgICAgJ25hbWUnOiBkZXN0aW5hdGlvblN0YXRlLm5hbWUsXG4gICAgICAgICAgICAgICAgJ2RhdGEnOiBkZXN0aW5hdGlvblN0YXRlLmRhdGEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3BhcmFtcyc6IGRlc3RpbmF0aW9uU3RhdGVQYXJhbXMsXG4gICAgICAgICAgICAnZnJvbSc6IHtcbiAgICAgICAgICAgICAgICAnbmFtZSc6IGZyb21TdGF0ZS5uYW1lLFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLiRzZXNzaW9uU3RvcmFnZS5zdG9yZSgnZGVzdGluYXRpb25TdGF0ZScsIGRlc3RpbmF0aW9uSW5mbyk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYXV0aC9zdGF0ZS1zdG9yYWdlLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBDYW5BY3RpdmF0ZSwgUm91dGVyLCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgUHJpbmNpcGFsIH0gZnJvbSAnLi4vJztcbmltcG9ydCB7IExvZ2luTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW4vbG9naW4tbW9kYWwuc2VydmljZSc7XG5pbXBvcnQgeyBTdGF0ZVN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zdGF0ZS1zdG9yYWdlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclJvdXRlQWNjZXNzU2VydmljZSBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBsb2dpbk1vZGFsU2VydmljZTogTG9naW5Nb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwcmluY2lwYWw6IFByaW5jaXBhbCxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHN0YXRlU3RvcmFnZVNlcnZpY2U6IFN0YXRlU3RvcmFnZVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBib29sZWFuIHwgUHJvbWlzZTxib29sZWFuPiB7XG5cbiAgICAgICAgY29uc3QgYXV0aG9yaXRpZXMgPSByb3V0ZS5kYXRhWydhdXRob3JpdGllcyddO1xuICAgICAgICBpZiAoIWF1dGhvcml0aWVzIHx8IGF1dGhvcml0aWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0xvZ2luKGF1dGhvcml0aWVzLCBzdGF0ZS51cmwpO1xuICAgIH1cblxuICAgIGNoZWNrTG9naW4oYXV0aG9yaXRpZXM6IHN0cmluZ1tdLCB1cmw6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICBjb25zdCBwcmluY2lwYWwgPSB0aGlzLnByaW5jaXBhbDtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwcmluY2lwYWwuaWRlbnRpdHkoKS50aGVuKChhY2NvdW50KSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChhY2NvdW50ICYmIHByaW5jaXBhbC5oYXNBbnlBdXRob3JpdHlEaXJlY3QoYXV0aG9yaXRpZXMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGVTdG9yYWdlU2VydmljZS5zdG9yZVVybCh1cmwpO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydhY2Nlc3NkZW5pZWQnXSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gb25seSBzaG93IHRoZSBsb2dpbiBkaWFsb2csIGlmIHRoZSB1c2VyIGhhc24ndCBsb2dnZWQgaW4geWV0XG4gICAgICAgICAgICAgICAgaWYgKCFhY2NvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Nb2RhbFNlcnZpY2Uub3BlbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYXV0aC91c2VyLXJvdXRlLWFjY2Vzcy1zZXJ2aWNlLnRzIiwiZXhwb3J0IGNvbnN0IElURU1TX1BFUl9QQUdFID0gMjA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9jb25zdGFudHMvcGFnaW5hdGlvbi5jb25zdGFudHMudHMiLCJleHBvcnQgKiBmcm9tICcuL2NvbnN0YW50cy9wYWdpbmF0aW9uLmNvbnN0YW50cyc7XG5leHBvcnQgKiBmcm9tICcuL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2FsZXJ0L2FsZXJ0LWVycm9yLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2F1dGgvY3NyZi5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYXV0aC9zdGF0ZS1zdG9yYWdlLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRoL2FjY291bnQuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2F1dGgvYXV0aC1qd3Quc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2F1dGgvcHJpbmNpcGFsLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRoL2hhcy1hbnktYXV0aG9yaXR5LmRpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL2F1dGgvdXNlci1yb3V0ZS1hY2Nlc3Mtc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2xhbmd1YWdlL2xhbmd1YWdlLmNvbnN0YW50cyc7XG5leHBvcnQgKiBmcm9tICcuL2xhbmd1YWdlL2xhbmd1YWdlLmhlbHBlcic7XG5leHBvcnQgKiBmcm9tICcuL2xhbmd1YWdlL2ZpbmQtbGFuZ3VhZ2UtZnJvbS1rZXkucGlwZSc7XG5leHBvcnQgKiBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9sb2dpbi9sb2dpbi1tb2RhbC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlci9hY2NvdW50Lm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlci91c2VyLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlci91c2VyLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9tb2RlbC9yZXNwb25zZS13cmFwcGVyLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vbW9kZWwvcmVxdWVzdC11dGlsJztcbmV4cG9ydCAqIGZyb20gJy4vc2hhcmVkLWxpYnMubW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vc2hhcmVkLWNvbW1vbi5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zaGFyZWQubW9kdWxlJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2luZGV4LnRzIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7bmFtZTogJ2ZpbmRMYW5ndWFnZUZyb21LZXknfSlcbmV4cG9ydCBjbGFzcyBGaW5kTGFuZ3VhZ2VGcm9tS2V5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHByaXZhdGUgbGFuZ3VhZ2VzOiBhbnkgPSB7XG4gICAgICAgICdjYSc6ICdDYXRhbMOgJyxcbiAgICAgICAgJ2NzJzogJ8SMZXNrw70nLFxuICAgICAgICAnZGEnOiAnRGFuc2snLFxuICAgICAgICAnZGUnOiAnRGV1dHNjaCcsXG4gICAgICAgICdlbCc6ICfOlc67zrvOt869zrnOus6sJyxcbiAgICAgICAgJ2VuJzogJ0VuZ2xpc2gnLFxuICAgICAgICAnZXMnOiAnRXNwYcOxb2wnLFxuICAgICAgICAnZXQnOiAnRWVzdGknLFxuICAgICAgICAnZnInOiAnRnJhbsOnYWlzJyxcbiAgICAgICAgJ2dsJzogJ0dhbGVnbycsXG4gICAgICAgICdodSc6ICdNYWd5YXInLFxuICAgICAgICAnaGknOiAn4KS54KS/4KSC4KSm4KWAJyxcbiAgICAgICAgJ2h5JzogJ9WA1aHVtdWl1oDVpdW2JyxcbiAgICAgICAgJ2l0JzogJ0l0YWxpYW5vJyxcbiAgICAgICAgJ2phJzogJ+aXpeacrOiqnicsXG4gICAgICAgICdrbyc6ICftlZzqta3slrQnLFxuICAgICAgICAnbXInOiAn4KSu4KSw4KS+4KSg4KWAJyxcbiAgICAgICAgJ25sJzogJ05lZGVybGFuZHMnLFxuICAgICAgICAncGwnOiAnUG9sc2tpJyxcbiAgICAgICAgJ3B0LWJyJzogJ1BvcnR1Z3XDqnMgKEJyYXNpbCknLFxuICAgICAgICAncHQtcHQnOiAnUG9ydHVndcOqcycsXG4gICAgICAgICdybyc6ICdSb23Dom7EgycsXG4gICAgICAgICdydSc6ICfQoNGD0YHRgdC60LjQuScsXG4gICAgICAgICdzayc6ICdTbG92ZW5za8O9JyxcbiAgICAgICAgJ3NyJzogJ1NycHNraScsXG4gICAgICAgICdzdic6ICdTdmVuc2thJyxcbiAgICAgICAgJ3RhJzogJ+CupOCuruCuv+CutOCvjScsXG4gICAgICAgICd0aCc6ICfguYTguJfguKInLFxuICAgICAgICAndHInOiAnVMO8cmvDp2UnLFxuICAgICAgICAndWEnOiAn0KPQutGA0LDRl9C90YHRjNC60LAnLFxuICAgICAgICAndmknOiAnVGnhur9uZyBWaeG7h3QnLFxuICAgICAgICAnemgtY24nOiAn5Lit5paH77yI566A5L2T77yJJyxcbiAgICAgICAgJ3poLXR3JzogJ+e5gemrlOS4reaWhydcbiAgICB9O1xuICAgIHRyYW5zZm9ybShsYW5nOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5sYW5ndWFnZXNbbGFuZ107XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbGFuZ3VhZ2UvZmluZC1sYW5ndWFnZS1mcm9tLWtleS5waXBlLnRzIiwiLypcbiAgICBMYW5ndWFnZXMgY29kZXMgYXJlIElTT182MzktMSBjb2Rlcywgc2VlIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGlzdF9vZl9JU09fNjM5LTFfY29kZXNcbiAgICBUaGV5IGFyZSB3cml0dGVuIGluIEVuZ2xpc2ggdG8gYXZvaWQgY2hhcmFjdGVyIGVuY29kaW5nIGlzc3VlcyAobm90IGEgcGVyZmVjdCBzb2x1dGlvbilcbiovXG5leHBvcnQgY29uc3QgTEFOR1VBR0VTOiBzdHJpbmdbXSA9IFtcbiAgICAnZW4nXG4gICAgLy8gamhpcHN0ZXItbmVlZGxlLWkxOG4tbGFuZ3VhZ2UtY29uc3RhbnQgLSBKSGlwc3RlciB3aWxsIGFkZC9yZW1vdmUgbGFuZ3VhZ2VzIGluIHRoaXMgYXJyYXlcbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9sYW5ndWFnZS9sYW5ndWFnZS5jb25zdGFudHMudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UsIFRyYW5zbGF0aW9uQ2hhbmdlRXZlbnQsIExhbmdDaGFuZ2VFdmVudCB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5pbXBvcnQgeyBMQU5HVUFHRVMgfSBmcm9tICcuL2xhbmd1YWdlLmNvbnN0YW50cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKaGlMYW5ndWFnZUhlbHBlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsIHByaXZhdGUgdGl0bGVTZXJ2aWNlOiBUaXRsZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBnZXRBbGwoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShMQU5HVUFHRVMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgd2luZG93IHRpdGxlIHVzaW5nIHBhcmFtcyBpbiB0aGUgZm9sbG93aW5nXG4gICAgICogb3JkZXI6XG4gICAgICogMS4gdGl0bGVLZXkgcGFyYW1ldGVyXG4gICAgICogMi4gJHN0YXRlLiRjdXJyZW50LmRhdGEucGFnZVRpdGxlIChjdXJyZW50IHN0YXRlIHBhZ2UgdGl0bGUpXG4gICAgICogMy4gJ2dsb2JhbC50aXRsZSdcbiAgICAgKi9cbiAgICB1cGRhdGVUaXRsZSh0aXRsZUtleT86IHN0cmluZykge1xuICAgICAgICBpZiAoIXRpdGxlS2V5KSB7XG4gICAgICAgICAgICAgdGl0bGVLZXkgPSB0aGlzLmdldFBhZ2VUaXRsZSh0aGlzLnJvdXRlci5yb3V0ZXJTdGF0ZS5zbmFwc2hvdC5yb290KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXQodGl0bGVLZXkpLnN1YnNjcmliZSgodGl0bGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGl0bGVTZXJ2aWNlLnNldFRpdGxlKHRpdGxlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0KCkge1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25UcmFuc2xhdGlvbkNoYW5nZS5zdWJzY3JpYmUoKGV2ZW50OiBUcmFuc2xhdGlvbkNoYW5nZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRpdGxlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChldmVudDogTGFuZ0NoYW5nZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRpdGxlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UGFnZVRpdGxlKHJvdXRlU25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpIHtcbiAgICAgICAgbGV0IHRpdGxlOiBzdHJpbmcgPSAocm91dGVTbmFwc2hvdC5kYXRhICYmIHJvdXRlU25hcHNob3QuZGF0YVsncGFnZVRpdGxlJ10pID8gcm91dGVTbmFwc2hvdC5kYXRhWydwYWdlVGl0bGUnXSA6ICduZW9qaGlwc3RlckFwcCc7XG4gICAgICAgIGlmIChyb3V0ZVNuYXBzaG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHRpdGxlID0gdGhpcy5nZXRQYWdlVGl0bGUocm91dGVTbmFwc2hvdC5maXJzdENoaWxkKSB8fCB0aXRsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbGFuZ3VhZ2UvbGFuZ3VhZ2UuaGVscGVyLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiTW9kYWwsIE5nYk1vZGFsUmVmIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBKaGlMb2dpbk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9naW5Nb2RhbFNlcnZpY2Uge1xuICAgIHByaXZhdGUgaXNPcGVuID0gZmFsc2U7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCxcbiAgICApIHt9XG5cbiAgICBvcGVuKCk6IE5nYk1vZGFsUmVmIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgICAgICBjb25zdCBtb2RhbFJlZiA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oSmhpTG9naW5Nb2RhbENvbXBvbmVudCwge1xuICAgICAgICAgICAgY29udGFpbmVyOiAnbmF2J1xuICAgICAgICB9KTtcbiAgICAgICAgbW9kYWxSZWYucmVzdWx0LnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgfSwgKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtb2RhbFJlZjtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9sb2dpbi9sb2dpbi1tb2RhbC5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+IDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibG9naW4udGl0bGVcXFwiPlNpZ24gaW48L2g0PiA8YnV0dG9uIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwiYWN0aXZlTW9kYWwuZGlzbWlzcygnY2xvc2VkJylcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj54PC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOCBvZmZzZXQtbWQtMlxcXCI+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcImF1dGhlbnRpY2F0aW9uRXJyb3JcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibG9naW4ubWVzc2FnZXMuZXJyb3IuYXV0aGVudGljYXRpb25cXFwiPiA8c3Ryb25nPkZhaWxlZCB0byBzaWduIGluITwvc3Ryb25nPiBQbGVhc2UgY2hlY2sgeW91ciBjcmVkZW50aWFscyBhbmQgdHJ5IGFnYWluLiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC04IG9mZnNldC1tZC0yXFxcIj4gPGZvcm0gY2xhc3M9XFxcImZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcImxvZ2luKClcXFwiPiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGZvcj1cXFwidXNlcm5hbWVcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLmZvcm0udXNlcm5hbWVcXFwiPkxvZ2luPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInVzZXJuYW1lXFxcIiBpZD1cXFwidXNlcm5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7eydnbG9iYWwuZm9ybS51c2VybmFtZS5wbGFjZWhvbGRlcicgfCB0cmFuc2xhdGV9fVxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXJuYW1lXFxcIj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJsb2dpbi5mb3JtLnBhc3N3b3JkXFxcIj5QYXNzd29yZDwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiIGlkPVxcXCJwYXNzd29yZFxcXCIgcGxhY2Vob2xkZXI9XFxcInt7J2xvZ2luLmZvcm0ucGFzc3dvcmQucGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlfX1cXFwiIFsobmdNb2RlbCldPVxcXCJwYXNzd29yZFxcXCI+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWNoZWNrXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcInJlbWVtYmVyTWVcXFwiPiA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBuYW1lPVxcXCJyZW1lbWJlck1lXFxcIiBpZD1cXFwicmVtZW1iZXJNZVxcXCIgWyhuZ01vZGVsKV09XFxcInJlbWVtYmVyTWVcXFwiIGNoZWNrZWQ9XFxcImNoZWNrZWRcXFwiPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImxvZ2luLmZvcm0ucmVtZW1iZXJtZVxcXCI+UmVtZW1iZXIgbWU8L3NwYW4+IDwvbGFiZWw+IDwvZGl2PiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgamhpVHJhbnNsYXRlPVxcXCJsb2dpbi5mb3JtLmJ1dHRvblxcXCI+U2lnbiBpbjwvYnV0dG9uPiA8L2Zvcm0+IDxwPjwvcD4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtd2FybmluZ1xcXCI+IDxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiAoY2xpY2spPVxcXCJyZXF1ZXN0UmVzZXRQYXNzd29yZCgpXFxcIiBqaGlUcmFuc2xhdGU9XFxcImxvZ2luLnBhc3N3b3JkLmZvcmdvdFxcXCI+RGlkIHlvdSBmb3JnZXQgeW91ciBwYXNzd29yZD88L2E+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC13YXJuaW5nXFxcIj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMuaW5mby5yZWdpc3Rlci5ub2FjY291bnRcXFwiPllvdSBkb24ndCBoYXZlIGFuIGFjY291bnQgeWV0Pzwvc3Bhbj4gPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIChjbGljayk9XFxcInJlZ2lzdGVyKClcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLmluZm8ucmVnaXN0ZXIubGlua1xcXCI+UmVnaXN0ZXIgYSBuZXcgYWNjb3VudDwvYT4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBSZW5kZXJlciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSmhpRXZlbnRNYW5hZ2VyIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuL2xvZ2luLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RhdGVTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uL2F1dGgvc3RhdGUtc3RvcmFnZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktbG9naW4tbW9kYWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSmhpTG9naW5Nb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAgIGF1dGhlbnRpY2F0aW9uRXJyb3I6IGJvb2xlYW47XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgICByZW1lbWJlck1lOiBib29sZWFuO1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgY3JlZGVudGlhbHM6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogSmhpRXZlbnRNYW5hZ2VyLFxuICAgICAgICBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHN0YXRlU3RvcmFnZVNlcnZpY2U6IFN0YXRlU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHB1YmxpYyBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWxcbiAgICApIHtcbiAgICAgICAgdGhpcy5jcmVkZW50aWFscyA9IHt9O1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VybmFtZScpLCAnZm9jdXMnLCBbXSk7XG4gICAgfVxuXG4gICAgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLmNyZWRlbnRpYWxzID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6IG51bGwsXG4gICAgICAgICAgICBwYXNzd29yZDogbnVsbCxcbiAgICAgICAgICAgIHJlbWVtYmVyTWU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbkVycm9yID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygnY2FuY2VsJyk7XG4gICAgfVxuXG4gICAgbG9naW4oKSB7XG4gICAgICAgIHRoaXMubG9naW5TZXJ2aWNlLmxvZ2luKHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgICAgICByZW1lbWJlck1lOiB0aGlzLnJlbWVtYmVyTWVcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygnbG9naW4gc3VjY2VzcycpO1xuICAgICAgICAgICAgaWYgKHRoaXMucm91dGVyLnVybCA9PT0gJy9yZWdpc3RlcicgfHwgKC9hY3RpdmF0ZS8udGVzdCh0aGlzLnJvdXRlci51cmwpKSB8fFxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLnVybCA9PT0gJy9maW5pc2hSZXNldCcgfHwgdGhpcy5yb3V0ZXIudXJsID09PSAnL3JlcXVlc3RSZXNldCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJyddKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuYnJvYWRjYXN0KHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnYXV0aGVudGljYXRpb25TdWNjZXNzJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnU2VuZGluZyBBdXRoZW50aWNhdGlvbiBTdWNjZXNzJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIC8vIHByZXZpb3VzU3RhdGUgd2FzIHNldCBpbiB0aGUgYXV0aEV4cGlyZWRJbnRlcmNlcHRvciBiZWZvcmUgYmVpbmcgcmVkaXJlY3RlZCB0byBsb2dpbiBtb2RhbC5cbiAgICAgICAgICAgIC8vIC8vIHNpbmNlIGxvZ2luIGlzIHN1Y2Nlc2Z1bCwgZ28gdG8gc3RvcmVkIHByZXZpb3VzU3RhdGUgYW5kIGNsZWFyIHByZXZpb3VzU3RhdGVcbiAgICAgICAgICAgIGNvbnN0IHJlZGlyZWN0ID0gdGhpcy5zdGF0ZVN0b3JhZ2VTZXJ2aWNlLmdldFVybCgpO1xuICAgICAgICAgICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3JlZGlyZWN0XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25FcnJvciA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZU1vZGFsLmRpc21pc3MoJ3RvIHN0YXRlIHJlZ2lzdGVyJyk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3JlZ2lzdGVyJ10pO1xuICAgIH1cblxuICAgIHJlcXVlc3RSZXNldFBhc3N3b3JkKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZU1vZGFsLmRpc21pc3MoJ3RvIHN0YXRlIHJlcXVlc3RSZXNldCcpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9yZXNldCcsICdyZXF1ZXN0J10pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEpoaUxhbmd1YWdlU2VydmljZSB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgUHJpbmNpcGFsIH0gZnJvbSAnLi4vYXV0aC9wcmluY2lwYWwuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmVyUHJvdmlkZXIgfSBmcm9tICcuLi9hdXRoL2F1dGgtand0LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGxhbmd1YWdlU2VydmljZTogSmhpTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHByaW5jaXBhbDogUHJpbmNpcGFsLFxuICAgICAgICBwcml2YXRlIGF1dGhTZXJ2ZXJQcm92aWRlcjogQXV0aFNlcnZlclByb3ZpZGVyXG4gICAgKSB7fVxuXG4gICAgbG9naW4oY3JlZGVudGlhbHMsIGNhbGxiYWNrPykge1xuICAgICAgICBjb25zdCBjYiA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZlclByb3ZpZGVyLmxvZ2luKGNyZWRlbnRpYWxzKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW5jaXBhbC5pZGVudGl0eSh0cnVlKS50aGVuKChhY2NvdW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFmdGVyIHRoZSBsb2dpbiB0aGUgbGFuZ3VhZ2Ugd2lsbCBiZSBjaGFuZ2VkIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBsYW5ndWFnZSBzZWxlY3RlZCBieSB0aGUgdXNlciBkdXJpbmcgaGlzIHJlZ2lzdHJhdGlvblxuICAgICAgICAgICAgICAgICAgICBpZiAoYWNjb3VudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZVNlcnZpY2UuY2hhbmdlTGFuZ3VhZ2UoYWNjb3VudC5sYW5nS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYigpO1xuICAgICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nb3V0KCk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNiKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9naW5XaXRoVG9rZW4oand0LCByZW1lbWJlck1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2ZXJQcm92aWRlci5sb2dpbldpdGhUb2tlbihqd3QsIHJlbWVtYmVyTWUpO1xuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmVyUHJvdmlkZXIubG9nb3V0KCkuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMucHJpbmNpcGFsLmF1dGhlbnRpY2F0ZShudWxsKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9sb2dpbi9sb2dpbi5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgVVJMU2VhcmNoUGFyYW1zLCBCYXNlUmVxdWVzdE9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlcXVlc3RPcHRpb24gPSAocmVxPzogYW55KTogQmFzZVJlcXVlc3RPcHRpb25zID0+IHtcbiAgICBjb25zdCBvcHRpb25zOiBCYXNlUmVxdWVzdE9wdGlvbnMgPSBuZXcgQmFzZVJlcXVlc3RPcHRpb25zKCk7XG4gICAgaWYgKHJlcSkge1xuICAgICAgICBjb25zdCBwYXJhbXM6IFVSTFNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgcGFyYW1zLnNldCgncGFnZScsIHJlcS5wYWdlKTtcbiAgICAgICAgcGFyYW1zLnNldCgnc2l6ZScsIHJlcS5zaXplKTtcbiAgICAgICAgaWYgKHJlcS5zb3J0KSB7XG4gICAgICAgICAgICBwYXJhbXMucGFyYW1zTWFwLnNldCgnc29ydCcsIHJlcS5zb3J0KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJhbXMuc2V0KCdxdWVyeScsIHJlcS5xdWVyeSk7XG5cbiAgICAgICAgb3B0aW9ucy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL21vZGVsL3JlcXVlc3QtdXRpbC50cyIsImltcG9ydCB7IEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuZXhwb3J0IGNsYXNzIFJlc3BvbnNlV3JhcHBlciB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBoZWFkZXJzOiBIZWFkZXJzLFxuICAgICAgICBwdWJsaWMganNvbjogYW55LFxuICAgICAgICBwdWJsaWMgc3RhdHVzOiBudW1iZXJcbiAgICApIHsgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbW9kZWwvcmVzcG9uc2Utd3JhcHBlci5tb2RlbC50cyIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQge1xuICAgIE5lb2poaXBzdGVyU2hhcmVkTGlic01vZHVsZSxcbiAgICBKaGlMYW5ndWFnZUhlbHBlcixcbiAgICBGaW5kTGFuZ3VhZ2VGcm9tS2V5UGlwZSxcbiAgICBKaGlBbGVydENvbXBvbmVudCxcbiAgICBKaGlBbGVydEVycm9yQ29tcG9uZW50XG59IGZyb20gJy4vJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5lb2poaXBzdGVyU2hhcmVkTGlic01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEZpbmRMYW5ndWFnZUZyb21LZXlQaXBlLFxuICAgICAgICBKaGlBbGVydENvbXBvbmVudCxcbiAgICAgICAgSmhpQWxlcnRFcnJvckNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEpoaUxhbmd1YWdlSGVscGVyLFxuICAgICAgICBUaXRsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBOZW9qaGlwc3RlclNoYXJlZExpYnNNb2R1bGUsXG4gICAgICAgIEZpbmRMYW5ndWFnZUZyb21LZXlQaXBlLFxuICAgICAgICBKaGlBbGVydENvbXBvbmVudCxcbiAgICAgICAgSmhpQWxlcnRFcnJvckNvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmVvamhpcHN0ZXJTaGFyZWRDb21tb25Nb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3NoYXJlZC1jb21tb24ubW9kdWxlLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IE5nSmhpcHN0ZXJNb2R1bGUgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5pbXBvcnQgeyBJbmZpbml0ZVNjcm9sbE1vZHVsZSB9IGZyb20gJ25neC1pbmZpbml0ZS1zY3JvbGwnO1xuaW1wb3J0IHsgQ29va2llTW9kdWxlIH0gZnJvbSAnbmd4LWNvb2tpZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOZ2JNb2R1bGUuZm9yUm9vdCgpLFxuICAgICAgICBOZ0poaXBzdGVyTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgICAgICAgLy8gc2V0IGJlbG93IHRvIHRydWUgdG8gbWFrZSBhbGVydHMgbG9vayBsaWtlIHRvYXN0XG4gICAgICAgICAgICBhbGVydEFzVG9hc3Q6IGZhbHNlLFxuICAgICAgICAgICAgaTE4bkVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBkZWZhdWx0STE4bkxhbmc6ICdlbidcbiAgICAgICAgfSksXG4gICAgICAgIEluZmluaXRlU2Nyb2xsTW9kdWxlLFxuICAgICAgICBDb29raWVNb2R1bGUuZm9yUm9vdCgpXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBIdHRwTW9kdWxlLFxuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIE5nYk1vZHVsZSxcbiAgICAgICAgTmdKaGlwc3Rlck1vZHVsZSxcbiAgICAgICAgSW5maW5pdGVTY3JvbGxNb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE5lb2poaXBzdGVyU2hhcmVkTGlic01vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvc2hhcmVkLWxpYnMubW9kdWxlLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHtcbiAgICBOZW9qaGlwc3RlclNoYXJlZExpYnNNb2R1bGUsXG4gICAgTmVvamhpcHN0ZXJTaGFyZWRDb21tb25Nb2R1bGUsXG4gICAgQ1NSRlNlcnZpY2UsXG4gICAgQXV0aFNlcnZlclByb3ZpZGVyLFxuICAgIEFjY291bnRTZXJ2aWNlLFxuICAgIFVzZXJTZXJ2aWNlLFxuICAgIFN0YXRlU3RvcmFnZVNlcnZpY2UsXG4gICAgTG9naW5TZXJ2aWNlLFxuICAgIExvZ2luTW9kYWxTZXJ2aWNlLFxuICAgIFByaW5jaXBhbCxcbiAgICBIYXNBbnlBdXRob3JpdHlEaXJlY3RpdmUsXG4gICAgSmhpTG9naW5Nb2RhbENvbXBvbmVudFxufSBmcm9tICcuLyc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOZW9qaGlwc3RlclNoYXJlZExpYnNNb2R1bGUsXG4gICAgICAgIE5lb2poaXBzdGVyU2hhcmVkQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSmhpTG9naW5Nb2RhbENvbXBvbmVudCxcbiAgICAgICAgSGFzQW55QXV0aG9yaXR5RGlyZWN0aXZlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgTG9naW5TZXJ2aWNlLFxuICAgICAgICBMb2dpbk1vZGFsU2VydmljZSxcbiAgICAgICAgQWNjb3VudFNlcnZpY2UsXG4gICAgICAgIFN0YXRlU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgIFByaW5jaXBhbCxcbiAgICAgICAgQ1NSRlNlcnZpY2UsXG4gICAgICAgIEF1dGhTZXJ2ZXJQcm92aWRlcixcbiAgICAgICAgVXNlclNlcnZpY2UsXG4gICAgICAgIERhdGVQaXBlXG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtKaGlMb2dpbk1vZGFsQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIE5lb2poaXBzdGVyU2hhcmVkQ29tbW9uTW9kdWxlLFxuICAgICAgICBKaGlMb2dpbk1vZGFsQ29tcG9uZW50LFxuICAgICAgICBIYXNBbnlBdXRob3JpdHlEaXJlY3RpdmUsXG4gICAgICAgIERhdGVQaXBlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cblxufSlcbmV4cG9ydCBjbGFzcyBOZW9qaGlwc3RlclNoYXJlZE1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyIsImV4cG9ydCBjbGFzcyBBY2NvdW50IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGFjdGl2YXRlZDogYm9vbGVhbixcbiAgICAgICAgcHVibGljIGF1dGhvcml0aWVzOiBzdHJpbmdbXSxcbiAgICAgICAgcHVibGljIGVtYWlsOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBmaXJzdE5hbWU6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGxhbmdLZXk6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGxhc3ROYW1lOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBsb2dpbjogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgaW1hZ2VVcmw6IHN0cmluZ1xuICAgICkgeyB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC91c2VyL2FjY291bnQubW9kZWwudHMiLCJleHBvcnQgY2xhc3MgVXNlciB7XG4gICAgcHVibGljIGlkPzogYW55O1xuICAgIHB1YmxpYyBsb2dpbj86IHN0cmluZztcbiAgICBwdWJsaWMgZmlyc3ROYW1lPzogc3RyaW5nO1xuICAgIHB1YmxpYyBsYXN0TmFtZT86IHN0cmluZztcbiAgICBwdWJsaWMgZW1haWw/OiBzdHJpbmc7XG4gICAgcHVibGljIGFjdGl2YXRlZD86IEJvb2xlYW47XG4gICAgcHVibGljIGxhbmdLZXk/OiBzdHJpbmc7XG4gICAgcHVibGljIGF1dGhvcml0aWVzPzogYW55W107XG4gICAgcHVibGljIGNyZWF0ZWRCeT86IHN0cmluZztcbiAgICBwdWJsaWMgY3JlYXRlZERhdGU/OiBEYXRlO1xuICAgIHB1YmxpYyBsYXN0TW9kaWZpZWRCeT86IHN0cmluZztcbiAgICBwdWJsaWMgbGFzdE1vZGlmaWVkRGF0ZT86IERhdGU7XG4gICAgcHVibGljIHBhc3N3b3JkPzogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGlkPzogYW55LFxuICAgICAgICBsb2dpbj86IHN0cmluZyxcbiAgICAgICAgZmlyc3ROYW1lPzogc3RyaW5nLFxuICAgICAgICBsYXN0TmFtZT86IHN0cmluZyxcbiAgICAgICAgZW1haWw/OiBzdHJpbmcsXG4gICAgICAgIGFjdGl2YXRlZD86IEJvb2xlYW4sXG4gICAgICAgIGxhbmdLZXk/OiBzdHJpbmcsXG4gICAgICAgIGF1dGhvcml0aWVzPzogYW55W10sXG4gICAgICAgIGNyZWF0ZWRCeT86IHN0cmluZyxcbiAgICAgICAgY3JlYXRlZERhdGU/OiBEYXRlLFxuICAgICAgICBsYXN0TW9kaWZpZWRCeT86IHN0cmluZyxcbiAgICAgICAgbGFzdE1vZGlmaWVkRGF0ZT86IERhdGUsXG4gICAgICAgIHBhc3N3b3JkPzogc3RyaW5nXG4gICAgKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZCA/IGlkIDogbnVsbDtcbiAgICAgICAgdGhpcy5sb2dpbiA9IGxvZ2luID8gbG9naW4gOiBudWxsO1xuICAgICAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZSA/IGZpcnN0TmFtZSA6IG51bGw7XG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZSA/IGxhc3ROYW1lIDogbnVsbDtcbiAgICAgICAgdGhpcy5lbWFpbCA9IGVtYWlsID8gZW1haWwgOiBudWxsO1xuICAgICAgICB0aGlzLmFjdGl2YXRlZCA9IGFjdGl2YXRlZCA/IGFjdGl2YXRlZCA6IGZhbHNlO1xuICAgICAgICB0aGlzLmxhbmdLZXkgPSBsYW5nS2V5ID8gbGFuZ0tleSA6IG51bGw7XG4gICAgICAgIHRoaXMuYXV0aG9yaXRpZXMgPSBhdXRob3JpdGllcyA/IGF1dGhvcml0aWVzIDogbnVsbDtcbiAgICAgICAgdGhpcy5jcmVhdGVkQnkgPSBjcmVhdGVkQnkgPyBjcmVhdGVkQnkgOiBudWxsO1xuICAgICAgICB0aGlzLmNyZWF0ZWREYXRlID0gY3JlYXRlZERhdGUgPyBjcmVhdGVkRGF0ZSA6IG51bGw7XG4gICAgICAgIHRoaXMubGFzdE1vZGlmaWVkQnkgPSBsYXN0TW9kaWZpZWRCeSA/IGxhc3RNb2RpZmllZEJ5IDogbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0TW9kaWZpZWREYXRlID0gbGFzdE1vZGlmaWVkRGF0ZSA/IGxhc3RNb2RpZmllZERhdGUgOiBudWxsO1xuICAgICAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQgPyBwYXNzd29yZCA6IG51bGw7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvdXNlci91c2VyLm1vZGVsLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBSZXNwb25zZVdyYXBwZXIgfSBmcm9tICcuLi9tb2RlbC9yZXNwb25zZS13cmFwcGVyLm1vZGVsJztcbmltcG9ydCB7IGNyZWF0ZVJlcXVlc3RPcHRpb24gfSBmcm9tICcuLi9tb2RlbC9yZXF1ZXN0LXV0aWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICAgIHByaXZhdGUgcmVzb3VyY2VVcmwgPSAnYXBpL3VzZXJzJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XG5cbiAgICBjcmVhdGUodXNlcjogVXNlcik6IE9ic2VydmFibGU8UmVzcG9uc2VXcmFwcGVyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnJlc291cmNlVXJsLCB1c2VyKVxuICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5jb252ZXJ0UmVzcG9uc2UocmVzKSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKHVzZXI6IFVzZXIpOiBPYnNlcnZhYmxlPFJlc3BvbnNlV3JhcHBlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLnJlc291cmNlVXJsLCB1c2VyKVxuICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5jb252ZXJ0UmVzcG9uc2UocmVzKSk7XG4gICAgfVxuXG4gICAgZmluZChsb2dpbjogc3RyaW5nKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMucmVzb3VyY2VVcmx9LyR7bG9naW59YCkubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICBxdWVyeShyZXE/OiBhbnkpOiBPYnNlcnZhYmxlPFJlc3BvbnNlV3JhcHBlcj4ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gY3JlYXRlUmVxdWVzdE9wdGlvbihyZXEpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnJlc291cmNlVXJsLCBvcHRpb25zKVxuICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5jb252ZXJ0UmVzcG9uc2UocmVzKSk7XG4gICAgfVxuXG4gICAgZGVsZXRlKGxvZ2luOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKGAke3RoaXMucmVzb3VyY2VVcmx9LyR7bG9naW59YCk7XG4gICAgfVxuXG4gICAgYXV0aG9yaXRpZXMoKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnYXBpL3VzZXJzL2F1dGhvcml0aWVzJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBqc29uID0gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIHJldHVybiA8c3RyaW5nW10+IGpzb247XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY29udmVydFJlc3BvbnNlKHJlczogUmVzcG9uc2UpOiBSZXNwb25zZVdyYXBwZXIge1xuICAgICAgICBjb25zdCBqc29uUmVzcG9uc2UgPSByZXMuanNvbigpO1xuICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlV3JhcHBlcihyZXMuaGVhZGVycywganNvblJlc3BvbnNlLCByZXMuc3RhdHVzKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNvbnRlbnQvY2E4NTRlNmQwNzg1YmE0YjlkNzE1MDQ5YzBiZGJjYjMucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvY29udGVudC9pbWFnZXMvaGlwc3Rlci5wbmdcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvaW1hZ2VzL2hpcHN0ZXIucG5nXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNvbnRlbnQvMWNkM2ExZDc4MmU4NWJhMzc2NzdjMWEyMDk5YmMwMDIucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvY29udGVudC9pbWFnZXMvaGlwc3RlcjJ4LnBuZ1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvY29udGVudC9pbWFnZXMvaGlwc3RlcjJ4LnBuZ1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjb250ZW50L2EzMGRlYjI2YjRlYjE1MjE0MzMwMjFlMzI2Y2JjYzJjLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvaW1hZ2VzL2xvZ28tamhpcHN0ZXIucG5nXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9jb250ZW50L2ltYWdlcy9sb2dvLWpoaXBzdGVyLnBuZ1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29yZS9AYW5ndWxhci9jb3JlLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDY2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQG5neC10cmFuc2xhdGUvY29yZS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29tbW9uL0Bhbmd1bGFyL2NvbW1vbi5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMjEyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmd4LWNvb2tpZS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgyMDYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxMyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2Zvcm1zL0Bhbmd1bGFyL2Zvcm1zLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgyMTMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9uZ3gtaW5maW5pdGUtc2Nyb2xsL21vZHVsZXMvbmd4LWluZmluaXRlLXNjcm9sbC5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMjE0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3ZlbmRvci50cyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgyMTApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9uZy1qaGlwc3Rlci9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL1N1YmplY3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoODUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL1J4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDIwNyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3JvdXRlci9AYW5ndWxhci9yb3V0ZXIuZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoNDkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9odHRwL0Bhbmd1bGFyL2h0dHAuZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMjA4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgyMTEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9uZzItd2Vic3RvcmFnZS9kaXN0L2FwcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL09ic2VydmFibGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgyNCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9