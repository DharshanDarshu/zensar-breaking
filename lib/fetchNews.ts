const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean,
) => {
  // GraphQL query

  // stepzen import curl "http://api.mediastack.com/v1/news?access_key=f24c44b6ec4dcac791bc74ad033ea2ce&countries=us%2Cgb&limit=100&offset=0&sort=published_desc"

  // Fetch function with Next.js 13 cashing
  // sort function by images vs not images present
  // return res
};

export default fetchNews;
