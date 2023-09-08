"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debounce = (ms, signal) => {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            resolve();
        }, ms);
        if (signal) {
            signal.addEventListener('abort', () => {
                clearTimeout(timeout); // Отменяем setTimeout при получении сигнала отмены
                reject(new Error('Debounce aborted'));
            });
        }
    });
};
exports.default = {
    debounce
};
