import React, { Component } from "react";
import { PageHeader, ListGroup } from "react-bootstrap";
import "./Home.css";
import { API } from "aws-amplify";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            notes: []
        };
    }

    async componentDidMount() {
        if (!this.props.isAuthenticated) {
            return;
        }

        try {
            const notes = await this.notes();
            this.setState({ notes });
        } catch (e) {
            alert(e);
        }

        this.setState({ isLoading: false });
    }

    notes() {
        return API.get("notes", "/notes");
    }





    renderNotesList(notes) {
        return null;
    }

    renderLander() {
        return (
            <div className="lander">
                <h1>Scratch</h1>
                <p>A simple note taking app</p>
            </div>
        );
    }

    renderNotes() {
        return (
            <div className="notes">
                <PageHeader>Your Notes</PageHeader>
                <ListGroup>
                    {!this.state.isLoading && this.renderNotesList(this.state.notes)}
                </ListGroup>
            </div>
        );
    }

    render() {
        return (
            <div className="Home">
                {this.props.isAuthenticated ? this.renderNotes() : this.renderLander()}
            </div>
        );
    }
}
