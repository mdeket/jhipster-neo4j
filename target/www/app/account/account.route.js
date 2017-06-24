"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
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
//# sourceMappingURL=account.route.js.map