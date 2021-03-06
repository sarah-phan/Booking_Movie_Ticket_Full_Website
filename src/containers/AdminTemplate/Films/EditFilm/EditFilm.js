import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";
import moment from "moment";
// import { actAddFilm } from "./module/action";

import { actFetchDetailMovie } from "../../../HomeTemplate/DetailPhim/module/action.js";
import { actUpdateFilm } from "./module/action.js";

const EdiFilm = (props) => {
  const { data } = useSelector((state) => state.detailMovieReducer);
  // console.log("data", data);
  const loading = useSelector((state) => state.detailMovieReducer.loading);
  const [componentSize, setComponentSize] = useState("default");
  const dispatch = useDispatch();

  useEffect(() => {
    let { id } = props.match.params;
    dispatch(actFetchDetailMovie(id));
  }, []);

  useEffect(() => {
    setImgSrc(data?.hinhAnh);
  }, [data?.hinhAnh]);
  // const value = data?.tenPhim || "";
  // console.log(value);

  const [imgSrc, setImgSrc] = useState("");

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: data?.maPhim,
      tenPhim: data?.tenPhim,
      trailer: data?.trailer,
      moTa: data?.moTa,
      ngayKhoiChieu: data?.ngayKhoiChieu,
      dangChieu: data?.dangChieu,
      sapChieu: data?.sapChieu,
      hot: data?.hot,
      danhGia: data?.danhGia,
      hinhAnh: null,
      maNhom: "GP01",
    },
    onSubmit: (values) => {
      //Tạo đối tượng formdata => Đưa giá trị values từ formik vào formdata
      let formData = new FormData();
      let ngayKhoiChieu = new Date(values.ngayKhoiChieu);
      let dd = ngayKhoiChieu.getDate(),
        mm = ngayKhoiChieu.getMonth() + 1,
        yyyy = ngayKhoiChieu.getFullYear();
      if (dd < 10) dd = "0" + dd; // 8 => 08
      if (mm < 10) mm = "0" + mm;
      ngayKhoiChieu = `${dd}/${mm}/${yyyy}`;

      // formData.append("tenPhim", formik.values.tenPhim);
      // console.log("formik", formData);
      for (let key in values) {
        // console.log(key === "ngayKhoiChieu");
        if (key === "ngayKhoiChieu") {
          // console.log(123123);
          formData.append(key, ngayKhoiChieu);
        } else if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          if (values.hinhAnh !== null) {
            formData.append("File", values.hinhAnh, values.hinhAnh.name);
          }
        }
      }
      // cap nhat film
      dispatch(actUpdateFilm(formData, props.history));
      // console.log("values", formData.get("ngayKhoiChieu"));
    },
  });

  const handleChangeDatePicker = (value) => {
    // console.log("DatePicker", moment(value).format("DD/MM/YYYY"));

    let ngayKhoiChieu = moment(value);
    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = (e) => {
    // lay file ra tu e
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    ) {
      // dem du lieu file luu vao formik
      formik.setFieldValue("hinhAnh", file);
      //tao doi tuong de doc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        // console.log(e.target.result);
        setImgSrc(e.target.result); // hinh base 64
      };
      // dem du lieu file luu vao formik
      // formik.setFieldValue("hinhAnh", file);
    }
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <Form
      onSubmitCapture={formik.handleSubmit}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      <h3>Thêm Phim Mới</h3>
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Tên Phim">
        <Input
          name="tenPhim"
          onChange={formik.handleChange}
          value={formik.values.tenPhim}
        />
      </Form.Item>
      <Form.Item label="Trailer">
        <Input
          name="trailer"
          onChange={formik.handleChange}
          value={formik.values.trailer}
        />
      </Form.Item>
      <Form.Item label="Mô Tả">
        <Input
          name="moTa"
          onChange={formik.handleChange}
          value={formik.values.moTa}
        />
      </Form.Item>
      <Form.Item label="Ngày Khởi Chiếu">
        <DatePicker
          name="ngayKhoiChieu"
          onChange={handleChangeDatePicker}
          format="DD/MM/YYYY"
          value={moment(formik.values.ngayKhoiChieu)}
        />
      </Form.Item>
      <Form.Item label="Đang Chiếu">
        <Switch
          name="dangChieu"
          onChange={handleChangeSwitch("dangChieu")}
          checked={formik.values.dangChieu}
        />
      </Form.Item>
      <Form.Item label="Sắp Chiếu">
        <Switch
          name="sapChieu"
          onChange={handleChangeSwitch("sapChieu")}
          checked={formik.values.sapChieu}
        />
      </Form.Item>
      <Form.Item label="Hot">
        <Switch
          name="hot"
          onChange={handleChangeSwitch("hot")}
          checked={formik.values.hot}
        />
      </Form.Item>

      <Form.Item label="Số Sao">
        <InputNumber
          onChange={handleChangeInputNumber("danhGia")}
          min={1}
          max={10}
          value={formik.values.danhGia}
        />
      </Form.Item>
      <Form.Item label="Hình Ảnh">
        <input
          type="file"
          onChange={handleChangeFile}
          accept="image/png, image/jpeg,image/gif,image/png"
        />
        <br />
        <img
          width={100}
          height={100}
          src={imgSrc === "" ? data?.hinhAnh : imgSrc}
        />
      </Form.Item>

      <Form.Item label="Tác vụ">
        <button type="submit" className="bg-blue-300 text-black p-2">
          Cập Nhật
        </button>
      </Form.Item>
    </Form>
  );
};
export default EdiFilm;
