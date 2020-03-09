import React from "react";

import Layout from "../layouts/default";
import Logo from "../components/Logo";
import { COLORS } from "../utils/constants";
import getLastPushTime from "../utils/getLastPushTime";

import installers from "../data/installers.yml";
import getPlatform from "../utils/getPlatform";

class IndexPage extends React.PureComponent {
    state = {
        lastBuildDate: new Date(0),
    };

    componentDidMount = () => {
        getLastPushTime()
        .then(date => this.setState({ lastBuildDate: new Date(date) }))
        .catch(() => {});
    }

    render = () => (
        <Layout>
            <div css={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "calc(100vh - 72px)",
                backgroundColor: COLORS.BLACK,
                color: COLORS.WHITE,
                textAlign: "center",
            }}>
                <Logo size="200" />
                <div css={{
                    padding: 25,
                    fontSize: "2em",
                }}>
                    noteLog
                </div>
                <div css={{
                    maxWidth: 500,
                    padding: 25,
                }}>
                    NoteLog aims to solve a problem I often have: having
                    think <b>where</b> to search for something in addition to <b>what</b> to search for to best find it.
                    It will aggregate data from all the places I store information,
                    allowing me to search through all of them in a single query, a single search bar.
                </div>
                <div css={{
                    padding: 10
                }}>
                    <a href="https://search.notelog.app" target="__blank"><button>Try the Prototype (Web)</button></a>
                </div>
            </div>

            <div css={{
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: 1000,
                padding: 25,
                minHeight: "50vh",
            }}>
                <h2>Background</h2>
                <p>More Information Coming Soon!</p>
            </div>
        </Layout>
    );
}

export default IndexPage;
