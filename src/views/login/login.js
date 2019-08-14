import React, { Component } from "react";
import { Icon } from "antd";
import "./login.less";

//如果引入图片
// import logo from "./images/logo.png"

// 登录的路由组件
export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <header className="login-header">
          <Icon type="apple" />
          <h1>Apple Back System</h1>
        </header>
        <section className="login-content">
          <h2>用户登录</h2>
          <div>From</div>
        </section>
      </div>
    );
  }
}
