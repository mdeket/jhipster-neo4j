"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = require("../../../shared");
var password_reset_finish_component_1 = require("./password-reset-finish.component");
exports.passwordResetFinishRoute = {
    path: 'reset/finish',
    component: password_reset_finish_component_1.PasswordResetFinishComponent,
    data: {
        authorities: [],
        pageTitle: 'global.menu.account.password'
    },
    canActivate: [shared_1.UserRouteAccessService]
};
//# sourceMappingURL=password-reset-finish.route.js.map