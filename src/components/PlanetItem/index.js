import './index.css'

const PlanetItem = props => {
  const {obj} = props
  const {name, imageUrl, description} = obj
  return (
    <div className=" cardStyles text-center bg-secondary mt-3 p-3 text-white">
      <h1 className="text-info text-center">PLANETS</h1>
      <div className="d-flex justify-content-center">
        <img className="cardImage" src={imageUrl} alt={`planet ${name}`} />
      </div>

      <div className="">
        <h1 className=" h4">{name}</h1>
        <p className="">{description}</p>
      </div>
    </div>
  )
}

export default PlanetItem
