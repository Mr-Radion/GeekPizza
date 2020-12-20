import React from 'react';
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const categoriesName = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desk' },
  { name: 'цене', type: 'price', order: 'desk' },
  { name: 'алфавиту', type: 'name', order: 'ask' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    // if(!items.length) {
    //   dispatch(fetchPizzas());
    // }
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoriesName}
        />
        <SortPopup onClickSortType={onSelectSortType} activeSortType={sortBy.type} items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          (isLoaded && items)
            ? items.map((obj) => <PizzaBlock key={obj.id} isLoading={true} {...obj} />)
            : Array(12)
                .fill(0)
                .map((_, index) => <PizzaLoadingBlock key={index} />)
          // Array.from(Array(12), x => console.log(x))
        }
      </div>
    </div>
  );
}

export default Home;
