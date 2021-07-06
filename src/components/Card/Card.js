import Bio from '../Bio'
import './Card.css'

const Card = props => {
  return (
    <>
      {
        props.user
          ? <div className='card text-white bg-primary mb-3 myCard'>
            <div className='card-header'>{props.user.name}</div>
            <div className='card-body'>
              <h5 className='card-title'>{props.user.email}</h5>
              <Bio
                text={props.user.bio}
              />
            </div>
            </div>
          : null
      }
    </>
  )
}

export default Card
