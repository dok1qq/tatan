import { ICollection } from '../../models/collection';
import { Link } from 'react-router-dom';

interface Props {
  collection: ICollection;
}

export function CollectionsItem({ collection }: Props) {
  return (
    <li>
      <Link to={`/collections/${collection.id}`}>{collection.name}</Link>
    </li>
  );
}
