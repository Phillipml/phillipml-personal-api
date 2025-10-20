import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const username = "Phillipml";
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      return res.status(404).json({ error: "usuario não encontrado" });
    }

    const data = await response.json();

    const profile = {
      login: data.login,
      avatar_url: data.avatar_url,
      bio: data.bio,
      whatsapp: "https://wa.me/5531984666540",
      linkedin: "https://www.linkedin.com/in/phillip-menezes-063a39227/",
      github: "https://github.com/Phillipml",
    };

    res.status(200).json(profile);
  } catch {
    res.status(500).json({ error: "Algo deu errado" });
  }
}
