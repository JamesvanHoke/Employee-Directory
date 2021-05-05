import CardHead from "../CardHead";
import Card from "../Card";

export default function CardWrapper(props) {
  return (
    <>
      <table className="table table-striped">
        <CardHead handleNameSort={props.handleNameSort} sort={props.sort} />
        <tbody>
          {props.employees.map(({ picture, name, phone, email, dob, id }) => {
            return (
              <Card
                key={id.value}
                image={picture.thumbnail}
                firstName={name.first}
                lastName={name.last}
                phone={phone}
                email={email}
                date={dob.date.slice(0, -14)}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}
