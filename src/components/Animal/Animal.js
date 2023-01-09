import './Animal.css';

export default function Animal(props) {
  return (
    <div className="animal">
      <img src="animals/cow.svg" />
      <h2>{props.name}</h2>
    </div>
  );
}
