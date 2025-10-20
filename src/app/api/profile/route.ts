import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const username = "Phillipml";
    const res = await fetch(`https://api.github.com/users/${username}`);

    if (!res.ok) {
      return NextResponse.json(
        { error: "usuário não encontrado" },
        { status: 404 }
      );
    }

    const data = await res.json();

    const profile = {
      login: data.login,
      avatar_url: data.avatar_url,
      bio: data.bio,
    };

    return NextResponse.json(profile);
  } catch {
    return NextResponse.json({ error: "Algo deu errado" }, { status: 500 });
  }
};
