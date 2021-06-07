import React from "react";
import './Button.css';

export default function Button({ content, func }) {
  return <button onClick={func} className="Button">{content}</button>;
}
