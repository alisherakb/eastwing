import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';
import emailjs from 'emailjs-com';

const Section = styled.section`
  flex-direction: column;
  display: flex;
  background-color: white;
`;

const Careers = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [uploadedFile, setUploadedFile] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isApplied, setIsApplied] = useState(false);
  const onDrop = useCallback((acceptedFiles) => {
    setUploadedFile(acceptedFiles);
  }, []);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    multiple: false,
    onDrop,
  });

  const onChangeName = (value) => {
    setName(value);
    setErrorMessage('');
  };
  const onChangeEmail = (value) => {
    setEmail(value);
    setErrorMessage('');
  };

  const applicantData = {
    from_name: name,
    from_email: email,
    message_html: 'Attachments is not supported yet.',
  };

  const sendEmail = () => {
    if (name && email !== '') {
      if (email.match(/.+@.+/)) {
        emailjs
          .send(
            'EastWing',
            'resume',
            applicantData,
            'user_pKAPh7n9Ffuun7A4pHxrS'
          )
          .then(
            (result) => {
              if (result.text === 'OK') {
                setIsApplied(true);
              }
            },
            (error) => {
              console.log(error.text);
            }
          );
      } else {
        setErrorMessage('Email is not valid');
      }
    } else {
      setErrorMessage('Fields are not filled. Fill and try again');
    }
  };

  return (
    <Section id="careers">
      <div className="Careers-header">
        <div className="Careers-header-content">
          <span>Work with us!</span>
          <div />
        </div>
      </div>
      <div className="Careers-body">
        <span className="Careers-body-h1">
          Are you passionate about aviation and would like to join our team?
        </span>
        <span className="Careers-body-h2">
          We look forward to receiving your resumes.
        </span>
        <div className="Careers-body-main">
          <img alt="" src={require('../assets/img/careers.png')} />
          <div />
          {!isApplied ? (
            <div className="Careers-body-main-formsContainer">
              <input
                onChange={(event) => onChangeName(event.target.value)}
                type="text"
                placeholder={'First Name'}
              />
              <input
                style={{ marginTop: 24 }}
                type="text"
                onChange={(event) => onChangeEmail(event.target.value)}
                placeholder={'Email'}
              />
              <div
                style={{
                  backgroundColor: !uploadedFile ? 'transparent' : '#E8F1FC',
                  borderColor: !uploadedFile ? '#0a2246' : 'transparent',
                }}
                {...getRootProps({
                  className: 'Careers-body-main-formsContainer-drop',
                })}
              >
                <input {...getInputProps()} />
                <img
                  src={
                    !uploadedFile
                      ? require('../assets/img/upload-icon.svg')
                      : require('../assets/img/uploaded-icon.svg')
                  }
                />
                <p style={{ color: !uploadedFile ? '#0a2246' : '#3283E6' }}>
                  {!uploadedFile
                    ? 'Drag file here your CV'
                    : `${uploadedFile[0].name}`}
                </p>
              </div>
              {errorMessage !== '' ? (
                <div className="Careers-body-main-formsContainer-errorMessage">
                  <span>{errorMessage}</span>
                </div>
              ) : (
                <div />
              )}
              <button onClick={sendEmail}>
                <span>Apply</span>
              </button>
            </div>
          ) : (
            <div className="Careers-body-main-success">
              <img src={require('../assets/img/success-icon.svg')} />{' '}
              <span>
                Thanks for your application. Our team will contact you shortly
              </span>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Careers;
