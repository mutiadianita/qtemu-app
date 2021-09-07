import React from 'react';
import {
    Button,
    Card,
    CardImg,
    CardTitle,
    CardText
} from 'reactstrap';

const Header = () => {
    return (
        <Card body className="d-flex flex-column flex-md-row text-center text-md-left">
            <div>
                <CardImg top style={{ width: "260px" }} src="https://pbs.twimg.com/card_img/1432486896685383682/MpyT3uZ3?format=jpg&name=small" alt="Card image cap" />
            </div>
            <div className="flex-grow-1 px-0 px-md-4 mt-3 mt-md-0">
                <CardTitle tag="h5">Hacktiv8 Meetup</CardTitle>
                <CardText>
                    <span className="mr-2">Location: </span><b>Jakarta</b>
                </CardText>
                <CardText>
                    <span className="mr-2">Members: </span><b>1,078</b>
                </CardText>
                <CardText>
                    <span className="mr-2">Organizers: </span><b>Adhy Wirananta</b>
                </CardText>
                <Button color="primary">Join Us</Button>
            </div>
        </Card>
    );
}

export default Header;