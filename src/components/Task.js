import React from "react";

const Task = ({ data, setData, type, disabled }) => {
  return (
    <div className="w-[400px]  ml-[-400px] gap-2 flex">
      <div className="w-[90%]">
        <div>
          <div className="flex justify-center items-center  bg-[#148B5A] h-[25px] ">
            <h1 className="text-center text-[7px] uppercase text-white font-bold">
              информация об оплате
            </h1>
          </div>
          <div className="flex">
            <div
              className=" w-[50%] flex flex-col h-[27px] bg-transparent border-[#148B5A]"
              style={{
                borderRight: "2px solid #148B5A",
                borderBottom: "2px solid #148B5A",
                borderTop: "2px solid #148B5A",
                borderLeft: "2px solid #148B5A",
              }}
            >
              <p className="text-[7px] mx-1 text-[#148B5A] ">
                Объявленная ценность
              </p>
              <input
                type="text"
                disabled={disabled}
                className="pl-3 w-full outline-none text-[11px]"
                style={{ lineHeight: "0px" }}
                value={data?.declaredValue}
                onChange={(e) =>
                  setData({
                    ...data,
                    declaredValue: e.target.value,
                  })
                }
              />
            </div>
            <div
              className=" w-[50%] h-[27px] flex flex-col bg-transparent border-[#148B5A]"
              style={{
                borderRight: "2px solid #148B5A",
                borderBottom: "2px solid #148B5A",
                borderTop: "2px solid #148B5A",
                borderLeft: "none",
              }}
            >
              <p className="text-[7px] mx-1 text-[#148B5A] ">Основной тариф</p>
              <input
                type="text"
                disabled={disabled}
                className="pl-5 w-full outline-none text-[11px]"
                style={{ lineHeight: "0px" }}
                value={data?.defaultTarrifs}
                onChange={(e) =>
                  setData({
                    ...data,
                    defaultTarrifs: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="flex">
            <div
              className=" flex flex-col h-[25px] w-[50%] bg-transparent border-[#148B5A]"
              style={{
                borderRight: "2px solid #148B5A",
                borderBottom: "2px solid #148B5A",
                borderTop: "",
                borderLeft: "2px solid #148B5A",
              }}
            >
              <p className="text-[7px] mx-1 text-[#148B5A] ">Оплата</p>
              <input
                type="text"
                disabled={disabled}
                className="pl-3 w-full outline-none text-[11px]"
                style={{ lineHeight: "0px" }}
                value={data?.peyment}
                onChange={(e) =>
                  setData({
                    ...data,
                    peyment: e.target.value,
                  })
                }
              />
            </div>
            <div
              className="flex flex-col h-[25px] w-[50%] bg-transparent border-[#148B5A]"
              style={{
                borderRight: "2px solid #148B5A",
                borderBottom: "2px solid #148B5A",
                borderTop: "none",
                borderLeft: "none",
              }}
            >
              <p className="text-[7px] mx-1 text-[#148B5A] ">
                Тариф за доп. услуги
              </p>
              <input
                type="text"
                disabled={disabled}
                className="pl-3 w-full outline-none text-[11px]"
                style={{ lineHeight: "0px" }}
                value={data?.tariffExtra}
                onChange={(e) =>
                  setData({
                    ...data,
                    tariffExtra: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="flex">
            <div
              className="flex flex-col h-[25px] w-[50%] bg-transparent border-[#148B5A]"
              style={{
                borderRight: "2px solid #148B5A",
                borderBottom: "2px solid #148B5A",
                borderTop: "none",
                borderLeft: "2px solid #148B5A",
              }}
            >
              <p className="text-[7px] mx-1 text-[#148B5A] ">Код плательщика</p>
              <input
                type="text"
                disabled={disabled}
                className="pl-3 w-full outline-none text-[11px]"
                style={{ lineHeight: "0px" }}
                value={data?.payerCode}
                onChange={(e) =>
                  setData({
                    ...data,
                    payerCode: e.target.value,
                  })
                }
              />
            </div>
            <div
              className="flex flex-col h-[25px] w-[50%] bg-transparent border-[#148B5A]"
              style={{
                borderRight: "2px solid #148B5A",
                borderBottom: "2px solid #148B5A",
                borderTop: "none",
                borderLeft: "none",
              }}
            >
              <p className="text-[7px] mx-1 text-[#148B5A] ">
                Сумма платежа с НДС
              </p>
              <input
                type="text"
                disabled={disabled}
                className="pl-3 w-full outline-none text-[11px]"
                style={{ lineHeight: "0px" }}
                value={data?.NDS}
                onChange={(e) =>
                  setData({
                    ...data,
                    NDS: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="flex">
            <div
              className="flex flex-col h-[25px] w-[50%] bg-transparent border-[#148B5A]"
              style={{
                borderRight: "2px solid #148B5A",
                borderBottom: "2px solid #148B5A",
                borderTop: "none",
                borderLeft: "2px solid #148B5A",
              }}
            >
              <p className="text-[7px] mx-1 text-[#148B5A]">Вид оплаты</p>
              <input
                type="text"
                disabled={disabled}
                className="pl-3 w-full outline-none text-[11px]"
                style={{ lineHeight: "0px" }}
                value={data?.typePayment}
                onChange={(e) =>
                  setData({
                    ...data,
                    typePayment: e.target.value,
                  })
                }
              />
            </div>
            <div
              className="flex flex-col h-[25px] w-[50%] bg-transparent border-[#148B5A]"
              style={{
                borderRight: "2px solid #148B5A",
                borderBottom: "2px solid #148B5A",
                borderTop: "none",
                borderLeft: "none",
              }}
            >
              <p className="text-[7px] mx-1 text-[#148B5A]">
                Телефон для уведомлений
              </p>
              <input
                type="text"
                disabled={disabled}
                className="pl-3 w-full outline-none text-[11px]"
                style={{ lineHeight: "0px" }}
                value={data?.phoneForNotification}
                onChange={(e) =>
                  setData({
                    ...data,
                    phoneForNotification: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className="mt-1  w-full" style={{ border: "2px solid #148B5A" }}>
          <p className="text-[#148B5A] mx-2 text-[7px]">
            Дополнительные услуги:
          </p>
          <div className="inputs w-full">
            <div className="w-full py-1 flex gap-2 px-2">
              <input
                disabled={disabled}
                className="w-[30px] text-[8px]"
                style={{ borderBottom: "1px solid #148B5A", outline: "none" }}
                value={data.text1}
                onChange={(e) => {
                  setData({
                    ...data,
                    text1: e.target.value,
                  });
                }}
                type="text"
              />
              <input
                disabled={disabled}
                className="w-[129px] text-[8px]"
                style={{ borderBottom: "1px solid #148B5A", outline: "none" }}
                type="text"
                value={data.text2}
                onChange={(e) => {
                  setData({
                    ...data,
                    text2: e.target.value,
                  });
                }}
              />
              <input
                disabled={disabled}
                className="w-[30px] text-[8px]"
                style={{ borderBottom: "1px solid #148B5A", outline: "none" }}
                type="text"
                value={data.text3}
                onChange={(e) => {
                  setData({
                    ...data,
                    text3: e.target.value,
                  });
                }}
              />
              <input
                disabled={disabled}
                className="w-[129px] text-[8px]"
                style={{ borderBottom: "1px solid #148B5A", outline: "none" }}
                type="text"
                value={data.text4}
                onChange={(e) => {
                  setData({
                    ...data,
                    text4: e.target.value,
                  });
                }}
              />
            </div>
            <div className="w-full py-1 flex gap-2 px-2">
              <input
                disabled={disabled}
                className="w-[30px] text-[8px]"
                style={{ borderBottom: "1px solid #148B5A", outline: "none" }}
                value={data.text5}
                onChange={(e) => {
                  setData({
                    ...data,
                    text5: e.target.value,
                  });
                }}
                type="text"
              />
              <input
                disabled={disabled}
                className="w-[129px] text-[8px]"
                style={{ borderBottom: "1px solid #148B5A", outline: "none" }}
                type="text"
                value={data.text6}
                onChange={(e) => {
                  setData({
                    ...data,
                    text6: e.target.value,
                  });
                }}
              />
              <input
                disabled={disabled}
                className="w-[30px] text-[8px]"
                style={{ borderBottom: "1px solid #148B5A", outline: "none" }}
                type="text"
                value={data.text7}
                onChange={(e) => {
                  setData({
                    ...data,
                    text7: e.target.value,
                  });
                }}
              />
              <input
                disabled={disabled}
                className="w-[129px] text-[8px]"
                style={{ borderBottom: "1px solid #148B5A", outline: "none" }}
                type="text"
                value={data.text8}
                onChange={(e) => {
                  setData({
                    ...data,
                    text8: e.target.value,
                  });
                }}
              />
            </div>
            <div className="w-full py-1 flex gap-2 px-2">
              <input
                disabled={disabled}
                className="w-[30px] text-[8px]"
                style={{ borderBottom: "1px solid #148B5A", outline: "none" }}
                value={data.text9}
                onChange={(e) => {
                  setData({
                    ...data,
                    text9: e.target.value,
                  });
                }}
                type="text"
              />
              <input
                disabled={disabled}
                className="w-[129px] text-[8px]"
                style={{ borderBottom: "1px solid #148B5A", outline: "none" }}
                type="text"
                value={data.text10}
                onChange={(e) => {
                  setData({
                    ...data,
                    text10: e.target.value,
                  });
                }}
              />
              <input
                disabled={disabled}
                className="w-[30px] text-[8px]"
                style={{ borderBottom: "1px solid #148B5A", outline: "none" }}
                type="text"
                value={data.text11}
                onChange={(e) => {
                  setData({
                    ...data,
                    text11: e.target.value,
                  });
                }}
              />
              <input
                disabled={disabled}
                className="w-[129px] text-[8px]"
                style={{ borderBottom: "1px solid #148B5A", outline: "none" }}
                type="text"
                value={data.text12}
                onChange={(e) => {
                  setData({
                    ...data,
                    text12: e.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>
        <div className="mt-1 flex">
          <div
            className="w-[33%] h-[30px] flex flex-col "
            style={{ border: "2px solid #148B5A" }}
          >
            <p
              className="pl-1 text-[#148B5A] text-[7px] whitespace-nowrap"
              style={{ lineHeight: "13px" }}
            >
              Примечание экспедитора:
            </p>
            <input
              type="text"
              disabled={disabled}
              className="pl-3 w-full outline-none text-[11px]"
              style={{ lineHeight: "0px" }}
              value={data?.forwarderNote}
              onChange={(e) =>
                setData({
                  ...data,
                  forwarderNote: e.target.value,
                })
              }
            />
          </div>
          <div
            className="w-[33%]  h-[30px] flex flex-col  "
            style={{ border: "2px solid #148B5A", borderLeft: "none" }}
          >
            <p className="mx-2 text-[#148B5A] text-[7px]">Код курьера</p>
            <input
              type="text"
              disabled={disabled}
              className="pl-3 w-full outline-none text-[11px]"
              style={{ lineHeight: "0px" }}
              value={data?.codeCourer}
              onChange={(e) =>
                setData({
                  ...data,
                  codeCourer: e.target.value,
                })
              }
            />
          </div>
          <div
            className="w-[33%]   h-[30px] flex flex-col "
            style={{ border: "2px solid #148B5A", borderLeft: "none" }}
          >
            <p className="mx-2 text-[#148B5A] text-[8px]">Подпись </p>
            <input
              type="text"
              disabled={disabled}
              className="pl-3 w-full outline-none text-[11px]"
              style={{ lineHeight: "0px" }}
              value={data?.signature}
              onChange={(e) =>
                setData({
                  ...data,
                  signature: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div
          className="flex mt-1 items-center h-[20px]"
          style={{ border: "2px solid #148B5A" }}
        >
          <h1 className="text-white bg-[#148B5A]   py-1  px-2  text-center text-[7px] whitespace-nowrap font-bold">
            КОД БЕЗОПАСНОСТИ
          </h1>

          <input
            type="text"
            disabled={disabled}
            className="pl-3 w-full outline-none text-[11px]"
            style={{ lineHeight: "0px" }}
            value={data?.securityCode}
            onChange={(e) =>
              setData({
                ...data,
                securityCode: e.target.value,
              })
            }
          />
        </div>
        <div className="flex">
          <div
            style={{ border: "2px solid #148B5A", borderTop: "none" }}
            className="w-[50%]"
          >
            <p className="text-[6px] px-1  text-[#148B5A] font-medium">
              Я подтверждаю, что отправление не содержит предметы, запрещенные к
              пересылке. Обязуюсь соблюдать все правила и условия, изложенные в
              Руководстве по услугам Исполнителя.
            </p>
          </div>
          <div
            style={{
              border: "2px solid #148B5A",
              borderTop: "none",
              borderLeft: "none",
            }}
            className="w-[50%]"
          >
            <p className="text-[7px] px-2 text-[#148B5A] font-medium">
              Подпись отправителя
            </p>
          </div>
        </div>
        <div className="flex mt-1">
          <div className="bg-[#148B5A] w-[100%] py-1">
            <h1 className="text-white  text-[7px] text-center font-bold">
              ПОДТВЕРЖДЕНИЕ ДОСТАВКИ
            </h1>
          </div>
        </div>
        <div>
          <div style={{ border: "2px solid #148B5A", borderBottom: "none" }}>
            <p className="text-[#148B5A] text-[7px] mx-2">
              Я подтверждаю, что отправление доставлено и вручено в закрытом
              виде, без внешних повреждений упаковки, упаковочных материалов и
              пломб, вес отправления соответствует весу, определенному при его
              приеме.
            </p>
          </div>
        </div>
        <div className="flex">
          <div
            className="w-[50%] h-[25px] flex flex-col"
            style={{
              border: "2px solid #148B5A",
              borderBottom: "none",
              borderRight: "none",
            }}
          >
            <p className="text-[#148B5A] text-[7px] px-1">Подпись получателя</p>
            <input
              type="text"
              disabled={disabled}
              className="pl-3 w-full outline-none text-[11px]"
              style={{ lineHeight: "0px" }}
              value={data?.recipientsSignature}
              onChange={(e) =>
                setData({
                  ...data,
                  recipientsSignature: e.target.value,
                })
              }
            />
          </div>
          <div
            className="w-[50%] h-[25px] flex flex-col"
            style={{ border: "2px solid #148B5A", borderBottom: "none" }}
          >
            <p className="text-[#148B5A] text-[7px] px-2">Ф.И.О. получателя</p>
            <input
              type="text"
              disabled={disabled}
              className="pl-5 w-full outline-none text-[11px]"
              style={{ lineHeight: "0px" }}
              value={data?.recipientsName}
              onChange={(e) =>
                setData({
                  ...data,
                  recipientsName: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="flex">
          <div
            className="w-[50%] h-[28px] flex flex-col "
            style={{ border: "2px solid #148B5A", borderRight: "none" }}
          >
            <p className="text-[#148B5A] text-[7px] px-2">Дата</p>
            <input
              type="date"
              disabled={disabled}
              className="pl-5 w-full outline-none text-[11px]"
              value={data?.date2}
              onChange={(e) =>
                setData({
                  ...data,
                  date2: e.target.value,
                })
              }
            />
          </div>
          <div
            className="w-[50%] h-[28px] flex flex-col"
            style={{ border: "2px solid #148B5A", borderRight: "none" }}
          >
            <p className="text-[#148B5A] text-[7px] px-2">Время</p>
            <input
              type="text"
              disabled={disabled}
              className="pl-5 w-full outline-none text-[11px]"
              style={{ lineHeight: "0px" }}
              value={data?.time2}
              onChange={(e) =>
                setData({
                  ...data,
                  time2: e.target.value,
                })
              }
            />
          </div>
          <div
            className="w-[50%] h-[28px] flex flex-col"
            style={{ border: "2px solid #148B5A" }}
          >
            <p className="text-[#148B5A] text-[7px] px-2">Код курьера</p>
            <input
              type="text"
              disabled={disabled}
              className="pl-5 w-full outline-none text-[11px]"
              style={{ lineHeight: "0px" }}
              value={data?.codeCourers}
              onChange={(e) =>
                setData({
                  ...data,
                  codeCourers: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="flex justify-end pt-2">
          <h1 className="text-xl font-bold ">{data.barcode}</h1>
        </div>
      </div>
      <div className=" bg-[#148B5A] text-white  font-bold w-[20px] h-[100%] flex flex-col justify-around">
        <p
          className="rotate-[-90deg] whitespace-nowrap text-[11px] mt-[100px]"
          style={{ lineHeight: "0px" }}
        >
          {type}
        </p>
        <p
          className="rotate-[-90deg] whitespace-nowrap text-[11px]"
          style={{ lineHeight: "0px" }}
        >
          {type}
        </p>
      </div>
    </div>
  );
};

export default Task;
