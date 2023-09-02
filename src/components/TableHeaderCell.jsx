function TableHeaderCell(props) {
  try {
    return (
      <>
        <div className="product-cell category">
          {props.tab}
          <button className="sort-button"></button>
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default TableHeaderCell;
