export default function CardHead({ handleNameSort, sort }) {
  return (
    <thead>
      <tr>
        <th scope="col">Photo</th>
        <th scope="col">
          Name <button onClick={handleNameSort} className="mx-3 btn btn-secondary">sort by {sort}</button>
        </th>
        <th scope="col">Email</th>
        <th scope="col">Phone #</th>
        <th scope="col">Date of Birth</th>
      </tr>
    </thead>
  );
}
