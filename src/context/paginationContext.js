import {createContext, useContext, useState} from "react";
import {HomeWorkData} from "../data/HomeWorkData";

const usePagination = (all_items, items_per_page) => {
  console.log(items_per_page, "item");
  const [items, setItems] = useState(all_items);
  const [currentPage, setcurretPage] = useState(1);
  const [activePage, setactivePage] = useState(1);

  const [itemPerPage, setitemPerPage] = useState(items_per_page);

  const handleClick = (curr) => {
    setcurretPage(curr);
    setactivePage(curr);
    // console.log(curr, "curr");
  };
//   const isActivePage = activePage === currentPage;
  const lastIndex = currentPage * itemPerPage;
  const firstIndex = lastIndex - itemPerPage;
  const data = items?.slice(firstIndex, lastIndex);

  const totalButtons = [];
  for (
    let index = 0;
    index < Math.ceil(HomeWorkData?.length / itemPerPage);
    index++
  ) {
    totalButtons.push(index + 1);
  }

  return {data, totalButtons, handleClick, activePage};
};

export {usePagination};
