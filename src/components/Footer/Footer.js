import React from 'react';
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="uk-position-bottom uk-padding-small">
            <div className="uk-grid">
                <div className="uk-width-1-3@m uk-first-column uk-flex uk-flex-middle">
                    <p className="uk-text-left project-desc">
                        This project was a paired programming effort by two ragtag Developers with a flair
                        un-paralleled in the known world, to create a local space for CI-cohorts to post
                        their solutions to Frontend Mentor challenges and compare amongst their peers.
                    </p>
                </div>
                <div className="uk-width-1-3@m uk-flex uk-flex-middle uk-flex-center">
                    <ul className="uk-list uk-padding-small supplementary-links">
                        <li>
                            <a
                                className='supplementary-links__link'
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.frontendmentor.io/solutions"
                            >
                                Frontend Mentor
                            </a>
                        </li>
                        <li>
                            <a
                                className='supplementary-links__link'
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.frontendmentor.io/challenges"
                            >
                                Challenges
                            </a>
                        </li>
                        <li>
                            <a
                                className='supplementary-links__link'
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.frontendmentor.io/slack"
                            >
                                Slack
                            </a>
                        </li>
                        <li>
                            <a
                                className='supplementary-links__link'
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/nazarja/ci-fem"
                            >
                                Project Source Code
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="uk-width-expand@m uk-flex uk-flex-middle uk-flex-center uk-flex-right@m">
                    <a
                        className="uk-padding-small dev-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/nazarja"
                    >
                        <span uk-icon="icon: github; ratio: 1.2" />
                        <span className="dev-link__name">SM</span>
                    </a>
                    <a
                        className="uk-padding-small dev-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/auxfuse"
                    >
                        <span uk-icon="icon: github; ratio: 1.1" />
                        <span className="dev-link__name">AOB</span>
                    </a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;