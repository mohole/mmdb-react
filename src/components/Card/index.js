
import { Link } from "react-router-dom";

const Card = (props) => {
  // Just fallbacks for props...
  const title = props.title || 'Example';
  const image = props.image || '';
  const to = props.link || '/';
  const edit = props.edit || '/';
  
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <Link to={to}>
            <a href={to} className="btn btn-primary">
              <i className="fa fa-eye"/> Go to details</a>
          </Link> <Link to={edit}>
            <a href={edit} className="btn btn-outline-primary">
              <i className="fa fa-edit" /> Edit</a>
          </Link>
        </div>
    </div>
  )
}

export {
  Card
}