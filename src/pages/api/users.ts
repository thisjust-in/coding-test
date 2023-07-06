import type { NextApiRequest, NextApiResponse } from 'next'
import userData from '../../util/data.json'

type User = {
  id: number;
  name: string;
};

type Data = {
  users: User[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): void {
  res.status(200).json(userData as Data);
}
