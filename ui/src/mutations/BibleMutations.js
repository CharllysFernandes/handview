export const SELECT_BOOK = 'SELECT_BOOK';

export function selectBook(book) {
  return { type: SELECT_BOOK, book };
}
