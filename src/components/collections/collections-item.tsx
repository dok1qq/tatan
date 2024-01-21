import { ICollection } from '../../models/collection';
import { Link } from 'react-router-dom';

interface Props {
  collection: ICollection;
  remove(collection: ICollection): void;
}

export function CollectionsItem({ collection, remove }: Props) {
  return (
    <div className="collections-item">
      <Link to={`/collections/${collection.id}`}>{collection.name}</Link>
      <button onClick={() => remove(collection)}>x</button>
    </div>
  );
}
