import { PrismaClient } from "@prisma/client";
import { ageRating, type } from "./constants";
const prisma = new PrismaClient();

async function up() {
  await prisma.ageRating.createMany({ data: ageRating });
  await prisma.type.createMany({ data: type });
  await prisma.releasedFormat.createMany({ data: type });
  await prisma.status.createMany({ data: type });
  await prisma.translateStatus.createMany({ data: type });
  await prisma.other.createMany({ data: type });
  await prisma.myList.createMany({ data: type });
}
