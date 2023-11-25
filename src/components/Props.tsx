import { getImageUrl } from './Utils';

type Person = {
  name: string;
  imageId: string;
}

type AvatarProps = {
  size: number;
  person: Person;
}

const Avatar: React.FC<AvatarProps> = ({ size, person }) => {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Profile() {
  return (
    <div>
      <Avatar 
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}

export default Profile