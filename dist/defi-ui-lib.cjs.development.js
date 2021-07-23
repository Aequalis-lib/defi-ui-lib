'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var reactBootstrap = require('react-bootstrap');
var Loader = _interopDefault(require('react-loader-spinner'));

var TransactionModal = function TransactionModal(props) {
  var _React$useState = React.useState('success'),
      mode = _React$useState[0],
      setMode = _React$useState[1];

  React.useEffect(function () {
    setMode('success');
  }, []);

  function transactionMethods() {
    switch (mode) {
      case 'success':
        return React.createElement(React.Fragment, null, React.createElement(reactBootstrap.Modal, Object.assign({
          className: "modal-transaction-" + props.theme,
          centered: true
        }, props), React.createElement(reactBootstrap.Modal.Header, {
          className: "modal-header-custom",
          closeButton: true
        }, React.createElement(reactBootstrap.Modal.Title, {
          className: "model-title-custom"
        })), React.createElement(reactBootstrap.Modal.Body, {
          className: "custom-modal-body"
        }, React.createElement("div", {
          className: "modal-body-info"
        }, React.createElement("div", {
          className: "pb-1 pt-0"
        }, React.createElement("svg", {
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
        }, React.createElement("circle", {
          cx: "12",
          cy: "12",
          r: "10"
        }), React.createElement("polyline", {
          points: "16 12 12 8 8 12"
        }), React.createElement("line", {
          x1: "12",
          y1: "16",
          x2: "12",
          y2: "8"
        }))), React.createElement("div", {
          className: "transaction-details"
        }, React.createElement("div", {
          className: " transaction-status "
        }, "Transaction Submitted"), React.createElement("a", {
          target: "_blank",
          rel: "noopener noreferrer",
          href: "/viewonetherscan",
          className: "sc-jKJlTe cEMwVc"
        }, React.createElement("div", {
          className: "etherscan-link"
        }, "View on Explorer"))), React.createElement("button", {
          className: "custom-transaction-btn btn btn-primary mt-4",
          onClick: props.onHide,
          type: "button"
        }, "Close")))));

      case 'loading':
        return React.createElement(React.Fragment, null, React.createElement(reactBootstrap.Modal, Object.assign({
          className: "modal-transaction-" + props.theme
        }, props, {
          centered: true,
          animation: false,
          size: "md"
        }), React.createElement(reactBootstrap.Modal.Header, {
          className: "modal-header-custom",
          closeButton: true
        }, React.createElement(reactBootstrap.Modal.Title, {
          className: "model-title-custom"
        })), React.createElement(reactBootstrap.Modal.Body, null, React.createElement("div", {
          className: "modal-body-info"
        }, React.createElement("div", {
          style: {
            margin: ' 25px 0'
          }
        }, React.createElement(Loader, {
          type: "Circles",
          color: "" + (props.theme === 'dark' ? '#800080' : '#800080'),
          height: 100,
          width: 100
        })), React.createElement("h4", {
          className: "mt-4"
        }, "Waiting For Confirmation"), React.createElement("p", null, "Confirm this transaction in your wallet")))));

      case 'failure':
        return React.createElement(React.Fragment, null, React.createElement(reactBootstrap.Modal, Object.assign({
          className: "modal-transaction-" + props.theme
        }, props, {
          centered: true,
          animation: false,
          size: "md"
        }), React.createElement(reactBootstrap.Modal.Header, {
          className: "modal-header-custom",
          closeButton: true
        }, React.createElement(reactBootstrap.Modal.Title, {
          className: "model-title-custom"
        }, "Error")), React.createElement(reactBootstrap.Modal.Body, null, React.createElement("div", {
          className: "modal-body-info"
        }, React.createElement("img", {
          className: "icon",
          src: '',
          alt: "alert icon",
          width: "85"
        }), React.createElement("h5", {
          className: "mt-4"
        }, "Transaction Rejected"), React.createElement("button", {
          className: "btn btn-primary custom-transaction-btn",
          onClick: props.onHide,
          type: "button"
        }, "Close")))));

      default:
        return React.createElement(React.Fragment, null);
    }
  }

  return React.createElement("div", null, transactionMethods());
};

exports.default = TransactionModal;
//# sourceMappingURL=defi-ui-lib.cjs.development.js.map
