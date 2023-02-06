import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";

// f24c44b6ec4dcac791bc74ad033ea2ce;

async function HomePage() {
    const news: NewsResponse = await fetchNews(categories.join(","));
  return <div>
    
  </div>;
}

export default HomePage;
