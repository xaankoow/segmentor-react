import React, { useEffect, useState } from "react";
import { ContentProductionService } from "../../service/contentProduction";
import PopUp from "../../Utils/PopUp/PopUp";
import SearchBox from "../DashboaedComponents/SearchBox/SearchBox";
import Table from "../DashboaedComponents/TableData/TableData";
import SaveListModal from "./SaveListModal";

export default function ContentpProduction({ onClickHandler }) {
  // searchBox Value
  const [searchBoxValue, setSearchBoxValue] = useState("");
  const [UpdatePpUp, showUpdatePpUp] = useState(false);
  const [SavePopup, showSavePopup] = useState(false);
  const [keyWordShowSaveModal, setKeyWordShowSaveModal] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(false);
  const SearchBoxChangeHandler = (e) => {
    setSearchBoxValue(e.target.value);
    setSearchBoxHandleClick(false);
  };

  // search box click
  const [searchBoxHandleClick, setSearchBoxHandleClick] = useState(false);
  //filter from searchBox  in table

  const [content, setcontent] = useState([]);
  const handleSetContentProduction = async () => {
    try {
      let formdata = new FormData();
      formdata.append("keyword", searchBoxValue);
      // const { data, status } = await keywordService(searchBoxValue);
      const { data, status } = await ContentProductionService(formdata);
      setcontent(data.data); //5
    } catch (error) {
      console.log(error);
    }
  };
  var tableDataFiltered = [];
  var tableDataFiltered2 = [];
  content.map((item, index) => {
    if (item.includes(searchBoxValue)) {
      tableDataFiltered.push(item);
      if (tableDataFiltered2.length < 5) {
        tableDataFiltered2.push(item);
      }
    }
    // return
  });

  var [number, setNumber] = useState(10);
  const addMore = () => {
    debugger;
    for (let i = tableDataFiltered2.length; i < number; i++) {
      tableDataFiltered2.push(tableDataFiltered[i]);
    }

    setNumber(number + 5);
  };
  console.log(tableDataFiltered);
  console.log(tableDataFiltered2);
  console.log(number);
  return (
    <>
      {keyWordShowSaveModal && (
        <SaveListModal
          dataTable={tableDataFiltered2}
          isContentProduction={true}
          updateButtonHandler={() => showUpdatePpUp(true)}
          saveButtonHandler={() => showSavePopup(true)}
          closeModal={keyWordShowSaveModal}
        />
      )}
      {UpdatePpUp && (
        <PopUp
          clickHandler={() => showUpdatePpUp(false)}
          image={"./img/popUp/update.svg"}
          type={"sucsess"}
          buttonText={"باشه، فهمیدم!"}
          text={"لیست جدید شما با موفقیت بروزرسانی شد !"}
          title={"موفقیت آمیز"}
        />
      )}
      {SavePopup && (
        <PopUp
          clickHandler={() => showSavePopup(false)}
          image={"./img/popUp/playlist_add.svg"}
          type={"sucsess"}
          buttonText={"باشه، فهمیدم!"}
          text={"لیست جدید شما با موفقیت ذخیره شد !"}
          title={"موفقیت آمیز"}
        />
      )}
      <div className="pt-3 flex flex-col justify-center items-center bg-[#ffffff]">
        <SearchBox
          changeHandler={SearchBoxChangeHandler}
          handlClick={() => {
            setSearchBoxHandleClick(true);
            handleSetContentProduction();
          }}
          className="w-[97%] flex items-center gap-2 justify-between"
        />

        <div className="flex flex-col  w-[97%]">
          {!searchBoxValue || !searchBoxHandleClick ? (
            <span className="text-right mt-4">هیچ کلمه ای جستجو نکردید!</span>
          ) : null}
          <div className="flex  justify-between w-full mt-5">
            <Table
              data={tableDataFiltered2}
              NothingSearch={
                !searchBoxValue || !searchBoxHandleClick ? true : false
              }
              headerButton={true}
              contentsProduction={true}
              openModal={() => setKeyWordShowSaveModal(true)}
            />
          </div>
        </div>
      </div>
      <button
        className={
          searchBoxValue && searchBoxHandleClick
            ? "btn-style mr-5 mt-5 flex gap-3"
            : "bg-[#D3D5E2] btn-style mr-5 mt-5 flex gap-3"
        }
        disabled={searchBoxHandleClick ? false : true}
        onClick={(e) => {
          addMore();
        }}
      >
        <img src="./img/dashboard/table/cached.svg" alt="cached" />
        تولید بیشتر
      </button>
    </>
  );
}
