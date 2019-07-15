"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
/**
 * Express instance
 * @public
 */
const app = express_1.default();
exports.app = app;
// enable CORS - Cross Origin Resource Sharing
app.use(cors_1.default());
app.use(express_1.default.static('src/Pages'));
app.get('/', (req, res) => {
    res.end('Working');
});
app.get('/ping', (req, res) => {
    res.send('pong');
});
//# sourceMappingURL=express.js.map