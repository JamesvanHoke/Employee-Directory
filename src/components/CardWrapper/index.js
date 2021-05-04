import CardHead from "../CardHead";
import Card from "../Card";

export default function CardWrapper({ employees }) {
  return (
    <>
      <table className="table table-striped">
        <CardHead />
        <tbody>
          {employees.map(({ picture, name, phone, email, dob, id }) => {
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
