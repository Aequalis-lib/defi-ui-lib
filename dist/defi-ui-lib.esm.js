import { useState, useEffect, createElement, Fragment } from 'react';
import { Modal } from 'react-bootstrap';
import Loader from 'react-loader-spinner';

var TransactionModal = function TransactionModal(props) {
  var _React$useState = useState('success'),
      mode = _React$useState[0],
      setMode = _React$useState[1];

  useEffect(function () {
    setMode('success');
  }, []);

  function transactionMethods() {
    switch (mode) {
      case 'success':
        return createElement(Fragment, null, createElement(Modal, Object.assign({
          className: "modal-transaction-" + props.theme,
          centered: true
        }, props), createElement(Modal.Header, {
          className: "modal-header-custom",
          closeButton: true
        }, createElement(Modal.Title, {
          className: "model-title-custom"
        })), createElement(Modal.Body, {
          className: "custom-modal-body"
        }, createElement("div", {
          className: "modal-body-info"
        }, createElement("div", {
          className: "pb-1 pt-0"
        }, createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "90",
          height: "90",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "#2a6def",
          style: {
            strokeWidth: '0.5',
            strokeLinecap: 'round',
            strokeLinejoin: 'round'
          }
        }, createElement("circle", {
          cx: "12",
          cy: "12",
          r: "10"
        }), createElement("polyline", {
          points: "16 12 12 8 8 12"
        }), createElement("line", {
          x1: "12",
          y1: "16",
          x2: "12",
          y2: "8"
        }))), createElement("div", {
          className: "transaction-details"
        }, createElement("div", {
          className: " transaction-status "
        }, "Transaction Submitted"), createElement("a", {
          target: "_blank",
          rel: "noopener noreferrer",
          href: "/viewonetherscan",
          className: "sc-jKJlTe cEMwVc"
        }, createElement("div", {
          className: "etherscan-link"
        }, "View on Explorer"))), createElement("button", {
          className: "custom-transaction-btn btn btn-primary mt-4",
          onClick: props.onHide,
          type: "button"
        }, "Close")))));

      case 'loading':
        return createElement(Fragment, null, createElement(Modal, Object.assign({
          className: "modal-transaction-" + props.theme
        }, props, {
          centered: true,
          animation: false,
          size: "md"
        }), createElement(Modal.Header, {
          className: "modal-header-custom",
          closeButton: true
        }, createElement(Modal.Title, {
          className: "model-title-custom"
        })), createElement(Modal.Body, null, createElement("div", {
          className: "modal-body-info"
        }, createElement("div", {
          style: {
            margin: ' 25px 0'
          }
        }, createElement(Loader, {
          type: "Circles",
          color: "" + (props.theme === 'dark' ? '#800080' : '#800080'),
          height: 100,
          width: 100
        })), createElement("h4", {
          className: "mt-4"
        }, "Waiting For Confirmation"), createElement("p", null, "Confirm this transaction in your wallet")))));

      case 'failure':
        return createElement(Fragment, null, createElement(Modal, Object.assign({
          className: "modal-transaction-" + props.theme
        }, props, {
          centered: true,
          animation: false,
          size: "md"
        }), createElement(Modal.Header, {
          className: "modal-header-custom",
          closeButton: true
        }, createElement(Modal.Title, {
          className: "model-title-custom"
        }, "Error")), createElement(Modal.Body, null, createElement("div", {
          className: "modal-body-info"
        }, createElement("img", {
          className: "icon",
          src: '',
          alt: "alert icon",
          width: "85"
        }), createElement("h5", {
          className: "mt-4"
        }, "Transaction Rejected"), createElement("button", {
          className: "btn btn-primary custom-transaction-btn",
          onClick: props.onHide,
          type: "button"
        }, "Close")))));

      default:
        return createElement(Fragment, null);
    }
  }

  return createElement("div", null, transactionMethods());
};

export default TransactionModal;
//# sourceMappingURL=defi-ui-lib.esm.js.map
