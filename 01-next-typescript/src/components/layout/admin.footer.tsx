"use client";
import { Layout } from "antd";

const AdminFooter = () => {
  const { Footer } = Layout;

  return (
    <>
      <Footer style={{ textAlign: "center" }}>
        Hỏi Dân IT ©{new Date().getFullYear()} Created by @touya
      </Footer>
    </>
  );
};

export default AdminFooter;
