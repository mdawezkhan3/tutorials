import React, { useState } from "react";
import Message from "./Message";

class NotificationCenter {
  static messages = new Map();
  static events = new Map();

  static removeMesssage(key) {
    NotificationCenter.messages.delete(key);
    NotificationCenter.emit({});
  }

  static emit = (message) => {
    NotificationCenter.events.get("change")(message);
  };
  static pushMessage = (message) => {
    message.onClose = NotificationCenter.removeMesssage.bind(null, message);
    NotificationCenter.messages.set(message, message);
    NotificationCenter.emit(message);
    const timer = setTimeout(() => {
      NotificationCenter.removeMesssage(message);
      clearInterval(timer);
    }, 3000);
  };

  static getMessages = () => {
    return Array.from(NotificationCenter.messages.values());
  };

  static subscribe = (fn) => {
    NotificationCenter.events.set("change", fn);
  };
}

const Notification = (props) => {
  const { className } = props;
  const forceUpdate = useState({})[1];
  NotificationCenter.subscribe(forceUpdate);
  return (
    <div
      style={{
        width: "40vw",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        padding: 10,
        overflow: "auto"
      }}
      className={className}
    >
      <h2>Notification Center</h2>
      {NotificationCenter.getMessages().map((mes, i) => {
        return (
          <Message
            key={i.toString()}
            description={mes.description}
            message={mes.message}
            onClose={mes.onClose}
          />
        );
      })}
    </div>
  );
};

export default Notification;

export const nvNotification = {
  info: (payload) => {
    NotificationCenter.pushMessage(payload);
  }
};
