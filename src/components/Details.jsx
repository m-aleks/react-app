import React from "react";
import { withRouter } from "react-router-dom";

function Details(props) {
    const shownFilm = props.getFilmById(props.match.params.id);
    return (
        <div>
            <button onClick={()=>props.history.goBack()}>Back</button>
            <div className="section_content details_section_content">
                <div className="poster">
                    <img src={shownFilm.poster} alt="" />
                </div>
                <div className="summary">
                    <div className="summary_heading">
                        <h2>
                            {shownFilm.title}
                        </h2>
                    </div>
                    <div className="summary_info">

                    </div>
                    <div className="summary_item">
                        <h3 className="summary_item_heading inline">Year:</h3>
                        <span className="summary_item_text">{shownFilm.year}</span>
                    </div>
                    <div className="summary_item">
                        <h3 className="summary_item_heading inline">Genre:</h3>
                        <span className="summary_item_text">{shownFilm.genre}</span>
                    </div>
                    <div className="summary_item">
                        <h3 className="summary_item_heading inline">Description:</h3>
                        <span className="summary_item_text">{shownFilm.description}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Details)