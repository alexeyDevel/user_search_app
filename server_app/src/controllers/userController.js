"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const mockUsers_json_1 = __importDefault(require("../data/mockUsers.json"));
const helpers_1 = __importDefault(require("../helpers/helpers"));
const abort_controller_1 = require("abort-controller");
let currentRequestController = null;
function searchUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        if (currentRequestController) {
            currentRequestController.abort();
        }
        currentRequestController = new abort_controller_1.AbortController();
        const signal = currentRequestController === null || currentRequestController === void 0 ? void 0 : currentRequestController.signal;
        try {
            yield helpers_1.default.debounce(5000, signal); // Передаем signal в debounce
        }
        catch (error) {
            if (error.message === 'Debounce aborted') {
                console.log('Debounce operation aborted');
                return res.status(409).json({ error: 'Conflict! Old operation searchUser aborted' });
            }
        }
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, number } = req.body;
        const users = mockUsers_json_1.default.filter((user) => {
            return (user.email === email) && (!number || user.number == number);
        });
        res.json(users);
    });
}
exports.default = {
    searchUser
};
