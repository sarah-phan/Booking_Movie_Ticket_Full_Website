import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useFormik } from "formik";

import { Form, Input, Button, Checkbox, Cascader, Select } from "antd";

import { DatePicker } from "antd";

import { InputNumber } from "antd";

import { actFetchHeThongRap } from "../../../reducer/ModuleHeThongRapChieu/DanhSachHeThongRapChieu/action";
import { actFetchListCumRap } from "../../../reducer/ModuleHeThongRapChieu/DanhSachCumRapChieu/action";
import { actAddLichChieuMovie } from "./module/action";
import moment from "moment";

export default function ShowTimeAdmin(props) {
  // const [state, setState] = useState({
  //   hethongRapChieu: [],
  //   cumRapChieu: [],
  // });

  const formik = useFormik({
    initialValues: {
      maPhim: props.match.params.id,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: "",
    },
    onSubmit: (values) => {
      // console.log("values", values);
      dispatch(actAddLichChieuMovie(values, props.history));
    },
  });

  const { idHeThong } = props;

  const dataHeThong = useSelector(
    (state) => state.listHeThongRapReducer.dataHeThongRap
  );
  const cumRapChieu = useSelector(
    (state) => state.listCumRapReducer.dataCumRap
  );
  // console.log("dataHeThong", dataHeThong);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchHeThongRap());
  }, []);

  // useEffect(() => {
  //   dispatch(actFetchListCumRap(idHeThong));
  // }, [idHeThong]);

  const convertSelectHTR = () => {
    // state.heThongRapChieu?.map((htr, index) => ({ label: htr.tenHeThongRap, value: htr.tenHeThongRap }))
    return dataHeThong?.map((htr, index) => {
      return { label: htr.tenHeThongRap, value: htr.maHeThongRap };
    });
  };

  const handleChangeHeThongRap = (value) => {
    dispatch(actFetchListCumRap(value));
    // console.log("cumRapChieu", cumRapChieu);
  };

  const handleChangeCumRap = (value) => {
    formik.setFieldValue("maRap", value);
  };

  const onOk = (values) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(values).format("DD/MM/YYYY hh:mm:ss")
    );
    // console.log("values", moment(values).format("DD/MM/YYYY hh:mm:ss"));
  };
  const onChangeDate = (values) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(values).format("DD/MM/YYYY hh:mm:ss")
    );
    // console.log("values", moment(values).format("DD/MM/YYYY hh:mm:ss"));
  };
  const onChangeInputNumber = (values) => {
    formik.setFieldValue("giaVe", values);
  };

  return (
    <div className="container">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onSubmitCapture={formik.handleSubmit}
      >
        <h3 className="text-2xl">T???o L???ch Chi???u</h3>
        <Form.Item label="H??? th???ng r???p">
          <Select
            options={convertSelectHTR()}
            onChange={handleChangeHeThongRap}
            placeholder="H??? th???ng r???p"
          />
        </Form.Item>
        <Form.Item label="C???m r???p">
          <Select
            options={cumRapChieu?.map((cumRap, index) => ({
              label: cumRap.tenCumRap,
              value: cumRap.maCumRap,
            }))}
            onChange={handleChangeCumRap}
            placeholder="Ch???n C???m r???p"
          />
        </Form.Item>
        <Form.Item label="Ng??y Chi???u Gi??? Chi???u">
          <DatePicker
            format="DD/MM/YYYY hh:mm:ss"
            showTime
            onChange={onChangeDate}
            onOk={onOk}
          />
        </Form.Item>
        <Form.Item label="Gi?? V??">
          <InputNumber onChange={onChangeInputNumber} />
        </Form.Item>
        <Form.Item label="Ch???c N??ng">
          <Button htmlType="submit">T???o L???ch Chi???u </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
