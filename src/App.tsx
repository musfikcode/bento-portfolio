import BentoPortfolioTemplate from "./components/bento-portfolio-template"
import { portfolioData } from "./config/portfolio-data"

export default function App() {
  return <BentoPortfolioTemplate {...portfolioData} />
}
