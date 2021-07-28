const messageContainer = document.querySelector(".main__empty--container");
const eventBoxContainer = document.querySelector(".main__box--container");
const eventCharCode = document.getElementById("char-code");
const eventCode = document.getElementById("code");
const eventKey = document.getElementById("key");
const eventKeyCode = document.getElementById("key-code");
const eventCtrlKey = document.getElementById("ctrl-key");
const eventShiftKey = document.getElementById("shift-key");
const eventAltKey = document.getElementById("alt-key");
const actionInformationContainer = document.querySelector(
  ".action__information",
);
const actionInformationValue = document.querySelector(
  ".action__information--value",
);
const eventBoxes = document.querySelectorAll(".main__box");

const eventDetails = {
  charCode:
    "Returns a Number representing the Unicode reference number of the key",
  code: "Returns a DOMString with the code value of the physical key represented by the event.",
  key: "Returns a DOMString representing the key value of the key represented by the event.",
  keyCode:
    "Returns a Number representing a system and implementation dependent numerical code identifying the unmodified value of the pressed key.",
  ctrlKey:
    "Returns a boolean value that is true if the Ctrl key was active when the key event was generated.",
  shiftKey:
    "Returns a boolean value that is true if the Shift key was active when the key event was generated.",
  altKey:
    "Returns a boolean value that is true if the Alt (Option or ⌥ on OS X) key was active when the key event was generated.",
};

window.addEventListener("keydown", function (e) {
  e.preventDefault();
  messageContainer.classList.add("message-hide");
  eventBoxContainer.classList.add("content-show");
  actionInformationContainer.classList.add("content-show");
  const { altKey, charCode, code, ctrlKey, key, keyCode, shiftKey } = e;
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
    const eventBoxValue = this.getAttribute("value");
    actionInformationValue.textContent = eventDetails[eventBoxValue];
  });
});
