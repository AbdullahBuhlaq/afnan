import TableHeaderCell from "./TableHeaderCell";

function TableHeader(props) {
  try {
    return (
      <>
        <div className="products-header">
          {props.tabs.map((tab, index) => {
            return <TableHeaderCell key={index} tab={tab} />;
          })}
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default TableHeader;
