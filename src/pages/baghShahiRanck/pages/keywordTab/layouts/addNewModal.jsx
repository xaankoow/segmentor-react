import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import InputGetWorkSpaceInfo from "../../../../../component/Utils/workSpaceModal/inputValue";

import {
  defaultCustomModalStyle,
  modalParentSelector,
} from "../../../../../variables/style";
import PageTitle from "../../../../../component/Dashboard/DashboaedComponents/pageTitle/pageTitle";
import AuthButton from "../../../../../component/Auth/authButton/AuthButton";
import { ImageContainer } from "../../../../../assets/img/IMG";
import { useNavigate } from "react-router";
import { WindowSharp } from "@mui/icons-material";

const AddKeyWordModal = ({
  isOpen,
  setModal,
  handleSaveKeyword,
  addLoading,
}) => {
  // const navigate=useNavigate()
  const [keyword, setKeyword] = useState(2);

  function handleModifyState(type) {
    if (type === "add") setKeyword((prev) => prev + 1);
    else setKeyword((prev) => prev);
  }

  return (
    <Modal
      isOpen={isOpen}
      parentSelector={() => document.getElementById("dashboardMap")}
      style={defaultCustomModalStyle}
      contentLabel="Example Modal"
      onRequestClose={() => setModal(false)}
      preventScroll
    >
      {/* <div className=" w-[862px] pb-7"> */}
      <div className=" w-[862px]">
        {/* <Header/> */}
        {/* <div className=' relative'> */}
        <PageTitle
          title={"افزودن کلمه کلیدی"}
          parentClass="py-2"
          badgeApi={6}
          hasLimit
        />

        {/* </div> */}
        <body className="px-5 bg-[#fff]">
          {/* <InputContainer/> */}

          <InputGetWorkSpaceInfo
            step={6}
            countInput={keyword}
            handleAddStateCountInput={() => handleModifyState("add")}
            handleRemoveStateCountInput={() => handleModifyState("remove")}
          />

          <AuthButton
            textButton={
              <>
                <img
                  src={ImageContainer.savingNewList}
                  alt="save list"
                  className=" ml-3"
                />
                ذخیره کلمات کلیدی
              </>
            }
            classes="float-left relative -top-10"
            handlerClick={handleSaveKeyword}
            disabled={addLoading}
          />
        </body>
      </div>
    </Modal>
  );
};

export default AddKeyWordModal;
