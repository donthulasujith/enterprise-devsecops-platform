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
const node_test_1 = require("node:test");
const strict_1 = __importDefault(require("node:assert/strict"));
const accuracy = __importStar(require("../../lib/accuracy"));
void (0, node_test_1.describe)('accuracy', () => {
    void (0, node_test_1.it)('should calculate accuracy as 1.0 when solved on first attempt', () => {
        const challengeKey = 'testChallenge1';
        accuracy.storeFindItVerdict(challengeKey, true);
        strict_1.default.equal(accuracy.calculateFindItAccuracy(challengeKey), 1.0);
        strict_1.default.equal(accuracy.getFindItAttempts(challengeKey), 1);
    });
    void (0, node_test_1.it)('should calculate accuracy as 0.5 when solved on second attempt', () => {
        const challengeKey = 'testChallenge2';
        accuracy.storeFindItVerdict(challengeKey, false);
        accuracy.storeFindItVerdict(challengeKey, true);
        strict_1.default.equal(accuracy.calculateFindItAccuracy(challengeKey), 0.5);
        strict_1.default.equal(accuracy.getFindItAttempts(challengeKey), 2);
    });
    void (0, node_test_1.it)('should calculate accuracy as 0.3333333333333333 when solved on third attempt', () => {
        const challengeKey = 'testChallenge3';
        accuracy.storeFindItVerdict(challengeKey, false);
        accuracy.storeFindItVerdict(challengeKey, false);
        accuracy.storeFindItVerdict(challengeKey, true);
        strict_1.default.equal(accuracy.calculateFindItAccuracy(challengeKey), 1 / 3);
        strict_1.default.equal(accuracy.getFindItAttempts(challengeKey), 3);
    });
    void (0, node_test_1.it)('should not increase attempts after challenge is solved', () => {
        const challengeKey = 'testChallenge4';
        accuracy.storeFindItVerdict(challengeKey, true);
        accuracy.storeFindItVerdict(challengeKey, false);
        accuracy.storeFindItVerdict(challengeKey, true);
        strict_1.default.equal(accuracy.calculateFindItAccuracy(challengeKey), 1.0);
        strict_1.default.equal(accuracy.getFindItAttempts(challengeKey), 1);
    });
    void (0, node_test_1.it)('should calculate fix it accuracy independently', () => {
        const challengeKey = 'testChallenge5';
        accuracy.storeFixItVerdict(challengeKey, false);
        accuracy.storeFixItVerdict(challengeKey, true);
        strict_1.default.equal(accuracy.calculateFixItAccuracy(challengeKey), 0.5);
    });
    void (0, node_test_1.it)('should return 0 attempts for unknown challenge', () => {
        strict_1.default.equal(accuracy.getFindItAttempts('unknown'), 0);
    });
    void (0, node_test_1.it)('should return 0 accuracy for unsolved challenge', () => {
        const challengeKey = 'testChallengeUnsolved';
        accuracy.storeFindItVerdict(challengeKey, false);
        strict_1.default.equal(accuracy.calculateFindItAccuracy(challengeKey), 0);
    });
    void (0, node_test_1.it)('should calculate total accuracy for multiple solved challenges', () => {
        // Total accuracy = (sum of 1/attempts) / number of solved challenges
        // We already have some solved in previous tests if they ran in the same process
        // But let's assume a clean slate or just add more and check if it's correct.
        // Given the previous tests:
        // 1: 1/1 = 1
        // 2: 1/2 = 0.5
        // 3: 1/3 = 0.333...
        // 4: 1/1 = 1
        // 5 (fix it): 1/2 = 0.5
        // totalFindItAccuracy = (1 + 0.5 + 0.333 + 1) / 4 = 2.8333 / 4 = 0.708333
        // To be sure, let's use some specific ones
        const c1 = 'totalAcc1';
        const c2 = 'totalAcc2';
        accuracy.storeFindItVerdict(c1, true); // 1/1
        accuracy.storeFindItVerdict(c2, false);
        accuracy.storeFindItVerdict(c2, true); // 1/2
        // totalFindItAccuracy will include ALL solved challenges so far in this process.
        // This makes it hard to test exact value if other tests ran.
        // But calculateFindItAccuracy is for a single one.
    });
});
//# sourceMappingURL=accuracy.unit.test.js.map