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
                        className="dev-links__link uk-flex uk-flex-center uk-flex-middle uk-flex-right@m"
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
                <div className="uk-grid">
                    <div className="uk-width-1-3@m uk-first-column uk-flex uk-flex-middle uk-flex-center uk-flex-left@m">
                        <ul className="uk-list uk-padding-small quick-links uk-text-center uk-text-left@m">
                            { renderQuickLinks() }
                        </ul>
                    </div>
                    <div className="uk-width-1-3@m uk-flex uk-flex-middle uk-flex-center">
                        <p className="project-desc uk-text-center uk-text-left@m">
                            This project was a paired programming effort by { renderDevs().length } Developers,
                            to create a local space for Code Institute Cohorts to post their solutions to Frontend
                            Mentor challenges and compare amongst their peers.
                        </p>
                    </div>
                    <div className="uk-width-expand@m uk-flex uk-flex-middle uk-flex-center uk-flex-right@m">
                        <ul className="uk-list uk-padding-small dev-links uk-text-center uk-text-right@m">
                            { renderDevs() }
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;