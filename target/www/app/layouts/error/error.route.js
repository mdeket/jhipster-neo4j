"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_component_1 = require("./error.component");
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
//# sourceMappingURL=error.route.js.map