class Storage {
  storeItem(item) {

    let movieListA;
    // Check if any items in ls

    if (localStorage.getItem("dataItem") === null) {
      movieListA = [];
      // Push new item

      if (item.length >= 1) {
        movieListA = [...item];
      }

      if (item.length === 0) {
        movieListA.push(item);
      }

      // Set ls
      localStorage.setItem("dataItem", JSON.stringify(movieListA));
    } else {
      // Get what is already in ls
      movieListA = JSON.parse(localStorage.getItem("dataItem"));

      // Push new item
      if (item.length >= 1) {
        movieListA = [...item];
      }

      if (item.length === 0) {
        movieListA.push(item);
      }
      // Reset ls
      localStorage.setItem("dataItem", JSON.stringify(movieListA));
    }
  }

  getItemsFromStorage() {
    let movieListA;
    if (localStorage.getItem("dataItem") === null) {
      movieListA = [];
      return movieListA;
    } else {
      movieListA = JSON.parse(localStorage.getItem("dataItem"));
    }
    return movieListA;
  }

  updateItemStorage(updatedItem) {
    let movieListA = JSON.parse(localStorage.getItem("dataItem"));

    movieListA.forEach(function (item, index) {
      if (updatedItem._id === item._id) {
        movieListA.splice(index, 1, updatedItem);
      }
    });
    localStorage.setItem("dataItem", JSON.stringify(movieListA));
  }

  deleteItemFromStorage(id) {
    let movieListA = JSON.parse(localStorage.getItem("dataItem"));

    movieListA.forEach(function (item, index) {
      if (id === item._id) {
        movieListA.splice(index, 1);
      }
    });
    localStorage.setItem("dataItem", JSON.stringify(movieListA));
  }
  clearItemsFromStorage() {
    localStorage.removeItem("dataItem");
  }

}
// module.exports = NoteStorage;
export default Storage;
