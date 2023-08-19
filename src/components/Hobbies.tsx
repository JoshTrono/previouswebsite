import React from 'react';

export default function Hobbies() {
    return (
        <>
            <div className="has-text-centered">
                <h1 className="title is-4 has-text-weight-bold mb-4">My Hobbies</h1>
                <p className="mb-4">
                    I have some hobbies which include Videogames and learning about technology.
                </p>
                <p className="mb-4">
                    Currently been learning more about Java and making small personal projects.
                </p>
                <p className="mb-4">
                    I usually stay up to date with technology especially news related to{' '}
                    <a href="https://9to5mac.com/" className="has-text-weight-bold">
                        Apple
                    </a>
                    , Microsoft, and Tesla from a bunch of websites. <br /> Including:
                </p>

                <ol className="is-size-5 is-size-6-mobile is-decimal is-list-inside mx-auto mb-4">
                    <li className="mb-2">
                        <a href="https://9to5mac.com/" className="has-text-weight-bold">
                            9to5mac
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="https://macromurs.com/" className="has-text-weight-bold">
                            Macromurs
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="https://techcrunch.com/" className="has-text-weight-bold">
                            Techcrunch
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="https://www.cnet.com/" className="has-text-weight-bold">
                            cnet
                        </a>
                    </li>
                </ol>
            </div>
        </>
    );
}
