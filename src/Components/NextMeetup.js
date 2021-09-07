import React from 'react';
import {
    Button,
    Card,
    CardTitle,
    CardSubtitle,
    CardText
} from 'reactstrap';

const NextMeetup = () => {
    return (
        <Card body className="d-flex flex-column">
            <CardTitle tag="h5">Awesome meetup and event</CardTitle>
            <CardSubtitle tag="h6" className="mb-4 text-muted">25 January 2019</CardSubtitle>
            <CardText>
                <p>
                    Hello, Javascript & Node.js Ninjas! <br/>
                    Get Ready for out monthly meetup JakartaJS! This will be our fifth meetup of 2018 <br/>
                    The Meetup format will contain some short stories and technical talks. <br/>
                    If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements.
                </p>
                <p>Remember to bring a photo ID to get through building security</p>
                <p>.....</p>
                <p>See you there!</p>
                <p>Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers</p>
            </CardText>
        </Card>
    );
}

export default NextMeetup;