// import React, { Component } from "react";
// import {
//   Card,
//   CardBody,
//   Col,
//   Form,
//   Row,
//   Input,
//   Label,
//   Button,
//   FormGroup,
// } from "reactstrap";
// import axiosConfig from "../../../axiosConfig";
// // import { useParams } from "react-router-dom";
// //import { ToastContainer, toast } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";
// import { Route } from "react-router-dom";
// import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";

// import { data } from "jquery";
// export class AddPackage extends Component {
//   state = {
//     activeTab: "1",
//   };

//   toggle = (tab) => {
//     this.setState({
//       activeTab: tab,
//     });
//   };

//   onChangeHandler = (event) => {
//     this.setState({ selectedFile: event.target.files[0] });
//     this.setState({ selectedName: event.target.files[0].name });
//     console.log(event.target.files[0]);
//   };

//   componentDidMount() {
//     console.log(this.props.match.params);
//     let { id } = this.props.match.params;
//     axiosConfig.get(`/getonecustomer/${id}`).then((response) => {
//       console.log(response);
//       this.setState({
//         first_name: "",
//         last_name: "",
//         customer_email: "",
//         mobile_no: "",
//         sortorder: "",
//         selectedFile: null,
//         status: response.data.data.status,
//       });
//     });
//     //   .catch((error) => {
//     //     console.log(error);
//     //   });
//   }

//   changeHandler1 = (e) => {
//     this.setState({ status: e.target.value });
//   };
//   changeHandler = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   submitHandler = (e) => {
//     e.preventDefault();
//     console.log(this.props.match.params, this.state);
//     // const data = new FormData();
//     // data.append("sellerId", this.state.sellerId);
//     // data.append("seller_name", this.state.seller_name);
//     // data.append("selleremail", this.state.selleremail);
//     // data.append("mobile_no", this.state.mobile_no);
//     // data.append("password", this.state.password);
//     // data.append("business_type", this.state.business_type);
//     // data.append("store_name", this.state.store_name);
//     // data.append("store_address", this.state.store_address);
//     // data.append("gstin_no", this.state.gstin_no);
//     // data.append("city", this.state.city);
//     // data.append("sortorder", this.state.sortorder);
//     // data.append("state", this.state.state);
//     // data.append("status", this.state.status);
//     // if (this.state.selectedFile !== null) {
//     //   data.append(
//     //     "seller_img",
//     //     this.state.selectedFile,
//     //     this.state.selectedName
//     //   );
//     // }

//     let { id } = this.props.match.params;
//     axiosConfig
//       .post(`/view_onecust/${id}`, data)
//       .then((response) => {
//         console.log(response);
//         this.props.history.push("/app/customer/customerList");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   render() {
//     return (
//       <div>
//         <Breadcrumbs
//           breadCrumbTitle="Add Package"
//           breadCrumbParent="Home"
//           breadCrumbActive="Add Package "
//         />
//         <Card>
//           <Row className="m-2">
//             <Col>
//               <h1 col-sm-6 className="float-left">
//                 Add Package
//               </h1>
//             </Col>
//             <Col>
//               <Route
//                 render={({ history }) => (
//                   <Button
//                     className=" btn btn-danger float-right"
//                     onClick={() => history.push("/app/customer/customerList")}
//                   >
//                     Back
//                   </Button>
//                 )}
//               />
//             </Col>
//           </Row>
//           <CardBody>
//             <Form className="m-1" onSubmit={this.submitHandler}>
//               <Row>
//                 <Col lg="4" md="4" sm="4" className="mb-2">
//                   <Label>Title</Label>
//                   <Input
//                     required
//                     type="text"
//                     name="title"
//                     placeholder="Enter Title"
//                     value={this.state.title}
//                     onChange={this.changeHandler}
//                   ></Input>
//                 </Col>
//                 <Col lg="4" md="4" sm="4" className="mb-2">
//                   <Label>MRP</Label>
//                   <Input
//                     required
//                     type="text"
//                     name="mrp"
//                     placeholder="Enter MRP"
//                     value={this.state.mrp}
//                     onChange={this.changeHandler}
//                   ></Input>
//                 </Col>
//                 <Col lg="4" md="4" sm="4" className="mb-2">
//                   <Label>Offer Price</Label>
//                   <Input
//                     required
//                     type="text"
//                     name="offer_price"
//                     placeholder="Enter Offer Price"
//                     value={this.state.offer_price}
//                     onChange={this.changeHandler}
//                   ></Input>
//                 </Col>
//                 <Col lg="4" md="4" sm="4" className="mb-2">
//                   <Label>Thumnail image1</Label>
//                   <Input
//                     required
//                     type="file"
//                     name="last_name"
//                     className="form-control"
//                     placeholder="Enter Last Name"
//                     value={this.state.last_name}
//                     onChange={this.changeHandler}
//                   ></Input>
//                 </Col>
//                 <Col lg="4" md="4" sm="4" className="mb-2">
//                   <Label>Thumnail image2</Label>
//                   <Input
//                     required
//                     type="file"
//                     name="last_name"
//                     className="form-control"
//                     placeholder="Enter Last Name"
//                     value={this.state.last_name}
//                     onChange={this.changeHandler}
//                   ></Input>
//                 </Col>
//                 <Col lg="4" md="4" sm="4" className="mb-2">
//                   <Label>Thumnail image3</Label>
//                   <Input
//                     required
//                     type="file"
//                     name="last_name"
//                     className="form-control"
//                     placeholder="Enter Last Name"
//                     value={this.state.last_name}
//                     onChange={this.changeHandler}
//                   ></Input>
//                 </Col>

