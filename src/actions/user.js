"use server";

const { default: prisma } = require("@/db/connect");

export const getUserDetails = async (userId) => {
  const user = await prisma.users.findUnique({
    where: {
      id: userId,
    },
  });
  console.log(user);
  return user;
};
