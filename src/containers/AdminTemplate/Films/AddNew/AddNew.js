import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import moment from "moment";
import { actAddFilm } from "./module/action";

const AddNew = (props) => {
  const [componentSize, setComponentSize] = useState("default");
  const dispatch = useDispatch();
  const [imgSrc, setImgSrc] = useState("");

  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      mota: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {},
      maNhom: "GP01",
    },
    onSubmit: (values) => {
      console.log("values", values);
      //Tạo đối tượng formdata => Đưa giá trị values từ formik vào formdata
      let formData = new FormData();
      // formData.append("tenPhim", formik.values.tenPhim);
      // console.log("formik", formData);
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          formData.append("File", values.hinhAnh, values.hinhAnh.name);
        }
      }
      //Gọi api gửi các giá trị formdata về backend xử lý
      dispatch(actAddFilm(formData, props.history));
    },
  });

  const handleChangeDatePicker = (value) => {
    console.log("DatePicker", moment(value).format("DD/MM/YYYY"));

    let ngayKhoiChieu = moment(value).format("DD/MM/YYYY");
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
      //tao doi tuong de doc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        // console.log(e.target.result);
        setImgSrc(e.target.result); // hinh base 64
      };
      // dem du lieu file luu vao formik
      formik.setFieldValue("hinhAnh", file);
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
        <Input name="tenPhim" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Trailer">
        <Input name="trailer" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Mô Tả">
        <Input name="moTa" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Ngày Khởi Chiếu">
        <DatePicker
          name="ngayKhoiChieu"
          format={"DD/MM/YYYY"}
          onChange={handleChangeDatePicker}
        />
      </Form.Item>
      <Form.Item label="Đang Chiếu">
        <Switch name="dangChieu" onChange={handleChangeSwitch("dangChieu")} />
      </Form.Item>
      <Form.Item label="Sắp Chiếu">
        <Switch name="sapChieu" onChange={handleChangeSwitch("sapChieu")} />
      </Form.Item>
      <Form.Item label="Hot">
        <Switch name="hot" onChange={handleChangeSwitch("hot")} />
      </Form.Item>

      <Form.Item label="Số Sao">
        <InputNumber
          onChange={handleChangeInputNumber("danhGia")}
          min={1}
          max={10}
        />
      </Form.Item>
      <Form.Item label="Hình Ảnh">
        <input type="file" onChange={handleChangeFile} />
        <br />
        <img style={{ width: 150, height: 150 }} src={imgSrc} alt="..." />
      </Form.Item>

      <Form.Item label="Tác vụ">
        <button type="submit" className="bg-blue-300 text-black p-2">
          Thêm
        </button>
      </Form.Item>
    </Form>
  );
};
export default AddNew;
