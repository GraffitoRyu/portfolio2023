const cacheOptions = {
  headers: {
    "Cache-Control": "s-maxage=7200, stale-while-revalidate=300",
  },
};

export default cacheOptions;
