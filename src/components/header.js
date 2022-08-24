import React, { useState } from "react";
import png from "../assets/png.png";

const Header = () => {
  const Buttons = [
    { name: "Personal Info", type: "b1" },
    { name: "Billing Info", type: "b2" },
    { name: "Confirm Payment", type: "b3" },
  ];
  const [contentType, setContentType] = useState("b1");
  const [bts, setBts] = useState(false);
  const handleClick = () => {
    setBts(!bts);
  };

  const TextInput = (props) => {
    return (
      <div>
        <p className="text-[13px] font-semibold">
          {props.header}
          <span className="text-red-600">
            {"  "}
            {props.text1}
          </span>
        </p>
        <p className="text-[11px] my-3 text-gray-500">{props.text}</p>
        <div className="bg-white mt-2 mb-5 h-[40px] w-[82%] px-3 rounded border-[1px] border-[#4E598C]">
          <input
            placeholder={props.header}
            className="w-full h-full outline-none placeholder:text-xs"
          />
        </div>
      </div>
    );
  };

  const Button = (props) => {
    return (
      <div className="flex items-center mt-5">
        <div
          className="w-[150px] h-[39px] button cursor-pointer items-center justify-center flex"
          onClick={props.click}
        >
          <p className="text-[13px] font-semibold text-white">
            {props.text ? props.text : " Next"}
          </p>
        </div>
        <p className="text-[#4E598C] text-[13px] cursor-pointer font-semibold ml-10">
          Cancel Payment
        </p>
      </div>
    );
  };

  const PersonalInfo = () => {
    return (
      <div>
        <TextInput header={"Name"} />

        <TextInput
          header={"Email Address"}
          text1={"*"}
          text={"The purchase reciept would be sent to this address"}
        />
        <TextInput header={"Address 1"} />
        <TextInput header={"Address 2"} />
        <div className="flex flex-row justify-between  w-[470px]">
          <div>
            <p className="text-[13px] font-semibold">Local Government</p>

            <div className="bg-white mt-2 mb-5 h-[40px] w-[250px] px-3 rounded border-[1px] border-[#4E598C]">
              <input
                placeholder="Local Government"
                className="w-full h-full outline-none placeholder:text-xs"
              />
            </div>
          </div>
          <div className="w-[40%] ">
            <p className="text-[13px] font-semibold">State</p>
            <div className="bg-white mt-2 mb-5   h-[40px] w-[100%] px-3 rounded border-[1px] border-[#4E598C]">
              <input
                placeholder="State"
                className="w-full h-full outline-none placeholder:text-xs"
              />
            </div>
          </div>
        </div>
        <Button />
      </div>
    );
  };
  const BillingInfo = () => {
    return (
      <div>
        <div>
          <TextInput header={"Name on Card"} text1={"*"} />
          <TextInput header={"Card Type"} text1={"*"} />
          <div className="flex flex-row justify-between  w-[470px]">
            <div>
              <p className="text-[13px] font-semibold">
                Card Details
                <span className="text-red-600">{"  "}*</span>
              </p>

              <div className="bg-white mt-2 mb-5 h-[40px] w-[250px] px-3 rounded border-[1px] border-[#4E598C]">
                <input
                  placeholder="4242 4242 4242 4242"
                  className="w-full h-full outline-none placeholder:text-xs"
                />
              </div>
            </div>
            <div className="w-[100%] ml-6">
              <p className="text-[13px] font-semibold">
                Expiry date
                <span className="text-red-600">{"  "}*</span>
              </p>
              <div className="bg-white mt-2 mb-5   h-[40px] w-[90%] px-3 rounded border-[1px] border-[#4E598C]">
                <input
                  placeholder="04 / 23"
                  className="w-full h-full outline-none placeholder:text-xs"
                />
              </div>
            </div>
            <div className="w-[100%] ml-5">
              <p className="text-[13px] font-semibold ml-5">
                CVV
                <span className="text-red-600">{"  "}*</span>
              </p>
              <div className="bg-white mt-2 mb-5   h-[40px] w-[90%] px-3 rounded border-[1px] border-[#4E598C]">
                <input
                  placeholder="567"
                  className="w-full h-full outline-none placeholder:text-xs"
                />
              </div>
            </div>
          </div>
          <Button />
        </div>
      </div>
    );
  };

  const ConfirmPayment = () => {
    return (
      <div>
        <div className="w-[500px] h-[250px] bg-white shadow-xl rounded-lg overflow-hidden mb-8">
          <div className="flex items-center justify-between w-full h-12 px-16 text-white bg-blue-500">
            <p className="text-[13px] font-semibold ">Item Name</p>
            <p className="text-[13px] font-semibold ">Price</p>
          </div>
          <div className="flex flex-col items-center h-full px-16 pt-10">
            <div className="flex items-center justify-between w-full">
              <p className="text-[#4E598C] text-[13px] font-medium ">
                Data science and usability
              </p>
              <p className="text-[#4E598C] text-[13px] font-medium ">
                50,000.00
              </p>
            </div>
            <div className="flex items-center justify-between w-full mt-5">
              <p className="text-[#4E598C] text-[13px] font-medium ">
                Shipping
              </p>
              <p className="text-[#4E598C] text-[13px] font-medium ">0.00</p>
            </div>
            <div className="h-[1px] w-[115%] bg-[#4E598C90] mt-5" />
            <div className="bg-white mb-5 h-[40px] w-[108%] mt-5 items-center justify-between flex px-3 rounded border-[1px] border-[#4E598C]">
              <p className="text-[#4E598C] text-[13px] font-medium ">Total</p>
              <p className="text-[#4E598C] text-[13px] font-medium ">
                50,000.00
              </p>
            </div>
          </div>
        </div>
        <Button text={"Pay"} click={handleClick} />
      </div>
    );
  };
  return (
    <div>
      <div className="header skew-y-[-10deg] pt-52">
        <div className="skew-y-[10deg] flex h-full flex-col w-full items-center ">
          <div className={bts ? "hidden" : ""}>
            <h3 className="text-[28px]  mr-[320px] mb-8 text-[#4E598C] font-bold">
              Complete Payment
            </h3>
            <div>
              <div className="flex mb-8">
                {Buttons.map((header, index) => {
                  return (
                    <div className="flex flex-col w-[190px] cursor-pointer">
                      <div
                        className={header.type === contentType ? "w-fit " : ""}
                      >
                        <p
                          onClick={() => setContentType(header.type)}
                          className={
                            header.type === contentType
                              ? "text-orange-500 text-sm "
                              : "text-gray-500 text-sm "
                          }
                        >
                          {header.name}
                        </p>
                        <div
                          className={
                            header.type === contentType
                              ? " border-b-[8px]  border-orange-500 rounded-md mt-2"
                              : ""
                          }
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="w-[88%] h-[1px] bg-black -mt-[35px]" />
              <div className="mt-8">
                {contentType === "b1" && <PersonalInfo />}
                {contentType === "b2" && <BillingInfo />}
                {contentType === "b3" && <ConfirmPayment />}
              </div>
            </div>
          </div>
          <div
            className={
              !bts
                ? "hidden"
                : "h-[300px] w-[500px] bg-white rounded-md shadow-2xl mt-32 p-10 flex flex-col items-center"
            }
          >
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md">
              <img src={png} className="w-10 h-10 mt-3" alt="" />
            </div>
            <div>
              <h3 className="text-[30px] text-[#4E598C] font-bold">
                Purchased Completed
              </h3>
              <p className="text-[13px] my-5 text-gray-900 mr-5 w-80">
                Please check your email for details concerning this transaction
              </p>
              <p
                onClick={handleClick}
                className="text-[13px]  text-orange-500 mr-12 w-64 cursor-pointer underline"
              >
                Return Home
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
