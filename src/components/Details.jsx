import React from "react";

export default function Details(props) {
    return (
    <div>
        <div className="section_heading">
            <h2>
                {props.item.title}
            </h2>
        </div>
        <div className="section_content">
            <div className="summary">
                <div className="summary_item">
                    <h4 className="summary_item_heading inline">Year:</h4>
                    <span className="summary_item_text">{props.item.year}</span>
                </div>
                <div className="summary_item">
                    <h4 className="summary_item_heading inline">Genre:</h4>
                    <span className="summary_item_text">{props.item.genre}</span>
                </div>
            </div>
        </div>
    </div>
    );
}
