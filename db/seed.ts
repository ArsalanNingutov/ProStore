import { PrismaClient } from "@prisma/client";
import sampleData from "@/db/sample-data";

async function main() {
  const prisma = new PrismaClient();
  try {
    await prisma.product.deleteMany();
    await prisma.product.createMany({ data: sampleData.products });
    console.log("Database seeded successfully!");
  } finally {
    await prisma.$disconnect();
  }
}

main();
