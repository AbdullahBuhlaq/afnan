import searchOptions from "../constants/searchOptions";
import operators from "../constants/operators";
import selectOptions from "../constants/selectOptions";

function Search(props) {
  try {
    return (
      <>
        <div className="search-container">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {props.search.field && searchOptions[props.page][props.search.field].type == "select" ? (
              <select
                onChange={(e) => {
                  props.setSearch({ ...props.search, word: e.target.value });
                }}
                className={"search-bar"}
              >
                <option value=""></option>
                {selectOptions[props.search.field].map((option, optionIndex) => {
                  return (
                    <option key={optionIndex} value={option.value}>
                      {option.name}
                    </option>
                  );
                })}
              </select>
            ) : props.search.field && searchOptions[props.page][props.search.field].type == "array" ? (
              <select
                onChange={(e) => {
                  props.setSearch({ ...props.search, word: e.target.value });
                }}
                className={"search-bar"}
              >
                <option value=""></option>
                {selectOptions[props.search.field].map((option, optionIndex) => {
                  return (
                    <option key={optionIndex} value={option.value}>
                      {option.name}
                    </option>
                  );
                })}
              </select>
            ) : (
              <input
                type={props.search.field ? searchOptions[props.page][props.search.field].type : "text"}
                value={props.search.word}
                onChange={(e) => {
                  props.setSearch({ ...props.search, word: e.target.value });
                }}
                className={"search-bar"}
                placeholder="Filter..."
              />
            )}

            <select
              value={props.search.operator}
              onChange={(e) => {
                props.setSearch({ ...props.search, operator: e.target.value });
              }}
              className={"search-bar"}
              style={{ padding: "1px", marginLeft: "2px" }}
            >
              <option value="">Operator...</option>
              {props.search.field &&
                operators[searchOptions[props.page][props.search.field].type].map((operator, operatorIndex) => {
                  return (
                    <option key={operatorIndex} value={operator.value}>
                      {operator.name}
                    </option>
                  );
                })}
            </select>

            <select
              onChange={(e) => {
                props.setSearch({ ...props.search, field: e.target.value });
              }}
              className={"search-bar"}
              style={{ padding: "1px" }}
            >
              <option value="">Field...</option>
              {Object.keys(searchOptions[props.page]).map((option, optionIndex) => {
                return (
                  <option key={optionIndex} value={option}>
                    {searchOptions[props.page][option].name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Search;
