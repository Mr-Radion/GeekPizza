import React from 'react';

const Categories = React.memo(function Categories({ items, onClickItem }) {
  // const state = React.useState(null);
  // const activeItem = state[0]; // initialState
  // const setActiveItem = state[1]; // setState
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItem(index);
  };

  // console.log(state);
  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              onClick={() => onSelectItem(index)}
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

// For an example implementation using a class component

// class Categories extends React.Component {
//   state = {
//     activeItem: null
//   };

//   onSelectItem = (index) => {
//     this.setState({
//       activeItem: index
//     });
//   }

//   render() {
//     const {items} = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           <li>Все</li>
//           {items.map((name, index) => (
//             <li className={this.state.activeItem === index ? 'active' : ''} onClick={() => this.onSelectItem(index)} key={`${name}_${index}`}>{name}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

export default Categories;
