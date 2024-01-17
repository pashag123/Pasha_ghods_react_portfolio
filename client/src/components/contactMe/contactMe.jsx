import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function BasicExample() {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
        <Form.Control
          placeholder="Name"
          aria-label="Name"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="email"
          aria-label="email"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
      </InputGroup>

      
      <InputGroup>
        <InputGroup.Text>With textarea</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
    </>
  );
}

export default BasicExample;