import {
  Col,
  Container,
  Form,
  Row,
} from 'react-bootstrap'
import './BaseTable.sass'

const data = [{
  name: "Ronald Neck",
  linkedIn: "",
  skills: ["E-commerce", "Magento Developer", "Information tech & services"],
  location: "",
  experiences: [
    {
      type: "work",
      title: "Magento Developer",
      organization: "Openware Computing",
      span: "2012 - Present",
    },
    {
      type: "school",
      title: "Magento Developer",
      organization: "Openware Computing",
      span: "2010 - 2012",
    },
  ],
  contact: {
    emails: ["email1@email.com", "email2@email.com"],
    phone: ["+61 1233211234", "+61 1233211235"]
  },
  notes: {
    date: "06/14/2021",
    note: []
  }
}]

const SelectFilter = (props: any) => {
  return (
    <Form.Group>
      <Form.Label className="filter__label">{props.label}</Form.Label>
      <select>
        {props.options.map((v: any) =>
          <option>{v}</option>
        )}
      </select>
    </Form.Group>
  )
}

function BaseTable() {
  return (
    <Container fluid>
      <h2>Lead lists</h2>
      <Row>
        <Col sm="2">
          <SelectFilter label="Display" options={["My Leads",2,3,4,5]} />
        </Col>
        <Col sm="2">
          <SelectFilter label="Folder" options={["All",2,3,4,5]} />
        </Col>
      </Row>
    </Container>
  )
}

export default BaseTable
