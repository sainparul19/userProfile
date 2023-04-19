import React from "react";
import "./Page.css";
import { MailOutlined } from "@ant-design/icons";
import { PhoneOutlined } from "@ant-design/icons";
import { GlobalOutlined } from "@ant-design/icons";
import { HeartOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import { DeleteFilled } from "@ant-design/icons";
import { person } from "./Post.js";

function Page() {
  return (
    <div className="container">
      {person.map(({ name, avatar, email, phone, website }) => (
        <div className="box">
          <div className="innerBox">
            <div className="card">
              <div className="cardImage">
                <img
                  style={{ width: 200, height: 200 }}
                  src={avatar}
                  alt="avatar"
                />
              </div>
            </div>
            <div className="cardBody">
              <h3>{name}</h3>
              <div className="mainIcon">
                <i className="icon">
                  <MailOutlined />
                </i>
                <p>{email}</p>
              </div>
              <div className="mainIcon">
                <i className="icon">
                  <PhoneOutlined />{" "}
                </i>
                <p>{phone}</p>
              </div>
              <div className="mainIcon">
                <i className="icon">
                  <GlobalOutlined />
                </i>
                <p>{website}</p>
              </div>
            </div>

            <ul className="actions">
              <li>
                <span>
                  <i className="icon" style={{ color: "red" }}>
                    <HeartOutlined />
                  </i>
                </span>
              </li>
              <li>
                <span>
                  <i className="icon" style={{ color: "black" }}>
                    <EditOutlined />
                  </i>
                </span>
              </li>
              <li>
                <span>
                  <i className="icon" style={{ color: "black" }}>
                    <DeleteFilled />
                  </i>
                </span>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Page;
