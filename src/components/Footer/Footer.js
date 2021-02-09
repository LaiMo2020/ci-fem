import React from 'react';
import {NavLink} from "react-router-dom";
import "./styles/Footer.scss";

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
                        className="quick-links__link"
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
                <a
                    key={`devs-${i}`}
                    className="uk-padding-small dev-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={ `https://github.com/${dev[0]}` }
                >
                    <span className="dev-link__icon" data-uk-icon="icon: github; ratio: 1" />
                    <span className="dev-link__name">{ dev[1] }</span>
                </a>
            )
        )
    }

    return (
        <footer className="uk-position-bottom uk-padding-small">
            <div className="uk-grid">
                <div className="uk-width-1-3@m uk-first-column uk-flex uk-flex-middle uk-flex-center uk-flex-left@m">
                    <ul className="uk-list uk-padding-small quick-links">
                        { renderQuickLinks() }
                    </ul>
                </div>
                <div className="uk-width-1-3@m uk-flex uk-flex-middle uk-flex-center">
                    <p className="project-desc">
                        This project was a paired programming effort by { renderDevs().length } ragtag Developers with a flair
                        un-paralleled in the known world, to create a local space for CI-cohorts to post
                        their solutions to Frontend Mentor challenges and compare amongst their peers.
                    </p>
                </div>
                <div className="uk-width-expand@m uk-flex uk-flex-middle uk-flex-center uk-flex-right@m">
                    { renderDevs() }
                </div>
            </div>
        </footer>
    )
};

export default Footer;