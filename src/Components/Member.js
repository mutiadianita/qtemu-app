import React from 'react';
import {
    Card,
    CardImg,
    CardTitle,
    CardText
} from 'reactstrap';

const Member = () => {
    return (
        <Card body className="d-flex flex-row">
            <div>
                <CardImg top style={{ width: "75px", height: "75px" }} className="rounded-circle" src="https://miro.medium.com/max/3150/1*ANisc4lZFBxuDsmdppFw7Q.jpeg" alt="Card image cap" />
            </div>
            <div className="flex-grow-1 px-4">
                <CardTitle tag="h5">Organizers</CardTitle>
                <CardText>
                    <span><b className="mr-2">Riza Fahmi</b> and <b>4 others.</b></span>
                </CardText>
            </div>
        </Card>
    );
}

export default Member;