const userProfileResolver = async (obj, args, ctx) => {
  if (!ctx.user) return null;
  return ctx.user;
};

export default userProfileResolver;