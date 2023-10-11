// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {Nav} from '@/utils/nav';

export default (req, res) => {
  res.status(200).json(Nav)
}
