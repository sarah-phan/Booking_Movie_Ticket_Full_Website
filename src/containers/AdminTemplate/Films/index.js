import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, Fragment } from "react";
import { Button, Table, Layout } from "antd";
import { Input, Space } from "antd";
import {
  AudioOutlined,
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import { actFetchListPhim } from "../../../reducer/ModuleListPhim/action";
import { actFetchDeleteMovie } from "./module/action";
import { actSearchPhim } from "./moduleSearchFilm/action";
import { NavLink, Route } from "react-router-dom";
import AddNew from "./AddNew/AddNew";

import { history } from "../../../App";

const { Search } = Input;

export default function FilmsAdmin(props) {
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
            <span
              key={2}
              style={{ cursor: "pointer" }}
              className="mr-2 text-2xl"
              onClick={() => {
                if (
                  window.confirm("Bạn có chắc muốn xóa phim" + film.tenPhim)
                ) {
                  //goi action xoa
                  dispatch(actFetchDeleteMovie(film.maPhim));
                  window.location.reload();
                }
              }}
            >
              <DeleteOutlined style={{ color: "red" }} />
            </span>
            <NavLink
              key={3}
              className="mr-2 text-2xl"
              to={`/admin/films/showtime/${film.maPhim}`}
            >
              <CalendarOutlined style={{ color: "green" }} />
            </NavLink>
          </Fragment>
        );
      },
    },
  ];
  const data = arrFilmDefault;

  const onSearch = (value) => {
    // Goi API lay danh sach Phim
    dispatch(actSearchPhim(value));
  };

  function onChange(pagination, filters, sorter, extra) {
    // console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div>
      <h3 className="text-4xl">Quản Lý Phim</h3>
      <Button className="mb-5">
        <NavLink to="/admin/films/addnew">Thêm Phim</NavLink>
      </Button>
      <Search placeholder="Tên Phim" size="large" onSearch={onSearch} />
      <Table
        columns={columns}
        dataSource={arrFilmDefault}
        onChange={onChange}
        rowKey={"maPhim"}
      />
    </div>
  );
}
