import {FC, ReactNode } from 'react';
import { Avatar } from './Props';

type CardProps = {
  children: ReactNode;
}

const Card: FC<CardProps> =  ({children}) => {
  return(
    <div className="card">
      {children}
    </div>
  )
}


export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: "katsuko Saruhashi",
          imageId: "YfeOqp2"
        }}
      />
    </Card>
  )
}