/**
 * Created by AarKay on 16-Mar-17.
 */
import React from "react";
import "whatwg-fetch";
import _ from "lodash";

export class Sources extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentWillMount() {
        const url = `https://newsapi.org/v1/sources?language=en`;
        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(json => {
                this.setState({
                    data: json.sources
                });
            });
    }

    render() {
        let sources = _.map(this.state.data, source => {
            console.log(source);
            return (
                <div className="list-group-item">
                    * &nbsp;
                    <a
                        key={source.id}
                        href={"#" + source.id}
                        onClick={e => {
                            this.props.updateSource(source.id, source.name);
                        }}
                    >
                        {source.name}
                    </a>
                </div>
            );
        });
        return <div className="list-group">{sources}</div>;
    }
}
