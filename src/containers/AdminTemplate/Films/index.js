import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, Fragment } from "react";
import { Button, Table, Layout } from "antd";
import { Input, Space } from "antd";
import { AudioOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { actFetchListPhim } from "../../../reducer/ModuleListPhim/action";
import { NavLink, Route } from "react-router-dom";
import AddNew from "./AddNew/AddNew";

import { history } from "../../../App";

const { Search } = Input;

export default function FilmsAdmin() {
  const arrFilmDefault = useSelector((state) => state.listPhimReducer.data);
  const dispatch = useDispatch();
  console.log("arrFilmDefault", arrFilmDefault);

  useEffect(() => {
    dispatch(actFetchListPhim());
  }, []);

  const columns = [
    {
      title: "maPhim",
      dataIndex: "maPhim",
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ["descend", "ascend"],
      width: "15%",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      render: (text, film, index) => {
        return (
          <Fragment key={index}>
            <img
              src={film.hinhAnh}
              alt={film.tenPhim}
              width={50}
              height={50}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://picsum.photos/id/${index}/50/50`;
              }}
            />
          </Fragment>
        );
      },
      width: "15%",
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      width: "20%",
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      // sorter: (a, b) => {
      //   let moTaA = a.moTa.toLowerCase().trim();
      //   let moTaB = b.moTa.toLowerCase().trim();
      //   if (moTaA > moTaA) {
      //     return 1;
      //   }
      //   return -1;
      // },
      render: (text, film, index) => {
        return (
          <Fragment key={index}>
            {film.moTa.length > 50
              ? film.moTa.substr(0, 50) + " ..."
              : film.moTa}
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
    {
      title: "Hành Động ",
      dataIndex: "maPhim",
      render: (text, film, index) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              className="mr-2 text-2xl"
              to={`/admin/films/editfilm/${film.maPhim}`}
            >
              <EditOutlined style={{ color: "blue" }} />
            </NavLink>
            <NavLink key={2} className="mr-2 text-2xl" to="/">
              <DeleteOutlined style={{ color: "red" }} />
            </NavLink>
          </Fragment>
        );
      },
    },
  ];
  const data = arrFilmDefault;

  const onSearch = (value) => console.log(value);
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div>
      <h3 className="text-4xl">Quản Lý Phim</h3>
      <Button
        className="mb-5"
        // onClick={() => {
        //   history.push("/admin/films/addnew");
        // }}
      >
        <NavLink to="/admin/films/addnew">Thêm Phim</NavLink>
      </Button>
      <Search placeholder="Tên Phim" size="large" onSearch={onSearch} />
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"maPhim"}
      />
    </div>
  );
}
