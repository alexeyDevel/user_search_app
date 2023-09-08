import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import usersMock from '../data/mockUsers.json';
import helpers from "../helpers/helpers";
import { AbortController, AbortSignal } from "abort-controller";

let currentRequestController: AbortController | null = null;
async function searchUser(req: Request, res: Response) {
    if (currentRequestController) {
        currentRequestController.abort();
    }
    currentRequestController = new AbortController();
    const signal: AbortSignal | undefined = currentRequestController?.signal;

    try {
        await helpers.debounce(5000, signal); // Передаем signal в debounce
    } catch (error: any) {
        if (error.message === 'Debounce aborted') {
            console.log('Debounce operation aborted');
            return res.status(409).json({ error: 'Conflict! Old operation searchUser aborted' });
        }
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, number } = req.body;
    const users = usersMock.filter((user) => {
        return (user.email === email) && (!number || user.number == number);
    });
    res.json(users);
}

export default {
    searchUser
};
