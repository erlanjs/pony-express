// Expternal dependencies
import Barcode from "react-barcode";
import React from "react";

// local  dependencies
import logo from "../assets/images/pony-express-logo.png";

export default function Document() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex gap-9 items-center ">
          <div className="flex flex-col  w-full">
            <span>inv</span>
            <span>Распечатана: 29.06.2023 13:42:58</span>
            <span>Накладная (перевозочный документ)</span>
          </div>
          <div className="flex flex-col">
            <h1 className=" text-4xl font-bold whitespace-nowrap">
              28-6821-9409
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-9">
          <div>
            <Barcode value="28-6821-9409" width={1.5} height={50} />
          </div>
          <div className="flex flex-col w-[200px]">
            <img src={logo} alt="pony-express-logo" className=" " />
          </div>
        </div>
      </div>
      <div>
        <div>
          <div
            className="flex w-[50%]"
            style={{
              borderTop: "3px solid green",
              borderBottom: "3px solid green",
            }}
          >
            <div
              className="  w-[300px] h-[50px]"
              style={{
                borderRight: "1.5px solid green",
                borderLeft: "3px solid green",
              }}
            >
              <span className="text-[#148B5A] text-sm pl-2">Дата</span>
            </div>

            <div
              className=" w-[300px] h-[50px]"
              style={{
                borderRight: "1.5px solid green",
                borderLeft: "1.5px solid green",
              }}
            >
              <span className="text-[#148B5A] text-sm pl-2">Время</span>
            </div>
            <div
              className="  w-[300px] h-[50px]"
              style={{
                borderRight: "1.5px solid green",
                borderLeft: "1.5px solid green",
              }}
            >
              <span className="text-[#148B5A] text-sm pl-2">ORG</span>
            </div>
            <div
              className=" w-[300px] h-[50px]"
              style={{
                borderRight: "3px solid green",
                borderLeft: "1.5px solid green",
              }}
            >
              <span className="text-[#148B5A] text-sm pl-2">DEST</span>
            </div>
          </div>

          <div className="">
            <div className=" mt-2">
              <div
                className="flex w-[50%]"
                style={{
                  borderTop: "3px solid green",
                  borderBottom: "1.5px solid green",
                }}
              >
                <div
                  className="w-[300px] h-[50px] bg-[#148B5A] flex justify-center items-center"
                  style={{
                    borderRight: "1.5px solid green",
                    borderLeft: "3px solid green",
                  }}
                >
                  <span className="text-white text-[18px] font-bold pl-2 ml-[-8px]">
                    ОТПРАВИТЕЛЬ
                  </span>
                </div>

                <div
                  className="  w-[300px] h-[50px]"
                  style={{
                    borderRight: "1.5px solid green",
                    borderLeft: "1.5px solid green",
                  }}
                >
                  <span className="text-[#148B5A] text-sm pl-2">Код</span>
                </div>

                <div
                  className="  w-[600px] h-[50px]"
                  style={{
                    borderRight: "3px solid green",
                    borderLeft: "1.5px solid green",
                  }}
                >
                  <span className="text-[#148B5A] text-sm pl-2">Ф.И.О.</span>
                </div>
              </div>
              <div
                className="flex w-[50%]"
                style={{
                  borderTop: ".5px solid green",
                  borderBottom: "3px solid green",
                }}
              >
                <div
                  className="  w-[600px] h-[30px]"
                  style={{
                    borderRight: "3px solid green",
                    borderLeft: "1.5px solid green",
                  }}
                >
                  <span className="text-[#148B5A] text-sm pl-2">Компания</span>
                </div>
              </div>
            </div>

            <div className="flex w-[50%] " style={{}}>
              <div
                className="  w-[200px] h-[50px]"
                style={{
                  borderLeft: "3px solid green",
                }}
              >
                <span className="text-[#148B5A] text-sm pl-2">Индекс</span>
              </div>

              <div
                className=" w-[400px] h-[50px]"
                style={{
                  borderRight: "3px solid green",
                }}
              >
                <span className="text-[#148B5A] text-sm pl-2">Телефон</span>
                <span className="text-[#148B5A] text-sm pl-2">
                  (50 символ.)
                </span>
              </div>
            </div>

            <div
              className="flex w-[50%] "
              style={{
                borderTop: "3px solid green",
                borderBottom: "3px solid green",
              }}
            >
              <div
                className="  w-[300px] h-[50px]"
                style={{
                  borderLeft: "3px solid green",
                }}
              >
                <span className=" text-sm pl-2">Бишкек</span>
              </div>

              <div
                className=" w-[300px] h-[50px]"
                style={{
                  borderRight: "3px solid green",
                }}
              >
                <span className=" text-sm pl-2">Киргизия</span>
              </div>
            </div>

            <div className="flex w-[50%] " style={{}}>
              <div
                className="  w-[600px] h-[30px] flex items-center"
                style={{
                  borderLeft: "3px solid green",
                  borderRight: "3px solid green",
                }}
              >
                <span className=" text-sm pl-2">УЛ. ШЕВЧЕНКО Д. 99Б</span>
              </div>
            </div>

            <div
              className="flex w-[50%] "
              style={{
                borderTop: "3px solid green",
                borderBottom: "3px solid green",
              }}
            >
              <div
                className="  w-[600px] h-[70px] flex items-center"
                style={{
                  borderLeft: "3px solid green",
                  borderRight: "3px solid green",
                }}
              >
                <span
                  className=" text-sm pl-2 text-[#148B5A]"
                  style={{ lineHeight: "15px" }}
                >
                  Примечание <br /> отправител <br /> (150 символ.)
                </span>
              </div>
            </div>
          </div>

          <div className="">
            <div className=" mt-2">
              <div
                className="flex w-[50%]"
                style={{
                  borderTop: "3px solid green",
                  borderBottom: "1.5px solid green",
                }}
              >
                <div
                  className="w-[300px] h-[50px] bg-[#148B5A] flex justify-center items-center"
                  style={{
                    borderRight: "1.5px solid green",
                    borderLeft: "3px solid green",
                  }}
                >
                  <span className="text-white text-[18px] font-bold pl-2 ml-[-8px]">
                    ПОЛУЧАТЕЛЬ
                  </span>
                </div>

                <div
                  className="  w-[300px] h-[50px]"
                  style={{
                    borderRight: "1.5px solid green",
                    borderLeft: "1.5px solid green",
                  }}
                >
                  <span className="text-[#148B5A] text-sm pl-2">Код</span>
                </div>

                <div
                  className="  w-[600px] h-[50px]"
                  style={{
                    borderRight: "3px solid green",
                    borderLeft: "1.5px solid green",
                  }}
                >
                  <span className="text-[#148B5A] text-sm pl-2">Ф.И.О.</span>
                </div>
              </div>
              <div
                className="flex w-[50%]"
                style={{
                  borderTop: ".5px solid green",
                  borderBottom: "3px solid green",
                }}
              >
                <div
                  className="  w-[600px] h-[30px]"
                  style={{
                    borderRight: "3px solid green",
                    borderLeft: "1.5px solid green",
                  }}
                >
                  <span className="text-[#148B5A] text-sm pl-2">Компания</span>
                </div>
              </div>
            </div>

            <div className="flex w-[50%] " style={{}}>
              <div
                className="  w-[200px] h-[50px]"
                style={{
                  borderLeft: "3px solid green",
                }}
              >
                <span className="text-[#148B5A] text-sm pl-2">Индекс</span>
              </div>

              <div
                className=" w-[400px] h-[50px]"
                style={{
                  borderRight: "3px solid green",
                }}
              >
                <span className="text-[#148B5A] text-sm pl-2">Телефон</span>
                <span className="text-[#148B5A] text-sm pl-2">
                  (50 символ.)
                </span>
              </div>
            </div>

            <div
              className="flex w-[50%] "
              style={{
                borderTop: "3px solid green",
                borderBottom: "3px solid green",
              }}
            >
              <div
                className="  w-[300px] h-[50px]"
                style={{
                  borderLeft: "3px solid green",
                }}
              >
                <span className=" text-sm pl-2">Бишкек</span>
              </div>

              <div
                className=" w-[300px] h-[50px]"
                style={{
                  borderRight: "3px solid green",
                }}
              >
                <span className=" text-sm pl-2">Киргизия</span>
              </div>
            </div>

            <div
              className="flex w-[50%] "
              style={{
                borderBottom: "3px solid green",
              }}
            >
              <div
                className="  w-[600px] h-[30px] flex items-center"
                style={{
                  borderLeft: "3px solid green",
                  borderRight: "3px solid green",
                }}
              >
                <span className=" text-sm pl-2">УЛ. ШЕВЧЕНКО Д. 99Б</span>
              </div>
            </div>
          </div>

          <div className="">
            <div className=" mt-2">
              <div
                className="flex w-[50%]"
                style={{
                  borderTop: "3px solid green",
                  borderBottom: "1.5px solid green",
                }}
              >
                <div
                  className="w-[300px] h-[50px] bg-[#148B5A] flex justify-center items-center"
                  style={{
                    borderRight: "1.5px solid green",
                    borderLeft: "3px solid green",
                  }}
                >
                  <span className="text-white text-[18px] font-bold pl-2 ml-[-8px]">
                    ОПИСАНИЕ
                  </span>
                </div>

                <div
                  className="  w-[300px] h-[50px] flex  "
                  style={{
                    borderRight: "1.5px solid green",
                    borderLeft: "1.5px solid green",
                  }}
                >
                  <div className=" pl-4 flex items-center">
                    <input
                      type="checkbox"
                      className="w-[50px] input-checkbox mt-3"
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
                    borderRight: "3px solid green",
                    borderLeft: "1.5px solid green",
                  }}
                >
                  <div className=" pl-4 flex items-center">
                    <input
                      type="checkbox"
                      className="w-[50px] input-checkbox mt-3"
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
                  borderTop: "1.5px solid green",
                  borderBottom: "3px solid green",
                }}
              >
                <div
                  className="  w-[600px] h-[70px] flex items-center"
                  style={{
                    borderLeft: "3px solid green",
                    borderRight: "3px solid green",
                  }}
                >
                  <span
                    className=" text-sm pl-2 text-[#148B5A]"
                    style={{ lineHeight: "15px" }}
                  >
                    Описание <br /> вложения <br /> (150 символ.)
                  </span>
                </div>
              </div>
            </div>

            <div
              className="flex w-[50%]"
              style={{
                borderBottom: "3px solid green",
              }}
            >
              <div
                className="  w-[300px] h-[50px]"
                style={{
                  borderRight: "1.5px solid green",
                  borderLeft: "3px solid green",
                }}
              >
                <span className="text-[#148B5A] text-sm pl-2">Кол-во мест</span>
              </div>

              <div
                className=" w-[300px] h-[50px]"
                style={{
                  borderRight: "1.5px solid green",
                  borderLeft: "1.5px solid green",
                }}
              >
                <span className="text-[#148B5A] text-sm pl-2">Вес (кг)</span>
              </div>
              <div
                className="  w-[300px] h-[50px]"
                style={{
                  borderRight: "1.5px solid green",
                  borderLeft: "1.5px solid green",
                }}
              >
                <span className="text-[#148B5A] text-sm pl-2">
                  Контр. взвеш. (кг)
                </span>
              </div>
              <div
                className=" w-[300px] h-[50px]"
                style={{
                  borderRight: "3px solid green",
                  borderLeft: "1.5px solid green",
                }}
              >
                <span className="text-[#148B5A] text-sm pl-2">
                  Объем. вес (кг)
                </span>
              </div>
            </div>

            <div
              className="flex w-[50%]"
              style={{
                borderBottom: "3px solid green",
              }}
            >
              <div
                className="  w-[300px] h-[50px]"
                style={{
                  borderLeft: "3px solid green",
                }}
              >
                <span className="text-[#148B5A] text-sm pl-2">
                  Место, габариты (см.)
                </span>
              </div>

              <div className="  w-[300px] h-[50px]" style={{}}>
                <span className="text-[#148B5A] text-sm pl-2">
                  Место, габариты (см.)
                </span>
              </div>
              <div
                className=" w-[300px] h-[50px]"
                style={{
                  borderRight: "3px solid green",
                }}
              >
                <span className="text-[#148B5A] text-sm pl-2">
                  Место, габариты (см.)
                </span>
              </div>
            </div>

            <div
              className="flex w-[50%]"
              style={{
                borderBottom: "3px solid green",
              }}
            >
              <div
                className="  w-[300px] h-[50px]"
                style={{
                  borderRight: "1.5px solid green",
                  borderLeft: "3px solid green",
                }}
              >
                <span className="text-[#148B5A] text-sm pl-2">Услуга</span>
              </div>

              <div
                className=" w-[300px] h-[50px]"
                style={{
                  borderRight: "3px solid green",
                  borderLeft: "1.5px solid green",
                }}
              >
                <span className="text-[#148B5A] text-sm pl-2">
                  Специальные инструкции
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
