import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

// Extends the PrismaClient with a custom result transformer to convert the price and rating fields to strings.
export const prismaClient = new PrismaClient()
  .$extends(withAccelerate())
  .$extends({
    result: {
      product: {
        price: {
          compute(product) {
            return product.price.toString();
          },
        },
        rating: {
          compute(product) {
            return product.rating.toString();
          },
        },
      },
    },
  });
