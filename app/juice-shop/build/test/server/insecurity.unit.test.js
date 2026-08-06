"use strict";
/*
 * Copyright (c) 2014-2026 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-expect-error FIXME no typescript definitions for z85 :(
const z85_1 = __importDefault(require("z85"));
const node_test_1 = require("node:test");
const strict_1 = __importDefault(require("node:assert/strict"));
const security = __importStar(require("../../lib/insecurity"));
void (0, node_test_1.describe)('insecurity', () => {
    void (0, node_test_1.describe)('cutOffPoisonNullByte', () => {
        void (0, node_test_1.it)('returns string unchanged if it contains no null byte', () => {
            strict_1.default.equal(security.cutOffPoisonNullByte('file.exe.pdf'), 'file.exe.pdf');
        });
        void (0, node_test_1.it)('returns string up to null byte', () => {
            strict_1.default.equal(security.cutOffPoisonNullByte('file.exe%00.pdf'), 'file.exe');
        });
    });
    void (0, node_test_1.describe)('userEmailFrom', () => {
        void (0, node_test_1.it)('returns content of "x-user-email" header if present', () => {
            strict_1.default.equal(security.userEmailFrom({ headers: { 'x-user-email': 'test@bla.blubb' } }), 'test@bla.blubb');
        });
        void (0, node_test_1.it)('returns undefined if header "x-user-email" is not present', () => {
            strict_1.default.equal(security.userEmailFrom({ headers: {} }), undefined);
            strict_1.default.equal(security.userEmailFrom({}), undefined);
        });
    });
    void (0, node_test_1.describe)('generateCoupon', () => {
        void (0, node_test_1.it)('returns base85-encoded month, year and discount as coupon code', () => {
            const coupon = security.generateCoupon(20, new Date('1980-01-02'));
            strict_1.default.equal(coupon, 'n<MiifFb4l');
            strict_1.default.equal(z85_1.default.decode(coupon).toString(), 'JAN80-20');
        });
        void (0, node_test_1.it)('uses current month and year if not specified', () => {
            const coupon = security.generateCoupon(20);
            strict_1.default.equal(coupon, security.generateCoupon(20, new Date()));
        });
        void (0, node_test_1.it)('does not encode day of month or time into coupon code', () => {
            const coupon = security.generateCoupon(10, new Date('December 01, 1999'));
            strict_1.default.equal(coupon, security.generateCoupon(10, new Date('December 01, 1999 01:00:00')));
            strict_1.default.equal(coupon, security.generateCoupon(10, new Date('December 02, 1999')));
            strict_1.default.equal(coupon, security.generateCoupon(10, new Date('December 31, 1999 23:59:59')));
        });
    });
    void (0, node_test_1.describe)('discountFromCoupon', () => {
        void (0, node_test_1.it)('returns undefined when not passing in a coupon code', () => {
            strict_1.default.equal(security.discountFromCoupon(undefined), undefined);
        });
        void (0, node_test_1.it)('returns undefined for malformed coupon code', () => {
            strict_1.default.equal(security.discountFromCoupon(''), undefined);
            strict_1.default.equal(security.discountFromCoupon('x'), undefined);
            strict_1.default.equal(security.discountFromCoupon('___'), undefined);
        });
        void (0, node_test_1.it)('returns undefined for coupon code not according to expected pattern', () => {
            strict_1.default.equal(security.discountFromCoupon(z85_1.default.encode('Test')), undefined);
            strict_1.default.equal(security.discountFromCoupon(z85_1.default.encode('XXX00-10')), undefined);
            strict_1.default.equal(security.discountFromCoupon(z85_1.default.encode('DEC18-999')), undefined);
            strict_1.default.equal(security.discountFromCoupon(z85_1.default.encode('DEC18-1')), undefined);
            strict_1.default.equal(security.discountFromCoupon(z85_1.default.encode('DEC2018-10')), undefined);
        });
        void (0, node_test_1.it)('returns undefined for expired coupon code', () => {
            strict_1.default.equal(security.discountFromCoupon(z85_1.default.encode('SEP14-50')), undefined);
        });
        void (0, node_test_1.it)('returns discount from valid coupon code', () => {
            strict_1.default.equal(security.discountFromCoupon(security.generateCoupon(10)), 10);
            strict_1.default.equal(security.discountFromCoupon(security.generateCoupon(99)), 99);
        });
    });
    void (0, node_test_1.describe)('authenticatedUsers', () => {
        void (0, node_test_1.it)('returns user by associated token', () => {
            security.authenticatedUsers.put('11111', { data: { id: 1 } });
            strict_1.default.deepEqual(security.authenticatedUsers.get('11111'), { data: { id: 1 } });
        });
        void (0, node_test_1.it)('returns undefined if no token is passed in', () => {
            strict_1.default.equal(security.authenticatedUsers.get(undefined), undefined);
        });
        void (0, node_test_1.it)('returns token by associated user', () => {
            security.authenticatedUsers.put('11111', { data: { id: 1 } });
            strict_1.default.equal(security.authenticatedUsers.tokenOf({ id: 1 }), '11111');
        });
        void (0, node_test_1.it)('returns user by associated token from request', () => {
            security.authenticatedUsers.put('11111', { data: { id: 1 } });
            strict_1.default.deepEqual(security.authenticatedUsers.from({ headers: { authorization: 'Bearer 11111' } }), { data: { id: 1 } });
        });
        void (0, node_test_1.it)('returns undefined if no token is present in request', () => {
            strict_1.default.equal(security.authenticatedUsers.from({ headers: {} }), undefined);
            strict_1.default.equal(security.authenticatedUsers.from({}), undefined);
        });
    });
    void (0, node_test_1.describe)('sanitizeHtml', () => {
        void (0, node_test_1.it)('handles empty inputs by returning their string representation', () => {
            strict_1.default.equal(security.sanitizeHtml(''), '');
        });
        void (0, node_test_1.it)('returns input unchanged for plain text input', () => {
            strict_1.default.equal(security.sanitizeHtml('This application is horrible!'), 'This application is horrible!');
        });
        void (0, node_test_1.it)('returns input unchanged for HTML input with only harmless text formatting', () => {
            strict_1.default.equal(security.sanitizeHtml('<strong>This</strong> application <em>is horrible</em>!'), '<strong>This</strong> application <em>is horrible</em>!');
        });
        void (0, node_test_1.it)('returns input unchanged for HTML input with only harmless links', () => {
            strict_1.default.equal(security.sanitizeHtml('<a href="bla.blubb">Please see here for details!</a>'), '<a href="bla.blubb">Please see here for details!</a>');
        });
        void (0, node_test_1.it)('removes all Javascript from HTML input', () => {
            strict_1.default.equal(security.sanitizeHtml('Sani<script>alert("ScriptXSS")</script>tizedScript'), 'SanitizedScript');
            strict_1.default.equal(security.sanitizeHtml('Sani<img src="alert("ImageXSS")"/>tizedImage'), 'SanitizedImage');
            strict_1.default.equal(security.sanitizeHtml('Sani<iframe src="alert("IFrameXSS")"></iframe>tizedIFrame'), 'SanitizedIFrame');
        });
        void (0, node_test_1.it)('can be bypassed by exploiting lack of recursive sanitization', () => {
            strict_1.default.equal(security.sanitizeHtml('<<script>Foo</script>iframe src="javascript:alert(`xss`)">'), '<iframe src="javascript:alert(`xss`)">');
        });
    });
    void (0, node_test_1.describe)('sanitizeLegacy', () => {
        void (0, node_test_1.it)('returns empty string for undefined input', () => {
            strict_1.default.equal(security.sanitizeLegacy(), '');
            strict_1.default.equal(security.sanitizeLegacy(undefined), '');
        });
        void (0, node_test_1.it)('returns input unchanged for plain text input', () => {
            strict_1.default.equal(security.sanitizeLegacy('bkimminich'), 'bkimminich');
            strict_1.default.equal(security.sanitizeLegacy('Kosh III.'), 'Kosh III.');
        });
        void (0, node_test_1.it)('removes all opening tags and subsequent character from HTML input', () => {
            strict_1.default.equal(security.sanitizeLegacy('<h1>Hello</h1>'), 'ello</h1>');
            strict_1.default.equal(security.sanitizeLegacy('<img src="test">'), 'rc="test">');
        });
        void (0, node_test_1.it)('can be bypassed to allow working HTML payload to be returned', () => {
            strict_1.default.equal(security.sanitizeLegacy('<<a|ascript>alert(`xss`)</script>'), '<script>alert(`xss`)</script>');
        });
    });
    void (0, node_test_1.describe)('sanitizeSecure', () => {
        void (0, node_test_1.it)('handles empty inputs by returning their string representation', () => {
            strict_1.default.equal(security.sanitizeSecure(''), '');
        });
        void (0, node_test_1.it)('returns input unchanged for plain text input', () => {
            strict_1.default.equal(security.sanitizeSecure('This application is horrible!'), 'This application is horrible!');
        });
        void (0, node_test_1.it)('returns input unchanged for HTML input with only harmless text formatting', () => {
            strict_1.default.equal(security.sanitizeSecure('<strong>This</strong> application <em>is horrible</em>!'), '<strong>This</strong> application <em>is horrible</em>!');
        });
        void (0, node_test_1.it)('returns input unchanged for HTML input with only harmless links', () => {
            strict_1.default.equal(security.sanitizeSecure('<a href="bla.blubb">Please see here for details!</a>'), '<a href="bla.blubb">Please see here for details!</a>');
        });
        void (0, node_test_1.it)('removes all Javascript from HTML input', () => {
            strict_1.default.equal(security.sanitizeSecure('Sani<script>alert("ScriptXSS")</script>tizedScript'), 'SanitizedScript');
            strict_1.default.equal(security.sanitizeSecure('Sani<img src="alert("ImageXSS")"/>tizedImage'), 'SanitizedImage');
            strict_1.default.equal(security.sanitizeSecure('Sani<iframe src="alert("IFrameXSS")"></iframe>tizedIFrame'), 'SanitizedIFrame');
        });
        void (0, node_test_1.it)('cannot be bypassed by exploiting lack of recursive sanitization', () => {
            strict_1.default.equal(security.sanitizeSecure('Bla<<script>Foo</script>iframe src="javascript:alert(`xss`)">Blubb'), 'BlaBlubb');
        });
    });
    void (0, node_test_1.describe)('hash', () => {
        void (0, node_test_1.it)('returns MD5 hash for any input string', () => {
            strict_1.default.equal(security.hash('admin123'), '0192023a7bbd73250516f069df18b500');
            strict_1.default.equal(security.hash('password'), '5f4dcc3b5aa765d61d8327deb882cf99');
            strict_1.default.equal(security.hash(''), 'd41d8cd98f00b204e9800998ecf8427e');
        });
    });
    void (0, node_test_1.describe)('hmac', () => {
        void (0, node_test_1.it)('returns SHA-256 HMAC with "pa4qacea4VK9t9nGv7yZtwmj" as salt any input string', () => {
            strict_1.default.equal(security.hmac('admin123'), '6be13e2feeada221f29134db71c0ab0be0e27eccfc0fb436ba4096ba73aafb20');
            strict_1.default.equal(security.hmac('password'), 'da28fc4354f4a458508a461fbae364720c4249c27f10fccf68317fc4bf6531ed');
            strict_1.default.equal(security.hmac(''), 'f052179ec5894a2e79befa8060cfcb517f1e14f7f6222af854377b6481ae953e');
        });
    });
});
//# sourceMappingURL=insecurity.unit.test.js.map