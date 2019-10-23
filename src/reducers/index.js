const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 0,
}

const updateCartItem = (book, item = {}) => {
  const {
    id = book.id,
    count = 0,
    title = book.title,
    total = book.price,
  } = item

  return {
    id,
    title,
    count: count + 1,
    total: total + book.price,
  }
}

const updateCartItems = (cartItems, item, idx) => {
  if (idx === -1) {
    return [...cartItems, item]
  }

  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS_REQUESTED":
      return {
        ...state,
        loading: true,
        error: null,
      }

    case "FETCH_BOOKS_SUCCESS":
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      }

    case "FETCH_BOOKS_FAILURE":
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload,
      }

    case "BOOK_ADDED_TO_CART":
      const bookId = action.payload
      const book = state.books.find(book => book.id === bookId)
      const itemIndex = state.cartItems.findIndex(({ id }) => id === bookId)
      const item = state.cartItems[itemIndex]

      const newItem = updateCartItem(book, item)
      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex),
      }

    default:
      return state
  }
}

export default reducer
