import React from "react";

const Task = ({ data, setData, type, disabled }) => {
  return (
    <div className="w-[50%]  ml-[-560px] gap-2 flex">
      <div className="w-[100%]">
        <div>
          <div className="cap  bg-[#148B5A] py-2">
            <h1 className="text-center uppercase text-white font-bold">
              информация об оплате
            </h1>
          </div>
          <div className="flex">
            <div
              className="py-1 w-[50%] bg-transparent border-[#148B5A]"
              style={{
                borderRight: "2px solid #148B5A",
                borderBottom: "2px solid #148B5A",
                borderTop: "2px solid #148B5A",
                borderLeft: "2px solid #148B5A",
              }}
            >
              <p className="text-[13px] mx-2 text-[#148B5A] ">
                Объявленная ценность
              </p>
              <input
                type="text"
                disabled={disabled}
                className="pl-5 w-full outline-none text-xl"
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
              className="py-1 w-[50%] bg-transparent border-[#148B5A]"
              style={{
                borderRight: "2px solid #148B5A",
                borderBottom: "2px solid #148B5A",
                borderTop: "2px solid #148B5A",
                borderLeft: "none",
              }}
            >
              <p className="text-[13px] mx-2 text-[#148B5A] ">Основной тариф</p>
              <input
                type="text"
                disabled={disabled}
                className="pl-5 w-full outline-none text-xl"
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
              className="py-1 w-[50%] bg-transparent border-[#148B5A]"
              style={{
                borderRight: "2px solid #148B5A",
                borderBottom: "2px solid #148B5A",
                borderTop: "",
                borderLeft: "2px solid #148B5A",
              }}
            >
              <p className="text-[13px] mx-2 text-[#148B5A] ">Оплата</p>
              <input
                type="text"
                disabled={disabled}
                className="pl-5 w-full outline-none text-xl"
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
              className="py-1 w-[50%] bg-transparent border-[#148B5A]"
              style={{
                borderRight: "2px solid #148B5A",
                borderBottom: "2px solid #148B5A",
                borderTop: "none",
                borderLeft: "none",
              }}
            >
              <p className="text-[13px] mx-2 text-[#148B5A] ">
                Тариф за доп. услуги
              </p>
              <input
                type="text"
                disabled={disabled}
                className="pl-5 w-full outline-none text-xl"
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
              className="py-1 w-[50%] bg-transparent border-[#148B5A]"
              style={{
                borderRight: "2px solid #148B5A",
                borderBottom: "2px solid #148B5A",
                borderTop: "none",
                borderLeft: "2px solid #148B5A",
              }}
            >
              <p className="text-[13px] mx-2 text-[#148B5A] ">
                Код плательщика
              </p>
              <input
                type="text"
                disabled={disabled}
                className="pl-5 w-full outline-none text-xl"
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
              className="py-1 w-[50%] bg-transparent border-[#148B5A]"
              style={{
                borderRight: "2px solid #148B5A",
                borderBottom: "2px solid #148B5A",
                borderTop: "none",
                borderLeft: "none",
              }}
            >
              <p className="text-[13px] mx-2 text-[#148B5A] ">
                Сумма платежа с НДС
              </p>
              <input
                type="text"
                disabled={disabled}
                className="pl-5 w-full outline-none text-xl"
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
              className="py-1 w-[50%] bg-transparent border-[#148B5A]"
              style={{
                borderRight: "2px solid #148B5A",
                borderBottom: "2px solid #148B5A",
                borderTop: "none",
                borderLeft: "2px solid #148B5A",
              }}
            >
              <p className="text-[13px] mx-2 text-[#148B5A]">Вид оплаты</p>
              <input
                type="text"
                disabled={disabled}
                className="pl-5 w-full outline-none text-xl"
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
              className="py-1 w-[50%] bg-transparent border-[#148B5A]"
              style={{
                borderRight: "2px solid #148B5A",
                borderBottom: "2px solid #148B5A",
                borderTop: "none",
                borderLeft: "none",
              }}
            >
              <p className="text-[13px] mx-2 text-[#148B5A]">
                Телефон для уведомлений
              </p>
              <input
                type="text"
                disabled={disabled}
                className="pl-5 w-full outline-none text-xl"
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
        <div className="mt-3" style={{ border: "2px solid #148B5A" }}>
          <p className="text-[#148B5A] font-bold mx-2 text-[13px]">
            Дополнительные услуги:
          </p>
          <div className="inputs">
            <div className="flex gap-2 px-2">
              <input
                disabled={disabled}
                className="w-[85px]"
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
                className="w-[85px] "
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
            <div className="flex">
              <input
                className="w-[85px] mx-2"
                style={{ borderBottom: "1px solid #148B5A", outline: "none" }}
                type="text"
                disabled={disabled}
                value={data.text5}
                onChange={(e) => {
                  setData({
                    ...data,
                    text5: e.target.value,
                  });
                }}
              />
              <input
                style={{ borderBottom: "1px solid #148B5A", outline: "none" }}
                type="text"
                disabled={disabled}
                value={data.text6}
                onChange={(e) => {
                  setData({
                    ...data,
                    text6: e.target.value,
                  });
                }}
              />
              <input
                className="w-[85px] mx-2"
                disabled={disabled}
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
                style={{ borderBottom: "1px solid #148B5A", outline: "none" }}
                type="text"
                disabled={disabled}
                value={data.text8}
                onChange={(e) => {
                  setData({
                    ...data,
                    text8: e.target.value,
                  });
                }}
              />
            </div>
            <div className="flex mb-3">
              <input
                className="w-[85px] mx-2"
                disabled={disabled}
                style={{ borderBottom: "1px solid #148B5A", outline: "none" }}
                type="text"
                value={data.text9}
                onChange={(e) => {
                  setData({
                    ...data,
                    text9: e.target.value,
                  });
                }}
              />
              <input
                style={{ borderBottom: "1px solid #148B5A", outline: "none" }}
                type="text"
                disabled={disabled}
                value={data.text10}
                onChange={(e) => {
                  setData({
                    ...data,
                    text10: e.target.value,
                  });
                }}
              />
              <input
                className="w-[85px] mx-2"
                disabled={disabled}
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
                style={{ borderBottom: "1px solid #148B5A", outline: "none" }}
                type="text"
                disabled={disabled}
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
        <div className="mt-3 flex">
          <div className="w-[50%]  " style={{ border: "2px solid #148B5A" }}>
            <p className="mx-2 text-[#148B5A] text-[13px] whitespace-nowrap">
              Примечание экспедитора:{" "}
            </p>
            <input
              type="text"
              disabled={disabled}
              className="pl-5 w-full outline-none text-xl"
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
            className="w-[50%]  "
            style={{ border: "2px solid #148B5A", borderLeft: "none" }}
          >
            <p className="mx-2 text-[#148B5A] text-[13px]">Код курьера</p>
            <input
              type="text"
              disabled={disabled}
              className="pl-5 w-full outline-none text-xl"
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
            className="w-[50%]  h-[80px]"
            style={{ border: "2px solid #148B5A", borderLeft: "none" }}
          >
            <p className="mx-2 text-[#148B5A] text-[13px]">Подпись </p>
            <input
              type="text"
              disabled={disabled}
              className="pl-5 w-full outline-none text-xl"
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
          className="flex mt-3 items-center"
          style={{ border: "2px solid #148B5A" }}
        >
          <div className="bg-[#148B5A] h-full w-[40%] py-1 ">
            <h1 className="text-white h-full text-center font-bold">
              КОД БЕЗОПАСНОСТИ
            </h1>
          </div>

          <div className="w-[60%]">
            <input
              type="text"
              disabled={disabled}
              className="pl-5 w-full outline-none text-xl"
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
        </div>
        <div className="flex">
          <div
            style={{ border: "2px solid #148B5A", borderTop: "none" }}
            className="w-[50%]"
          >
            <p className="text-[13px] mx-5  text-[#148B5A] font-medium">
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
            <p className="text-[13px] mx-5 text-[#148B5A] font-medium">
              Подпись отправителя
            </p>
          </div>
        </div>
        <div className="flex mt-3">
          <div className="bg-[#148B5A] w-[100%] py-3">
            <h1 className="text-white text-center font-bold">
              ПОДТВЕРЖДЕНИЕ ДОСТАВКИ
            </h1>
          </div>
        </div>
        <div>
          <div style={{ border: "2px solid #148B5A", borderBottom: "none" }}>
            <p className="text-[#148B5A] text-[13px] mx-2">
              Я подтверждаю, что отправление доставлено и вручено в закрытом
              виде, без внешних повреждений упаковки, упаковочных материалов и
              пломб, вес отправления соответствует весу, определенному при его
              приеме.
            </p>
          </div>
        </div>
        <div className="flex">
          <div
            className="w-[50%]"
            style={{
              border: "2px solid #148B5A",
              borderBottom: "none",
              borderRight: "none",
            }}
          >
            <p className="text-[#148B5A] text-sm px-2">Подпись получателя</p>
            <input
              type="text"
              disabled={disabled}
              className="pl-5 w-full outline-none text-xl"
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
            className="w-[50%] "
            style={{ border: "2px solid #148B5A", borderBottom: "none" }}
          >
            <p className="text-[#148B5A] text-sm px-2">Ф.И.О. получателя</p>
            <input
              type="text"
              disabled={disabled}
              className="pl-5 w-full outline-none text-xl"
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
            className="w-[50%]"
            style={{ border: "2px solid #148B5A", borderRight: "none" }}
          >
            <p className="text-[#148B5A] text-sm px-2">Дата</p>
            <input
              type="date"
              disabled={disabled}
              className="pl-5 w-full outline-none text-xl"
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
            className="w-[50%] "
            style={{ border: "2px solid #148B5A", borderRight: "none" }}
          >
            <p className="text-[#148B5A] text-sm px-2">Время</p>
            <input
              type="text"
              disabled={disabled}
              className="pl-5 w-full outline-none text-xl"
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
          <div className="w-[50%] " style={{ border: "2px solid #148B5A" }}>
            <p className="text-[#148B5A] text-sm px-2">Код курьера</p>
            <input
              type="text"
              disabled={disabled}
              className="pl-5 w-full outline-none text-xl"
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
          <h1 className="text-4xl font-bold ">{data.barcode}</h1>
        </div>
      </div>
      <div className=" bg-[#148B5A] text-white  font-bold w-[30px] h-[897px] flex flex-col justify-around">
        <p
          className="rotate-[-90deg] whitespace-nowrap"
          style={{ lineHeight: "0px" }}
        >
          {type}
        </p>
        <p
          className="rotate-[-90deg] whitespace-nowrap"
          style={{ lineHeight: "0px" }}
        >
          {type}
        </p>
      </div>
    </div>
  );
};

export default Task;
