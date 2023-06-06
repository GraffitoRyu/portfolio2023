export const getProjectList = () => {
  return fetch("/api/projects?filter=list");
};

export const getDetailData = async (code: string) => {
  return await (await fetch(`/api/projects?detail=${code}`)).json();
};
