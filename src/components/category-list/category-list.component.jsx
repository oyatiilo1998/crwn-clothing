import CategoryItem from "../category-item/category-item.component";
import "./category-list.styles.scss";

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
