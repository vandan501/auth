import { Request, Response } from 'express';

export const helloWorld = (req: Request, res: Response) => {
  res.json({ message: 'Hello, world!' });
};

export const secureData = (req: Request, res: Response) => {
  res.json({ data: 'This is some secure data' });
};
