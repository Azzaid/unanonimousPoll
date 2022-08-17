import React, {useRef} from "react";
import styled from 'styled-components';
import FacadeForm from "./facadeForm";
import {useDispatch, useSelector} from "react-redux";
import Image1 from "assets/images/Image1.png"
import axios from "axios";
import {userFormSubmitted} from "store/actions/user";

const StyledAdminPanelHolder = styled.div`
  max-width: 1200px;
  min-height: 100%;

  fieldset {
    margin: 10px;
    border-color: #b386a7;
    background-color: ${props => props.theme.infoCardBackgroundColor};
  }

  .formCard{
    background-color: ${props => props.theme.infoCardBackgroundColor};
    margin: 20px;
    border-radius: 5px;

    .cardHeader {
      width: 100%;
      height: 50px;
      padding: 10px 20px;
      box-sizing: border-box;
      background-color: ${props => props.theme.accentBackgroundColor};
      font-size: 25px;
      line-height: 30px;
      color: ${props => props.theme.accentTextColor};
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }

    .cardBody {
      padding: 10px 20px;
      box-sizing: border-box;
      color: ${props => props.theme.appBaseFontColor};
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-size: 20px;
      
      .ansverHolder {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
      }
    }
  }
  
  img {
    max-height: 90vh;
    max-width: 90vh;
  }
  
  .horizontalRadio {
    display: flex;
  }
  
  .buttonHolder {
    height: 70px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  /* CSS */
.button-65 {
  appearance: none;
  backface-visibility: hidden;
  background-color: #2f80ed;
  border-radius: 10px;
  border-style: none;
  box-shadow: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: Inter,-apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif;
  font-size: 15px;
  font-weight: 500;
  height: 50px;
  letter-spacing: normal;
  line-height: 1.5;
  outline: none;
  overflow: hidden;
  padding: 14px 30px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transform: translate3d(0, 0, 0);
  transition: all .3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;
}

  button {
    width: 150px;
    height: 50px;
    cursor: pointer;
    background: #6dd6d1;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 10px 25px #57aba7, 0px -10px 25px #a6fffa, inset 0px -5px 10px #57aba7, inset 0px 5px 10px #a6fffa;
    font-family: 'Damion', cursive;
    color: white;
    font-size: 20px;
    transition: 500ms;
    border: 2px solid #6dd6d1;
    animation: hueRotation 2s linear infinite;
  }

  @keyframes hueRotation {
    to {
      filter: hue-rotate(360deg);
    }
  }

  .button-65:hover {
    background-color: #1366d6;
    box-shadow: rgba(0, 0, 0, .05) 0 5px 30px, rgba(0, 0, 0, .05) 0 1px 4px;
    opacity: 1;
    transform: translateY(0);
    transition-duration: .35s;
  }

  .button-65:hover:after {
    opacity: .5;
  }

  .button-65:active {
    box-shadow: rgba(0, 0, 0, .1) 0 3px 6px 0, rgba(0, 0, 0, .1) 0 0 10px 0, rgba(0, 0, 0, .1) 0 1px 4px -1px;
    transform: translateY(2px);
    transition-duration: .35s;
  }

  .button-65:active:after {
    opacity: 1;
  }

  @media (min-width: 768px) {
    .button-65 {
      padding: 14px 22px;
      width: 176px;
    }
  }
`

