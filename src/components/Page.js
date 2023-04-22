import React, { useContext, useEffect } from "react";
import "./Page.css";
import { ApiContext } from "./ContextProvider";
import { MailOutlined } from "@ant-design/icons";
import { PhoneOutlined } from "@ant-design/icons";
import { GlobalOutlined } from "@ant-design/icons";
import { HeartOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import { DeleteFilled } from "@ant-design/icons";

const Page = () => {
  const [blog, setBlog] = useContext(ApiContext);

  useEffect(() => {
    console.log(blog);
  }, [blog]);

  return (
    <div className="container">
      {blog.map((res, id) => (
        <div className="box" key={res.id}>
          <div className="innerBox">
            <div className="card">
              <div className="cardImage">
                <img
                  style={{ width: 200, height: 200 }}
                  src={`https://avatars.dicebear.com/v2/avataaars/${res.username}.svg?options[mood][]=happy`}
                  alt="avatar"
                />
              </div>
            </div>
            <div className="cardBody">
              <h3>{res.name}</h3>
              <div className="mainIcon">
                <i className="icon">
                  <MailOutlined />
                </i>
                <p>{res.email}</p>
              </div>
              <div className="mainIcon">
                <i className="icon">
                  <PhoneOutlined />{" "}
                </i>
                <p>{res.phone}</p>
              </div>
              <div className="mainIcon">
                <i className="icon">
                  <GlobalOutlined />
                </i>
                <p>{res.website}</p>
              </div>
            </div>

            <ul className="actions">
              <li>
                <span>
                  <button>
                    <i className="icon" style={{ color: "red" }}>
                      <HeartOutlined />
                    </i>
                  </button>
                </span>
              </li>
              <li>
                <span>
                  <button>
                    <i className="icon" style={{ color: "black" }}>
                      <EditOutlined fill="red" />
                    </i>
                  </button>
                </span>
              </li>
              <li>
                <span>
                  <button>
                    <i className="icon" style={{ color: "black" }}>
                      <DeleteFilled />
                    </i>
                  </button>
                </span>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
