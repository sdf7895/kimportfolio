import React, {Component} from 'react';
import { portfolioItems } from './portfolioItems';
import './portfolio.css';

class portfolio extends Component{

    changeDetailPortFolio = (Id,imageUrl) => {
        this.props.history.push({
            pathname:`/portfolio/${Id}`,
            state: {images: imageUrl}
        })
    }

    render(){
        return(
            <div>
                {
                    portfolioItems.map((v,i) => {
                        return (
                            
                            <div key={i} className="card card-1">
                                <img className="img" src={v.imageUrl} onClick={() => this.changeDetailPortFolio(v.url,v.images)}></img>
                                <p className="title">{v.title}</p>
                                <p>{v.content}</p>
                            </div>
                        )
                    })
                }
            </div>  
        )
    }
}

export default portfolio