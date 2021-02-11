import React from 'react';
import './styles/Footer.scss';

const Footer = () => {

    const renderQuickLinks = () => {
        const links = [
            ['https://www.frontendmentor.io/solutions', 'Frontend Mentor'],
            ['https://www.frontendmentor.io/challenges', 'Challenges'],
            ['https://www.frontendmentor.io/slack', 'Slack'],
            ['https://github.com/nazarja/ci-fem', 'Project Source Code'],
        ];

        return links.map((link, i) => {
            return (
                <li key={`links-${i}`}>
                    <a
                        className="quick-links__link underline-center"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={ link[0] }
                    >
                        { link[1] }
                    </a>
                </li>
            )
        })
    }

    const renderDevs = () => {
        const devs = [
            ['nazarja', 'Sean'],
            ['auxfuse', 'Anthony'],
        ]

        return devs.map( (dev, i) => (
                <li key={`devs-${i}`}>
                    <a
                        key={`devs-${i}`}
                        className="dev-links__link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={ `https://github.com/${dev[0]}` }
                    >
                        <span className="dev-links__name">{ dev[1] }</span>
                        <span className="dev-links__icon" data-uk-icon="icon: github; ratio: 1" />
                    </a>
                </li>
            )
        )
    }

    return (
        <footer className="uk-position-bottom uk-padding-small">
            <div className="uk-container">
                <div className="uk-grid uk-grid-large">
                    <div className="uk-width-1-4@m">
                        <h4 className="uk-text-bold">More</h4>
                        <ul className="quick-links">
                            { renderQuickLinks() }
                        </ul>
                    </div>
                    <div className="uk-width-expand@m">
                        <h4 className="uk-text-bold">About</h4>
                        <p className="project-description uk-align-center">
                            This project was a paired programming effort by { renderDevs().length } developers,
                            to create a local space for Code Institute Cohorts to post their solutions to Frontend
                            Mentor challenges and compare amongst their peers.
                        </p>
                    </div>
                    <div className="dev-links uk-width-1-5@m">
                        <h4 className="uk-text-bold uk-align-right@m">Developed by</h4>
                        <ul className="uk-align-left@xs  uk-text-left@xs uk-align-right@m uk-text-right@m">
                            { renderDevs() }
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;