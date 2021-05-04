export default function Card(props) {
  return (
    <>
      <tr>
        <td>
          <img
            src={props.image}
            className="img-fluid img-thumbnail"
            alt={props.firstName}
          />
        </td>
        <th>{props.firstName}</th>
        <td>{props.lastName}</td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
        <td>{props.date}</td>
      </tr>
    </>
  );
}
