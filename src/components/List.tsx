import { people } from '../data';
import { getImageUrl } from './Utils';

const List = () => {
  /*
  const listItems: JSX.Element[] = people.map(person => 
    <li>{person.name}: {person.profession}</li>
  );

  return <ul>{listItems}</ul>;
  */

  // professionがchemistの人だけを選ぶ
  const chemists = people.filter(person =>
    person.profession === "chemist"
  );
  const listItems = chemists.map(person => 
    <li key={person.id}>
      <img 
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  );

  return <ul>{listItems}</ul>;
}


export default List