export const getProjectList = () => {
  return fetch("/api/projects?filter=list");
};

export const getDetailData = async (code: string | null) => {
  return await (await fetch(`/api/projects?detail=${code}`)).json();
};
