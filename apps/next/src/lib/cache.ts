export const cacheTime = 7200;

const cacheOptions = {
  headers: {
    "Cache-Control": `s-maxage=${cacheTime}, stale-while-revalidate=300`,
  },
};

export default cacheOptions;
