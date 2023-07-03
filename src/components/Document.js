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
    <div>
      <div className="flex items-center justify-between">
        <div className="flex gap-9 items-center ">
          <div className="flex flex-col  w-full">
            <span>inv</span>
            <span>Распечатана: {getCurrentDate(".")}</span>
            <span>Накладная (перевозочный документ)</span>
          </div>
          <div className="flex flex-col">
            {/* <h1 className=" text-4xl font-bold whitespace-nowrap">
              28-6821-9409
            </h1> */}
            <input
              type="text"
              disabled={disabled}
              className=" outline-none text-4xl font-bold whitespace-nowrap w-[300px]"
              style={{ lineHeight: "0px" }}
              value={data?.barcode}
              onChange={(e) => setData({ ...data, barcode: e.target.value })}
            />
          </div>
        </div>
        <div className="flex items-center gap-9">
          <div>
            <Barcode value={data?.barcode} width={1.5} height={50} />
          </div>
          <div className="flex flex-col w-[200px]">
            <img src={logo} alt="pony-express-logo" className=" " />
          </div>
        </div>
      </div>
      <div className="flex mt-4">
        <div className="w-[100%]">
          <div
            className="flex w-[50%] "
            style={{
              borderTop: "2px solid #148B5A",
              borderBottom: "2px solid #148B5A",
            }}
          >
            <div
              className="  w-[300px] h-[50px] flex flex-col"
              style={{
                borderRight: "1px solid #148B5A",
                borderLeft: "2px solid #148B5A",
              }}
            >
              <span className="text-[#148B5A] text-sm pl-2 w-full">Дата</span>
              <input
                type="date"
                disabled={disabled}
                className="w-[142px] pl-3 outline-none text-xl"
                value={data.date}
                onChange={(e) => {
                  console.log(e.target.value);
                  setData({ ...data, date: e.target.value });
                }}
              />
            </div>

            <div
              className=" w-[300px] h-[50px]"
              style={{
                borderRight: "1px solid #148B5A",
                borderLeft: "1px solid #148B5A",
              }}
            >
              <span className="text-[#148B5A] text-sm pl-2">Время</span>
              <input
                type="text"
                disabled={disabled}
                className="pl-5  w-[142px] outline-none text-xl"
                value={data?.time}
                style={{ lineHeight: "0px" }}
                onChange={(e) => setData({ ...data, time: e.target.value })}
              />
            </div>
            <div
              className="  w-[300px] h-[50px]"
              style={{
                borderRight: "1px solid #148B5A",
                borderLeft: "1px solid #148B5A",
              }}
            >
              <span className="text-[#148B5A] text-sm pl-2">ORG</span>
              <input
                type="text"
                disabled={disabled}
                className="pl-5 w-[142px] outline-none text-xl"
                value={data?.ORG}
                style={{ lineHeight: "0px" }}
                onChange={(e) => setData({ ...data, ORG: e.target.value })}
              />
            </div>
            <div
              className=" w-[300px] h-[50px]"
              style={{
                borderRight: "2px solid #148B5A",
                borderLeft: "1px solid #148B5A",
              }}
            >
              <span className="text-[#148B5A] text-sm pl-2">DEST</span>
              <input
                type="text"
                disabled={disabled}
                className="pl-5 w-[142px] outline-none text-xl"
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
                  className="w-[300px] h-[50px] bg-[#148B5A] flex justify-center items-center"
                  style={{
                    borderRight: "1px solid #148B5A",
                    borderLeft: "2px solid #148B5A",
                  }}
                >
                  <span className="text-white text-[18px] font-bold pl-2 ml-[-8px]">
                    ОТПРАВИТЕЛЬ
                  </span>
                </div>

                <div
                  className="  w-[300px] h-[50px]"
                  style={{
                    borderRight: "1px solid #148B5A",
                    borderLeft: "1px solid #148B5A",
                  }}
                >
                  <span className="text-[#148B5A] text-sm pl-2">Код</span>
                  <input
                    disabled={disabled}
                    type="text"
                    className="pl-5 w-[142px] outline-none text-xl"
                    style={{ lineHeight: "0px" }}
                    value={data?.code}
                    onChange={(e) => setData({ ...data, code: e.target.value })}
                  />
                </div>

                <div
                  className="  w-[600px] h-[50px]"
                  style={{
                    borderRight: "2px solid #148B5A",
                    borderLeft: "1px solid #148B5A",
                  }}
                >
                  <span className="text-[#148B5A] text-sm pl-2">Ф.И.О.</span>{" "}
                  <br />
                  <input
                    disabled={disabled}
                    type="text"
                    className="pl-5 w-full outline-none text-xl"
                    style={{ lineHeight: "0px" }}
                    value={data?.fullName}
                    onChange={(e) =>
                      setData({ ...data, fullName: e.target.value })
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
                  className="  w-[600px] h-[30px] flex items-center"
                  style={{
                    borderRight: "2px solid #148B5A",
                    borderLeft: "1px solid #148B5A",
                  }}
                >
                  <span className="text-[#148B5A] text-sm pl-2">Компания</span>
                  <input
                    type="text"
                    disabled={disabled}
                    className="pl-5 w-full outline-none text-xl"
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
                className="  w-[200px] h-[50px]"
                style={{
                  borderLeft: "2px solid #148B5A",
                }}
              >
                <span className="text-[#148B5A] text-sm pl-2">Индекс</span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-5 w-full outline-none text-xl"
                  style={{ lineHeight: "0px" }}
                  value={data?.index}
                  onChange={(e) => setData({ ...data, index: e.target.value })}
                />
              </div>

              <div
                className=" w-[400px] h-[50px]"
                style={{
                  borderRight: "2px solid #148B5A",
                }}
              >
                <span className="text-[#148B5A] text-sm pl-2">Телефон</span>
                <span className="text-[#148B5A] text-sm pl-2">
                  (50 символ.)
                </span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-5 w-full outline-none text-xl"
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
                className="  w-[600px] h-[50px]"
                style={{
                  borderLeft: "2px solid #148B5A",
                  borderRight: "2px solid #148B5A",
                }}
              >
                <span className=" text-sm pl-2 text-[#148B5A]">Адрес</span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-5 w-full outline-none text-xl"
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
                className="  w-[600px] h-[30px] flex items-center"
                style={{
                  borderLeft: "2px solid #148B5A",
                  borderRight: "2px solid #148B5A",
                }}
              >
                <span className=" text-sm pl-2 text-[#148B5A]">Улица</span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-5 w-full outline-none text-xl"
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
                className="  w-[600px] h-[70px] gap-3 flex items-center"
                style={{
                  borderLeft: "2px solid #148B5A",
                  borderRight: "2px solid #148B5A",
                }}
              >
                <span
                  className=" text-sm pl-2 text-[#148B5A] w-[200px]"
                  style={{ lineHeight: "15px" }}
                >
                  Примечание <br /> отправител <br /> (150 символ.)
                </span>
                <input
                  type="text"
                  disabled={disabled}
                  className=" w-full outline-none text-xl"
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
                  className="w-[300px] h-[50px] bg-[#148B5A] flex justify-center items-center"
                  style={{
                    borderRight: "1px solid #148B5A",
                    borderLeft: "2px solid #148B5A",
                  }}
                >
                  <span className="text-white text-[18px] font-bold pl-2 ml-[-8px]">
                    ПОЛУЧАТЕЛЬ
                  </span>
                </div>

                <div
                  className="  w-[300px] h-[50px]"
                  style={{
                    borderRight: "1px solid #148B5A",
                    borderLeft: "1px solid #148B5A",
                  }}
                >
                  <span className="text-[#148B5A] text-sm pl-2">Код</span>
                  <input
                    type="text"
                    disabled={disabled}
                    className="pl-5 w-full outline-none text-xl"
                    style={{ lineHeight: "0px" }}
                    value={data?.recipientCode}
                    onChange={(e) =>
                      setData({ ...data, recipientCode: e.target.value })
                    }
                  />
                </div>

                <div
                  className="  w-[600px] h-[50px]"
                  style={{
                    borderRight: "2px solid #148B5A",
                    borderLeft: "1px solid #148B5A",
                  }}
                >
                  <span className="text-[#148B5A] text-sm pl-2">Ф.И.О.</span>
                  <input
                    type="text"
                    disabled={disabled}
                    className="pl-5 w-full outline-none text-xl"
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
                  className="flex items-center  w-[600px] h-[30px]"
                  style={{
                    borderRight: "2px solid #148B5A",
                    borderLeft: "1px solid #148B5A",
                  }}
                >
                  <span className="text-[#148B5A] text-sm pl-2">Компания</span>
                  <input
                    type="text"
                    disabled={disabled}
                    className="pl-5 w-full outline-none text-xl"
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
                className="  w-[200px] h-[50px]"
                style={{
                  borderLeft: "2px solid #148B5A",
                }}
              >
                <span className="text-[#148B5A] text-sm pl-2">Индекс</span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-5 w-full outline-none text-xl"
                  style={{ lineHeight: "0px" }}
                  value={data?.recipientIndex}
                  onChange={(e) =>
                    setData({ ...data, recipientIndex: e.target.value })
                  }
                />
              </div>

              <div
                className=" w-[400px] h-[50px]"
                style={{
                  borderRight: "2px solid #148B5A",
                }}
              >
                <span className="text-[#148B5A] text-sm pl-2">Телефон</span>
                <span className="text-[#148B5A] text-sm pl-2">
                  (50 символ.)
                </span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-5 w-full outline-none text-xl"
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
                className="  w-[600px] h-[50px]"
                style={{
                  borderLeft: "2px solid #148B5A",
                  borderRight: "2px solid #148B5A",
                }}
              >
                <span className=" text-sm pl-2 text-[#148B5A] ">Адрес</span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-5 w-full outline-none text-xl"
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
                className="   w-[600px] h-[30px] flex items-center"
                style={{
                  borderLeft: "2px solid #148B5A",
                  borderRight: "2px solid #148B5A",
                }}
              >
                <span className=" text-sm pl-2 text-[#148B5A]">Улица</span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-5 w-full outline-none text-xl"
                  style={{ lineHeight: "0px" }}
                  value={data?.recipientAdress}
                  onChange={(e) =>
                    setData({ ...data, recipientAdress: e.target.value })
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
                  className="w-[300px] h-[50px] bg-[#148B5A] flex justify-center items-center"
                  style={{
                    borderRight: "1px solid #148B5A",
                    borderLeft: "2px solid #148B5A",
                  }}
                >
                  <span className="text-white text-[18px] font-bold pl-2 ml-[-8px]">
                    ОПИСАНИЕ
                  </span>
                </div>

                <div
                  className="  w-[300px] h-[50px] flex  "
                  style={{
                    borderRight: "1px solid #148B5A",
                    borderLeft: "1px solid #148B5A",
                  }}
                >
                  <div className=" pl-4 flex items-center">
                    <input
                      disabled={disabled}
                      type="checkbox"
                      className="w-[50px] input-checkbox mt-3"
                      checked={data?.documentsOnly}
                      onChange={(e) => {
                        setData({ ...data, documentsOnly: e.target.checked });
                      }}
                    />
                    <span
                      className="text-[#148B5A] text-sm pl-2"
                      style={{ lineHeight: "15px" }}
                    >
                      Только документы
                    </span>
                  </div>
                </div>

                <div
                  className="  w-[600px] h-[50px] flex  "
                  style={{
                    borderRight: "2px solid #148B5A",
                    borderLeft: "1px solid #148B5A",
                  }}
                >
                  <div className=" pl-4 flex items-center">
                    <input
                      type="checkbox"
                      disabled={disabled}
                      className="w-[50px] input-checkbox mt-3"
                      checked={data?.dangerousGoods}
                      onChange={(e) => {
                        setData({ ...data, dangerousGoods: e.target.checked });
                      }}
                    />
                    <span className="text-[#148B5A] text-sm pl-2">
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
                  className="  w-[600px] h-[70px] flex items-center"
                  style={{
                    borderLeft: "2px solid #148B5A",
                    borderRight: "2px solid #148B5A",
                  }}
                >
                  <span
                    className=" text-sm pl-2 text-[#148B5A] w-[120px]"
                    style={{ lineHeight: "15px" }}
                  >
                    Описание <br /> вложения <br /> (150 символ.)
                  </span>

                  <input
                    type="text"
                    disabled={disabled}
                    className="pl-5 w-full outline-none text-xl"
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
                className="  w-[300px] h-[50px]"
                style={{
                  borderRight: "1px solid #148B5A",
                  borderLeft: "2px solid #148B5A",
                }}
              >
                <span className="text-[#148B5A] text-sm pl-2">Кол-во мест</span>

                <input
                  type="text"
                  disabled={disabled}
                  className="pl-5 w-full outline-none text-xl"
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
                className=" w-[300px] h-[50px]"
                style={{
                  borderRight: "1px solid #148B5A",
                  borderLeft: "1px solid #148B5A",
                }}
              >
                <span className="text-[#148B5A] text-sm pl-2">Вес (кг)</span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-5 w-full outline-none text-xl"
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
                className="  w-[300px] h-[50px]"
                style={{
                  borderRight: "1px solid #148B5A",
                  borderLeft: "1px solid #148B5A",
                }}
              >
                <span className="text-[#148B5A] text-sm pl-2">
                  Контр. взвеш. (кг)
                </span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-5 w-full outline-none text-xl"
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
                className=" w-[300px] h-[50px]"
                style={{
                  borderRight: "2px solid #148B5A",
                  borderLeft: "1px solid #148B5A",
                }}
              >
                <span className="text-[#148B5A] text-sm pl-2">. вес (кг)</span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-5 w-full outline-none text-xl"
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
                className="  w-[300px] h-[50px]"
                style={{
                  borderLeft: "2px solid #148B5A",
                }}
              >
                <span className="text-[#148B5A] text-sm pl-2">
                  Место, габариты (см.)
                </span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-5 w-full outline-none text-xl"
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

              <div className="  w-[300px] h-[50px]" style={{}}>
                <span className="text-[#148B5A] text-sm pl-2">
                  Место, габариты (см.)
                </span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-5 w-full outline-none text-xl"
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
                className=" w-[300px] h-[50px]"
                style={{
                  borderRight: "2px solid #148B5A",
                }}
              >
                <span className="text-[#148B5A] text-sm pl-2">
                  Место, габариты (см.)
                </span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-5 w-full outline-none text-xl"
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
                className="  w-[300px] h-[50px]"
                style={{
                  borderRight: "1px solid #148B5A",
                  borderLeft: "2px solid #148B5A",
                }}
              >
                <span className="text-[#148B5A] text-sm pl-2">Услуга</span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-5 w-full outline-none text-xl"
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
                className=" w-[300px] h-[50px]"
                style={{
                  borderRight: "2px solid #148B5A",
                  borderLeft: "1px solid #148B5A",
                }}
              >
                <span className="text-[#148B5A] text-sm pl-2">
                  Специальные инструкции
                </span>
                <input
                  type="text"
                  disabled={disabled}
                  className="pl-5 w-full outline-none text-xl"
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
        <img className="rotate-45 ml-[-30px]" src={img} alt="" />
        <div className="w-full border-b-2 border-[#148B5A] border-dashed"></div>
      </div>
    </div>
  );
}