const Poll = (props) => {
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();

  return (
    <StyledAdminPanelHolder>
      <div>
          <form onSubmit={(event) => {
              event.preventDefault();
              const formData = new FormData(event.target);
              const addressToSubmit = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdPPrkoI2F9TRrCjyK9LRNLLytOdQjekAAEDwHnhdpfAvL2CQ/formResponse"


              /*const anotherSubmitAddress = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc7E7AZs24OQ5EjzHXeHdfHHGZalqYetDpZ8NiDN1oqUcLbxQ/formResponse"

              const customObj = {"entry.1562589015": 234,
              "entry.848703632": 1234,
              "entry.1787163590": "Kaneshna Dasha!"}

              const customFormData = new FormData();

              Object.keys((customObj)).forEach(key => {
                  customFormData.append(key, customObj[key]);
              })*/

              formData.append("entry.1997477910", user.userId);
              formData.append("entry.649304355", user.userName);

              fetch(addressToSubmit, {
                  method: 'POST', // *GET, POST, PUT, DELETE, etc.
                  mode: 'no-cors', // no-cors, *cors, same-origin
                  redirect: 'follow', // manual, *follow, error
                  body: formData // body data type must match "Content-Type" header
              }).then(() => {
                  console.log("submit then")
                  dispatch(userFormSubmitted(2));
              }).catch(() => {
                  console.log("submit catch")
                  dispatch(userFormSubmitted(2));
              })

          }}>
              <div className={"formCard"}>
                  <div className={"cardHeader"}>
                      Жмай
                  </div>
                  <div className={"cardBody"}>
                      <div className={"ansverHolder"}>
                          <div>
                              <input type="radio" id="1_1" name="entry.39161322" value="Я котик"/>
                              <label htmlFor="1_1">я котик</label>
                          </div>

                          <div>
                              <input type="radio" id="2_2" name="entry.39161322" value="Тут тоже я котик"/>
                              <label htmlFor="2_2">Тут тоже я котик</label>
                          </div>
                      </div>
                  </div>
              </div>

              <div className={"formCard"}>
                  <div className={"cardHeader"}>
                      Сюда тоже жмай
                  </div>
                  <div className={"cardBody"}>
                      <img src={Image1}/>
                      <div className={"ansverHolder"}>
                          <div>
                              <input type="radio" id="2_1" name="entry.493417751" value="1"/>
                              <label htmlFor="2_1">1</label>
                          </div>
                          <div>
                              <input type="radio" id="2_2" name="entry.493417751" value="2"/>
                              <label htmlFor="2_2">2</label>
                          </div>
                          <div>
                              <input type="radio" id="2_3" name="entry.493417751" value="3"/>
                              <label htmlFor="2_3">3</label>
                          </div>
                          <div>
                              <input type="radio" id="2_4" name="entry.493417751" value="4"/>
                              <label htmlFor="2_4">4</label>
                          </div>
                          <div>
                              <input type="radio" id="2_5" name="entry.493417751" value="5"/>
                              <label htmlFor="2_5">5</label>
                          </div>
                      </div>
                  </div>
              </div>

              <div className={"formCard"}>
                  <div className={"cardHeader"}>
                      Шобаки
                  </div>
                  <div className={"cardBody"}>
                      <div className={"ansverHolder"}>
                          <div>
                              <input type="radio" id="3_1" name="entry.794209938" value="Люблю"/>
                              <label htmlFor="3_1">Люблю</label>
                          </div>

                          <div>
                              <input type="radio" id="3_2" name="entry.794209938" value="Тоже люблю"/>
                              <label htmlFor="3_2">Тоже люблю</label>
                          </div>
                      </div>
                  </div>
              </div>

              <div className={"formCard"}>
                  <div className={"cardHeader"}>
                      Кошки
                  </div>
                  <div className={"cardBody"}>
                      <div className={"ansverHolder"}>
                          <div>
                              <input type="radio" id="3_1" name="entry.525125654" value="Люблю"/>
                              <label htmlFor="3_1">Люблю</label>
                          </div>

                          <div>
                              <input type="radio" id="3_2" name="entry.525125654" value="Тоже люблю"/>
                              <label htmlFor="3_2">Тоже люблю</label>
                          </div>
                      </div>
                  </div>
              </div>

              <div className={"buttonHolder"}>
                  <button className={"button"}>Submit</button>
              </div>
          </form>
      </div>
    </StyledAdminPanelHolder>
  )
}

export default Poll