//                 <Col lg="12" md="12" sm="12" className="mb-2">
//                   <Label>Description</Label>
//                   <textarea
//                     className="form-control"
//                     placeholder="Description..."
//                   ></textarea>
//                 </Col>
//               </Row>
//               <Col lg="6" md="6" sm="6" className="mb-2">
//                 <Label className="mb-1">Status</Label>
//                 <div
//                   className="form-label-group"
//                   onChange={(e) => this.changeHandler1(e)}
//                 >
//                   <input
//                     style={{ marginRight: "3px" }}
//                     type="radio"
//                     name="status"
//                     value="Active"
//                   />
//                   <span style={{ marginRight: "20px" }}>Active</span>

//                   <input
//                     style={{ marginRight: "3px" }}
//                     type="radio"
//                     name="status"
//                     value="Inactive"
//                   />
//                   <span style={{ marginRight: "3px" }}>Inactive</span>
//                 </div>
//               </Col>
//               <Row>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Button.Ripple
//                     color="primary"
//                     type="submit"
//                     className="mr-1 mb-1"
//                   >
//                     Save
//                   </Button.Ripple>
//                 </Col>
//               </Row>
//             </Form>
//           </CardBody>
//         </Card>
//       </div>
//     );
//   }
// }
// export default AddPackage;
import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  CustomInput,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
// import { history } from "../../../../history";
import swal from "sweetalert";
import { Route } from "react-router-dom";

export default class AddPackage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      mrp_price: "",
      offer_price: "",
      image: "",
      selectedFile: undefined,
      selectedName: "",
    };
  }
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files });
    this.setState({ selectedName: event.target.files.name });
    console.log(event.target.files);
  };
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    console.log(this.state.root);
    e.preventDefault();
    const data = new FormData();
    data.append("title", this.state.title);
    data.append("offer_price", this.state.offer_price);
    data.append("mrp_price", this.state.mrp_price);

    for (const file of this.state.selectedFile) {
      if (this.state.selectedFile !== null) {
        data.append("image", file, file.name);
      }
    }
    for (var value of data.values()) {
      console.log(value);
    }
    for (var key of data.keys()) {
      console.log(key);
    }

    axiosConfig
      .post("admin/addPackage", data)
      // headers: { )
      //   "auth-adtoken": localStorage.getItem("auth-adtoken"),
      // },

      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/poojapackage/packageList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Row>
          <Col sm="12">
            <div>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="/analyticsDashboard" tag="a">
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem href="/app/poojapackage/packageList" tag="a">
                  Package List
                </BreadcrumbItem>
                <BreadcrumbItem active>Add Package</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Package
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-success float-right"
                    onClick={() =>
                      history.push("/app/poojapackage/packageList")
                    }
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Title</Label>
                  <Input
                    required
                    type="text"
                    name="title"
                    placeholder=""
                    value={this.state.title}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>MRP Price</Label>
                  <Input
                    type="text"
                    name="mrp_price"
                    placeholder=""
                    value={this.state.mrp_price}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Offer Price</Label>
                  <Input
                    type="text"
                    name="offer_price"
                    placeholder=""
                    value={this.state.offer_price}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Image</Label>
                  <CustomInput
                    type="file"
                    multiple
                    onChange={this.onChangeHandler}
                  />
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label className="mb-1">Status</Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => this.changeHandler1(e)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Active"
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Inactive"
                    />
                    <span style={{ marginRight: "3px" }}>Inactive</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
