"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_1 = require("../shared");
var _1 = require("./");
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
//# sourceMappingURL=account.module.js.map