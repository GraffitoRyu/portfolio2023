export const getDetailData = async (code: string) => {
  return await (await fetch(`/api/projects?detail=${code}`)).json();
};
