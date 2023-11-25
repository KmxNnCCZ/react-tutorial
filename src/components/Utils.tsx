type Person = {
  name: string;
  imageId: string;
}

export function getImageUrl(person: Person , size: string = "s") {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}