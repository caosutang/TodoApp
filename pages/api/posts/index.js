import connectToDatabase from "../../../utils/mongodb";
import PostMessage from "../../../models/postMessages";

connectToDatabase();
export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const posts = await PostMessage.find({});
        res.status(200).json(posts);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const post = await PostMessage.create(req.body);
        res.status(201).json(post);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
