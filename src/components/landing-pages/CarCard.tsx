
type Props = {
  car: { model: string }
}

function CarCard({ car }: Props) {
  return (
    <li>
      <h1>{car.model}</h1>
    </li>
  )
}

export default CarCard
