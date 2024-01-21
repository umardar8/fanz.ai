import { Layout } from "antd";
import React from "react";
import WebHeader from "../header";
import BaseColors from "../../constant";

const { Header, Footer, Content } = Layout;
export default function WebLayout(props) {
  const { children } = props;
  return (
    <Layout>
      <Header
        style={{
          margin: 0,
          padding: 0,
          width: "auto",
          height: "auto",
          backgroundColor: "transparent",
        }}
        className="position-sticky fixed-top"
      >
        <WebHeader />
      </Header>
      <Content
        style={{
          margin: 0,
          padding: 0,
          width: "100%",
          height: "auto",
          backgroundColor: "transparent",
        }}
      >
        {children}
      </Content>

      <Footer
        style={{
          margin: 0,
          padding: 0,
          width: "auto",
          height: "auto",
          backgroundColor: "transparent",
        }}
      >
        footer
      </Footer>
    </Layout>
  );
}
