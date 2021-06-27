import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

router.route('/').post(
    async (req: Request, res: Response): Promise<void> => {
      if (token) {
        res.status(200).json({ token });
      } else {
        res.status(403).json({ message: `FORBIDDEN` });
      }
    }
);

export default router;