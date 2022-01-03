import axios from 'axios';
export default async function getTags(req, res) {
  const data = await axios.get(`https://dev.to/api/follows/tags`, {
    headers: {
      api_key: req.body.api_key,
    },
  });

  res.status(200).json(data.data);
}
