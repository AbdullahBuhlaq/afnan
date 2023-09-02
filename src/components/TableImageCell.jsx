function TableImageCell(props) {
  try {
    return (
      <>
        <div className="product-cell image">
          <img src={props.image} />
          <span>{props.value}</span>
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default TableImageCell;
