import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';

class Idcardmodal extends React.Component {
  state = {
    open: false,
  };

 onOpenModal = () => {
    this.setState({ open: true });
  };

onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Simple centered modal</h2>
        </Modal>
      </div>
    );
  }
}


