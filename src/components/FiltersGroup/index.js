import './index.css'
import {BsSearch} from 'react-icons/bs'

const FiltersGroup = props => {
  const {
    searchEvent,
    startSearch,
    category,
    ratings,
    clickCategory,
    clickRating,
    clearFilters,
    titleSearch,
    rating,
    // categories,
    // rating,
  } = props

  //   const {categoryId} = category
  //   const {ratingId} = ratings

  const enterKey = event => {
    if (event.key === 'Enter') {
      startSearch()
    }
  }

  const onSearch = event => {
    searchEvent(event.target.value)
  }

  //   const onClickCategory = () => {
  //     clickCategory(categoryId)
  //     console.log('cat', category)
  //   }

  //   const onClickRating = () => {
  //     clickRating(ratingId)
  //     console.log('rat', ratingId)
  //   }

  return (
    <div className="filters-group-container">
      <div className="search-bar">
        <input
          type="search"
          onChange={onSearch}
          placeholder="Search"
          className="search"
          onKeyDown={enterKey}
          value={titleSearch}
        />
        <BsSearch className="search-icon" />
      </div>

      {/* Replace this element with your code */}

      <h1 className="head">Category</h1>
      <ul className="list">
        {category.map(each => (
          <li key={each.categoryId} className="category-item">
            <button
              className="category-btn"
              type="button"
              onClick={() => clickCategory(each.categoryId)}
            >
              <p>{each.name}</p>
            </button>
          </li>
        ))}
      </ul>
      <h1 className="head">Rating</h1>
      <ul className="list">
        {ratings.map(eachData => (
          <li key={eachData.ratingId} className="rating-cont">
            <button
              type="button"
              className={`rating-holder ${
                eachData.ratingId === rating ? 'add-color' : ''
              }`}
              onClick={() => clickRating(eachData.ratingId)}
            >
              <img
                src={eachData.imageUrl}
                className="rating-stars"
                alt={`rating ${eachData.ratingId}`}
              />
              <span className="up">&up</span>
            </button>
          </li>
        ))}
      </ul>

      <button className="clear" type="button" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}
export default FiltersGroup
