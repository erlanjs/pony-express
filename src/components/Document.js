// Expternal dependencies
import Barcode from "react-barcode";
import React from "react";

// local  dependencies
import logo from "../assets/images/pony-express-logo.png";
import Task from "./Task";
import { getCurrentDate } from "../helpers/getCurrentTime";

export default function Document({ data, setData, type, disabled }) {
  const img =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACxElEQVR4nO2ZXYiNQRjHf5ujZK1SW1zInVwoyVfWnr0g5d6S8pULNy4kV5QtZXOlFNshFwrhrLizJ5FcSApJUtrkQtZBaX3cLKt1Xk3N0ZwxM2feF+e8T/nV09s575yZ578z88zzzMJ/MrEIOAk8Aa4ilP3AdyDR9gWB7DIE1O0xwpgDjDuEDCOMfQ4RygYRxm2PkJ0IY9wjpAdBzPOIUNaNINZ6RHxEGHs8Qh4gjBMeIRcRxk2PkMMI47VHyFYE0QnUPEJWIojlgdCr0hYxbPOI+IAwBj1C7iOMax4h51vlQJ9Osau6EKrqz+r7NDzzCBnI4FM3sBrYARwBLgOPgE/AHbtxATgd2KDKTgHTIgZWfX3z9LEl4GyPx9mQT+oP3UAzEXUrRQhZGPj9Mt1mL1COdDYJmOrjF33Wy+s61nfq54jxrhaxzDYFBp6t2/yJ84nhS0M5MGyJcDESKFMXANuBM8DzwMDvItL7JIWpXK6BqvFyhUfIKqPNe2A3cAF4FRhoDVA0Pt9tkt4nkfYDOAZ02E5OGo26PEK6MgxYtJbt2SbpfdLEpoAbQK/Hx9QzktUONknvE8O+Ak/1Rd5RHe3m0oSy0YHaCy4qf0FIv+7rllUt3tP76wCwGVgcGeZ/w1zHdTFqBmbpZyXDEnB9r8KyYgOwFJjJP6CUIfQ91NPer+911dTP8KQnL2gRhUgxL4FDwPxAX+bSqdtxWkyvTg/G9BJRm25Un/xFV8izUO/fOoSsQxhLHCI+A9MRxoBDyBWE0aH3kC1EpS+iWO8JxaKuR+2D1bSxjMVZW1Ap/0TE2VPSoT63bExxmMYUZ23jXIriLAllsO1m1BLhwhSjDt1cMpGyFHhDTplKWZypW5ZcUk05Iyok55KyVc+4qEj4Z08xRXFW0xcTuaUUeY4MkXMKEWKG8n6y+4qzSf28lPflRB74CXQ4LuHpdPX/AAAAAElFTkSuQmCC";
  return (
    <div className="w-full mt-2">
      <div className="w-[900px] flex items-center justify-between  pr-[60px]">
        <div className=" w-full flex  items-center justify-between ">
          <div className="flex flex-col text-[10px] whitespace-nowrap  w-[250px]">
            <span>inv</span>
            <span>Распечатана: {getCurrentDate(".")}</span>
            <span>Накладная (перевозочный документ)</span>
          </div>
          <div className="flex flex-col w-[250px]">
            <input
              type="text"
              disabled={disabled}
              placeholder="Введите номер документа"
              className=" outline-none  font-bold whitespace-nowrap w-[300px]"
              style={{
                lineHeight: "0px",
                fontSize: data.barcode ? "1rem" : ".8rem",
              }}
              value={data?.barcode}
              onChange={(e) => setData({ ...data, barcode: e.target.value })}
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 w-[500px]">
          <div>
            <Barcode value={data?.barcode || " "} width={0.8} height={40} />
          </div>
          <img src={logo} alt="pony-express-logo " className="w-[100px] " />
        </div>
      </div>

      <div className="flex ">
        <div className="w-[100%]">
          <div
            className="flex w-[50%] "
            style={{
              borderTop: "2px solid #148B5A",
              borderBottom: "2px solid #148B5A",
            }}
          >
            <div
              className="flex flex-col w-[125px] h-[25px] flex flex-col"
              style={{
                borderRight: "1px solid #148B5A",
                borderLeft: "2px solid #148B5A",
              }}
            >
              <span className="text-[#148B5A] text-[7px] pl-1 w-full">
                Дата
              </span>
              <input
                type="date"
                disabled={disabled}
                className="w-full pl-1 outline-none text-[11px]"
                value={data.date}
                onChange={(e) => {
                  console.log(e.target.value);
                  setData({ ...data, date: e.target.value });
                }}
              />
            </div>

            <div
              className="flex flex-col w-[150px] h-[25px]"
              style={{
                borderRight: "1px solid #148B5A",
                borderLeft: "1px solid #148B5A",
              }}
            >
              <span
                className="text-[#148B5A] text-[7px] pl-1"
                style={{ lineHeight: "12px" }}
              >
                Время
              </span>
              <input
                type="text"
                disabled={disabled}
                className="pl-3  w-[112px] outline-none text-[11px]"
                value={data?.time}
                style={{ lineHeight: "0px" }}
                onChange={(e) => setData({ ...data, time: e.target.value })}
              />
            </div>
            <div
              className=" flex flex-col w-[120px] h-[25px]"
              style={{
                borderRight: "1px solid #148B5A",
                borderLeft: "1px solid #148B5A",
              }}
            >
              <span
                className="text-[#148B5A] text-[7px] pl-1"
                style={{ lineHeight: "12px" }}
              >
                ORG
              </span>
              <input
                type="text"
                disabled={disabled}
                className="pl-3 w-[102px] outline-none text-[11px]"
                value={data?.ORG}
                style={{ lineHeight: "0px" }}
                onChange={(e) => setData({ ...data, ORG: e.target.value })}
              />
            </div>
            <div
              className="flex flex-col w-[120px] h-[25px]"
              style={{
                borderRight: "2px solid #148B5A",
                borderLeft: "1px solid #148B5A",
              }}
            >
              <span
                className="text-[#148B5A] text-[7px] pl-1"
                style={{ lineHeight: "12px" }}
              >
                DEST
              </span>
              <input
                type="text"
                disabled={disabled}
                className="pl-3 w-full outline-none text-[11px]"
                style={{ lineHeight: "0px" }}
                value={data?.DEST}
                onChange={(e) => setData({ ...data, DEST: e.target.value })}
              />
            </div>
          </div>

          <div className="">
            <div className=" mt-2">
              <div
                className="flex w-[50%]"
                style={{
                  borderTop: "2px solid #148B5A",
                  borderBottom: "1px solid #148B5A",
                }}
              >
                <div
                  className="w-[325px] h-[25px] bg-[#148B5A] flex justify-center items-center"
                  style={{
                    borderRight: "1px solid #148B5A",
                    borderLeft: "2px solid #148B5A",
                  }}
                >
                  <span className="text-white text-[9px] font-bold pl-2 ml-[-8px]">
                    ОТПРАВИТЕЛЬ
                  </span>
                </div>

                <div
                  className="flex flex-col  w-[200px] h-[25px]"
                  style={{
                    borderRight: "1px solid #148B5A",
                    borderLeft: "1px solid #148B5A",
                  }}
                >
                  <span className="text-[#148B5A]  text-[7px] pl-1">Код</span>
                  <input
                    disabled={disabled}
                    type="text"
                    className="pl-3 w-[142px] outline-none text-[11px]"
                    style={{ lineHeight: "0px" }}
                    value={data?.code}
                    onChange={(e) => setData({ ...data, code: e.target.value })}
                  />
                </div>
                <div
                  className="flex flex-col  w-[600px] h-[25px]"
                  style={{
                    borderRight: "2px solid #148B5A",
                    borderLeft: "1px solid #148B5A",
                  }}
                >
                  <span className="text-[#148B5A]  text-[7px] pl-1">
                    Ф.И.О.
                  </span>
                  <input
                    disabled={disabled}
                    type="text"
                    className="pl-3 w-[142px] outline-none text-[11px]"
                    style={{ lineHeight: "0px" }}
                    value={data?.fullName}
                    onChange={(e) =>
                      setData({ ...data, fullName: e.target.value })
                    }
                  />
                </div>

                {/* <div
                  className="flex flex-col  w-[600px] h-[40px]"
                  style={{
                    borderRight: "2px solid #148B5A",
                    borderLeft: "1px solid #148B5A",
                    borderBottom: "1px solid #148B5A",
                  }}
                >
                  <span className="text-[#148B5A] text-[7px] pl-2">Ф.И.О.</span>{" "}
                  <br />
                  <input
                    disabled={disabled}
                    type="text"
                    className="pl-5 w-full outline-none text-[11px]"
                    style={{ lineHeight: "0px" }}
                    value={data?.fullName}
                    onChange={(e) =>
                      setData({ ...data, fullName: e.target.value })
                    }
                  />
                </div> */}
              </div>
              <div
                className="flex w-[50%]"
                style={{
                  borderTop: ".5px solid #148B5A",
                  borderBottom: "2px solid #148B5A",
                }}
              >
                <div
                  className="  w-[600px] h-[15px] flex items-center"
                  style={{
                    borderRight: "2px solid #148B5A",
                    borderLeft: "1px solid #148B5A",
                  }}
                >
                  <span className="text-[#148B5A] text-[7px] pl-2">
                    Компания
                  </span>
                  <input
                    type="text"
                    disabled={disabled}
                    className="pl-5 w-full outline-none text-[11px]"
                    style={{ lineHeight: "0px" }}
                    value={data?.company}
                    onChange={(e) =>
                      setData({ ...data, company: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="flex w-[50%] " style={{}}>
              <div
                className="  w-[200px] h-[100%] flex flex-col"
                style={{
                  borderLeft: "2px solid #148B5A",
                }}
              >
                <span
                  className="text-[#148B5A] text-[7px] pl-1"
                  style={{ lineHeight: "15px" }}
                >
                  Индекс
                </span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-5 w-full outline-none text-[11px]"
                  style={{ lineHeight: "0px" }}
                  value={data?.index}
                  onChange={(e) => setData({ ...data, index: e.target.value })}
                />
              </div>

              <div
                className=" w-[400px] h-[25px] flex flex-col "
                style={{
                  borderRight: "2px solid #148B5A",
                }}
              >
                <span
                  className="text-[#148B5A] text-[7px] pl-1"
                  style={{ lineHeight: "15px" }}
                >
                  Телефон (50 символ.)
                </span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-5 w-full outline-none text-[11px]"
                  style={{ lineHeight: "0px" }}
                  value={data?.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                />
              </div>
            </div>

            <div
              className="flex w-[50%] "
              style={{
                borderTop: "2px solid #148B5A",
                borderBottom: "2px solid #148B5A",
              }}
            >
              <div
                className="  w-[600px] h-[28px] flex flex-col"
                style={{
                  borderLeft: "2px solid #148B5A",
                  borderRight: "2px solid #148B5A",
                }}
              >
                <span
                  className=" text-[7px] pl-1 text-[#148B5A]"
                  style={{ lineHeight: "15px" }}
                >
                  Адрес
                </span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-3 w-full outline-none text-[11px]"
                  style={{ lineHeight: "0px" }}
                  value={data?.address}
                  onChange={(e) =>
                    setData({ ...data, address: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="flex w-[50%] " style={{}}>
              <div
                className="  w-[600px] h-[15px] flex items-center"
                style={{
                  borderLeft: "2px solid #148B5A",
                  borderRight: "2px solid #148B5A",
                }}
              >
                <span className=" text-[7px] pl-1 text-[#148B5A]">Улица</span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-2 w-full outline-none text-[11px]"
                  style={{ lineHeight: "0px" }}
                  value={data?.street}
                  onChange={(e) => setData({ ...data, street: e.target.value })}
                />
              </div>
            </div>

            <div
              className="flex w-[50%] "
              style={{
                borderTop: "2px solid #148B5A",
                borderBottom: "2px solid #148B5A",
              }}
            >
              <div
                className="  w-[600px] h-[30px]  flex items-center"
                style={{
                  borderLeft: "2px solid #148B5A",
                  borderRight: "2px solid #148B5A",
                }}
              >
                <span
                  className=" text-[7px] pl-2 text-[#148B5A] w-[200px]"
                  style={{ lineHeight: "10px" }}
                >
                  Примечание <br /> отправител <br /> (150 символ.)
                </span>
                <input
                  type="text"
                  disabled={disabled}
                  className="ml-[-100px] w-full outline-none text-[11px]"
                  style={{ lineHeight: "0px" }}
                  value={data?.note}
                  onChange={(e) => setData({ ...data, note: e.target.value })}
                ></input>
              </div>
            </div>
          </div>

          <div className="">
            <div className=" mt-2">
              <div
                className="flex w-[50%]"
                style={{
                  borderTop: "2px solid #148B5A",
                  borderBottom: "1px solid #148B5A",
                }}
              >
                <div
                  className="w-[260px] h-[25px] bg-[#148B5A] flex justify-center items-center"
                  style={{
                    borderRight: "1px solid #148B5A",
                    borderLeft: "2px solid #148B5A",
                  }}
                >
                  <span className="text-white text-[9px] font-bold pl-2 ml-[-8px]">
                    ПОЛУЧАТЕЛЬ
                  </span>
                </div>

                <div
                  className=" flex flex-col w-[300px] h-[25px]"
                  style={{
                    borderRight: "1px solid #148B5A",
                    borderLeft: "1px solid #148B5A",
                  }}
                >
                  <span className="text-[#148B5A] text-[7px] pl-1">Код</span>
                  <input
                    type="text"
                    disabled={disabled}
                    className="pl-2 w-full outline-none text-[11px]"
                    style={{ lineHeight: "0px" }}
                    value={data?.recipientCode}
                    onChange={(e) =>
                      setData({ ...data, recipientCode: e.target.value })
                    }
                  />
                </div>

                <div
                  className=" flex flex-col w-[478px] h-[25px]"
                  style={{
                    borderRight: "2px solid #148B5A",
                    borderLeft: "1px solid #148B5A",
                  }}
                >
                  <span className="text-[#148B5A] text-[7px] pl-1">Ф.И.О.</span>
                  <input
                    type="text"
                    disabled={disabled}
                    className="pl-3 w-full outline-none text-[11px]"
                    style={{ lineHeight: "0px" }}
                    value={data?.recipientFullName}
                    onChange={(e) =>
                      setData({ ...data, recipientFullName: e.target.value })
                    }
                  />
                </div>
              </div>
              <div
                className="flex w-[50%]"
                style={{
                  borderTop: ".5px solid #148B5A",
                  borderBottom: "2px solid #148B5A",
                }}
              >
                <div
                  className="flex items-center  w-[600px] h-[15px]"
                  style={{
                    borderRight: "2px solid #148B5A",
                    borderLeft: "2px solid #148B5A",
                  }}
                >
                  <span className="text-[#148B5A] text-[7px] pl-1">
                    Компания
                  </span>
                  <input
                    type="text"
                    disabled={disabled}
                    className="pl-5 w-full outline-none text-[11px]"
                    style={{ lineHeight: "0px" }}
                    value={data?.recipientCompany}
                    onChange={(e) =>
                      setData({ ...data, recipientCompany: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="flex w-[50%] " style={{}}>
              <div
                className="w-[200px] h-[100%] flex flex-col"
                style={{
                  borderLeft: "2px solid #148B5A",
                }}
              >
                <span
                  className="text-[#148B5A] text-[7px] pl-1"
                  style={{ lineHeight: "15px" }}
                >
                  Индекс
                </span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-3 w-full outline-none text-[11px]"
                  style={{ lineHeight: "0px" }}
                  value={data?.recipientIndex}
                  onChange={(e) =>
                    setData({ ...data, recipientIndex: e.target.value })
                  }
                />
              </div>

              <div
                className=" w-[400px] h-[100%] flex flex-col"
                style={{
                  borderRight: "2px solid #148B5A",
                }}
              >
                <span
                  className="text-[#148B5A] text-[7px] pl-1"
                  style={{ lineHeight: "15px" }}
                >
                  Телефон (50 символ.)
                </span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-3 w-full outline-none text-[11px]"
                  style={{ lineHeight: "0px" }}
                  value={data?.recipientPhone}
                  onChange={(e) =>
                    setData({ ...data, recipientPhone: e.target.value })
                  }
                />
              </div>
            </div>

            <div
              className="flex w-[50%] "
              style={{
                borderTop: "2px solid #148B5A",
                borderBottom: "2px solid #148B5A",
              }}
            >
              <div
                className="flex flex-col  w-[600px] h-[28px]"
                style={{
                  borderLeft: "2px solid #148B5A",
                  borderRight: "2px solid #148B5A",
                }}
              >
                <span className=" text-[7px] pl-1 text-[#148B5A] ">Адрес</span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-3 w-full outline-none text-[11px]"
                  style={{ lineHeight: "0px" }}
                  value={data?.recipientAdress}
                  onChange={(e) =>
                    setData({ ...data, recipientAdress: e.target.value })
                  }
                />
              </div>
            </div>

            <div
              className="flex w-[50%] "
              style={{
                borderBottom: "2px solid #148B5A",
              }}
            >
              <div
                className="   w-[600px] h-[15px] flex items-center"
                style={{
                  borderLeft: "2px solid #148B5A",
                  borderRight: "2px solid #148B5A",
                }}
              >
                <span className=" text-[7px] pl-1 text-[#148B5A]">Улица</span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-3 w-full outline-none text-[11px]"
                  style={{ lineHeight: "0px" }}
                  value={data?.recipientStreet}
                  onChange={(e) =>
                    setData({ ...data, recipientStreet: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="">
            <div className=" mt-2">
              <div
                className="flex w-[50%]"
                style={{
                  borderTop: "2px solid #148B5A",
                  borderBottom: "1px solid #148B5A",
                }}
              >
                <div
                  className="w-[300px] h-[25px] bg-[#148B5A] flex justify-center items-center"
                  style={{
                    borderRight: "1px solid #148B5A",
                    borderLeft: "2px solid #148B5A",
                  }}
                >
                  <span className="text-white text-[9px] font-bold pl-2 ml-[-8px]">
                    ОПИСАНИЕ
                  </span>
                </div>

                <div
                  className="  w-[450px] h-[25px] flex  "
                  style={{
                    borderRight: "1px solid #148B5A",
                    borderLeft: "1px solid #148B5A",
                  }}
                >
                  <div className=" pl-4 flex items-center">
                    <input
                      disabled={disabled}
                      type="checkbox"
                      className="w-[10px] input-checkbox mt-1"
                      checked={data?.documentsOnly}
                      onChange={(e) => {
                        setData({ ...data, documentsOnly: e.target.checked });
                      }}
                    />
                    <span
                      className="text-[#148B5A] text-[7px] pl-2"
                      style={{ lineHeight: "15px" }}
                    >
                      Только документы
                    </span>
                  </div>
                </div>

                <div
                  className="  w-[450px] h-[25px] flex  "
                  style={{
                    borderRight: "2px solid #148B5A",
                    borderLeft: "1px solid #148B5A",
                  }}
                >
                  <div className=" pl-4 flex items-center">
                    <input
                      type="checkbox"
                      disabled={disabled}
                      className="w-[10px] input-checkbox mt-1"
                      checked={data?.dangerousGoods}
                      onChange={(e) => {
                        setData({ ...data, dangerousGoods: e.target.checked });
                      }}
                    />
                    <span className="text-[#148B5A] text-[7px] pl-2">
                      Опасный груз
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="flex w-[50%] "
                style={{
                  borderTop: "1px solid #148B5A",
                  borderBottom: "2px solid #148B5A",
                }}
              >
                <div
                  className="  w-[600px] h-[30px] flex items-center"
                  style={{
                    borderLeft: "2px solid #148B5A",
                    borderRight: "2px solid #148B5A",
                  }}
                >
                  <span
                    className=" text-[7px] pl-2 text-[#148B5A] w-[120px] whitespace-nowrap"
                    style={{ lineHeight: "10px" }}
                  >
                    Описание <br /> вложения <br /> (150 символ.)
                  </span>

                  <input
                    type="text"
                    disabled={disabled}
                    className="pl-3 ml-[-50px] w-full outline-none text-[11px]"
                    style={{ lineHeight: "0px" }}
                    value={data?.descriptionAttachments}
                    onChange={(e) =>
                      setData({
                        ...data,
                        descriptionAttachments: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>

            <div
              className="flex w-[50%]"
              style={{
                borderBottom: "2px solid #148B5A",
              }}
            >
              <div
                className="  w-[300px] h-[25px] flex flex-col"
                style={{
                  borderRight: "1px solid #148B5A",
                  borderLeft: "2px solid #148B5A",
                }}
              >
                <span
                  className="text-[#148B5A] text-[7px] pl-1"
                  // style={{ lineHeight: "15px" }}
                >
                  Кол-во мест
                </span>

                <input
                  type="text"
                  disabled={disabled}
                  className="pl-3 w-full outline-none text-[11px]"
                  style={{ lineHeight: "0px" }}
                  value={data?.numberOfSeats}
                  onChange={(e) =>
                    setData({
                      ...data,
                      numberOfSeats: e.target.value,
                    })
                  }
                />
              </div>

              <div
                className=" w-[300px] h-[25px]  flex flex-col"
                style={{
                  borderRight: "1px solid #148B5A",
                  borderLeft: "1px solid #148B5A",
                }}
              >
                <span className="text-[#148B5A] text-[7px] pl-1">Вес (кг)</span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-3 w-full outline-none text-[11px]"
                  style={{ lineHeight: "0px" }}
                  value={data?.ves}
                  onChange={(e) =>
                    setData({
                      ...data,
                      ves: e.target.value,
                    })
                  }
                />
              </div>
              <div
                className="  w-[300px] h-[25px]  flex flex-col"
                style={{
                  borderRight: "1px solid #148B5A",
                  borderLeft: "1px solid #148B5A",
                }}
              >
                <span className="text-[#148B5A] whitespace-nowrap text-[7px] pl-1">
                  Контр. взвеш. (кг)
                </span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-3 w-full outline-none text-[11px]"
                  style={{ lineHeight: "0px" }}
                  value={data?.weighingAndControl}
                  onChange={(e) =>
                    setData({
                      ...data,
                      weighingAndControl: e.target.value,
                    })
                  }
                />
              </div>
              <div
                className=" w-[300px] h-[25px]  flex flex-col"
                style={{
                  borderRight: "2px solid #148B5A",
                  borderLeft: "1px solid #148B5A",
                }}
              >
                <span className="text-[#148B5A] text-[7px] pl-1 whitespace-nowrap">
                  Объем. вес (кг)
                </span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-3 w-full outline-none text-[11px]"
                  style={{ lineHeight: "0px" }}
                  value={data?.volume}
                  onChange={(e) =>
                    setData({
                      ...data,
                      volume: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div
              className="flex w-[50%]"
              style={{
                borderBottom: "2px solid #148B5A",
              }}
            >
              <div
                className="  w-[300px] h-[25px] flex flex-col"
                style={{
                  borderLeft: "2px solid #148B5A",
                }}
              >
                <span className="text-[#148B5A] text-[7px] pl-2 whitespace-nowrap">
                  Место, габариты (см.)
                </span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-5 w-full outline-none text-[11px]"
                  style={{ lineHeight: "0px" }}
                  value={data?.gabarite}
                  onChange={(e) =>
                    setData({
                      ...data,
                      gabarite: e.target.value,
                    })
                  }
                />
              </div>

              <div className="  w-[300px] h-[25px] flex flex-col" style={{}}>
                <span className="text-[#148B5A] text-[7px] pl-1 whitespace-nowrap">
                  Место, габариты (см.)
                </span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-3 w-full outline-none text-[11px]"
                  style={{ lineHeight: "0px" }}
                  value={data?.gabarite2}
                  onChange={(e) =>
                    setData({
                      ...data,
                      gabarite2: e.target.value,
                    })
                  }
                />
              </div>
              <div
                className=" w-[300px] h-[25px] flex flex-col"
                style={{
                  borderRight: "2px solid #148B5A",
                }}
              >
                <span className="text-[#148B5A] text-[7px] pl-2 whitespace-nowrap">
                  Место, габариты (см.)
                </span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-5 w-full outline-none text-[11px]"
                  style={{ lineHeight: "0px" }}
                  value={data?.gabarite3}
                  onChange={(e) =>
                    setData({
                      ...data,
                      gabarite3: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div
              className="flex w-[50%]"
              style={{
                borderBottom: "2px solid #148B5A",
              }}
            >
              <div
                className="  w-[300px] h-[25px] flex flex-col"
                style={{
                  borderRight: "1px solid #148B5A",
                  borderLeft: "2px solid #148B5A",
                }}
              >
                <span className="text-[#148B5A] text-[7px] pl-2">Услуга</span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-5 w-full outline-none text-[11px]"
                  style={{ lineHeight: "0px" }}
                  value={data?.service}
                  onChange={(e) =>
                    setData({
                      ...data,
                      service: e.target.value,
                    })
                  }
                />
              </div>

              <div
                className=" w-[300px] h-[25px] flex flex-col"
                style={{
                  borderRight: "2px solid #148B5A",
                  borderLeft: "1px solid #148B5A",
                }}
              >
                <span className="text-[#148B5A] text-[7px] pl-2">
                  Специальные инструкции
                </span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-5 w-full outline-none text-[11px]"
                  style={{ lineHeight: "0px" }}
                  value={data?.specialInstructions}
                  onChange={(e) =>
                    setData({
                      ...data,
                      specialInstructions: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <Task data={data} setData={setData} type={type} disabled={disabled} />
      </div>
      <div className="p-4 flex items-center border-dashed">
        <img className="rotate-45 ml-[-30px] w-[30px]" src={img} alt="" />
        <div className="w-full border-b-2 border-[#148B5A] border-dashed"></div>
      </div>
    </div>
  );
}
