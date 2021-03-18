import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: "Hats",
                    imageUrl:
                        "https://images.unsplash.com/photo-1565839412225-98641b2d7b5b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                    id: 2,
                },
                {
                    title: "Jacket",
                    imageUrl:
                        "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
                    id: 1,
                },
                {
                    title: "Sneakers",
                    imageUrl:
                        "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                    id: 3,
                },
                {
                    title: "Womens",
                    imageUrl:
                        "https://images.unsplash.com/photo-1551803091-e20673f15770?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
                    id: 4,
                    size: "large",
                },
                {
                    title: "Mens",
                    imageUrl:
                        "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                    id: 5,
                    size: "large",
                },
            ],
        };
    }
    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ title, imageUrl, id, size }) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                ))}
            </div>
        );
    }
}

export default Directory;
