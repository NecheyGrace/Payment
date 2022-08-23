import React, { useState } from "react";

const Header = () => {
  const Buttons = [
    { name: "Personal Info", type: "b1" },
    { name: "Billing Info", type: "b2" },
    { name: "Confirm Payment", type: "b3" },
  ];
  const [contentType, setContentType] = useState("b1");
  const [btnClass, setBtnClass] = useState("blue");
  const btncolor = btnClass ? "white" : "orange";

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
            className="w-full h-full outline-none"
          />
        </div>
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
                className="w-full h-full outline-none"
              />
            </div>
          </div>
          <div className="w-[40%] ">
            <p className="text-[13px] font-semibold">State</p>
            <div className="bg-white mt-2 mb-5   h-[40px] w-[100%] px-3 rounded border-[1px] border-[#4E598C]">
              <input
                placeholder="State"
                className="w-full h-full outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  const BillingInfo = () => {
    return (
      <div>
        <TextInput header={"Name"} />
        <TextInput header={"Email Address"} />
      </div>
    );
  };
  return (
    <div>
      <div className="header skew-y-[-10deg] pt-52">
        <div className="skew-y-[10deg] flex h-full flex-col w-full items-center ">
          <h3 className="text-[28px]  mr-[320px] mb-8 text-[#4E598C] font-bold">
            Complete Payment
          </h3>
          <div>
            <div className="flex mb-8">
              {Buttons.map((header, index) => {
                return (
                  <div className="flex flex-col w-[190px] cursor-pointer">
                    <div
                      className={
                        header.type === contentType
                          ? "w-fit border-b-[3px] border-orange-500"
                          : ""
                      }
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
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-[88%] h-[1px] bg-black -mt-[33px]" />
            <div className="mt-8">
              {contentType === "b1" && <PersonalInfo />}
              {contentType === "b2" && <BillingInfo />}
              {contentType === "b3" && <PersonalInfo />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
{
  /*<View
            style={{
              flexDirection: "row",
            }}
          >
            {actions.map((action, index) => {
              return (
                <View
                  key={index}
                  style={[
                    styles.catego,
                    {
                      backgroundColor:
                        action.type === contentType ? "orange" : "silver",
                    },
                  ]}
                >
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => setContentType(action.type)}
                  >
                    <Text
                      key={action.type}
                      style={{
                        color:
                          action.type === contentType ? "white" : "#00000090",
                      }}
                    >
                      {action.name}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View*/
}
