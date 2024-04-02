import { MOVIE_FILTERS } from "../utils/Filters";
import Select from "react-select";
import "./filter.css"

export const SortBar = ({ onSort }) => {
  const onSortValueChange = (e) => {
    onSort(e.target.value);
  };

  const options = MOVIE_FILTERS.map((filter) => (
    <option key={filter.id} value={filter.value}>
      {filter.name}
    </option>
  ));

  return (
    <div className="mb-3 p-2 react-select-container sortbyDD">
      <select
        className="form-control"
        onChange={onSortValueChange}
        defaultValue={null}
        classNamePrefix="react-select"
      >
        <option key={0} value={null}>
          Sort by
        </option>
        {options}
      </select>
    </div>
//     <div class="pageHeader">
//   <div class="pageTitle">Explore Movies</div>
//   <div class="filters">
//     <div class="react-select-container genresDD css-b62m3t-container">
//       <span id="react-select-2-live-region" class="css-7pg0cj-a11yText"></span>
//       <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="css-7pg0cj-a11yText"></span>
//       <div class="react-select__control css-13cymwt-control">
//         <div class="react-select__value-container react-select__value-container--is-multi css-hlgwow">
//           <div class="react-select__placeholder css-1jqq78o-placeholder" id="react-select-2-placeholder">Select Category</div>
//           <div class="react-select__input-container css-19bb58m" data-value="">
//             <input class="react-select__input" autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-2-input" spellcheck="false" tabindex="0" type="text" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" aria-describedby="react-select-2-placeholder" value=""/>
//           </div>
//         </div>
//         <div class="react-select__indicators css-1wy0on6">
//           <span class="react-select__indicator-separator css-1u9des2-indicatorSeparator"></span>
//           <div class="react-select__indicator react-select__dropdown-indicator css-1xc3v61-indicatorContainer" aria-hidden="true">
//             <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg">
//               <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
//             </svg>
//           </div>
//         </div>
//       </div>
//       <div>
//         <input name="genres" type="hidden" value=""/>
//       </div>
//     </div>
//     <div class="react-select-container sortbyDD css-b62m3t-container">
//       <span id="react-select-3-live-region" class="css-7pg0cj-a11yText"></span>
//       <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="css-7pg0cj-a11yText"></span>
//       <div class="react-select__control css-13cymwt-control">
//         <div class="react-select__value-container css-hlgwow">
//           <div class="react-select__placeholder css-1jqq78o-placeholder" id="react-select-3-placeholder">Sort by</div>
//           <div class="react-select__input-container css-19bb58m" data-value="">
//             <input class="react-select__input" autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-3-input" spellcheck="false" tabindex="0" type="text" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" aria-describedby="react-select-3-placeholder" value="" data-sider-insert-id="4083ab90-b963-4dcb-a23d-ca8195a8346f" data-sider-select-id="423406b9-02f9-4f74-8c05-904b2c9ef8a5" data-listener-added_0157e4f0="true"/>
//           </div>
//         </div>
//         <div class="react-select__indicators css-1wy0on6">
//           <span class="react-select__indicator-separator css-1u9des2-indicatorSeparator"></span>
//           <div class="react-select__indicator react-select__dropdown-indicator css-1xc3v61-indicatorContainer" aria-hidden="true">
//             <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg">
//               <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
//             </svg>
//           </div>
//         </div>
//       </div>
//       <input name="sortby" type="hidden" value=""/>
//     </div>
//   </div>
// </div>
  );
};
