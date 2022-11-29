/* eslint-disable react/no-unknown-property */
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'
import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const settings = {
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
  }
  const {planetsList} = props
  return (
    <div className="d-flex min-vh-100 flex-column bg-secondary">
      <div className="align-self-center cardsParentCon" testid="planets">
        <Slider {...settings}>
          {planetsList.map(obj => (
            <PlanetItem obj={obj} key={obj.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
