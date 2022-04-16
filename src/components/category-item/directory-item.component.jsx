import { useNavigate } from 'react-router-dom';

import './directory-item.style.scss';

const DirectoryItem = ({category}) =>{
    const {title, imageUrl, route} = category;

    const navigate = useNavigate();

    const onNavigatehandler = () => navigate(route);

    return(
        <div className="directory-item-container" onClick={onNavigatehandler}>
          <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}>
          </div>
          <div className="directory-item-body">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
    ) 
}

export default DirectoryItem