import React from "react";
import "./style.css";

const Tutorial = () => {
  return (
    <div className="main-tuto">
      {/* Left side section */}
      <div className="left-side-tuto">
        <div className="main-left">
          <div className="config">
            <h1>JS Confusing Parts</h1>
            <p>
              Understand this, scope, hoisting, closure, inheritance, bind,
              call, apply, prototype, event delegation, dom, timers and many
              more caveats.
            </p>
          </div>
          {/* All tuto */}
          <LoadData />
        </div>
      </div>
      {/* right side section */}
      <div className="right-side-tuto">
        <div className="traning">
          <div className="tra-price">
            <h1>Personal Training for $30</h1>
            <p>
              If you need career guide, personal interview tips, mock interview,
              Life Coaching, or anything else, you can book me for 30 min. Just
              pay $30 via paypal to Codinism (my company) and then book a time
              slot You can Book me
            </p>
          </div>
          <div className="recent-vid">
            <h1>Recent Videos</h1>
            <ul className="list-vid">
              <li>
                <a href="react">15+ tricks for dev tool</a>
              </li>
              <li>
                <a href="react">Understanding this</a>
              </li>
              <li>
                <a href="react">be expert in JS Array</a>
              </li>
              <li>
                <a href="react">How Browsers works in 4 min</a>
              </li>
            </ul>

            <div className="vid-btn">
              <button>More Videos</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

let LoadData = () => {
  let data = [
    {
      title: "Angular2 Tutorial",
      des: "If you have some idea about web development but doesnt have any clue about angular 1 or 2 or 4. This is the perfect video for you",
      det: "View Details",
    },
    {
      title: "50 Dev tool Tips",
      des: "If you have some idea about dev tool and want to become a master..this is the right video for your",
      det: "View Details",
    },
    {
      title: "scope & closure",
      des: "Understand scope, scope chain, hoisting, closure in JavaScript in the most easiest and funniest way. This is so easy even your grandma can understand.",
      det: "View Details",
    },
    {
      title: "Interview Questions",
      des: "If you want to upgrade the person shouting at you in every evening at 5.00pm, you have to be competent and pretty sharp with latest technology. The world is competitive. but dont worry, that js dude will compile the questions for you. this will make your life easier to win the next big thing.",
      det: "View Details",
    },
    {
      title: "Angular Interview Question",
      des: "A complete guideline to prepare for angular interviews. Also, you can use these questions to verify your expertise in angular.",
      det: "View Details",
    },
    {
      title: "this",
      des: "Value of this in Javascript is very confusing and very important. If you are not sure you are a master of this, you have to watch this video...",
      det: "View Details",
    },
    {
      title: "array",
      des: "Array is the mostly used Data stucture. And in Javascript it is at least 3 one of the key data structure that you have to use to master. This video will tell you 15 hidden features that witll make u expert in JavaScript array.",
      det: "View Details",
    },
    {
      title: "React Workshop for beginners",
      des: "This is once in a year opportunity for beginners. You will have the opportunity to learn React from the industry expert. You will learn React Fundamentals, React Router and everything else needed to build a professional React App all by yourself with our help.",
      det: "View Details",
    },
    {
      title: "console",
      des: "To be a decent web developer you have to know developer tool. If you want to be a better JavaScript developer, you have to master in the console tab of dev tool. there is no exception. no hanky panky...",
      det: "View Details",
    },
  ];

  return (
    <div className="all-tuto">
      {data.map((tuto) => (
        <Mydata tutoName={tuto.title} tutoDes={tuto.des} tutoBtn={tuto.det} />
      ))}
    </div>
  );
};

let Mydata = (props) => {
  return (
    <div className="singal-tuto">
      <a href="#tuto">{props.tutoName}</a>
      <p>{props.tutoDes}</p>
      <button>{props.tutoBtn}</button>
    </div>
  );
};

export default Tutorial;
