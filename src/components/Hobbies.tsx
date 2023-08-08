import React from 'react';

export default function Hobbies() {
    return (
        <>
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">My Hobbies</h1>
                <p className="mb-4">
                    I have some hobbies which include Videogames and learning about technology.
                </p>
                <p className="mb-4">
                    Currently been learning more about Java and making small personal projects.
                </p>
                <p className="mb-4">
                    I usually stay up to date with technology especially news related to{' '}
                    <a href="https://9to5mac.com/" className="font-bold">
                        Apple
                    </a>
                    , Microsoft, and Tesla from a bunch of websites. <br /> Including:
                </p>

                <ol className="list-decimal list-inside w-lg-2 w-md-8 w-sm-12 mx-auto mb-4">
                    <li className="mb-2">
                        <a href="https://9to5mac.com/" className="font-bold">
                            9to5mac
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="https://macromurs.com/" className="font-bold">
                            Macromurs
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="https://techcrunch.com/" className="font-bold">
                            Techcrunch
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="https://www.cnet.com/" className="font-bold">
                            cnet
                        </a>
                    </li>
                </ol>
            </div>
        </>
    );
}
