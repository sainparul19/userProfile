import React, { useContext, useEffect } from "react";
import "./Page.css";
import { ApiContext } from "./Context";
import { MailOutlined } from "@ant-design/icons";
import { PhoneOutlined } from "@ant-design/icons";
import { GlobalOutlined } from "@ant-design/icons";
import { HeartFilled } from "@ant-design/icons";
import { HeartOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import { DeleteFilled } from "@ant-design/icons";

const Page = () => {
  const [blog, setBlog] = useContext(ApiContext);

  useEffect(() => {
    console.log(blog);
  }, [blog]);

  function postLike(id) {
    const temp = [...blog];
    temp.forEach((item) => {
      if (item.id == id) {
        item.like = !item.like;
      }
    });
    setBlog(temp);
  }

  function deleteUser(id) {
    const temp = [...blog];
    setBlog(temp.filter((item) => item.id !== id));
  }

  return (
    <div className="container">
      {blog.map((res) => (
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
                  <button onClick={() => postLike(res.id)}>
                    <i className="heartIcon" style={{ color: "red" }}>
                      {res.like ? <HeartFilled /> : <HeartOutlined />}
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
                  <button onClick={() => deleteUser(res.id)}>
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
