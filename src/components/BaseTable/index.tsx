import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
import cx from 'classnames'

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

const Filters = (props: any) => {
  return (
    <>
    {props.fields.map(({ label, values }: any) =>
      <Col sm="6" lg="2">
        <SelectFilter label={label} options={values} />
      </Col>
    )}
    </>
  )
}

const UtilBtns = (props: any) => {
  return (
    <>
      {props.fields.map(({ icon, text }: any) => {
        return (
          <Button className="utils__btn--outlined">
            <i className={`bi ${icon} utils__btn-icon`}></i>
            {text && <span className="utils__btn-text">{text}</span>}
          </Button>
        )
      })}
    </>
  )
}

const Searchbar = () => {
  return (
    <>
      <InputGroup className="mb-2">
        <FormControl id="inlineFormInputGroup" placeholder="Type to search" />
        <InputGroup.Prepend>
          <InputGroup.Text className="searchbar__icon">
              <i className="bi bi-search"></i>
          </InputGroup.Text>
        </InputGroup.Prepend>
      </InputGroup>
    </>
  )
}

function BaseTable() {
  const isLgScreen = useMediaQuery({ query: '(min-width: 786px)' })

  return (
    <Container fluid className={cx('basetable', {'basetable-large': isLgScreen})}>
      <Row>
        <Col sm="12" lg="2">
          <h2>Lead lists</h2>
        </Col>
        <Col lg={{span: 3, offset: 7}}
          md="12"
        >
          <Searchbar />
        </Col>
      </Row>
      <Row>
        <Filters fields={[
            {label: "Display", values: ["My Leads",2,3,4,5]},
            {label: "Folder", values: ["All",2,3,4,5]}
          ]} 
        />
        <Col sm="12" lg="8" className="d-flex justify-content-end pe-0">
          <UtilBtns fields={[
              {text: "Create Folder", icon: "bi-plus-lg"},
              {text: "Export Leads", icon: "bi-upload"},
              {icon: "bi-folder-fill"},
              {icon: "bi-trash2-fill"},
            ]} 
          />
        </Col>
      </Row>
    </Container>
  )
}

export default BaseTable
