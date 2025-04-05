import prisma from "@/lib/prisma";

export async function getLatestNews({type}:{type:"TWEET" | "ARTICLE" | "UPDATE"}) {
  return await prisma.news.findMany({
    where:{
        type:type
    },
    orderBy: {
      createdAt: "desc", 
    },
    take: 10, // Limit to 10 items
  });
}

export async function createNews({
    title,
    description,
    link,
    type,
  }: {
    title: string;
    description: string;
    link?: string;
    type: "TWEET" | "ARTICLE" | "UPDATE";
  }) {
    return await prisma.news.create({
      data: {
        title,
        description,
        link,
        type,
      },
    });
  }