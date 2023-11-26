type ItemProps = {
  name: string;
  isPacked: boolean;
}

const Item:  React.FC<ItemProps> = ({ name, isPacked }) => {
  /*
  if (isPacked) {
    // return <li className="item">{name}✔️</li>
    // 何もレンダーしたくない場合はnullを返す(一般的ではない)
    return null;
  }
  return <li className="item">{name}</li>
  */

  // 条件三項演算子
  /*
  return (
    <li className="item">
      {isPacked ? (
        <del>
          {name + "✔️"}
        </del>
        ) : (
          name
        )}
    </li>
  )
  */

  let itemContent: string | JSX.Element = name;
  if (isPacked) {
    itemContent = (
      <del>
        {name + " ✔"}
      </del>
    );
  }
  return (
    <li className="item">
      {itemContent}
    </li>
  );

}


function PackingList() {
  return(
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  )
}


export default PackingList