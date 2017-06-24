"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
//# sourceMappingURL=find-language-from-key.pipe.js.map