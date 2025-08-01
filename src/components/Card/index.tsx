import './styles.css'
import carImg from '../../assets/car.png'
import ButtonCard from '../ButtonCard'

export default function Card() {
  return (
    <div className="ct-card">
      <img  src={carImg} alt='carro'></img>
      <h3>Audi R8</h3>
      <p> Descrição do carro que está inserido no card de carro.</p>
      <ButtonCard />
    </div>
  )
}