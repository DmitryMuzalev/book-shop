import { clsx } from "clsx";
import { useState } from "react";

import { ArticlesFilter } from "./components/ArticlesFilter/ArticlesFilter";
import { ArticlesItem } from "./components/ArticlesItem/ArticlesItem";

function Articles({ articles, withFilter }) {
  const articlesStyles = clsx("articles", withFilter && "articles_wf");
  const [currentCategory, setCurrentCategory] = useState("all");

  const options = ["all", "classics", "detective & mystery", "ideology"];
  const articlesList =
    currentCategory === "all"
      ? articles
      : articles.filter((article) => article.category === currentCategory);

  return (
    <div className={articlesStyles}>
      <div className="articles__wrap">
        {withFilter && (
          <ArticlesFilter
            currentValue={currentCategory}
            options={options}
            onChangeCurrentValue={setCurrentCategory}
          />
        )}
        <div className="articles__list">
          {articlesList.map((article) => (
            <ArticlesItem key={article.id} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
}

export { Articles };
