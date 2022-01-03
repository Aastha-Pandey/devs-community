// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
export default async function getUserByToken(req, res) {
  const data = await axios.get(`https://dev.to/api/users/me`, {
    headers: {
      api_key: req.body.api_key,
    },
  });

  res.status(200).json(data.data);
}
