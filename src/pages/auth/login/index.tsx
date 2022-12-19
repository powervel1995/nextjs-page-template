import { FC } from 'react';
import { Form } from 'react-bootstrap';
import Styles from '../auth.module.css';

interface PageProps {}

const index: FC<PageProps> = () => {
  return (
    <>
      {' '}
      <div className={Styles.Auth_form_container}>
        <form className={Styles.Auth_form}>
          <div className={Styles.Auth_form_content}>
            <h3 className={Styles.Auth_form_title}>Sign In</h3>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>

            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default index;
