export const getFilteredList = (list, searchTerm) =>
  list.filter(item =>
    item.title
      .toLowerCase()
      .trim()
      .replace(/[^a-zA-Z0-9]/g, '')
      .includes(
        searchTerm
          .toLowerCase()
          .trim()
          .replace(/[^a-zA-Z0-9]/g, ''),
      ),
  );
