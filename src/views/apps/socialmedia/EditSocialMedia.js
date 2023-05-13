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
import swal from "sweetalert";
import { Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
export default class EditSocialMedia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select_sslmedia: "",
      url: "",
    };
  }

  async componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/admin/getone_socailMedia/${id}`)
      .then((response) => {
        this.setState({
          select_sslmedia: response.data.data.select_sslmedia,
          url: response.data.data.url,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeHandler = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();

    let { id } = this.props.match.params;
    axiosConfig
      .post(`/admin/edit_socailMedia/${id}`, this.state)
      .then((response) => {
        console.log("Editpost", response.data.data);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/media/socialmedia");
      })
      .catch((error) => {
        console.log(error.response.data);
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
                <BreadcrumbItem href="/app/media/socialmedia" tag="a">
                  SocialMedia List
                </BreadcrumbItem>
                <BreadcrumbItem active>Edit SocialMedia</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit SocialMedia
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/media/socialmedia")}
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
                  <Label>Media Name</Label>
                  <Input
                    readOnly
                    type="text"
                    name="select_sslmedia"
                    placeholder=""
                    value={this.state.select_sslmedia}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Link</Label>
                  <Input
                    required
                    type="text"
                    name="url"
                    value={this.state.url}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                    onClick={this.submitHandler}
                  >
                    Update
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
