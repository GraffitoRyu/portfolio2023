/**
 * 서버 쿠키에서 상태값 가져오기
 * @method GET
 * @param {string} stateKey
 * @see /src/jotai/server/util.client.ts
 */
export const getFetchServerState = async (stateKey: string) =>
  await (await fetch(`/api/serverState/${stateKey}`)).json();

/**
 * 서버 쿠키의 상태값 업데이트
 * @method POST
 * @param {PostServerStateAPIRequestType} stateData
 * @param {string} props.key
 * @param {string} props.value
 * @see /src/jotai/server/util.client.ts
 */
export const postFetchServerState = async (
  stateData: PostServerStateAPIRequestType,
) =>
  await (
    await fetch(`/api/serverState/${stateData.key}`, {
      method: "POST",
      body: JSON.stringify(stateData),
    })
  ).json();
