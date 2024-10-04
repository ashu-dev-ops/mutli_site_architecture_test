import { PrismaClient } from "@prisma/client";
const prismaClientSingleton = () => {
  return new PrismaClient();
};
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();
// console.log(prisma)
export default prisma;
