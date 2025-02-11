import { convertToPlainObject } from "@/lib/utils";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";
import { Product } from "@/types";
import { prismaClient } from "@/db/prisma";

export async function getLatestProducts(): Promise<Product[]> {
  const data = await prismaClient.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObject<Product[]>(data);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const data = await prismaClient.product.findFirst({
    where: { slug: slug },
  });

  if (!data) {
    return null;
  }

  return convertToPlainObject<Product>(data);
}
