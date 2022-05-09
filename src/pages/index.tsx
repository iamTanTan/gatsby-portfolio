import { Link } from "gatsby";
import * as React from "react";
// import { Layout } from "../components/Layout";

// markup
const IndexPage = () => {
    return (
        <main>
            <title>Home Page</title>

            <h1>Welcome to my Gatsby site!</h1>
            <p>I'm making this by following the Gatsby Tutorial.</p>
            <Link to='/about'>About Me</Link>
        </main>
    );
};

export default IndexPage;
