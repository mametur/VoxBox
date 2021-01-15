import React from "react";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NewComment = ({ thread }) => {
  function convert(date) {
    let datearray = date.split("T");
    let newdate = datearray[0].split("-");
    const newDatePart1 = newdate[2] + "-" + newdate[1] + "-" + newdate[0];
    const datePart2 = datearray[1].split(":");
    const newDatePart2 = datePart2[0] + " : " + datePart2[1];
    const result = newDatePart1 + " / " + newDatePart2;

    return result;
  }
  const imgStyle = {
    width: "65px",
    // marginLeft: "15px",
    cursor: "pointer",
    marginLeft: "0",
    borderRadius: '50%'
  };

  return (
    <Col xs={12} sm={10} className="comment-box">
      <div className="comment-up">
        <Link
          className="link"
          to={{
            pathname: `/profile/${thread.user.user_id}`,
            state: { post: thread },
          }}
        >
          <Image
            id="avatar"
            style={imgStyle}
            src={require(`../../assets/${thread.user.avatar}.jpg`)}
            className="avatar"
          />

          <h2 className="comment-user-name">
            {thread.user.firstName} {thread.user.lastName}
          </h2>
        </Link>
        <p>
          replied on {"\n"} {convert(thread.createdAt)}
        </p>
      </div>
      <div className="comment-text">{thread.comment_content}</div>
    </Col>
  );
};
