import { AbortSignal } from "abort-controller";
type DebounceFunction = (ms: number, signal?: AbortSignal) => Promise<void>;

const debounce: DebounceFunction = (ms, signal) => {
    return new Promise<void>((resolve, reject) => {
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

export default {
    debounce
}
