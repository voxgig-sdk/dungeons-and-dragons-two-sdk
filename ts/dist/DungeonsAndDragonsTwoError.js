"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonsAndDragonsTwoError = void 0;
class DungeonsAndDragonsTwoError extends Error {
    isDungeonsAndDragonsTwoError = true;
    sdk = 'DungeonsAndDragonsTwo';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.DungeonsAndDragonsTwoError = DungeonsAndDragonsTwoError;
//# sourceMappingURL=DungeonsAndDragonsTwoError.js.map