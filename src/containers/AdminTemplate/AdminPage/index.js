import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  FileOutlined,
} from "@ant-design/icons";
import "./index.css";
import { NavLink, Route } from "react-router-dom";
import ShowTimeAdmin from "../ShowTime";
import FilmsAdmin from "../Films";
import UsersAdmin from "../Users";
import AddNew from "../Films/AddNew/AddNew";
import SubMenu from "antd/lib/menu/SubMenu";
import EditFilm from "../Films/EditFilm/EditFilm";

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div className=" bg-light ">
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                <NavLink to="/admin/users">Users</NavLink>
              </Menu.Item>
              <SubMenu key="sub1" icon={<FileOutlined />} title="Films">
                <Menu.Item key="10" icon={<VideoCameraOutlined />}>
                  <NavLink to="/admin/films">Films</NavLink>
                </Menu.Item>
                <Menu.Item key="11" icon={<VideoCameraOutlined />}>
                  <NavLink to="/admin/films/addnew">Add New</NavLink>
                </Menu.Item>
              </SubMenu>

              <Menu.Item key="3" icon={<UploadOutlined />}>
                <NavLink to="/admin/showtime/">Showtime</NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle,
                }
              )}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 700,
              }}
            >
              <Breadcrumb style={{ margin: "16px 0" }}>
                {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
              </Breadcrumb>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: "85vh" }}
              >
                <Route
                  exact={true}
                  path="/admin/users"
                  // render={() => <div>Mlem admin users</div>}
                  // component={AdminUserComponent}
                  component={UsersAdmin}
                />
                <Route
                  exact={true}
                  path="/admin/films"
                  // render={() => <div>Mlem admin films</div>}
                  component={FilmsAdmin}
                />
                <Route
                  exact={true}
                  path="/admin/showtime"
                  // render={() => <div>Mlem admin showtimes</div>} // nếu anh muốn dùng component thì:
                  component={ShowTimeAdmin}
                />
                <Route
                  exact={true}
                  path="/admin/films/addnew"
                  // render={() => <div>Mlem admin showtimes</div>} // nếu anh muốn dùng component thì:
                  component={AddNew}
                />
                <Route
                  exact={true}
                  path="/admin/films/editfilm/:id"
                  // render={() => <div>Mlem admin showtimes</div>} // nếu anh muốn dùng component thì:
                  component={EditFilm}
                />
                <Route
                  exact={true}
                  path="/admin/films/showtime/:id"
                  // render={() => <div>Mlem admin showtimes</div>} // nếu anh muốn dùng component thì:
                  component={ShowTimeAdmin}
                />
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default function AdminPage() {
  return (
    <div>
      <SiderDemo />
    </div>
  );
}
