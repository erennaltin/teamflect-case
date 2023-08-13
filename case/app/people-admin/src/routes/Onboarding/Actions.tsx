import RootRouter from "..";

export const signOut = async () => {
  RootRouter.navigate('/', { state: { isSignout: true}});
};