"use strict";
(self["webpackChunksrc"] = self["webpackChunksrc"] || []).push([["src_components_search-query_js"],{

/***/ "./src/components/search-query.js":
/*!****************************************!*\
  !*** ./src/components/search-query.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocationFromUserInput": () => (/* binding */ getLocationFromUserInput),
/* harmony export */   "validateSearchQuery": () => (/* binding */ validateSearchQuery)
/* harmony export */ });
const searchBar = document.getElementById('location');

const getLocationFromUserInput = () => searchBar.value || 'Minneapolis';

const validateSearchQuery = (searchQuery) => {
  const searchRegex =
    /^([a-zA-Z\d\s+]*)(,\s*([a-zA-Z]{2})?)?(,\s+([a-zA-Z]{2})?)?$/;
  return searchQuery.length === 0 || searchRegex.test(searchQuery);
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfc2VhcmNoLXF1ZXJ5X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVPOztBQUVBO0FBQ1A7QUFDQSxxQ0FBcUMsRUFBRSxtQkFBbUIsRUFBRTtBQUM1RDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLXF1ZXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbicpO1xuXG5leHBvcnQgY29uc3QgZ2V0TG9jYXRpb25Gcm9tVXNlcklucHV0ID0gKCkgPT4gc2VhcmNoQmFyLnZhbHVlIHx8ICdNaW5uZWFwb2xpcyc7XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVNlYXJjaFF1ZXJ5ID0gKHNlYXJjaFF1ZXJ5KSA9PiB7XG4gIGNvbnN0IHNlYXJjaFJlZ2V4ID1cbiAgICAvXihbYS16QS1aXFxkXFxzK10qKSgsXFxzKihbYS16QS1aXXsyfSk/KT8oLFxccysoW2EtekEtWl17Mn0pPyk/JC87XG4gIHJldHVybiBzZWFyY2hRdWVyeS5sZW5ndGggPT09IDAgfHwgc2VhcmNoUmVnZXgudGVzdChzZWFyY2hRdWVyeSk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9