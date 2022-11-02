import "./mailcomponent.css";

const MailComponent = () => {
  return (
    <div className="mailcontenair">
      <div className="mailTitle">
        <h1> Save time ,Save money</h1>
        <h2>sign up and we'll send the best deal to you </h2>
        <div className="mailInput">
          <input type="text" classname="inputText" />
          <button className="btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default MailComponent;
