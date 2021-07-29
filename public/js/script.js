"use strict";

var messageContainer = document.querySelector(".main__empty--container");
var eventBoxContainer = document.querySelector(".main__box--container");
var eventCharCode = document.getElementById("char-code");
var eventCode = document.getElementById("code");
var eventKey = document.getElementById("key");
var eventKeyCode = document.getElementById("key-code");
var eventCtrlKey = document.getElementById("ctrl-key");
var eventShiftKey = document.getElementById("shift-key");
var eventAltKey = document.getElementById("alt-key");
var actionInformationContainer = document.querySelector(".action__information");
var actionInformationValue = document.querySelector(".action__information--value");
var eventBoxes = document.querySelectorAll(".main__box");
var eventDetails = {
  charCode: "Returns a Number representing the Unicode reference number of the key",
  code: "Returns a DOMString with the code value of the physical key represented by the event.",
  key: "Returns a DOMString representing the key value of the key represented by the event.",
  keyCode: "Returns a Number representing a system and implementation dependent numerical code identifying the unmodified value of the pressed key.",
  ctrlKey: "Returns a boolean value that is true if the Ctrl key was active when the key event was generated.",
  shiftKey: "Returns a boolean value that is true if the Shift key was active when the key event was generated.",
  altKey: "Returns a boolean value that is true if the Alt (Option or ⌥ on OS X) key was active when the key event was generated."
};
window.addEventListener("keydown", function (e) {
  e.preventDefault();
  messageContainer.classList.add("message-hide");
  eventBoxContainer.classList.add("content-show");
  actionInformationContainer.classList.add("content-show");
  var altKey = e.altKey,
      charCode = e.charCode,
      code = e.code,
      ctrlKey = e.ctrlKey,
      key = e.key,
      keyCode = e.keyCode,
      shiftKey = e.shiftKey;
  eventAltKey.textContent = altKey;
  eventCharCode.textContent = charCode;
  eventCode.textContent = code;
  eventCtrlKey.textContent = ctrlKey;
  eventKey.textContent = key;
  eventKeyCode.textContent = keyCode;
  eventShiftKey.textContent = shiftKey;
});
eventBoxes.forEach(function (eventBox) {
  eventBox.addEventListener("mouseover", function () {
    var eventBoxValue = this.getAttribute("value");
    actionInformationValue.textContent = eventDetails[eventBoxValue];
  });
});
eventBoxes.forEach(function (eventBox) {
  eventBox.addEventListener("click", function () {
    var copyValue = this.children[1].textContent;
    copyToClipboard(copyValue);
    document.querySelector(".copied__notification").classList.add("copy-notification-show");
    setTimeout(function () {
      document.querySelector(".copied__notification").classList.remove("copy-notification-show");
    }, 1000);
  });
});

function copyToClipboard(copyValue) {
  var textarea = document.createElement("textarea");
  textarea.value = copyValue;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}