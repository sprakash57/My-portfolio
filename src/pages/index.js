import React from "react";
import { Link } from 'gatsby';
import Layout from "../components/layout";

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello</h1>
            <p>I am Sunny, a full stack developer from Pune, India</p>
            <p>Need a developer?<Link to="/contact">Contact me</Link></p>
        </Layout>
    )
}

export default IndexPage;
