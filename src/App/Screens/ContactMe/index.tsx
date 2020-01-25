import React from 'react';

interface IContactMeProps {}
class ContactMe extends React.Component<IContactMeProps> {
    constructor(props:IContactMeProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="contact-me">
                <div>
                    <h4>
                        Let me know your name and Number
                    </h4>
                </div>
            </div>
        );
    }
}

export default ContactMe;
