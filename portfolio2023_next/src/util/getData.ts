const __domain = process.env.NEXT_PUBLIC_GET_DATA_DOMAIN;

export const getProfileData = (section: string) => {
  return fetch(`${__domain}api/profile?item=${section}`);
};

export const getProjectList = () => {
  return fetch(`${__domain}api/projects?type=list`);
};

export async function getSSRData({
  page,
  queryName,
  queryValue,
}: {
  page: string;
  queryName: string;
  queryValue: string;
}) {
  const res = await fetch(`${__domain}api/${page}?${queryName}=${queryValue}`);
  if (!res.ok) throw new Error(`${page} 데이터 가져오기 실패 - ${queryValue}`);
  const json = await res.json();
  return json.res;
}

export const getDetailData = async (code: string | null) => {
  return await (await fetch(`/api/projects?detail=${code}`)).json();
};
