import express, { Router, Request, Response } from 'express';
import { getToken } from './login.service';

const router: Router = express.Router();

router.route('/').post(
  async (req: Request, res: Response): Promise<void> => {
    const token = await getToken(req.body);

    if (token) {
      res.status(200).json({ token });
    } else {
      res.status(403).json({ message: `FORBIDDEN` });
    }
  }
);

export { router };