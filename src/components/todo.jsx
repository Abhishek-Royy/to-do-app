import React, { useState } from "react";
import todoImg from "../images/todo1.png";
import todoImg2 from "../images/todo2.png";
import "../stylesheet/style.css";
const todo = () => {
  const [input, setinput] = useState("");
  const [items, setitems] = useState([]);

  const addItem = () => {
    if (input == "") {
      alert("Please Enter any Task..");
      return;
    }
    setitems([...items, input]);
    setinput("");
  };

  const deleteElem = (id) => {
    const updateItem = items.filter((ele, indx) => {
      return id != indx;
    });
    setitems(updateItem);
  };

  const removeAll = () => {
    setitems([]);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todoImg} alt="todologo" />
            <figcaption>
              Add Your Task Here <img src={todoImg2} alt="todo icon" />
            </figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Write Your Task.."
              value={input}
              onChange={(e) => setinput(e.target.value)}
            />
            <i
              className="ri-add-line"
              id="plus"
              title="Add icon"
              onClick={addItem}
            ></i>
          </div>

          <div className="showItems">
            {items.map((elem, index) => {
              return (
                <div className="eachItem" key={index}>
                  <h3>{elem}</h3>
                  <i
                    className="ri-delete-bin-fill"
                    title="Delete"
                    onClick={() => deleteElem(index)}
                  ></i>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button onClick={removeAll}></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default todo;
