import React from 'react'
import "./Widgets.css"
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newArticle = (heading, subtitle)=>(
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets_articleRight"> 
            <h4>{heading}</h4>
            <p>{subtitle}</p>
            
            </div>

        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>

            </div>
            {newArticle("Groot is back","Top news -7589 readers")}
            {newArticle("Groot is back","Top news -7589 readers")}
            {newArticle("Groot is back","Top news -7589 readers")}
            {newArticle("Groot is back","Top news -7589 readers")}
        </div>
    )
}

export default Widgets
