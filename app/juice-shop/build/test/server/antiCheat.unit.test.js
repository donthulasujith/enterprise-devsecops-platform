"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const strict_1 = __importDefault(require("node:assert/strict"));
void (0, node_test_1.describe)('antiCheat', () => {
    let antiCheat;
    (0, node_test_1.beforeEach)(() => {
        delete require.cache[require.resolve('../../lib/antiCheat')];
        antiCheat = require('../../lib/antiCheat');
        antiCheat.reset();
    });
    void (0, node_test_1.describe)('calculateCheatScore', () => {
        void (0, node_test_1.it)('should return cheat score of 0 if challenge is tightly coupled to the previously solved one', () => {
            const challenge1 = { key: 'loginAdminChallenge', difficulty: 1 };
            const challenge2 = { key: 'weakPasswordChallenge', difficulty: 1 };
            antiCheat.calculateCheatScore(challenge1);
            const score = antiCheat.calculateCheatScore(challenge2);
            strict_1.default.equal(score, 0);
        });
        void (0, node_test_1.it)('should return cheat score of 0 if challenge is loosely coupled to the previously solved one', () => {
            const challenge1 = { key: 'localXssChallenge', difficulty: 1 };
            const challenge2 = { key: 'xssBonusChallenge', difficulty: 1 };
            antiCheat.calculateCheatScore(challenge1);
            const score = antiCheat.calculateCheatScore(challenge2);
            strict_1.default.equal(score, 0);
        });
        void (0, node_test_1.it)('should return cheat score of 0 if challenge is loosely coupled to one in the past', () => {
            const challenge1 = { key: 'localXssChallenge', difficulty: 1 };
            const challenge2 = { key: 'missingEncodingChallenge', difficulty: 1 };
            const challenge3 = { key: 'forgottenBackupChallenge', difficulty: 1 };
            const challenge4 = { key: 'xssBonusChallenge', difficulty: 1 };
            antiCheat.calculateCheatScore(challenge1);
            antiCheat.calculateCheatScore(challenge2);
            antiCheat.calculateCheatScore(challenge3);
            const score = antiCheat.calculateCheatScore(challenge4);
            strict_1.default.equal(score, 0);
        });
        void (0, node_test_1.it)('should assume cheating if two unrelated challenges are solved after each other', () => {
            const challenge1 = { key: 'localXssChallenge', difficulty: 1 };
            const challenge2 = { key: 'missingEncodingChallenge', difficulty: 1 };
            antiCheat.calculateCheatScore(challenge1);
            const score = antiCheat.calculateCheatScore(challenge2);
            strict_1.default.ok(score > 0);
        });
    });
    void (0, node_test_1.describe)('totalCheatScore', () => {
        void (0, node_test_1.it)('should return 0 if no challenges are solved', () => {
            strict_1.default.equal(antiCheat.totalCheatScore(), 0);
        });
        void (0, node_test_1.it)('should return the median cheat score of all solves', () => {
            const challenge1 = { key: 'loginAdminChallenge', difficulty: 1 };
            const challenge2 = { key: 'weakPasswordChallenge', difficulty: 1 };
            const challenge3 = { key: 'missingEncodingChallenge', difficulty: 1 };
            antiCheat.calculateCheatScore(challenge1); // score 0 (first solve after seed)
            antiCheat.calculateCheatScore(challenge2); // score 0 (tightly coupled)
            antiCheat.calculateCheatScore(challenge3); // score > 0 (unrelated)
            const totalScore = antiCheat.totalCheatScore();
            strict_1.default.ok(totalScore >= 0 && totalScore <= 1);
        });
    });
    void (0, node_test_1.describe)('checkForPreSolveInteractions', () => {
        void (0, node_test_1.it)('should mark interaction as true if URL matches a fragment', async () => {
            const challenge = { key: 'directoryListingChallenge', difficulty: 1 };
            const scoreWithoutInteraction = antiCheat.calculateCheatScore(challenge);
            strict_1.default.strictEqual(scoreWithoutInteraction, 1, 'Score without interaction should be 1.0 (maximum)');
            antiCheat.reset();
            const req = { url: '/ftp' };
            const res = {};
            const next = () => { };
            antiCheat.checkForPreSolveInteractions()(req, res, next);
            await new Promise(resolve => setTimeout(resolve, 100));
            const scoreWithInteraction = antiCheat.calculateCheatScore(challenge);
            strict_1.default.ok(scoreWithInteraction < scoreWithoutInteraction, `Score with interaction (${scoreWithInteraction}) should be lower than without (${scoreWithoutInteraction})`);
        });
    });
    void (0, node_test_1.describe)('reset', () => {
        void (0, node_test_1.it)('should reset solves and interactions', () => {
            const challenge = { key: 'directoryListingChallenge', difficulty: 1 };
            antiCheat.checkForPreSolveInteractions()({ url: '/ftp' }, {}, () => { });
            antiCheat.calculateCheatScore(challenge);
            strict_1.default.ok(antiCheat.totalCheatScore() > 0, 'Total cheat score should be > 0 after a solve');
            antiCheat.reset();
            strict_1.default.strictEqual(antiCheat.totalCheatScore(), 0, 'Total cheat score should be 0 after reset');
            const scoreAfterReset = antiCheat.calculateCheatScore(challenge);
            strict_1.default.strictEqual(scoreAfterReset, 1, 'Score after reset should be 1.0 again because interactions were reset');
        });
    });
});
//# sourceMappingURL=antiCheat.unit.test.js.map