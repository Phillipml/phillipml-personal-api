import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const username = "Phillipml";
    const res = await fetch(`https://api.github.com/users/${username}`);

    if (!res.ok) {
      return NextResponse.json(
        { error: "usuário não encontrado" },
        {
          status: 404,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    const data = await res.json();
    const profile = {
      login: data.login,
      avatar_url: data.avatar_url,
      bio: data.bio,
      whatsapp: "https://wa.me/5531984666540",
      linkedin: "https://www.linkedin.com/in/phillip-menezes-063a39227/",
      github: "https://github.com/Phillipml",
    };

    return NextResponse.json(profile, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Algo deu errado" },
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
};
