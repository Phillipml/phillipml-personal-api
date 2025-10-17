import { NextResponse } from "next/server";
import { repos } from "@/data/repos";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  const numericId = parseInt(id);
  
  if (isNaN(numericId)) {
    return NextResponse.json(
      { error: "ID deve ser um número válido" },
      { status: 400 }
    );
  }

  const foundRepo = repos.find(repo => repo.id === numericId);
  
  if (!foundRepo) {
    return NextResponse.json(
      { error: "Repositório não encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json(foundRepo, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
